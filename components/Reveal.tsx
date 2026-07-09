"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

/**
 * Shared scroll-in motion primitive — a quiet fade + rise reused across
 * every section so both lenses move the same way. Honours reduced motion
 * via the global CSS override.
 */
export function Reveal({ children, delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
