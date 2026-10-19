"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Layers,
  ChevronRight,
  ExternalLink,
  Play,
  CheckCircle2,
  Lock,
  Sparkles
} from "lucide-react";
import IITBCrest from "./IITBCrest";
import {
  IITBCrestIcon,
  SineHeritageIcon,
  SiliconWaferIcon,
  AdvancedManufacturingIcon,
  MaterialsLatticeIcon,
  SpaceDefenceIcon,
  CleanTechEnergyIcon,
  LifeSciencesIcon,
} from "./IITBIcons";

export default function HomeOverview() {
  const [activeRing, setActiveRing] = useState<string>("ypoint");
  const [activeSectorId, setActiveSectorId] = useState<string>("ai");
  const [portfolioCategory, setPortfolioCategory] = useState<string>("All");

  // Verified Proof Metrics Strip (Section 7.3 of Strategy Specification)
  const proofMetrics = [
    { value: "₹250 Cr", label: "Target Fund Size", detail: "SEBI Registered Cat II AIF", highlight: false },
    { value: "25–30", label: "Portfolio Companies", detail: "Concentrated High-Conviction", highlight: false },
    { value: "₹3–5 Cr", label: "Initial Cheque", detail: "Pre-Seed & Seed Entry", highlight: true },
    { value: "TRL 4–7", label: "Translation Window", detail: "Post-Lab · Pre-Commercial", highlight: true },
    { value: "532", label: "Startups Backed", detail: "SINE Incubator Since 2004", highlight: false },
    { value: "₹3,500+ Cr", label: "Incubated Valuation", detail: "Two Decades Track Record", highlight: false },
  ];

  // Concentric Institutional Ecosystem Layers (Section 7.4)
  const ecosystemLayers = [
    {
      id: "iitb",
      tier: "Core Genesis Tier",
      name: "IIT Bombay",
      role: "Intellectual Genesis & Deep Laboratory Infrastructure",
      stats: "650+ Research Groups · 17 Departments · 100+ Patents/Yr · Estd. 1958",
      motto: "ज्ञानं परमं बलम् (Knowledge is Supreme Strength)",
      desc: "Direct institutional linkage with the Dean R&D office. Formalized equity-for-IP frameworks ensure academic spinouts enter the venture pipeline with clean, unencumbered intellectual property and access to national research centres.",
      color: "border-teal-500/40 bg-teal-500/5",
    },
    {
      id: "sine",
      tier: "De-Risking Tier",
      name: "SINE Incubator",
      role: "Prototyping & Non-Dilutive Grant Continuum",
      stats: "220+ Ventures De-risked · ₹3,500+ Cr Cumulative Valuation · Founded 2004",
      motto: "India's Premier Deep Tech Business Incubator",
      desc: "Twenty years of non-dilutive grant ladders (BIRAC BIG, MeitY TIDE, DST NIDHI, SINE EIR), specialized cleanrooms, wet labs, and testing benches that de-risk science before venture equity is deployed.",
      color: "border-teal-500/50 bg-teal-500/10",
    },
    {
      id: "ypoint",
      tier: "Venture Tier",
      name: "Y-Point Ventures",
      role: "Translational Capital & Cheque Writing",
      stats: "₹250 Cr Fund Corpus · TRL 4–7 Focus · ₹3–5 Cr First Cheque · ~40% Reserve",
      motto: "SEBI Registered Category II AIF (IN/AIF2/25-26/1937)",
      desc: "Category II SEBI Alternative Investment Fund. Translating proven laboratory inventions into commercial category leaders. Diligence that reads test reports rather than consumer marketing metrics.",
      color: "border-[#00E5A3] bg-[#00E5A3]/10",
    },
    {
      id: "network",
      tier: "Qualification Tier",
      name: "Pilot & Sovereign Network",
      role: "18-Month Qualification Compressor",
      stats: "25+ Institutional Partners · Ministry of Defence (iDEX) · ISRO Corridors",
      motto: "Sovereign & Commercial Customer Pipeline",
      desc: "Opening closed doors for founder pilots with Indian enterprise, Ministry of Defence (iDEX), ISRO, and Fortune 500 manufacturing plants to compress brutal 18-month commercial adoption cycles.",
      color: "border-teal-500/40 bg-teal-500/5",
    },
    {
      id: "market",
      tier: "Scale Tier",
      name: "Global Category Scale",
      role: "Defensible Industrial Commercialisation",
      stats: "Public IPOs (ideaForge) · CDSCO Approvals (ImmunoACT) · 10M+ Engines (Sedemac)",
      motto: "Deep Defensibility: Physics, Silicon, Chemistry",
      desc: "Building companies where defensibility is physics, silicon, or chemistry — not marketing burn. Built for sovereign self-reliance and global competitiveness.",
      color: "border-teal-500/30 bg-teal-500/5",
    },
  ];

  // Six Focus Sectors with Hand-Crafted SVGs & Strategy One-Line Theses
  const sectors = [
    {
      id: "ai",
      num: "1",
      name: "AI & Advanced Computing",
      icon: SiliconWaferIcon,
      quote: "Models are commoditising. The durable value is moving down the stack.",
      whyNow: "As foundation model APIs converge to near-zero margins, sovereign advantage belongs to domain-specific silicon, photonics interconnects, and physical AI systems that interact with hardware.",
      image: "/sectors/ai-computing.jpg",
      chain: [
        { label: "Algorithms", isFocus: false },
        { label: "Domain Silicon", isFocus: true },
        { label: "Optical Interconnects", isFocus: true },
        { label: "Enterprise Scale", isFocus: false },
      ],
      lookFor: "Custom silicon architectures, edge neural inference engines, optical computing benches.",
      avoid: "Thin wrapper apps around third-party LLM APIs with zero physical IP defensibility.",
    },
    {
      id: "mfg",
      num: "2",
      name: "Advanced Mfg & Semiconductor",
      icon: AdvancedManufacturingIcon,
      quote: "India will not win manufacturing on labour cost. It will win on automation and on silicon.",
      whyNow: "Global supply chain realignments demand automated yield verification, precision machine tool CNC control, and domestic fabless semiconductor IP with taped-out silicon precedents.",
      image: "/sectors/semiconductor.jpg",
      chain: [
        { label: "Lab Synthesis", isFocus: false },
        { label: "MPW Tape-Out", isFocus: true },
        { label: "Precision Metrology", isFocus: true },
        { label: "Volume Foundry", isFocus: false },
      ],
      lookFor: "Sub-28nm RF CMOS IP, automated industrial robotics with proprietary SLAM, precision laser metrology.",
      avoid: "Contract assembly businesses without proprietary automation or tooling IP.",
    },
    {
      id: "materials",
      num: "3",
      name: "Next Gen Materials",
      icon: MaterialsLatticeIcon,
      quote: "Every hard problem in energy, space and electronics is a materials problem wearing a disguise.",
      whyNow: "Thermal limits, battery densities, and aerospace weight envelopes cannot advance through software alone. Novel polymers, synthetic alloys, and 2D lattices unlock systemic breakthroughs.",
      image: "/sectors/advanced-manufacturing.jpg",
      chain: [
        { label: "Crystal Modeling", isFocus: false },
        { label: "Pilot Synthesis", isFocus: true },
        { label: "Qualification Testing", isFocus: true },
        { label: "Industrial Supply", isFocus: false },
      ],
      lookFor: "Engineered nanocomposites, sovereign active packaging coatings, solid-state electrolytes.",
      avoid: "Bulk commodity trading or formulations with no patentable synthesis moat.",
    },
    {
      id: "space",
      num: "4",
      name: "Space & Defence",
      icon: SpaceDefenceIcon,
      quote: "Sovereign capability became a commercial market, and the procurement door is finally open.",
      whyNow: "Initiatives like iDEX, DRDO procurement reforms, and IN-SPACe deregulation have turned sovereign national security requirements into predictable commercial contracts for deeptech suppliers.",
      image: "/sectors/space-defence.jpg",
      chain: [
        { label: "Lab PoC", isFocus: false },
        { label: "Mil-Spec Testing", isFocus: true },
        { label: "Flight Heritage", isFocus: true },
        { label: "Defence Procurement", isFocus: false },
      ],
      lookFor: "Proprietary telemetry, composite airframes, high-altitude optical sensors, quantum encryption.",
      avoid: "Import-assembly drones using off-the-shelf foreign autopilots with zero sovereign IP.",
    },
    {
      id: "climate",
      num: "5",
      name: "Climate & CleanTech",
      icon: CleanTechEnergyIcon,
      quote: "Decarbonising an industrialising economy is a different problem from decarbonising a rich one.",
      whyNow: "India cannot simply subsidize consumer EV luxuries; it requires radical thermal efficiency, heavy industrial motor retrofits, and high-temperature waste-heat capture engineered for tropical grids.",
      image: "/sectors/climate-energy.jpg",
      chain: [
        { label: "Electrochem Bench", isFocus: false },
        { label: "Pilot Cell Stacks", isFocus: true },
        { label: "Grid Qualification", isFocus: true },
        { label: "Gigawatt Deployment", isFocus: false },
      ],
      lookFor: "Axial flux motors, sensorless motor control algorithms, non-lithium energy storage pilots.",
      avoid: "Carbon accounting software platforms with no physical industrial hardware or chemistry.",
    },
    {
      id: "life",
      num: "6",
      name: "Life Sciences",
      icon: LifeSciencesIcon,
      quote: "Indian clinical scale and Indian engineering cost is an advantage nobody else can assemble.",
      whyNow: "Cell and gene therapies designed in the West cost $400k+ per patient. By combining indigenous bioprocess engineering with Indian clinical volume, cures can be commercialized at 1/10th global cost.",
      image: "/sectors/life-sciences.jpg",
      chain: [
        { label: "Vector Engineering", isFocus: false },
        { label: "Phase 1/2 Clinical Trials", isFocus: true },
        { label: "CDSCO Approval", isFocus: true },
        { label: "Global Distribution", isFocus: false },
      ],
      lookFor: "Indigenous CAR-T bioengineering, novel vector delivery platforms, target discovery enzymes.",
      avoid: "Telemedicine portals, digital health aggregators without proprietary wet-lab platforms.",
    },
  ];

  // Pioneer Track Record (SINE Lineage Precedents)
  const pioneerCompanies = [
    {
      id: "ideaforge",
      name: "ideaForge",
      status: "PUBLIC (IPO) · NSE & BSE LISTED",
      statusBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      sector: "Space & Defence",
      category: "Public & Scale",
      origin: "IIT Bombay Student Lab ➔ SINE Incubation",
      metric: "₹3,000+ Cr Market Cap",
      tech: "Avionics, autonomous navigation & military-grade composite airframes.",
      impact: "India's #1 defence drone manufacturer with 50%+ domestic military UAV market share.",
    },
    {
      id: "immunoact",
      name: "ImmunoACT",
      status: "CDSCO COMMERCIAL APPROVAL",
      statusBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      sector: "Life Sciences",
      category: "Life Sciences",
      origin: "IIT Bombay Bioengineering Lab ➔ SINE Incubation",
      metric: "90% Lower Cost than US Therapy",
      tech: "Chimeric antigen receptor T-cell bioengineering (NexCAR19).",
      impact: "India's first approved indigenous gene therapy for relapsed B-cell lymphoma and leukaemia.",
    },
    {
      id: "sedemac",
      name: "Sedemac Mechatronics",
      status: "10M+ POWERTRAINS GLOBALLY",
      statusBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      sector: "Climate & Energy",
      category: "Industrial & CleanTech",
      origin: "IIT Bombay Mechanical Eng. ➔ SINE Incubation",
      metric: "10 Million+ Commercial Vehicles",
      tech: "Sensorless motor control algorithms & high-efficiency power electronics.",
      impact: "Controls engine timing and electric drive for major global 2-wheeler and commercial fleets.",
    },
    {
      id: "qnu-labs",
      name: "QNu Labs",
      status: "SOVEREIGN DEFENCE QUALIFIED",
      statusBadge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
      sector: "AI & Computing",
      category: "Silicon & Computing",
      origin: "Quantum Photonics Lab ➔ Deeptech Incubation",
      metric: "Sovereign Defence Deployment",
      tech: "Single-photon optics & Quantum Key Distribution (QKD) hardware.",
      impact: "Securing national defense telecommunications with quantum-safe physical encryption.",
    },
    {
      id: "atomberg",
      name: "Atomberg Technologies",
      status: "BLDC MARKET LEADER",
      statusBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      sector: "Climate & CleanTech",
      category: "Industrial & CleanTech",
      origin: "IIT Bombay Engineering Spinout ➔ SINE Incubation",
      metric: "65% Energy Demand Reduction",
      tech: "Proprietary brushless DC motor drive algorithms and microcontrollers.",
      impact: "Pioneered energy-efficient motor appliances across Indian consumer and industrial sectors.",
    },
    {
      id: "peppermint",
      name: "Peppermint Robotics",
      status: "FORTUNE 500 DEPLOYMENTS",
      statusBadge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
      sector: "Advanced Mfg",
      category: "Industrial & CleanTech",
      origin: "Autonomous Robotics Lab ➔ SINE Incubation",
      metric: "Global Factory Deployments",
      tech: "Multi-sensor industrial SLAM, spatial lidar & autonomous robotics.",
      impact: "Operating inside major pharmaceutical and automotive assembly plants.",
    },
  ];

  const activeSector = sectors.find((s) => s.id === activeSectorId) || sectors[0];
  const activeLayer = ecosystemLayers.find((l) => l.id === activeRing) || ecosystemLayers[2];

  return (
    <div className="relative text-[#0A0A0A] dark:text-[#F5F5F3] overflow-hidden">
      
      {/* Top Precision Institutional Coordinates Strip */}
      <div className="relative z-10 border-b border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8]/90 dark:bg-black/60 backdrop-blur-md px-4 sm:px-8 lg:px-12 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#666666] dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-[#0D7377] dark:text-[#00E5A3] font-semibold tracking-wider">
              <span className="h-2 w-2 rounded-full bg-[#0D7377] dark:bg-[#00E5A3] animate-pulse" />
              POWAI, MUMBAI [19.1334° N, 72.9133° E]
            </span>
            <span className="opacity-30">/</span>
            <span className="tracking-wide">IIT BOMBAY · SINE VENTURE CAPITAL ARM</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500">SEBI CAT II AIF: IN/AIF2/25-26/1937</span>
            <span className="opacity-30">/</span>
            <span className="text-[#0D7377] dark:text-[#00E5A3] font-semibold">TARGET CORPUS: ₹250 CR</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 01: POSITIONING STATEMENT & 6-FIGURE VERIFIED PROOF STRIP
          (Directly from Section 7.2 & 7.3 of Redesign Strategy - Zero Clunky Wireframe)
         ========================================================================= */}
      <section className="relative z-10 py-16 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#05070a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
          
          {/* Main Editorial Positioning Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-[#0D7377]/30 dark:border-[#00E5A3]/30 bg-[#0D7377]/5 dark:bg-[#00E5A3]/5 text-[#0D7377] dark:text-[#00E5A3] font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">
                <span>Category Position · SINE IIT Bombay</span>
              </div>

              <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] tracking-tight text-[#0A0A0A] dark:text-white">
                Where technology stops being a research result and has to become a company.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                <p>
                  We are the venture capital arm of <strong>SINE</strong>, the technology business incubator of <strong>IIT Bombay</strong>, and we write pre-seed and seed cheques into ventures emerging from IIT Bombay and India&apos;s other premier research institutions.
                </p>
                <p>
                  By the time we invest, the science usually works. What remains is the harder, less celebrated problem: building a manufacturable product, finding a first customer willing to take a risk on an unproven supplier, and surviving the years in between.
                </p>
                <p className="font-semibold text-[#0D7377] dark:text-[#00E5A3] text-lg">
                  That is the part we are built for.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-lg bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black font-sans text-xs uppercase tracking-[0.18em] font-bold transition-all hover:opacity-90 shadow-md inline-flex items-center gap-2"
                >
                  <span>Explore Institutional Heritage</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/focus-areas"
                  className="px-5 py-2.5 rounded-lg border border-black/15 dark:border-white/15 hover:border-[#0D7377] dark:hover:border-[#00E5A3] font-sans text-xs uppercase tracking-[0.18em] font-semibold transition-all inline-flex items-center gap-2"
                >
                  <span>View Six Focus Areas</span>
                </Link>
              </div>
            </div>

            {/* Right: Authentic IIT Bombay Crest Card */}
            <div className="lg:col-span-4">
              <div className="relative p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0D0F14] text-center space-y-5 shadow-xl">
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#00E5A3]/10 blur-xl animate-pulse" />
                  <IITBCrest size={80} className="relative z-10 text-[#0D7377] dark:text-[#00E5A3]" variant="icon" />
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0D7377] dark:text-[#00E5A3] font-bold">
                    INSTITUTIONAL ANCHOR
                  </div>
                  <h3 className="font-display font-medium text-xl text-[#0A0A0A] dark:text-white">
                    IIT Bombay · SINE
                  </h3>
                  <p className="font-serif italic text-sm text-zinc-500 dark:text-zinc-400">
                    ज्ञानं परमं बलम् · Estd. 1958
                  </p>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans border-t border-black/5 dark:border-white/5 pt-4">
                  20+ years of institutional technology incubation, 220+ deeptech spinouts de-risked, and direct pipeline from 650+ faculty research labs.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 font-mono text-[10px] text-zinc-500">
                  <Shield className="h-3 w-3 text-[#0D7377] dark:text-[#00E5A3]" />
                  <span>SEBI Reg: IN/AIF2/25-26/1937</span>
                </div>
              </div>
            </div>

          </div>

          {/* Section 7.3: The Verified Six-Figure Proof Strip */}
          <div className="space-y-4 pt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {proofMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border flex flex-col items-center justify-center text-center transition-all ${
                    item.highlight
                      ? "border-[#0D7377]/40 dark:border-[#00E5A3]/40 bg-[#0D7377]/5 dark:bg-[#00E5A3]/5 shadow-[0_0_20px_rgba(0,229,163,0.08)]"
                      : "border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-white/[0.02]"
                  }`}
                >
                  <span
                    className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${
                      item.highlight
                        ? "text-[#0D7377] dark:text-[#00E5A3]"
                        : "text-[#0A0A0A] dark:text-white"
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                    {item.label}
                  </span>
                  <span className="mt-0.5 font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Regulatory SINE Attribution Label */}
            <div className="flex items-center justify-center gap-2 text-center text-xs text-zinc-500 dark:text-zinc-400 pt-2 font-sans">
              <Shield className="h-3.5 w-3.5 text-[#0D7377] dark:text-[#00E5A3]" />
              <span>
                *SINE, the technology business incubator of IIT Bombay, since 2004. Reconciled to SEBI registration and fund PPM.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 02: INSTITUTIONAL ARCHITECTURE (IIT BOMBAY CONCENTRIC RADAR)
         ========================================================================= */}
      <section id="ecosystem" className="relative z-10 py-16 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8]/70 dark:bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                02 · Institutional Architecture
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D7377] dark:bg-[#00E5A3]" />
              <span className="font-sans text-xs text-zinc-500">Concentric De-Risking Rings</span>
            </div>
            <span className="font-mono text-xs text-zinc-400">Click a ring to inspect institutional capability</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Concentric Radar Graphic with Center Crest */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12] shadow-lg">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                {/* Ring 5: Global Scale */}
                <button
                  onClick={() => setActiveRing("market")}
                  className={`absolute inset-0 rounded-full border transition-all ${
                    activeRing === "market"
                      ? "border-[#00E5A3] bg-[#00E5A3]/10 ring-2 ring-[#00E5A3]/30"
                      : "border-black/10 dark:border-white/10 hover:border-[#00E5A3]/40"
                  }`}
                  aria-label="Global Scale"
                />
                {/* Ring 4: Sovereign Network */}
                <button
                  onClick={() => setActiveRing("network")}
                  className={`absolute inset-6 rounded-full border transition-all ${
                    activeRing === "network"
                      ? "border-[#00E5A3] bg-[#00E5A3]/15 ring-2 ring-[#00E5A3]/30"
                      : "border-black/10 dark:border-white/10 hover:border-[#00E5A3]/40"
                  }`}
                  aria-label="Sovereign Network"
                />
                {/* Ring 3: Y-Point Ventures */}
                <button
                  onClick={() => setActiveRing("ypoint")}
                  className={`absolute inset-12 rounded-full border transition-all ${
                    activeRing === "ypoint"
                      ? "border-[#00E5A3] bg-[#00E5A3]/25 ring-2 ring-[#00E5A3]/50"
                      : "border-[#0D7377]/40 bg-[#0D7377]/5 hover:border-[#00E5A3]"
                  }`}
                  aria-label="Y-Point Ventures"
                />
                {/* Ring 2: SINE Incubator */}
                <button
                  onClick={() => setActiveRing("sine")}
                  className={`absolute inset-18 rounded-full border transition-all ${
                    activeRing === "sine"
                      ? "border-[#00E5A3] bg-[#00E5A3]/35 ring-2 ring-[#00E5A3]/60"
                      : "border-[#0D7377]/60 bg-[#0D7377]/10 hover:border-[#00E5A3]"
                  }`}
                  aria-label="SINE Incubator"
                />
                {/* Center Core: IIT Bombay Emblem */}
                <button
                  onClick={() => setActiveRing("iitb")}
                  className={`absolute inset-24 rounded-full flex flex-col items-center justify-center text-center transition-all p-1 shadow-xl ${
                    activeRing === "iitb"
                      ? "bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black scale-105 ring-4 ring-[#00E5A3]/30"
                      : "bg-[#0D7377]/90 text-white hover:bg-[#0D7377]"
                  }`}
                  aria-label="IIT Bombay Genesis Core"
                >
                  <IITBCrest size={28} className="drop-shadow-sm mb-0.5" variant="icon" />
                  <span className="font-mono text-[7px] font-bold tracking-tight">IIT BOMBAY</span>
                </button>
              </div>

              {/* Ring selector indicators */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-6">
                {ecosystemLayers.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setActiveRing(l.id)}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
                      activeRing === l.id
                        ? "bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black font-semibold shadow-xs"
                        : "bg-[#F5F5F3] dark:bg-white/5 text-zinc-500 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Layer Capability Panel */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12] space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-3">
                  <span className="font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] uppercase font-bold tracking-[0.2em]">
                    {activeLayer.tier}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-500">
                    Institutional Linkage
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white flex items-center gap-3">
                    <span>{activeLayer.name}</span>
                    {activeLayer.id === "iitb" && (
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#0D7377]/10 dark:bg-[#00E5A3]/10 text-[#0D7377] dark:text-[#00E5A3] border border-[#0D7377]/30 dark:border-[#00E5A3]/30">
                        Estd. 1958
                      </span>
                    )}
                  </h3>
                  <p className="font-sans font-medium text-sm text-[#0D7377] dark:text-[#00E5A3]">
                    {activeLayer.role}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#F5F5F3] dark:bg-white/5 font-mono text-xs text-zinc-700 dark:text-zinc-200">
                  {activeLayer.stats}
                </div>

                {activeLayer.id === "iitb" && (
                  <div className="p-3 rounded-lg border border-[#0D7377]/20 dark:border-[#00E5A3]/20 bg-[#0D7377]/5 dark:bg-[#00E5A3]/5 text-xs font-mono text-[#0D7377] dark:text-[#00E5A3]">
                    <strong>SOVEREIGN MOTTO:</strong> {activeLayer.motto}
                  </div>
                )}

                <p className="font-sans font-normal text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {activeLayer.desc}
                </p>
              </div>

              {/* 3 Quick Institutional Highlights */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12] text-center">
                  <div className="font-display text-2xl font-light text-[#0D7377] dark:text-[#00E5A3]">20+ Yrs</div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">SINE Lineage</div>
                </div>
                <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12] text-center">
                  <div className="font-display text-2xl font-light text-[#0D7377] dark:text-[#00E5A3]">₹3,500+ Cr</div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Incubated Value</div>
                </div>
                <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12] text-center">
                  <div className="font-display text-2xl font-light text-[#0D7377] dark:text-[#00E5A3]">₹250 Cr</div>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Fund Corpus</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 03: SIX DEEPTECH DOMAINS & BESPOKE VECTOR ICONS
         ========================================================================= */}
      <section id="focus" className="relative z-10 py-16 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#05070a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                03 · Focus Areas
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D7377] dark:bg-[#00E5A3]" />
              <span className="font-sans text-xs text-zinc-500">Six Core Deep Technology Verticals</span>
            </div>
            <Link
              href="/focus-areas"
              className="inline-flex items-center gap-1 font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] hover:underline"
            >
              <span>Explore All Sector Theses</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 6 Selector Tabs with Custom SVGs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {sectors.map((sec) => {
              const Icon = sec.icon;
              const isSelected = activeSectorId === sec.id;

              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectorId(sec.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black border-[#0D7377] dark:border-[#00E5A3] shadow-md"
                      : "bg-[#F9F9F8] dark:bg-[#0A0D12] border-black/10 dark:border-white/10 text-[#0A0A0A] dark:text-white hover:border-[#00E5A3]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-[10px] font-bold ${isSelected ? "text-white/80 dark:text-black/80" : "text-[#0D7377] dark:text-[#00E5A3]"}`}>
                      0{sec.num}
                    </span>
                    <Icon className="h-4 w-4" size={16} />
                  </div>
                  <div className="font-sans font-bold text-xs leading-tight">
                    {sec.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Sector Thesis & Value Chain Infographic */}
          <div className="p-8 sm:p-10 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8]/70 dark:bg-[#0A0D12] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                  Vertical 0{activeSector.num} · Thesis &amp; Value Chain
                </span>
                <h3 className="font-display font-light text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A] dark:text-white">
                  {activeSector.name}
                </h3>
              </div>

              <p className="font-serif italic text-base text-[#0D7377] dark:text-[#00E5A3]">
                &ldquo;{activeSector.quote}&rdquo;
              </p>

              <p className="font-sans font-normal text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {activeSector.whyNow}
              </p>

              {/* Value Chain Progression */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-[10px] uppercase text-zinc-500 font-bold block tracking-wider">
                  VALUE CHAIN ARCHITECTURE (★ Y-POINT ENTRY WINDOW)
                </span>
                
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {activeSector.chain.map((node, i) => (
                    <React.Fragment key={node.label}>
                      <div
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all ${
                          node.isFocus
                            ? "bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black font-bold shadow-xs ring-1 ring-[#00E5A3]/50"
                            : "bg-white dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-black/10 dark:border-white/10"
                        }`}
                      >
                        {node.isFocus && "★ "}
                        {node.label}
                      </div>
                      {i < activeSector.chain.length - 1 && (
                        <ChevronRight className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* What We Back & What We Avoid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300">
                  <strong className="block font-mono text-[10px] uppercase tracking-wider mb-1">What We Back (+)</strong>
                  {activeSector.lookFor}
                </div>
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-800 dark:text-red-300">
                  <strong className="block font-mono text-[10px] uppercase tracking-wider mb-1">What We Avoid (-)</strong>
                  {activeSector.avoid}
                </div>
              </div>

            </div>

            {/* Right: Technical Engineering Photography */}
            <div className="lg:col-span-5 relative aspect-[16/11] w-full rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-lg">
              <Image
                src={activeSector.image}
                alt={activeSector.name}
                fill
                className="object-cover grayscale contrast-110"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-white/80 tracking-wider">
                TECHNICAL PHOTOGRAPHY · SINE IIT BOMBAY
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 04: INSTITUTIONAL TRACK RECORD BOARD (SINE LINEAGE)
         ========================================================================= */}
      <section id="portfolio" className="relative z-10 py-16 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8]/70 dark:bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                04 · Institutional Track Record
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D7377] dark:bg-[#00E5A3]" />
              <span className="font-sans text-xs text-zinc-500">SINE Incubation Lineage &amp; Precedents</span>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] hover:underline"
            >
              <span>Explore Full Portfolio Logic</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12]">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] font-bold block">
                Two Decades of Laboratory-to-Market Translation Precedents
              </span>
              <p className="font-sans text-xs text-zinc-500">
                220+ deeptech ventures incubated · ₹3,500+ Cr cumulative enterprise valuation.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                "All",
                "Public & Scale",
                "Space & Defence",
                "Life Sciences",
                "Industrial & CleanTech",
                "Silicon & Computing"
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPortfolioCategory(cat)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                    portfolioCategory === cat
                      ? "bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black font-semibold shadow-xs"
                      : "bg-[#F5F5F3] dark:bg-white/5 text-zinc-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pioneer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pioneerCompanies
              .filter((c) => {
                if (portfolioCategory === "All") return true;
                if (portfolioCategory === "Public & Scale") return c.category === "Public & Scale";
                if (portfolioCategory === "Space & Defence") return c.sector === "Space & Defence";
                if (portfolioCategory === "Life Sciences") return c.sector === "Life Sciences";
                if (portfolioCategory === "Industrial & CleanTech") return c.category === "Industrial & CleanTech";
                if (portfolioCategory === "Silicon & Computing") return c.category === "Silicon & Computing";
                return true;
              })
              .map((co) => (
                <div
                  key={co.id}
                  className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0D12] flex flex-col justify-between space-y-4 hover:border-[#00E5A3]/40 transition-all shadow-md group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] text-[#0D7377] dark:text-[#00E5A3] font-semibold tracking-wider block">
                          {co.sector}
                        </span>
                        <h4 className="font-display font-medium text-xl sm:text-2xl text-[#0A0A0A] dark:text-white group-hover:text-[#0D7377] dark:group-hover:text-[#00E5A3] transition-colors">
                          {co.name}
                        </h4>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase font-bold tracking-wider border shrink-0 ${co.statusBadge}`}>
                        {co.status}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#F9F9F8] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 font-mono text-[11px] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                      ★ {co.metric}
                    </div>

                    <p className="font-sans text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {co.tech}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-1">
                    <div className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                      {co.origin}
                    </div>
                    <div className="font-sans text-[11px] text-zinc-500 dark:text-zinc-400">
                      {co.impact}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Compliance Notice */}
          <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 flex items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-[#0D7377] dark:bg-[#00E5A3] shrink-0" />
            <span>
              <strong>Regulatory Attribution:</strong> Precedent companies above are drawn from SINE IIT Bombay&apos;s 20-year incubation heritage (220+ ventures) and illustrate deeptech translation benchmarks.
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 05: SINE VOICES — OFFICIAL YOUTUBE VIDEO PODCAST THEATER
         ========================================================================= */}
      <section id="podcast" className="relative z-10 py-16 sm:py-24 border-b border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#05070a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-600 font-semibold">
                05 · SINE Voices Podcast
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              <span className="font-sans text-xs text-zinc-500">Official Video Podcast Series</span>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] hover:underline"
            >
              <span>Open Full Video Theatre</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Featured Video Spotlight */}
          <div className="p-6 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0A0D12] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            <div className="lg:col-span-7 relative aspect-video w-full rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-lg">
              <iframe
                src="https://www.youtube-nocookie.com/embed/vP986jbeIWk?rel=0"
                title="SINE Voices: The VC Playbook"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 text-red-600 font-mono text-[10px] uppercase font-bold tracking-wider">
                <Play className="h-3 w-3 fill-current" />
                <span>Featured Episode · SINE Voices</span>
              </div>

              <h3 className="font-display font-medium text-2xl text-[#0A0A0A] dark:text-white">
                The VC Playbook: Decoding Deeptech Venture Capital
              </h3>

              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Featuring in-depth conversations with veteran venture capitalists, deeptech founders (including the journey behind Atomberg&apos;s rise), and institution builders from IIT Bombay.
              </p>

              <div className="pt-2">
                <Link
                  href="/insights"
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-sans text-xs uppercase tracking-[0.18em] font-bold transition-all shadow-md inline-flex items-center gap-2"
                >
                  <span>Watch All 5 Episodes</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 06: APPLY FOR PRE-SEED & SEED FUNDING
         ========================================================================= */}
      <section id="apply" className="relative z-10 py-16 sm:py-24 bg-[#F9F9F8]/80 dark:bg-black/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0D7377]/30 dark:border-[#00E5A3]/30 bg-[#0D7377]/5 dark:bg-[#00E5A3]/5 text-[#0D7377] dark:text-[#00E5A3] font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">
            <span>Cheque Writing · Pre-Seed &amp; Seed</span>
          </div>

          <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] dark:text-white tracking-tight">
            Building a deep tech company out of Indian research?
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-sans max-w-2xl mx-auto leading-relaxed">
            We write ₹3–5 Cr first cheques with dedicated follow-on reserves. If your science is validated and you are preparing for industrial pilots, we want to read your test data.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/apply"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0D7377] dark:bg-[#00E5A3] text-white dark:text-black font-sans text-xs uppercase tracking-[0.22em] font-bold transition-all hover:opacity-90 shadow-lg inline-flex items-center justify-center gap-3"
            >
              <span>APPLY FOR FUNDING</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-black/15 dark:border-white/15 hover:border-[#00E5A3] font-sans text-xs uppercase tracking-[0.22em] font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              <span>ABOUT THE FUND</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-zinc-500">
            <span>SEBI Cat II AIF: IN/AIF2/25-26/1937</span>
            <span>·</span>
            <span>SINE IIT Bombay Anchor</span>
            <span>·</span>
            <span>10 Working Days Response</span>
          </div>

        </div>
      </section>

    </div>
  );
}
