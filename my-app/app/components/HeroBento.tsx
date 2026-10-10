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
  
  // Letter animation variants
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterAnim = {
    hidden: { opacity: 0, y: 100, rotate: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#f4f4f5] dark:bg-[#030303]" 
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Top Typography */}
        <motion.div 
          style={{ y: textTopY, opacity: textOpacity }}
          className="absolute top-[12vh] w-full flex justify-center px-4"
        >
          <motion.h1 
            variants={letterContainer}
            initial="hidden"
            animate="show"
            className="font-display font-light text-6xl sm:text-8xl md:text-[9vw] tracking-tighter text-black dark:text-white leading-none flex overflow-hidden"
          >
            {"Y-POINT".split("").map((char, index) => (
              <motion.span key={index} variants={letterAnim} className="inline-block origin-bottom-left">
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Center Expanding Cinematic Video */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 } }}
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
          <motion.h2 
            variants={letterContainer}
            initial="hidden"
            animate="show"
            className="font-display font-light text-6xl sm:text-8xl md:text-[9vw] tracking-tighter text-black dark:text-white leading-none flex overflow-hidden"
          >
            {"CAPITAL".split("").map((char, index) => (
              <motion.span key={index} variants={letterAnim} className="inline-block origin-bottom-left">
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] } }}
            className="font-sans font-medium text-[10px] sm:text-xs uppercase tracking-[0.4em] text-black/40 dark:text-white/40 mt-6"
          >
            Translational Science Fund
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
