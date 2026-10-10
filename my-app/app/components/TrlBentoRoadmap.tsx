"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, HelpCircle } from "lucide-react";
import { TRL_STAGES } from "./TrlGraphic";
import Link from "next/link";

export default function TrlBentoRoadmap() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to active stage index (0 to 3)
  const activeIdxFloat = useTransform(scrollYProgress, [0, 1], [0, 3.99]);
  
  const [activeIdx, setActiveIdx] = useState(0);

  // Sync scroll with state for framer motion AnimatePresence
  React.useEffect(() => {
    return activeIdxFloat.onChange((v) => {
      setActiveIdx(Math.floor(v));
    });
  }, [activeIdxFloat]);

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white dark:bg-[#030303]">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 sm:px-12">
        
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Huge TRL Number Display (Scroll Linked) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="font-sans text-xs uppercase tracking-widest text-black/40 dark:text-white/40 font-medium flex items-center gap-4">
              <span>Translational Continuum</span>
              <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
            </div>
            
            <div className="h-[450px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="absolute inset-0 flex flex-col justify-start pt-4"
                >
                  <h3 className="font-display font-light text-6xl sm:text-8xl lg:text-[7rem] tracking-tighter text-black dark:text-white leading-none mt-2">
                    {TRL_STAGES[activeIdx].range}
                  </h3>
                  <p className="mt-6 font-display font-light text-xl sm:text-3xl text-black/60 dark:text-white/60">
                    {TRL_STAGES[activeIdx].label}
                  </p>
                  
                  {TRL_STAGES[activeIdx].isYPointActive && (
                    <div className="mt-12 inline-flex items-center gap-3 w-max">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-black dark:bg-white"></span>
                      </span>
                      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-black dark:text-white">
                        Active Entry Point
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Detailed Minimal Content (Scroll Linked) */}
          <div className="lg:col-span-7 relative h-[450px] w-full border-l border-black/10 dark:border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="absolute inset-0 flex flex-col justify-start pt-4 pl-8 lg:pl-16 pr-4"
              >
                <div className="space-y-12">
                  <p className="font-sans font-light text-lg sm:text-2xl text-black/80 dark:text-white/80 leading-relaxed max-w-2xl">
                    {TRL_STAGES[activeIdx].detail}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 block">Dominant Risk</span>
                      <span className="font-sans font-medium text-sm sm:text-base text-black dark:text-white block">{TRL_STAGES[activeIdx].risk}</span>
                    </div>
                    <div className="space-y-2">
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 block">Capital Fit</span>
                      <span className="font-sans font-medium text-sm sm:text-base text-black dark:text-white block">{TRL_STAGES[activeIdx].capital}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-8 border-t border-black/5 dark:border-white/5">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 block">Who Invests Here</span>
                    <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60 max-w-xl">
                      {TRL_STAGES[activeIdx].whoInvests}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
