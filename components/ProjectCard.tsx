"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/content";

/**
 * Image-forward project card. Since the projects have no cover art, the
 * "cover" is generated: a dark poster with a dot-grid, an accent glow that
 * tracks the pointer on hover, a big ghosted index, and the project title
 * set large. Below sits the blurb, tech tags, and a "View project" CTA.
 * Honest (no fake screenshots) and tied to the technical identity.
 */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");
  const Wrapper = project.github ? motion.a : motion.div;
  const wrapperProps = project.github
    ? { href: project.github, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Wrapper {...wrapperProps} className="block">
        {/* Cover */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-hair bg-surface">
          <div className="dot-grid absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Accent glow */}
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl transition-all duration-700 group-hover:right-1/3 group-hover:top-0 group-hover:bg-accent/30"
          />
          {/* Big ghost index */}
          <span className="ghost-index pointer-events-none absolute -bottom-6 -left-2 select-none font-display text-[10rem] font-bold leading-none">
            {num}
          </span>

          <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs tracking-widest text-accent">
                ({num})
              </span>
              {project.github && (
                <span className="flex items-center gap-1.5 font-mono text-xs tracking-widest text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View project ↗
                </span>
              )}
            </div>
            <h3 className="max-w-[14ch] font-display text-3xl font-semibold tracking-tight text-mist transition-colors group-hover:text-accent sm:text-4xl">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
          <p className="max-w-prose text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {project.tags.map((tag) => (
            <li key={tag} className="font-mono text-[11px] tracking-wide text-faint">
              {tag}
            </li>
          ))}
        </ul>
      </Wrapper>
    </motion.article>
  );
}
