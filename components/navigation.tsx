"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "@/components/language-toggle"
import { useSiteLanguage } from "@/lib/use-site-language"

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const language = useSiteLanguage()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks =
    language === "fr"
      ? [
          { href: "/work", label: "Œuvre" },
          { href: "/about", label: "À propos" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" },
        ]
      : [
          { href: "/work", label: "Work" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" },
        ]

  return (
    <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-md z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            aria-label="Stephana Dorval"
          >
            <div className="flex items-center">
              <Image
                src="/stephana-logo-black-tight.png"
                alt="Stephana Dorval logo"
                width={1287}
                height={445}
                className="h-8 w-auto dark:hidden md:h-10"
                priority
              />
              <Image
                src="/stephana-logo-white-tight.png"
                alt="Stephana Dorval logo"
                width={1287}
                height={445}
                className="hidden h-8 w-auto dark:block md:h-10"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-6 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-all duration-300 hover:scale-105 ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm py-2 transition-all duration-300 ${
                    pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
