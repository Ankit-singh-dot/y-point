"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOCUS_AREAS_DATA } from "./FocusAreasGrid";

export default function FocusAreasBento() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="focus-areas" className="relative bg-white dark:bg-[#030303] py-16 sm:py-24 lg:py-32 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-10">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-black/50 dark:text-white/40 font-medium">
              Where We Invest
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black dark:text-white leading-[1.1]">
              Six sectors. One common condition.
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/50 leading-relaxed max-w-lg">
              The hard part is the technology, and it has been proven but not yet productised. No single sector will exceed roughly a fifth of the portfolio. We are building a concentrated fund, not an index.
            </p>
          </div>
          <Link
            href="/focus-areas"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-black/80 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors border-b border-black/20 dark:border-white/20 pb-1 w-max"
          >
            <span>Explore All Theses</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile & Tablet Visual Card Grid (< lg) */}
        {/* On mobile where hover is impossible, images are beautifully utilized directly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {FOCUS_AREAS_DATA.map((area, idx) => {
            const Icon = area.icon;
            return (
              <Link
                key={area.id}
                href={`/focus-areas/${area.id}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-5 transition-all active:scale-[0.99]"
              >
                {/* Visual Header with Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black mb-5">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover opacity-85 mix-blend-screen transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Category Number & Icon Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-sans font-medium text-[10px] tracking-widest text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      0{idx + 1}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  {/* Headline Tag */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-white/90 font-medium line-clamp-1">
                      {area.headline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-display font-light text-xl sm:text-2xl text-black dark:text-white leading-tight">
                      {area.title}
                    </h3>
                    <p className="font-sans font-light text-xs sm:text-sm text-black/60 dark:text-white/60 line-clamp-2 leading-relaxed">
                      &ldquo;{area.thesis}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-sans text-black/50 dark:text-white/50">
                    <span className="text-[10px] uppercase tracking-wider">TRL 4–7 Entry</span>
                    <span className="inline-flex items-center gap-1 font-medium text-black dark:text-white uppercase tracking-wider text-[10px]">
                      <span>Read Thesis</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Desktop Editorial List Layout with Floating Hover Image (lg+) */}
        <div className="hidden lg:flex flex-col border-t border-black/10 dark:border-white/10">
          {FOCUS_AREAS_DATA.map((area, idx) => (
            <Link
              key={area.id}
              href={`/focus-areas/${area.id}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex items-center justify-between py-10 border-b border-black/10 dark:border-white/10 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
            >
              {/* Text Content */}
              <div className="flex items-baseline gap-12 relative z-10 w-full">
                <span className="font-sans font-light text-xs text-black/30 dark:text-white/30 tracking-widest w-12 shrink-0">
                  0{idx + 1}
                </span>
                <div className="flex-1 space-y-3">
                  <h3 className="font-display font-light text-4xl xl:text-5xl text-black/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-black/50 dark:text-white/40 max-w-2xl">
                    &ldquo;{area.thesis}&rdquo;
                  </p>
                </div>
                <div className="w-56 shrink-0 text-right">
                  <span className="inline-flex items-center gap-2 font-sans font-light text-xs text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors uppercase tracking-[0.15em]">
                    <span>Read Thesis</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>

              {/* Floating Image Reveal on Hover (Desktop) */}
              <div 
                className={`absolute right-36 top-1/2 -translate-y-1/2 w-[380px] aspect-[16/10] pointer-events-none z-20 overflow-hidden rounded-2xl shadow-2xl bg-black border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredIndex === idx ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 -rotate-2"
                }`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover opacity-80 mix-blend-screen"
                    sizes="380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-sans text-[10px] uppercase tracking-wider text-white/90 font-medium">
                      {area.headline}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
