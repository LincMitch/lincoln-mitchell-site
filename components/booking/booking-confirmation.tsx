"use client"

import { useState } from "react"
import { format, parseISO } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Loader2 } from "lucide-react"
import CheckoutButton from "@/components/payment/checkout-button"
import { useToast } from "@/components/ui/use-toast"

interface BookingConfirmationProps {
  eventType: any
  date: string
  time: any
  details: any
  onComplete: (result: any) => void
}

export function BookingConfirmation({ eventType, date, time, details, onComplete }: BookingConfirmationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [bookingCreated, setBookingCreated] = useState(false)
  const [bookingResult, setBookingResult] = useState<any>(null)
  const { toast } = useToast()

  const handleConfirmBooking = async () => {
    try {
      setIsSubmitting(true)
      setError(null)

      console.log("Creating booking with details:", {
        eventTypeId: eventType.id,
        start: details.start,
        end: details.end,
        name: details.name,
        email: details.email,
        notes: details.notes,
      })

      // Create the booking with Cal.com
      const response = await fetch("/api/cal/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventTypeId: eventType.id,
          start: details.start,
          end: details.end,
          name: details.name,
          email: details.email,
          notes: details.notes,
        }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to create booking")
      }

      console.log("Booking created successfully:", responseData)
      setBookingResult(responseData)
      setBookingCreated(true)

      // If there's no price, complete the booking immediately
      if (!eventType.price || eventType.price <= 0) {
        onComplete(responseData)
      }

      // Otherwise, we'll show the payment button
      toast({
        title: "Booking created",
        description: "Your booking has been created. Please complete payment to confirm.",
      })
    } catch (error) {
      console.error("Error confirming booking:", error)
      setError(error instanceof Error ? error.message : "Failed to confirm booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Review and Confirm</h2>
      <p className="text-muted-foreground">Please review your booking details before confirming.</p>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="font-medium">Service</h3>
            <p>{eventType.title}</p>
            <p className="text-sm text-muted-foreground">
              {eventType.length} minutes
              {eventType.price > 0 && ` • $${eventType.price} ${eventType.currency}`}
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium">Date & Time</h3>
            <p>{format(parseISO(date), "EEEE, MMMM d, yyyy")}</p>
            <p>{format(parseISO(time.time), "h:mm a")}</p>
          </div>

          <Separator />

          <div>
            <h3 className="font-medium">Your Information</h3>
            <p>{details.name}</p>
            <p>{details.email}</p>
            {details.notes && <p className="text-sm text-muted-foreground mt-2">{details.notes}</p>}
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="bg-destructive/10 p-4 rounded-md text-destructive flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-2">
        {!bookingCreated ? (
          <>
            {eventType.price > 0 && (
              <p className="text-sm text-muted-foreground">By clicking "Confirm Booking", you'll proceed to payment.</p>
            )}
            <Button onClick={handleConfirmBooking} disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Confirm Booking"
              )}
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              Your booking has been created. Please complete payment to confirm your appointment.
            </p>
            <CheckoutButton
              items={[
                {
                  name: eventType.title,
                  description: `Booking on ${format(parseISO(date), "MMM d, yyyy")} at ${format(parseISO(time.time), "h:mm a")}`,
                  amount: eventType.price,
                  quantity: 1,
                },
              ]}
              successUrl={`/booking/payment-success?bookingId=${bookingResult?.booking?.uid || "unknown"}`}
              cancelUrl={`/booking/payment-cancel?bookingId=${bookingResult?.booking?.uid || "unknown"}`}
              customerEmail={details.email}
              metadata={{ bookingId: bookingResult?.booking?.uid || "unknown" }}
              className="w-full"
            >
              Proceed to Payment
            </CheckoutButton>
          </>
        )}
      </div>
    </div>
  )
}

