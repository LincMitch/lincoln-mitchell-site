"use client"

import { useState, useEffect, useRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Script from "next/script"

interface CalButtonProps extends ButtonProps {
  calLink: string
  text?: string
  config?: Record<string, any>
}

export function CalButton({ calLink, text = "Book Appointment", config = {}, ...props }: CalButtonProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const calInitialized = useRef(false)

  useEffect(() => {
    // Only attempt to initialize Cal when the script is loaded
    if (!isScriptLoaded || calInitialized.current) return

    // Add a safety check to ensure window.Cal exists
    if (typeof window !== "undefined" && !window.Cal) {
      console.warn("Cal.com script loaded but Cal object not available yet")
      return
    }

    try {
      // Initialize Cal UI configuration
      const defaultConfig = {
        hideEventTypeDetails: false,
        hideBranding: true,
      }

      const mergedConfig = { ...defaultConfig, ...config }

      // Create the Cal UI instance with a delay to ensure everything is loaded
      setTimeout(() => {
        if (typeof window === "undefined" || !window.Cal) {
          setError("Cal.com script failed to initialize properly")
          return
        }

        // Initialize Cal UI
        window.Cal("ui", {
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: mergedConfig.hideEventTypeDetails,
          hideBranding: mergedConfig.hideBranding,
        })

        calInitialized.current = true
      }, 300)
    } catch (e) {
      console.error("Error initializing Cal button:", e)
      setError("Failed to initialize booking button")
    }
  }, [config, isScriptLoaded])

  const handleClick = () => {
    if (!isScriptLoaded || typeof window === "undefined" || !window.Cal) {
      setError("Calendar is still loading. Please try again in a moment.")
      return
    }

    setIsLoading(true)

    try {
      window.Cal.openModal({
        calLink,
        onModalClose: () => {
          setIsLoading(false)
        },
      })
    } catch (e) {
      console.error("Error opening Cal modal:", e)
      setError("Failed to open booking calendar")
      setIsLoading(false)
    }
  }

  return (
    <>
      <Script
        src="https://cal.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Cal.com script loaded for button")
          // Add a small delay to ensure Cal is initialized
          setTimeout(() => setIsScriptLoaded(true), 200)
        }}
        onError={() => {
          console.error("Failed to load Cal.com script")
          setError("Failed to load Cal.com script")
        }}
        crossOrigin="anonymous"
      />

      <Button onClick={handleClick} disabled={isLoading || !!error || !isScriptLoaded} {...props}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          text
        )}
      </Button>

      {error && <p className="text-destructive text-sm mt-2">{error}</p>}
    </>
  )
}

