"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
}

export function Heading({ level, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

  return <Tag className={cn(className)}>{children}</Tag>
}

