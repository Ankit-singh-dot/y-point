"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Microscope, Rocket, Landmark } from "lucide-react";

export default function HomeIntroAndAdvantage() {
  const metrics = [
    { value: "Pre-seed & Seed", label: "Investment stage", sub: "First institutional cheque" },
    { value: "TRL 4 +", label: "Technology maturity focus", sub: "Beyond theoretical concepts" },
    { value: "6", label: "Focus Areas", sub: "Core deeptech domains" },
  ];

  const advantageCards = [
    {
      num: "01",
      title: "Institutional foundation",
      description: "Launched by SINE, IIT Bombay, within a research and technology entrepreneurship ecosystem.",
      icon: Landmark,
      bgImage: "/iitb/crest-plaque.jpg",
    },
    {
      num: "02",
      title: "Deeptech investment focus",
      description: "Evaluating technology maturity, differentiation and commercial potential.",
      icon: Microscope,
    },
    {
      num: "03",
      title: "From prototype to market",
      description: "Understanding the technical and commercial milestones required to build a business.",
      icon: Rocket,
    },
    {
      num: "04",
      title: "Long-term value creation",
      description: "Backing founders addressing meaningful problems with the potential to build enduring companies.",
      icon: Building2,
    },
  ];

  return (
    <section className="relative z-10 py-20 sm:py-28 bg-white dark:bg-[#05070a] text-[#0A0A0A] dark:text-white border-t border-black/[0.08] dark:border-white/[0.08] overflow-hidden">
      
      {/* Subtle IIT Bombay Crest Watermark in Background (Never overlaps or obscures text) */}
      <div 
        className="absolute -right-24 top-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px]"
        aria-hidden="true"
      >
        <Image
          src="/iitb/iitb-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-24">
        
        {/* =========================================================================
            1. FROM SCIENCE TO SIGNIFICANCE & INSTITUTIONAL ANCHOR
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Text & Key Metrics (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                Y-Point Venture Capital Fund · SINE IIT Bombay
              </div>
              <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
                From Science to Significance.
              </h2>
              <p className="font-sans font-medium text-lg sm:text-xl text-zinc-800 dark:text-zinc-200 leading-snug">
                Backing ambitious founders building the next generation of deeptech companies.
              </p>
              <div className="space-y-3 font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                <p>
                  Y-Point Venture Capital Fund is the Venture Capital arm of IIT Bombay. We invest in IP-led companies developing solutions for global markets.
                </p>
                <p>
                  Our focus is on supporting startups in their journey from validated technology to commercially meaningful businesses, informed by an investment approach grounded in science, engineering and market potential.
                </p>
              </div>
            </div>

            {/* Three Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="p-5 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] space-y-1.5 shadow-xs"
                >
                  <div className="font-display font-light text-2xl sm:text-3xl text-[#0D7377] dark:text-[#00E5A3]">
                    {item.value}
                  </div>
                  <div className="font-sans font-semibold text-xs sm:text-sm text-[#0A0A0A] dark:text-white">
                    {item.label}
                  </div>
                  <div className="font-mono text-[10px] text-zinc-500">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Purposeful Architectural Visual Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-lg">
              <div className="relative aspect-[16/10] sm:aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/iitb/main-gate.jpg"
                  alt="IIT Bombay Institutional Foundation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                
                {/* Legibility Gradients: Subtle bottom scrim so the photography remains clean and prominent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                {/* Header Tag */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
                    <div className="relative h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0">
                      <Image src="/iitb/iitb-logo.png" alt="" fill className="object-contain" />
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] text-white tracking-wider font-semibold">
                      SINE · IIT BOMBAY
                    </span>
                  </div>
                  <span className="hidden sm:inline-block font-mono text-[9px] sm:text-[10px] text-white/70 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    EST. 1958
                  </span>
                </div>

                {/* Bottom Clear Information Block: Ultra-clean on smaller screens */}
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 text-white space-y-1 sm:space-y-2">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#00E5A3] font-semibold block">
                    Institutional Heritage
                  </span>
                  <h3 className="font-display font-light text-base sm:text-2xl text-white leading-tight">
                    Rooted in Academic Excellence
                  </h3>
                  
                  {/* Long text hidden on mobile for maximum clean visual impact */}
                  <p className="hidden sm:block font-sans text-xs text-white/80 leading-relaxed font-light">
                    Direct access to intellectual property, research laboratories, and faculty networks translating scientific breakthroughs into category leaders.
                  </p>
                  
                  <div className="hidden sm:flex pt-1.5 items-center gap-2 font-mono text-[10px] text-white/70 border-t border-white/15">
                    <span className="text-[#00E5A3] font-bold">ज्ञानं परमं ध्येयम्</span>
                    <span>·</span>
                    <span>Knowledge is the Supreme Goal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            2. THE Y-POINT ADVANTAGE (Four Purposeful Cards)
           ========================================================================= */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-5">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                Why Us
              </div>
              <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
                The Y-Point Advantage
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] hover:underline font-semibold"
            >
              <span>Explore Institutional Heritage</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantageCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.num}
                  className="group relative p-6 sm:p-7 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] flex flex-col justify-between space-y-6 hover:border-[#0D7377] transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle Background Glimpse for Card 1 (Protected with Deep Scrim) */}
                  {card.bgImage && (
                    <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06] dark:opacity-[0.08] group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src={card.bgImage}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3]">
                        {card.num}
                      </span>
                      <div className="h-8 w-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center text-[#0D7377] dark:text-[#00E5A3]">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <h4 className="font-sans font-semibold text-lg text-[#0A0A0A] dark:text-white leading-snug">
                      {card.title}
                    </h4>
                    <p className="font-sans font-light text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="relative pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    SINE · IIT Bombay
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
