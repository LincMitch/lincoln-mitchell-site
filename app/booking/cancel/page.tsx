import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BookingCancelPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container flex items-center justify-center flex-grow py-12">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-16 w-16 text-amber-500" />
            </div>
            <CardTitle className="text-2xl">Booking Cancelled</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>Your booking process was cancelled and no payment was processed.</p>
            <p className="text-muted-foreground">
              If you experienced any issues during the booking process, please try again or contact me for assistance.
            </p>
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

      <Footer />
    </div>
  )
}

