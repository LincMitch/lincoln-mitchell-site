"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { CalEmbed } from "@/components/cal/cal-embed"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BookingPage() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get("service")
  const [selectedTab, setSelectedTab] = useState(initialService || "consultation")

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Book a Session</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a consultation or discovery session to discuss your design system and innovation needs.
          </p>

          <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
              <TabsTrigger value="discovery">Discovery Session</TabsTrigger>
              <TabsTrigger value="workshop">Workshop</TabsTrigger>
            </TabsList>

            <TabsContent value="consultation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Initial Consultation</CardTitle>
                  <CardDescription>
                    A 60-minute session to discuss your design system needs and explore potential solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">What to Expect</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Assessment of your current design system</li>
                          <li>Discussion of pain points and challenges</li>
                          <li>Exploration of potential solutions</li>
                          <li>Recommendations for next steps</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Details</h3>
                        <ul className="space-y-1">
                          <li>
                            <strong>Duration:</strong> 60 minutes
                          </li>
                          <li>
                            <strong>Price:</strong> $250 AUD
                          </li>
                          <li>
                            <strong>Location:</strong> Virtual (Zoom)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <CalEmbed calLink="lincolnmitchell/consultation" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discovery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Discovery Session</CardTitle>
                  <CardDescription>
                    A 90-minute deep dive into your organization's design and development processes to identify
                    opportunities for innovation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">What to Expect</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>In-depth analysis of current workflows</li>
                          <li>Identification of innovation opportunities</li>
                          <li>Exploration of Northstar concepts</li>
                          <li>Strategic recommendations</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Details</h3>
                        <ul className="space-y-1">
                          <li>
                            <strong>Duration:</strong> 90 minutes
                          </li>
                          <li>
                            <strong>Price:</strong> $375 AUD
                          </li>
                          <li>
                            <strong>Location:</strong> Virtual (Zoom)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <CalEmbed calLink="lincolnmitchell/discovery" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workshop" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Design System Workshop</CardTitle>
                  <CardDescription>
                    A 3-hour workshop for your team to learn about code-based design systems and how to implement them.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">What to Expect</h3>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Introduction to code-based design systems</li>
                          <li>Hands-on exercises with Plasmic and Chakra UI</li>
                          <li>Implementation strategies for your organization</li>
                          <li>Q&A and personalized guidance</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Details</h3>
                        <ul className="space-y-1">
                          <li>
                            <strong>Duration:</strong> 3 hours
                          </li>
                          <li>
                            <strong>Price:</strong> $750 AUD
                          </li>
                          <li>
                            <strong>Location:</strong> Virtual (Zoom)
                          </li>
                          <li>
                            <strong>Participants:</strong> Up to 10 people
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <CalEmbed calLink="lincolnmitchell/workshop" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need a Custom Engagement?</h2>
            <p className="mb-4">
              If you're looking for a more tailored approach or have specific requirements, I'm happy to discuss a
              custom engagement. This could include multi-day workshops, ongoing consulting, or embedded innovation
              leadership.
            </p>
            <p>
              <a href="/#contact" className="text-primary hover:underline">
                Contact me
              </a>{" "}
              to discuss your specific needs and how I can help.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

