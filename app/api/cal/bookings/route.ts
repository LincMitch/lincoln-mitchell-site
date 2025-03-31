import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { eventTypeId, start, end, name, email, notes } = body

    if (!eventTypeId || !start || !end || !name || !email) {
      return NextResponse.json({ error: "Missing required booking information" }, { status: 400 })
    }

    console.log("Creating booking:", { eventTypeId, start, end, name, email, notes })

    // Create a mock booking ID
    const mockBookingId = `mock-${Date.now()}`

    // Save the booking to our local store
    const booking = {
      id: mockBookingId,
      eventTypeId,
      title: "Mock Booking",
      description: notes || undefined,
      startTime: start,
      endTime: end,
      attendeeName: name,
      attendeeEmail: email,
      status: "CONFIRMED",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    console.log("Mock booking created:", booking)

    return NextResponse.json({
      success: true,
      booking: {
        uid: mockBookingId,
        ...booking,
      },
    })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}

