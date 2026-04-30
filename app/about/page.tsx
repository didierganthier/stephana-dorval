"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { useEffect, useState } from "react"
import { useSiteLanguage } from "@/lib/use-site-language"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const language = useSiteLanguage()

  const content =
    language === "fr"
      ? {
          eyebrow: "À propos",
          title: "Une voix pour la littérature haïtienne",
          intro:
            "Saisir la complexité de la vie en Haïti à travers une prose poétique et une narration vibrante, en explorant la résilience, l'identité et la beauté de Port-au-Prince.",
          biography: "Biographie",
          biographyParagraphs: [
            "Stéphana Dorval est née en 1998. Écrivaine profondément enracinée dans la culture et la littérature haïtiennes, elle puise dans une formation en littérature et en création littéraire pour faire dialoguer la vitalité de la vie haïtienne avec des thèmes universels de survie, d'identité et d'espoir.",
            "Elle débute par la poésie avec l'acclamé Siwomyèl ak Sèl, puis poursuit dans le roman avec Port-au-Prince: Mon brasier de ville. Stéphana est portée par le désir de donner voix à celles et ceux qu'on entend trop peu et de saisir l'essence d'Haïti dans toute sa complexité.",
          ],
          philosophy: "Démarche d'écriture",
          philosophyParagraphs: [
            "L'écriture de Stéphana explore la résilience humaine et la quête d'espoir face à l'adversité. Sa prose, profondément poétique, s'attache aux émotions, à la culture et à la beauté subtile du quotidien.",
            "Par son style narratif, elle donne vie à des personnes qui luttent, avancent et cherchent du sens au cœur du tumulte.",
          ],
          themes: "Thèmes et inspirations",
          themeItems: [
            {
              title: "Identité culturelle",
              description:
                "Explorer ce que signifie être haïtien·ne dans un monde globalisé, en célébrant l'héritage culturel tout en affrontant les enjeux contemporains.",
            },
            {
              title: "Résilience",
              description:
                "Des récits de survie et de force face à l'adversité, qui mettent en lumière l'esprit indomptable des individus et des communautés.",
            },
            {
              title: "Vie urbaine",
              description:
                "Port-au-Prince comme décor et comme personnage, dans sa beauté, son tumulte, ses rêves et ses contradictions.",
            },
            {
              title: "Espoir et beauté",
              description:
                "Trouver des moments de grâce, d'amour et de beauté même dans les circonstances difficiles, et célébrer la capacité humaine à la joie.",
            },
          ],
          presenceEyebrow: "Présence littéraire",
          presence:
            "Des lectures intimistes aux rencontres littéraires publiques, l'œuvre de Stéphana continue d'ouvrir des conversations sensibles autour de la mémoire, de l'identité et du possible.",
          portraitAlt: "Stéphana Dorval lors d'un événement littéraire",
          eventAlt: "Stéphana lors d'un événement",
        }
      : {
          eyebrow: "About",
          title: "A Voice for Haitian Literature",
          intro:
            "Capturing the complexity of life in Haiti through poetic prose and vivid storytelling, exploring resilience, identity, and the beauty found in Port-au-Prince.",
          biography: "Biography",
          biographyParagraphs: [
            "Stéphana Dorval is born in 1998. She is a writer with deep roots in Haitian culture and literature. With a background in literature and creative writing, her works blend the vibrancy of Haitian life with universal themes of survival, identity, and hope.",
            "She began her career with poetry, releasing the acclaimed \"Siwomyèl ak Sèl,\" and has since moved into novel writing with her latest work, \"Port-au-Prince: Mon brasier de ville.\" Stéphana is driven by a desire to give voice to those often overlooked and to capture the essence of Haiti in all its complexity.",
          ],
          philosophy: "Writing Philosophy",
          philosophyParagraphs: [
            "Stéphana's writing is an exploration of human resilience and the pursuit of hope in the face of adversity. Her prose is deeply poetic, focusing on emotions, culture, and the intricate beauty found in everyday life.",
            "Through her narrative style, she brings to life the stories of people struggling, thriving, and finding meaning amidst turmoil.",
          ],
          themes: "Themes & Inspiration",
          themeItems: [
            {
              title: "Cultural Identity",
              description:
                "Exploring what it means to be Haitian in a globalized world, celebrating cultural heritage while addressing contemporary challenges.",
            },
            {
              title: "Resilience",
              description:
                "Stories of survival and strength in the face of adversity, highlighting the indomitable spirit of individuals and communities.",
            },
            {
              title: "Urban Life",
              description:
                "Port-au-Prince as both setting and character, capturing the city's chaos, beauty, dreams, and contradictions.",
            },
            {
              title: "Hope & Beauty",
              description:
                "Finding moments of grace, love, and beauty even in difficult circumstances, celebrating the human capacity for joy.",
            },
          ],
          presenceEyebrow: "Literary Presence",
          presence:
            "From intimate readings to public literary encounters, Stéphana's work continues to create meaningful conversations around memory, identity, and possibility.",
          portraitAlt: "Stéphana Dorval at literary event",
          eventAlt: "Stephana at an event",
        }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="main-content">
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

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl">
            <AnimatedSection>
              <div>
                <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">{content.biography}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  {content.biographyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="transition-all duration-300 hover:text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 rounded-lg overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                  <Image
                    src="/stephana-portrait-5.jpeg"
                    alt={content.portraitAlt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">{content.philosophy}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  {content.philosophyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="transition-all duration-300 hover:text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-muted/30 rounded-lg transition-all duration-500 hover:bg-muted/50 hover:scale-105">
                  <div className="aspect-3/4 bg-muted rounded-md flex items-center justify-center overflow-hidden">
                    <Image
                      src="/stephana-portrait-6.jpeg"
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
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">{content.themes}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {content.themeItems.map((item) => (
                  <div key={item.title} className="space-y-4">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
              <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "5 / 4" }}>
                <Image src="/stephana-event.jpg" alt={content.eventAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-8 md:p-10 flex flex-col justify-center">
                <p className="text-sm tracking-wide uppercase text-muted-foreground mb-4">{content.presenceEyebrow}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.presence}
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
