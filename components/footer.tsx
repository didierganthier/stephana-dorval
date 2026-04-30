"use client"

import Link from "next/link"
import { useSiteLanguage } from "@/lib/use-site-language"

export function Footer() {
  const language = useSiteLanguage()

  const labels =
    language === "fr"
      ? { work: "Œuvre", about: "À propos", services: "Services", contact: "Contact", rights: "Tous droits réservés." }
      : { work: "Work", about: "About", services: "Services", contact: "Contact", rights: "All rights reserved." }

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stephana Dorval. {labels.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/work"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {labels.work}
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {labels.about}
            </Link>
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {labels.services}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              {labels.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
