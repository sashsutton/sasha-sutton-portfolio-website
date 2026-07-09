import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { SectionDivider } from "./SectionDivider";

interface SectionProps {
  id?: string;
  index: string; // "01", "02", …
  label: string;
  title?: string;
  intro?: string;
  children: ReactNode;
}

/**
 * Numbered editorial section. A mono index + label sit above a hairline —
 * the repeating rhythm that structures every page.
 */
export function Section({ id, index, label, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      className="group/section relative scroll-mt-24 py-20 sm:py-28"
    >
      <SectionDivider />
      <Reveal>
        <div className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-sm tracking-widest text-accent">
            ({index})
          </span>
          <h2 className="font-mono text-sm uppercase tracking-[0.22em] text-muted">
            {label}
          </h2>
          <span className="hairline flex-1" />
        </div>
        {title && (
          <h3 className="max-w-4xl font-display text-display font-semibold text-mist">
            {title}
          </h3>
        )}
        {intro && (
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">
            {intro}
          </p>
        )}
        {(title || intro) && <div className="mt-14" />}
      </Reveal>
      {children}
    </section>
  );
}
