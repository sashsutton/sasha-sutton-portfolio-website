"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMode } from "@/components/ModeProvider";
import { useContent } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Portrait } from "@/components/Portrait";
import { SectionDivider } from "@/components/SectionDivider";
import { type Mode } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function LandingPage() {
  const { setMode } = useMode();
  const { person, lenses, ambition, marqueeTerms, ui } = useContent();
  const t = ui.landing;

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero — mega type                                                 */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-content px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4"
        >
          {/* Disciplines */}
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.18em]">
            {person.roleTags.map((tag, i) => (
              <li key={tag} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-faint">
                    ·
                  </span>
                )}
                <span className={i === 0 ? "text-accent" : "text-muted"}>
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          {/* Current location pill */}
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hair bg-surface px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {t.currentlyIn}{" "}
              <span className="text-mist">{person.location}</span>
            </span>
          </span>
        </motion.div>

        <h1 className="mt-8 font-display text-mega font-bold text-mist">
          {["Sasha", "Sutton"].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid items-center gap-8 sm:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-prose text-lg leading-relaxed text-muted"
            >
              {person.statement}
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 hidden font-mono text-xs tracking-widest text-faint sm:block"
            >
              ↓ {t.scroll}
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="sm:justify-self-center"
          >
            <Portrait className="aspect-[4/5] w-64 sm:w-80 lg:w-96" />
          </motion.div>
        </div>
      </section>

      <Marquee items={marqueeTerms} />

      {/* ---------------------------------------------------------------- */}
      {/* Philosophy statement                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-36">
        <Reveal>
          <p className="mx-auto max-w-5xl text-center font-display text-hero font-semibold leading-[1.05] tracking-tight text-mist">
            {person.philosophy.split(" ").map((w, i) => (
              <span key={i}>
                {w === "black" ||
                w === "boxes." ||
                w === "boîtes" ||
                w === "noires." ? (
                  <span className="text-accent">{w} </span>
                ) : (
                  <span>{w} </span>
                )}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 01 — About me                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="group/section relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <SectionDivider tickClass="left-5 sm:left-8" />
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            <span className="font-mono text-xs tracking-widest text-accent">
              (01)
            </span>
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {t.aboutMe}
            </h2>
            <span className="hairline flex-1" />
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <p className="max-w-md font-display text-2xl font-medium leading-snug tracking-tight text-mist">
              {person.intro}
            </p>
            <div className="max-w-prose space-y-6 text-lg leading-relaxed text-muted">
              <p>{person.bio}</p>
              <p>{person.music}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 02 — What I do                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="group/section relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <SectionDivider tickClass="left-5 sm:left-8" />
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            <span className="font-mono text-xs tracking-widest text-accent">
              (02)
            </span>
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {t.whatIDo}
            </h2>
            <span className="hairline flex-1" />
          </div>
        </Reveal>

        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setMode("science")}
        >
          {(Object.keys(lenses) as Mode[]).map((mode) => (
            <LensPanel
              key={mode}
              mode={mode}
              lens={lenses[mode]}
              onHover={setMode}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* 03 — What I want to do                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="group/section relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <SectionDivider tickClass="left-5 sm:left-8" />
        <Reveal>
          <div className="mb-12 flex items-baseline gap-4">
            <span className="font-mono text-xs tracking-widest text-accent">
              (03)
            </span>
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              {t.whatIWant}
            </h2>
            <span className="hairline flex-1" />
          </div>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="max-w-md">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-mist">
                {ambition.lead}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {ambition.body}
              </p>
            </div>
            <ul>
              {ambition.aims.map((aim, i) => (
                <li
                  key={aim.title}
                  className="group grid gap-x-6 gap-y-2 border-t border-hair py-7 last:border-b sm:grid-cols-[2rem_1fr]"
                >
                  <span className="font-mono text-xs tracking-widest text-faint transition-colors group-hover:text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-mist">
                      {aim.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted">
                      {aim.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function LensPanel({
  mode,
  lens,
  onHover,
}: {
  mode: Mode;
  lens: { title: string; kicker: string; blurb: string; href: string };
  onHover: (m: Mode) => void;
}) {
  return (
    <div onMouseEnter={() => onHover(mode)}>
      <Link
        href={lens.href}
        className="group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-2xl border border-hair bg-surface p-8 transition-colors hover:border-accent/40"
      >
        <div className="dot-grid absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
        <div
          aria-hidden
          className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-all duration-700 group-hover:bg-accent/25"
        />
        <div className="relative flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-accent">
            {lens.kicker}
          </span>
          <span className="text-xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            →
          </span>
        </div>
        <div className="relative">
          <h3 className="font-display text-4xl font-semibold tracking-tight text-mist transition-colors group-hover:text-accent sm:text-5xl">
            {lens.title}
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            {lens.blurb}
          </p>
        </div>
      </Link>
    </div>
  );
}
