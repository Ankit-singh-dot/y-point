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
            <span>Sector Mandates · Portfolio Concentration</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            WHERE WE INVEST.
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-3xl lg:text-4xl text-black/40 dark:text-white/40">
            Six sectors. One common condition: the hard part is the technology, and it has been proven but not yet productised.
          </motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl space-y-4 sm:space-y-6 pt-6 sm:pt-10 border-l border-black/10 dark:border-white/20 pl-4 sm:pl-10 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
            <p>
              We organise around domains rather than business models, because deep tech companies rarely fit a model at the point we meet them. A team with a novel material may end up selling a component, a licence or a finished system, and which of those it becomes is often the most consequential decision of the first three years. We want to be in the room for it.
            </p>
            <p>
              Each page states what we believe about the sector, what we are actively looking for, and the bar a company needs to clear. We have also written down what gets a fast no. We would rather lose a meeting than waste a founder&apos;s month.
            </p>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 pt-2">
              No single sector will exceed roughly a fifth of the portfolio (~20% limit). We are building a concentrated fund, not an index.
            </p>
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
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white font-medium bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                      {vert.heroHeadline}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-display font-light text-3xl sm:text-4xl text-black dark:text-white group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">
                      {vert.name}
                    </h2>
                    <p className="font-display font-light text-xl text-black/60 dark:text-white/60">
                      &ldquo;{vert.oneLineThesis}&rdquo;
                    </p>
                    <p className="font-sans font-light text-base text-black/70 dark:text-white/70 leading-relaxed">
                      {vert.whatWeBelieve[0]}
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-black/10 dark:border-white/10">
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-2">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-red-500 dark:text-red-400 block">Fast No</span>
                      <span className="font-sans font-light text-sm text-black/80 dark:text-white/80 line-clamp-2 leading-relaxed">{vert.fastNo[0]}</span>
                    </div>

                    <div className="flex justify-end">
                      <Link
                        href={`/focus-areas/${vert.slug}`}
                        className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.2em] text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
                      >
                        <span>Read Thesis</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
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
