"use server"

export type PaymentItem = {
  name: string
  description: string
  amount: number
  quantity: number
}

export async function createPaymentIntent(amount: number, currency = "usd", metadata: Record<string, string> = {}) {
  try {
    console.log("Creating mock payment intent for amount:", amount)

    // Return a mock client secret for development/testing
    return {
      clientSecret: `mock_client_secret_${Date.now()}`,
      mock: true,
      metadata,
    }

    /* 
    // Real Stripe implementation - commented out for now
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
      apiVersion: "2023-10-16",
    })
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata, // Pass the metadata (including bookingId)
      automatic_payment_methods: {
        enabled: true,
      },
    })
    
    return { clientSecret: paymentIntent.client_secret }
    */
  } catch (error) {
    console.error("Error creating payment intent:", error)
    throw new Error(`Failed to create payment intent: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}

