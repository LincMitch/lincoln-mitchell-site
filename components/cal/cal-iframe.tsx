"use client"

import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalIframeProps {
  calLink: string
  config?: {
    theme?: "light" | "dark"
    hideEventTypeDetails?: boolean
    layout?: "month_view" | "week_view"
  }
}

export function CalIframe({ calLink, config = {} }: CalIframeProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [iframeHeight, setIframeHeight] = useState(700)

  // Build the iframe URL with query parameters for configuration
  const buildIframeUrl = () => {
    const baseUrl = `https://cal.com/${calLink}`
    const params = new URLSearchParams()

    if (config.theme) {
      params.append("theme", config.theme)
    }

    if (config.hideEventTypeDetails) {
      params.append("hideEventTypeDetails", "true")
    }

    if (config.layout) {
      params.append("layout", config.layout)
    }

    // Add embed=true to optimize for embedding
    params.append("embed", "true")

    // Add a random parameter to prevent caching issues
    params.append("random", Math.random().toString(36).substring(2, 11))

    const queryString = params.toString()
    return queryString ? `${baseUrl}?${queryString}` : baseUrl
  }

  const handleIframeLoad = () => {
    setIsLoading(false)

    // Set up message listener for iframe height adjustments
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from Cal.com
      if (event.origin !== "https://cal.com") return

      try {
        const data = JSON.parse(event.data)
        if (data.height) {
          setIframeHeight(data.height)
        }
      } catch (e) {
        // Ignore parsing errors
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }

  const handleIframeError = () => {
    setError("Failed to load the booking calendar")
    setIsLoading(false)
  }

  return (
    <div className="w-full">
      {error ? (
        <div className="text-center py-8">
          <p className="text-destructive mb-6">{error}</p>
          <Button asChild>
            <a
              href={`https://cal.com/${calLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Book on Cal.com <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      ) : (
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading booking calendar...</p>
              <div className="w-full max-w-md space-y-3 mt-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          )}

          <iframe
            src={buildIframeUrl()}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            className="w-full border-0 rounded-md"
            style={{ height: `${iframeHeight}px`, minHeight: "700px" }}
            frameBorder="0"
            allow="camera; microphone; autoplay; fullscreen; payment"
            title="Scheduling Calendar"
          />
        </div>
      )}
    </div>
  )
}

