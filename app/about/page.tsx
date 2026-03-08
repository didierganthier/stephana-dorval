"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { useEffect, useState } from "react"

export default function AboutPage() {
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
              About
            </div>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              A Voice for Haitian Literature
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Capturing the complexity of life in Haiti through poetic prose and vivid storytelling, exploring
              resilience, identity, and the beauty found in Port-au-Prince.
            </p>
          </div>
        </section>

        {/* Biography & Writing Philosophy */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
            <AnimatedSection>
              <div>
                <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Biography</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="transition-all duration-300 hover:text-foreground">
                    Stéphana Dorval is born in 1998. She is a writer with deep roots in Haitian culture and literature.
                    With a background in literature and creative writing, her works blend the vibrancy of Haitian life
                    with universal themes of survival, identity, and hope.
                  </p>
                  <p className="transition-all duration-300 hover:text-foreground">
                    She began her career with poetry, releasing the acclaimed "Siwomyèl ak Sèl," and has since moved
                    into novel writing with her latest work, "Port-au-Prince: Mon brasier de ville." Stéphana is driven
                    by a desire to give voice to those often overlooked and to capture the essence of Haiti in all its
                    complexity.
                  </p>
                </div>

                <div className="mt-12 rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  <Image
                    src="/stephana-event.jpg"
                    alt="Stéphana Dorval at literary event"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Writing Philosophy</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="transition-all duration-300 hover:text-foreground">
                    Stéphana's writing is an exploration of human resilience and the pursuit of hope in the face of
                    adversity. Her prose is deeply poetic, focusing on emotions, culture, and the intricate beauty found
                    in everyday life.
                  </p>
                  <p className="transition-all duration-300 hover:text-foreground">
                    Through her narrative style, she brings to life the stories of people struggling, thriving, and
                    finding meaning amidst turmoil.
                  </p>
                </div>

                <div className="mt-12 p-6 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-muted/50 hover:scale-105">
                  <div className="aspect-3/4 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="/stephana.jpg"
                      alt="Stéphana Dorval"
                      width={600}
                      height={800}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Themes & Inspiration */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Themes & Inspiration</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Cultural Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Exploring what it means to be Haitian in a globalized world, celebrating cultural heritage while
                    addressing contemporary challenges.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Resilience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stories of survival and strength in the face of adversity, highlighting the indomitable spirit of
                    individuals and communities.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Urban Life</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Port-au-Prince as both setting and character, capturing the city's chaos, beauty, dreams, and
                    contradictions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl">Hope & Beauty</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Finding moments of grace, love, and beauty even in difficult circumstances, celebrating the human
                    capacity for joy.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  )
}
