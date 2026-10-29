"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  responsibility: string;
  bullets: string[];
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Shaji Varghese",
      role: "Managing Partner, Y-Point; CEO, SINE IIT Bombay",
      image: "/shaji_d2e4ea2a32.webp",
      responsibility: "Oversees fund governance, institutional incubation, and LP syndication.",
      bullets: [
        "30+ years in private equity and venture capital (Partner at BTS India PE, senior roles at GVFL & KVCF).",
        "CEO of SINE, overseeing incubation and institutional translation for 220+ deeptech ventures.",
        "CFA (India), MBA, B.Tech.",
      ],
    },
    {
      name: "Saurabh Jain",
      role: "Partner / Fund Manager",
      image: "/Saurabh_Jain_d1169fdf3d.webp",
      responsibility: "Leads semiconductors, computing, and industrial hardware diligence and portfolio support.",
      bullets: [
        "10+ years early-stage investing (ex-Refex Capital, Tracxn); evaluated 400+ deeptech opportunities.",
        "Led investments in chip design, photonics, and robotics through TRL 4–7 translation.",
        "B.Tech, IIT Kharagpur.",
      ],
    },
    {
      name: "Saurabh Singh",
      role: "Partner / Investment Manager",
      image: "/Saurabh_Singh_67047a2afb.webp",
      responsibility: "Operator-led technical diligence, material science, and clean climate tech sourcing.",
      bullets: [
        "Former deeptech founder (3 ventures) with direct operational manufacturing and factory floor experience.",
        "Consulted on supply chains and commercial manufacturing economics at PwC.",
        "B.Tech, BIT Mesra.",
      ],
    },
    {
      name: "Jay Dhadhal",
      role: "Partner / Senior Analyst",
      image: "/Jay Dhadhal.webp",
      responsibility: "Manages SEBI AIF compliance, fund operations, and institutional LP diligence reporting.",
      bullets: [
        "Evaluated 250+ deeptech deals and worked on institutional venture investments at GVFL.",
        "Manages statutory reporting for SIDBI, SBI, and Category II AIF regulatory frameworks.",
        "CFA Level 2 and CAIA Level 1 candidate.",
      ],
    },
  ];

  return (
    <section id="team" className="relative py-24 sm:py-32 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white overflow-hidden">
      {/* Subtle IIT Bombay Crest Watermark in Background */}
      <div
        className="absolute -right-28 top-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px]"
        aria-hidden="true"
      >
        <Image
          src="/iitb/iitb-logo.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* SUBTLE BREADCRUMB HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Team
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              Fund Management &amp; Leadership
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            SINE IIT BOMBAY INVESTMENT ADVISORS
          </div>
        </div>

        {/* HERO TITLE & INTRO WITH SINE ANCHOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              A team for technologically ambitious founders.
            </h1>
            <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
              Y-Point&apos;s investment approach combines investment judgment, technology evaluation and an understanding of the challenges involved in building innovation-led businesses.
            </p>
          </div>

          {/* Institutional Anchor Badge */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] space-y-3">
              <div className="flex items-center gap-2">
                <div className="relative h-4 w-4 shrink-0">
                  <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                  SINE IIT Bombay
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-800 dark:text-zinc-200 font-bold">
                ज्ञानं परमं ध्येयम्
              </div>
              <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Operating directly from the 5th Floor of the RBTIC Building at IIT Bombay, bridging campus science and early-stage capital.
              </p>
            </div>
          </div>
        </div>

        {/* 1. FUND MANAGEMENT TEAM GRID */}
        <div className="mb-24 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Fund Management
            </span>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Leadership Profiles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0D7377] hover:shadow-lg"
              >
                <div>
                  {/* Portrait Photograph */}
                  <div className="relative aspect-[4/5] w-full bg-black/5 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 block">
                        Y-Point Investment Team
                      </span>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-display font-medium text-xl text-[#0A0A0A] dark:text-white">
                        {member.name}
                      </h3>
                      <div className="font-sans text-xs text-[#0D7377] dark:text-[#00E5A3] font-semibold mt-1">
                        {member.role}
                      </div>
                    </div>

                    <p className="font-sans italic text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed border-l-2 border-[#0D7377] pl-3 py-0.5">
                      &ldquo;{member.responsibility}&rdquo;
                    </p>

                    <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-2">
                      {member.bullets.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-sans font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          <span className="text-[#0D7377] font-bold mt-0.5">·</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 px-6 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5 font-mono text-[10px] text-zinc-400">
                  Verified Institutional Profile
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. INVESTMENT COMMITTEE NOTICE (Direct from Document) */}
        <div className="relative p-8 sm:p-12 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] space-y-4 mb-24 overflow-hidden shadow-sm">
          {/* Transparent Crest Watermark - Zero hard cutoff edges */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 pointer-events-none select-none opacity-[0.035] dark:opacity-[0.045]">
            <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
          </div>

          <div className="relative space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Governance &amp; Evaluation
            </span>
            <h2 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Investment Committee
            </h2>
          </div>
          <p className="relative font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            Our Investment Committee brings together experience across investment management, technology-intensive industries and entrepreneurship.
          </p>
          <div className="relative pt-2 flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <span>SINE IIT Bombay Governance</span>
            <span>·</span>
            <span>Profiles of confirmed committee members will be published following formal institutional approval.</span>
          </div>
        </div>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
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
