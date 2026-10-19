"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter, PieChart, Layers, Building2, ExternalLink } from "lucide-react";

interface PortfolioCompany {
  id: string;
  name: string;
  sector: string;
  sectorSlug: string;
  color: string;
  tagline: string;
  stage: "Pre-seed" | "Seed" | "Series A" | "Public (IPO)";
  tech: string;
  year: string;
  milestone: string;
}

export default function PortfolioSection() {
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [activeWheelIndex, setActiveWheelIndex] = useState<number | null>(null);

  const companies: PortfolioCompany[] = [
    {
      id: "ideaforge",
      name: "ideaForge",
      sector: "Space & Defence",
      sectorSlug: "space-defence",
      color: "#EA580C",
      tagline: "India's pioneer drone manufacturer & autonomous defense platforms.",
      stage: "Public (IPO)",
      tech: "Avionics, autonomous navigation & composite airframes",
      year: "SINE Alum",
      milestone: "Listed on NSE & BSE (₹3,000+ Cr valuation)",
      x: 94,
      y: 85,
    },
    {
      id: "immunoact",
      name: "ImmunoACT",
      sector: "Life Sciences",
      sectorSlug: "life-sciences",
      color: "#16A34A",
      tagline: "India's first approved indigenous CAR-T cell therapy (NexCAR19).",
      stage: "Series A",
      tech: "Chimeric antigen receptor T-cell bioengineering",
      year: "SINE Alum",
      milestone: "CDSCO Commercial Approval; 90% cheaper than US therapy",
      x: 82,
      y: 92,
    },
    {
      id: "sedemac",
      name: "Sedemac Mechatronics",
      sector: "Climate & Energy",
      sectorSlug: "climate-cleantech",
      color: "#CA8A04",
      tagline: "Sensorless motor control and powertrain intelligence for millions of vehicles.",
      stage: "Series A",
      tech: "Real-time engine control algorithms & power electronics",
      year: "SINE Alum",
      milestone: "Deployed in 10M+ commercial vehicles globally",
      x: 92,
      y: 78,
    },
    {
      id: "qnu-labs",
      name: "QNu Labs",
      sector: "AI & Computing",
      sectorSlug: "ai-advanced-computing",
      color: "#0D7377",
      tagline: "Hardware-accelerated quantum key distribution & quantum cryptography.",
      stage: "Series A",
      tech: "Single-photon optics & Quantum Random Number Generation",
      year: "2024",
      milestone: "Sovereign defence deployment & national telecom pilots",
      x: 75,
      y: 86,
    },
    {
      id: "peppermint",
      name: "Peppermint Robotics",
      sector: "Semicon & Mfg",
      sectorSlug: "advanced-manufacturing-semiconductor",
      color: "#0284C7",
      tagline: "Autonomous industrial floor-care & mobile warehouse logistics robots.",
      stage: "Seed",
      tech: "Proprietary multi-sensor SLAM & industrial autonomy",
      year: "2025",
      milestone: "Deployed across Fortune 500 manufacturing plants",
      x: 68,
      y: 62,
    },
    {
      id: "mumbaisemi",
      name: "MumbaiSemi",
      sector: "Semicon & Mfg",
      sectorSlug: "advanced-manufacturing-semiconductor",
      color: "#0284C7",
      tagline: "Domain-specific analog, RF, and mixed-signal silicon architecture.",
      stage: "Pre-seed",
      tech: "Sub-28nm RF CMOS design & high-frequency packaging",
      year: "2026",
      milestone: "First multi-project wafer (MPW) tape-out validated",
      x: 48,
      y: 90,
    },
    {
      id: "nanosafe",
      name: "Nanosafe Solutions",
      sector: "Materials",
      sectorSlug: "next-gen-materials",
      color: "#475569",
      tagline: "Active anti-microbial nanomaterials and industrial mineral coatings.",
      stage: "Seed",
      tech: "Engineered copper-doped nanomaterial compounding",
      year: "2024",
      milestone: "Commercial packaging & active defense material patents",
      x: 64,
      y: 54,
    },
    {
      id: "carboncraft",
      name: "CarbonCraft Design",
      sector: "Materials",
      sectorSlug: "next-gen-materials",
      color: "#475569",
      tagline: "Captured industrial emissions upcycled into carbon-negative tiles.",
      stage: "Seed",
      tech: "Carbon black waste pyrolysis processing & binder technology",
      year: "2025",
      milestone: "500,000+ sq ft architectural deployments across India",
      x: 72,
      y: 52,
    },
    {
      id: "babbelbots",
      name: "Babbelbots.ai",
      sector: "AI & Computing",
      sectorSlug: "ai-advanced-computing",
      color: "#0D7377",
      tagline: "Indic language speech models with low-latency edge inference.",
      stage: "Seed",
      tech: "Acoustic phoneme modeling & quantized neural network runtimes",
      year: "2025",
      milestone: "Powering voice automation for tier-1 Indian banks",
      x: 70,
      y: 65,
    },
  ];

  const sectorList = [
    "All",
    "AI & Computing",
    "Semicon & Mfg",
    "Materials",
    "Space & Defence",
    "Climate & Energy",
    "Life Sciences",
  ];

  const sectorWheelData = [
    { name: "AI & Robotics", count: "25%", color: "#0D7377", thesis: "Value migrates below the model layer into custom silicon and edge inference." },
    { name: "Semicon & Mfg", count: "20%", color: "#0284C7", thesis: "India wins manufacturing on automation and silicon, not labour cost." },
    { name: "Materials", count: "15%", color: "#475569", thesis: "Every hard energy and aerospace problem is a materials bottleneck." },
    { name: "Space & Defence", count: "15%", color: "#EA580C", thesis: "Sovereign procurement channels are finally commercialized." },
    { name: "Climate & Energy", count: "15%", color: "#CA8A04", thesis: "Decarbonising an expanding industrial grid requires unsubsidized unit economics." },
    { name: "Life Sciences", count: "10%", color: "#16A34A", thesis: "Clinical scale combined with low engineering costs builds global cost leadership." },
  ];

  const filteredCompanies =
    selectedSector === "All"
      ? companies
      : companies.filter((c) => c.sector === selectedSector);

  return (
    <section id="portfolio" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              02 — Portfolio
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              Track Record & Construction Logic
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            220+ VENTURES INCUBATED · SINE IIT BOMBAY LINEAGE
          </div>
        </div>

        {/* HERO TITLE */}
        <div className="max-w-4xl space-y-6 mb-16 sm:mb-20">
          <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            A concentrated portfolio of companies turning proven science into industry.
          </h2>
          <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
            Each company entered the portfolio because its core technology had cleared the lab and needed capital, customers, and company-building to reach the market.
          </p>
        </div>

        {/* 2. INFOGRAPHIC: INSTITUTIONAL TRACK RECORD & PRECEDENTS */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-20 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
                Infographic · SINE Incubation Heritage
              </span>
              <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
                Laboratory-to-Market Precedents
              </h3>
              <p className="font-sans font-light text-xs sm:text-sm text-[#666] dark:text-zinc-400">
                Category leaders incubated through SINE IIT Bombay that established India&apos;s deep technology translation playbook.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {sectorList.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedSector === sec
                      ? "bg-[#0D7377] text-white font-semibold shadow-sm"
                      : "bg-white dark:bg-black/40 text-[#666666] border border-[#E5E5E5] dark:border-white/10 hover:border-black/20"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Pioneer Category Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.map((co) => (
              <div
                key={co.id}
                className="p-5 sm:p-6 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D] flex flex-col justify-between space-y-4 hover:border-[#0D7377]/40 transition-all shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-mono text-[10px] text-[#0D7377] font-semibold tracking-wider block">
                        {co.sector}
                      </span>
                      <h4 className="font-display font-medium text-xl sm:text-2xl text-[#0A0A0A] dark:text-white">
                        {co.name}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-wider border border-teal-500/30 bg-teal-500/10 text-teal-800 dark:text-teal-300 shrink-0">
                      {co.stage}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F9F9F8] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 font-mono text-[11px] text-[#0D7377] font-semibold">
                    ★ {co.milestone}
                  </div>

                  <p className="font-sans text-xs text-[#666] dark:text-zinc-300 leading-relaxed">
                    {co.tech}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-1">
                  <div className="font-mono text-[9px] text-[#888] dark:text-zinc-500 uppercase tracking-widest">
                    {co.year} · SINE IIT BOMBAY
                  </div>
                  <div className="font-sans text-[11px] text-[#444] dark:text-zinc-400">
                    {co.tagline}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regulatory Notice Banner */}
          <div className="p-3.5 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 flex items-center gap-3 text-[11px] font-mono text-[#666] dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-[#0D7377] shrink-0" />
            <span>
              <strong>Regulatory Compliance:</strong> Precedent companies are drawn from SINE IIT Bombay&apos;s two-decade incubation lineage (220+ ventures) and illustrate deeptech translation benchmarks.
            </span>
          </div>

        </div>

        {/* 3. SECTOR BREAKDOWN (Sector Wheel / Radial Diagram) */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D]">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Infographic · Capital Allocation
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Sector Breakdown Wheel
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
              Radial diagram showing capital and portfolio diversification across our six core thesis sectors. No single sector will exceed roughly a fifth of the fund.
            </p>

            {activeWheelIndex !== null && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded border border-[#0D7377]/30 bg-[#0D7377]/5 dark:bg-[#0D7377]/10 space-y-1"
              >
                <div className="font-sans font-bold text-sm text-[#0D7377]">
                  {sectorWheelData[activeWheelIndex].name} ({sectorWheelData[activeWheelIndex].count})
                </div>
                <p className="font-sans text-xs text-[#0A0A0A] dark:text-zinc-300">
                  {sectorWheelData[activeWheelIndex].thesis}
                </p>
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-around gap-8">
            {/* SVG Donut / Wheel */}
            <div className="relative w-56 h-56 select-none shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {/* 6 Wedges */}
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0D7377" strokeWidth="18" strokeDasharray="25 75" strokeDashoffset="0" onMouseEnter={() => setActiveWheelIndex(0)} className="cursor-pointer hover:opacity-80 transition-opacity" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0284C7" strokeWidth="18" strokeDasharray="20 80" strokeDashoffset="-25" onMouseEnter={() => setActiveWheelIndex(1)} className="cursor-pointer hover:opacity-80 transition-opacity" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#475569" strokeWidth="18" strokeDasharray="15 85" strokeDashoffset="-45" onMouseEnter={() => setActiveWheelIndex(2)} className="cursor-pointer hover:opacity-80 transition-opacity" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#EA580C" strokeWidth="18" strokeDasharray="15 85" strokeDashoffset="-60" onMouseEnter={() => setActiveWheelIndex(3)} className="cursor-pointer hover:opacity-80 transition-opacity" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#CA8A04" strokeWidth="18" strokeDasharray="15 85" strokeDashoffset="-75" onMouseEnter={() => setActiveWheelIndex(4)} className="cursor-pointer hover:opacity-80 transition-opacity" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#16A34A" strokeWidth="18" strokeDasharray="10 90" strokeDashoffset="-90" onMouseEnter={() => setActiveWheelIndex(5)} className="cursor-pointer hover:opacity-80 transition-opacity" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-mono text-xl font-bold text-[#0A0A0A] dark:text-white">6</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#666666]">Sectors</span>
              </div>
            </div>

            {/* Wedge Legends */}
            <div className="space-y-2 text-xs font-sans">
              {sectorWheelData.map((item, idx) => (
                <div
                  key={item.name}
                  onMouseEnter={() => setActiveWheelIndex(idx)}
                  className={`flex items-center gap-3 p-1.5 rounded cursor-pointer transition-colors ${
                    activeWheelIndex === idx ? "bg-black/5 dark:bg-white/10 font-bold" : "text-[#666666] dark:text-zinc-400"
                  }`}
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="w-36 truncate">{item.name}</span>
                  <span className="font-mono text-[11px] text-[#0A0A0A] dark:text-white font-medium">{item.count}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* 4. COMPANY CARDS GRID (3-Column Layout) */}
        <div className="mb-24 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E5E5E5] dark:border-white/10 pb-4">
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Representative Portfolio Companies
            </h3>
            <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
              Showing {filteredCompanies.length} companies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((co) => (
              <div
                key={co.id}
                className="group p-6 rounded-lg border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0E0E0E] hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="h-7 w-7 rounded bg-[#F5F5F3] dark:bg-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#0A0A0A] dark:text-white">
                      {co.name.charAt(0)}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[#E5E5E5] dark:border-white/10 text-[#666666] dark:text-zinc-400">
                      {co.sector}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-light text-2xl text-[#0A0A0A] dark:text-white group-hover:text-[#0D7377] dark:group-hover:text-teal-400 transition-colors">
                      {co.name}
                    </h4>
                    <p className="font-sans font-light text-xs text-[#666666] dark:text-zinc-400 mt-2 leading-relaxed">
                      {co.tagline}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-black/5 dark:border-white/5 font-mono text-[11px]">
                    <div className="text-[#0A0A0A] dark:text-zinc-200">
                      <span className="text-[#666666] dark:text-zinc-500">Tech:</span> {co.tech}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-[#0D7377] font-semibold">{co.stage} · {co.year}</span>
                  <span className="text-[#666666] dark:text-zinc-400 truncate max-w-[140px]">{co.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. INFOGRAPHIC: PORTFOLIO CONSTRUCTION LOGIC */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/60 dark:bg-white/[0.02] mb-20 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Discipline & Framework
            </span>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Portfolio Construction Logic
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400">
              Concentration across multiple sectors, diversification across technology maturity stages, and acceptance of different commercialisation timelines within a single fund.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { label: "COMPANIES", detail: "25–30 Concentrated" },
              { label: "SECTORS", detail: "Max ~20% Per Sector" },
              { label: "MATURITY", detail: "Different TRL 4–7 Stages" },
              { label: "CAPITAL", detail: "Milestone-Linked Tranches" },
              { label: "TIMELINE", detail: "Different Return Horizons" },
            ].map((col, idx) => (
              <div key={col.label} className="p-4 rounded border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#111111] text-center space-y-1">
                <div className="font-mono text-xs font-bold text-[#0D7377]">{col.label}</div>
                <div className="font-sans font-light text-xs text-[#0A0A0A] dark:text-zinc-300">{col.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. INFOGRAPHIC: COMPANY LIFECYCLE (Timeline) */}
        <div className="mb-20 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Lifecycle Roadmap
            </span>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Entry and Support Timeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-3">
            {[
              { step: "RESEARCH", sub: "University", active: false },
              { step: "SPINOUT", sub: "SINE Support", active: true },
              { step: "SEED", sub: "Y-Point Entry", active: true },
              { step: "SERIES A", sub: "Follow-On / Co-Invest", active: true },
              { step: "SCALE", sub: "Growth Capital", active: false },
              { step: "EXIT", sub: "Strategic / IPO", active: false },
            ].map((node) => (
              <div
                key={node.step}
                className={`p-4 rounded border text-center transition-all ${
                  node.active
                    ? "bg-[#0D7377]/10 dark:bg-[#0D7377]/20 border-[#0D7377] text-[#0A0A0A] dark:text-white"
                    : "bg-[#F5F5F3] dark:bg-white/5 border-transparent text-[#666666] dark:text-zinc-400"
                }`}
              >
                <div className="font-mono text-xs font-bold">{node.step}</div>
                <div className="text-[11px] font-sans font-light mt-1">{node.sub}</div>
                {node.active && (
                  <div className="mt-2 text-[9px] font-mono uppercase tracking-wider text-[#0D7377] font-semibold">
                    Y-Point Engagement
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#focus"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Explore Our Investment Theses</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#apply"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Apply for Funding</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
