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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">



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
                  {/* Portrait: small beside the name on phones (the source photos are ~300px wide), full-width from md up */}
                  <div className="flex items-center gap-4 p-6 pb-0 md:block md:p-0">
                    <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl bg-black/5 md:w-full md:rounded-none">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 767px) 96px, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 hidden bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 md:block" />
                      <div className="absolute bottom-3 left-4 right-4 hidden text-white md:block">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 block">
                          Y-Point Investment Team
                        </span>
                      </div>
                    </div>
                    <div className="md:hidden">
                      <h3 className="font-display font-medium text-xl text-[#0A0A0A] dark:text-white">{member.name}</h3>
                      <div className="font-sans text-xs text-[#0D7377] dark:text-[#00E5A3] font-semibold mt-1">{member.role}</div>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="p-6 space-y-3">
                    <div className="hidden md:block">
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
