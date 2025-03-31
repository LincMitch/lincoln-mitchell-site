"use client"

import { useState, useEffect } from "react"
import { format, parseISO } from "date-fns"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Clock, AlertCircle } from "lucide-react"

interface UpcomingBookingsProps {
  email?: string
  limit?: number
}

export function UpcomingBookings({ email, limit = 3 }: UpcomingBookingsProps) {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true)

        // Build the URL with query parameters if email is provided
        let url = "/api/bookings"
        if (email) {
          url += `?email=${encodeURIComponent(email)}`
        }

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Failed to fetch bookings: ${response.status}`)
        }

        const data = await response.json()

        // Filter for upcoming bookings and sort by start time
        const upcomingBookings = (data.bookings || [])
          .filter((b: any) => b.status !== "CANCELLED" && new Date(b.startTime) > new Date())
          .sort((a: any, b: any) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
          .slice(0, limit)

        setBookings(upcomingBookings)
      } catch (error) {
        console.error("Error fetching upcoming bookings:", error)
        setError("Failed to load upcoming bookings.")
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [email, limit])

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-12 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
        <p className="text-destructive">{error}</p>
      </div>
    )
  }

  if (bookings.length === 0) {
    return (
      <Card>
        <CardContent className="text-center p-6">
          <p className="text-muted-foreground mb-4">You don't have any upcoming appointments.</p>
          <Button asChild>
            <Link href="/booking">Book an Appointment</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <Card key={booking.id}>
          <CardHeader>
            <CardTitle>{booking.title}</CardTitle>
            <CardDescription>
              <div className="flex items-center mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                {format(parseISO(booking.startTime), "EEEE, MMMM d, yyyy")}
              </div>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 mr-1" />
                {format(parseISO(booking.startTime), "h:mm a")} - {format(parseISO(booking.endTime), "h:mm a")}
              </div>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" size="sm">
              <Link href={`/bookings?id=${booking.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}

      <div className="text-center pt-2">
        <Button asChild variant="link">
          <Link href="/bookings">View All Bookings</Link>
        </Button>
      </div>
    </div>
  )
}

