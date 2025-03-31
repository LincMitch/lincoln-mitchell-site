"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentCancelPage() {
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)] py-12">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-16 w-16 text-amber-500" />
          </div>
          <CardTitle className="text-2xl">Payment Cancelled</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p>Your payment was cancelled and no charges were made. Your appointment has not been confirmed.</p>
          <p className="text-muted-foreground">
            If you experienced any issues during the payment process, please try again or contact us for assistance.
          </p>
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
            <Link href="/booking">Try Again</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

