"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(1);

  const trlStages = [
    {
      step: "01",
      name: "LAB",
      trl: "TRL 1–3",
      focus: "Fundamental Science",
      failurePoint: "Fails on IP assignability out of university, lack of repeatable prototypes, and academic papers with no path to commercialization.",
      role: "Academic grants (< ₹2 Cr) · Pre-venture",
      highlight: false,
    },
    {
      step: "02",
      name: "PROTOTYPE",
      trl: "TRL 4–5",
      focus: "Component Validation & Lab Testing",
      failurePoint: "The critical Valley of Death. Science is proven, but engineering reproducibility, variance, and pre-seed hardware budgets stall founders.",
      role: "✦ Y-Point Entry: ₹3–5 Cr first cheque",
      highlight: true,
    },
    {
      step: "03",
      name: "PRODUCT",
      trl: "TRL 6–7",
      focus: "Industrial Pilot & Qualification",
      failurePoint: "Surviving enterprise customer trials, mil-spec testing, supplier certification, and multi-quarter procurement cycles.",
      role: "✦ Y-Point Follow-On: ~40% fund reserve",
      highlight: true,
    },
    {
      step: "04",
      name: "SCALE",
      trl: "TRL 8–9",
      focus: "Commercial Manufacturing",
      failurePoint: "Working capital constraints and production line yields before growth venture capital enters.",
      role: "Growth VC & Series A/B (> ₹25 Cr)",
      highlight: false,
    },
    {
      step: "05",
      name: "INDUSTRY",
      trl: "Market",
      focus: "Sovereign & Global Scale",
      failurePoint: "Supply-chain distribution bottlenecks and channel competition.",
      role: "Enterprise & Strategic Procurement",
      highlight: false,
    },
  ];

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
    { label: "Initial Cheque Size", value: "Typically ₹3–5 crore, subject to opportunity and fund parameters" },
    { label: "Investment Themes", value: "Advanced computing, manufacturing, materials, biotechnology, climate technology, space and defence" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white overflow-hidden">
      {/* Subtle IIT Bombay Crest Watermark in Background */}
      <div 
        className="absolute -right-28 top-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px]"
        aria-hidden="true"
      >
        <Image
          src="/iitb/iitb-logo.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* SUBTLE BREADCRUMB HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              About Us
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              Institutional Foundation &amp; Philosophy
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            SINE · IIT BOMBAY · CATEGORY II AIF
          </div>
        </div>

        {/* HERO TITLE & INSTITUTIONAL HERITAGE ANCHOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 sm:mb-24">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Investing where science meets opportunity.
            </h1>
            <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
              Y-Point Venture Capital Fund was established to support early-stage deeptech ventures developing technology-led solutions to significant market challenges.
            </p>
            <p className="font-sans font-light text-base text-[#666666] dark:text-zinc-400 leading-relaxed max-w-3xl">
              Launched by SINE, IIT Bombay, the fund focuses on companies where scientific or engineering progress can form the foundation of a scalable business. We believe deeptech investing requires a considered understanding of both the technology and the market it seeks to serve.
            </p>
          </div>

          {/* Institutional Anchor Card */}
          <div className="lg:col-span-4">
            <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-md">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/iitb/campus-lawn.webp"
                  alt="IIT Bombay Academic & Incubation Heritage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  <div className="relative h-3.5 w-3.5 shrink-0">
                    <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-mono text-[9px] text-white tracking-wider font-semibold">
                    SINE · IIT BOMBAY
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="font-mono text-[10px] text-[#00E5A3] font-semibold">
                    ज्ञानं परमं ध्येयम्
                  </div>
                  <div className="font-sans font-medium text-xs text-white">
                    Foundational Heritage
                  </div>
                  <p className="hidden sm:block font-sans text-[11px] text-white/70 font-light leading-snug">
                    Over six decades of academic leadership, providing continuous technical deal flow and research depth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. OUR INVESTMENT PHILOSOPHY */}
        <div className="mb-24 space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Principles
            </span>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Our Investment Philosophy
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-[#666666] dark:text-zinc-400">
              Four fundamental commitments that govern how we evaluate science and partner with founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyPoints.map((item) => (
              <div
                key={item.num}
                className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0E0E0E] space-y-3 transition-all hover:border-[#0D7377]"
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

        {/* 2. THE SINE–IIT BOMBAY CONNECTION */}
        <div className="relative mb-24 p-8 sm:p-12 lg:p-16 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#07090e] overflow-hidden">
          
          {/* Subtle Logo Watermark in Background */}
          <div 
            className="absolute -right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[450px] h-[450px]"
            aria-hidden="true"
          >
            <Image
              src="/iitb/iitb-logo.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Text (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                The SINE–IIT Bombay Connection
              </span>
              <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                A research-rich environment. An investment mandate focused on the market.
              </h2>
              <div className="space-y-4 font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  SINE has supported technology entrepreneurship at IIT Bombay for more than two decades. Y-Point builds on this institutional foundation with a dedicated early-stage deeptech investment mandate.
                </p>
                <p>
                  Where relevant, and subject to availability and institutional processes, Y-Point seeks to help portfolio companies explore connections to expertise, research and the broader innovation ecosystem. The objective is to make the institutional connection meaningful to founders while being precise about the resources and support actually available.
                </p>
              </div>
            </div>

            {/* Right Column: Purposeful Architectural Visual Anchor (5 cols) */}
            <div className="lg:col-span-5">
              <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-md">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src="/iitb/crest-plaque.webp"
                    alt="IIT Bombay Historic Bronze Crest Plaque"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    <div className="relative h-4 w-4 shrink-0">
                      <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
                    </div>
                    <span className="font-mono text-[10px] text-white tracking-wider font-semibold">
                      SINE · RBTIC BUILDING
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                    <div className="font-mono text-[11px] text-teal-300 font-bold">
                      ज्ञानं परमं ध्येयम्
                    </div>
                    <h3 className="font-sans font-medium text-base text-white">
                      Knowledge is the Supreme Goal
                    </h3>
                    <p className="hidden sm:block font-sans text-xs text-white/75 leading-relaxed font-light">
                      Operating from the 5th floor of the RBTIC Building at IIT Bombay, bridging laboratory research and early-stage institutional venture capital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. TRL MATURITY ROADMAP (Interactive Ledger) */}
        <div className="mb-24 space-y-8">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Technology Readiness Levels
            </span>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              The TRL 1–9 Translation Spectrum
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-[#666666] dark:text-zinc-400">
              Where technology stops being a research result and has to become a scalable company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {trlStages.map((stage, idx) => {
              const isSelected = hoveredStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setHoveredStage(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "border-[#0D7377] bg-white dark:bg-[#121620] shadow-md ring-1 ring-[#0D7377]/30"
                      : "border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] hover:border-black/30 dark:hover:border-white/30"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#0D7377]">{stage.step}</span>
                      <span className="font-mono text-[10px] text-zinc-500 uppercase">{stage.trl}</span>
                    </div>
                    <div className="font-sans font-bold text-base text-[#0A0A0A] dark:text-white">
                      {stage.name}
                    </div>
                    <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3">
                      {stage.focus}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-[#0D7377] font-medium">
                    {stage.role}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. OUR INVESTMENT FOCUS (Summary Grid from Document) */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0D0D0D] space-y-8">
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
            {focusParameters.map((param) => (
              <div
                key={param.label}
                className="p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-[#121620] space-y-1.5"
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
