"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2, CreditCard } from "lucide-react"
import type { PaymentItem } from "@/components/payment/checkout-button"

interface StripePaymentFormProps {
  items: PaymentItem[]
  successUrl: string
  cancelUrl: string
  customerEmail?: string
}

export function StripePaymentForm({ items, successUrl, cancelUrl, customerEmail }: StripePaymentFormProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  // Use a ref to track if the effect has run
  const effectRan = useRef(false)

  // Stringify items to use in dependency array
  const itemsString = JSON.stringify(items)

  useEffect(() => {
    // Skip effect on first render in development mode (React 18 strict mode)
    if (effectRan.current) return

    // Simulate loading the payment form
    const initializePayment = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setLoading(false)
      } catch (error) {
        console.error("Error initializing payment:", error)
        setError(error instanceof Error ? error.message : "Failed to initialize payment")
        setLoading(false)
      }
    }

    initializePayment()

    // Cleanup function
    return () => {
      effectRan.current = true
    }
  }, [itemsString])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      // Redirect to success page
      router.push(successUrl)
    }, 1500)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Initializing payment...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="border rounded-md p-4">
          <div className="text-center mb-4">
            <CreditCard className="h-8 w-8 mx-auto mb-2 text-primary" />
            <h3 className="text-lg font-medium">Test Payment Form</h3>
            <p className="text-sm text-muted-foreground">
              This is a test payment form. No real payment will be processed.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="card-number" className="text-sm font-medium">
                Card Number
              </label>
              <input
                id="card-number"
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="4242 4242 4242 4242"
                defaultValue="4242 4242 4242 4242"
                readOnly
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="expiry" className="text-sm font-medium">
                  Expiry Date
                </label>
                <input
                  id="expiry"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="MM/YY"
                  defaultValue="12/25"
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cvc" className="text-sm font-medium">
                  CVC
                </label>
                <input
                  id="cvc"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="123"
                  defaultValue="123"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.push(cancelUrl)} disabled={isProcessing}>
            Cancel
          </Button>
          <Button type="submit" disabled={isProcessing}>
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Pay Now"
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}

