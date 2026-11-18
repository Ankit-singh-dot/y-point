"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ShimmerImage from "./ShimmerImage";

interface Advisor {
  name: string;
  role: string;
  highlight: string;
  image: string;
  tags: string[];
}

const ADVISORS: Advisor[] = [
  {
    name: "Dr. Sharad Kumar Saraf",
    role: "Chairman & MD, Technocraft Group",
    highlight: "Expert in industrial manufacturing, precision engineering & global market operations.",
    image: "/advisors/sharad-saraf.webp",
    tags: ["Industrial Manufacturing", "IITB BoG Member"],
  },
  {
    name: "Ashank Desai",
    role: "Founder & Chairman, Mastek",
    highlight: "IT industry veteran, founding member of NASSCOM & institutional architect.",
    image: "/advisors/ashank-desai.webp",
    tags: ["Enterprise Software", "SINE Co-founder"],
  },
  {
    name: "Dipak Gupta",
    role: "Ex- MD & CEO, Kotak Mahindra Bank",
    highlight: "Non-Executive Director & Chairman, Kotak Alternate Asset Managers.",
    image: "/advisors/dipak-gupta.webp",
    tags: ["Banking & Capital Markets", "Alternate Assets"],
  },
  {
    name: "Ramesh Mangaleswaran",
    role: "Senior Partner Emeritus, McKinsey & Company",
    highlight: "Global strategy authority, operational transformation & institutional governance leader.",
    image: "/advisors/ramesh-mangaleswaran.webp",
    tags: ["Global Strategy", "Corporate Governance"],
  },
  {
    name: "Kashyap Deorah",
    role: "Founder & CEO, HyperTrack",
    highlight: "Silicon Valley & India tech builder; serial entrepreneur with multiple successful exits.",
    image: "/advisors/kashyap-deorah.webp",
    tags: ["Deeptech Operator", "Serial Entrepreneur"],
  },
  {
    name: "Vishal Gupta",
    role: "Founder & ex-CEO, Seclore",
    highlight: "Cybersecurity pioneer with global tier-1 enterprise adoption and deep software IP.",
    image: "/advisors/vishal-gupta.webp",
    tags: ["Cybersecurity", "Enterprise Scale"],
  },
];

export default function AdvisorsSection() {
  return (
    <section id="advisors" className="relative z-10 py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#05070a] overflow-hidden">
      {/* Subtle ambient quantum glow in background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 -right-48 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-20 dark:opacity-30" 
        style={{ background: "radial-gradient(circle, #00E5A3 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Advisors &amp; Mentors · Fund / SINE
            </div>

            <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
              An Integrated Advisory Network.
            </h2>

            <p className="font-sans font-light text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Supporting fund strategy, portfolio guidance, and deeptech venture building through the combined strengths of Y-Point and SINE IIT Bombay.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/15 bg-[#F9F9F8] dark:bg-[#0c0f16] hover:border-[#0D7377] dark:hover:border-[#00E5A3] text-xs font-mono uppercase tracking-wider text-[#0A0A0A] dark:text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
            >
              <span>Pitch to Us</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#0D7377] dark:text-[#00E5A3]" />
            </Link>
          </div>
        </div>

        {/* 6-Card Advisors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ADVISORS.map((advisor, idx) => (
            <div
              key={advisor.name}
              className="group relative rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] p-6 sm:p-7 flex flex-col justify-between hover:border-[#0D7377] dark:hover:border-[#00E5A3] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl overflow-hidden"
            >
              {/* Subtle hover gradient sweep */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 right-0 w-36 h-36 bg-radial from-[#00E5A3]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
              />

              <div className="space-y-5">
                {/* Top Row: Portrait + Index Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 rounded-full overflow-hidden p-0.5 ring-2 ring-black/10 dark:ring-white/10 group-hover:ring-[#0D7377] dark:group-hover:ring-[#00E5A3] transition-all duration-300 shadow-md bg-white dark:bg-black">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <ShimmerImage
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 640px) 80px, 88px"
                      />
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3] tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Identity & Credentials */}
                <div className="space-y-2">
                  <h3 className="font-display font-medium text-xl sm:text-2xl text-[#0A0A0A] dark:text-white leading-snug group-hover:text-[#0D7377] dark:group-hover:text-[#00E5A3] transition-colors">
                    {advisor.name}
                  </h3>
                  <p className="font-sans font-medium text-xs sm:text-sm text-[#0D7377] dark:text-[#00E5A3]/90 leading-snug">
                    {advisor.role}
                  </p>
                  <p className="font-sans font-light text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {advisor.highlight}
                  </p>
                </div>
              </div>

              {/* Tag Capsules */}
              <div className="pt-5 mt-5 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                {advisor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-12 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Explore Portfolio</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/apply"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Pitch to Y-Point</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
