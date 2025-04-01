import { Heading } from "@/components/Heading"
import { Text } from "@/components/Text"
import { Card } from "@/components/Card"
import Link from "next/link"
import { Button } from "@/components/Button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center p-8 md:p-24">
        <div className="w-full max-w-4xl">
          <Heading level={1} className="mb-6 text-4xl font-bold">
            About Lincoln Mitchell
          </Heading>

          <Text className="mb-8 text-lg">
            Lincoln Mitchell is a design systems and innovation consultant with over two decades of experience in
            bridging design and development to create game-changing prototypes and products.
          </Text>

          <div className="mb-12">
            <Heading level={2} className="mb-4 text-2xl font-bold">
              Experience
            </Heading>
            <Card className="mb-4">
              <Heading level={3} className="mb-2 text-xl font-semibold">
                Design Systems Lead
              </Heading>
              <Text className="text-gray-500">2023 - Present</Text>
              <Text className="mt-2">
                Providing strategic advice to organizations on implementing code-based design systems that bridge the
                gap between design and development.
              </Text>
            </Card>
            <Card className="mb-4">
              <Heading level={3} className="mb-2 text-xl font-semibold">
                Innovation Consultant
              </Heading>
              <Text className="text-gray-500">2021 - Present</Text>
              <Text className="mt-2">
                Helping organizations develop and implement innovative approaches to product design and development
                through Northstar prototyping.
              </Text>
            </Card>
          </div>

          <div className="mb-12">
            <Heading level={2} className="mb-4 text-2xl font-bold">
              Expertise
            </Heading>
            <Card className="mb-4">
              <Heading level={3} className="mb-2 text-xl font-semibold">
                Design Systems Architecture
              </Heading>
              <Text className="mt-2">
                Creating and implementing code-based design systems that accelerate delivery by 50-85% while maintaining
                design integrity.
              </Text>
            </Card>
            <Card>
              <Heading level={3} className="mb-2 text-xl font-semibold">
                Northstar Prototyping
              </Heading>
              <Text className="mt-2">
                Developing high-fidelity prototypes that communicate innovative concepts to executives and stakeholders.
              </Text>
            </Card>
          </div>

          <div className="flex justify-center">
            <Link href="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

