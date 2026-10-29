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
    headline: "INVESTING IN THE FUTURE OF SILICON",
    thesis: "Models are commoditising. The durable value is moving down the stack.",
    image: "/sectors/ai-computing.jpg",
    icon: SiliconWaferIcon,
    bullets: [
      "Indic and domain-specific language architectures",
      "Custom silicon / ASIC inference acceleration",
      "Edge computing under strict power envelopes",
    ],
    detail: "Pre-seed & Seed · TRL 4–7 Entry",
  },
  {
    id: "advanced-manufacturing-semiconductor",
    num: "02",
    name: "Advanced Mfg & Semiconductor",
    headline: "INVESTING IN THE FUTURE OF THE FACTORY FLOOR",
    thesis: "India will not win manufacturing on labour cost. It will win on automation and on silicon.",
    image: "/sectors/semiconductor.jpg",
    icon: AdvancedManufacturingIcon,
    bullets: [
      "Fabless chip design (analog, RF, mixed-signal)",
      "Multi-axis industrial robotics & proprietary SLAM",
      "In-line automated metrology & laser inspection",
    ],
    detail: "Pre-seed & Seed · TRL 4–7 Entry",
  },
  {
    id: "next-gen-materials",
    num: "03",
    name: "Next Gen Materials",
    headline: "INVESTING IN THE FUTURE OF MATTER",
    thesis: "Every hard problem in energy, space and electronics is a materials problem wearing a disguise.",
    image: "/sectors/advanced-manufacturing.jpg",
    icon: MaterialsLatticeIcon,
    bullets: [
      "Advanced carbon lattices (CNTs, graphene)",
      "Solid-state battery electrolytes & catalysts",
      "Engineered sovereign coatings & surface synthesis",
    ],
    detail: "Pre-seed & Seed · TRL 4–7 Entry",
  },
  {
    id: "space-defence",
    num: "04",
    name: "Space & Defence",
    headline: "INVESTING IN THE FUTURE OF ORBIT",
    thesis: "Sovereign capability became a commercial market, and the procurement door is finally open.",
    image: "/sectors/space-defence.jpg",
    icon: SpaceDefenceIcon,
    bullets: [
      "Autonomous guidance, telemetry & avionics",
      "GaN & RF mixed-signal ICs for radar & defence",
      "Mil-spec qualified composite airframe structures",
    ],
    detail: "Pre-seed & Seed · TRL 4–7 Entry",
  },
  {
    id: "climate-cleantech",
    num: "05",
    name: "Climate & CleanTech",
    headline: "INVESTING IN THE FUTURE OF ENERGY",
    thesis: "Decarbonising an industrialising economy is a different problem from decarbonising a rich one.",
    image: "/sectors/climate-energy.jpg",
    icon: CleanTechEnergyIcon,
    bullets: [
      "Sensorless motor control algorithms & power electronics",
      "Axial flux motor retrofits for heavy fleets",
      "Non-lithium long-duration energy storage",
    ],
    detail: "Pre-seed & Seed · TRL 4–7 Entry",
  },
  {
    id: "life-sciences",
    num: "06",
    name: "Life Sciences",
    headline: "INVESTING IN THE FUTURE OF MEDICINE",
    thesis: "Indian clinical scale and Indian engineering cost is an advantage nobody else can assemble.",
    image: "/sectors/life-sciences.jpg",
    icon: LifeSciencesIcon,
    bullets: [
      "Indigenous CAR-T cell immunotherapy bioengineering",
      "Novel vector delivery & enzyme synthesis platforms",
      "Point-of-care diagnostics engineered for Indian cost",
    ],
    detail: "Pre-seed & Seed · TRL 4–7 Entry",
  },
];

export default function FocusAreasStackingBento() {
  return (
    <section
      id="focus-areas"
      className="relative bg-white dark:bg-[#05070a] border-t border-black/[0.08] dark:border-white/[0.08] pb-24 sm:pb-36"
    >
      {/* Editorial Section Header */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-medium">
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
            href="/apply"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#0D7377] dark:text-[#00E5A3] hover:underline pb-1 font-semibold"
          >
            <span>Pitch Your Technology</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 
        Native Sticky Stacking Cards Flow:
        Uses CSS position: sticky with incremental offsets.
        This provides 100% native 60fps/120fps GPU acceleration on Mac trackpads,
        keeps ALL previous cards layered in the stack, and eliminates opacity jumps or end-of-scroll glitching.
      */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 space-y-16 sm:space-y-24">
        {STACKING_SECTORS.map((sector, idx) => {
          const Icon = sector.icon;

          return (
            <div
              key={sector.id}
              className="sticky transition-all duration-300"
              style={{
                top: `calc(90px + ${idx * 18}px)`,
                zIndex: idx + 1,
              }}
            >
              <div className="relative w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-6 sm:p-10 overflow-hidden backdrop-blur-md">
                
                {/* Subtle Quantum Corner Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#00E5A3]/5 blur-[80px] pointer-events-none" />

                {/* Main Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Left Column: Thesis & Diligence Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#0D7377] dark:text-[#00E5A3] tracking-[0.2em]">
                          VERTICAL {sector.num} / 06
                        </span>
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[#0D7377] dark:text-[#00E5A3]">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                      </div>

                      <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        {sector.headline}
                      </div>

                      <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                        {sector.name}
                      </h3>

                      <p className="font-serif italic text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-snug">
                        &ldquo;{sector.thesis}&rdquo;
                      </p>
                    </div>

                    {/* Active Diligence Inquiries */}
                    <div className="space-y-2 border-t border-black/5 dark:border-white/5 pt-3">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                        Active Diligence Inquiries
                      </div>
                      <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                        {sector.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#0D7377] dark:text-[#00E5A3] font-mono">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                      <span className="font-mono text-[11px] text-zinc-500">
                        {sector.detail}
                      </span>
                      <Link
                        href="/apply"
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#0D7377] dark:text-[#00E5A3] font-bold hover:underline"
                      >
                        <span>Pitch in this Domain</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Technical Engineering Photography */}
                  <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[300px] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-inner">
                    <Image
                      src={sector.image}
                      alt={sector.name}
                      fill
                      className="object-cover grayscale contrast-115 opacity-85 hover:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 font-mono text-[9px] text-white/80 tracking-wider">
                      VERIFIED TECHNICAL PHOTOGRAPHY · SINE IIT BOMBAY
                    </div>
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
