"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IITBCampusPinterestGallery() {
  return (
    <section className="relative z-10 py-20 sm:py-28 bg-[#FBFBFB] dark:bg-[#07090e] border-t border-black/[0.08] dark:border-white/[0.08] overflow-hidden">
      
      {/* Subtle IIT Bombay Official Crest Watermark in Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none opacity-[0.035] dark:opacity-[0.045] w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px]">
        <Image
          src="/iitb/iitb-logo.webp"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Section Header: Institutional Alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Institutional Anchor · SINE IIT Bombay
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl text-[#0A0A0A] dark:text-white tracking-tight leading-[1.12]">
              Rooted in India&apos;s premier research institution.
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Y-Point is the venture capital arm of SINE, IIT Bombay. We invest directly where breakthrough science and engineering form the foundation of scalable, commercial businesses.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] hover:underline font-semibold"
            >
              <span>Our Institutional Connection</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Smart Pinterest-style Visual Mosaic (Focused on IIT Bombay & Investment) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Main Gate — Institutional Foundation */}
          <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
              <Image
                src="/iitb/main-gate.webp"
                alt="Main Gate, IIT Bombay"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-mono text-white/90">
                IIT BOMBAY
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 font-semibold block">
                  Institutional Heritage
                </span>
                <h3 className="font-sans font-medium text-lg leading-snug">
                  The Main Gate, Powai
                </h3>
                <p className="font-sans text-xs text-white/75 leading-relaxed">
                  Decades of world-class science, faculty networks, and engineering leadership.
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-black/5 dark:border-white/5 space-y-1 font-sans">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                Foundational Integrity
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Direct structural relationship with IIT Bombay providing continuous technical deal flow and diligence depth.
              </p>
            </div>
          </div>

          {/* Card 2: Campus Corridors — The Translational Pipeline */}
          <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
              <Image
                src="/iitb/campus-lawn.webp"
                alt="IIT Bombay Research Corridors"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-mono text-white/90">
                TRANSLATION
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 font-semibold block">
                  From Lab to Industry
                </span>
                <h3 className="font-sans font-medium text-lg leading-snug">
                  Academic &amp; Research Corridors
                </h3>
                <p className="font-sans text-xs text-white/75 leading-relaxed">
                  Translating proprietary laboratory intellectual property into commercial products.
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-black/5 dark:border-white/5 space-y-1 font-sans">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                Deeptech Diligence
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Evaluating technology readiness, characterisation data, and commercial milestones alongside domain experts.
              </p>
            </div>
          </div>

          {/* Card 3: Bronze Crest Plaque — SINE Venture Capital Arm */}
          <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
              <Image
                src="/iitb/crest-plaque.webp"
                alt="IIT Bombay Historic Bronze Crest Plaque"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-mono text-white/90">
                SINE IIT BOMBAY
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 font-semibold block">
                  ज्ञानं परमं ध्येयम्
                </span>
                <h3 className="font-sans font-medium text-lg leading-snug">
                  SINE Venture Capital Arm
                </h3>
                <p className="font-sans text-xs text-white/75 leading-relaxed">
                  Two decades of incubating category leaders. Y-Point writes the pre-seed and seed cheques.
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-black/5 dark:border-white/5 space-y-1 font-sans">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
                Category II AIF
              </span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Backing founders addressing meaningful challenges with ₹3–5 Cr initial investment and follow-on reserves.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
