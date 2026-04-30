"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, BookOpen, Mail, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { useSiteLanguage } from "@/lib/use-site-language"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const language = useSiteLanguage()

  const content =
    language === "fr"
      ? {
          title: "Page introuvable",
          description:
            "La page que vous cherchez semble s'être égarée comme un personnage en quête de sa propre histoire. Revenons au bon endroit.",
          cards: [
            { title: "Accueil", text: "Retourner à la page d'accueil", cta: "Aller à l'accueil" },
            { title: "Mon œuvre", text: "Explorer les publications", cta: "Voir l'œuvre" },
            { title: "Contact", text: "Entrer en contact", cta: "Me contacter" },
          ],
          back: "Retour à l'accueil",
        }
      : {
          title: "Page Not Found",
          description:
            "The page you're looking for seems to have wandered off like a character in search of their own story. Let's get you back on track.",
          cards: [
            { title: "Home", text: "Return to the homepage", cta: "Go Home" },
            { title: "My Work", text: "Explore published works", cta: "View Work" },
            { title: "Contact", text: "Get in touch", cta: "Contact Me" },
          ],
          back: "Back to Homepage",
        }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main id="main-content" className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h1 className="text-9xl font-serif text-primary mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{content.title}</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                {content.description}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Home className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-serif mb-2">{content.cards[0].title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{content.cards[0].text}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/">{content.cards[0].cta}</Link>
                  </Button>
                </Card>
                <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-serif mb-2">{content.cards[1].title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{content.cards[1].text}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/work">{content.cards[1].cta}</Link>
                  </Button>
                </Card>
                <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-serif mb-2">{content.cards[2].title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{content.cards[2].text}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/contact">{content.cards[2].cta}</Link>
                  </Button>
                </Card>
              </div>

              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {content.back}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
