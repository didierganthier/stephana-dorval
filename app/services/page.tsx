"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Pencil, FileEdit, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function ServicesPage() {
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
              Services
            </div>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Literary Services & Collaborations
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Professional writing services that blend literary artistry with cultural authenticity, bringing your
              stories to life with poetic precision.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <AnimatedSection delay={100}>
              <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <Pencil className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h2 className="font-serif text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  Content Writing
                </h2>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  Crafting engaging and culturally rich narratives that resonate with diverse audiences. From blog posts
                  to feature articles, every piece is infused with literary quality.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <FileEdit className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h2 className="font-serif text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  Copywriting
                </h2>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  Writing compelling content for businesses, media, and publications with literary precision. Combining
                  creative storytelling with strategic messaging.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="p-8 h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 group">
                <CheckCircle className="w-8 h-8 text-primary mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                <h2 className="font-serif text-2xl mb-3 transition-colors duration-300 group-hover:text-primary">
                  Editing
                </h2>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                  Professional editing services for manuscripts, essays, and literary works. Enhancing clarity, flow,
                  and impact while preserving the author's unique voice.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">Collaborative Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Stéphana takes a collaborative approach to all her writing projects. After an initial consultation, she
                works closely with her clients to ensure that the final product reflects their vision while
                incorporating her own literary expertise.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-primary">01</div>
                  <h3 className="font-serif text-xl">Consultation</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding your goals, audience, and vision for the project.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-primary">02</div>
                  <h3 className="font-serif text-xl">Creation</h3>
                  <p className="text-sm text-muted-foreground">
                    Crafting content that blends your message with literary artistry.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-4xl font-serif text-primary">03</div>
                  <h3 className="font-serif text-xl">Refinement</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborative editing to perfect every word and ensure your satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to collaborate?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you need compelling content, professional editing, or creative copywriting, let's bring your
                literary vision to life.
              </p>
              <Button
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  )
}
