"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMode } from "./ModeProvider";
import { useTheme } from "./ThemeProvider";
import { useLocale } from "./LocaleProvider";

/**
 * Dark/light-aware nav. Syncs the active route into the ModeProvider so the
 * accent colour tracks the page, and carries the global controls: language
 * switch, theme toggle, and CV download.
 */
export function Nav() {
  const pathname = usePathname();
  const { setMode } = useMode();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, content } = useLocale();
  const t = content.ui.nav;

  useEffect(() => {
    setMode(
      pathname.startsWith("/music")
        ? "music"
        : pathname.startsWith("/content")
          ? "content"
          : "science",
    );
  }, [pathname, setMode]);

  const routes = [
    { href: "/science", label: t.science },
    { href: "/music", label: t.music },
    { href: "/content", label: t.content },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-void/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-2 px-5 py-3.5 sm:gap-3 sm:px-8 sm:py-5">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 font-display text-base font-semibold tracking-tight text-mist transition-colors hover:text-accent sm:gap-2.5 sm:text-lg"
        >
          <span
            aria-hidden
            className="h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-[1.6] sm:h-2.5 sm:w-2.5"
          />
          Sasha Sutton<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Route links — sliding accent indicator tracks the active page */}
          <ul className="hidden items-center sm:flex">
            {routes.map((r) => {
              const active = pathname.startsWith(r.href);
              return (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block px-4 py-2.5 text-base tracking-tight transition-colors ${
                      active ? "text-accent" : "text-muted hover:text-mist"
                    }`}
                  >
                    {r.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        aria-hidden
                        className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <span className="hidden h-7 w-px bg-hair sm:mx-1 sm:block" />

          {/* Language switch */}
          <div
            role="group"
            aria-label={t.language}
            className="flex h-9 items-center rounded-full border border-hair p-0.5 sm:h-11 sm:p-1"
          >
            {(["en", "fr"] as const).map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => setLocale(lng)}
                aria-pressed={locale === lng}
                className={`rounded-full px-2 py-1 font-mono text-[11px] uppercase tracking-widest transition-colors active:scale-95 sm:px-3 sm:py-1.5 sm:text-[13px] ${
                  locale === lng
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:text-mist"
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t.theme}
            title={t.theme}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hair text-muted transition-colors hover:border-accent/50 hover:text-accent active:scale-95 sm:h-11 sm:w-11"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* CV download — primary action */}
          <a
            href="/Sasha-Sutton-CV.pdf"
            download
            className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-accent px-3 text-sm font-medium tracking-tight text-void transition-[filter,transform] hover:brightness-110 active:scale-95 sm:h-11 sm:gap-2 sm:px-5 sm:text-base"
          >
            <DownloadIcon />
            <span>{t.cv}</span>
          </a>
        </div>
      </nav>

      {/* Mobile route row — desktop links are hidden on small screens, so the
          three lenses live here instead. */}
      <ul className="flex items-center justify-center gap-1.5 border-t border-hair px-5 pb-2 pt-1.5 sm:hidden">
        {routes.map((r) => {
          const active = pathname.startsWith(r.href);
          return (
            <li key={r.href}>
              <Link
                href={r.href}
                aria-current={active ? "page" : undefined}
                className={`block rounded-full px-3.5 py-1.5 text-sm tracking-tight transition-colors ${
                  active
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:text-mist"
                }`}
              >
                {r.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

function SunIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}
