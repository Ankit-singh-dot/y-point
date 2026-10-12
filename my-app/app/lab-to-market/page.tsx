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
    <div ref={containerRef} className="min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-24 lg:space-y-32">
        
        {/* Page Hero */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8 max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60">
            <span>Research Translation Guide</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            FROM THE LAB BENCH TO THE MARKET.
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-3xl lg:text-4xl text-black/40 dark:text-white/40">
            A practical map of what happens between a working result and a company.
          </motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl space-y-4 sm:space-y-6 pt-6 sm:pt-10 border-l border-black/10 dark:border-white/20 pl-4 sm:pl-10 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
            <p>
              If you have a technology and are wondering whether it is a company, this page is written for you. You do not need to have incorporated anything, raised anything, or decided anything yet. You may well not need venture capital for another two years, and this page will tell you that too.
            </p>
            <p className="font-medium text-black/40 dark:text-white/40 text-xs sm:text-sm tracking-widest uppercase">
              An honest framing: Y-Point enters at TRL 4–7. A researcher at TRL 2 is not fundable by this fund today.
            </p>
          </motion.div>
        </motion.div>

        {/* Visual Parallax Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-black"
        >
          <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 origin-bottom">
            <Image
              src="/The Next Creation - Humanity, Amplified by Technology.jpeg"
              alt="From Lab to Market - Translational Science"
              fill
              className="object-cover opacity-80 mix-blend-screen"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Interactive Central Graphic (TRL Roadmap - Already Overhauled) */}
        <div className="-mx-6 sm:-mx-12">
          <TrlBentoRoadmap />
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-12 sm:p-24 text-center space-y-12"
        >
          <h3 className="font-display font-light text-4xl sm:text-6xl text-black dark:text-white max-w-4xl mx-auto">
            Not ready to raise? Talk to us anyway.
          </h3>
          <p className="font-sans font-light text-black/60 dark:text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Some of the companies we expect to back in three years do not exist yet. We would rather know you at TRL 3 and watch the work than meet you at a competitive Series A.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 rounded-full bg-black dark:bg-white px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all w-full sm:w-auto justify-center"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/insights#handbook"
              className="group inline-flex items-center gap-3 rounded-full border border-black/20 dark:border-white/20 bg-transparent px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <BookOpen className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
              <span>Read the Founder&apos;s Handbook</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
