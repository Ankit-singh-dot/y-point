"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ApplySection() {
  const whatWeLookFor = [
    {
      num: "01",
      title: "Early-stage ambition",
      description: "Pre-seed and seed-stage ventures originating from academic research, labs, or deep technical innovation.",
    },
    {
      num: "02",
      title: "Technology depth",
      description: "Typically TRL 4–7, with validated proof-of-concept and characterisation beyond theoretical science.",
    },
    {
      num: "03",
      title: "A meaningful market",
      description: "A clearly defined problem, large addressable market, and credible industrial customer pull.",
    },
    {
      num: "04",
      title: "A capable team",
      description: "Founders with deep technical expertise, domain authority, and unyielding commitment to execute.",
    },
    {
      num: "05",
      title: "A path to commercialisation",
      description: "A thoughtful roadmap for pilot validation, product development, defensible IP, and customer adoption.",
    },
  ];

  return (
    <section id="apply" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 overflow-visible">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* 1. EVALUATION CRITERIA: STACKING CARDS */}
        <div className="mb-24 sm:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-5 mb-10 sm:mb-14">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                Evaluation Criteria
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-[#0A0A0A] dark:text-white tracking-tight">
                What We Look For
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500 tracking-wider">
              01 → 05
            </span>
          </div>

          {/* Stacking Cards Container */}
          <div className="space-y-8 sm:space-y-12">
            {whatWeLookFor.map((item, idx) => (
              <div
                key={item.num}
                className="sticky transition-all duration-300"
                style={{
                  top: `calc(80px + ${idx * 20}px)`,
                  zIndex: idx + 1,
                }}
              >
                <div className="relative w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6 sm:p-10 lg:p-12 overflow-hidden backdrop-blur-xl">
                  {/* Subtle Background Watermark Number */}
                  <div className="absolute right-4 sm:right-12 -bottom-2 sm:-bottom-8 font-mono text-6xl sm:text-8xl lg:text-9xl font-extralight text-black/[0.04] dark:text-white/[0.04] select-none pointer-events-none">
                    {item.num}
                  </div>

                  <div className="relative z-10 max-w-3xl space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3] tracking-[0.22em] uppercase">
                        {item.num}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700">·</span>
                      <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                        Criterion {idx + 1} of {whatWeLookFor.length}
                      </span>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="font-display font-light text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans font-light text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Visual Progress Indicator */}
                    <div className="pt-2 flex items-center gap-2">
                      {whatWeLookFor.map((_, dotIdx) => (
                        <div
                          key={dotIdx}
                          className={`h-1.5 rounded-full transition-all ${
                            dotIdx === idx
                              ? "w-8 bg-[#0D7377] dark:bg-[#00E5A3]"
                              : dotIdx < idx
                              ? "w-3 bg-zinc-300 dark:bg-zinc-700"
                              : "w-3 bg-zinc-200 dark:bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. DIRECT PITCH SUBMISSION */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] p-8 sm:p-12 lg:p-14 space-y-8 shadow-sm">
          <div className="space-y-3 border-b border-black/10 dark:border-white/10 pb-6">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Direct Pitch Channel
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white tracking-tight">
              Pitch Directly to the Investment Team
            </h3>
            <p className="font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              We evaluate deeptech ventures through direct technical diligence rather than automated form screens. Send your deck and validation data directly to our investment desk.
            </p>
          </div>

          {/* Recommended Inclusions */}
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Recommended Inclusions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 space-y-2">
                <span className="font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] font-bold">01 · Pitch Deck</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Problem statement, target customer segments, commercial roadmap, and funding requirement.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 space-y-2">
                <span className="font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] font-bold">02 · Technology Validation</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Current TRL level (TRL 4–7 preferred), bench test results, prototypes, patent filings, or published papers.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 space-y-2">
                <span className="font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] font-bold">03 · Founding Team</span>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  Scientific background, technical domain authority, and current full-time commitment.
                </p>
              </div>
            </div>
          </div>

          {/* CTA & Confidentiality Notice */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-black/5 dark:border-white/5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#0A0A0A] dark:text-white">
                <Mail className="h-4 w-4 text-[#0D7377] dark:text-[#00E5A3]" />
                <span>info@y-point.vc</span>
              </div>
              <p className="text-xs text-zinc-500 font-light">
                Reviewed directly by our investment diligence partners · Response within 10 business days.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@y-point.vc&su=Y-Point%20Venture%20Pitch%20Submission"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black text-white hover:bg-[#0D7377] dark:bg-white dark:text-black dark:hover:bg-[#00E5A3] font-sans text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.02] shadow-sm shrink-0"
              >
                <span>Compose in Gmail</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:info@y-point.vc?subject=Y-Point%20Venture%20Pitch%20Submission"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-black/15 dark:border-white/15 text-[#0A0A0A] dark:text-white hover:border-[#0D7377] dark:hover:border-[#00E5A3] font-sans text-xs uppercase tracking-wider font-semibold transition-all shrink-0"
                title="Open default email app"
              >
                <span>Default Mail App</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Footer Navigation */}
        <div className="mt-20 border-t border-black/10 dark:border-white/10 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
            <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
              NEXT SECTIONS:
            </span>
            <div className="flex items-center gap-6">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-[#00E5A3] transition-colors"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/team"
                className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-[#00E5A3] transition-colors"
              >
                <span>Investment Team</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-[#00E5A3] transition-colors"
              >
                <span>Contact &amp; Inboxes</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
