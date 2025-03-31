import { NextResponse } from "next/server"
import { retrievePaymentIntent } from "@/lib/stripe"
import { updateBookingStatus } from "@/lib/booking-store"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentIntentId = searchParams.get("payment_intent")

    if (!paymentIntentId) {
      return NextResponse.json({ error: "Payment intent ID is required" }, { status: 400 })
    }

    // Retrieve the payment intent from Stripe
    const paymentIntent = await retrievePaymentIntent(paymentIntentId)

    // Extract booking ID from metadata
    const bookingId = paymentIntent.metadata?.bookingId

    // If we have a booking ID and the payment was successful, update the booking status
    if (bookingId && paymentIntent.status === "succeeded") {
      await updateBookingStatus(bookingId, "CONFIRMED", "PAID")
    }

    return NextResponse.json({
      status: paymentIntent.status,
      bookingId: bookingId || null,
    })
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to verify payment" },
      { status: 500 },
    )
  }
}

