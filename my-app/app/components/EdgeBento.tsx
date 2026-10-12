"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, AlertOctagon } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PILLARS_DATA } from "./EdgePillars";

export default function EdgeBento() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
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
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <div className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-black/50 dark:text-white/40 font-medium">
            The Y-Point Edge
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-7xl tracking-tighter text-black dark:text-white leading-[1.1]">
            Capital is the least differentiated thing we bring.
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed max-w-2xl">
            Deep tech companies do not fail because a term sheet was two crore too small. They fail because a qualification cycle took eighteen months instead of six. Two decades of watching those failure modes happen is what we bring.
          </p>
        </div>
      </div>

      {/* Sticky Stacking Cards Section */}
      <div className="relative" style={{ height: isMobile ? "260vh" : "400vh" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-14 sm:pt-20 px-4 sm:px-8 lg:px-12">
          
          <div className="relative w-full max-w-5xl h-[68vh] sm:h-[62vh] max-h-[580px] min-h-[360px]">
            {PILLARS_DATA.map((pillar, idx) => {
              
              // Calculate dynamic scale and fade for each card based on scroll progress
              const targetScale = 1 - ((PILLARS_DATA.length - idx) * 0.04);
              const rangeStart = idx * 0.25;
              const rangeEnd = (idx + 1) * 0.25;
              
              const scale = useTransform(
                scrollYProgress,
                [rangeStart, rangeEnd],
                [1, targetScale]
              );
              
              const safeYStart = Math.max(0, rangeStart - 0.25);
              const safeYEnd = Math.max(0.01, rangeStart);
              
              const y = useTransform(
                scrollYProgress,
                [safeYStart, safeYEnd],
                ["100%", "0%"]
              );
              
              const safeOpStart1 = Math.max(0, rangeStart - 0.25);
              const safeOpStart2 = Math.max(0.01, rangeStart);
              const safeOpEnd1 = Math.min(0.99, rangeEnd);
              const safeOpEnd2 = Math.min(1, rangeEnd + 0.1);
              
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
                    top: `calc(${idx * 16}px)`
                  }}
                  className="absolute inset-0 w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-xl p-5 sm:p-10 lg:p-14 flex flex-col justify-between origin-top"
                >
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-light text-3xl sm:text-5xl lg:text-7xl text-black/20 dark:text-white/20">
                        {pillar.num}
                      </span>
                      <div className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white">
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                      </div>
                    </div>

                    <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-black dark:text-white leading-tight max-w-2xl">
                      {pillar.title}
                    </h3>

                    <p className="font-sans font-light text-sm sm:text-base lg:text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-3xl">
                      {pillar.body}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-black/5 dark:border-white/5 flex flex-row items-center justify-between gap-4">
                    <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/50 dark:text-white/50 font-medium">
                      SINE & IIT Bombay
                    </span>
                    <Link
                      href="/platform"
                      className="group inline-flex items-center gap-1.5 font-sans text-xs sm:text-xs uppercase tracking-widest text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors font-semibold"
                    >
                      <span>Read Pillar</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* What We Ask In Return Section */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 py-14 sm:py-24 lg:py-32 border-t border-black/5 dark:border-white/5 bg-white dark:bg-[#030303]">
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-3">
            <AlertOctagon className="h-5 w-5 sm:h-6 sm:w-6 text-black/80 dark:text-white" />
            <h3 className="font-display font-light text-2xl sm:text-4xl lg:text-5xl text-black dark:text-white">
              What We Ask In Return
            </h3>
          </div>
          <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed">
            Unusual, and non-negotiable. We believe obligations run in both directions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          
          <div className="space-y-2 sm:space-y-3 p-4 sm:p-0 rounded-xl bg-black/[0.02] sm:bg-transparent dark:bg-white/[0.02] sm:dark:bg-transparent">
            <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold block">
              01 Bad news early
            </span>
            <p className="font-sans font-light text-sm text-black/80 dark:text-white/80 leading-relaxed">
              We have never once been able to help more by hearing about a problem later.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 p-4 sm:p-0 rounded-xl bg-black/[0.02] sm:bg-transparent dark:bg-white/[0.02] sm:dark:bg-transparent">
            <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold block">
              02 Technical honesty
            </span>
            <p className="font-sans font-light text-sm text-black/80 dark:text-white/80 leading-relaxed">
              Tell us what is not working. We have already assumed something is.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 p-4 sm:p-0 rounded-xl bg-black/[0.02] sm:bg-transparent dark:bg-white/[0.02] sm:dark:bg-transparent">
            <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold block">
              03 Usable reporting
            </span>
            <p className="font-sans font-light text-sm text-black/80 dark:text-white/80 leading-relaxed">
              A short, regular, truthful update beats a polished quarterly deck every time.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 p-4 sm:p-0 rounded-xl bg-black/[0.02] sm:bg-transparent dark:bg-white/[0.02] sm:dark:bg-transparent">
            <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold block">
              04 Respect ecosystem
            </span>
            <p className="font-sans font-light text-sm text-black/80 dark:text-white/80 leading-relaxed">
              Treat the ecosystem as a resource rather than an entitlement. It took two decades to build.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
