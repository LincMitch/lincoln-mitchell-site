import { Heading } from "@/components/Heading"
import { Text } from "@/components/Text"
import { Card } from "@/components/Card"
import Link from "next/link"
import { Button } from "@/components/Button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="w-full max-w-4xl">
        <Heading level={1} className="mb-6 text-4xl font-bold">
          About Lincoln Mitchell
        </Heading>

        <Text className="mb-8 text-lg">
          Lincoln Mitchell is a political analyst, author, and consultant with over two decades of experience in
          American politics, international relations, and democracy development.
        </Text>

        <div className="mb-12">
          <Heading level={2} className="mb-4 text-2xl font-bold">
            Experience
          </Heading>
          <Card className="mb-4">
            <Heading level={3} className="mb-2 text-xl font-semibold">
              Political Consultant
            </Heading>
            <Text className="text-gray-500">2010 - Present</Text>
            <Text className="mt-2">
              Providing strategic advice to political campaigns, non-profit organizations, and businesses on navigating
              complex political landscapes.
            </Text>
          </Card>
          <Card className="mb-4">
            <Heading level={3} className="mb-2 text-xl font-semibold">
              Columbia University
            </Heading>
            <Text className="text-gray-500">2006 - Present</Text>
            <Text className="mt-2">
              Research Scholar at the Harriman Institute, focusing on post-Soviet politics, democracy development, and
              U.S. foreign policy.
            </Text>
          </Card>
        </div>

        <div className="mb-12">
          <Heading level={2} className="mb-4 text-2xl font-bold">
            Education
          </Heading>
          <Card className="mb-4">
            <Heading level={3} className="mb-2 text-xl font-semibold">
              Ph.D. in Political Science
            </Heading>
            <Text className="text-gray-500">Columbia University</Text>
            <Text className="mt-2">
              Dissertation on democratic transitions in post-Soviet states, with a focus on electoral systems and
              institutional development.
            </Text>
          </Card>
          <Card>
            <Heading level={3} className="mb-2 text-xl font-semibold">
              Master's in International Affairs
            </Heading>
            <Text className="text-gray-500">Columbia University</Text>
            <Text className="mt-2">
              Specialized in international security policy and regional studies of Eastern Europe and the former Soviet
              Union.
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
  )
}

