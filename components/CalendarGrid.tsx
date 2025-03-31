"use client"
import { useCalendarGrid } from "@react-aria/calendar"
import { getWeeksInMonth } from "@internationalized/date"
import { CalendarCell } from "./CalendarCell"

export function CalendarGrid({ state }: any) {
  const { locale } = state
  const { gridProps, headerProps, weekDays } = useCalendarGrid({}, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table {...gridProps} className="w-full border-collapse">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day: string, index: number) => (
            <th key={index} className="text-center text-sm font-normal text-gray-500">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(weeksInMonth)].map((_, weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date: any, i: number) =>
                date ? <CalendarCell key={i} state={state} date={date} /> : <td key={i} />,
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

