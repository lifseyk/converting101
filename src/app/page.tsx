import Link from "next/link";
import { Kicker } from "@/components/Kicker";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { topics } from "@/lib/topics";

const steps = [
  {
    number: "1",
    title: "Unwind",
    description:
      "A rolled substrate is unwound and fed into the machine. The continuous web flows through the system under controlled tension, speed, and alignment.",
  },
  {
    number: "2",
    title: "Process",
    description:
      "The web passes through a series of value-adding steps — coating, printing, lamination, cutting, slitting, drying, metallizing, or other treatments — that transform the base substrate into something more useful.",
  },
  {
    number: "3",
    title: "Rewind",
    description:
      "The material is rewound onto another roll or divided into smaller rolls, ready for further processing or distribution. For some substrates, this is the finished product. For others, value continues to be added downstream.",
  },
];

const advantages = [
  {
    title: "Economical",
    description:
      "Continuous webs can be produced at far higher speeds than discrete sheet processing, without the start-stop losses that come with it.",
  },
  {
    title: "High Throughput",
    description:
      "The continuous nature of R2R reduces downtime and supports high-volume, efficient production at scale.",
  },
  {
    title: "Scalability",
    description:
      "R2R accommodates increasing demand without major equipment or line modifications, making it well suited to mass production.",
  },
  {
    title: "Flexibility",
    description:
      "The process handles a wide range of substrates — plastics, papers, fabrics, foils — making it adaptable across electronics, sensors, solar, and more.",
  },
  {
    title: "Reduced Waste",
    description:
      "Continuous processing minimizes material waste between production runs compared to batch methods.",
  },
  {
    title: "Improved Consistency",
    description:
      "Because all material undergoes the same steps, products exhibit greater uniformity from start to finish.",
  },
];

const considerations = [
  {
    title: "Equipment Complexity",
    description:
      "R2R systems require specialized machinery and expertise. Initial setup and maintenance costs can exceed simpler batch systems.",
  },
  {
    title: "Process Control",
    description:
      "Maintaining precise control across a continuous system is challenging. Variations in ambient conditions or substrate properties can affect output quality.",
  },
  {
    title: "Quality Control",
    description:
      "Detecting defects in real time can be difficult, and in some cases issues aren't identified until significant material has already been processed.",
  },
  {
    title: "Material Limitations",
    description:
      "R2R is best suited to flexible materials and may not fit rigid or large-format products that don't run well on a continuous web.",
  },
];

const applications = [
  "Flexible & printed electronics — flexible displays, RFID tags, printed sensors, wearables",
  "Batteries — thin-film and flexible battery designs, lithium-ion electrode processing",
  "Flexible packaging for food, medical, and consumer goods",
  "Labels, stickers, and decals",
  "Membranes and filters — water purification, air filtration",
  "Photovoltaics and flexible solar panels",
  "Medical devices — wound dressings, transdermal patches, bio-sensors, drug-delivery systems",
  "Thin films for optical coatings, barrier layers, and protective applications",
];

