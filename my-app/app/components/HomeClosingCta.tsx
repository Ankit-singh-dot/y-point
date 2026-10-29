"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeClosingCta() {
  return (
    <section className="relative z-10 py-24 sm:py-32 bg-[#FBFBFB] dark:bg-[#07090e] border-t border-black/[0.08] dark:border-white/[0.08] overflow-hidden">
      
      {/* Background Architectural Texture (Subtle, never hides or overlaps text) */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.06] dark:opacity-[0.08]">
        <Image
          src="/iitb/campus-lawn.webp"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFBFB] via-transparent to-[#FBFBFB] dark:from-[#07090e] dark:via-transparent dark:to-[#07090e]" />
      </div>

      {/* Subtle IIT Bombay Crest Watermark */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.025] dark:opacity-[0.035] w-[400px] h-[400px] sm:w-[550px] sm:h-[550px]"
        aria-hidden="true"
      >
        <Image
          src="/iitb/iitb-logo.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <div className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
            Pitch to Us · SINE IIT Bombay
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] dark:text-white tracking-tight leading-[1.15]">
            Building something that starts with science?
          </h2>
          <p className="font-sans font-light text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
            Tell us what you are working on. We invest in early-stage deeptech ventures developing technology-led solutions for significant global markets.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply"
            className="group px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-black text-white hover:bg-[#0D7377] dark:bg-white dark:text-black dark:hover:bg-[#00E5A3] font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            <span>Pitch to Y-Point</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 sm:px-9 sm:py-4 rounded-full border border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 transition-all font-medium"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>

        <div className="pt-4 font-mono text-[11px] text-zinc-400">
          SINE Office, 5th Floor, RBTIC Building, IIT Bombay, Powai, Mumbai 400076
        </div>
      </div>
    </section>
  );
}
