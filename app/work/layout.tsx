import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Work - Published Novels, Poetry & Media",
  description:
    "Explore the published works of Stéphana Dorval, including Port-au-Prince: Mon brasier de ville, Siwomyèl ak Sèl poetry collection, essays, interviews, and media features.",
  openGraph: {
    title: "My Work - Stéphana Dorval",
    description:
      "Explore the published works of Stéphana Dorval, including Port-au-Prince: Mon brasier de ville, Siwomyèl ak Sèl poetry collection, essays, interviews, and media features.",
  },
  alternates: {
    canonical: "https://stephana-dorval.vercel.app/work",
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
