import Link from "next/link";
import type { ClosingBlock } from "@/lib/types";

export function Closing({ block }: { block: ClosingBlock }) {
  return (
    <section className="mt-6 rounded-2xl bg-mist-50 p-6 md:p-8">
      {block.paragraphs.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-ink-500">
          {p}
        </p>
      ))}
      <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
        {block.ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="text-sm font-semibold text-navy-900 hover:text-navy-700"
          >
            {cta.label} →
          </Link>
        ))}
      </div>
    </section>
  );
}
