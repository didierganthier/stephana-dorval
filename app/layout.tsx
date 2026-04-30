import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://stephana-dorval.vercel.app"),
  title: {
    default: "Stéphana Dorval - Haitian Author & Literary Artist",
    template: "%s | Stéphana Dorval",
  },
  description:
    "Passionate Haitian author weaving intricate tales of human experience, cultural identity, and resilience. Author of Port-au-Prince: Mon brasier de ville and Siwomyèl ak Sèl.",
  keywords: [
    "Stéphana Dorval",
    "Haitian author",
    "Haitian literature",
    "Port-au-Prince",
    "Haitian Creole poetry",
    "Caribbean literature",
    "Siwomyèl ak Sèl",
    "literary artist",
    "creative writing",
    "Haitian culture",
  ],
  authors: [{ name: "Stéphana Dorval" }],
  creator: "Stéphana Dorval",
  publisher: "Stéphana Dorval",
  generator: "v0.app",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stephana-dorval.vercel.app",
    siteName: "Stéphana Dorval",
    title: "Stéphana Dorval - Haitian Author & Literary Artist",
    description:
      "Passionate Haitian author weaving intricate tales of human experience, cultural identity, and resilience. Author of Port-au-Prince: Mon brasier de ville and Siwomyèl ak Sèl.",
    images: [
      {
        url: "/stephana.jpg",
        width: 1200,
        height: 630,
        alt: "Stéphana Dorval - Haitian Author",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stéphana Dorval - Haitian Author & Literary Artist",
    description:
      "Passionate Haitian author weaving intricate tales of human experience, cultural identity, and resilience. Author of Port-au-Prince: Mon brasier de ville and Siwomyèl ak Sèl.",
    images: ["/stephana.jpg"],
    creator: "@stephanadorval",
  },
  icons: {
    icon: [
      {
        url: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/favicon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
    apple: "/favicon-256.png",
  },
  alternates: {
    canonical: "https://stephana-dorval.vercel.app",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stéphana Dorval",
    jobTitle: "Author",
    description:
      "Haitian author and literary artist weaving intricate tales of human experience, cultural identity, and resilience.",
    url: "https://stephana-dorval.vercel.app",
    email: "stephanadorval@gmail.com",
    nationality: "Haitian",
    birthDate: "1998",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Literature and Creative Writing",
    },
    knowsLanguage: ["French", "Haitian Creole"],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Author",
        description: "Writer of novels and poetry",
      },
      {
        "@type": "Occupation",
        name: "Content Writer",
        description: "Professional writing services",
      },
      {
        "@type": "Occupation",
        name: "Editor",
        description: "Manuscript and literary editing",
      },
    ],
    knowsAbout: ["Literature", "Creative Writing", "Haitian Culture", "Poetry", "Fiction"],
    award: ["Siwomyèl ak Sèl", "Port-au-Prince: Mon brasier de ville"],
    sameAs: [],
    creator: [
      {
        "@type": "Book",
        name: "Port-au-Prince: Mon brasier de ville",
        author: {
          "@type": "Person",
          name: "Stéphana Dorval",
        },
        inLanguage: "French",
        bookFormat: "Paperback",
        description:
          "A gripping novel that portrays the resilience of a city and its people amidst chaos. Follow Mila as she navigates the emotional and physical landscapes of Port-au-Prince.",
      },
      {
        "@type": "Book",
        name: "Siwomyèl ak Sèl",
        author: {
          "@type": "Person",
          name: "Stéphana Dorval",
        },
        inLanguage: "Haitian Creole",
        bookFormat: "Paperback",
        url: "https://a.co/d/2mQZhxw",
        description:
          "A collection of poetry that delves into the personal and collective Haitian experience through four long poems written in Haitian Creole.",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${jost.variable} ${cormorant.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
