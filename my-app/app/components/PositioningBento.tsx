"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PositioningBento() {
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
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], isMobile ? [30, -30] : [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [120, -120]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0.6, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-0 md:min-h-[90vh] w-full bg-white dark:bg-[#030303] overflow-hidden flex items-center justify-center py-16 sm:py-24 lg:py-32"
    >
      {/* Huge Background Typography (Lenval Style) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h2 className="font-display font-light text-[18vw] md:text-[14vw] tracking-[0.2em] text-black/[0.03] dark:text-white/[0.02] whitespace-nowrap">
          THESIS
        </h2>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start">
        
        {/* Left: Minimal Metric or Category */}
        <motion.div 
          style={{ opacity: isMobile ? 1 : opacity }}
          className="md:col-span-4 flex flex-col justify-start pt-2"
        >
          <div className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-black/40 dark:text-white/50 mb-2 font-medium">
            Strategic Premise
          </div>
          <div className="font-display font-light text-2xl sm:text-3xl text-black/80 dark:text-white/80">
            Translational Capital
          </div>
        </motion.div>

        {/* Right: Elegant Typography Content (Software / Editorial Style) */}
        <motion.div 
          style={{ y: y2, opacity: isMobile ? 1 : opacity }}
          className="md:col-span-8 flex flex-col space-y-8 sm:space-y-12"
        >
          <h3 className="font-display font-light text-3xl sm:text-5xl lg:text-7xl leading-[1.15] tracking-tight text-black dark:text-white">
            India produces world-class research and world-class venture capital. Very little connects the two.
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed">
            <p>
              Y-Point invests at the point where a technology stops being a research result and has to become a company. We are the venture capital arm of SINE, the technology business incubator of IIT Bombay, and we write pre-seed and seed cheques into ventures emerging from India's premier research institutions.
            </p>
            <p>
              By the time we invest, the science usually works. What remains is the harder, less celebrated problem: building a manufacturable product, finding a first customer willing to take a risk on an unproven supplier, and surviving the years in between.
            </p>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-sans uppercase tracking-[0.2em] text-black/50 dark:text-white/40">
            <span>Entry: TRL 4–7</span>
            <span>·</span>
            <span>Deep Tech Focus</span>
            <span>·</span>
            <span>SINE IIT Bombay</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
