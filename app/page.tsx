"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Feather, Mail, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

function useFadeIn(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return { ref: setRef, isVisible }
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useFadeIn()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const scrollY = useScrollAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-md z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1
              className={`text-xl font-serif tracking-tight transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            >
              Stéphana Dorval
            </h1>
            <div
              className={`hidden md:flex items-center gap-8 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            >
              <Link
                href="#work"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Work
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl">
            <div
              className={`mb-6 text-sm text-muted-foreground tracking-wide uppercase transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Haitian Author & Literary Artist
            </div>
            <h2
              className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              Weaving intricate tales of human experience and cultural identity
            </h2>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Stéphana Dorval is a passionate Haitian author who captures the complexity of life in Haiti through poetic
              prose and vivid storytelling, exploring resilience, identity, and the beauty found in Port-au-Prince.
            </p>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Featured Work</h3>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <div className="mb-4">
                  <BookOpen className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <h4 className="text-2xl font-serif mb-3 transition-colors duration-300 group-hover:text-primary">
                    Port-au-Prince: Mon brasier de ville
                  </h4>
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
                    <Link href="#published" className="flex items-center gap-2">
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
                  <h4 className="text-2xl font-serif mb-3 transition-colors duration-300 group-hover:text-primary">
                    Siwomyèl ak Sèl
                  </h4>
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

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
            <AnimatedSection>
              <div>
                <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Biography</h3>
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
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Writing Philosophy</h3>
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
                  <div className="aspect-[3/4] bg-muted rounded-md flex items-center justify-center overflow-hidden">
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

        {/* Writing Samples */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Writing Samples</h3>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                <h4 className="font-serif text-xl mb-3">Poetry</h4>
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
                <h4 className="font-serif text-xl mb-3">Fiction</h4>
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
              <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Published Work</h3>
            </div>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            <AnimatedSection delay={100}>
              <div className="pb-8 border-b border-border/50 transition-all duration-300 hover:border-primary/30">
                <h4 className="font-serif text-2xl mb-2">Port-au-Prince: Mon brasier de ville</h4>
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
                <h4 className="font-serif text-2xl mb-2">Siwomyèl ak sèl</h4>
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
                <h4 className="font-serif text-2xl mb-4">Essays, Articles & Media</h4>
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

        {/* Services */}
        <section id="services" className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">Writing Services</h3>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <div className="group transition-all duration-300 hover:translate-y-[-4px]">
                <h4 className="font-serif text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  Content Writing
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  Crafting engaging and culturally rich narratives that resonate with diverse audiences.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="group transition-all duration-300 hover:translate-y-[-4px]">
                <h4 className="font-serif text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  Copywriting
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  Writing compelling content for businesses, media, and publications with literary precision.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="group transition-all duration-300 hover:translate-y-[-4px]">
                <h4 className="font-serif text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  Editing
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  Professional editing services for manuscripts, essays, and literary works.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 max-w-4xl">
              <p className="text-muted-foreground mb-6">
                Stéphana takes a collaborative approach to all her writing projects. After an initial consultation, she
                works closely with her clients to ensure that the final product reflects their vision while
                incorporating her own literary expertise.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl">
              <div className="mb-8">
                <h3 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Get in Touch</h3>
                <h4 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
                  Discover the depth of Stéphana Dorval's writing
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For literary collaborations, inquiries about published work, or to discuss writing services, please
                  reach out.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  Contact for Collaboration
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                  asChild
                >
                  <Link href="#work">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Stéphana Dorval. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#work"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                Work
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
