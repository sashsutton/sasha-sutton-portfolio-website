"use client";

import { useState } from "react";

/**
 * Portrait slot. Renders /portrait.jpg if it exists; until you drop a real
 * photo in public/portrait.jpg it falls back to a styled placeholder that
 * matches the site's card language. Swap the file — no code change needed.
 */
export function Portrait({ className = "" }: { className?: string }) {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-hair bg-surface ${className}`}
    >
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-accent/15 blur-3xl"
      />
      {hasPhoto ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/portrait.jpg"
          alt="Sasha Sutton"
          onError={() => setHasPhoto(false)}
          className="relative h-full w-full object-cover"
        />
      ) : (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center">
          <svg
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-faint"
            aria-hidden
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
          </svg>
          <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
            Portrait
          </span>
        </div>
      )}
    </div>
  );
}
