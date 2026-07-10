"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TimelineItem } from "@/components/TimelineItem";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillGrid } from "@/components/SkillGrid";
import { useContent } from "@/components/LocaleProvider";

export default function SciencePage() {
  const { science, ui } = useContent();
  const { publication } = science;
  const t = ui.science;

  return (
    <div className="mx-auto max-w-content px-5 sm:px-8">
      {/* Hero */}
      <section className="relative pb-16 pt-16 sm:pb-24 sm:pt-24">
        {/* Soft accent glow behind the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <Reveal>
          <p className="relative flex items-center gap-3 font-mono text-sm tracking-widest text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {t.kicker}
          </p>
          <h1 className="relative mt-8 max-w-[14ch] font-display text-hero font-bold leading-[0.95] text-mist">
            {t.heading}
            <span className="text-accent">.</span>
          </h1>
          <p className="relative mt-10 max-w-3xl text-xl leading-relaxed text-muted sm:text-2xl sm:leading-relaxed">
            {science.summary}
          </p>
        </Reveal>
      </section>

      {/* 01 — Field experience */}
      <Section index="01" label={t.fieldExperience}>
        <ul>
          {science.experience.map((entry) => (
            <TimelineItem key={entry.title} entry={entry} />
          ))}
        </ul>
        <Reveal>
          <Link
            href="/music"
            className="group mt-10 inline-flex items-center gap-2 text-sm tracking-tight text-mist transition-colors hover:text-accent"
          >
            {t.creativeSide}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Section>

      {/* 02 — Education */}
      <Section index="02" label={t.education} title={t.fromMaths}>
        <ul>
          {science.education.map((entry) => (
            <TimelineItem key={entry.title} entry={entry} />
          ))}
        </ul>
      </Section>

      {/* 03 — Research notes */}
      <Section index="03" label={t.researchNotes} intro={t.researchIntro}>
        <Reveal>
          <article className="relative overflow-hidden rounded-2xl border border-hair bg-surface p-8 sm:p-10">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
              {t.preprint}
            </span>
            <h4 className="relative mt-5 max-w-3xl font-display text-2xl font-semibold leading-snug tracking-tight text-mist sm:text-3xl">
              {publication.title}
            </h4>
            <p className="relative mt-5 font-mono text-sm tracking-widest text-faint">
              {publication.authors} · {publication.venue}
            </p>
            <p className="relative mt-6 max-w-prose text-[17px] leading-relaxed text-muted">
              {publication.description}
            </p>
            <div className="relative mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {publication.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-accent link-underline"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        </Reveal>

        {/* Current focus */}
        <Reveal>
          <div className="mt-12 grid gap-6 border-t border-hair pt-12 lg:grid-cols-[10rem_1fr] lg:gap-8">
            <h4 className="font-mono text-sm uppercase tracking-[0.18em] text-muted">
              {t.currentFocus}
            </h4>
            <div className="max-w-prose">
              <p className="text-[17px] leading-relaxed text-muted">
                {science.currentFocus}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {science.researchAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-hair px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-faint"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 04 — Compiled projects */}
      <Section index="04" label={t.compiledProjects} title={t.builtFromScratch}>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-y-20">
          {science.projects.map((project, i) => (
            <div key={project.name} className={i % 2 === 1 ? "sm:mt-16" : ""}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </Section>

      {/* 05 — Tech stack */}
      <Section index="05" label={t.techStack}>
        <SkillGrid groups={science.skills} />
      </Section>
    </div>
  );
}
