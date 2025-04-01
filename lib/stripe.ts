"use server"

import Stripe from "stripe"

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-02-24.acacia",
});

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

export async function someServerActionFunction() {
  // Placeholder implementation
  return "Server action executed successfully";
}

