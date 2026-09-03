import type { ProseBlock } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

export function Prose({ block }: { block: ProseBlock }) {
  return (
    <section className="py-10">
      <SectionHeading kicker={block.kicker} heading={block.heading} />
      <div className="flex max-w-3xl flex-col gap-4">
        {block.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-ink-700">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
