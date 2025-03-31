"use client"
import { useCalendarCell } from "@react-aria/calendar"
import { useRef } from "react"
import clsx from "clsx"

export function CalendarButton({ state, date }: any) {
  const ref = useRef<HTMLButtonElement>(null)
  const { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, formattedDate } = useCalendarCell(
    { date },
    state,
    ref,
  )

  return (
    <td {...cellProps}>
      <button
        {...buttonProps}
        ref={ref}
        className={clsx(
          "w-10 h-10 outline-none rounded-full",
          isSelected ? "bg-primary-600 text-white" : "hover:bg-gray-100",
          isOutsideVisibleRange ? "text-gray-300" : "",
          isDisabled ? "text-gray-300 cursor-not-allowed" : "",
        )}
      >
        {formattedDate}
      </button>
    </td>
  )
}

