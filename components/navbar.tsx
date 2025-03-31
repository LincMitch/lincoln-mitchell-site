import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Sparkles, Brain } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold gradient-text">Lincoln Mitchell</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link
            href="/#ai-integration"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center"
          >
            <Brain className="h-3 w-3 mr-1" />
            AI Integration
          </Link>
          <Link href="/#experience" className="text-sm font-medium transition-colors hover:text-primary">
            Experience
          </Link>
          <Link href="/#skills" className="text-sm font-medium transition-colors hover:text-primary">
            Skills
          </Link>
          <Link href="/#design-system" className="text-sm font-medium transition-colors hover:text-primary">
            Design System
          </Link>
          <Link href="/#booking" className="text-sm font-medium transition-colors hover:text-primary">
            Book a Session
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden md:inline-flex mr-2 bg-primary-600 hover:bg-primary-700 neon-shadow"
          >
            <Link href="/booking">
              <Sparkles className="mr-2 h-4 w-4" />
              Book a Session
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex gradient-border">
            <a href="/lincoln-mitchell-resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="gradient-border">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/#about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#services">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#ai-integration">AI Integration</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#experience">Experience</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#skills">Skills</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#design-system">Design System</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/booking">Book a Session</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/lincoln-mitchell-resume.pdf" download>
                  Download Resume
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

