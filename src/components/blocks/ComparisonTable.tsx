import type { ComparisonTableBlock } from "@/lib/types";
import { SectionHeading } from "./SectionHeading";

export function ComparisonTable({ block }: { block: ComparisonTableBlock }) {
  return (
    <section className="py-10">
      <SectionHeading kicker={block.kicker} heading={block.heading} />
      <div className="overflow-x-auto rounded-xl border border-mist-200">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-navy-900">
              {block.columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 font-semibold tracking-wide text-white first:rounded-tl-xl last:rounded-tr-xl"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-mist-50"}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={
                      j === 0
                        ? "px-4 py-3 font-semibold text-navy-900"
                        : "px-4 py-3 text-ink-700"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
