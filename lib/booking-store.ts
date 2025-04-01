"use server";

// Types for booking data
export interface BookingData {
  id: string;
  eventTypeId: number;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  attendeeName: string;
  attendeeEmail: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "PAID";
  paymentStatus?: "PENDING" | "PAID" | "FAILED";
  createdAt: string;
  updatedAt: string;
}

// Fetch all bookings from Cal.com API
export const getAllBookings = async (): Promise<BookingData[]> => {
  const response = await fetch("https://api.cal.com/v1/bookings", {
    headers: {
      Authorization: `Bearer ${process.env.CAL_API_KEY}`, // Use your Cal.com API key
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch bookings: ${response.status}`);
  }

  const bookings = await response.json();
  return bookings;
};

// Fetch bookings by attendee email from Cal.com API
export const getBookingsByEmail = async (email: string): Promise<BookingData[]> => {
  const response = await fetch(`https://api.cal.com/v1/bookings?email=${email}`, {
    headers: {
      Authorization: `Bearer ${process.env.CAL_API_KEY}`, // Use your Cal.com API key
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch bookings for email ${email}: ${response.status}`);
  }

  const bookings = await response.json();
  return bookings;
};

// Save a booking using Cal.com API
export const saveBooking = async (booking: BookingData): Promise<BookingData> => {
  const response = await fetch("https://api.cal.com/v1/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`, // Use your Cal.com API key
    },
    body: JSON.stringify(booking),
  });

  if (!response.ok) {
    throw new Error(`Failed to save booking: ${response.status}`);
  }

  const savedBooking = await response.json();
  return savedBooking;
};

// Fetch a booking by ID from Cal.com API
export const getBooking = async (id: string): Promise<BookingData | null> => {
  const response = await fetch(`https://api.cal.com/v1/bookings/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.CAL_API_KEY}`, // Use your Cal.com API key
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch booking with ID ${id}: ${response.status}`);
  }

  const booking = await response.json();
  return booking;
};

// Update booking status using Cal.com API
export const updateBookingStatus = async (
  id: string,
  status: BookingData["status"],
  paymentStatus?: BookingData["paymentStatus"]
): Promise<BookingData | null> => {
  const response = await fetch(`https://api.cal.com/v1/bookings/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CAL_API_KEY}`, // Use your Cal.com API key
    },
    body: JSON.stringify({
      status,
      ...(paymentStatus && { paymentStatus }),
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update booking status: ${response.status}`);
  }

  const updatedBooking = await response.json();
  return updatedBooking;
};