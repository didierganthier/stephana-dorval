"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Feather, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export default function WorkPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content">
        {/* Page Header */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl">
            <div
              className={`mb-6 text-sm text-muted-foreground tracking-wide uppercase transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Portfolio
            </div>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Published Works & Writing
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Explore a collection of published novels, poetry, essays, and media features showcasing the depth of
              Haitian literary artistry.
            </p>
          </div>
        </section>

        {/* Featured Work */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Featured Work</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <div className="mb-4">
                  <BookOpen className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="text-2xl font-serif mb-3 transition-colors duration-300 group-hover:text-primary">
                    Port-au-Prince: Mon brasier de ville
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A gripping novel that portrays the resilience of a city and its people amidst chaos. Follow Mila as
                    she navigates the emotional and physical landscapes of Port-au-Prince—a city that is both a cradle
                    of dreams and a battleground of broken hopes.
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary transition-all duration-300 group-hover:gap-3"
                    asChild
                  >
                    <a href="#published" className="flex items-center gap-2">
                      Learn more
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <div className="mb-4">
                  <Feather className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="text-2xl font-serif mb-3 transition-colors duration-300 group-hover:text-primary">
                    Siwomyèl ak Sèl
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A collection of poetry that delves into the personal and collective Haitian experience through four
                    long poems written in Haitian Creole. A seawater bottle telling how a blossoming young woman carries
                    within her life, despair, love, and an entire country.
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary transition-all duration-300 group-hover:gap-3"
                    asChild
                  >
                    <a
                      href="https://a.co/d/2mQZhxw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Available on Amazon
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Writing Samples */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Writing Samples</h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                <h3 className="font-serif text-xl mb-3">Poetry</h3>
                <p className="text-sm text-muted-foreground mb-4">Siwomyèl ak Sèl</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A collection that weaves cultural imagery with personal introspection. The essence of the poetry of a
                  black girl who dances while playing hide and seek over time. Honey and salt. A little bit of joy
                  within so many shadows.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} className="lg:col-span-2">
              <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                <h3 className="font-serif text-xl mb-3">Fiction</h3>
                <p className="text-sm text-muted-foreground mb-4">Port-au-Prince: Mon brasier de ville</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The novel follows Mila, a young woman who navigates the emotional and physical landscapes of a city
                  engulfed in chaos. Port-au-Prince is more than just a backdrop; it is a character in itself—both a
                  cradle of dreams and a battleground of broken hopes. This is a story about survival—of individuals, of
                  relationships, and of a city that refuses to surrender to despair.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Published Work */}
        <section id="published" className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Published Work</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            <AnimatedSection delay={100}>
              <div className="pb-8 border-b border-border/50 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-serif text-2xl mb-2">Port-au-Prince: Mon brasier de ville</h3>
                <p className="text-muted-foreground mb-4">Available at Librairie La Pléïade, Haïti</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                    asChild
                  >
                    <a
                      href="https://www.lavantgardiste.net/fictions2707.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      L'Avant-Gardiste Review
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                    asChild
                  >
                    <a
                      href="https://lenouvelliste.com/article/249678/port-au-prince-sous-la-plume-de-stephana-dorval"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Le Nouvelliste Article
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="pb-8 border-b border-border/50 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-serif text-2xl mb-2">Siwomyèl ak sèl</h3>
                <p className="text-muted-foreground mb-4">Poetry Collection</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                  asChild
                >
                  <a
                    href="https://a.co/d/2mQZhxw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Available on Amazon
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div>
                <h3 className="font-serif text-2xl mb-4">Essays, Articles & Media</h3>
                <div className="space-y-3">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary justify-start transition-all duration-300 hover:gap-3 hover:translate-x-2"
                    asChild
                  >
                    <a
                      href="https://letempslitteraire.wordpress.com/2022/02/26/pour-elle-qui-merite-la-mer-et-le-ciel-et-le-chant-des-colibris/#more-3224"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Le Temps Littéraire Feature
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary justify-start transition-all duration-300 hover:gap-3 hover:translate-x-2"
                    asChild
                  >
                    <a
                      href="https://lenouvelliste.com/article/249416/stephana-dorval-enthousiaste-a-lidee-de-participer-a-livres-en-folie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Le Nouvelliste Interview
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary justify-start transition-all duration-300 hover:gap-3 hover:translate-x-2"
                    asChild
                  >
                    <a
                      href="https://youtu.be/XVDX3tlZ0RQ?si=oGugg1LfOOAk2z8u"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Video Interview
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
