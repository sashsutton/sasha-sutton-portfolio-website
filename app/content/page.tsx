"use client";

import { Reveal } from "@/components/Reveal";
import { useContent } from "@/components/LocaleProvider";

export default function ContentPage() {
  const { content, ui } = useContent();
  const t = ui.content;

  return (
    <div className="mx-auto max-w-content px-5 sm:px-8">
      {/* Hero */}
      <section className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-accent">
            {t.kicker}
          </p>
          <h1 className="mt-8 max-w-[15ch] font-display text-hero font-bold text-mist">
            {t.heading}
          </h1>
          <p className="mt-10 max-w-prose text-lg leading-relaxed text-muted">
            {content.summary}
          </p>
          <p className="mt-6 max-w-prose font-display text-xl font-medium leading-snug tracking-tight text-accent">
            {content.ethos}
          </p>

          {/* Coming-soon channel badge */}
          <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-hair px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-widest text-mist">
              {content.status}
            </span>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
