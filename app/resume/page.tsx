import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Button asChild>
            <a href="/lincoln-mitchell-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Lincoln Mitchell</CardTitle>
            <div className="text-lg text-gray-600">Innovation & Design Systems Leader</div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
                <p>
                  Visionary Innovation and Design Systems Leader with over 20 years of experience bridging design and
                  development to create game-changing prototypes and products. Specialized in enabling creative
                  individuals to prototype Northstar concepts that drive executive decision-making and product strategy.
                  Expert in implementing code-based Design Systems that accelerate delivery by 50-85% while maintaining
                  design integrity.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">Core Competencies</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Northstar Concept Development & Prototyping</li>
                  <li>Innovation Leadership & Strategic Vision</li>
                  <li>Design Systems Architecture & Implementation</li>
                  <li>Cross-functional Team Leadership</li>
                  <li>Executive Communication & Influence</li>
                  <li>Code-based Design Tools (Plasmic, Framer, UX Pin Merge)</li>
                  <li>React & Next.js Development</li>
                  <li>Design Tokens & Multi-brand Theming</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">PenCS</h3>
                <p className="text-gray-600 mb-2">
                  Design Systems Lead, Design Lead & Innovation Lead (July 2023 - Aug 2024)
                </p>
                <p className="mb-2">
                  Led innovation initiatives and design system implementation for a healthcare technology company,
                  focusing on creating Northstar prototypes that communicated future vision to executives and
                  stakeholders.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Innovation Leadership:</strong> Created Northstar prototypes in Plasmic that visualized
                    future product direction, gaining executive buy-in for strategic initiatives.
                  </li>
                  <li>
                    <strong>Design System Implementation:</strong> Developed a world-class Design System based on Chakra
                    UI and Token Studio within Plasmic, reducing development time by 60%.
                  </li>
                  <li>
                    <strong>Cross-functional Collaboration:</strong> Worked directly with executive leadership to
                    translate strategic vision into tangible prototypes and implementation plans.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Dentsu (Merkle)</h3>
                <p className="text-gray-600 mb-2">Design Associate Director (May 2022 - June 2023)</p>
                <p className="mb-2">
                  Led a global Design System initiative connecting Australian and German offices, implementing
                  innovative approaches to multi-brand and multi-themed websites.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Global Innovation:</strong> Pioneered the use of Design Tokens for the authoring experience
                    in AEM, creating a seamless workflow between design and content management.
                  </li>
                  <li>
                    <strong>Multi-brand Strategy:</strong> Developed a token-based theming system that supported
                    multiple brands while maintaining design consistency and development efficiency.
                  </li>
                  <li>
                    <strong>Mentorship & Leadership:</strong> Guided UI designers in the use of Design Tokens for
                    complex multi-brand websites, fostering a culture of innovation and technical excellence.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Breville</h3>
                <p className="text-gray-600 mb-2">Design Systems Lead / Senior UX Design (May 2021 - April 2022)</p>
                <p className="mb-2">
                  Led the initiative to create a code-based design system that addressed quality control, speed of
                  execution, and rapid innovation for a global appliance manufacturer.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Innovative Approach:</strong> Placed production-ready React components in Framer rather than
                    StoryBook, creating a seamless bridge between design and development.
                  </li>
                  <li>
                    <strong>Technical Leadership:</strong> Implemented ESModules with AWS pipeline, ensuring
                    high-quality, production-ready components that could be used directly in prototypes.
                  </li>
                  <li>
                    <strong>Organizational Change:</strong> Inspired all developers to adopt Framer as the design system
                    platform, creating a unified source of truth for design and development.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Telstra Health</h3>
                <p className="text-gray-600 mb-2">
                  Senior Product Designer / Design Systems / Prototyper (Oct 2020 - Jan 2021)
                </p>
                <p className="mb-2">
                  Part of a new team focused on increasing innovation and big-picture thinking for healthcare
                  applications.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Innovation Leadership:</strong> Led the initiative to place the code base in Framer X,
                    enabling realistic prototyping of Northstar concepts.
                  </li>
                  <li>
                    <strong>Process Innovation:</strong> Contributed to a new Design Process that incorporated Northstar
                    prototyping as a key step in product development.
                  </li>
                  <li>
                    <strong>Strategic Collaboration:</strong> Worked with stakeholders on a Medication Management
                    module, driving changes at the application and platform level.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold">Medical Director (now Telstra Health)</h3>
                <p className="text-gray-600 mb-2">Chief Design Officer (CDO) (Jun 2014 – Nov 2016)</p>
                <p className="mb-2">
                  Promoted to Chief Design Officer to create a design-led culture and provide vision for bringing
                  desirability to a fear-based health industry.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Strategic Vision:</strong> Developed a visionary approach to healthcare technology that was
                    presented to Apple for their patient Health platform.
                  </li>
                  <li>
                    <strong>Executive Leadership:</strong> Received feedback that "This is the type of thought
                    leadership we need... the types of Apple and Google think this way."
                  </li>
                  <li>
                    <strong>Organizational Transformation:</strong> Shifted the company from a delivery/developer
                    culture to a design-led approach focused on innovation and user experience.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2">Leadership & Strategy</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Innovation Leadership</li>
                  <li>Design Systems Strategy</li>
                  <li>Executive Communication</li>
                  <li>Cross-functional Team Leadership</li>
                  <li>Northstar Vision Development</li>
                  <li>Design Thinking Facilitation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Design & Prototyping</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>High-fidelity Prototyping</li>
                  <li>UX/UI Design</li>
                  <li>Design Systems Architecture</li>
                  <li>User Research Integration</li>
                  <li>Design Tokens & Theming</li>
                  <li>Multi-brand Design Systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Technical Skills</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>React & Next.js</li>
                  <li>Chakra UI & Component Libraries</li>
                  <li>Design Tokens & Style Dictionary</li>
                  <li>Plasmic.app</li>
                  <li>Framer & UX Pin Merge</li>
                  <li>Figma & Design Tool Integration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Methodologies</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Design Thinking</li>
                  <li>Lean UX</li>
                  <li>Agile/Scrum</li>
                  <li>Design Sprints</li>
                  <li>Jobs-to-be-Done Framework</li>
                  <li>User-Centered Design</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Education & Professional Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold">Token Studio Online Course</h3>
                <p className="text-gray-600">2023</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">XD Conf</h3>
                <p className="text-gray-600">July 2020</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">React Training</h3>
                <p className="text-gray-600">Learn React Design & Design Code</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Jeff Patton "Passionate Product Owner Workshop"</h3>
                <p className="text-gray-600">Australia</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Interaction Design Practicum & Communicating Design, Cooper U</h3>
                <p className="text-gray-600">USA</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Associate's Degree in Multi-Media Design</h3>
                <p className="text-gray-600">CMC TAFE - Australia</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <a href="/lincoln-mitchell-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume (PDF)
            </a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

