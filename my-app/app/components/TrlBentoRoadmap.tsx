"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { TRL_STAGES } from "./TrlGraphic";

export default function TrlBentoRoadmap() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to active stage index (0 to 3)
  const activeIdxFloat = useTransform(scrollYProgress, [0, 1], [0, 3.99]);

  // Sync scroll with state
  useEffect(() => {
    return activeIdxFloat.on("change", (v) => {
      setActiveIdx(Math.min(3, Math.floor(v)));
    });
  }, [activeIdxFloat]);

  const handleStageSelect = (idx: number) => {
    setActiveIdx(idx);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const targetScroll = containerTop + (idx / 3.5) * (containerHeight - window.innerHeight);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white dark:bg-[#030303]"
      style={{ height: isMobile ? "250vh" : "400vh" }}
    >
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          
          {/* Header & Interactive Scrubber Pills */}
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/60 font-semibold">
                Translational Continuum · TRL 1–9
              </span>
            </div>

            {/* Stage Selector Pills (Touch-enabled for mobile & desktop) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {TRL_STAGES.map((stage, idx) => (
                <button
                  key={stage.range}
                  onClick={() => handleStageSelect(idx)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs sm:text-xs uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                    activeIdx === idx
                      ? "bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm"
                      : "bg-black/5 text-black/70 dark:bg-white/5 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10"
                  }`}
                >
                  {stage.range}
                  {stage.isYPointActive && (
                    <span className="ml-1.5 inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-start">
            
            {/* Left: TRL Stage Number Display */}
            <div className="lg:col-span-5 flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="font-display font-light text-6xl sm:text-7xl lg:text-[7rem] tracking-tighter text-black dark:text-white leading-none">
                      {TRL_STAGES[activeIdx].range}
                    </h3>
                    {TRL_STAGES[activeIdx].isYPointActive && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                          Y-Point Entry Point
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="font-display font-light text-xl sm:text-2xl lg:text-3xl text-black/80 dark:text-white/80">
                    {TRL_STAGES[activeIdx].label}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Detailed Content */}
            <div className="lg:col-span-7 relative w-full lg:border-l lg:border-black/10 lg:dark:border-white/10 lg:pl-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="space-y-6 sm:space-y-8"
                >
                  <p className="font-sans font-light text-base sm:text-lg lg:text-xl text-black/85 dark:text-white/85 leading-relaxed">
                    {TRL_STAGES[activeIdx].detail}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-black/[0.02] dark:bg-white/[0.02] p-4 sm:p-6 rounded-2xl border border-black/5 dark:border-white/5">
                    <div className="space-y-1">
                      <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">Dominant Risk</span>
                      <span className="font-sans font-medium text-sm text-black dark:text-white block">{TRL_STAGES[activeIdx].risk}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">Capital Fit</span>
                      <span className="font-sans font-medium text-sm text-black dark:text-white block">{TRL_STAGES[activeIdx].capital}</span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-black/5 dark:border-white/5">
                    <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">Who Invests Here</span>
                    <p className="font-sans font-light text-sm text-black/70 dark:text-white/70">
                      {TRL_STAGES[activeIdx].whoInvests}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
