"use client"

import { useState } from "react"
import { Calendar } from "@/components/Calendar"
import { Heading } from "@/components/Heading"
import { Text } from "@/components/Text"
import { Card } from "@/components/Card"
import { Button } from "@/components/Button"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CalendarExamplePage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center p-8 md:p-24">
        <div className="w-full max-w-4xl">
          <Heading level={1} className="mb-6 text-4xl font-bold">
            Calendar Example
          </Heading>

          <Text className="mb-8 text-lg">This page demonstrates the React Aria Calendar component integration.</Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card>
                <Calendar
                  value={selectedDate}
                  onChange={setSelectedDate}
                  minValue={new Date()} // Can't select dates in the past
                />
              </Card>
            </div>

            <div>
              <Card>
                <Heading level={2} className="mb-4 text-2xl font-bold">
                  Selected Date
                </Heading>
                {selectedDate ? (
                  <Text>You selected: {selectedDate.toLocaleDateString()}</Text>
                ) : (
                  <Text>Please select a date from the calendar.</Text>
                )}

                {selectedDate && (
                  <div className="mt-4">
                    <Button onClick={() => setSelectedDate(undefined)} variant="outline">
                      Clear Selection
                    </Button>
                  </div>
                )}
              </Card>

              <div className="mt-8">
                <Link href="/">
                  <Button variant="primary">Back to Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

