import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { amount, currency = "usd", metadata = {} } = body

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 })
    }

    // For development/testing with real Stripe integration
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
      apiVersion: "2023-10-16",
    })

    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata, // Pass the metadata (including bookingId)
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })

    // For mock mode (uncomment if needed)
    /*
    return NextResponse.json({
      clientSecret: `mock_client_secret_${Date.now()}`,
      mock: true,
    })
    */
  } catch (error) {
    console.error("Error in create-payment-intent API route:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

// Add a GET handler to respond to GET requests
export async function GET() {
  return NextResponse.json({ error: "This endpoint only accepts POST requests" }, { status: 405 })
}

