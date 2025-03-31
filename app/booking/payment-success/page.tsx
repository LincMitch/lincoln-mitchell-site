"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)

  // Get booking ID from URL
  const bookingId = searchParams.get("bookingId")

  // Simulate updating booking status
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-2">Finalizing your booking...</h2>
          <p className="text-muted-foreground">Please wait a moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>
            Thank you for your payment. Your appointment has been confirmed and you will receive a confirmation email
            shortly.
          </p>
          <p className="text-muted-foreground">If you have any questions about your appointment, please contact us.</p>
          {bookingId && (
            <div className="bg-muted p-3 rounded-md text-sm">
              <p>
                Booking Reference: <strong>{bookingId}</strong>
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/booking">Book Another Appointment</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

