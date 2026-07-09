import type { SkillGroup } from "@/data/content";

/**
 * Skills as quiet labelled rows — mono group label in the left rail, items
 * as an inline list on the right. No boxes, just hairlines.
 */
export function SkillGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div>
      {groups.map((group) => (
        <div
          key={group.label}
          className="grid gap-x-8 gap-y-3 border-t border-hair py-8 last:border-b sm:grid-cols-[10rem_1fr]"
        >
          <h4 className="font-mono text-sm uppercase tracking-[0.18em] text-muted">
            {group.label}
          </h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {group.items.map((item) => (
              <li key={item} className="text-[17px] tracking-tight text-mist">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
