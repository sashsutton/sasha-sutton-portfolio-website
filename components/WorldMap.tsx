import {
  MAP_WIDTH,
  MAP_HEIGHT,
  worldBackground,
  livedCountries,
} from "@/data/worldMap";

const RED = "#f04a4f";

/**
 * A quiet world map for the "places I've lived" section. The whole world sits
 * back in near-monochrome; the four countries lived in glow red, each pinned.
 * Pure SVG, pre-projected — no runtime map library. The legend text is passed
 * in so it can be localised.
 */
export function WorldMap({
  legendLabel = "Lived here",
  countries,
}: {
  legendLabel?: string;
  countries?: string[];
}) {
  const legendCountries = (countries ?? livedCountries.map((c) => c.label)).join(
    " · ",
  );
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-hair bg-surface p-4 sm:p-8">
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />
      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        className="relative w-full"
        role="img"
        aria-label="World map with France, England, Senegal and Laos highlighted in red, the countries I've lived in."
      >
        <defs>
          <filter id="lived-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* The rest of the world — quiet backdrop. */}
        <path
          d={worldBackground}
          fill="rgb(var(--dot) / 0.09)"
          stroke="rgb(var(--dot) / 0.18)"
          strokeWidth={0.5}
          strokeLinejoin="round"
        />

        {/* Countries lived in — glowing red. */}
        <g filter="url(#lived-glow)">
          {livedCountries.map((c) => (
            <path
              key={c.name}
              d={c.d}
              fill={RED}
              fillOpacity={0.9}
              stroke={RED}
              strokeWidth={0.75}
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* Subtle pins marking each country — no labels. */}
        {livedCountries.map((c) => (
          <g key={`pin-${c.name}`}>
            <circle cx={c.cx} cy={c.cy} r={6.5} fill={RED} fillOpacity={0.28} />
            <circle cx={c.cx} cy={c.cy} r={3} fill="#fff" />
          </g>
        ))}
      </svg>

      {/* Legend / caption. */}
      <figcaption className="relative mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-2 sm:mt-6">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: RED }}
          />
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            {legendLabel}
          </span>
        </span>
        <span className="font-mono text-[11px] tracking-widest text-faint">
          {legendCountries}
        </span>
      </figcaption>
    </figure>
  );
}
