"use client"

import type React from "react"
import clsx from "clsx"

interface TextProps {
  children: React.ReactNode
  className?: string
}

export function Text({ children, className = "" }: TextProps) {
  return <p className={clsx("text-gray-700", className)}>{children}</p>
}

