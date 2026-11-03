"use client";

import React, { useRef } from "react";
import PhotoHero from "../components/PhotoHero";
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
    <>
    <PhotoHero photo="mainBuilding" eyebrow="Research translation guide" title="From the lab bench to the market." intro="A practical map of what happens between a working result and a company." />
    <div ref={containerRef} className="relative min-h-screen pt-16 sm:pt-20 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-24 lg:space-y-32">
        


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
    </>
  );
}
