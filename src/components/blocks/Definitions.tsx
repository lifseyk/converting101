import type { DefinitionsBlock } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

export function Definitions({ block }: { block: DefinitionsBlock }) {
  const cols = block.columns ?? (block.items.length >= 4 ? 4 : block.items.length === 3 ? 3 : 2);
  const gridCols =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 3
        ? "sm:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <section className="py-10">
      <SectionHeading kicker={block.kicker} heading={block.heading} intro={block.intro} />
      <dl className={`grid grid-cols-1 gap-5 ${gridCols}`}>
        {block.items.map((item) => (
          <div
            key={item.term}
            className="rounded-xl border border-mist-200 bg-mist-50 p-5"
          >
            <dt className="mb-1.5 font-semibold text-navy-900">{item.term}</dt>
            <dd className="text-sm leading-relaxed text-ink-700">{item.definition}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
