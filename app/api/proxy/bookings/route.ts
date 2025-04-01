import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Log the API key to verify it's being loaded
    console.log("Using API Key:", process.env.CAL_API_KEY);

    const body = await request.json();

    const response = await fetch("https://api.cal.com/v1/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CAL_API_KEY}`, // Use your Cal.com API key
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error proxying request:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}