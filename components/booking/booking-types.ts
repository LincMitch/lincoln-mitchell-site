export interface BookingData {
  client: {
    name: string
    email: string
    phone?: string
  }
  notes?: string
}

export interface CalEventType {
  id: number
  slug: string
  title: string
  length: number
  description: string | null
  price: number
  currency: string
}

export interface CalTimeSlot {
  time: string
  attendees: number
  bookingUid?: string
}

