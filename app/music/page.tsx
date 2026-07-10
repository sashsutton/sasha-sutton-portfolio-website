"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TimelineItem } from "@/components/TimelineItem";
import { useContent } from "@/components/LocaleProvider";

export default function MusicPage() {
  const { music, ui } = useContent();
  const { crossover } = music;
  const t = ui.music;

  return (
    <div className="mx-auto max-w-content px-5 sm:px-8">
      {/* Hero */}
      <section className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-accent">
            {t.kicker}
          </p>
          <h1 className="mt-8 max-w-[16ch] font-display text-hero font-bold text-mist">
            {t.heading}
          </h1>
          <p className="mt-6 max-w-prose font-display text-xl font-medium leading-snug tracking-tight text-accent">
            {music.pull}
          </p>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted">
            {music.summary}
          </p>
          {/* Soundwork chips — what the music actually is. */}
          <ul className="mt-8 flex flex-wrap gap-2">
            {music.soundwork.map((item) => (
              <li
                key={item}
                className="rounded-full border border-hair px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-faint"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 01 — The London years */}
      <Section index="01" label={t.londonLabel} title={t.londonTitle}>
        <ul>
          {music.chapters.map((entry) => (
            <TimelineItem key={entry.title} entry={entry} />
          ))}
        </ul>
      </Section>

      {/* 02 — Producing & DJing */}
      <Section index="02" label={t.producing}>
        <Reveal>
          <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-mist">
            {music.producing}
          </p>

          {/* Video — real YouTube embed once music.videoId is set, styled placeholder until then. */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-hair bg-surface">
            <div className="relative aspect-video w-full">
              {music.videoId ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${music.videoId}`}
                  title={t.producing}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="dot-grid absolute inset-0 opacity-40" />
                  <div
                    aria-hidden
                    className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
                  />
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-hair bg-void">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 text-accent"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="relative font-mono text-[11px] uppercase tracking-widest text-faint">
                    {t.videoPlaceholder}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 03 — Crossover, the tie back to the science side */}
      <Section index="03" label={t.crossover} title={crossover.title + "."}>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-hair bg-surface p-8 sm:p-10">
            <div className="dot-grid absolute inset-0 opacity-40" />
            <div
              aria-hidden
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
            />
            <p className="relative max-w-3xl text-xl leading-relaxed text-mist">
              {crossover.body}
            </p>

            <div className="relative mt-10 flex flex-col gap-x-10 gap-y-4 sm:flex-row sm:items-center">
              <a
                href={crossover.airHarpGithub}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-lg tracking-tight text-accent"
              >
                <span className="link-underline">{t.airHarp}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
              <Link
                href="/science"
                className="group inline-flex items-center gap-2 text-sm tracking-tight text-muted transition-colors hover:text-mist"
              >
                {t.seeScience}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
