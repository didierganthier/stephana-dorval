"use client"

import { setSiteLanguage, useSiteLanguage } from "@/lib/use-site-language"

export function LanguageToggle() {
  const language = useSiteLanguage()

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/70 p-1">
      <button
        type="button"
        onClick={() => setSiteLanguage("fr")}
        className={`rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition ${
          language === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setSiteLanguage("en")}
        className={`rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] transition ${
          language === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}