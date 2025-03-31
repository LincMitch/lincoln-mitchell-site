"use client"

import { useState, useEffect } from "react"
import { format, addDays, startOfDay, isSameDay } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, CalendarIcon } from "lucide-react"

interface DateSelectorProps {
  eventTypeId: number
  onSelect: (date: string) => void
}

export function DateSelector({ eventTypeId, onSelect }: DateSelectorProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAvailableDates = async () => {
      try {
        setLoading(true)

        // For simplicity, we'll just check the next 30 days
        // In a real implementation, you might want to fetch this from the API
        const dates: Date[] = []
        const today = startOfDay(new Date())

        // Generate dates for the next 30 days
        for (let i = 1; i <= 30; i++) {
          dates.push(addDays(today, i))
        }

        setAvailableDates(dates)
      } catch (error) {
        console.error("Error fetching available dates:", error)
        setError("Failed to load available dates. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchAvailableDates()
  }, [eventTypeId])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
  }

  const handleContinue = () => {
    if (date) {
      onSelect(format(date, "yyyy-MM-dd"))
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[350px] w-full" />
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
    <div className="space-y-6">
      <div className="flex flex-col items-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          disabled={(date) => {
            // Disable dates in the past
            const today = startOfDay(new Date())
            if (date < today) return true

            // Disable dates that are not in the available dates array
            return !availableDates.some((availableDate) => isSameDay(availableDate, date))
          }}
          className="rounded-md border"
        />
      </div>

      {date && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-center">
            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
            <span>
              Selected: <strong>{format(date, "EEEE, MMMM d, yyyy")}</strong>
            </span>
          </div>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
      )}
    </div>
  )
}

