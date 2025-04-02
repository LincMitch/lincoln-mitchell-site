import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface BookingData {
  eventTypeId: number;
  startTime: string; // ISO 8601 format
  endTime: string;   // ISO 8601 format
  attendeeName: string;
  attendeeEmail: string;
}

interface CalApiButtonProps extends ButtonProps {
  eventTypeId: number;
  text?: string;
}

export function CalApiButton({ eventTypeId, text = "Book Appointment", ...props }: CalApiButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBooking = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      const requestBody = {
        eventTypeId: 1,
        startTime: "2025-04-01T10:00:00Z", // Replace with actual start time
        endTime: "2025-04-01T11:00:00Z",   // Replace with actual end time
        attendeeName: "John Doe",          // Replace with actual attendee name
        attendeeEmail: "john.doe@example.com", // Replace with actual attendee email
      };

      console.log("Request Body:", requestBody);

      const response = await fetch("/api/proxy/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create booking: ${response.status}`);
      }

      const data = await response.json();
      console.log("Booking created successfully:", data);
      alert("Booking created successfully!");
    } catch (err) {
      console.error("Error creating booking:", err);
      setError("Failed to create booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleBooking} disabled={isLoading} {...props}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Booking...
          </>
        ) : (
          text
        )}
      </Button>

      {error && <p className="text-destructive text-sm mt-2">{error}</p>}
    </>
  );
}