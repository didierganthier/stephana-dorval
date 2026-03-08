import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Biography & Writing Philosophy",
  description:
    "Learn about Stéphana Dorval - a Haitian author born in 1998 with deep roots in Haitian culture and literature. Discover her writing philosophy, themes, and inspiration.",
  openGraph: {
    title: "About Stéphana Dorval",
    description:
      "Learn about Stéphana Dorval - a Haitian author born in 1998 with deep roots in Haitian culture and literature. Discover her writing philosophy, themes, and inspiration.",
  },
  alternates: {
    canonical: "https://stephana-dorval.vercel.app/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
