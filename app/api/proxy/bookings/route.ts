import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("Using API Key:", process.env.CAL_API_KEY);

    const body = await request.json();
    console.log("Request Body:", {
      eventTypeId: body.eventTypeId,
      start: body.start,
      end: body.end,
      timeZone: body.timeZone,
      language: body.language,
      attendeeName: body.attendeeName,
      attendeeEmail: body.attendeeEmail,
      metadata: body.metadata,
    });

    const response = await fetch("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CAL_API_KEY}`,
      },
      body: JSON.stringify({
        eventTypeId: body.eventTypeId,
        start: body.start,
        end: body.end,
        timeZone: body.timeZone,
        language: body.language,
        attendeeName: body.attendeeName,
        attendeeEmail: body.attendeeEmail,
        metadata: body.metadata || {}, // Default to an empty object if metadata is not provided
      }),
    });

    console.log("Cal.com Response Status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Cal.com API Error:", errorData);
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    console.log("Cal.com Response Body:", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error proxying request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}