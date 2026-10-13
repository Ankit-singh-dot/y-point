"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CONTINUUM_STAGES = [
  {
    range: "TRL 1–3",
    tag: "Academia & Grants",
    title: "Fundamental Research",
    focus: "Lab proof-of-concept & scientific papers",
    capital: "Grants (< ₹2 Cr)",
    role: "Pre-Venture (SINE incubation)",
    highlight: false,
  },
  {
    range: "TRL 4–5",
    tag: "✦ Y-Point Entry Point",
    title: "Validation & Prototyping",
    focus: "Validated components & test characterisation",
    capital: "₹3–5 Cr Pre-Seed & Seed",
    role: "First Institutional Cheque",
    highlight: true,
  },
  {
    range: "TRL 6–7",
    tag: "✦ Follow-On Reserve",
    title: "Pilots & Manufacturing",
    focus: "Customer trials & operational qualification",
    capital: "Pre-Series A (₹10–25 Cr)",
    role: "~40% Fund Reserve",
    highlight: true,
  },
  {
    range: "TRL 8–9",
    tag: "Traditional Growth VC",
    title: "Commercial Scale",
    focus: "Repeatable production & market expansion",
    capital: "Series A & Beyond (> ₹25 Cr)",
    role: "Growth Syndication",
    highlight: false,
  },
];

export default function TrlBentoRoadmap() {
  return (
    <section id="trl-continuum" className="relative bg-white dark:bg-[#030303] py-16 sm:py-24 lg:py-28 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Header: Concise & Punchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-10">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60 font-semibold">
              <span>Translational Continuum · TRL 1–9</span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black dark:text-white leading-[1.1]">
              Where We Enter. Where We Bridge.
            </h2>
            <p className="font-sans font-light text-base sm:text-base text-black/70 dark:text-white/60 leading-relaxed max-w-xl">
              Traditional venture capital waits for commercial traction. Y-Point enters at TRL 4–7 where the science is proven and translation begins.
            </p>
          </div>

          <Link
            href="/apply"
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-black/90 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors border-b border-black/20 dark:border-white/20 pb-1 w-max font-medium"
          >
            <span>Apply for TRL 4–7 Capital</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Unified 4-Stage Visual Continuum Track (No 400vh Scroll-jack) */}
        <div className="space-y-4">
          
          {/* Visual Highlight Band */}
          <div className="hidden lg:grid grid-cols-4 gap-4 px-2 text-center text-xs font-mono uppercase tracking-wider">
            <div className="text-black/40 dark:text-white/40">Lab Discovery</div>
            <div className="col-span-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-semibold">
              ← Y-Point Active Investment Zone (TRL 4–7) →
            </div>
            <div className="text-black/40 dark:text-white/40">Market Scale</div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {CONTINUUM_STAGES.map((stage) => (
              <div
                key={stage.range}
                className={`flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-300 relative ${
                  stage.highlight
                    ? "bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04] border-2 border-emerald-500/30 dark:border-emerald-400/30 shadow-[0_4px_30px_rgba(16,185,129,0.06)]"
                    : "bg-black/[0.02] dark:bg-white/[0.02] border border-black/8 dark:border-white/10"
                }`}
              >
                {/* Top Badge & TRL Range */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display font-light text-2xl sm:text-3xl tracking-tight text-black dark:text-white">
                      {stage.range}
                    </span>
                    <span
                      className={`font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        stage.highlight
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                          : "bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50"
                      }`}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  {/* Title & Core Focus */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="font-display font-light text-lg sm:text-xl text-black dark:text-white leading-snug">
                      {stage.title}
                    </h3>
                    <p className="font-sans font-light text-xs sm:text-sm text-black/60 dark:text-white/60 leading-relaxed">
                      {stage.focus}
                    </p>
                  </div>
                </div>

                {/* Bottom Key Metrics Dock */}
                <div className="pt-5 mt-5 border-t border-black/5 dark:border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="text-black/45 dark:text-white/45">Capital Fit</span>
                    <span className="font-semibold text-black/90 dark:text-white/90">{stage.capital}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="text-black/45 dark:text-white/45">Role</span>
                    <span className="font-medium text-black/75 dark:text-white/75">{stage.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
