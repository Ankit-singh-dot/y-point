"use client";

import React from "react";
import Image from "next/image";

interface EcosystemPillar {
  num: string;
  step: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  caption: string;
}

const PILLARS: EcosystemPillar[] = [
  {
    num: "01",
    step: "Pillar 01",
    title: "Centres of excellence",
    description:
      "Tap into IIT Bombay’s premier research hubs—spanning AI, semiconductors, quantum computing, and clean energy—built on decades of deep scientific expertise.",
    tags: ["AI", "Semiconductors", "Quantum Computing", "Clean Energy"],
    image: "/iitb/main-building.webp",
    caption: "IIT Bombay · Advanced Research Core",
  },
  {
    num: "02",
    step: "Pillar 02",
    title: "Access",
    description:
      "Connect directly with specialized labs, faculty mentorship, and the broader institutional innovation network to validate and scale complex technologies.",
    tags: ["Specialized Labs", "Faculty Mentorship", "Institutional Network"],
    image: "/iitb/entrance-wall.webp",
    caption: "Specialized Infrastructure & Faculty Advisory",
  },
  {
    num: "03",
    step: "Pillar 03",
    title: "Commercialisation of IP",
    description:
      "Translate cutting-edge academic research and institutional patents into market-ready products backed by dedicated early-stage deeptech capital.",
    tags: ["Academic Research", "Institutional Patents", "Market-Ready Products", "DeepTech Capital"],
    image: "/iitb/crest-plaque.webp",
    caption: "SINE IIT Bombay · Institutional Translation",
  },
];

export default function IITBEcosystemLaunchpad() {
  return (
    <section className="relative py-20 sm:py-28 bg-white dark:bg-[#05070a] border-t border-black/[0.08] dark:border-white/[0.08] overflow-visible">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-5">
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Institutional Framework
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-[#0A0A0A] dark:text-white tracking-tight leading-tight">
              IIT Bombay Innovation Ecosystem: A DeepTech Launchpad
            </h2>
          </div>
          <span className="font-mono text-xs text-zinc-500 tracking-wider">
            01 → 02 → 03
          </span>
        </div>
      </div>

      {/* Stacking Cards Container: Card-Over-Card Scroll Flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-20">
        {PILLARS.map((pillar, idx) => (
          <div
            key={pillar.num}
            className="sticky transition-all duration-300"
            style={{
              top: `calc(90px + ${idx * 24}px)`,
              zIndex: idx + 1,
            }}
          >
            <div className="relative w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6 sm:p-10 lg:p-12 overflow-hidden backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Number, Title & User Copy */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3] tracking-[0.22em] uppercase">
                        {pillar.step}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                        Stage {pillar.num} of 03
                      </span>
                    </div>

                    <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                      {pillar.title}
                    </h3>

                    <p className="font-sans font-light text-sm sm:text-base lg:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Clean Tags extracted directly from verified text */}
                  <div className="pt-2 border-t border-black/5 dark:border-white/5 space-y-2">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {pillar.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Authentic IIT Bombay Photography */}
                <div className="lg:col-span-5 relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-auto h-full min-h-[180px] sm:min-h-[240px] lg:min-h-[280px] rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 shadow-inner">
                  <Image
                    src={pillar.image}
                    alt={pillar.caption}
                    fill
                    className="object-cover object-center grayscale contrast-110 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-[11px] uppercase tracking-wider">
                    {pillar.caption}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
