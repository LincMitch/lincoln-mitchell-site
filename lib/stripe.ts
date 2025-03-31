"use server"

import Stripe from "stripe"

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-02-24.acacia",
})

// Create a payment intent
export async function createPaymentIntent(amount: number, currency = "usd", metadata: Record<string, string> = {}) {
  try {
    // Convert amount to cents (Stripe uses smallest currency unit)
    const amountInCents = Math.round(amount * 100)

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return {
      clientSecret: paymentIntent.client_secret,
      id: paymentIntent.id,
    }
  } catch (error) {
    console.error("Error creating payment intent:", error)
    throw new Error(`Failed to create payment intent: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}

// Retrieve a payment intent
export async function retrievePaymentIntent(id: string) {
  try {
    return await stripe.paymentIntents.retrieve(id)
  } catch (error) {
    console.error("Error retrieving payment intent:", error)
    throw new Error(`Failed to retrieve payment intent: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}

// Create a separate file for webhook handling
export async function constructWebhookEvent(payload: string, signature: string) {
  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ""

    // Use a different approach to make this truly async
    await new Promise((resolve) => setTimeout(resolve, 0))

    // Then construct the event
    const event = stripe.webhooks.constructEvent(payload, signature, webhookSecret)
    return event
  } catch (error) {
    console.error("Error verifying webhook signature:", error)
    throw new Error(
      `Webhook signature verification failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    )
  }
}

