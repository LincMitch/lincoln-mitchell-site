"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Clock, DollarSign, AlertCircle } from "lucide-react"

interface ServiceSelectorProps {
  onSelect: (eventType: any) => void
  initialService?: string | null
}

export function ServiceSelector({ onSelect, initialService }: ServiceSelectorProps) {
  const [eventTypes, setEventTypes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEventTypes = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/cal/event-types")

        if (!response.ok) {
          throw new Error(`Failed to fetch event types: ${response.status}`)
        }

        const data = await response.json()

        // Filter out hidden event types and sort by position
        const visibleEventTypes = (data.eventTypes || [])
          .filter((et: any) => !et.hidden)
          .sort((a: any, b: any) => a.position - b.position)

        setEventTypes(visibleEventTypes)

        // If initialService is provided, auto-select it
        if (initialService) {
          const matchingEventType = visibleEventTypes.find(
            (et: any) => et.slug === initialService || et.id.toString() === initialService,
          )

          if (matchingEventType) {
            onSelect(matchingEventType)
          }
        }
      } catch (error) {
        console.error("Error fetching event types:", error)
        setError("Failed to load services. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchEventTypes()
  }, [initialService, onSelect])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
        <p className="text-destructive mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

  if (eventTypes.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="mb-4">No services are currently available. Please check back later.</p>
        <Button onClick={() => window.location.reload()}>Refresh</Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {eventTypes.map((eventType) => (
        <Card key={eventType.id} className="cursor-pointer hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle>{eventType.title}</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {eventType.length} minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{eventType.description || "No description available."}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center">
              {eventType.price > 0 && (
                <>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>
                    ${eventType.price} {eventType.currency}
                  </span>
                </>
              )}
              {eventType.price === 0 && <span className="text-muted-foreground">Free</span>}
            </div>
            <Button onClick={() => onSelect(eventType)}>Select</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

