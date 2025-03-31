"use client"

import { useEffect, useState, useRef } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2 } from "lucide-react"
import Script from "next/script"

interface CalEmbedProps {
  calLink: string
  calendarId?: string
  config?: Record<string, any>
}

export function CalEmbed({ calLink, calendarId, config = {} }: CalEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const calInstanceRef = useRef<any>(null)
  const embedContainerId = useRef(`cal-booking-embed-${Math.random().toString(36).substring(2, 11)}`)

  useEffect(() => {
    // Only attempt to initialize Cal when the script is loaded
    if (!isScriptLoaded) return

    // Add a safety check to ensure window.Cal exists
    if (typeof window !== "undefined" && !window.Cal) {
      console.warn("Cal.com script loaded but Cal object not available yet")
      // Set a small timeout to check again
      const checkCalExists = setTimeout(() => {
        if (window.Cal) {
          setIsScriptLoaded(true)
        } else {
          setError("Failed to initialize Cal.com. Please refresh the page.")
        }
        clearTimeout(checkCalExists)
      }, 1000)
      return () => clearTimeout(checkCalExists)
    }

    // Cleanup previous instance if it exists
    if (calInstanceRef.current) {
      try {
        calInstanceRef.current.destroy()
      } catch (e) {
        console.error("Error destroying previous Cal instance:", e)
      }
      calInstanceRef.current = null
    }

    const initCal = () => {
      try {
        const defaultConfig = {
          layout: "month_view",
          hideEventTypeDetails: false,
          hideBranding: true,
          theme: "light",
        }

        const mergedConfig = { ...defaultConfig, ...config }

        // Create the Cal instance with a delay to ensure DOM is ready
        setTimeout(() => {
          if (typeof window === "undefined" || !window.Cal) {
            setError("Cal.com script failed to initialize properly")
            return
          }

          calInstanceRef.current = window.Cal("inline", {
            elementOrSelector: `#${embedContainerId.current}`,
            calLink: calLink,
            ...(calendarId ? { calendarId } : {}),
            ...mergedConfig,
          })

          // Set loaded state when Cal is ready
          calInstanceRef.current.on("loaded", () => {
            setIsLoaded(true)
          })

          // Handle errors
          calInstanceRef.current.on("error", (error: any) => {
            console.error("Cal.com embed error:", error)
            setError("Failed to load booking calendar. Please try again later.")
          })
        }, 300) // Increased delay to ensure DOM and Cal are ready
      } catch (e) {
        console.error("Error initializing Cal:", e)
        setError("Failed to initialize booking calendar. Please try again later.")
      }
    }

    initCal()

    // Cleanup function
    return () => {
      if (calInstanceRef.current) {
        try {
          calInstanceRef.current.destroy()
        } catch (e) {
          console.error("Error destroying Cal instance:", e)
        }
        calInstanceRef.current = null
      }
    }
  }, [calLink, calendarId, config, isScriptLoaded])

  return (
    <div className="w-full">
      <Script
        src="https://cal.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Cal.com script loaded")
          // Add a small delay to ensure Cal is initialized
          setTimeout(() => setIsScriptLoaded(true), 200)
        }}
        onError={() => {
          console.error("Failed to load Cal.com script")
          setError("Failed to load Cal.com script. Please check your internet connection.")
        }}
        crossOrigin="anonymous"
      />

      {error && (
        <div className="text-center p-8 text-destructive">
          <p>{error}</p>
        </div>
      )}

      {!isLoaded && !error && (
        <div className="flex flex-col items-center justify-center p-8 space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading booking calendar...</p>
          <div className="w-full space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      )}

      <div id={embedContainerId.current} className={!isLoaded && !error ? "hidden" : "min-h-[600px]"}></div>
    </div>
  )
}

