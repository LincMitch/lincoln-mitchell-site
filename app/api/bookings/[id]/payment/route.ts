import { NextResponse } from "next/server"

export async function POST(request: Request, { params }: { params: { id: string } }) {
  try {
    const bookingId = params.id
    const body = await request.json()
    const { status } = body

    if (!bookingId) {
      return NextResponse.json({ error: "Booking ID is required" }, { status: 400 })
    }

    if (!status) {
      return NextResponse.json({ error: "Payment status is required" }, { status: 400 })
    }

    console.log(`Updating booking ${bookingId} payment status to ${status}`)

    // In a real app, we would update the booking in the database
    // For now, just return a success response
    return NextResponse.json({
      success: true,
      booking: {
        id: bookingId,
        status: "CONFIRMED",
        paymentStatus: status === "PAID" ? "PAID" : "FAILED",
        updatedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Error updating booking payment status:", error)
    return NextResponse.json({ error: "Failed to update booking payment status" }, { status: 500 })
  }
}

