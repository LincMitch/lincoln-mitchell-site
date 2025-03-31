import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  CheckCircle,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Sparkles,
  User,
  Briefcase,
  Award,
  Code,
  Palette,
  MessageSquare,
  Calendar,
  Zap,
  Layers,
  Lightbulb,
  Cpu,
  PenTool,
  Compass,
  Rocket,
  Brain,
  Bot,
  GitBranch,
  GitMerge,
  Database,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-4 text-white/90 text-sm">
                <Sparkles className="h-4 w-4 mr-2 text-primary-300" />
                Design Systems & Innovation Expert
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Lincoln Mitchell</h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Design Systems & Innovation Consultant</h2>
              <p className="text-xl mb-8 text-white/90">
                Bridging design and development to create game-changing prototypes and design systems that accelerate
                innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary-600 hover:bg-white/90 neon-shadow">
                  <Link href="/booking">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Book a Session
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="/lincoln-mitchell-resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl neon-shadow">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ED9fRhZRzNseu81BLkKV6YikwWpB2B.png"
                alt="Lincoln Mitchell"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center neon-shadow">
                <User className="h-8 w-8 text-primary-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-primary-200 shadow-md gradient-border">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ED9fRhZRzNseu81BLkKV6YikwWpB2B.png"
                    alt="Lincoln Mitchell"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 prose prose-lg max-w-none">
                <p>
                  As a veteran of Front-End Development, Digital Product Design, and Product Management, I specialize in
                  enabling creative individuals to prototype game-changing ideas. My expertise lies in implementing
                  code-based Design Systems within prototyping tools to communicate Northstar concepts to executives,
                  which in turn drive Product Design and delivery.
                </p>
                <p>
                  I'm currently available for consulting engagements and am open to full-time positions where I can lead
                  innovation initiatives and design system implementations. My approach bridges the gap between design
                  and development, ensuring that good ideas don't end up in the "good ideas bin."
                </p>
                <div className="flex items-center mt-6">
                  <Button asChild variant="outline" className="flex items-center gradient-border">
                    <a href="https://www.linkedin.com/in/mitchelllincoln/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center neon-shadow">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-effect border-0 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center neon-shadow">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-primary-700">Design System Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I create and implement code-based design systems that bridge the gap between design and development,
                  reducing technical debt and accelerating delivery by 50-85%.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-0 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center neon-shadow">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-primary-700">Northstar Prototyping</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I develop high-fidelity prototypes that communicate innovative concepts to executives and
                  stakeholders, turning abstract ideas into tangible experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="glass-effect border-0 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center neon-shadow">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-primary-700">Innovation Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  I lead innovation initiatives that transform organizations, fostering a culture of creativity and
                  experimentation while ensuring practical implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section id="ai-integration" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center neon-shadow">
              <Brain className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">AI Integration</h2>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-center">
                AI is central to my work, serving as a powerful bridge between designers, developers, and product
                managers in day-to-day delivery. I leverage AI tools to accelerate workflows, enhance communication, and
                create more cohesive experiences across the entire product lifecycle.
              </p>
            </div>

            {/* Discovery to Delivery Chart */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-xl shadow-lg mb-12">
              <h3 className="text-2xl font-bold text-primary-700 mb-8 text-center">
                AI as the Bridge from Discovery to Delivery
              </h3>

              <div className="relative">
                {/* Discovery Side */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <Lightbulb className="h-5 w-5 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-bold text-primary-700">Discovery</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>User Research</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Concept Exploration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Stakeholder Alignment</span>
                      </li>
                    </ul>
                  </div>

                  {/* AI Bridge */}
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 rounded-lg shadow-md text-white transform md:translate-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                        <Brain className="h-5 w-5 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-bold">AI Bridge</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Bot className="h-4 w-4 text-white mr-2 mt-1 flex-shrink-0" />
                        <span>Rapid Prototyping</span>
                      </li>
                      <li className="flex items-start">
                        <Database className="h-4 w-4 text-white mr-2 mt-1 flex-shrink-0" />
                        <span>Design Token Generation</span>
                      </li>
                      <li className="flex items-start">
                        <Code className="h-4 w-4 text-white mr-2 mt-1 flex-shrink-0" />
                        <span>Code Generation</span>
                      </li>
                      <li className="flex items-start">
                        <GitMerge className="h-4 w-4 text-white mr-2 mt-1 flex-shrink-0" />
                        <span>Cross-team Translation</span>
                      </li>
                    </ul>
                  </div>

                  {/* Delivery Side */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                        <Rocket className="h-5 w-5 text-primary-600" />
                      </div>
                      <h4 className="text-xl font-bold text-primary-700">Delivery</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Component Development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Design System Integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                        <span>Production Implementation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Design Tokens Flow */}
                <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <Palette className="h-5 w-5 text-primary-600" />
                    </div>
                    <h4 className="text-xl font-bold text-primary-700">Design Tokens Flow</h4>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center mb-6 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2">
                        <PenTool className="h-8 w-8 text-primary-600" />
                      </div>
                      <p className="font-medium">Design</p>
                    </div>

                    <div className="hidden md:block">
                      <GitBranch className="h-8 w-8 text-primary-300 rotate-90 md:rotate-0" />
                    </div>

                    <div className="text-center mb-6 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-2">
                        <Database className="h-8 w-8 text-accent-600" />
                      </div>
                      <p className="font-medium">Design Tokens</p>
                    </div>

                    <div className="hidden md:block">
                      <GitBranch className="h-8 w-8 text-primary-300 rotate-90 md:rotate-0" />
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2">
                        <Code className="h-8 w-8 text-primary-600" />
                      </div>
                      <p className="font-medium">Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-primary-700">How I Use AI in My Workflow</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Bridging Communication Gaps:</strong> AI helps translate designer requirements into
                    developer specifications and vice versa, ensuring everyone speaks the same language.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Accelerating Prototyping:</strong> I use AI to rapidly generate and iterate on prototypes,
                    allowing teams to visualize concepts faster and make decisions with confidence.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Design Token Management:</strong> AI helps generate, maintain, and transform design tokens
                    across different platforms and frameworks, ensuring consistency throughout the product.
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>BAU Efficiency:</strong> In day-to-day operations, AI assists with code generation,
                    documentation, and quality assurance, freeing up time for higher-value creative work.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center neon-shadow">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Experience Highlights</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="border-l-4 border-primary-500 pl-6 relative">
              <div className="absolute -left-7 top-0 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-700">PenCS</h3>
              <p className="text-gray-600 mb-2">
                Design Systems Lead, Design Lead & Innovation Lead (July 2023 - Aug 2024)
              </p>
              <p className="mb-4">
                Led the development of a world-class Design System based on Chakra UI and Token Studio within Plasmic
                for their flagship product. Created Northstar prototypes that communicated innovative concepts to
                executives, driving product strategy and development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Layers className="h-3 w-3 mr-1" />
                  Design Systems
                </span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Lightbulb className="h-3 w-3 mr-1" />
                  Northstar Prototyping
                </span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Rocket className="h-3 w-3 mr-1" />
                  Innovation
                </span>
              </div>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 relative">
              <div className="absolute -left-7 top-0 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-700">Dentsu (Merkle)</h3>
              <p className="text-gray-600 mb-2">Design Associate Director (May 2022 - June 2023)</p>
              <p className="mb-4">
                Led a worldwide Design System initiative connecting the Australian office (Merkle ANZ) with the German
                office (Merkle DACH). Implemented Plasmic, Chakra UI, and Design Tokens, providing design tokens to the
                authoring experience in AEM.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Layers className="h-3 w-3 mr-1" />
                  Global Design Systems
                </span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Palette className="h-3 w-3 mr-1" />
                  Multi-brand Theming
                </span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  Mentorship
                </span>
              </div>
            </div>

            <div className="border-l-4 border-primary-500 pl-6 relative">
              <div className="absolute -left-7 top-0 w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-700">Breville</h3>
              <p className="text-gray-600 mb-2">Design Systems Lead / Senior UX Design (May 2021 - April 2022)</p>
              <p className="mb-4">
                Led the initiative to create a code-based design system to address quality control, speed of execution,
                and rapid innovation. Placed production-ready React components in Framer rather than StoryBook and used
                ESModules with AWS pipeline.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Code className="h-3 w-3 mr-1" />
                  React Components
                </span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <PenTool className="h-3 w-3 mr-1" />
                  Framer Integration
                </span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                  <Rocket className="h-3 w-3 mr-1" />
                  Innovation
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="gradient-border">
              <a href="/lincoln-mitchell-resume.pdf" download>
                View Full Experience
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center neon-shadow">
              <Code className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect border-0 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center neon-shadow">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-primary-700">Design & Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Northstar Concept Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Design Systems Architecture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>UX/UI Design Leadership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>High-Fidelity Prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Design Thinking Facilitation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center neon-shadow">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-primary-700">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>React & Next.js Development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Design Tokens & Style Dictionary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Chakra UI & Component Libraries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Plasmic.app, Framer & UX Pin Merge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Figma & Design Tool Integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>AI Tools & Prompt Engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Linc's Design System Section */}
      <section
        id="design-system"
        className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full filter blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center neon-shadow">
              <Palette className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Linc's Design System</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Rather than starting from scratch at a company, I provide a base open-source Design System that has the
                potential to increase delivery speed by 50 to 85%. This system is built with React, Chakra UI, and
                Design Tokens, making it highly adaptable to different brand requirements.
              </p>
              <p>
                My approach bridges the gap between design and development, allowing for rapid prototyping of innovative
                concepts while ensuring production-ready code. As the saying goes: "If a picture is worth a thousand
                words, a prototype is worth a thousand meetings."
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg mt-6 glass-effect">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700 m-0">Key Benefits</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Accelerated delivery through reusable components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Seamless integration between design and development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reduced technical and design debt</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consistent user experience across products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center neon-shadow">
              <MessageSquare className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Get in Touch</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="glass-effect border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <User className="h-4 w-4 text-primary-600" />
                  </div>
                  <CardTitle className="text-primary-700">Contact Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p>0414 286 433</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p>contact@lincolnmitchell.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p>Brooklyn, NSW 2083, Australia</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Linkedin className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/mitchelllincoln/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline flex items-center"
                    >
                      linkedin.com/in/mitchelllincoln
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                    <Briefcase className="h-4 w-4 text-primary-600" />
                  </div>
                  <CardTitle className="text-primary-700">Interested in Working Together?</CardTitle>
                </div>
                <CardDescription>
                  I'm available for consulting engagements and open to full-time positions in innovation and design
                  leadership.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Button asChild className="w-full bg-primary-600 hover:bg-primary-700 neon-shadow">
                      <Link href="/booking">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Book a Session
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <Button asChild variant="outline" className="w-full gradient-border">
                      <a href="mailto:contact@lincolnmitchell.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send an Email
                      </a>
                    </Button>
                  </div>
                  <div>
                    <Button asChild variant="secondary" className="w-full bg-accent-600 hover:bg-accent-700">
                      <a href="/lincoln-mitchell-resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-accent-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center neon-shadow">
              <Calendar className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Book a Session</h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your design and development process? Book a consultation or discovery session to get
              started.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-effect border-0 shadow-lg bg-white/10 text-white relative">
                <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-white flex items-center justify-center neon-shadow">
                  <Compass className="h-6 w-6 text-primary-600" />
                </div>
                <CardHeader>
                  <CardTitle>Initial Consultation</CardTitle>
                  <CardDescription className="text-white/70">60 minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A focused session to discuss your design system needs and explore potential solutions.
                  </p>
                  <p className="font-bold text-lg">$250 AUD</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-white text-primary-600 hover:bg-white/90 neon-shadow">
                    <Link href="/booking?service=consultation">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="glass-effect border-0 shadow-lg bg-white/10 text-white relative">
                <div className="absolute -top-2 left-0 right-0 flex justify-center">
                  <span className="bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full neon-shadow">
                    Most Popular
                  </span>
                </div>
                <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-white flex items-center justify-center neon-shadow">
                  <Lightbulb className="h-6 w-6 text-primary-600" />
                </div>
                <CardHeader>
                  <CardTitle>Discovery Session</CardTitle>
                  <CardDescription className="text-white/70">90 minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A deep dive into your organization's design and development processes to identify opportunities for
                    innovation.
                  </p>
                  <p className="font-bold text-lg">$375 AUD</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-white text-primary-600 hover:bg-white/90 neon-shadow">
                    <Link href="/booking?service=discovery">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="glass-effect border-0 shadow-lg bg-white/10 text-white relative">
                <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-white flex items-center justify-center neon-shadow">
                  <Zap className="h-6 w-6 text-primary-600" />
                </div>
                <CardHeader>
                  <CardTitle>Design System Workshop</CardTitle>
                  <CardDescription className="text-white/70">3 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A workshop for your team to learn about code-based design systems and how to implement them.
                  </p>
                  <p className="font-bold text-lg">$750 AUD</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-white text-primary-600 hover:bg-white/90 neon-shadow">
                    <Link href="/booking?service=workshop">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8">
              <p className="text-white/70 mb-4">
                All sessions include secure payment processing via Stripe and calendar integration with Cal.com.
              </p>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/booking">View All Booking Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

