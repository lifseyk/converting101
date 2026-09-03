import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { topics } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Common R2R Converting Technologies",
  description:
    "Once a substrate is on a roll, there are a number of ways value can be added as it moves through a converting line. An overview of the core R2R converting technologies.",
};

const coreTechnologies = [
  {
    title: "Coating",
    slug: "coating",
    description:
      "Coating applies a liquid, adhesive, or functional layer to the surface of a web — anything from a protective barrier to a specialty chemical formulation. Coating methods vary widely depending on the material, viscosity, and precision required, and the technique chosen has a direct impact on product performance, cost, and speed.",
  },
  {
    title: "Laminating",
    slug: "laminating",
    description:
      "Laminating bonds two or more layers of material together into a single, multi-layer structure. This is how many flexible packaging films, labels, and composite materials get their combination of properties — strength from one layer, a moisture barrier from another, printability from a third — that no single material could deliver alone.",
  },
  {
    title: "Printing",
    slug: "gravure-printing",
    description:
      "Printing applies graphics, text, or functional inks directly onto the web. In converting, this spans everything from decorative and brand packaging graphics to functional printing, where conductive or specialty inks are used to build electronic circuits, sensors, and other components directly into the substrate.",
  },
  {
    title: "Metallizing & Vacuum Deposition",
    slug: "metallizing",
    description:
      "Metallizing applies an extremely thin metallic layer to a web's surface, typically through vacuum deposition. This adds properties like barrier protection, reflectivity, or conductivity — common in food packaging, insulation, and specialty electronics applications.",
  },
  {
    title: "Slitting",
    slug: "slitting",
    description:
      "Slitting cuts a wide \"master roll\" into narrower rolls to the width required for the next process or the final customer. It's often one of the last steps in a converting line, and precision here has a direct effect on downstream efficiency and waste.",
  },
];

export default function TechnologiesOverview() {
  return (
    <>
      <section className="bg-navy-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Kicker>The 101</Kicker>
          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl">
            Common R2R Converting Technologies
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
            Once a substrate is on a roll, there are a number of different ways value can be
            added as it moves through a converting line. Most R2R operations rely on some
            combination of the following core technologies — often several in sequence on
            the same machine.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-6">
        <ImagePlaceholder label="Wide shot of a converting line with multiple processes visible" />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6">
          {coreTechnologies.map((tech) => (
            <div
              key={tech.title}
              className="rounded-2xl border border-mist-200 p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-navy-900">{tech.title}</h2>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink-700">{tech.description}</p>
              <Link
                href={`/101/${tech.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:text-navy-700"
              >
                Explore {tech.title} in depth →
              </Link>
            </div>
          ))}

          <div className="rounded-2xl bg-mist-50 p-6 md:p-8">
            <h2 className="text-xl font-bold text-navy-900">
              Web Handling: The Thread That Ties It Together
            </h2>
            <p className="mt-2 max-w-3xl leading-relaxed text-ink-700">
              All of these processes depend on one underlying discipline: how the web itself
              is unwound, moved through the machine, and rewound. Web handling covers
              tension control, guiding, and the mechanics of keeping a continuous, often
              delicate material running true through every process station — without
              wrinkles, breaks, or misalignment. Get web handling wrong, and even the best
              coating, laminating, or printing process can&rsquo;t deliver a good result.
            </p>
            <Link
              href="/101/web-handling"
              className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:text-navy-700"
            >
              Explore Web Handling in depth →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Kicker>Full Library</Kicker>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            All 12 topics
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/101/${topic.slug}`}
                className="rounded-xl bg-white p-5 transition hover:shadow-md"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-accent-600 uppercase">
                  {topic.kicker.replace("101 · ", "")}
                </span>
                <p className="mt-1.5 font-semibold text-navy-900">{topic.navLabel}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
