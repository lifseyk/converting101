import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { TableOfContents } from "@/components/TableOfContents";
import { topics, getTopic, getToc, getRelatedTopics } from "@/lib/topics";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata(
  props: PageProps<"/101/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: topic.title,
    description: topic.description,
  };
}

export default async function TopicPage(props: PageProps<"/101/[slug]">) {
  const { slug } = await props.params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const toc = getToc(topic);
  const related = getRelatedTopics(topic);

  return (
    <>
      <div className="border-b border-mist-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-500">
            <Link href="/" className="hover:text-navy-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/101" className="hover:text-navy-900">
              The 101
            </Link>
            <span>/</span>
            <span className="font-medium text-ink-700">{topic.navLabel}</span>
          </nav>
        </div>
      </div>

      <section className="bg-navy-900">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Kicker>{topic.kicker}</Kicker>
          <h1 className="max-w-3xl text-3xl font-black tracking-tight text-white md:text-4xl">
            {topic.title}
          </h1>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-12 md:py-16 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <BlockRenderer blocks={topic.blocks} />
        </article>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <TableOfContents items={toc} />

          <div className="rounded-2xl bg-navy-900 p-5 text-white">
            <p className="text-xs font-semibold tracking-[0.14em] text-accent-400 uppercase">
              Converting 101
            </p>
            <h3 className="mt-2 text-lg font-bold">Go deeper with the full library</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Twelve guides covering every core process in roll-to-roll converting.
            </p>
            <Link
              href="/101"
              className="mt-4 inline-block rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-accent-400"
            >
              Explore the 101 →
            </Link>
          </div>

          <div className="rounded-2xl border border-mist-200 p-5">
            <p className="text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
              Related Resources
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <Link href="/" className="text-ink-700 hover:text-navy-900">
                  What Is Converting?
                </Link>
              </li>
              <li>
                <Link href="/101" className="text-ink-700 hover:text-navy-900">
                  Technologies Overview
                </Link>
              </li>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/101/${item.slug}`} className="text-ink-700 hover:text-navy-900">
                    {item.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
