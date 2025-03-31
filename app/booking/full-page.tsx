"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Clock, CalendarIcon, AlertCircle, CheckCircle } from "lucide-react"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"

type BookingStep = "service" | "date" | "time" | "details" | "confirmation" | "success"

export default function FullBookingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialService = searchParams.get("service")

  const [currentStep, setCurrentStep] = useState<BookingStep>("service")
  const [eventTypes, setEventTypes] = useState<any[]>([])
  const [selectedEventType, setSelectedEventType] = useState<any>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [timeSlots, setTimeSlots] = useState<any[]>([])
  const [selectedTime, setSelectedTime] = useState<any>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [notes, setNotes] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [bookingResult, setBookingResult] = useState<any>(null)

  // Load event types
  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        setLoading(true)

        // For now, use mock data
        const mockEventTypes = [
          {
            id: 1,
            title: "30 Min Meeting",
            slug: "30min",
            length: 30,
            description: "Short consultation or quick meeting",
            price: 0.5,
            currency: "USD",
          },
          {
            id: 2,
            title: "60 Min Meeting",
            slug: "60min",
            length: 60,
            description: "Standard consultation session",
            price: 0.5,
            currency: "USD",
          },
          {
            id: 3,
            title: "Discovery Session",
            slug: "discovery",
            length: 90,
            description: "In-depth discovery and planning session",
            price: 0.5,
            currency: "USD",
          },
        ]

        setEventTypes(mockEventTypes)

        // If initialService is provided, auto-select it
        if (initialService) {
          const matchingEventType = mockEventTypes.find(
            (et) => et.slug === initialService || et.id.toString() === initialService,
          )

          if (matchingEventType) {
            setSelectedEventType(matchingEventType)
            setCurrentStep("date")
          }
        }
      } catch (error) {
        console.error("Error fetching event types:", error)
        setError("Failed to load services. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchEventTypes()
  }, [initialService])

  // Generate available dates when step is "date"
  useEffect(() => {
    if (currentStep === "date" && selectedEventType) {
      const today = new Date()
      const dates = []

      // Generate dates for the next 30 days
      for (let i = 1; i <= 30; i++) {
        const date = new Date()
        date.setDate(today.getDate() + i)
        dates.push(date)
      }

      setAvailableDates(dates)
    }
  }, [currentStep, selectedEventType])

  // Generate time slots when date is selected
  useEffect(() => {
    if (selectedDate && selectedEventType) {
      const slots = []
      const startHour = 9
      const endHour = 17
      const interval = 30 // minutes

      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
          const time = new Date(selectedDate)
          time.setHours(hour, minute, 0)

          // Only include times in the future
          if (time > new Date()) {
            slots.push({
              time: time.toISOString(),
            })
          }
        }
      }

      setTimeSlots(slots)
    }
  }, [selectedDate, selectedEventType])

  const handleServiceSelect = (eventType: any) => {
    setSelectedEventType(eventType)
    setCurrentStep("date")
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setCurrentStep("time")
    }
  }

  const handleTimeSelect = (timeSlot: any) => {
    setSelectedTime(timeSlot)
    setCurrentStep("details")
  }

  const validateDetails = () => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateDetails()) {
      setCurrentStep("confirmation")
    }
  }

  const handleBookingComplete = (result: any) => {
    setBookingResult(result)
    setCurrentStep("success")
  }

  const goBack = () => {
    switch (currentStep) {
      case "date":
        setCurrentStep("service")
        break
      case "time":
        setCurrentStep("date")
        break
      case "details":
        setCurrentStep("time")
        break
      case "confirmation":
        setCurrentStep("details")
        break
      default:
        break
    }
  }

  // Render service selection step
  const renderServiceStep = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )
    }

    if (error) {
      return (
        <div className="text-center p-8">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <p className="text-destructive mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      )
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {eventTypes.map((eventType) => (
          <Card key={eventType.id} className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>{eventType.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {eventType.length} minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{eventType.description || "No description available."}</p>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  {eventType.price > 0 ? (
                    <p>
                      ${eventType.price} {eventType.currency}
                    </p>
                  ) : (
                    <p>Free</p>
                  )}
                </div>
                <Button onClick={() => handleServiceSelect(eventType)}>Select</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // Render date selection step
  const renderDateStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={(date) => {
              // Disable dates in the past
              const today = new Date()
              today.setHours(0, 0, 0, 0)
              if (date < today) return true

              // Disable dates that are not in the available dates array
              return !availableDates.some(
                (availableDate) =>
                  availableDate.getDate() === date.getDate() &&
                  availableDate.getMonth() === date.getMonth() &&
                  availableDate.getFullYear() === date.getFullYear(),
              )
            }}
            className="rounded-md border"
          />
        </div>

        {selectedDate && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-center">
              <CalendarIcon className="h-5 w-5 text-muted-foreground" />
              <span>
                Selected: <strong>{format(selectedDate, "EEEE, MMMM d, yyyy")}</strong>
              </span>
            </div>
            <Button onClick={() => setCurrentStep("time")}>Continue</Button>
          </div>
        )}
      </div>
    )
  }

  // Render time selection step
  const renderTimeStep = () => {
    if (timeSlots.length === 0) {
      return (
        <div className="text-center p-8">
          <p className="mb-4">No available time slots for the selected date. Please choose another date.</p>
          <Button onClick={() => setCurrentStep("date")}>Go Back</Button>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {timeSlots.map((slot, index) => {
            const time = new Date(slot.time)

            return (
              <Button
                key={index}
                variant={selectedTime === slot ? "default" : "outline"}
                className="h-12"
                onClick={() => handleTimeSelect(slot)}
              >
                {format(time, "h:mm a")}
              </Button>
            )
          })}
        </div>

        {selectedTime && (
          <div className="flex flex-col items-center space-y-4 pt-4">
            <div className="flex items-center space-x-2 text-center">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>
                Selected: <strong>{format(new Date(selectedTime.time), "h:mm a")}</strong>
              </span>
            </div>
            <Button onClick={() => setCurrentStep("details")}>Continue</Button>
          </div>
        )}
      </div>
    )
  }

  // Render details form step
  const renderDetailsStep = () => {
    return (
      <div className="space-y-6">
        <div className="bg-muted p-4 rounded-md">
          <h3 className="font-medium mb-2">Booking Summary</h3>
          <p>
            <strong>Service:</strong> {selectedEventType.title}
          </p>
          <p>
            <strong>Date:</strong> {format(selectedDate!, "EEEE, MMMM d, yyyy")}
          </p>
          <p>
            <strong>Time:</strong> {format(new Date(selectedTime.time), "h:mm a")}
          </p>
          {selectedEventType.price > 0 && (
            <p>
              <strong>Price:</strong> ${selectedEventType.price} {selectedEventType.currency}
            </p>
          )}
        </div>

        <form onSubmit={handleDetailsSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john.doe@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requests or information"
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </div>
    )
  }

  // Render confirmation step
  const renderConfirmationStep = () => {
    // Calculate start and end times
    const startTime = new Date(selectedTime.time)
    const endTime = new Date(startTime)
    endTime.setMinutes(endTime.getMinutes() + selectedEventType.length)

    const bookingDetails = {
      name,
      email,
      notes,
      start: startTime.toISOString(),
      end: endTime.toISOString(),
    }

    return (
      <BookingConfirmation
        eventType={selectedEventType}
        date={selectedDate!.toISOString()}
        time={selectedTime}
        details={bookingDetails}
        onComplete={handleBookingComplete}
      />
    )
  }

  // Render success step
  const renderSuccessStep = () => {
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
        <p>
          Thank you for your booking. Your appointment has been confirmed for{" "}
          <strong>{format(selectedDate!, "EEEE, MMMM d, yyyy")}</strong> at{" "}
          <strong>{format(new Date(selectedTime.time), "h:mm a")}</strong>.
        </p>
        <p className="text-muted-foreground">A confirmation email has been sent to {email}.</p>
        <div className="pt-4 flex justify-center gap-4">
          <Button asChild>
            <a href="/">Return Home</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/booking">Book Another Appointment</a>
          </Button>
        </div>
      </div>
    )
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case "service":
        return renderServiceStep()
      case "date":
        return renderDateStep()
      case "time":
        return renderTimeStep()
      case "details":
        return renderDetailsStep()
      case "confirmation":
        return renderConfirmationStep()
      case "success":
        return renderSuccessStep()
      default:
        return renderServiceStep()
    }
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
        <p className="text-muted-foreground mb-8">
          Select a service, choose a time, and complete payment to secure your booking.
        </p>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              {currentStep !== "service" && currentStep !== "success" && (
                <Button variant="ghost" size="sm" onClick={goBack} className="mr-2">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back
                </Button>
              )}
              <div>
                <CardTitle>
                  {currentStep === "service" && "Select a Service"}
                  {currentStep === "date" && "Select a Date"}
                  {currentStep === "time" && "Select a Time"}
                  {currentStep === "details" && "Your Information"}
                  {currentStep === "confirmation" && "Confirm Booking"}
                  {currentStep === "success" && "Booking Confirmed"}
                </CardTitle>
                <CardDescription>
                  {currentStep === "service" && "Choose the type of appointment that best fits your needs"}
                  {currentStep === "date" && "Select a date for your appointment"}
                  {currentStep === "time" && "Choose an available time slot"}
                  {currentStep === "details" && "Provide your contact information"}
                  {currentStep === "confirmation" && "Review and confirm your booking details"}
                  {currentStep === "success" && "Your appointment has been successfully booked"}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>{renderStepContent()}</CardContent>
        </Card>
      </div>
    </div>
  )
}

