"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroBento() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Responsive Transforms
  // On mobile, video starts wider (84vw) so it doesn't look like a tiny slit surrounded by empty space.
  // On desktop / big screens, video starts at a refined 28vh height and 40vw width with capped typography,
  // preventing the video from attaching or sticking to the text on large or wide monitors.
  const videoHeight = useTransform(scrollYProgress, (v) => {
    const start = isMobile ? 26 : 28;
    return `${start + v * (100 - start)}vh`;
  });
  const videoWidth = useTransform(scrollYProgress, (v) => {
    const start = isMobile ? 84 : 40;
    return `${start + v * (100 - start)}vw`;
  });
  const videoRadius = useTransform(scrollYProgress, (v) => {
    const start = isMobile ? 24 : 48;
    return `${Math.max(0, start * (1 - v * 1.5))}px`;
  });
  
  // Text translates out of the viewport cleanly and dissolves before the video expands to full viewport
  const textTopY = useTransform(scrollYProgress, (v) => `${-v * 55}vh`);
  const textBottomY = useTransform(scrollYProgress, (v) => `${v * 55}vh`);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  
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
      style={{ height: isMobile ? "160vh" : "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Top Typography */}
        <motion.div 
          style={{ y: textTopY, opacity: textOpacity }}
          className="absolute top-[clamp(4.25rem,7.5vh,6rem)] w-full flex justify-center px-4 pointer-events-none select-none z-0"
        >
          <motion.h1 
            variants={letterContainer}
            initial="hidden"
            animate="show"
            className="font-display font-light text-[15vw] sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,8.5vw,8.25rem)] tracking-tighter text-black dark:text-white leading-none flex overflow-hidden"
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
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.4 } }}
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
          className="absolute bottom-[clamp(3.75rem,7vh,5.5rem)] w-full flex flex-col items-center px-4 pointer-events-none select-none z-0"
        >
          <motion.h2 
            variants={letterContainer}
            initial="hidden"
            animate="show"
            className="font-display font-light text-[15vw] sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,8.5vw,8.25rem)] tracking-tighter text-black dark:text-white leading-none flex overflow-hidden"
          >
            {"CAPITAL".split("").map((char, index) => (
              <motion.span key={index} variants={letterAnim} className="inline-block origin-bottom-left">
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }}
            className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] text-black/60 dark:text-white/60 mt-3 sm:mt-5 text-center"
          >
            Translational Science Fund
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
