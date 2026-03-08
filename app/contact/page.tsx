"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export default function ContactPage() {
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
              Contact
            </div>
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-balance transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Let's Create Together
            </h1>
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl text-pretty transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              For literary collaborations, inquiries about published work, or to discuss writing services, please reach
              out.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:border-primary/20">
                <div className="text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
                  <h2 className="text-2xl md:text-3xl font-serif mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                    Whether you're interested in collaboration, have questions about published works, or want to discuss
                    writing services, I'd love to hear from you.
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg mx-auto"
                      asChild
                    >
                      <a href="mailto:stephanadorval@gmail.com">
                        <Mail className="w-4 h-4" />
                        stephanadorval@gmail.com
                      </a>
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      Typically responds within 2-3 business days
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* What to Include */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-6">
                What to include in your message
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">For Collaborations</h3>
                  <p className="text-sm text-muted-foreground">
                    Project details, timeline, scope of work, and your vision for the collaboration.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">For Book Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    Which work you're interested in, availability questions, or media/interview requests.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl">For Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Type of writing needed, project length, deadline, and any specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Published Works */}
        <section className="container mx-auto px-4 py-20 border-t border-border/50">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-sm text-muted-foreground tracking-wide uppercase mb-8">
                While you're here
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                  <h3 className="font-serif text-xl mb-3">Explore My Work</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover published novels, poetry collections, and media features.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/work" className="flex items-center gap-2">
                      View Portfolio
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
                <Card className="p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20">
                  <h3 className="font-serif text-xl mb-3">Writing Services</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn more about content writing, copywriting, and editing services.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/services" className="flex items-center gap-2">
                      View Services
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
