"use server"

import { cache } from "react"

// Types for booking data
export interface BookingData {
  id: string
  eventTypeId: number
  title: string
  description?: string
  startTime: string
  endTime: string
  attendeeName: string
  attendeeEmail: string
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "PAID"
  paymentStatus?: "PENDING" | "PAID" | "FAILED"
  createdAt: string
  updatedAt: string
}

// In-memory store for bookings (in production, use a database)
const bookings: Record<string, BookingData> = {}

// Create or update a booking
export async function saveBooking(booking: BookingData): Promise<BookingData> {
  bookings[booking.id] = {
    ...booking,
    updatedAt: new Date().toISOString(),
  }
  return bookings[booking.id]
}

// Get a booking by ID
export const getBooking = cache(async (id: string): Promise<BookingData | null> => {
  return bookings[id] || null
})

// Get all bookings
export const getAllBookings = cache(async (): Promise<BookingData[]> => {
  return Object.values(bookings)
})

// Get bookings by attendee email
export const getBookingsByEmail = cache(async (email: string): Promise<BookingData[]> => {
  return Object.values(bookings).filter((booking) => booking.attendeeEmail.toLowerCase() === email.toLowerCase())
})

// Update booking status
export async function updateBookingStatus(
  id: string,
  status: BookingData["status"],
  paymentStatus?: BookingData["paymentStatus"],
): Promise<BookingData | null> {
  if (!bookings[id]) return null

  bookings[id] = {
    ...bookings[id],
    status,
    ...(paymentStatus && { paymentStatus }),
    updatedAt: new Date().toISOString(),
  }

  return bookings[id]
}

