import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stéphana Dorval. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
