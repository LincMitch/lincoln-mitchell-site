"use client"

import { useState, useEffect } from "react"
import { format, parseISO } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Calendar, Clock } from "lucide-react"

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/bookings")

        if (!response.ok) {
          throw new Error(`Failed to fetch bookings: ${response.status}`)
        }

        const data = await response.json()
        setBookings(data.bookings || [])
      } catch (error) {
        console.error("Error fetching bookings:", error)
        setError("Failed to load bookings. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "bg-green-500"
      case "CANCELLED":
        return "bg-red-500"
      case "PENDING":
        return "bg-yellow-500"
      case "PAID":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  if (loading) {
    return (
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Your Bookings</h1>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center p-8">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <p className="text-destructive mb-4">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Your Bookings</h1>

        <Tabs defaultValue="upcoming">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {renderBookings(bookings.filter((b) => b.status !== "CANCELLED" && new Date(b.startTime) > new Date()))}
          </TabsContent>

          <TabsContent value="past">
            {renderBookings(bookings.filter((b) => b.status !== "CANCELLED" && new Date(b.startTime) <= new Date()))}
          </TabsContent>

          <TabsContent value="cancelled">
            {renderBookings(bookings.filter((b) => b.status === "CANCELLED"))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  function renderBookings(filteredBookings: any[]) {
    if (filteredBookings.length === 0) {
      return (
        <div className="text-center p-8 bg-muted rounded-md">
          <p className="text-muted-foreground">No bookings found.</p>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
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
                </div>
                <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {booking.description && <p className="text-sm text-muted-foreground mb-4">{booking.description}</p>}
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm">
                  <strong>Attendee:</strong> {booking.attendeeName}
                </p>
                <p className="text-sm">
                  <strong>Email:</strong> {booking.attendeeEmail}
                </p>
                {booking.paymentStatus && (
                  <p className="text-sm mt-2">
                    <strong>Payment:</strong> {booking.paymentStatus}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }
}

