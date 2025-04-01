"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface TextProps {
  children: React.ReactNode
  className?: string
}

export function Text({ children, className = "" }: TextProps) {
  return <p className={cn("text-gray-700", className)}>{children}</p>
}

