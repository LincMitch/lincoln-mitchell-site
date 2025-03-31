"use server"

import { cache } from "react"

interface SimplyBookToken {
  token: string
  expires: number
}

const cachedToken: SimplyBookToken | null = null

// This function will always return a mock token to avoid authentication issues
export const getSimplyBookToken = cache(async () => {
  // For development/testing, return a mock token
  console.log("Using mock authentication token for SimplyBook API")
  return "mock-token-for-development"
})

// This function will always return mock services data
export async function getServices() {
  console.log("Using mock services data instead of calling SimplyBook API")

  // Return mock services directly without calling the API
  return [
    {
      id: "1",
      name: "Standard Consultation",
      description: "A comprehensive 60-minute consultation to discuss your needs and goals.",
      duration: 60,
      price: 0.5, // Updated price to 0.50
    },
    {
      id: "2",
      name: "Extended Consultation",
      description: "An in-depth 90-minute session for more complex issues requiring detailed attention.",
      duration: 90,
      price: 0.5, // Updated price to 0.50
    },
    {
      id: "3",
      name: "Quick Check-in",
      description: "A brief 30-minute follow-up session to review progress and make adjustments.",
      duration: 30,
      price: 0.5, // Updated price to 0.50
    },
    {
      id: "4",
      name: "Premium Package",
      description: "A comprehensive package including initial consultation and two follow-up sessions.",
      duration: 120,
      price: 0.5, // Updated price to 0.50
    },
  ]
}

// This function will always return mock time slots
export async function getAvailableSlots(serviceId: string, date: string) {
  console.log(`Using mock time slots for service ${serviceId} on ${date}`)

  // Generate mock time slots from 9 AM to 5 PM
  const mockSlots = []
  const startHour = 9
  const endHour = 17
  const interval = 30 // minutes

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const startTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00`

      // Calculate end time (60 minutes after start time)
      let endHour = hour
      let endMinute = minute + 60

      if (endMinute >= 60) {
        endHour += Math.floor(endMinute / 60)
        endMinute = endMinute % 60
      }

      const endTime = `${endHour.toString().padStart(2, "0")}:${endMinute.toString().padStart(2, "0")}:00`

      mockSlots.push({
        start_time: startTime,
        end_time: endTime,
      })
    }
  }

  return mockSlots
}

// This function will always return a mock booking confirmation
export async function createBooking(data: any) {
  console.log("Creating mock booking instead of calling SimplyBook API")

  // Return a mock booking confirmation
  return {
    id: "mock-booking-" + Date.now(),
    status: "confirmed",
    message: "Booking created successfully (mock)",
  }
}

