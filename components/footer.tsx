import Link from "next/link"
import { Linkedin, Mail, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 text-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">Lincoln Mitchell</h3>
            <p className="text-sm text-white/80">
              Design Systems & Innovation Consultant providing expert guidance on bridging design and development to
              create game-changing prototypes and products.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-white/80 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-white/80 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-sm text-white/80 hover:text-white">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-sm text-white/80 hover:text-white">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#design-system" className="text-sm text-white/80 hover:text-white">
                  Design System
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="text-sm text-white/80 hover:text-white">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-white/80">
                <Phone className="h-4 w-4 mr-2" />
                0414 286 433
              </li>
              <li className="flex items-center text-sm text-white/80">
                <Mail className="h-4 w-4 mr-2" />
                contact@lincolnmitchell.com
              </li>
              <li className="flex items-center text-sm text-white/80">
                <Linkedin className="h-4 w-4 mr-2" />
                <a
                  href="https://www.linkedin.com/in/mitchelllincoln/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  linkedin.com/in/mitchelllincoln
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <Button asChild className="bg-white text-primary-600 hover:bg-white/90 neon-shadow">
                <Link href="/booking">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Book a Session
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Lincoln Mitchell. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <Link href="/booking" className="text-sm font-medium text-white hover:text-primary-200">
              Book a Session
            </Link>
            <span className="text-white/40">|</span>
            <a href="/lincoln-mitchell-resume.pdf" download className="text-sm text-white/80 hover:text-white">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

