import { NextResponse } from "next/server"
import { getAvailableSlots } from "@/lib/cal-api"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const eventTypeId = searchParams.get("eventTypeId")
    const date = searchParams.get("date")

    if (!eventTypeId || !date) {
      return NextResponse.json({ error: "Missing required parameters: eventTypeId and date" }, { status: 400 })
    }

    const slots = await getAvailableSlots(Number.parseInt(eventTypeId, 10), date)
    return NextResponse.json({ slots })
  } catch (error) {
    console.error("Error fetching availability:", error)
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 })
  }
}

