import { NextResponse } from "next/server"
import { getAllBookings, getBookingsByEmail } from "@/lib/booking-store"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    let bookings

    if (email) {
      // Get bookings for a specific email
      bookings = await getBookingsByEmail(email)
    } else {
      // Get all bookings
      bookings = await getAllBookings()
    }

    return NextResponse.json({ bookings })
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}

