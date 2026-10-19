"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
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
              <div className="flex items-center px-4 py-2 rounded-2xl bg-white border border-black/10 shadow-xs">
                <div className="relative h-10 sm:h-12 md:h-14 w-auto flex items-center">
                  <Image 
                    src="/logo-transparent.png" 
                    alt="Y-Point Logo" 
                    width={220} 
                    height={75} 
                    className="object-contain h-full w-auto opacity-95 hover:opacity-100 transition-opacity" 
                  />
                </div>
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
            {/* Sections */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] font-semibold">01 · Structure</h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><Link href="/#about" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link href="/#portfolio" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Portfolio & Track Record</Link></li>
                <li><Link href="/#team" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Team & IC</Link></li>
              </ul>
            </div>

            {/* Theses & Content */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] font-semibold">02 · Theses</h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><Link href="/#focus" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Focus Areas Map</Link></li>
                <li><Link href="/#content" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Signal from the Lab</Link></li>
                <li><Link href="/#content" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Podcast Series</Link></li>
              </ul>
            </div>

            {/* Engagement */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] font-semibold">03 · Engage</h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><Link href="/#apply" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors font-medium">Apply for Funding</Link></li>
                <li><a href="mailto:ir@y-point.vc" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Institutional LPs</a></li>
                <li><a href="mailto:contact@y-point.vc" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Direct Contact</a></li>
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

    </footer>
  );
}
