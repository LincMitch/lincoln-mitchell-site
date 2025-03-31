import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container flex items-center justify-center flex-grow py-12">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>
              Thank you for your booking. Your appointment has been confirmed and payment has been processed
              successfully.
            </p>
            <p className="text-muted-foreground">
              You will receive a confirmation email with all the details of your appointment.
            </p>
            <div className="bg-muted p-4 rounded-md text-left mt-6">
              <p className="text-sm text-muted-foreground mb-2">What happens next?</p>
              <ul className="text-sm space-y-2">
                <li>• Check your email for appointment details</li>
                <li>• Add the appointment to your calendar</li>
                <li>• Prepare any questions or materials for our meeting</li>
              </ul>
            </div>
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

      <Footer />
    </div>
  )
}

