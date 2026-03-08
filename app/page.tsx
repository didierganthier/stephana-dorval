"use client"

import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Feather, ExternalLink, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div
                className={`mb-6 text-sm text-muted-foreground tracking-wide uppercase transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Haitian Author & Literary Artist
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Weaving intricate tales of human experience and cultural identity
              </h1>
              <p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                Stéphana Dorval is a passionate Haitian author who captures the complexity of life in Haiti through
                poetic prose and vivid storytelling, exploring resilience, identity, and the beauty found in
                Port-au-Prince.
              </p>
              <div
                className={`flex flex-wrap gap-4 mt-8 transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                  <Link href="/work">
                    Explore My Work
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={`relative transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-muted/30 shadow-2xl">
                <Image
                  src="/stephana.jpg"
                  alt="Stéphana Dorval - Haitian Author"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
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
                    <Link href="/work" className="flex items-center gap-2">
                      Learn more
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
              asChild
            >
              <Link href="/work">
                View All Published Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
