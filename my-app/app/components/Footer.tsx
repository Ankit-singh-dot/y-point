"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Building2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <footer ref={containerRef} className="relative bg-white dark:bg-black overflow-hidden pt-16 sm:pt-28 lg:pt-40 pb-8 sm:pb-12 rounded-t-[2.5rem] sm:rounded-t-[4rem] border-t border-black/5 dark:border-white/10 z-20">
      
      {/* Upper Minimal Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 mb-14 sm:mb-20 lg:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative h-14 sm:h-16 md:h-18 w-auto flex items-center">
                <Image 
                  src="/logo-cropped.png" 
                  alt="Y-Point Logo" 
                  width={240} 
                  height={84} 
                  className="object-contain h-full w-auto opacity-95 hover:opacity-100 transition-opacity mix-blend-multiply dark:invert dark:hue-rotate-180 dark:mix-blend-screen" 
                />
              </div>
            </div>

            <p className="max-w-sm font-sans font-light text-base leading-relaxed text-black/75 dark:text-white/75">
              India&apos;s first institute-linked deep tech venture capital fund. We write the first institutional cheque into companies built on Indian research.
            </p>

            <div className="space-y-3 font-sans font-light text-sm text-black/60 dark:text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  SINE Office, 5th Floor, RBTIC Building, IIT Bombay, Powai, Mumbai 400076
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4.5 w-4.5 shrink-0" />
                <span>Manager: Y-Point Investment Advisors</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-8 pt-4 sm:pt-0">
            {/* Explore */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/focus-areas" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Focus Areas</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Focus Areas</span>
                  </span>
                </Link></li>
                <li><Link href="/platform" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Platform</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Platform</span>
                  </span>
                </Link></li>
                <li><Link href="/lab-to-market" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Lab to Market</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Lab to Market</span>
                  </span>
                </Link></li>
                <li><Link href="/insights" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Insights</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Insights</span>
                  </span>
                </Link></li>
              </ul>
            </div>

            {/* Founders */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">Founders</h4>
              <ul className="space-y-3">
                <li><Link href="/apply" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Apply Now</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-black dark:text-white font-medium">Apply Now</span>
                  </span>
                </Link></li>
                <li><Link href="/lab-to-market" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">The TRL Journey</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">The TRL Journey</span>
                  </span>
                </Link></li>
                <li><Link href="/insights#handbook" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Handbook</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Handbook</span>
                  </span>
                </Link></li>
              </ul>
            </div>

            {/* Fund */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-sans font-semibold text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">Fund</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">About Fund</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">About Fund</span>
                  </span>
                </Link></li>
                <li><Link href="/institutional" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">LPs</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">LPs</span>
                  </span>
                </Link></li>
                <li><Link href="/contact" className="group flex items-center gap-2 font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Contact</span>
                    <span className="inline-block absolute left-0 top-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">Contact</span>
                  </span>
                </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Typographic Call to Action */}
      <Link href="/apply" className="block w-full group overflow-hidden border-y border-black/5 dark:border-white/5 py-10 sm:py-16 lg:py-20 relative cursor-pointer bg-black/5 dark:bg-[#050505]">
        <div className="absolute inset-0 bg-black dark:bg-white scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" />
        <motion.div style={{ y: textY }} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex flex-row items-center justify-between gap-4">
          <h2 className="font-display font-light text-5xl sm:text-7xl lg:text-[9vw] tracking-tighter leading-none text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-700">
            APPLY NOW
          </h2>
          <div className="flex items-center justify-center h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28 rounded-full border border-black/10 dark:border-white/10 group-hover:border-white/20 dark:group-hover:border-black/20 group-hover:rotate-45 transition-all duration-700 shrink-0">
            <ArrowRight className="h-7 w-7 sm:h-10 sm:w-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-700" />
          </div>
        </motion.div>
      </Link>

      {/* Regulatory Bottom Band */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 mt-10 sm:mt-16 lg:mt-24">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
          
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-black/60 dark:text-white/60" />
              <span className="font-sans font-semibold text-xs sm:text-xs uppercase tracking-[0.2em] text-black/70 dark:text-white/70">
                SEBI Reg. IN/AIF2/25-26/1937
              </span>
            </div>
            <p className="font-sans font-light text-xs sm:text-xs leading-relaxed text-black/60 dark:text-white/60">
              Y-Point Venture Capital Fund-I is a scheme of Y-Point Venture Capital Trust, a Category II Alternative Investment Fund registered with the Securities and Exchange Board of India. The Fund is managed by Y-Point Investment Advisors Private Limited (wholly owned by SINE). Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any securities or units of the Fund.
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-between gap-4 font-sans text-xs uppercase tracking-[0.2em] text-black/50 dark:text-white/50">
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
              <a href="mailto:compliance@y-point.vc" className="hover:text-black dark:hover:text-white transition-colors">Compliance</a>
            </div>
            <div>
              © 2026 Y-Point Venture Capital
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
