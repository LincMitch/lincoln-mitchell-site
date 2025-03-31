import { NextResponse } from "next/server"
import { headers } from "next/headers"

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || ""

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = headers().get("stripe-signature") || ""

    // In a real implementation, you would verify the signature and process the webhook
    console.log("Received Stripe webhook event")

    // Return a 200 response to acknowledge receipt of the event
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error processing Stripe webhook:", error)
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 })
  }
}

// Add OPTIONS method to handle preflight requests
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        Allow: "POST, OPTIONS",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, stripe-signature",
      },
    },
  )
}

