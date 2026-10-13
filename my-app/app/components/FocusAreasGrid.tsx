import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Factory, Atom, Rocket, Zap, Dna } from "lucide-react";

export const FOCUS_AREAS_DATA = [
  {
    id: "ai-advanced-computing",
    title: "AI & Advanced Computing",
    headline: "INVESTING IN THE FUTURE OF SILICON",
    thesis: "Models are commoditising. The durable value is moving down the stack.",
    image: "/bygen_ (@bygen_ai) on X.jpeg",
    icon: Cpu,
    sectors: [
      "Indic and domain-specific language models",
      "AI infrastructure & optimisation tooling",
      "AI safety, assurance & cyber security",
      "Edge inference under hard power constraints",
      "AI applied to scientific discovery",
    ],
    fastNo: "An application built on a third-party model with no proprietary data, hardware or workflow lock-in.",
    sineHeritage: "Babbelbots.ai, Cogno.ai, Whiterabbit.ai, QNu Labs",
  },
  {
    id: "advanced-manufacturing-semiconductor",
    title: "Advanced Manufacturing & Semiconductor",
    headline: "INVESTING IN THE FUTURE OF THE FACTORY FLOOR",
    thesis: "India will not win manufacturing on labour cost. It will win on automation and on silicon.",
    image: "/_ (27).jpeg",
    icon: Factory,
    sectors: [
      "Chip design — analog, mixed-signal, RF, domain silicon",
      "Photonics & optical components",
      "Advanced industrial robotics & motion control",
      "In-line machine vision inspection & metrology",
      "Electronics assembly & semiconductor equipment",
    ],
    fastNo: "A chip concept with no silicon, no simulation results and no foundry conversation.",
    sineHeritage: "Peppermint Robotics, MumbaiSemi, Matterwave",
  },
  {
    id: "next-gen-materials",
    title: "Next Gen Materials",
    headline: "INVESTING IN THE FUTURE OF MATTER",
    thesis: "Every hard problem in energy, space and electronics is a materials problem wearing a disguise.",
    image: "/_ (26).jpeg",
    icon: Atom,
    sectors: [
      "Advanced carbon materials (CNTs, graphene)",
      "Energy transition materials (batteries, catalysts)",
      "Semiconductor substrates & packaging interfaces",
      "Structural composites for aerospace & defence",
      "Coatings & qualified surface engineering",
    ],
    fastNo: "Grams in a lab with no process engineering work and no view on scale-up.",
    sineHeritage: "NCF Green, Myoworks",
  },
  {
    id: "space-defence",
    title: "Space & Defence",
    headline: "INVESTING IN THE FUTURE OF ORBIT",
    thesis: "Sovereign capability became a commercial market, and the procurement door is finally open.",
    image: "/06a51e9d213cf5cd790d81eaca0d09e2.jpg",
    icon: Rocket,
    sectors: [
      "Reusable launch vehicles and propulsion",
      "GaN, RF, and mixed-signal ICs for space & defence",
      "Satellite servicing & space situational awareness",
      "Sensors, electronic warfare & secure communications",
      "Test, qualification & mission assurance",
    ],
    fastNo: "A total-addressable-market slide where a named customer conversation should be.",
    sineHeritage: "Bellatrix Aerospace",
  },
  {
    id: "climate-cleantech",
    title: "Climate & CleanTech",
    headline: "INVESTING IN THE FUTURE OF ENERGY",
    thesis: "Decarbonising an industrialising economy is a different problem from decarbonising a rich one.",
    image: "/Midjourney_  Painting depicts human and robotic hands reaching, commentary on AI_.jpeg",
    icon: Zap,
    sectors: [
      "Green hydrogen and ammonia electrolyser components",
      "Alternative battery chemistries & long-duration storage",
      "Grid infrastructure & industrial decarbonisation",
      "Water treatment, desalination & industrial reuse",
      "Circularity — battery, e-waste & critical mineral recovery",
    ],
    fastNo: "A model that only works with a carbon price India has not adopted.",
    sineHeritage: "ART-PV, NXPEC, Indra Water",
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    headline: "INVESTING IN THE FUTURE OF MEDICINE",
    thesis: "Indian clinical scale and Indian engineering cost is an advantage nobody else can assemble.",
    image: "/The Next Creation - Humanity, Amplified by Technology.jpeg",
    icon: Dna,
    sectors: [
      "Novel biologics development",
      "Precision medicine and clinical genomics",
      "Stem cell and tissue engineering",
      "Point-of-care devices designed for Indian cost",
      "Biomedical instrumentation & computational diagnostics",
    ],
    fastNo: "An algorithm trained on public datasets with no clinical validation and no regulatory plan.",
    sineHeritage: "ImmunoACT, Haystack Analytics, Endimension",
  },
];

export default function FocusAreasGrid() {
  return (
    <section id="focus-areas" className="relative bg-[#08090c] py-24 sm:py-32 border-b border-[#1f2532]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#00e5a3]">
              WHERE WE INVEST · THE SIX VERTICALS
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Six sectors. One common condition.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              The hard part is the technology, and it has been proven but not yet productised. No single sector will exceed roughly a fifth of the portfolio. We are building a concentrated fund, not an index.
            </p>
          </div>
          <Link
            href="/focus-areas"
            className="inline-flex items-center gap-2 rounded-full border border-[#2a3449] bg-[#0e121a] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:border-[#00e5a3] hover:text-[#00e5a3] transition-all"
          >
            <span>Explore All Theses</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6 Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOCUS_AREAS_DATA.map((area) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#1f2637] bg-[#0c0f16] transition-all duration-500 hover:-translate-y-1 hover:border-[#00e5a3]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Header with Real Custom Imagery */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#1b2230]">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f16] via-[#0c0f16]/40 to-transparent" />
                  
                  {/* Floating Icon badge */}
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#2c364c] bg-[#08090c]/80 backdrop-blur-md text-[#00e5a3]">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Headline Tag */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#00e5a3]">
                      {area.headline}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#00e5a3] transition-colors">
                      {area.title}
                    </h3>

                    {/* Verified 1-line thesis from Section 7.5 */}
                    <p className="text-sm font-medium leading-relaxed text-zinc-300">
                      &ldquo;{area.thesis}&rdquo;
                    </p>

                    {/* Sample focus areas */}
                    <div className="pt-2">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
                        Active Inquiries
                      </div>
                      <ul className="space-y-1.5 text-xs text-zinc-400">
                        {area.sectors.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#00e5a3] font-mono">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Link & Stage Info */}
                  <div className="pt-4 border-t border-[#181f2c] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-zinc-400">
                      Pre-seed & Seed · TRL 4–7
                    </span>
                    <Link
                      href={`/focus-areas/${area.id}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-[#00e5a3] group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Thesis</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
