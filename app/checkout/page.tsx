"use client"

import type React from "react"

import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Loader2, CreditCard, CheckCircle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()

  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Get payment details from URL params
  const itemName = searchParams.get("itemName") || "Consultation"
  const itemDescription = searchParams.get("itemDescription") || "Professional service"
  const amountParam = searchParams.get("amount") || "0.50"
  const amount = Number.parseFloat(amountParam) || 0.5
  const successUrl = searchParams.get("successUrl") || "/booking/payment-success"
  const cancelUrl = searchParams.get("cancelUrl") || "/booking/payment-cancel"
  const bookingId = searchParams.get("bookingId") || undefined

  // Form state
  const [cardNumber, setCardNumber] = useState("4242 4242 4242 4242")
  const [expiryDate, setExpiryDate] = useState("12/25")
  const [cvc, setCvc] = useState("123")
  const [name, setName] = useState("")
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!name.trim()) {
      errors.name = "Name on card is required"
    }

    if (!cardNumber.trim()) {
      errors.cardNumber = "Card number is required"
    } else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber)) {
      errors.cardNumber = "Card number should be in format: XXXX XXXX XXXX XXXX"
    }

    if (!expiryDate.trim()) {
      errors.expiryDate = "Expiry date is required"
    } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      errors.expiryDate = "Expiry date should be in format: MM/YY"
    }

    if (!cvc.trim()) {
      errors.cvc = "CVC is required"
    } else if (!/^\d{3,4}$/.test(cvc)) {
      errors.cvc = "CVC should be 3 or 4 digits"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsProcessing(true)

    try {
      // Simulate payment processing
      toast({
        title: "Processing payment...",
        description: "Please wait while we process your payment.",
      })

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page with booking ID if available
      const redirectUrl = bookingId ? `${successUrl}?bookingId=${bookingId}` : successUrl

      router.push(redirectUrl)
    } catch (error) {
      console.error("Payment processing error:", error)
      setError("Payment processing failed. Please try again.")
      setIsProcessing(false)
    }
  }

  const handleCancel = () => {
    const redirectUrl = bookingId ? `${cancelUrl}?bookingId=${bookingId}` : cancelUrl

    router.push(redirectUrl)
  }

  return (
    <div className="container py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Payment</h1>

        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Enter your card information to complete your booking</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Order Summary */}
            <div className="bg-muted p-4 rounded-md space-y-2">
              <h3 className="font-medium">Order Summary</h3>
              <div className="flex justify-between">
                <span>{itemName}</span>
                <span>${amount.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground">{itemDescription}</p>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${amount.toFixed(2)}</span>
              </div>
            </div>

            {error && <div className="bg-destructive/10 p-3 rounded-md text-destructive text-sm">{error}</div>}

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={formErrors.name ? "border-destructive" : ""}
                />
                {formErrors.name && <p className="text-destructive text-xs">{formErrors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4242 4242 4242 4242"
                    className={formErrors.cardNumber ? "border-destructive pl-10" : "pl-10"}
                  />
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                {formErrors.cardNumber && <p className="text-destructive text-xs">{formErrors.cardNumber}</p>}
                <p className="text-xs text-muted-foreground">For testing, use: 4242 4242 4242 4242</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className={formErrors.expiryDate ? "border-destructive" : ""}
                  />
                  {formErrors.expiryDate && <p className="text-destructive text-xs">{formErrors.expiryDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                    className={formErrors.cvc ? "border-destructive" : ""}
                  />
                  {formErrors.cvc && <p className="text-destructive text-xs">{formErrors.cvc}</p>}
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <Button type="button" variant="outline" onClick={handleCancel} disabled={isProcessing}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${amount.toFixed(2)}`
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm text-muted-foreground">Secure payment processing</span>
          </div>
          <p className="text-xs text-muted-foreground">This is a test payment form. No actual charges will be made.</p>
        </div>
      </div>
    </div>
  )
}

