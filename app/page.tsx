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
import { useSiteLanguage } from "@/lib/use-site-language"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const language = useSiteLanguage()

  const content =
    language === "fr"
      ? {
          eyebrow: "Autrice haïtienne et artiste littéraire",
          title: "Tisser des récits complexes sur l'expérience humaine et l'identité culturelle",
          description:
            "Stéphana Dorval est une autrice haïtienne passionnée qui saisit la complexité de la vie en Haïti à travers une prose poétique et une narration vibrante, explorant la résilience, l'identité et la beauté de Port-au-Prince.",
          primaryCta: "Découvrir mon œuvre",
          secondaryCta: "Prendre contact",
          featuredWork: "Œuvres phares",
          workCards: [
            {
              title: "Port-au-Prince: Mon brasier de ville",
              description:
                "Un roman saisissant qui dépeint la résilience d'une ville et de ses habitants au milieu du chaos. Suivez Mila dans les paysages émotionnels et physiques de Port-au-Prince, une ville à la fois berceau des rêves et champ de bataille des espoirs brisés.",
              cta: "En savoir plus",
            },
            {
              title: "Siwomyèl ak Sèl",
              description:
                "Un recueil de poésie qui explore l'expérience haïtienne intime et collective à travers quatre longs poèmes en créole haïtien. Une bouteille d'eau de mer qui raconte comment une jeune femme en fleur porte en elle la vie, le désespoir, l'amour et tout un pays.",
              cta: "Disponible sur Amazon",
            },
          ],
          allWorkCta: "Voir toutes les publications",
          quote: "Les mots portent la mémoire. Les récits nous portent.",
          portraitAlt: "Stéphana Dorval - autrice haïtienne",
        }
      : {
          eyebrow: "Haitian Author & Literary Artist",
          title: "Weaving intricate tales of human experience and cultural identity",
          description:
            "Stéphana Dorval is a passionate Haitian author who captures the complexity of life in Haiti through poetic prose and vivid storytelling, exploring resilience, identity, and the beauty found in Port-au-Prince.",
          primaryCta: "Explore My Work",
          secondaryCta: "Get in Touch",
          featuredWork: "Featured Work",
          workCards: [
            {
              title: "Port-au-Prince: Mon brasier de ville",
              description:
                "A gripping novel that portrays the resilience of a city and its people amidst chaos. Follow Mila as she navigates the emotional and physical landscapes of Port-au-Prince—a city that is both a cradle of dreams and a battleground of broken hopes.",
              cta: "Learn more",
            },
            {
              title: "Siwomyèl ak Sèl",
              description:
                "A collection of poetry that delves into the personal and collective Haitian experience through four long poems written in Haitian Creole. A seawater bottle telling how a blossoming young woman carries within her life, despair, love, and an entire country.",
              cta: "Available on Amazon",
            },
          ],
          allWorkCta: "View All Published Work",
          quote: "Words carry memory. Stories carry us.",
          portraitAlt: "Stéphana Dorval - Haitian Author",
        }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div
                className={`mb-6 text-sm text-muted-foreground tracking-wide uppercase transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                {content.eyebrow}
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {content.title}
              </h1>
              <p
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {content.description}
              </p>
              <div
                className={`flex flex-wrap gap-4 mt-8 transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                  <Link href="/work">
                    {content.primaryCta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
                  asChild
                >
                  <Link href="/contact">{content.secondaryCta}</Link>
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative rounded-2xl overflow-hidden bg-muted/30 shadow-2xl ring-1 ring-border/60" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src="/stephana-portrait-1.jpeg"
                  alt={content.portraitAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden md:block w-48 h-48 rounded-full bg-primary/10 blur-3xl -z-10" />
              <div className="absolute -top-8 -right-8 hidden md:block w-40 h-40 rounded-full bg-accent/40 blur-3xl -z-10" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-8 md:pb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 5" }}>
              <Image src="/stephana-portrait-2.jpeg" alt={content.portraitAlt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4 / 5" }}>
              <Image src="/stephana-portrait-3.jpeg" alt={content.portraitAlt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative overflow-hidden rounded-xl sm:col-span-2 lg:col-span-1" style={{ aspectRatio: "4 / 5" }}>
              <Image src="/stephana-portrait-4.jpeg" alt={content.portraitAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">{content.featuredWork}</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <div className="mb-4">
                  <BookOpen className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="text-2xl font-serif mb-3 transition-colors duration-300 group-hover:text-primary">
                    {content.workCards[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.workCards[0].description}
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary transition-all duration-300 group-hover:gap-3"
                    asChild
                  >
                    <Link href="/work" className="flex items-center gap-2">
                      {content.workCards[0].cta}
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
                    {content.workCards[1].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.workCards[1].description}
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
                      {content.workCards[1].cta}
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
                {content.allWorkCta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-4xl font-serif leading-tight text-balance">
                "{content.quote}"
              </p>
            </blockquote>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  )
}
