import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Stéphana Dorval - Haitian Author & Literary Artist",
  description:
    "Passionate Haitian author weaving intricate tales of human experience, cultural identity, and resilience. Author of Port-au-Prince: Mon brasier de ville and Siwomyèl ak Sèl.",
  generator: "v0.app",
  openGraph: {
    title: "Stéphana Dorval - Haitian Author & Literary Artist",
    description:
      "Passionate Haitian author weaving intricate tales of human experience, cultural identity, and resilience. Author of Port-au-Prince: Mon brasier de ville and Siwomyèl ak Sèl.",
    images: [
      {
        url: "/stephana.jpg",
        width: 1200,
        height: 630,
        alt: "Stéphana Dorval",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stéphana Dorval - Haitian Author & Literary Artist",
    description:
      "Passionate Haitian author weaving intricate tales of human experience, cultural identity, and resilience. Author of Port-au-Prince: Mon brasier de ville and Siwomyèl ak Sèl.",
    images: ["/stephana.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonText.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
