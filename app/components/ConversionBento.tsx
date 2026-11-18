"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ConversionBento() {
  return (
    <section className="relative bg-white dark:bg-[#030303] py-14 sm:py-24 lg:py-32 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24 lg:space-y-32">
        
        {/* Dual Conversion Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-24">
          
          {/* For Founders */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold">
                For Founders
              </span>
              <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white leading-[1.15] tracking-tight">
                Building something hard?
              </h3>
              <p className="font-sans font-light text-base text-black/70 dark:text-white/70 leading-relaxed max-w-md">
                Tell us what you are working on. We read everything, and we answer — including when the answer is no.
              </p>
              <div className="font-sans font-semibold text-xs uppercase tracking-wider text-black/50 dark:text-white/50 pt-1">
                Initial ticket ₹3–5 Cr · Response in 10 days
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-3 rounded-full bg-black dark:bg-white px-7 py-4 text-xs sm:text-sm font-sans uppercase tracking-wider text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all w-max font-semibold"
              >
                <span>Apply for funding</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* For Institutions */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold">
                For Partners
              </span>
              <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white leading-[1.15] tracking-tight">
                Deep tech decade.
              </h3>
              <p className="font-sans font-light text-base text-black/70 dark:text-white/70 leading-relaxed max-w-md">
                We work with institutions, corporates and co-investors who want considered exposure to research-led ventures.
              </p>
              <div className="font-sans font-semibold text-xs uppercase tracking-wider text-black/50 dark:text-white/50 pt-1">
                Category II AIF · Private placement
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
              <Link
                href="/institutional"
                className="group inline-flex items-center gap-3 rounded-full border border-black/20 dark:border-white/20 bg-transparent px-7 py-4 text-xs sm:text-sm font-sans uppercase tracking-wider text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all w-max font-semibold"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
