"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Factory, Atom, Rocket, Zap, Dna } from "lucide-react";

interface SectorThesis {
  id: string;
  num: string;
  name: string;
  headline: string;
  quote: string;
  image: string;
  icon: any;
  whyNow: string;
  lookFor: string[];
  avoid: string[];
  chainTitle: string;
  chainSteps: { name: string; focus: boolean }[];
}

export default function FocusAreaSection() {
  const [activeSector, setActiveSector] = useState<string>("ai");

  const sectors: Record<string, SectorThesis> = {
    ai: {
      id: "ai",
      num: "01",
      name: "AI & Advanced Computing",
      headline: "INVESTING IN THE FUTURE OF SILICON",
      quote: "Models are commoditising. The durable value is moving down the stack.",
      image: "/sectors/ai-computing.jpg",
      icon: Cpu,
      whyNow: "Foundation models are becoming commodities. The bottleneck is shifting from software to hardware — custom silicon, inference acceleration, edge computing, and the infrastructure layer beneath the model.",
      lookFor: [
        "Custom silicon / ASIC design",
        "Inference optimisation hardware",
        "Edge AI with proprietary architecture",
        "Vertical AI with deep domain data moats",
        "Physical AI / embodied intelligence",
      ],
      avoid: [
        "Wrapper applications on commodity APIs",
        "LLM fine-tuning without data moat",
        "AI SaaS without technical differentiation",
      ],
      chainTitle: "INVESTMENT FOCUS: BELOW THE MODEL LAYER",
      chainSteps: [
        { name: "Foundation Models", focus: false },
        { name: "Training Infra", focus: false },
        { name: "Inference Engines", focus: true },
        { name: "Custom Silicon / ASIC", focus: true },
        { name: "Edge Hardware", focus: true },
        { name: "Physical AI / Robotics", focus: false },
      ],
    },
    semicon: {
      id: "semicon",
      num: "02",
      name: "Advanced Manufacturing & Semiconductor",
      headline: "INVESTING IN THE FUTURE OF THE FACTORY FLOOR",
      quote: "India will not win manufacturing on labour cost. It will win on automation and on silicon.",
      image: "/sectors/semiconductor.jpg",
      icon: Factory,
      whyNow: "India's semiconductor mission, PLI schemes, and supply-chain diversification away from China are creating structural demand for domestic chip design, EDA tools, packaging innovation, and smart manufacturing systems.",
      lookFor: [
        "Fabless chip design (analog, RF, mixed-signal)",
        "EDA and design automation tools",
        "Advanced semiconductor packaging",
        "Industrial automation & multi-axis robotics",
        "Semiconductor in-line test and metrology",
      ],
      avoid: [
        "Contract manufacturing without IP",
        "Generic automation integrators",
        "Capacity plays without technology edge",
      ],
      chainTitle: "SEMICONDUCTOR VALUE CHAIN",
      chainSteps: [
        { name: "IP / Design", focus: false },
        { name: "EDA Tools", focus: false },
        { name: "Fabless Design", focus: true },
        { name: "Foundry / Fab", focus: false },
        { name: "Packaging", focus: true },
        { name: "Testing", focus: true },
        { name: "End Market", focus: false },
      ],
    },
    materials: {
      id: "materials",
      num: "03",
      name: "Next Gen Materials",
      headline: "INVESTING IN THE FUTURE OF MATTER",
      quote: "Every hard problem in energy, space and electronics is a materials problem wearing a disguise.",
      image: "/sectors/advanced-manufacturing.jpg",
      icon: Atom,
      whyNow: "Breakthroughs in computational materials science, additive manufacturing, and sustainability requirements are creating demand for novel materials — from battery cathodes to thermal management to aerospace composites.",
      lookFor: [
        "Novel material compositions with IP",
        "Materials informatics platforms",
        "Sustainable alternatives to critical minerals",
        "Application-specific advanced carbon systems",
        "Engineered surface coatings & barrier layers",
      ],
      avoid: [
        "Incremental material improvements",
        "No clear industrial application path",
        "Commodity material production without process moat",
      ],
      chainTitle: "MATERIALS COMMERCIALISATION CHAIN",
      chainSteps: [
        { name: "Discovery", focus: false },
        { name: "Synthesis", focus: false },
        { name: "Characterisation", focus: true },
        { name: "Application Engineering", focus: true },
        { name: "Scale-up", focus: true },
        { name: "Industrial Supply", focus: false },
      ],
    },
    space: {
      id: "space",
      num: "04",
      name: "Space & Defence",
      headline: "INVESTING IN THE FUTURE OF ORBIT",
      quote: "Sovereign capability became a commercial market, and the procurement door is finally open.",
      image: "/sectors/space-defence.jpg",
      icon: Rocket,
      whyNow: "IN-SPACe liberalisation, iDEX procurement pipeline, and growing private space ecosystem. Defence procurement reforms opening doors for private deep tech companies.",
      lookFor: [
        "Propulsion and launch subsystems",
        "Satellite payloads and optical sensors",
        "Defence electronics and tactical EW",
        "Autonomous unmanned flight systems",
        "Space-grade radiation-hardened materials",
      ],
      avoid: [
        "IT services relabelled as defence tech",
        "No identified sovereign procurement pathway",
        "Export-restricted products without domestic demand",
      ],
      chainTitle: "SPACE VALUE CHAIN",
      chainSteps: [
        { name: "Subsystems", focus: true },
        { name: "Payloads", focus: true },
        { name: "Launch", focus: true },
        { name: "Ground Segment", focus: false },
        { name: "Data / Analytics", focus: false },
        { name: "End Customer", focus: false },
      ],
    },
    climate: {
      id: "climate",
      num: "05",
      name: "Climate & CleanTech",
      headline: "INVESTING IN THE FUTURE OF ENERGY",
      quote: "Decarbonising an industrialising economy is a different problem from decarbonising a rich one.",
      image: "/sectors/climate-energy.jpg",
      icon: Zap,
      whyNow: "India's decarbonisation challenge is unique — electrification is growing alongside renewable buildout. Need for energy storage, grid management, industrial decarbonisation, and circular economy solutions designed for Indian conditions.",
      lookFor: [
        "Novel energy storage chemistry (solid-state/flow)",
        "Industrial decarbonisation (process heat, cement)",
        "Green hydrogen electrolyser components",
        "Grid-scale energy management & power electronics",
        "Circular critical mineral & battery recycling",
      ],
      avoid: [
        "Solar/wind farm project development",
        "Green premium without path to cost parity",
        "Policy-dependent or carbon-tax-reliant unit economics",
      ],
      chainTitle: "CLIMATE COMMERCIALISATION CHAIN",
      chainSteps: [
        { name: "Science", focus: false },
        { name: "Technology", focus: true },
        { name: "Unit Economics", focus: true },
        { name: "Deployment", focus: true },
        { name: "Infrastructure", focus: false },
        { name: "Adoption", focus: false },
      ],
    },
    biotech: {
      id: "biotech",
      num: "06",
      name: "Life Sciences",
      headline: "INVESTING IN THE FUTURE OF MEDICINE",
      quote: "Indian clinical scale and Indian engineering cost is an advantage nobody else can assemble.",
      image: "/sectors/life-sciences.jpg",
      icon: Dna,
      whyNow: "India's combination of world-class biological research, massive clinical populations, low-cost engineering talent, and growing regulatory sophistication creates unique opportunities in medtech, diagnostics, and drug discovery tools.",
      lookFor: [
        "Novel diagnostic platforms & microfluidics",
        "Cellular immunotherapy & bioprocessing tools",
        "Medtech with India-first accessible cost structure",
        "Enzymatic biomanufacturing",
        "Computational biology with clinical validation",
      ],
      avoid: [
        "Me-too generics",
        "Medical devices without defined regulatory pathway",
        "Clinical-stage drugs (too capital-intensive for seed fund)",
      ],
      chainTitle: "LIFE SCIENCES TRANSLATION CHAIN",
      chainSteps: [
        { name: "Discovery", focus: false },
        { name: "Platform", focus: true },
        { name: "Validation", focus: true },
        { name: "Regulatory", focus: true },
        { name: "Manufacturing", focus: false },
        { name: "Clinical / Market", focus: false },
      ],
    },
  };

  const active = sectors[activeSector];

  return (
    <section id="focus" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10 overflow-hidden">
      {/* Subtle IIT Bombay Crest Watermark in Background */}
      <div 
        className="absolute -right-28 top-1/3 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px]"
        aria-hidden="true"
      >
        <Image
          src="/iitb/iitb-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              04 — Focus Areas
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              Sector Theses &amp; Value Chain Architectures
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            6 DOMAINS · SINE IIT BOMBAY INCUBATION MANDATE
          </div>
        </div>

        {/* HERO TITLE & INSTITUTIONAL DILIGENCE ANCHOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Six sectors. One common condition: the hard part is the technology, proven in the lab, ready to be productised.
            </h1>
            <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
              This is the intellectual centrepiece of Y-Point. We evaluate deeptech through rigorous engineering diligence alongside IIT Bombay faculty and domain operators, not high-level buzzwords.
            </p>
          </div>

          {/* Institutional Anchor Card */}
          <div className="lg:col-span-4">
            <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-md">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/iitb/main-gate.jpg"
                  alt="IIT Bombay Deeptech Diligence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  <div className="relative h-3.5 w-3.5 shrink-0">
                    <Image src="/iitb/iitb-logo.png" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-mono text-[9px] text-white tracking-wider font-semibold">
                    IIT BOMBAY DILIGENCE
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="font-mono text-[10px] text-[#00E5A3] font-semibold">
                    ज्ञानं परमं ध्येयम्
                  </div>
                  <div className="font-sans font-medium text-xs text-white">
                    17 Departments · 13 Specialized Centres
                  </div>
                  <p className="hidden sm:block font-sans text-[11px] text-white/70 font-light leading-snug">
                    Verifying characterisation data, patent moats, and TRL progression directly with academic and industrial authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. INFOGRAPHIC: THE DEEPTECH DOMAIN MAP */}
        <div className="p-8 sm:p-10 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-16 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Infographic · Interconnected Domain Map
            </span>
            <span className="font-mono text-[11px] text-[#666666] dark:text-zinc-400">
              Select a sector to explore its thesis
            </span>
          </div>

          {/* Hexagonal Selection Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.keys(sectors).map((key) => {
              const sec = sectors[key];
              const Icon = sec.icon;
              const isSelected = activeSector === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveSector(key)}
                  className={`p-4 rounded-lg border transition-all text-left flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? "bg-[#0D7377] text-white border-[#0D7377] shadow-md scale-[1.02]"
                      : "bg-white dark:bg-[#111111] border-[#E5E5E5] dark:border-white/10 text-[#0A0A0A] dark:text-white hover:border-[#0D7377]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-bold ${isSelected ? "text-white/80" : "text-[#0D7377]"}`}>
                      0{sec.num}
                    </span>
                    <Icon className={`h-4 w-4 ${isSelected ? "text-white" : "text-[#666666] dark:text-zinc-400"}`} />
                  </div>
                  <div className="font-sans font-bold text-xs leading-tight">
                    {sec.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. DEDICATED SECTOR THESIS FRAMEWORK (The Active Sector) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D] p-8 sm:p-12 space-y-12 mb-20"
          >
            {/* Sector Header with Real Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#E5E5E5] dark:border-white/10 pb-10">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
                    Sector 0{active.num}
                  </span>
                  <span className="text-[#666666] dark:text-zinc-500">·</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#666666] dark:text-zinc-400">
                    {active.headline}
                  </span>
                </div>

                <h3 className="font-display font-light text-3xl sm:text-5xl text-[#0A0A0A] dark:text-white leading-tight">
                  {active.name}
                </h3>

                <p className="font-sans italic text-base sm:text-lg text-[#0D7377] dark:text-teal-400 leading-relaxed pt-1">
                  &ldquo;{active.quote}&rdquo;
                </p>

                <div className="space-y-2 pt-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0A0A0A] dark:text-white font-bold block">
                    WHY NOW
                  </span>
                  <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-300 leading-relaxed">
                    {active.whyNow}
                  </p>
                </div>
              </div>

              {/* Authentic Real Technical Photograph */}
              <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-[#E5E5E5] dark:border-white/10 bg-black">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover grayscale contrast-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 font-mono text-[10px] text-white/80 tracking-wide">
                  DOCUMENTARY TECHNICAL LAB FOOTAGE · SINE IIT BOMBAY
                </div>
              </div>

            </div>


            {/* Value Chain Infographic */}
            <div className="p-6 rounded-lg border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#0D7377] font-semibold">
                <span>{active.chainTitle}</span>
                <span className="text-[#666666] dark:text-zinc-400">Shaded boxes = Y-Point entry focus</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
                {active.chainSteps.map((step, idx) => (
                  <div
                    key={step.name}
                    className={`p-3.5 rounded border text-center flex flex-col justify-center min-h-[75px] ${
                      step.focus
                        ? "bg-[#0D7377] text-white border-[#0D7377] shadow-sm font-semibold"
                        : "bg-white dark:bg-[#151515] border-[#E5E5E5] dark:border-white/10 text-[#666666] dark:text-zinc-400 font-normal"
                    }`}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-wider opacity-75">
                      STEP 0{idx + 1}
                    </span>
                    <span className="font-sans text-xs mt-1 leading-snug">
                      {step.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>See Our Portfolio</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/apply"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Apply for Funding</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
