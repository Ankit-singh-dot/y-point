"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroBento() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Creative Scroll Transforms
  // Video starts as a cinematic slit/pill in the center and expands to full screen
  const videoHeight = useTransform(scrollYProgress, [0, 1], ["30vh", "100vh"]);
  const videoWidth = useTransform(scrollYProgress, [0, 1], ["40vw", "100vw"]);
  const videoRadius = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);
  
  // Text translates out of the viewport to make way for the video
  const textTopY = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);
  const textBottomY = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#f4f4f5] dark:bg-[#030303]" // Using a very soft premium gray-white for light mode
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Top Typography */}
        <motion.div 
          style={{ y: textTopY, opacity: textOpacity }}
          className="absolute top-[12vh] w-full flex justify-center px-4"
        >
          <h1 className="font-display font-light text-6xl sm:text-8xl md:text-[9vw] tracking-tighter text-black dark:text-white leading-none">
            Y-POINT
          </h1>
        </motion.div>

        {/* Center Expanding Cinematic Video */}
        <motion.div 
          style={{ 
            height: videoHeight,
            width: videoWidth,
            borderRadius: videoRadius,
          }}
          className="relative z-10 overflow-hidden shadow-2xl bg-black"
        >
          <video
            src="/Y-Point_Film_v2_kinetic_draft.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90" 
          />
        </motion.div>

        {/* Bottom Typography */}
        <motion.div 
          style={{ y: textBottomY, opacity: textOpacity }}
          className="absolute bottom-[12vh] w-full flex flex-col items-center px-4"
        >
          <h2 className="font-display font-light text-6xl sm:text-8xl md:text-[9vw] tracking-tighter text-black dark:text-white leading-none">
            CAPITAL
          </h2>
          <p className="font-sans font-medium text-[10px] sm:text-xs uppercase tracking-[0.4em] text-black/40 dark:text-white/40 mt-6">
            Translational Science Fund
          </p>
        </motion.div>

      </div>
    </section>
  );
}
