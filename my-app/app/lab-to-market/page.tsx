"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import TrlBentoRoadmap from "../components/TrlBentoRoadmap";

export default function LabToMarketPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-24 lg:space-y-32">
        
        {/* Page Hero */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8 max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Research Translation Guide
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377] dark:bg-[#00E5A3]" />
            <span className="font-mono text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
              SINE IIT Bombay
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.08]">
            FROM THE LAB BENCH TO THE MARKET.
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-3xl lg:text-4xl text-black/50 dark:text-white/50">
            A practical map of what happens between a working result and a company.
          </motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl space-y-4 sm:space-y-6 pt-6 sm:pt-10 border-l border-black/10 dark:border-white/20 pl-4 sm:pl-10 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
            <p>
              If you have a technology and are wondering whether it is a company, this page is written for you. You do not need to have incorporated anything, raised anything, or decided anything yet. You may well not need venture capital for another two years, and this page will tell you that too.
            </p>
            <p className="font-medium text-[#0D7377] dark:text-[#00E5A3] text-xs sm:text-sm tracking-widest uppercase">
              An honest framing: Y-Point enters at TRL 4–7. A researcher at TRL 2 is not fundable by this fund today.
            </p>
          </motion.div>
        </motion.div>

        {/* Visual Parallax Banner with Real IIT Bombay Campus Photography */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden rounded-3xl bg-black border border-black/10 dark:border-white/10 shadow-xl"
        >
          <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 origin-bottom">
            <Image
              src="/iitb/main-gate.webp"
              alt="From Lab to Market - IIT Bombay Translational Pipeline"
              fill
              className="object-cover opacity-85"
              priority
            />
          </motion.div>

          {/* Legibility Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

          {/* Top Institutional Badge */}
          <div className="absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/20">
              <div className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0">
                <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
              </div>
              <span className="font-mono text-[9px] sm:text-[11px] text-white tracking-wider font-semibold">
                SINE · IIT BOMBAY
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-[11px] text-white/80 bg-black/50 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10">
              EST. 1958
            </span>
          </div>

          {/* Bottom Information Anchor */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white space-y-1 sm:space-y-1.5">
            <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-widest text-[#00E5A3] font-semibold block">
              Translational Pathway
            </span>
            <h3 className="font-display font-light text-lg sm:text-3xl text-white leading-tight">
              Translating Laboratory IP into Enduring Companies
            </h3>
            <div className="flex flex-wrap items-center gap-2 pt-0.5 sm:pt-1 font-mono text-[10px] sm:text-[11px] text-white/70">
              <span className="text-[#00E5A3] font-bold">ज्ञानं परमं ध्येयम्</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">TRL 1–3 Academic Grants</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">TRL 4–7 First Cheque</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Central Graphic (TRL Roadmap) */}
        <div className="-mx-6 sm:-mx-12">
          <TrlBentoRoadmap />
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] p-10 sm:p-20 text-center space-y-8 overflow-hidden shadow-lg"
        >
          {/* Subtle Crest Watermark */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[350px] h-[350px]"
            aria-hidden="true"
          >
            <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
          </div>

          <div className="relative space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Early Dialogue · SINE IIT Bombay
            </span>
            <h3 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white max-w-4xl mx-auto leading-tight">
              Not ready to raise? Talk to us anyway.
            </h3>
            <p className="font-sans font-light text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Some of the companies we expect to back in three years do not exist yet. We would rather know you at TRL 3 and watch the work than meet you at a competitive Series A.
            </p>
          </div>
          
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 rounded-full bg-black dark:bg-white px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] text-white dark:text-black hover:bg-[#0D7377] dark:hover:bg-[#00E5A3] transition-all w-full sm:w-auto justify-center shadow-md"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/insights#handbook"
              className="group inline-flex items-center gap-3 rounded-full border border-black/20 dark:border-white/20 bg-transparent px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <BookOpen className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Read the Founder&apos;s Handbook</span>
            </Link>
          </div>

          <div className="relative pt-4 font-mono text-[11px] text-zinc-400">
            SINE Office, 5th Floor, RBTIC Building, IIT Bombay, Powai, Mumbai 400076
          </div>
        </motion.div>

      </div>
    </div>
  );
}
