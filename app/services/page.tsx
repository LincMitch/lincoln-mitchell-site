import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-4">Services</h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Expert political analysis and consulting services tailored to your specific needs
          </p>
        </div>

        <div className="space-y-16">
          {/* Political Consulting */}
          <section id="consulting" className="scroll-mt-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Political Consulting</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Strategic advice for campaigns, organizations, and businesses navigating complex political landscapes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Campaign Strategy</h3>
                      <p className="text-muted-foreground">
                        Develop effective campaign strategies based on data-driven analysis and political insights.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Political Risk Assessment</h3>
                      <p className="text-muted-foreground">
                        Evaluate political risks for businesses and organizations operating in complex environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Policy Development</h3>
                      <p className="text-muted-foreground">
                        Craft effective policy positions and messaging strategies aligned with your goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/booking?service=consulting">Book Consulting Service</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Consulting"
                  alt="Political Consulting"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Research & Analysis */}
          <section id="research" className="scroll-mt-16">
            <div className="grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
              <div className="relative aspect-video overflow-hidden rounded-lg order-last lg:order-first">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Research"
                  alt="Research and Analysis"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Research & Analysis</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In-depth research and analysis on political trends, international relations, and policy issues.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Political Trend Analysis</h3>
                      <p className="text-muted-foreground">
                        Comprehensive analysis of political trends and their implications for your organization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Policy Research</h3>
                      <p className="text-muted-foreground">
                        Detailed research on policy issues and their potential impact on your stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">International Affairs Analysis</h3>
                      <p className="text-muted-foreground">
                        Expert analysis of international relations and geopolitical developments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/booking?service=research">Book Research Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Speaking & Workshops */}
          <section id="speaking" className="scroll-mt-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Speaking & Workshops</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Engaging presentations and workshops on politics, democracy, and international affairs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Keynote Speaking</h3>
                      <p className="text-muted-foreground">
                        Thought-provoking keynote addresses on political topics for conferences and events.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Interactive Workshops</h3>
                      <p className="text-muted-foreground">
                        Hands-on workshops on political analysis, campaign strategy, and democratic processes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Panel Discussions</h3>
                      <p className="text-muted-foreground">
                        Expert participation in panel discussions on current political events and trends.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/booking?service=speaking">Book Speaking Engagement</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Speaking"
                  alt="Speaking and Workshops"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Service Packages */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Choose from our standard service packages or contact us for a custom solution
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Standard Consultation</CardTitle>
                <CardDescription>60-minute consultation session</CardDescription>
                <div className="mt-4 text-4xl font-bold">$200</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>One-on-one consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Preliminary analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Strategic recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Follow-up email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/booking?service=standard">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col border-primary">
              <CardHeader>
                <div className="text-center mb-2 -mt-2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <CardTitle>Extended Consultation</CardTitle>
                <CardDescription>90-minute in-depth consultation</CardDescription>
                <div className="mt-4 text-4xl font-bold">$300</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Extended one-on-one consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Comprehensive analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Detailed strategic plan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Written summary report</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>30-minute follow-up call</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/booking?service=extended">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Premium Package</CardTitle>
                <CardDescription>Comprehensive consulting solution</CardDescription>
                <div className="mt-4 text-4xl font-bold">$500</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Initial 2-hour consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>In-depth research and analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Comprehensive strategy document</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Two follow-up sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Ongoing email support (30 days)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/booking?service=premium">Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Custom Services */}
        <section className="mt-24">
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-6 max-w-[700px] mx-auto">
              Contact us to discuss a tailored service package that meets your specific requirements and objectives.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

