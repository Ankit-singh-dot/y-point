"use client";

import React from "react";
import { PhotoStage } from "./PhotoHero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeClosingCta() {
  return (
    <PhotoStage photo="mainGate">
      <div className="space-y-6 sm:space-y-8 max-w-2xl lg:max-w-3xl text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00E5A3] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#00E5A3] font-semibold">
            Pitch to us · SINE IIT Bombay
          </span>
        </div>
        <h2 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          Building something that starts with science?
        </h2>
        <p className="font-sans font-light text-base sm:text-xl text-white/85 leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
          Tell us the problem, the technology behind it, and what you have validated so far.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href="/apply"
            className="group px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white text-black hover:bg-[#00E5A3] font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2"
          >
            <span>Pitch to Y-Point</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 sm:px-9 sm:py-4 rounded-full border border-white/30 hover:border-white bg-black/40 backdrop-blur-md font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-white transition-all font-medium hover:bg-black/60"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>
      </div>
    </PhotoStage>
  );
}
