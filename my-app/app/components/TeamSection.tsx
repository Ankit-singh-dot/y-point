"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  responsibility: string;
  category: "Investment Team" | "Investment Committee";
  bullets: string[];
  linkedin?: string;
  initials: string;
}

export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const team: TeamMember[] = [
    {
      name: "Shaji Varghese",
      role: "Director, Y-Point Investment Advisors; CEO, SINE IIT Bombay",
      responsibility: "Oversees fund governance, incubation integration, and institutional LP syndication.",
      category: "Investment Team",
      initials: "SV",
      bullets: [
        "30+ years in private equity and venture capital (Partner at BTS India PE, senior roles at GVFL & KVCF).",
        "CEO of SINE, overseeing incubation and institutional translation for 220+ deeptech ventures.",
        "CFA (India), MBA, B.Tech from Kerala.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Saurabh Jain",
      role: "Fund Manager",
      responsibility: "Leads semiconductors, computing, and industrial hardware diligence and portfolio support.",
      category: "Investment Team",
      initials: "SJ",
      bullets: [
        "10+ years early-stage investing (ex-Refex Capital, Tracxn); evaluated 400+ deeptech opportunities.",
        "Led investments in Indian chip design, photonics, and robotics through TRL 4–7 translation.",
        "B.Tech, IIT Kharagpur.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Saurabh Singh",
      role: "Investment Manager",
      responsibility: "Operator-led technical diligence, material science, and clean climate tech sourcing.",
      category: "Investment Team",
      initials: "SS",
      bullets: [
        "Former deeptech founder (3 ventures, including sustainable biotechnology) with operational factory floor experience.",
        "Started career at PwC consulting on supply chains and commercial manufacturing economics.",
        "B.Tech, BIT Mesra.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Jay Dhadhal",
      role: "Senior Analyst",
      responsibility: "Manages SEBI AIF compliance, fund operations, and institutional LP diligence reporting.",
      category: "Investment Team",
      initials: "JD",
      bullets: [
        "Evaluated 250+ deeptech deals and worked on 5 institutional venture investments at GVFL.",
        "Manages statutory reporting for SIDBI, SBI, and Category II AIF regulatory frameworks.",
        "CFA Level 2 and CAIA Level 1 candidate.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Samir Kumar",
      role: "General Partner, Athera Ventures",
      responsibility: "Independent IC Member — Early-stage deep technology architecture & venture scaling.",
      category: "Investment Committee",
      initials: "SK",
      bullets: [
        "24 years in early-stage venture capital; 15 years in core technology industry.",
        "Deep focus on semiconductor design, enterprise IP, and tech commercialisation.",
        "IIT Bombay & IIM Bengaluru alumnus.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Gagan Goyal",
      role: "General Partner, IndiaQuotient",
      responsibility: "Independent IC Member — Intellectual property evaluation and founder-led company building.",
      category: "Investment Committee",
      initials: "GG",
      bullets: [
        "20+ years operator-investor experience with an active angel and institutional portfolio.",
        "Deep expertise in university spinouts and defensible IP commercialisation.",
        "IIT Bombay alumnus.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Dr Seshagiri Rao V (Retd)",
      role: "Former Associate Director, ISRO Satish Dhawan Space Centre",
      responsibility: "Independent IC Member — Aerospace systems, real-time telemetry, radar & propulsion.",
      category: "Investment Committee",
      initials: "SR",
      bullets: [
        "40+ years in aerospace systems, mission control, and high-reliability instrumentation.",
        "Key mission contributor to Chandrayaan-1 and Mangalyaan (Mars Orbiter Mission).",
        "Assesses space systems TRL claims, environmental testing data, and launch qualification.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Ravin Kulshrestha (Retd)",
      role: "Co-creator of the iDEX Initiative",
      responsibility: "Independent IC Member — Defence procurement pathways, mil-spec testing & tactical electronics.",
      category: "Investment Committee",
      initials: "RK",
      bullets: [
        "Former Director at Advanced Weapons and Equipment India Ltd (AWEIL).",
        "Former Director in the Ministry of Defence Production; architect of defence startup procurement.",
        "IIT Kanpur alumnus.",
      ],
      linkedin: "https://linkedin.com",
    },
    {
      name: "Dr T S Balganesh",
      role: "President, GangaGen Biotechnologies",
      responsibility: "Independent IC Member — Clinical biotechnology, bioprocessing & drug discovery diligence.",
      category: "Investment Committee",
      initials: "TB",
      bullets: [
        "30+ years in antibacterial drug discovery; former Managing Director of AstraZeneca India.",
        "Advisor to CSIR national laboratories and the Bill & Melinda Gates Foundation.",
        "Doctorate in Molecular Biology, Max Planck Institute.",
      ],
      linkedin: "https://linkedin.com",
    },
  ];

  const capabilityDomains = [
    "Technology Assessment",
    "Investment Structuring",
    "Operations & Commercialisation",
    "Fundraising & Investor Relations",
    "Industry Networks",
    "Regulatory & IP",
    "Financial Modelling",
  ];

  // Dot matrix data: [memberIndex][domainIndex] = credential string or null
  const matrixData: { member: string; skills: (string | null)[] }[] = [
    {
      member: "Shaji Varghese",
      skills: [
        "30 yrs evaluating science translation",
        "Structuring 15+ PE/VC funds",
        "CEO of SINE, 220+ ventures",
        "Institutional LPs (SIDBI, Banks)",
        "IIT Bombay faculty & dean network",
        "Formal IP assignment frameworks",
        "SEBI Category II governance",
      ],
    },
    {
      member: "Saurabh Jain",
      skills: [
        "Interrogates test reports & silicon",
        "Pre-seed & seed term sheet design",
        "Pilot-to-production acceleration",
        "Follow-on syndication networks",
        "Semiconductor & robotics ecosystem",
        "Freedom-to-operate validation",
        "Capex & tape-out cash planning",
      ],
    },
    {
      member: "Saurabh Singh",
      skills: [
        "Hands-on lab & cleanroom testing",
        null,
        "3x founder operational scaling",
        null,
        "Clean climate & materials network",
        "University spinout licensing",
        "Unit economics & BOM modelling",
      ],
    },
    {
      member: "Dr Seshagiri Rao",
      skills: [
        "ISRO mission systems validation",
        null,
        "Mil-spec flight characterisation",
        null,
        "Sovereign aerospace network",
        "Space clearance & payload regs",
        null,
      ],
    },
    {
      member: "Ravin Kulshrestha",
      skills: [
        "Weapons & hardware mil-spec audit",
        "iDEX procurement grant ladder",
        "Ministry of Defence pipeline",
        null,
        "Indian Armed Forces & PSUs",
        "Export control & defence licencing",
        null,
      ],
    },
    {
      member: "Dr T S Balganesh",
      skills: [
        "30 yrs clinical trial data audit",
        null,
        "AstraZeneca India drug scaling",
        null,
        "Global pharma & CSIR labs",
        "CDSCO / FDA regulatory pathways",
        null,
      ],
    },
  ];

  return (
    <section id="team" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              03 — Team
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              Operators, Investors & Sovereign Authorities
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            TWO-STAGE INDEPENDENT EVALUATION PROTOCOL
          </div>
        </div>

        {/* HERO TITLE */}
        <div className="max-w-4xl space-y-6 mb-16 sm:mb-20">
          <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            Technical authority evaluating characterisation data, not pitch decks.
          </h2>
          <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
            Who decides, and why they are credible. Our team and committee combine 110+ years of technical operations, venture capital, and sovereign scientific authority across ISRO, Ministry of Defence, and global pharmaceuticals.
          </p>
        </div>

        {/* 2. CREDENTIALS — PROOF POINTS (Large Numbers Strip) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 sm:p-10 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-20">
          {[
            { metric: "110+", label: "Years Combined Experience", sub: "Operators, PE/VC & Scientists" },
            { metric: "220+", label: "Deeptech Ventures Incubated", sub: "Through SINE IIT Bombay" },
            { metric: "65,000+", label: "IIT Bombay Alumni Network", sub: "Global engineering leaders" },
            { metric: "25+", label: "Institutional Partners", sub: "PSUs, DRDO, ISRO & Corporates" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl font-light text-[#0A0A0A] dark:text-white">
                {stat.metric}
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-[#0D7377]">
                {stat.label}
              </div>
              <div className="font-mono text-[11px] text-[#666666] dark:text-zinc-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 3. TEAM CARDS GRID (Click to expand credentials) */}
        <div className="space-y-16 mb-24">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Investment Team & Committee
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Leadership Profiles
            </h3>
            <p className="font-sans font-light text-xs sm:text-sm text-[#666666] dark:text-zinc-400">
              Click any card to inspect verified credentials and track record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => {
              const isExpanded = expandedMember === member.name;

              return (
                <div
                  key={member.name}
                  onClick={() => setExpandedMember(isExpanded ? null : member.name)}
                  className={`cursor-pointer rounded-lg border transition-all duration-300 p-6 flex flex-col justify-between ${
                    isExpanded
                      ? "border-[#0D7377] bg-white dark:bg-[#121212] shadow-lg ring-1 ring-[#0D7377]/40"
                      : "border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0E0E0E] hover:border-black/30 dark:hover:border-white/30"
                  }`}
                >
                  <div className="space-y-4">
                    {/* B&W Monogram Header */}
                    <div className="flex items-center justify-between">
                      <div className="h-10 w-10 rounded bg-[#F5F5F3] dark:bg-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#0A0A0A] dark:text-white border border-black/5 dark:border-white/10">
                        {member.initials}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#0D7377] bg-[#0D7377]/10 px-2 py-0.5 rounded font-semibold">
                        {member.category}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-light text-2xl text-[#0A0A0A] dark:text-white">
                        {member.name}
                      </h4>
                      <div className="font-sans text-xs text-[#666666] dark:text-zinc-400 mt-1 font-medium">
                        {member.role}
                      </div>
                    </div>

                    <p className="font-sans italic text-xs text-[#0A0A0A]/80 dark:text-zinc-300 leading-relaxed border-l-2 border-[#0D7377] pl-3 py-1">
                      &ldquo;{member.responsibility}&rdquo;
                    </p>
                  </div>

                  {/* Expandable Credential Bullets */}
                  <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/5 space-y-3">
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2 overflow-hidden text-xs font-sans font-light text-[#666666] dark:text-zinc-300"
                        >
                          {member.bullets.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-[#0D7377] mt-0.5 font-bold">·</span>
                              <span>{b}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between font-mono text-[10px] text-[#0D7377]">
                      <span>{isExpanded ? "Collapse Credentials" : "View 3 Credentials"}</span>
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. INFOGRAPHIC: TEAM CAPABILITY MATRIX (Dot-Matrix) */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-20 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Infographic · Coverage Matrix
            </span>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Team Capability Matrix
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400">
              A dot-matrix mapping team members against seven capability domains. Hover any active dot to reveal the specific verified credential.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-[#E5E5E5] dark:border-white/10 text-xs font-mono uppercase text-[#666666] dark:text-zinc-400">
                  <th className="py-3 px-4 font-semibold">Capability Domain</th>
                  {matrixData.map((m) => (
                    <th key={m.member} className="py-3 px-3 text-center font-semibold text-[11px] whitespace-nowrap">
                      {m.member.split(" ")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5E5] dark:divide-white/5 font-sans text-xs">
                {capabilityDomains.map((domain, dIdx) => (
                  <tr key={domain} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01]">
                    <td className="py-3.5 px-4 font-medium text-[#0A0A0A] dark:text-white">
                      {domain}
                    </td>
                    {matrixData.map((m, mIdx) => {
                      const credential = m.skills[dIdx];
                      const hasSkill = credential !== null;

                      return (
                        <td key={m.member} className="py-3.5 px-3 text-center">
                          {hasSkill ? (
                            <div className="group relative inline-block">
                              <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#0D7377] cursor-pointer hover:scale-125 transition-transform" />
                              {/* Hover Tooltip */}
                              <div className="opacity-0 group-hover:opacity-100 pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded bg-black/95 text-white text-[10px] font-mono shadow-xl transition-opacity z-20">
                                <div className="font-bold text-[#0D7377]">{m.member}</div>
                                <div>{credential}</div>
                              </div>
                            </div>
                          ) : (
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black/10 dark:bg-white/10" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. TEAM WITHIN THE ECOSYSTEM (Network Linkage) */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0D0D0D]">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Ecosystem Networks
            </span>
            <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Direct Relationship Channels
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
              The team directly maintains relationship nodes across IIT Bombay faculty, SINE leadership, portfolio founders, defense primes, and growth co-investors to compress founder timelines.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { node: "IIT Bombay Faculty", desc: "Dean R&D & lab heads" },
              { node: "SINE Leadership", desc: "Incubator grant ladder" },
              { node: "Portfolio Founders", desc: "Founder-to-founder network" },
              { node: "Industry Corporates", desc: "25+ pilot partners" },
              { node: "Co-Investors", desc: "Series A growth syndication" },
              { node: "Strategic Partners", desc: "iDEX, ISRO & CSIR" },
            ].map((n) => (
              <div key={n.node} className="p-3.5 rounded border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/5 space-y-1">
                <div className="font-sans font-bold text-xs text-[#0A0A0A] dark:text-white">{n.node}</div>
                <div className="font-mono text-[10px] text-[#666666] dark:text-zinc-400">{n.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION FOOTER CTAS */}
        <div className="pt-8 border-t border-[#E5E5E5] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
          <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
            NEXT SECTIONS:
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#focus"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>See Our Investment Theses</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#content"
              className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
            >
              <span>Read Our Content</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
