"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  SiliconWaferIcon,
  AdvancedManufacturingIcon,
  MaterialsLatticeIcon,
  SpaceDefenceIcon,
  CleanTechEnergyIcon,
  LifeSciencesIcon,
} from "./IITBIcons";

const STACKING_SECTORS = [
  {
    id: "ai-advanced-computing",
    num: "01",
    name: "AI & Advanced Computing",
    thesis: "Models are commoditising. The durable value is moving down the stack.",
    image: "/sectors/ai-computing.webp",
    icon: SiliconWaferIcon,
    tags: [
      "Domain Architectures",
      "ASIC & Inference Acceleration",
      "Edge Computing",
    ],
  },
  {
    id: "advanced-manufacturing-semiconductor",
    num: "02",
    name: "Advanced Mfg & Semiconductor",
    thesis: "India will not win manufacturing on labour cost. It will win on automation and on silicon.",
    image: "/sectors/semiconductor.webp",
    icon: AdvancedManufacturingIcon,
    tags: [
      "Fabless Chip Design",
      "Industrial Robotics",
      "Automated Metrology",
    ],
  },
  {
    id: "next-gen-materials",
    num: "03",
    name: "Next Gen Materials",
    thesis: "Every hard problem in energy, space and electronics is a materials problem wearing a disguise.",
    image: "/sectors/advanced-manufacturing.webp",
    icon: MaterialsLatticeIcon,
    tags: [
      "Carbon Lattices & Graphene",
      "Solid-State Electrolytes",
      "Sovereign Surface Coatings",
    ],
  },
  {
    id: "space-defence",
    num: "04",
    name: "Space & Defence",
    thesis: "Sovereign capability became a commercial market, and the procurement door is finally open.",
    image: "/sectors/space-defence.webp",
    icon: SpaceDefenceIcon,
    tags: [
      "Autonomous Guidance & Avionics",
      "GaN & RF Radar ICs",
      "Composite Airframes",
    ],
  },
  {
    id: "climate-cleantech",
    num: "05",
    name: "Climate & CleanTech",
    thesis: "Decarbonising an industrialising economy is a different problem from decarbonising a rich one.",
    image: "/sectors/climate-energy.webp",
    icon: CleanTechEnergyIcon,
    tags: [
      "Motor Control & Power Electronics",
      "Axial Flux Fleet Retrofits",
      "Long-Duration Energy Storage",
    ],
  },
  {
    id: "life-sciences",
    num: "06",
    name: "Life Sciences",
    thesis: "Indian clinical scale and Indian engineering cost is an advantage nobody else can assemble.",
    image: "/sectors/life-sciences.webp",
    icon: LifeSciencesIcon,
    tags: [
      "CAR-T Bioengineering",
      "Vector Delivery Platforms",
      "Point-of-Care Diagnostics",
    ],
  },
];

export default function FocusAreasStackingBento() {
  return (
    <section
      id="focus-areas"
      className="relative bg-white dark:bg-[#05070a] border-t border-black/[0.08] dark:border-white/[0.08] pb-24 sm:pb-36 overflow-visible"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Where We Invest
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] dark:text-white tracking-tight leading-[1.12]">
              Six Deep Tech Focus Areas
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              AI &amp; Advanced Computing · Advanced Manufacturing · Next-Generation Materials · Lifesciences &amp; Biotechnology · Climate &amp; CleanTech · Space &amp; Defence.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#0D7377] dark:text-[#00E5A3] hover:underline pb-1 font-semibold"
          >
            <span>Explore Portfolio &amp; Sectors</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 
        Native Sticky Stacking Cards Flow:
        Uses CSS position: sticky with incremental offsets for smooth card-over-card physics.
      */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 space-y-10 sm:space-y-16">
        {STACKING_SECTORS.map((sector, idx) => {
          const Icon = sector.icon;

          return (
            <div
              key={sector.id}
              className="sticky transition-all duration-300"
              style={{
                top: `calc(80px + ${idx * 20}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="relative w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-6 sm:p-10 overflow-hidden backdrop-blur-md">
                
                {/* Subtle Ambient Corner Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#00E5A3]/5 blur-[80px] pointer-events-none" />

                {/* Main Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Left Column: Thesis & Diligence Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#0D7377] dark:text-[#00E5A3] tracking-[0.2em]">
                          VERTICAL {sector.num} / 06
                        </span>
                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#0D7377] dark:text-[#00E5A3]">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                        {sector.name}
                      </h3>

                      <p className="font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
                        {sector.thesis}
                      </p>

                      {/* Clean Focus Sub-Areas */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
                        {sector.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-3 sm:pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                      <Link
                        href="/portfolio"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#0D7377] dark:text-[#00E5A3] font-semibold hover:underline"
                      >
                        <span>Explore Sector</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Clean Technical Photography (No Watermark Clutter) */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] lg:col-span-5 rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-inner">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover contrast-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={idx === 0}
                    />
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
