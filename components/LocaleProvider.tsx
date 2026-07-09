"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { en, type Content } from "@/data/content";
import { fr } from "@/data/content.fr";

export type Locale = "en" | "fr";

const bundles: Record<Locale, Content> = { en, fr };

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  content: Content;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "locale";

/**
 * Site-wide language switch. Persists to localStorage and stamps <html lang>.
 * Defaults to English; the toggle in the nav flips to French.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from storage on mount.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "fr") setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "fr" : "en";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, toggleLocale, content: bundles[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}

/** Convenience hook — the active locale's content bundle. */
export function useContent(): Content {
  return useLocale().content;
}
