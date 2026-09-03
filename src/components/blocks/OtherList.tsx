import type { OtherListBlock } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

export function OtherList({ block }: { block: OtherListBlock }) {
  return (
    <section className="py-10">
      <SectionHeading kicker={block.kicker} heading={block.heading} intro={block.intro} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <div key={item.title} className="rounded-xl bg-navy-900 p-5 text-white">
            {item.tag && (
              <span className="mb-2 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-accent-400">
                {item.tag}
              </span>
            )}
            <p className="font-semibold">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
