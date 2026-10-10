"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FOCUS_AREAS_DATA } from "./FocusAreasGrid";

export default function FocusAreasBento() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="focus-areas" className="relative bg-white dark:bg-[#030303] py-32 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="font-sans text-xs uppercase tracking-widest text-white/40 font-medium">
              Where We Invest
            </div>
            <h2 className="font-display font-light text-4xl sm:text-6xl tracking-tight text-black dark:text-white leading-tight">
              Six sectors. One common condition.
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-black/50 dark:text-white/50 leading-relaxed max-w-lg">
              The hard part is the technology, and it has been proven but not yet productised. No single sector will exceed roughly a fifth of the portfolio. We are building a concentrated fund, not an index.
            </p>
          </div>
          <Link
            href="/focus-areas"
            className="font-sans text-xs uppercase tracking-[0.2em] text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors border-b border-black/20 dark:border-white/20 pb-1"
          >
            Explore All Theses
          </Link>
        </div>

        {/* Elegant Minimalist List Layout */}
        <div className="flex flex-col border-t border-white/10">
          {FOCUS_AREAS_DATA.map((area, idx) => (
            <Link
              key={area.id}
              href={`/focus-areas/${area.id}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-black/10 dark:border-white/10 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
            >
              {/* Text Content */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 relative z-10 w-full">
                <span className="font-sans font-light text-xs text-black/30 dark:text-white/30 tracking-widest w-12">
                  0{idx + 1}
                </span>
                <div className="flex-1 space-y-4">
                  <h3 className="font-display font-light text-3xl sm:text-5xl text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-black/40 dark:text-white/40 max-w-2xl">
                    "{area.thesis}"
                  </p>
                </div>
                <div className="hidden lg:block w-64">
                  <span className="font-sans font-light text-xs text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors uppercase tracking-[0.1em]">
                    Read Thesis —
                  </span>
                </div>
              </div>

              {/* Floating Image Reveal on Hover (Desktop) */}
              <div 
                className={`absolute right-32 top-1/2 -translate-y-1/2 w-[400px] aspect-[4/3] pointer-events-none z-0 hidden lg:block overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredIndex === idx ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 -rotate-2"
                }`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover opacity-60 mix-blend-screen"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
