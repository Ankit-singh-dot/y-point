"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, AlertOctagon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PILLARS_DATA } from "./EdgePillars";

export default function EdgeBento() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white dark:bg-[#030303] border-t border-black/5 dark:border-white/5"
    >
      
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 pt-32 pb-16">
        <div className="max-w-3xl space-y-6">
          <div className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-medium">
            The Y-Point Edge
          </div>
          <h2 className="font-display font-light text-5xl sm:text-7xl tracking-tighter text-black dark:text-white leading-tight">
            Capital is the least differentiated thing we bring.
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed max-w-2xl">
            Deep tech companies do not fail because a term sheet was two crore too small. They fail because a qualification cycle took eighteen months instead of six. Two decades of watching those failure modes happen is what we bring.
          </p>
        </div>
      </div>

      {/* Sticky Stacking Cards Section */}
      <div className="relative h-[400vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
          
          <div className="relative w-full max-w-5xl h-[60vh]">
            {PILLARS_DATA.map((pillar, idx) => {
              
              // Calculate dynamic scale and fade for each card based on scroll progress
              const targetScale = 1 - ((PILLARS_DATA.length - idx) * 0.05);
              const rangeStart = idx * 0.25;
              const rangeEnd = (idx + 1) * 0.25;
              
              const scale = useTransform(
                scrollYProgress,
                [rangeStart, rangeEnd],
                [1, targetScale]
              );
              
              // Ensure ranges are strictly within [0, 1] and strictly increasing to prevent Framer Motion errors
              const safeYStart = Math.max(0, rangeStart - 0.25);
              const safeYEnd = Math.max(0.01, rangeStart); // Ensures safeYEnd > safeYStart
              
              const y = useTransform(
                scrollYProgress,
                [safeYStart, safeYEnd],
                ["100%", "0%"]
              );
              
              const safeOpStart1 = Math.max(0, rangeStart - 0.25);
              const safeOpStart2 = Math.max(0.01, rangeStart);
              const safeOpEnd1 = Math.min(0.99, rangeEnd);
              const safeOpEnd2 = Math.min(1, rangeEnd + 0.1);
              
              // For opacity, we need 4 strictly increasing points.
              // If idx=0, safeOpStart1 and safeOpStart2 would overlap. We'll use a safe dummy array for idx=0.
              // If idx=3, safeOpEnd1 and safeOpEnd2 might overlap.
              const opacityInput = idx === 0 
                ? [0, 0.25, 0.99, 1] 
                : idx === PILLARS_DATA.length - 1 
                  ? [safeOpStart1, safeOpStart2, 0.99, 1] 
                  : [safeOpStart1, safeOpStart2, safeOpEnd1, safeOpEnd2];
              
              const opacity = useTransform(
                scrollYProgress,
                opacityInput,
                [0, 1, 1, 0]
              );

              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.num}
                  style={{
                    scale: idx === PILLARS_DATA.length - 1 ? 1 : scale,
                    y: idx === 0 ? "0%" : y,
                    opacity: idx === 0 ? 1 : opacity,
                    zIndex: idx,
                    top: `calc(${idx * 20}px)`
                  }}
                  className="absolute inset-0 w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-2xl p-8 sm:p-16 flex flex-col justify-between origin-top"
                >
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-light text-5xl sm:text-7xl text-black/20 dark:text-white/20">
                        {pillar.num}
                      </span>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <h3 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white leading-tight max-w-2xl">
                      {pillar.title}
                    </h3>

                    <p className="font-sans font-light text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-3xl">
                      {pillar.body}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40">
                      SINE & IIT Bombay Backed
                    </span>
                    <Link
                      href="/platform"
                      className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors"
                    >
                      <span>Read Pillar</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* What We Ask In Return Section (Appears after scrolling past the stack) */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-12 py-32 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#030303]">
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-3">
            <AlertOctagon className="h-6 w-6 text-black/80 dark:text-white" />
            <h3 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white">
              What We Ask In Return
            </h3>
          </div>
          <p className="font-sans font-light text-sm sm:text-base text-black/50 dark:text-white/50 leading-relaxed">
            Unusual, and non-negotiable. We believe obligations run in both directions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-medium block">
              01 Bad news early
            </span>
            <p className="font-sans font-light text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed">
              We have never once been able to help more by hearing about a problem later.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-medium block">
              02 Technical honesty
            </span>
            <p className="font-sans font-light text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed">
              Tell us what is not working. We have already assumed something is.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-medium block">
              03 Usable reporting
            </span>
            <p className="font-sans font-light text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed">
              A short, regular, truthful update beats a polished quarterly deck every time.
            </p>
          </div>

          <div className="space-y-4">
            <span className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-medium block">
              04 Respect the ecosystem
            </span>
            <p className="font-sans font-light text-sm sm:text-base text-black/80 dark:text-white/80 leading-relaxed">
              Treat the ecosystem as a resource rather than an entitlement. It took two decades to build.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
