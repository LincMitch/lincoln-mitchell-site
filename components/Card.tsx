"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={cn("p-6 rounded-lg border border-gray-200 shadow-sm", className)}>{children}</div>
}

