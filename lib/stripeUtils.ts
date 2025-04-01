// filepath: /Users/lincoln.mitchell/Documents/GitHub/lincoln-mitchell-site/lib/stripeUtils.ts
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-02-24.acacia",
});

export function constructWebhookEvent(payload: string, signature: string) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

  try {
    return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    throw new Error(
      `Webhook signature verification failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}