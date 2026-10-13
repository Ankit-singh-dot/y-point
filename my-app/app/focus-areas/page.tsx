"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Factory, Atom, Rocket, Zap, Dna } from "lucide-react";
import { VERTICALS } from "../data/verticals";
import { motion } from "framer-motion";

const verticalIcons: Record<string, React.ElementType> = {
  "ai-advanced-computing": Cpu,
  "advanced-manufacturing-semiconductor": Factory,
  "next-gen-materials": Atom,
  "space-defence": Rocket,
  "climate-cleantech": Zap,
  "life-sciences": Dna,
};

export default function FocusAreasHub() {
  const verticalsList = Object.values(VERTICALS);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-24 lg:space-y-32">
        
        {/* Page Hero */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8 max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60">
            <span>Investment Mandate · The Six Sectors</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            WHERE WE INVEST.
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-2xl lg:text-3xl text-black/50 dark:text-white/50 max-w-3xl">
            Six technology domains. One condition: proven science ready for productisation.
          </motion.p>

          {/* Compiled Fund Tenets: 3 Crisp High-Impact Pillars */}
          <motion.div 
            variants={fadeInUp} 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 sm:pt-6 border-t border-black/10 dark:border-white/10"
          >
            <div className="rounded-2xl border border-black/8 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-black/40 dark:text-white/40 block font-medium">
                01 · Stage & Readiness
              </span>
              <p className="font-sans font-semibold text-sm text-black/90 dark:text-white/90">
                TRL 4–7 · Pre-Seed & Seed
              </p>
              <p className="font-sans font-light text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Backing hard technology proven in labs, scaling toward first productisation.
              </p>
            </div>

            <div className="rounded-2xl border border-black/8 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-black/40 dark:text-white/40 block font-medium">
                02 · Discipline
              </span>
              <p className="font-sans font-semibold text-sm text-black/90 dark:text-white/90">
                ≤ 20% Sector Limit
              </p>
              <p className="font-sans font-light text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Concentrated high-conviction portfolio. We build deep conviction, not a broad index.
              </p>
            </div>

            <div className="rounded-2xl border border-black/8 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-5 space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-black/40 dark:text-white/40 block font-medium">
                03 · Architecture
              </span>
              <p className="font-sans font-semibold text-sm text-black/90 dark:text-white/90">
                Domain-First Approach
              </p>
              <p className="font-sans font-light text-xs text-black/60 dark:text-white/60 leading-relaxed">
                Organised by technical physics before commercial business models settle.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* The Six Verticals */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16 lg:gap-y-24"
        >
          {verticalsList.map((vert) => {
            const Icon = verticalIcons[vert.slug] || Cpu;
            return (
              <motion.div
                variants={fadeInUp}
                key={vert.slug}
                className="group flex flex-col justify-between space-y-8"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-black">
                  <Image
                    src={vert.image}
                    alt={vert.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 mix-blend-screen"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-sans text-xs uppercase tracking-wider text-white font-semibold bg-black/50 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
                      {vert.heroHeadline}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col space-y-6">
                  <div className="space-y-3">
                    <h2 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">
                      {vert.name}
                    </h2>
                    <p className="font-display font-light text-lg sm:text-xl text-black/70 dark:text-white/70 leading-relaxed">
                      &ldquo;{vert.oneLineThesis}&rdquo;
                    </p>
                  </div>

                  {/* Scannable Active Inquiries (Compiled, replacing repetitive paragraphs) */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 dark:text-white/40 block font-medium">
                      Active Inquiries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {vert.whereWeAreLooking.slice(0, 3).map((item, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-light bg-black/[0.03] dark:bg-white/[0.04] border border-black/8 dark:border-white/10 text-black/75 dark:text-white/75"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-black/10 dark:border-white/10">
                    <span className="font-mono text-xs text-black/40 dark:text-white/40 tracking-wider uppercase">
                      TRL 4–7 · Pre-seed & Seed
                    </span>
                    <Link
                      href={`/focus-areas/${vert.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm uppercase tracking-wider text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors font-semibold"
                    >
                      <span>Read Thesis</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
