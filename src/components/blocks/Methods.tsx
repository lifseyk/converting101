import type { MethodsBlock } from "@/lib/types";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { slugify } from "@/lib/slug";
import { SectionHeading } from "./SectionHeading";

export function Methods({ block }: { block: MethodsBlock }) {
  return (
    <section className="py-10">
      <SectionHeading kicker={block.kicker} heading={block.heading} intro={block.intro} />
      <div className="flex flex-col gap-10">
        {block.items.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 gap-6 rounded-2xl border border-mist-200 p-6 md:grid-cols-5 md:gap-8 md:p-8"
          >
            <div className={item.image ? "md:col-span-3" : "md:col-span-5"}>
              {item.tag && (
                <span className="mb-2 inline-block rounded-full bg-navy-900/10 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-navy-900">
                  {item.tag}
                </span>
              )}
              <h3
                id={slugify(item.title)}
                className="scroll-mt-24 text-xl font-bold text-navy-900"
              >
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-700">{item.description}</p>

              {item.subitems && (
                <div className="mt-5 flex flex-col gap-3">
                  {item.subitems.map((sub) => (
                    <div key={sub.title} className="border-l-2 border-accent-500 pl-4">
                      <p className="font-semibold text-navy-900">{sub.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink-700">{sub.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {(item.why || item.uses) && (
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {item.why && (
                    <div>
                      <p className="text-xs font-semibold tracking-[0.14em] text-accent-600 uppercase">
                        Why use it
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{item.why}</p>
                    </div>
                  )}
                  {item.uses && (
                    <div>
                      <p className="text-xs font-semibold tracking-[0.14em] text-accent-600 uppercase">
                        Common uses
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{item.uses}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            {item.image && (
              <div className="md:col-span-2">
                <ImagePlaceholder label={item.image} className="min-h-[180px] h-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
