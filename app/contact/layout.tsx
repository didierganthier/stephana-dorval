import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Literary Collaborations & Inquiries",
  description:
    "Get in touch with Stéphana Dorval for literary collaborations, book inquiries, writing services, or media requests. Contact: stephanadorval@gmail.com",
  openGraph: {
    title: "Contact Stéphana Dorval",
    description:
      "Get in touch with Stéphana Dorval for literary collaborations, book inquiries, writing services, or media requests.",
  },
  alternates: {
    canonical: "https://stephana-dorval.vercel.app/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
