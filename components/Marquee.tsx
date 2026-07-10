import { Fragment } from "react";

/**
 * Infinite kinetic marquee of keywords. The track is duplicated so the
 * -50% translate loops seamlessly; hovering pauses it. Purely CSS-driven,
 * so it costs nothing on the main thread and respects reduced-motion.
 */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-track relative flex overflow-hidden border-y border-hair py-5">
      <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
        {[0, 1].map((dup) => (
          <Fragment key={dup}>
            {items.map((item) => (
              <span
                key={`${dup}-${item}`}
                aria-hidden={dup === 1}
                className="flex items-center gap-8 font-display text-2xl font-medium tracking-tight text-muted sm:text-3xl"
              >
                {item}
                {/* U+FE0E forces text (non-emoji) rendering so the symbol
                    stays the accent-coloured glyph on iOS, matching desktop. */}
                <span className="text-accent">{"✳︎"}</span>
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
