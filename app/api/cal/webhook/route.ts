import { NextResponse } from "next/server"
import { headers } from "next/headers"
import crypto from "crypto"
import { saveBooking, updateBookingStatus } from "@/lib/booking-store"

// Cal.com webhook secret for verification
const WEBHOOK_SECRET = process.env.CAL_WEBHOOK_SECRET || ""

// Verify the webhook signature from Cal.com
function verifyCalSignature(payload: string, signature: string): boolean {
  if (!WEBHOOK_SECRET) {
    console.warn("CAL_WEBHOOK_SECRET is not set, skipping signature verification")
    return true
  }

  try {
    const hmac = crypto.createHmac("sha256", WEBHOOK_SECRET)
    const digest = hmac.update(payload).digest("hex")
    return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))
  } catch (error) {
    console.error("Error verifying Cal.com webhook signature:", error)
    return false
  }
}

export async function POST(request: Request) {
  try {
    // Get the signature from the headers
    const headersList = headers()
    const signature = headersList.get("cal-signature") || ""

    // Get the raw request body
    const payload = await request.text()

    // Verify the signature
    if (!verifyCalSignature(payload, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    // Parse the payload
    const data = JSON.parse(payload)

    // Log the webhook event for debugging
    console.log("Cal.com webhook received:", {
      type: data.triggerEvent,
      payload: data,
    })

    // Handle different webhook events
    switch (data.triggerEvent) {
      case "BOOKING_CREATED":
        await handleBookingCreated(data)
        break
      case "BOOKING_CANCELLED":
        await handleBookingCancelled(data)
        break
      case "BOOKING_RESCHEDULED":
        await handleBookingRescheduled(data)
        break
      case "BOOKING_PAID":
        await handleBookingPaid(data)
        break
      // Add more event handlers as needed
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing Cal.com webhook:", error)
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 })
  }
}

// Event handlers
async function handleBookingCreated(data: any) {
  const booking = data.payload

  // Save the booking to our store
  await saveBooking({
    id: booking.uid,
    eventTypeId: booking.eventTypeId,
    title: booking.title,
    description: booking.description,
    startTime: booking.startTime,
    endTime: booking.endTime,
    attendeeName: booking.attendees[0]?.name || "Unknown",
    attendeeEmail: booking.attendees[0]?.email || "unknown@example.com",
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })

  // Additional logic like sending emails, etc.
}

async function handleBookingCancelled(data: any) {
  const booking = data.payload

  // Update the booking status
  await updateBookingStatus(booking.uid, "CANCELLED")

  // Additional cancellation logic
}

async function handleBookingRescheduled(data: any) {
  const booking = data.payload

  // Update the booking with new times
  await saveBooking({
    id: booking.uid,
    eventTypeId: booking.eventTypeId,
    title: booking.title,
    description: booking.description,
    startTime: booking.startTime,
    endTime: booking.endTime,
    attendeeName: booking.attendees[0]?.name || "Unknown",
    attendeeEmail: booking.attendees[0]?.email || "unknown@example.com",
    status: "CONFIRMED",
    createdAt: booking.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })

  // Additional rescheduling logic
}

async function handleBookingPaid(data: any) {
  const booking = data.payload

  // Update the booking payment status
  await updateBookingStatus(booking.uid, "PAID", "PAID")

  // Additional payment confirmation logic
}

