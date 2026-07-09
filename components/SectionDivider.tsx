"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Opening divider for every numbered section: a faint full-width rule with a
 * bold accent tick that draws itself in from the left when the section scrolls
 * into view, and extends gently while the section is hovered.
 *
 * Drop it as the first child of a `relative` section tagged `group/section`.
 * `tickClass` positions the tick's left edge to line up with the section's
 * content (e.g. `left-5 sm:left-8` when the section carries its own padding).
 */
export function SectionDivider({ tickClass = "left-0" }: { tickClass?: string }) {
  return (
    <>
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-hair via-hair to-transparent"
      />
      <motion.span
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.7, ease }}
        style={{ transformOrigin: "left" }}
        className={`absolute top-0 h-[3px] w-20 origin-left rounded-full bg-accent transition-[width] duration-500 ease-out group-hover/section:w-28 ${tickClass}`}
      />
    </>
  );
}
