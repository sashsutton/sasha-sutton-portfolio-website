import type { TimelineEntry } from "@/data/content";

/**
 * A timeline row for education and experience: dates in the quiet left rail,
 * substance on the right, divided by hairlines to match the numbered rhythm.
 */
export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="group grid gap-x-8 gap-y-2 border-t border-hair py-9 sm:grid-cols-[13rem_1fr]">
      <span className="font-mono text-sm tracking-widest text-faint transition-colors group-hover:text-accent sm:whitespace-nowrap">
        {entry.dates}
      </span>
      <div>
        <h4 className="font-display text-2xl font-semibold tracking-tight text-mist">
          {entry.title}
        </h4>
        <p className="mt-1 text-base font-medium text-accent">{entry.org}</p>
        <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-muted">
          {entry.detail}
          {entry.href && (
            <>
              {" "}
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="text-accent link-underline"
              >
                ↗
              </a>
            </>
          )}
        </p>
      </div>
    </li>
  );
}
