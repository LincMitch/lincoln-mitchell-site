"use server"

import { cache } from "react"

// Types for Cal.com API responses
export interface CalEventType {
  id: number
  slug: string
  title: string
  length: number
  description: string | null
  price: number
  currency: string
  hidden: boolean
  position: number
  metadata: Record<string, any>
}

export interface CalTimeSlot {
  time: string
  attendees: number
  bookingUid?: string
}

export interface CalUser {
  id: number
  username: string
  name: string
  email: string
  bio: string | null
  avatar: string | null
}

// Cal.com API client
const CAL_API_KEY = process.env.CAL_API_KEY || "cal_live_71fb679ed9ab5740a4e3e5beefe4a653"
const CAL_API_URL = "https://api.cal.com/v1"

// Helper function to make API requests to Cal.com
async function calRequest(endpoint: string, options: RequestInit = {}) {
  const url = `${CAL_API_URL}${endpoint}`
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CAL_API_KEY}`,
    ...options.headers,
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Cal.com API error: ${response.status} - ${errorText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Cal.com API request failed:", error)
    throw error
  }
}

// Get all event types for the current user
export const getEventTypes = cache(async (): Promise<CalEventType[]> => {
  try {
    const data = await calRequest("/event-types")
    return data.event_types || []
  } catch (error) {
    console.error("Failed to fetch event types:", error)
    return []
  }
})

// Get a specific event type by ID
export const getEventType = cache(async (eventTypeId: number): Promise<CalEventType | null> => {
  try {
    const data = await calRequest(`/event-types/${eventTypeId}`)
    return data.event_type || null
  } catch (error) {
    console.error(`Failed to fetch event type ${eventTypeId}:`, error)
    return null
  }
})

// Get available time slots for a specific event type
export const getAvailableSlots = cache(
  async (
    eventTypeId: number,
    date: string, // Format: YYYY-MM-DD
  ): Promise<CalTimeSlot[]> => {
    try {
      const data = await calRequest(`/availability/${eventTypeId}?date=${date}`)
      return data.slots || []
    } catch (error) {
      console.error(`Failed to fetch availability for event type ${eventTypeId} on ${date}:`, error)
      return []
    }
  },
)

// Get user profile information
export const getUserProfile = cache(async (username: string): Promise<CalUser | null> => {
  try {
    const data = await calRequest(`/users/${username}`)
    return data.user || null
  } catch (error) {
    console.error(`Failed to fetch user profile for ${username}:`, error)
    return null
  }
})

// Create a booking
export async function createBooking(
  eventTypeId: number,
  start: string, // ISO string
  end: string, // ISO string
  name: string,
  email: string,
  notes?: string,
) {
  try {
    const payload = {
      start,
      end,
      eventTypeId,
      responses: {
        name,
        email,
        notes: notes || "",
      },
    }

    const data = await calRequest("/bookings", {
      method: "POST",
      body: JSON.stringify(payload),
    })

    return {
      success: true,
      booking: data.booking,
      paymentUrl: data.booking?.paymentUrl || null,
    }
  } catch (error) {
    console.error("Failed to create booking:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create booking",
    }
  }
}

