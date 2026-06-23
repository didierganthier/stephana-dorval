"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Feather, ExternalLink, Award, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { useSiteLanguage } from "@/lib/use-site-language"

export default function WorkPage() {
  const [mounted, setMounted] = useState(false)
  const language = useSiteLanguage()

  const content =
    language === "fr"
      ? {
          eyebrow: "Portfolio",
          title: "Œuvres publiées et écriture",
          intro:
            "Explorez une sélection de romans, poèmes, essais et présences médiatiques qui témoignent de la richesse d'une écriture littéraire haïtienne.",
          featuredWork: "Œuvres phares",
          writingSamples: "Extraits d'écriture",
          publishedWork: "Publications",
          collectivePublications: {
            title: "Publications collectives",
            items: [
              {
                title: "Nos murs de vent",
                meta: "Nouvelle · MATI – Revue Alaso #6, Éditions Syllepse (2025)",
                description:
                  "Un récit féministe saisissant situé dans un Port-au-Prince post-effondrement, où le déplacement, la peur et l'érosion de l'intimité redéfinissent le corps à la fois comme refuge et champ de bataille. À travers une voix marquée par la perte et la lucidité, le texte explore comment les femmes habitent des espaces dépouillés de toute limite, où le silence, la mémoire et la violence s'entremêlent, et où la survie devient une négociation fragile et quotidienne. Développé dans le cadre d'ALASO, une initiative de revue de Negès Mawon, pour laquelle j'ai été sélectionnée comme lauréate en novembre 2025, ce texte prolonge un engagement envers les voix des femmes, la résistance et la réappropriation du récit.",
              },
              {
                title: "Cela a valu le coup",
                meta: "Nouvelle · Max, Max, Max!, C3 Éditions (2016)",
                description: "",
              },
            ],
          },
          awards: {
            title: "Distinctions et reconnaissances",
            items: [
              {
                title: "Lauréate, Concours national de nouvelles",
                org: "Association des professeurs de français d'Haïti & C3 Éditions (2016)",
                description: "",
              },
              {
                title: "Lauréate, Bourse de création",
                org: "PEN Haïti, Programme Droits humains et Perspectives des femmes (2022)",
                description:
                  "Cette résidence a soutenu le développement de mon premier roman, marquant une étape importante de mon parcours littéraire.",
              },
              {
                title: "Contributrice sélectionnée / Lauréate, Revue Alaso #6",
                org: "MATI (Éditions Syllepse, 2025)",
                description:
                  "Sélectionnée parmi les textes soumis pour publication dans un numéro littéraire féministe consacré aux voix et récits contemporains.",
              },
            ],
          },
          cards: {
            learnMore: "En savoir plus",
            availableOnAmazon: "Disponible sur Amazon",
            featuredNovel:
              "Un roman saisissant qui dépeint la résilience d'une ville et de ses habitants au milieu du chaos. Suivez Mila dans les paysages émotionnels et physiques de Port-au-Prince, une ville à la fois berceau des rêves et champ de bataille des espoirs brisés.",
            featuredPoetry:
              "Un recueil de poésie qui explore l'expérience haïtienne intime et collective à travers quatre longs poèmes en créole haïtien. Une bouteille d'eau de mer qui raconte comment une jeune femme en fleur porte en elle la vie, le désespoir, l'amour et tout un pays.",
            poetry: "Poésie",
            poetryText:
              "Un recueil qui tisse l'imaginaire culturel et l'introspection personnelle. L'essence d'une poésie de jeune fille noire qui danse et joue à cache-cache avec le temps. Du miel et du sel. Un peu de joie au milieu de tant d'ombres.",
            fiction: "Fiction",
            fictionText:
              "Le roman suit Mila, une jeune femme qui traverse les paysages émotionnels et physiques d'une ville en proie au chaos. Port-au-Prince y devient plus qu'un décor: un personnage à part entière, entre berceau des rêves et champ de bataille des espoirs brisés. C'est une histoire de survie, des êtres, des liens et d'une ville qui refuse de céder au désespoir.",
            availableAt: "Disponible à la Librairie La Pléïade, Haïti",
            poetryCollection: "Recueil de poésie",
            essays: "Essais, articles et médias",
            review: "Chronique dans L'Avant-Gardiste",
            article: "Article du Nouvelliste",
            feature: "Parution dans Le Temps Littéraire",
            interview: "Entrevue dans Le Nouvelliste",
            video: "Entrevue vidéo",
            readingsTitle: "Disponible pour des lectures et des conversations littéraires",
            readingsText:
              "Ce portfolio constitue une archive vivante de livres publiés, d'articles de presse et d'interventions publiques. Des extraits choisis et d'autres documents peuvent être partagés pour des événements et des programmations.",
          },
          portraitAlt: "Portrait de Stéphana Dorval",
        }
      : {
          eyebrow: "Portfolio",
          title: "Published Works & Writing",
          intro:
            "Explore a collection of published novels, poetry, essays, and media features showcasing the depth of Haitian literary artistry.",
          featuredWork: "Featured Work",
          writingSamples: "Writing Samples",
          publishedWork: "Published Work",
          collectivePublications: {
            title: "Collective Publications",
            items: [
              {
                title: "Nos murs de vent",
                meta: "Short story · MATI – Revue Alaso #6, Éditions Syllepse (2025)",
                description:
                  "A haunting feminist narrative set in a post-collapse Port-au-Prince, where displacement, fear, and the erosion of intimacy redefine the body as both refuge and battleground. Through a voice marked by loss and lucidity, the text explores how women inhabit spaces stripped of boundaries, where silence, memory, and violence intertwine, and where survival becomes a fragile, daily negotiation. Developed as part of ALASO, a Negès Mawon review initiative, for which I was selected as a laureate in November 2025, the work reflects a continued engagement with women's voices, resistance, and narrative reclamation.",
              },
              {
                title: "Cela a valu le coup",
                meta: "Short story · Max, Max, Max!, C3 Éditions (2016)",
                description: "",
              },
            ],
          },
          awards: {
            title: "Awards & Recognition",
            items: [
              {
                title: "Laureate, National Short Stories Competition",
                org: "Association of French Teachers in Haiti & C3 Éditions (2016)",
                description: "",
              },
              {
                title: "Laureate, Creation Grant",
                org: "PEN Haiti, Human Rights & Women's Perspectives Program (2022)",
                description:
                  "This residency supported the development of my first novel, marking a significant milestone in my literary career.",
              },
              {
                title: "Selected Contributor / Laureate, Revue Alaso #6",
                org: "MATI (Éditions Syllepse, 2025)",
                description:
                  "Selected among submitted texts for publication in a feminist literary issue dedicated to contemporary voices and narratives.",
              },
            ],
          },
          cards: {
            learnMore: "Learn more",
            availableOnAmazon: "Available on Amazon",
            featuredNovel:
              "A gripping novel that portrays the resilience of a city and its people amidst chaos. Follow Mila as she navigates the emotional and physical landscapes of Port-au-Prince—a city that is both a cradle of dreams and a battleground of broken hopes.",
            featuredPoetry:
              "A collection of poetry that delves into the personal and collective Haitian experience through four long poems written in Haitian Creole. A seawater bottle telling how a blossoming young woman carries within her life, despair, love, and an entire country.",
            poetry: "Poetry",
            poetryText:
              "A collection that weaves cultural imagery with personal introspection. The essence of the poetry of a black girl who dances while playing hide and seek over time. Honey and salt. A little bit of joy within so many shadows.",
            fiction: "Fiction",
            fictionText:
              "The novel follows Mila, a young woman who navigates the emotional and physical landscapes of a city engulfed in chaos. Port-au-Prince is more than just a backdrop; it is a character in itself—both a cradle of dreams and a battleground of broken hopes. This is a story about survival—of individuals, of relationships, and of a city that refuses to surrender to despair.",
            availableAt: "Available at Librairie La Pléïade, Haïti",
            poetryCollection: "Poetry Collection",
            essays: "Essays, Articles & Media",
            review: "L'Avant-Gardiste Review",
            article: "Le Nouvelliste Article",
            feature: "Le Temps Littéraire Feature",
            interview: "Le Nouvelliste Interview",
            video: "Video Interview",
            readingsTitle: "Available for readings and literary conversations",
            readingsText:
              "This portfolio is a living archive of published books, press features, and public interventions. Selected excerpts and additional materials can be shared for events and programming inquiries.",
          },
          portraitAlt: "Stephana portrait",
        }

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
              {content.eyebrow}
            </div>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {content.title}
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {content.intro}
            </p>
          </div>
        </section>

        {/* Featured Work */}
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
                    Port-au-Prince: Mon brasier de ville
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.cards.featuredNovel}
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-primary transition-all duration-300 group-hover:gap-3"
                    asChild
                  >
                    <a href="#published" className="flex items-center gap-2">
                      {content.cards.learnMore}
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
                    {content.cards.featuredPoetry}
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
                      {content.cards.availableOnAmazon}
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
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-2">{content.writingSamples}</h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                <h3 className="font-serif text-xl mb-3">{content.cards.poetry}</h3>
                <p className="text-sm text-muted-foreground mb-4">Siwomyèl ak Sèl</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {content.cards.poetryText}
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} className="lg:col-span-2">
              <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                <h3 className="font-serif text-xl mb-3">{content.cards.fiction}</h3>
                <p className="text-sm text-muted-foreground mb-4">Port-au-Prince: Mon brasier de ville</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {content.cards.fictionText}
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Published Work */}
        <section id="published" className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2">{content.publishedWork}</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl">
            <AnimatedSection delay={100}>
              <div className="pb-8 border-b border-border/50 transition-all duration-300 hover:border-primary/30">
                <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                  <div className="relative overflow-hidden rounded-xl border border-border/70" style={{ aspectRatio: "1 / 1" }}>
                    <Image
                      src="/book-portauprince-cover.jpeg"
                      alt="Port-au-Prince cover"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 220px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">Port-au-Prince: Mon brasier de ville</h3>
                    <p className="text-muted-foreground mb-4">{content.cards.availableAt}</p>
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
                          {content.cards.review}
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
                          {content.cards.article}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="pb-8 border-b border-border/50 transition-all duration-300 hover:border-primary/30">
                <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                  <div className="relative overflow-hidden rounded-xl border border-border/70" style={{ aspectRatio: "1 / 1" }}>
                    <Image
                      src="/book-siwomyel-beach.jpeg"
                      alt="Siwomyel ak Sel cover"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 220px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">Siwomyèl ak sèl</h3>
                    <p className="text-muted-foreground mb-4">{content.cards.poetryCollection}</p>
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
                        {content.cards.availableOnAmazon}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div>
                <h3 className="font-serif text-2xl mb-4">{content.cards.essays}</h3>
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
                      {content.cards.feature}
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
                      {content.cards.interview}
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
                      {content.cards.video}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Collective Publications */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2">
                {content.collectivePublications.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {content.collectivePublications.items.map((item, index) => (
              <AnimatedSection key={item.title} delay={100 * (index + 1)}>
                <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                  <Users className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="text-2xl font-serif mb-2 transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.meta}</p>
                  {item.description && (
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2">{content.awards.title}</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl">
            {content.awards.items.map((item, index) => (
              <AnimatedSection key={item.title} delay={100 * (index + 1)}>
                <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.org}</p>
                      {item.description && (
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4 / 5" }}>
                <Image src="/book-portauprince-open.jpeg" alt="Port-au-Prince publication visual" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">{content.cards.readingsTitle}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.cards.readingsText}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  )
}
