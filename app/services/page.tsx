"use client"

import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Pencil, FileEdit, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useSiteLanguage } from "@/lib/use-site-language"

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)
  const language = useSiteLanguage()

  const content =
    language === "fr"
      ? {
          eyebrow: "Services",
          title: "Atelier Accent Aigu",
          intro:
            "Un studio créatif et éditorial centré sur le langage, la culture et la clarté. Accent Aigu accompagne les personnes, les marques et les organisations dans la création de mots qui touchent juste.",
          cta: "Réserver un appel découverte",
          brandTitle: "Signature de marque",
          brandText:
            "L'identité d'Atelier Accent Aigu fait partie intégrante de l'expérience: précise, affirmée et expressive. Son langage visuel prolonge les mêmes exigences éditoriales que chaque collaboration.",
          services: [
            {
              title: "Direction éditoriale",
              description:
                "Un accompagnement stratégique et narratif pour les projets qui ont besoin d'une voix forte, d'un message cohérent et d'un récit ancré dans la culture.",
            },
            {
              title: "Rédaction de contenus",
              description:
                "Textes de site web, narratifs de campagne, éditoriaux et récits longs conçus pour informer, convaincre et émouvoir votre public.",
            },
            {
              title: "Édition et affinement",
              description:
                "Polissage de manuscrits, révisions structurelles et travail de ligne pour renforcer le rythme, la précision et la lisibilité, sans trahir la voix de l'auteur·rice.",
            },
          ],
          processEyebrow: "Comment fonctionne Accent Aigu",
          processIntro:
            "Chaque mandat est abordé comme une collaboration. Accent Aigu part de votre contexte puis construit un parcours d'écriture et d'édition adapté à vos objectifs et à votre voix.",
          process: [
            { title: "Découverte", description: "Clarifier vos objectifs, votre public et vos enjeux de communication." },
            { title: "Développement", description: "Produire une matière éditoriale claire, élégante et émotionnellement juste." },
            { title: "Livraison", description: "Dernières révisions, remise des livrables et accompagnement facultatif au lancement ou à la publication." },
          ],
          finalTitle: "Lancer un projet avec Accent Aigu",
          finalText:
            "Si vous avez besoin d'une direction éditoriale, d'un texte convaincant ou d'un travail d'affinement, construisons ensemble les mots justes pour la suite.",
          portraitAlt: "Portrait de Stéphana Dorval",
          logoAlt: "Logo Atelier Accent Aigu",
          iconAlt: "Icône Accent Aigu",
          iconVariantAlt: "Variante de l'icône Accent Aigu",
          calendlyLink: "https://calendly.com/stephanadorval",
        }
      : {
          eyebrow: "Services",
          title: "Atelier Accent Aigu",
          intro:
            "A creative and editorial studio centered on language, culture, and clarity. Accent Aigu supports individuals, brands, and organizations in shaping words that connect deeply.",
          cta: "Book a Discovery Call",
          brandTitle: "Brand Signature",
          brandText:
            "The Atelier Accent Aigu identity is part of the experience itself: precise, bold, and expressive. The visual language mirrors the same editorial standards brought to every collaboration.",
          services: [
            {
              title: "Editorial Direction",
              description:
                "Strategic and narrative support for projects that need a distinctive voice, coherent message, and culturally grounded storytelling.",
            },
            {
              title: "Copy & Content Writing",
              description:
                "Website copy, campaign narratives, editorials, and long-form storytelling designed to inform, persuade, and move your audience.",
            },
            {
              title: "Editing & Refinement",
              description:
                "Manuscript polishing, structural revisions, and line edits to strengthen rhythm, precision, and readability while preserving authorial intent.",
            },
          ],
          processEyebrow: "How Accent Aigu Works",
          processIntro:
            "Every mandate is treated as a collaboration. Accent Aigu starts with your context, then develops a tailored writing and editorial path that reflects your goals and voice.",
          process: [
            { title: "Discovery", description: "Clarifying your objectives, audience, and communication challenges." },
            { title: "Development", description: "Producing clear, elegant, and emotionally resonant editorial material." },
            { title: "Delivery", description: "Final edits, handoff, and optional follow-up support for publication or launch." },
          ],
          finalTitle: "Start a project with Accent Aigu",
          finalText:
            "If you need editorial direction, compelling copy, or text refinement, let's build the right words for your next move.",
          portraitAlt: "Stephana portrait",
          logoAlt: "Atelier Accent Aigu logo",
          iconAlt: "Accent Aigu icon",
          iconVariantAlt: "Accent Aigu icon variant",
          calendlyLink: "https://calendly.com/stephanadorval",
        }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl">
            <div>
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
                className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                {content.intro}
              </p>
              <div
                className={`mt-10 transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <Button
                  size="lg"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  asChild
                >
                  <Link href="/contact">{content.cta}</Link>
                </Button>
              </div>
            </div>

            <div
              className={`grid gap-5 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-[#03509d] p-5 md:p-8" style={{ aspectRatio: "1 / 1" }}>
                <Image
                  src="/atelier-accent-aigu-logo.svg"
                  alt={content.logoAlt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                <Image
                  src="/stephana-portrait-4.jpeg"
                  alt={content.portraitAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl items-center">
            <AnimatedSection>
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">{content.brandTitle}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {content.brandText}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 border-border/70 bg-[#edf7fb]">
                    <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                      <Image
                        src="/Icon AA.svg"
                        alt={content.iconAlt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                    </div>
                  </Card>
                  <Card className="p-4 border-border/70 bg-[#ff4f18]">
                    <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                      <Image
                        src="/Artboard1@2x_8.png"
                        alt={content.iconVariantAlt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <Card className="p-4 md:p-6 border-border/70 bg-card/60">
                <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src="/atelier-accent-aigu-logo.svg"
                    alt={content.logoAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <Pencil className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h2 className="font-serif text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  {content.services[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  {content.services[0].description}
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <FileEdit className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h2 className="font-serif text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  {content.services[1].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  {content.services[1].description}
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <CheckCircle className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h2 className="font-serif text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  {content.services[2].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  {content.services[2].description}
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">{content.processEyebrow}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {content.processIntro}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-primary">01</div>
                  <h3 className="font-serif text-xl">{content.process[0].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {content.process[0].description}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-primary">02</div>
                  <h3 className="font-serif text-xl">{content.process[1].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {content.process[1].description}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-primary">03</div>
                  <h3 className="font-serif text-xl">{content.process[2].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {content.process[2].description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{content.finalTitle}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {content.finalText}
              </p>
              <div className="relative mx-auto mb-8 w-52 h-24">
                <Image
                  src="/atelier-accent-aigu-logo.svg"
                  alt={content.logoAlt}
                  fill
                  className="object-contain"
                  sizes="208px"
                />
              </div>
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href={content.calendlyLink} target="_blank" rel="noopener noreferrer">{content.cta}</a>
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  )
}
