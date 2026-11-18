"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import IITBEcosystemLaunchpad from "./IITBEcosystemLaunchpad";

export default function AboutSection() {
  const philosophyPoints = [
    {
      num: "01",
      title: "Technology must solve a meaningful problem.",
      description: "We look for ventures with a credible basis for differentiation and a significant market opportunity.",
    },
    {
      num: "02",
      title: "Validation matters.",
      description: "We focus on technology that has progressed beyond a purely conceptual stage and has identifiable next milestones.",
    },
    {
      num: "03",
      title: "Commercialisation is part of the thesis.",
      description: "Technical achievement must be accompanied by a credible path to customer adoption and viable economics.",
    },
    {
      num: "04",
      title: "Founders matter.",
      description: "We value teams capable of navigating technical and commercial uncertainty.",
    },
  ];

  const focusParameters = [
    { label: "Stage", value: "Pre-seed and seed" },
    { label: "Technology Maturity", value: "Typically TRL 4+" },
    { label: "Investment Themes", value: "Advanced computing, manufacturing, materials, biotechnology, climate technology, space and defence" },
  ];

  return (
    <section id="about" className="relative pt-24 sm:pt-32 pb-24 sm:pb-32 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white">

      {/* 1. OUR INVESTMENT PHILOSOPHY */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-20 sm:mb-28">
        <div className="space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Principles
            </span>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Our Investment Philosophy
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-[#666666] dark:text-zinc-400">
              Four fundamental tenats that govern how we evaluate science and partner with founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyPoints.map((item) => (
              <div
                key={item.num}
                className="p-6 sm:p-8 rounded-xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0E0E0E] space-y-3 transition-all hover:border-[#0D7377]"
              >
                <div className="font-mono text-xs font-bold text-[#0D7377]">
                  {item.num}
                </div>
                <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#0A0A0A] dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-sm sm:text-base text-[#666666] dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. IIT BOMBAY INNOVATION ECOSYSTEM: A DEEPTECH LAUNCHPAD (Card-Over-Card Stacking) */}
      <IITBEcosystemLaunchpad />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 3. OUR INVESTMENT FOCUS (Summary Grid from Document) */}
        <div className="mb-24 p-6 sm:p-10 lg:p-12 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0D0D0D] space-y-8">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Deployment Scope
            </span>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Our Investment Focus
            </h2>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400">
              Clear parameters governing capital allocation and fund mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusParameters.map((param, idx) => (
              <div
                key={param.label}
                className={`p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#121620] space-y-1.5 ${
                  idx === 2 ? "md:col-span-2" : ""
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
                  {param.label}
                </span>
                <span className="font-sans font-medium text-base sm:text-lg text-[#0A0A0A] dark:text-white block">
                  {param.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION FOOTER NAVIGATION */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/team"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Meet the Team</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>See the Portfolio</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
