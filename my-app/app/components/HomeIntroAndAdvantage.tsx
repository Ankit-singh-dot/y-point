"use client";

import React from "react";
import { PhotoStage } from "./PhotoHero";
import Link from "next/link";
import { ArrowUpRight, Building2, Microscope, Rocket, Landmark } from "lucide-react";


export default function HomeIntroAndAdvantage() {
  const facts = [
    { value: "Pre-seed & Seed", label: "Stage" },
    { value: "TRL 4+", label: "Technology maturity" },
    { value: "Deep Tech", label: "Thesis" },
  ];

  const advantages = [
    {
      num: "01",
      title: "Institutional foundation",
      description: "Launched by SINE, IIT Bombay, inside a research-led entrepreneurship ecosystem.",
      icon: Landmark,
    },
    {
      num: "02",
      title: "Deeptech focus",
      description: "We assess technology maturity, differentiation and commercial potential.",
      icon: Microscope,
    },
    {
      num: "03",
      title: "Prototype to market",
      description: "We know the technical and commercial milestones a company has to clear.",
      icon: Rocket,
    },
    {
      num: "04",
      title: "Long-term value",
      description: "We back founders solving meaningful problems with enduring companies.",
      icon: Building2,
    },
  ];

  return (
    <>
      {/* =========================================================================
          1. FULL-FRAME: IIT Bombay Main Building
         ========================================================================= */}
      <PhotoStage photo="mainBuilding" preload minHeight="100svh" scrollCue paddingTop="7rem" paddingBottom="clamp(3rem, 7vw, 6rem)">
          <div className="space-y-5">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#00E5A3] font-semibold">
              SINE · IIT Bombay
            </div>
            <h2 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
              From Science to Significance.
            </h2>
            <p className="font-sans font-light text-base sm:text-xl text-white/80 leading-relaxed max-w-xl">
              The venture capital arm of IIT Bombay, backing founders who turn validated research into enduring companies.
            </p>
          </div>

          {/* Key facts: a single hairline row, no boxes */}
          <dl className="mt-10 sm:mt-14 grid grid-cols-3 max-w-3xl border-t border-white/20">
            {facts.map((f, i) => (
              <div key={f.label} className={`pt-5 pr-4 ${i > 0 ? "pl-4 sm:pl-6 border-l border-white/20" : ""}`}>
                <dt className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/55">{f.label}</dt>
                <dd className="mt-1.5 font-display font-light text-lg sm:text-3xl text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
      </PhotoStage>

      {/* =========================================================================
          2. THE Y-POINT ADVANTAGE
         ========================================================================= */}
      <section className="relative z-10 py-20 sm:py-28 bg-white dark:bg-[#05070a] text-[#0A0A0A] dark:text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-5">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                Why Y-Point
              </div>
              <h3 className="font-display font-light text-3xl sm:text-4xl text-[#0A0A0A] dark:text-white">
                The Y-Point Advantage
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] hover:underline font-semibold"
            >
              <span>About us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.num}
                  className="p-6 sm:p-7 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] space-y-4 hover:border-[#0D7377] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3]">{card.num}</span>
                    <Icon className="h-4 w-4 text-[#0D7377] dark:text-[#00E5A3]" />
                  </div>
                  <h4 className="font-sans font-semibold text-lg text-[#0A0A0A] dark:text-white leading-snug">
                    {card.title}
                  </h4>
                  <p className="font-sans font-light text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
