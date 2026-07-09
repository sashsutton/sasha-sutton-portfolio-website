"use client";

import { useContent } from "./LocaleProvider";

/** Shared contact block — the large closing statement + the same links each md file ends on. */
export function Footer() {
  const { contact, ui } = useContent();
  const t = ui.footer;

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-hair">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 flex items-baseline gap-4">
          <span className="font-mono text-xs tracking-widest text-accent">
            {t.kicker}
          </span>
          <span className="hairline flex-1" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <p className="max-w-3xl font-display text-hero font-semibold tracking-tight text-mist">
            {t.headline}
          </p>
          <ul className="flex flex-col gap-1 self-end">
            {contact.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between border-b border-hair py-4 text-mist transition-colors hover:text-accent"
                >
                  <span className="font-display text-2xl font-medium tracking-tight">
                    {link.label}
                  </span>
                  <span className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 font-mono text-xs tracking-widest text-faint">
          © {new Date().getFullYear()} Sasha Sutton
        </p>
      </div>
    </footer>
  );
}
