"use client"

import type React from "react"
import clsx from "clsx"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={clsx("p-6 rounded-lg border border-gray-200 shadow-sm", className)}>{children}</div>
}