const markets = [
  {
    tag: "BATTERY & ENERGY",
    title: "Battery & Energy Storage",
    stat: "30% annual growth · $400B+ by 2030",
    description:
      "The lithium-ion battery market is expanding rapidly, with continued innovation spanning R2R manufacturing methods, cell and pack design, and new opportunities in battery chemistry and end-of-life solutions. R2R processing is also central to solar panel and fuel cell manufacturing.",
  },
  {
    tag: "PACKAGING",
    title: "Food & Flexible Packaging",
    stat: "$44B market in 2024",
    description:
      "Flexible packaging continues to deliver enhancements in shelf stability, reduced material weight, and improved customer experience — while the industry works to be part of the solution in the circular economy. R2R is at the heart of how this packaging is made.",
  },
  {
    tag: "ELECTRONICS",
    title: "Printed & Flexible Electronics",
    stat: "Rapidly expanding into smart packaging & medical",
    description:
      "Currently established in RFID tags and flexible LED strips, printed electronics is expanding into smart packaging and medical applications. R2R processing enables the low-cost, high-volume production these markets require.",
  },
  {
    tag: "MEDICAL",
    title: "Medical Devices & Bio-Sensors",
    stat: "Fast-growing as digital printing capabilities expand",
    description:
      "Beyond conventional bandages and blister packs, the larger opportunity lies in flexible electronics for bio-sensors and drug-delivery systems. R2R manufacturing is lowering costs and enabling innovation across this high-value market.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Kicker>Industry Overview</Kicker>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              What Is <span className="text-accent-500">Roll-to-Roll</span> Converting?
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">
              Roll-to-roll (R2R) converting is a manufacturing process that transforms a
              continuous, flexible material — a &ldquo;web&rdquo; — into a more finished product. A
              substrate starts on a roll, value is added, and it ends on a roll. It&rsquo;s a
              process foundational to industries most people interact with every day.
            </p>
          </div>
          <ImagePlaceholder
            label="A converting-line operator at work"
            className="min-h-[280px] border-white/15 bg-white/5"
          />
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Kicker>The Process</Kicker>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
          How roll-to-roll converting works
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
          At its core, R2R converting is a three-step process — but the range of treatments
          and materials that happen in between is what makes it one of the most versatile
          manufacturing methods in the world.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-navy-950">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-700">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-mist-50 p-8">
          <h3 className="text-xl font-bold text-navy-900">What Is a Web?</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">
            A web is a sheet of flexible, continuous material capable of running through a
            machine. The substrate is what the process transforms — and R2R handles an
            enormous range of them, from paper and plastic films to metal foils, woven
            fabrics, and beyond.
          </p>
        </div>
      </section>

      {/* Advantages / Considerations */}
      <section className="bg-mist-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Kicker>Why R2R Converting?</Kicker>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            The advantages — and the challenges
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
            R2R converting offers powerful advantages, but it requires the right expertise to
            capture them. Understanding both sides is what separates companies that struggle
            from those that thrive.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold tracking-wide text-navy-900 uppercase">
                Advantages
              </p>
              <div className="mt-4 flex flex-col gap-5">
                {advantages.map((item) => (
                  <div key={item.title} className="rounded-xl bg-white p-5">
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide text-navy-700 uppercase">
                Considerations
              </p>
              <div className="mt-4 flex flex-col gap-5">
                {considerations.map((item) => (
                  <div key={item.title} className="rounded-xl bg-white p-5">
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-500">
                Many of these challenges can be mitigated with the right expertise — which is
                a large part of why the converting community exists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Kicker>Applications</Kicker>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
          Products made with roll-to-roll converting
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
          R2R manufacturing touches an enormous range of everyday and advanced products —
          from the packaging on groceries to the batteries in electric vehicles.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {applications.map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border border-mist-200 p-4">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent-500" />
              <span className="text-sm leading-relaxed text-ink-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Markets */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Kicker>Key Markets</Kicker>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            A look at where R2R is growing
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            Roll-to-roll converting plays a role across a wide set of major industries — and
            demand is accelerating across all of them.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {markets.map((market) => (
              <div key={market.title} className="rounded-2xl bg-navy-900 p-6">
                <span className="text-xs font-semibold tracking-[0.14em] text-accent-500 uppercase">
                  {market.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-white">{market.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-400">{market.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {market.description}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-16 max-w-2xl border-t border-white/10 pt-10 text-center">
            <p className="text-lg leading-relaxed text-white/80 italic">
              &ldquo;Roll-to-roll converting is foundational to industries most people interact
              with every day, often without realizing it — from the packaging on their
              groceries to the batteries in their devices. As demand grows across
              electronics, energy, and packaging, the converting industry is positioned at
              the center of that growth.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* 101 preview */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Kicker>Go Deeper</Kicker>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
          Explore the Converting 101 library
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">
          Twelve deep-dive guides covering every core process in R2R converting — from
          coating and laminating to web handling and quality control.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.slice(0, 6).map((topic) => (
            <Link
              key={topic.slug}
              href={`/101/${topic.slug}`}
              className="rounded-xl border border-mist-200 p-5 transition hover:border-accent-500 hover:shadow-sm"
            >
              <p className="font-semibold text-navy-900">{topic.navLabel}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{topic.description}</p>
            </Link>
          ))}
        </div>
        <Link
          href="/101"
          className="mt-8 inline-block text-sm font-semibold text-navy-900 hover:text-navy-700"
        >
          View all 12 topics →
        </Link>
      </section>

      {/* CTA */}
      <section id="join" className="bg-accent-500">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 md:text-4xl">
            Navigate these challenges with the community behind you
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-navy-950/80">
            200+ converter, supplier, and university members share knowledge, solve
            problems, and advance the industry together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/101"
              className="rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-900"
            >
              Explore the 101 Library
            </Link>
            <Link
              href="/"
              className="rounded-full border border-navy-950 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-navy-950 hover:text-white"
            >
              View Member Benefits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
