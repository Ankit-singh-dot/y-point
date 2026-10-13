"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Building2, ExternalLink } from "lucide-react";

interface PortfolioCompany {
  name: string;
  category: string;
  tagline: string;
  description: string;
  milestone: string;
  url?: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Computing",
    "Semiconductor & Robotics",
    "Space & Defence",
    "Climate & Energy",
    "Healthcare & Bio",
    "Materials & Chemistry",
  ];

  const companies: PortfolioCompany[] = [
    {
      name: "IdeaForge",
      category: "Space & Defence",
      tagline: "India's pioneer drone manufacturer & autonomous defense systems",
      description:
        "Incubated at SINE IIT Bombay. Pioneers in unmanned aerial vehicles and autonomous surveillance platforms for defense and homeland security. Successfully listed on NSE and BSE.",
      milestone: "Public Company (NSE / BSE) · SINE Incubated",
    },
    {
      name: "ImmunoACT",
      category: "Healthcare & Bio",
      tagline: "India's first approved indigenous CAR-T cell therapy (NexCAR19)",
      description:
        "Born out of IIT Bombay labs and incubated at SINE. Developed NexCAR19, an indigenously engineered cell therapy bringing curative oncology treatment from $400k global prices down to Indian accessibility.",
      milestone: "Commercial CDSCO Approval · SINE Incubated",
    },
    {
      name: "Sedemac Mechatronics",
      category: "Climate & Energy",
      tagline: "Sensorless motor control and powertrain intelligence for millions of vehicles",
      description:
        "Spun out of IIT Bombay mechanical labs and incubated at SINE. World-class engine control and brushless motor solutions powering millions of vehicles globally.",
      milestone: "Global Scale & Tier-1 Deployment · SINE Incubated",
    },
    {
      name: "QNu Labs",
      category: "AI & Computing",
      tagline: "Quantum key distribution & quantum-safe cryptography",
      description:
        "Pioneering hardware-accelerated quantum cryptography, quantum random number generation (QRNG), and quantum key distribution (QKD) securing sovereign telecommunications.",
      milestone: "National Defence & Sovereign Deployments",
    },
    {
      name: "Peppermint Robotics",
      category: "Semiconductor & Robotics",
      tagline: "Autonomous industrial floor-care and logistics robots",
      description:
        "Engineered autonomous mobile robotics for factory floors, airports, and Tier-1 manufacturing facilities with proprietary localization and multi-sensor navigation.",
      milestone: "Deployed Across Fortune 500 Facilities",
    },
    {
      name: "MumbaiSemi",
      category: "Semiconductor & Robotics",
      tagline: "Domain-specific analog, RF, and mixed-signal silicon design",
      description:
        "Fabless semiconductor design firm building high-reliability communication silicon, capitalizing on the India Semiconductor Mission and domestic chip tape-out pipelines.",
      milestone: "Tape-out Validation · SINE Incubation",
    },
    {
      name: "Nanosafe Solutions",
      category: "Materials & Chemistry",
      tagline: "Engineered active nanomaterials and antimicrobial mineral coatings",
      description:
        "Translating laboratory nanostructured materials into scalable industrial coatings, polymer additives, and copper-doped antimicrobial surfaces.",
      milestone: "Commercial Production & Global Patents",
    },
    {
      name: "CarbonCraft Design",
      category: "Materials & Chemistry",
      tagline: "Industrial carbon emissions captured and upcycled into architectural surfaces",
      description:
        "Proprietary waste-carbon processing technology capturing tire pyrolysis and industrial emissions to manufacture carbon-negative architectural materials.",
      milestone: "Global Architectural Deployments",
    },
    {
      name: "Babbelbots.ai",
      category: "AI & Computing",
      tagline: "Indic language speech models and voice automation infrastructure",
      description:
        "Deep learning acoustic and phonetic models purpose-built for India's multilingual enterprise and customer service environments with low-latency edge inference.",
      milestone: "Enterprise Production Deployments",
    },
  ];

  const filtered =
    activeCategory === "All"
      ? companies
      : companies.filter((c) => c.category === activeCategory);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 max-w-4xl"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60"
          >
            <Sparkles className="h-3 w-3 text-teal-600 dark:text-teal-400" />
            Translational Deep Tech Ecosystem
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight text-black dark:text-white"
          >
            Portfolio & Track Record
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="font-sans font-light text-lg sm:text-xl text-black/70 dark:text-white/70 max-w-2xl leading-relaxed"
          >
            Over two decades of science translation out of IIT Bombay and SINE. From first university patents to public stock exchanges, this is the institutional bedrock Y-Point Fund-I builds upon.
          </motion.p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-black/5 dark:border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-black dark:bg-white text-white dark:text-black font-semibold shadow-md"
                  : "bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Company Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filtered.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={item.name}
              className="group p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/25 dark:hover:border-white/30 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
                    {item.category}
                  </span>
                  <div className="h-7 w-7 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-3.5 w-3.5 text-black dark:text-white" />
                  </div>
                </div>
                
                <h3 className="font-display font-light text-2xl sm:text-3xl text-black dark:text-white">
                  {item.name}
                </h3>
                
                <p className="font-sans text-sm font-medium text-black/90 dark:text-white/90">
                  {item.tagline}
                </p>
                
                <p className="font-sans font-light text-sm text-black/60 dark:text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-black/50 dark:text-white/50">
                  {item.milestone}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call To Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="font-display font-light text-2xl sm:text-3xl text-black dark:text-white">
              Building at TRL 4–7?
            </h4>
            <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60">
              We write ₹3–5 Cr first institutional cheques for proven laboratory breakthroughs ready for pilot validation.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-sans text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
          >
            Apply for funding
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
