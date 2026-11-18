"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCompany {
  id: string;
  name: string;
  sector: string;
  sectorSlug: string;
  color: string;
  tagline: string;
  stage: string;
  tech: string;
  year: string;
  milestone: string;
}

export default function PortfolioSection() {
  const sinePortfolioCompanies: PortfolioCompany[] = [
    {
      id: "sedemac",
      name: "SEDEMAC",
      sector: "Climate & Energy",
      sectorSlug: "climate-cleantech",
      color: "#CA8A04",
      tagline: "Sensorless motor control and powertrain intelligence for millions of vehicles globally.",
      stage: "Commercial / Scaled",
      tech: "Real-time engine control algorithms & power electronics",
      year: "SINE Alum",
      milestone: "Deployed in 10M+ commercial vehicles globally; founded by IIT Bombay faculty & alumni",
    },
    {
      id: "gupshup",
      name: "GUPSHUP",
      sector: "Enterprise & AI",
      sectorSlug: "ai-advanced-computing",
      color: "#0D7377",
      tagline: "Leading conversational messaging and AI platform powering enterprise engagement across 60+ countries.",
      stage: "Unicorn ($1.4B+)",
      tech: "Conversational AI APIs, messaging orchestration & enterprise automation",
      year: "SINE Alum",
      milestone: "Global unicorn ($1.4B+ valuation); 10B+ monthly messages across 45,000+ brands",
    },
    {
      id: "immunoact",
      name: "IMMUNOACT",
      sector: "Life Sciences",
      sectorSlug: "life-sciences",
      color: "#16A34A",
      tagline: "India's first approved indigenous CAR-T cell therapy (NexCAR19) for cancer treatment.",
      stage: "CDSCO Approved",
      tech: "Chimeric antigen receptor T-cell bioengineering",
      year: "SINE Alum",
      milestone: "CDSCO commercial approval; revolutionary ~90% cost reduction vs Western therapies",
    },
    {
      id: "atomberg",
      name: "ATOMBERG",
      sector: "Hardware & CleanTech",
      sectorSlug: "climate-cleantech",
      color: "#0284C7",
      tagline: "Pioneering BLDC energy-efficient smart motor appliances and consumer hardware.",
      stage: "Series C / Scaled",
      tech: "Brushless DC (BLDC) motor algorithms, power electronics & smart IoT hardware",
      year: "SINE Alum",
      milestone: "Market leader in BLDC appliances; 10M+ homes powered with up to 65% energy savings",
    },
    {
      id: "ideaforge",
      name: "Ideaforge",
      sector: "Space & Defence",
      sectorSlug: "space-defence",
      color: "#EA580C",
      tagline: "India's pioneer drone manufacturer & autonomous defense UAV platforms.",
      stage: "Public (IPO)",
      tech: "Avionics, autonomous navigation & composite airframes",
      year: "SINE Alum",
      milestone: "Listed on NSE & BSE (₹3,000+ Cr market cap); Indian defence UAV market leader",
    },
  ];

  return (
    <section id="portfolio" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">



        {/* DEPLOYMENT SCOPE STRIP */}
        <div className="mb-12 py-3 px-4 sm:px-5 rounded-xl border border-black/5 dark:border-white/5 bg-[#F9F9F8] dark:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] font-semibold text-[11px]">
              Deployment Scope
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
            <span className="font-sans text-zinc-600 dark:text-zinc-400">
              Pre-seed &amp; seed capital for validated deeptech ventures (TRL 4+).
            </span>
          </div>
          <span className="font-mono text-[11px] text-zinc-400 shrink-0">
            Y-Point Fund I
          </span>
        </div>

        {/* 1. OUR PORTFOLIO: Y-POINT FUND I ACTIVE INVESTMENTS */}
        <div className="mb-20 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                Active Deployment · Fund I
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-[#0A0A0A] dark:text-white tracking-tight">
                Our Portfolio
              </h2>
            </div>
          </div>

          {/* RELSYM Inaugural Investment Card */}
          <div className="p-5 sm:p-8 rounded-2xl border border-[#E5E5E5] dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] hover:border-[#0D7377]/40 dark:hover:border-[#00E5A3]/40 transition-all shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                <div className="h-14 sm:h-16 w-32 sm:w-36 rounded-xl bg-white border border-black/10 dark:border-white/10 flex items-center justify-center p-3 shrink-0">
                  <Image
                    src="/new_images/relsym.webp"
                    alt="RELSYM"
                    width={140}
                    height={50}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
                <div className="space-y-1.5">
                  <div>
                    <h3 className="font-display font-medium text-xl sm:text-2xl text-[#0A0A0A] dark:text-white">
                      Relsym Solutions
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-[#0D7377] dark:text-[#00E5A3] font-medium">
                    Physics-based reliability simulation for semiconductor fabs and chip design.
                  </p>
                  <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                    Multi-scale reliability simulation platform predicting device, circuit, and memory degradation before physical silicon manufacturing.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row md:flex-col sm:items-end justify-between md:justify-center gap-1.5 pt-3 md:pt-0 md:pl-6 text-left sm:text-right border-t sm:border-t-0 border-black/5 dark:border-white/5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] font-semibold block">
                  IIT Bombay Spin-Out
                </span>
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  Semiconductor &amp; Hardware
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SINE PORTFOLIO */}
        <div className="p-8 sm:p-12 rounded-2xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-20 space-y-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
                Historical Institutional Track Record
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-[#0A0A0A] dark:text-white">
                Success stories from the Ecosystem
              </h2>
              <p className="font-sans font-light text-xs sm:text-sm text-[#666] dark:text-zinc-400 max-w-2xl">
                Precedent technology companies incubated and nurtured at SINE, IIT Bombay that established India&apos;s deep technology translation playbook.
              </p>
            </div>
            <span className="font-mono text-xs text-zinc-500">
              5 Precedent Benchmarks
            </span>
          </div>

          {/* SINE Portfolio Companies Grid (SEDEMAC, GUPSHUP, IMMUNOACT, ATOMBERG, Ideaforge) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sinePortfolioCompanies.map((co) => (
              <div
                key={co.id}
                className="p-6 rounded-2xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D] flex flex-col justify-between space-y-5 hover:border-[#0D7377]/40 dark:hover:border-[#00E5A3]/40 transition-all shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-mono text-[10px] text-[#0D7377] dark:text-[#00E5A3] font-semibold tracking-wider block">
                        {co.sector}
                      </span>
                      <h4 className="font-display font-medium text-xl sm:text-2xl text-[#0A0A0A] dark:text-white">
                        {co.name}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold tracking-wider border border-teal-500/30 bg-teal-500/10 text-teal-800 dark:text-teal-300 shrink-0">
                      {co.stage}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F9F9F8] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 font-mono text-[11px] text-[#0D7377] dark:text-[#00E5A3] font-semibold leading-relaxed">
                    ★ {co.milestone}
                  </div>

                  <p className="font-sans text-xs text-[#666] dark:text-zinc-300 leading-relaxed">
                    {co.tech}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-1">
                  <div className="font-mono text-[10px] text-[#888] dark:text-zinc-500 uppercase tracking-widest">
                    {co.year} · SINE IIT BOMBAY
                  </div>
                  <div className="font-sans text-xs text-[#444] dark:text-zinc-400">
                    {co.tagline}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Regulatory Notice Banner */}
          <div className="p-3.5 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 flex items-center gap-3 text-[11px] font-mono text-[#666] dark:text-zinc-400">
            <span>
              <strong>Regulatory Compliance:</strong> Precedent companies are drawn from SINE IIT Bombay&apos;s two-decade incubation lineage (220+ ventures) and illustrate deeptech translation benchmarks.
            </span>
          </div>

        </div>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/team"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Meet the Team</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/apply"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Apply for Funding</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
