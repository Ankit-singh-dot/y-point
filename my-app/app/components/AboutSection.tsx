"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Microscope, Database, Users, Building, Compass, Sparkles, ChevronRight, Layers } from "lucide-react";

export default function AboutSection() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(1); // default to TRL 4-5
  const [activeRing, setActiveRing] = useState<string>("sine");

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

  const ecosystemRings = {
    iitb: {
      title: "IIT Bombay",
      subtitle: "Institutional Genesis & Intellectual Bedrock",
      metrics: "650+ Research Groups · 17 Departments · 3,000+ Doctoral Scholars · 100+ Patents/Yr",
      description: "Direct relationship with the Dean R&D office. Formalized equity-for-IP frameworks ensure academic spinouts enter the venture arena with clean, unencumbered intellectual property and deep faculty mentorship.",
    },
    sine: {
      title: "SINE Incubator",
      subtitle: "India's Premier Technology Business Incubator",
      metrics: "220+ Deeptech Ventures · ₹3,500+ Cr Cumulative Valuation · 20+ Years Track Record",
      description: "Non-dilutive grant ladders (BIRAC BIG, MeitY TIDE, DST, SINE EIR), specialized cleanrooms, wet labs, and prototyping infrastructure that de-risks science from TRL 3 to 7 before equity capital is deployed.",
    },
    ypoint: {
      title: "Y-Point Ventures",
      subtitle: "The Venture Capital Arm of SINE IIT Bombay",
      metrics: "₹250 Cr Fund Corpus · TRL 4–7 Entry · ₹3–5 Cr Initial Cheque · ~40% Follow-On",
      description: "Category II SEBI Alternative Investment Fund. Translating proven laboratory inventions into commercial category leaders. Diligence that reads test characterization reports rather than consumer pitch decks.",
    },
    network: {
      title: "Capital + Commercialisation + Network",
      subtitle: "Syndication & Corporate Qualification Engine",
      metrics: "25+ Institutional Industry Partners · PSUs & Defence Corridors · Global Deep Tech Co-Investors",
      description: "Opening closed doors for founder pilots with Indian enterprise, Ministry of Defence (iDEX), ISRO, and Fortune 500 manufacturing plants to compress the 18-month qualification gap.",
    },
    market: {
      title: "Global & Indian Markets",
      subtitle: "Defensible Industrial Commercialisation",
      metrics: "Public Market Listings (IdeaForge) · CDSCO Approvals (ImmunoACT) · Millions of Powertrains (Sedemac)",
      description: "Creating companies where the defensibility is physics, silicon, or chemistry — not marketing spend. Built for sovereign self-reliance and global industrial competitiveness.",
    },
  };

  const pillars = [
    {
      id: "01",
      title: "Technical Depth",
      body: "Ability to read a test report, assess a TRL claim, and validate characterisation data before any commercial traction exists.",
    },
    {
      id: "02",
      title: "Ecosystem Access",
      body: "Structural position inside IIT Bombay / SINE. Access to 650+ research groups, specialised labs, and faculty networks.",
    },
    {
      id: "03",
      title: "Patient Capital",
      body: "Pre-seed and seed investment with 40% follow-on reserve. Milestone-linked deployment across multi-year commercialisation cycles.",
    },
    {
      id: "04",
      title: "Company Building",
      body: "Hands-on support for first customer acquisition, hiring technical teams, regulatory navigation, and go-to-market strategy.",
    },
    {
      id: "05",
      title: "Industry Network",
      body: "IIT Bombay's 65,000+ alumni, 25+ industry partners, public sector procurement channels, and co-investor relationships.",
    },
    {
      id: "06",
      title: "Long-Term View",
      body: "Built for the timelines that deeptech demands. Supporting companies through qualification cycles, not just fundraising cycles.",
    },
  ];

  const evaluationChain = [
    { stage: "SCIENCE", question: "Does it work?", status: "Must be cleared before entry" },
    { stage: "ENGINEERING", question: "Can it be built?", status: "Verified in technical diligence" },
    { stage: "PRODUCT", question: "Will anyone buy it?", status: "Y-Point active pilot acceleration" },
    { stage: "MARKET", question: "How large?", status: "Commercial validation" },
    { stage: "MOAT", question: "Why durable?", status: "Process, patent & workflow lock-in" },
  ];

  const fundFacts = [
    { parameter: "Vehicle", detail: "SEBI Registered Category II AIF (IN/AIF2/25-26/1937)" },
    { parameter: "Anchor & Sponsor", detail: "SINE, IIT Bombay (SINE Innoventure Private Trust)" },
    { parameter: "Stage", detail: "Pre-seed & Seed" },
    { parameter: "Sector Focus", detail: "Deep technology only (zero consumer internet)" },
    { parameter: "Entry Point", detail: "TRL 4–7 (Proof-of-concept validated)" },
    { parameter: "Initial Ticket", detail: "INR 3–5 Crore" },
    { parameter: "Follow-On Reserve", detail: "~40% of investable corpus" },
    { parameter: "Portfolio Construction", detail: "Concentrated (25–30 companies; no sector >20%)" },
  ];

  return (
    <section id="about" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10">
      
      {/* 1. SECTION IDENTIFIER & SUBTLE TICKER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              01 — About Us
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              Institutional Foundation & Philosophy
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            ENTRY: TRL 4–7 · PRE-SEED & SEED · SINE IIT BOMBAY · CATEGORY II AIF · DEEP TECH ONLY
          </div>
        </div>

        {/* HERO TITLE & SUPPORTING COPY */}
        <div className="max-w-4xl space-y-6 mb-20 sm:mb-28">
          <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            Backing the technologies that move from laboratory to industry.
          </h2>
          <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
            Y-Point is the venture capital arm of SINE, IIT Bombay. We write the first institutional cheque into deep technology ventures at the point where the science works but the company does not yet exist.
          </p>
        </div>

        {/* 2. THE MACRO THESIS: WHY NOW & THE 19-MONTH PROBLEM (Section 7.4 of Strategy) */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0A0D12] mb-24 space-y-10 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0D7377]/30 dark:border-[#00E5A3]/30 bg-[#0D7377]/5 dark:bg-[#00E5A3]/5 text-[#0D7377] dark:text-[#00E5A3] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold">
              The Macro Thesis · SINE IIT Bombay
            </div>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
              &ldquo;India produces world-class research and world-class venture capital. Very little connects the two.&rdquo;
            </h3>
            <div className="space-y-4 font-sans text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                The country files patents, publishes papers, and trains engineers at a scale few nations match. It also has a venture industry that has become genuinely expert at underwriting consumer adoption and software margins.
              </p>
              <p>
                Neither capability transfers to a team with a qualified prototype, a five-year path to meaningful revenue, and a capital requirement that front-loads before the first customer exists.
              </p>
            </div>
          </div>

          {/* Comparative Deeptech Timeline Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-black/5 dark:border-white/5">
            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 space-y-2">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-red-500">19 Mos</div>
              <div className="font-sans font-bold text-xs text-[#0A0A0A] dark:text-white">Deeptech Founding to Seed</div>
              <p className="font-sans text-xs text-zinc-500">Average timeline in India due to lack of technical diligence capital.</p>
            </div>

            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 space-y-2">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-zinc-400">10 Mos</div>
              <div className="font-sans font-bold text-xs text-[#0A0A0A] dark:text-white">Consumer / Software Seed</div>
              <p className="font-sans text-xs text-zinc-500">Shorter validation cycles with standard software metrics.</p>
            </div>

            <div className="p-6 rounded-xl border border-[#0D7377]/40 dark:border-[#00E5A3]/40 bg-[#0D7377]/5 dark:bg-[#00E5A3]/5 space-y-2">
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#0D7377] dark:text-[#00E5A3]">TRL 4–7</div>
              <div className="font-sans font-bold text-xs text-[#0A0A0A] dark:text-white">Y-Point Intervention Window</div>
              <p className="font-sans text-xs text-zinc-600 dark:text-zinc-300">Writing the first institutional cheque when the science is proven.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0D7377] dark:bg-[#00E5A3]" />
            <span>Data Source: Tracxn venture datasets &amp; SINE internal research analysis.</span>
          </div>
        </div>

        {/* 3. THE IIT BOMBAY / SINE / Y-POINT ECOSYSTEM (Concentric Ecosystem Map) */}
        <div className="mb-24 space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Infographic · Structural Position
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              The IIT Bombay / SINE / Y-Point Ecosystem Map
            </h3>
            <p className="font-sans font-light text-sm sm:text-base text-[#666666] dark:text-zinc-400">
              Y-Point’s structural integration with IIT Bombay creates continuous technical deal flow, faculty diligence networks, and pilot qualification that no standalone fund can replicate.
            </p>
          </div>

          {/* Interactive Concentric Diagram + Sidebar Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D]">
            
            {/* SVG Concentric Rings with Interactive Satellites */}
            <div className="lg:col-span-7 flex items-center justify-center relative">
              <svg viewBox="0 0 500 500" className="w-full max-w-[440px] h-auto select-none">
                {/* Outer Ring: Global Markets */}
                <circle
                  cx="250"
                  cy="250"
                  r="230"
                  className={`transition-all duration-300 cursor-pointer ${
                    activeRing === "market"
                      ? "fill-[#0D7377]/10 stroke-[#0D7377] stroke-2"
                      : "fill-transparent stroke-[#E5E5E5] dark:stroke-white/10 stroke-1 hover:stroke-[#0D7377]/50"
                  }`}
                  onClick={() => setActiveRing("market")}
                />
                
                {/* 4th Ring: Capital & Commercialisation */}
                <circle
                  cx="250"
                  cy="250"
                  r="180"
                  className={`transition-all duration-300 cursor-pointer ${
                    activeRing === "network"
                      ? "fill-[#0D7377]/15 stroke-[#0D7377] stroke-2"
                      : "fill-transparent stroke-[#E5E5E5] dark:stroke-white/15 stroke-1 hover:stroke-[#0D7377]/60"
                  }`}
                  onClick={() => setActiveRing("network")}
                />

                {/* 3rd Ring: Y-Point Ventures */}
                <circle
                  cx="250"
                  cy="250"
                  r="130"
                  className={`transition-all duration-300 cursor-pointer ${
                    activeRing === "ypoint"
                      ? "fill-[#0D7377]/25 stroke-[#0D7377] stroke-[2.5]"
                      : "fill-black/[0.02] dark:fill-white/[0.02] stroke-[#0D7377]/40 stroke-1 hover:stroke-[#0D7377]"
                  }`}
                  onClick={() => setActiveRing("ypoint")}
                />

                {/* 2nd Ring: SINE Incubator */}
                <circle
                  cx="250"
                  cy="250"
                  r="85"
                  className={`transition-all duration-300 cursor-pointer ${
                    activeRing === "sine"
                      ? "fill-[#0D7377]/35 stroke-[#0D7377] stroke-[2.5]"
                      : "fill-black/[0.04] dark:fill-white/[0.04] stroke-[#0D7377]/60 stroke-1 hover:stroke-[#0D7377]"
                  }`}
                  onClick={() => setActiveRing("sine")}
                />

                {/* Center Core: IIT Bombay */}
                <circle
                  cx="250"
                  cy="250"
                  r="45"
                  className={`transition-all duration-300 cursor-pointer ${
                    activeRing === "iitb"
                      ? "fill-[#0D7377] stroke-black dark:stroke-white stroke-2"
                      : "fill-[#0D7377]/80 stroke-white stroke-1 hover:fill-[#0D7377]"
                  }`}
                  onClick={() => setActiveRing("iitb")}
                />
                <text x="250" y="254" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
                  IIT BOMBAY
                </text>

                {/* Ring Labels */}
                <text x="250" y="190" textAnchor="middle" fill={activeRing === "sine" ? "#0D7377" : "#888"} fontSize="9" fontFamily="sans-serif" fontWeight="600">
                  SINE INCUBATOR
                </text>
                <text x="250" y="145" textAnchor="middle" fill={activeRing === "ypoint" ? "#0D7377" : "#888"} fontSize="9" fontFamily="sans-serif" fontWeight="600">
                  Y-POINT VENTURES
                </text>
                <text x="250" y="95" textAnchor="middle" fill={activeRing === "network" ? "#0D7377" : "#888"} fontSize="9" fontFamily="sans-serif" fontWeight="500">
                  CAPITAL + COMMERCIALISATION
                </text>
                <text x="250" y="45" textAnchor="middle" fill={activeRing === "market" ? "#0D7377" : "#888"} fontSize="9" fontFamily="sans-serif" fontWeight="500">
                  GLOBAL & INDIAN MARKETS
                </text>

                {/* Satellite Nodes with Dashed Lines */}
                <line x1="250" y1="20" x2="250" y2="45" stroke="#0D7377" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="45" y1="250" x2="20" y2="250" stroke="#0D7377" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="455" y1="250" x2="480" y2="250" stroke="#0D7377" strokeWidth="1" strokeDasharray="2,2" />
                
                {/* Node Pills */}
                <g className="cursor-pointer" onClick={() => setActiveRing("iitb")}>
                  <rect x="15" y="105" width="75" height="22" rx="4" fill="#F5F5F3" stroke="#DDD" />
                  <text x="52" y="119" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">RESEARCHERS</text>
                </g>
                <g className="cursor-pointer" onClick={() => setActiveRing("iitb")}>
                  <rect x="410" y="105" width="75" height="22" rx="4" fill="#F5F5F3" stroke="#DDD" />
                  <text x="447" y="119" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">PROFESSORS</text>
                </g>
                <g className="cursor-pointer" onClick={() => setActiveRing("network")}>
                  <rect x="15" y="375" width="75" height="22" rx="4" fill="#F5F5F3" stroke="#DDD" />
                  <text x="52" y="389" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">CORPORATES</text>
                </g>
                <g className="cursor-pointer" onClick={() => setActiveRing("network")}>
                  <rect x="410" y="375" width="75" height="22" rx="4" fill="#F5F5F3" stroke="#DDD" />
                  <text x="447" y="389" textAnchor="middle" fontSize="8" fill="#333" fontWeight="bold">INVESTORS</text>
                </g>
                <g className="cursor-pointer" onClick={() => setActiveRing("sine")}>
                  <rect x="210" y="465" width="80" height="22" rx="4" fill="#0D7377" />
                  <text x="250" y="479" textAnchor="middle" fontSize="8" fill="#FFF" fontWeight="bold">STARTUPS (SINE)</text>
                </g>
              </svg>
            </div>

            {/* Ring Detail Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap gap-2">
                {Object.keys(ecosystemRings).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveRing(key)}
                    className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-colors ${
                      activeRing === key
                        ? "bg-[#0D7377] text-white font-semibold"
                        : "bg-[#F5F5F3] dark:bg-white/5 text-[#666666] hover:bg-black/10 dark:hover:bg-white/10"
                    }`}
                  >
                    {ecosystemRings[key as keyof typeof ecosystemRings].title}
                  </button>
                ))}
              </div>

              <div className="p-6 rounded-lg border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.03] space-y-4">
                <div className="space-y-1">
                  <h4 className="font-display font-light text-2xl text-[#0A0A0A] dark:text-white">
                    {ecosystemRings[activeRing as keyof typeof ecosystemRings].title}
                  </h4>
                  <p className="font-mono text-xs text-[#0D7377] font-medium">
                    {ecosystemRings[activeRing as keyof typeof ecosystemRings].subtitle}
                  </p>
                </div>

                <div className="p-2.5 rounded bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 font-mono text-[11px] text-[#0A0A0A] dark:text-zinc-300">
                  {ecosystemRings[activeRing as keyof typeof ecosystemRings].metrics}
                </div>

                <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
                  {ecosystemRings[activeRing as keyof typeof ecosystemRings].description}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. WHY US — SIX PILLARS (2x3 Visual Grid) */}
        <div className="mb-24 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              The Y-Point Edge
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Why Us — Six Pillars of Differentiation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group p-8 rounded-lg border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0E0E0E] hover:border-[#0D7377] dark:hover:border-[#0D7377] transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#0D7377] font-bold">PILLAR {pillar.id}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0D7377] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-sans font-bold text-lg text-[#0A0A0A] dark:text-white">
                  {pillar.title}
                </h4>
                <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. INVESTMENT PHILOSOPHY & THE EVALUATION CHAIN */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/60 dark:bg-white/[0.02] mb-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Investment Philosophy
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
              &ldquo;We do not bet on science. We bet on the translation of proven science into defensible business.&rdquo;
            </h3>
            <p className="font-sans font-light text-sm sm:text-base text-[#666666] dark:text-zinc-400">
              Each stage represents a fundamental gate the fund answers during diligence. The company must have cleared the SCIENCE gate and show a credible ENGINEERING path before Y-Point invests.
            </p>
          </div>

          {/* Evaluation Chain Visual */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#666666] dark:text-zinc-400">
              Infographic · The Evaluation Chain
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {evaluationChain.map((item, idx) => (
                <div
                  key={item.stage}
                  className="p-5 rounded border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#111111] space-y-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0D7377]">GATE 0{idx + 1}</span>
                    {idx < 2 ? (
                      <span className="text-[9px] font-mono uppercase bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded text-[#0A0A0A] dark:text-white font-semibold">Pre-Req</span>
                    ) : (
                      <span className="text-[9px] font-mono uppercase bg-[#0D7377]/15 text-[#0D7377] px-1.5 py-0.5 rounded font-semibold">Fund Focus</span>
                    )}
                  </div>
                  <div className="font-sans font-bold text-base text-[#0A0A0A] dark:text-white">
                    {item.stage}
                  </div>
                  <div className="font-sans italic text-xs text-[#0D7377] dark:text-teal-400">
                    &ldquo;{item.question}&rdquo;
                  </div>
                  <p className="font-mono text-[10px] text-[#666666] dark:text-zinc-400 pt-2 border-t border-black/5 dark:border-white/5">
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. FUND STRUCTURE (Data Table) */}
        <div className="mb-20 space-y-8">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Institutional Governance
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Fund at a Glance
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400">
              Only verified fund-level parameters. Institutional investors expect precision, not decoration.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3] dark:bg-white/5 text-xs font-mono uppercase tracking-wider text-[#666666] dark:text-zinc-400">
                  <th className="py-3.5 px-6 font-semibold w-1/3">Parameter</th>
                  <th className="py-3.5 px-6 font-semibold">Verified Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5] dark:divide-white/5 font-sans text-sm">
                {fundFacts.map((row) => (
                  <tr key={row.parameter} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#0A0A0A] dark:text-white font-mono text-xs uppercase tracking-wide">
                      {row.parameter}
                    </td>
                    <td className="py-4 px-6 text-[#666666] dark:text-zinc-300 font-light">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#team"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Meet the Team</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>See the Portfolio</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
