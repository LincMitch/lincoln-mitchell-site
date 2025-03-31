"use client"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export interface PaymentItem {
  name: string
  description: string
  amount: number
  quantity: number
}

interface CheckoutButtonProps extends ButtonProps {
  items: PaymentItem[]
  successUrl: string
  cancelUrl: string
  customerEmail?: string
  metadata?: Record<string, string>
}

export default function CheckoutButton({
  items,
  successUrl,
  cancelUrl,
  customerEmail,
  metadata = {},
  children,
  ...props
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleCheckout = async () => {
    try {
      setLoading(true)

      // Get the first item (assuming there's at least one)
      const item = items[0]

      // Ensure the amount is a valid number
      const amount = typeof item.amount === "number" ? item.amount : 0.5

      console.log("Initiating checkout with:", {
        item,
        amount,
        successUrl,
        cancelUrl,
        customerEmail,
        metadata,
      })

      // Build query parameters for the checkout page
      const params = new URLSearchParams({
        itemName: item.name,
        itemDescription: item.description || "",
        amount: amount.toString(),
        successUrl,
        cancelUrl,
        timestamp: Date.now().toString(), // Add timestamp to force refresh
      })

      // Add email if provided
      if (customerEmail) {
        params.append("email", customerEmail)
      }

      // Add booking ID if provided in metadata
      if (metadata.bookingId) {
        params.append("bookingId", metadata.bookingId)
      }

      // Navigate to the checkout page with query parameters
      router.push(`/checkout?${params.toString()}`)
    } catch (error) {
      console.error("Error initiating checkout:", error)
      toast({
        title: "Checkout Error",
        description: "There was a problem initiating checkout. Please try again.",
        variant: "destructive",
      })
      setLoading(false)
    }
  }

  return (
    <Button onClick={handleCheckout} disabled={loading} {...props}>
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        children || "Checkout"
      )}
    </Button>
  )
}

