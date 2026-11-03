"use client";

import React from "react";
import { PhotoStage } from "./PhotoHero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeClosingCta() {
  return (
    <PhotoStage photo="entranceWall" layout="top" minHeight="min(90svh, 900px)" paddingTop="clamp(3.5rem, 6vw, 5rem)" paddingBottom="clamp(3.5rem, 6vw, 5rem)">
      <div className="space-y-6">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#00E5A3] font-semibold">
          Pitch to us
        </div>
        <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-white">
          Building something that starts with science?
        </h2>

        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <Link
            href="/apply"
            className="group px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white text-black hover:bg-[#00E5A3] font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-colors duration-300 flex items-center gap-2"
          >
            <span>Pitch to Y-Point</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-3.5 sm:px-9 sm:py-4 rounded-full border border-white/30 hover:border-white bg-black/20 backdrop-blur-sm font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-white transition-colors font-medium"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>
      </div>
    </PhotoStage>
  );
}
