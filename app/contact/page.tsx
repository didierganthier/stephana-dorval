"use client"

import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { useSiteLanguage } from "@/lib/use-site-language"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const language = useSiteLanguage()

  const content =
    language === "fr"
      ? {
          eyebrow: "Contact",
          title: "Créons ensemble",
          intro:
            "Pour des collaborations littéraires, des questions sur les œuvres publiées ou pour discuter de services d'écriture, n'hésitez pas à écrire.",
          getInTouch: "Entrer en contact",
          getInTouchText:
            "Que vous envisagiez une collaboration, que vous ayez des questions sur les publications ou que vous souhaitiez parler de services d'écriture, je serai ravie de vous lire.",
          scheduleDiscovery: "Réserver un appel découverte",
          responseTime: "Réponse habituelle sous 2 à 3 jours ouvrables",
          calendlyLink: "https://calendly.com/stephanadorval",
          orEmail: "Ou envoyer un email directement :",
          includeTitle: "Que mettre dans votre message",
          includeItems: [
            {
              title: "Pour les collaborations",
              description: "Détails du projet, calendrier, périmètre du travail et vision de la collaboration.",
            },
            {
              title: "Pour les demandes autour des livres",
              description: "Œuvre concernée, questions de disponibilité ou demandes médias et entrevues.",
            },
            {
              title: "Pour les services",
              description: "Type de rédaction souhaité, longueur du projet, échéance et besoins spécifiques.",
            },
          ],
          hereEyebrow: "Pendant que vous y êtes",
          workCard: {
            title: "Découvrir mon œuvre",
            text: "Explorez les romans publiés, recueils de poésie et parutions médiatiques.",
            cta: "Voir le portfolio",
          },
          servicesCard: {
            title: "Services d'écriture",
            text: "En savoir plus sur la rédaction de contenus, la rédaction publicitaire et les services d'édition.",
            cta: "Voir les services",
          },
          portraitAlt: "Portrait de Stéphana Dorval",
        }
      : {
          eyebrow: "Contact",
          title: "Let's Create Together",
          intro:
            "For literary collaborations, inquiries about published work, or to discuss writing services, please reach out.",
          getInTouch: "Get in Touch",
          getInTouchText:
            "Whether you're interested in collaboration, have questions about published works, or want to discuss writing services, I'd love to hear from you.",
          scheduleDiscovery: "Schedule a Discovery Call",
          responseTime: "Typically responds within 2-3 business days",
          calendlyLink: "https://calendly.com/stephanadorval",
          orEmail: "Or email directly:",
          includeTitle: "What to include in your message",
          includeItems: [
            {
              title: "For Collaborations",
              description: "Project details, timeline, scope of work, and your vision for the collaboration.",
            },
            {
              title: "For Book Inquiries",
              description: "Which work you're interested in, availability questions, or media/interview requests.",
            },
            {
              title: "For Services",
              description: "Type of writing needed, project length, deadline, and any specific requirements.",
            },
          ],
          hereEyebrow: "While you're here",
          workCard: {
            title: "Explore My Work",
            text: "Discover published novels, poetry collections, and media features.",
            cta: "View Portfolio",
          },
          servicesCard: {
            title: "Writing Services",
            text: "Learn more about content writing, copywriting, and editing services.",
            cta: "View Services",
          },
          portraitAlt: "Stephana Dorval portrait",
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

        {/* Contact Options */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
            <AnimatedSection>
              <Card className="p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:border-primary/20 h-full">
                <div className="text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">{content.getInTouch}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                    {content.getInTouchText}
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      asChild
                    >
                      <a href={content.calendlyLink} target="_blank" rel="noopener noreferrer">{content.scheduleDiscovery}</a>
                    </Button>

                    <div className="border-t border-border/30 pt-4">{content.orEmail}
                      <p className="text-sm text-muted-foreground mb-2">Or email directly:</p>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg mx-auto bg-transparent"
                        asChild
                      >
                        <a href="mailto:stephanadorval@gmail.com">
                          <Mail className="w-4 h-4" />
                          stephanadorval@gmail.com
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">
                        {content.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative overflow-hidden rounded-2xl min-h-105 h-full">
                <Image
                  src="/stephana-portrait-6.jpeg"
                  alt={content.portraitAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* What to Include */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">
                {content.includeTitle}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {content.includeItems.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <h3 className="font-serif text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Published Works */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-8">
                {content.hereEyebrow}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                  <h3 className="font-serif text-xl mb-3">{content.workCard.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{content.workCard.text}</p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/work" className="flex items-center gap-2">
                      {content.workCard.cta}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
                <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                  <h3 className="font-serif text-xl mb-3">{content.servicesCard.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{content.servicesCard.text}</p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/services" className="flex items-center gap-2">
                      {content.servicesCard.cta}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  )
}
