"use client"

import { useEffect, useState } from "react"

export type Language = "en" | "fr"

export const SITE_LANGUAGE_STORAGE_KEY = "sd-lang"
export const SITE_LANGUAGE_EVENT = "sd-language-change"

function applyDocumentLanguage(language: Language) {
  document.documentElement.lang = language
}

function readStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en"
  }

  const stored = window.localStorage.getItem(SITE_LANGUAGE_STORAGE_KEY)
  return stored === "fr" || stored === "en" ? stored : "en"
}

export function setSiteLanguage(language: Language) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(SITE_LANGUAGE_STORAGE_KEY, language)
  applyDocumentLanguage(language)
  window.dispatchEvent(new Event(SITE_LANGUAGE_EVENT))
}

export function useSiteLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const syncLanguage = () => {
      const nextLanguage = readStoredLanguage()
      setLanguage(nextLanguage)
      applyDocumentLanguage(nextLanguage)
    }

    syncLanguage()
    window.addEventListener(SITE_LANGUAGE_EVENT, syncLanguage)

    return () => {
      window.removeEventListener(SITE_LANGUAGE_EVENT, syncLanguage)
    }
  }, [])

  return language
}