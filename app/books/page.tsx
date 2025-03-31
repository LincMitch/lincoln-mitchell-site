import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BooksPage() {
  const books = [
    {
      id: 1,
      title: "The Democracy Agenda",
      year: 2022,
      description: "An analysis of democratic institutions and their challenges in the 21st century.",
      publisher: "Oxford University Press",
      coverImage: "/placeholder.svg?height=400&width=300&text=Book+1",
      amazonLink: "#",
      category: "democracy",
    },
    {
      id: 2,
      title: "American Politics in Transition",
      year: 2020,
      description: "A comprehensive examination of the changing landscape of American politics.",
      publisher: "Columbia University Press",
      coverImage: "/placeholder.svg?height=400&width=300&text=Book+2",
      amazonLink: "#",
      category: "american-politics",
    },
    {
      id: 3,
      title: "The Post-Soviet World",
      year: 2018,
      description: "An exploration of political developments in former Soviet states since 1991.",
      publisher: "Cambridge University Press",
      coverImage: "/placeholder.svg?height=400&width=300&text=Book+3",
      amazonLink: "#",
      category: "international",
    },
    {
      id: 4,
      title: "Democracy and Development",
      year: 2016,
      description: "A study of the relationship between democratic governance and economic development.",
      publisher: "Princeton University Press",
      coverImage: "/placeholder.svg?height=400&width=300&text=Book+4",
      amazonLink: "#",
      category: "democracy",
    },
    {
      id: 5,
      title: "Elections in the Digital Age",
      year: 2019,
      description: "An examination of how technology is transforming electoral politics.",
      publisher: "MIT Press",
      coverImage: "/placeholder.svg?height=400&width=300&text=Book+5",
      amazonLink: "#",
      category: "american-politics",
    },
    {
      id: 6,
      title: "Global Democracy Movements",
      year: 2017,
      description: "A global perspective on democracy movements and their impact.",
      publisher: "Yale University Press",
      coverImage: "/placeholder.svg?height=400&width=300&text=Book+6",
      amazonLink: "#",
      category: "international",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-4">Books</h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Explore Lincoln Mitchell's published works on politics, democracy, and international affairs
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Books</TabsTrigger>
            <TabsTrigger value="democracy">Democracy</TabsTrigger>
            <TabsTrigger value="american-politics">American Politics</TabsTrigger>
            <TabsTrigger value="international">International Affairs</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="democracy" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {books
                .filter((book) => book.category === "democracy")
                .map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="american-politics" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {books
                .filter((book) => book.category === "american-politics")
                .map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="international" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {books
                .filter((book) => book.category === "international")
                .map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-24">
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in a Speaking Engagement?</h2>
            <p className="text-muted-foreground mb-6 max-w-[700px] mx-auto">
              Lincoln Mitchell is available for speaking engagements, book discussions, and workshops related to his
              published works.
            </p>
            <Button asChild size="lg">
              <Link href="/booking?service=speaking">Book a Speaking Engagement</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

function BookCard({ book }: { book: any }) {
  return (
    <Card className="flex flex-col h-full">
      <div className="p-4 flex justify-center">
        <div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-md shadow-md">
          <Image
            src={book.coverImage || "/placeholder.svg"}
            alt={book.title}
            width={200}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>
          {book.year} • {book.publisher}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{book.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/books/${book.id}`}>Details</Link>
        </Button>
        <Button asChild>
          <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
            Purchase
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

