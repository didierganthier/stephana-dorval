import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing Services - Content, Copywriting & Editing",
  description:
    "Professional writing services by Stéphana Dorval: content writing, copywriting for businesses and media, and manuscript editing with literary expertise and cultural authenticity.",
  openGraph: {
    title: "Writing Services - Stéphana Dorval",
    description:
      "Professional writing services by Stéphana Dorval: content writing, copywriting for businesses and media, and manuscript editing with literary expertise and cultural authenticity.",
  },
  alternates: {
    canonical: "https://stephana-dorval.vercel.app/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
