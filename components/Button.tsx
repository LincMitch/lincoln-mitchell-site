"use client"

import React from "react"
import { useButton } from "@react-aria/button"
import { useFocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import { useHover } from "@react-aria/interactions"
import clsx from "clsx"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
  onClick?: () => void
  isDisabled?: boolean
}

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  isDisabled = false,
  ...props
}: ButtonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const { buttonProps } = useButton(
    {
      ...props,
      onPress: onClick,
      isDisabled,
    },
    ref,
  )

  const { focusProps, isFocusVisible } = useFocusRing()
  const { hoverProps, isHovered } = useHover({ isDisabled })

  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"

  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
    outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50",
  }

  const focusStyles = isFocusVisible ? "outline-none ring-2 ring-offset-2 ring-primary-500" : ""
  const disabledStyles = isDisabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <button
      {...mergeProps(buttonProps, focusProps, hoverProps)}
      ref={ref}
      disabled={isDisabled}
      className={clsx(baseStyles, variantStyles[variant], focusStyles, disabledStyles, className)}
    >
      {children}
    </button>
  )
}

