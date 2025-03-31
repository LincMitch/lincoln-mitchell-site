"use client"
import { useCalendarState } from "@react-stately/calendar"
import { useCalendar } from "@react-aria/calendar"
import { useLocale } from "@react-aria/i18n"
import { createCalendar } from "@internationalized/date"
import { CalendarGrid } from "./CalendarGrid"
import { Button } from "./Button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarProps {
  value?: Date
  onChange?: (date: Date) => void
  className?: string
  minValue?: Date
  maxValue?: Date
}

export function Calendar({ value, onChange, className = "", minValue, maxValue }: CalendarProps) {
  const { locale } = useLocale()

  // Convert JavaScript Date to internationalized date
  const toCalendarDate = (date?: Date) => {
    if (!date) return undefined
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }

  const state = useCalendarState({
    locale,
    createCalendar,
    value: value ? toCalendarDate(value) : undefined,
    onChange: (date) => {
      if (onChange && date) {
        // Convert back to JavaScript Date
        onChange(new Date(date.year, date.month - 1, date.day))
      }
    },
    minValue: minValue ? toCalendarDate(minValue) : undefined,
    maxValue: maxValue ? toCalendarDate(maxValue) : undefined,
  })

  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar({}, state)

  return (
    <div {...calendarProps} className={`p-4 border rounded-md shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Button {...prevButtonProps} variant="outline" className="p-2">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-medium">{title}</h2>
        <Button {...nextButtonProps} variant="outline" className="p-2">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}

