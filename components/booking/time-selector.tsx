"use client"

import { useState, useEffect } from "react"
import { format, parseISO } from "date-fns"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Clock } from "lucide-react"

interface TimeSelectorProps {
  eventTypeId: number
  date: string
  onSelect: (timeSlot: any) => void
}

export function TimeSelector({ eventTypeId, date, onSelect }: TimeSelectorProps) {
  const [timeSlots, setTimeSlots] = useState<any[]>([])
  const [selectedSlot, setSelectedSlot] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        setLoading(true)

        const response = await fetch(`/api/cal/availability?eventTypeId=${eventTypeId}&date=${date}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch time slots: ${response.status}`)
        }

        const data = await response.json()
        setTimeSlots(data.slots || [])
      } catch (error) {
        console.error("Error fetching time slots:", error)
        setError("Failed to load available time slots. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchTimeSlots()
  }, [eventTypeId, date])

  const handleTimeSelect = (slot: any) => {
    setSelectedSlot(slot)
  }

  const handleContinue = () => {
    if (selectedSlot) {
      onSelect(selectedSlot)
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
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

  if (timeSlots.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="mb-4">No available time slots for the selected date. Please choose another date.</p>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {timeSlots.map((slot, index) => {
          const startTime = parseISO(slot.time)

          return (
            <Button
              key={index}
              variant={selectedSlot === slot ? "default" : "outline"}
              className="h-12"
              onClick={() => handleTimeSelect(slot)}
            >
              {format(startTime, "h:mm a")}
            </Button>
          )
        })}
      </div>

      {selectedSlot && (
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="flex items-center space-x-2 text-center">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>
              Selected: <strong>{format(parseISO(selectedSlot.time), "h:mm a")}</strong>
            </span>
          </div>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      )}
    </div>
  )
}

