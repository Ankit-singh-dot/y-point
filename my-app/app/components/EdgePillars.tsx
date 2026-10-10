import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Microscope, Users2, Building, AlertOctagon } from "lucide-react";

export const PILLARS_DATA = [
  {
    num: "01",
    title: "An ecosystem that de-risks before we invest",
    icon: ShieldCheck,
    body: "SINE's grant ladder, specialised bio-labs, prototyping shops, and faculty mentorship move a venture from TRL 3 to 7 before venture equity is the right instrument. Clean IP transfer runs through the Dean R&D office under formalised equity structures.",
  },
  {
    num: "02",
    title: "Diligence that reads a test report",
    icon: Microscope,
    body: "At TRL 5 there is often no commercial traction to discuss. We assess the technology directly. Detailed diligence includes independent expert validation of technology, characterisation data, TRL claim, scalability and the IP landscape.",
  },
  {
    num: "03",
    title: "An investment committee that has built this",
    icon: Users2,
    body: "Over 110 years combined operator experience: former Associate Director at ISRO (Chandrayaan-1 & Mangalyaan), co-creator of iDEX (Ministry of Defence Production), former MD AstraZeneca India (anti-TB molecule), and two active venture GPs.",
  },
  {
    num: "04",
    title: "The first customer and follow-on reserve",
    icon: Building,
    body: "Doors into IIT Bombay's 25+ industry partners, public sector procurement channels, and 65,000+ alumni network. Approximately 40% of our fund is reserved for follow-on, allocated against pre-agreed technical and commercial milestones.",
  },
];

export default function EdgePillars() {
  return (
    <section className="relative bg-[#08090c] py-24 sm:py-32 border-b border-[#1f2532]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#00e5a3]">
              THE Y-POINT EDGE · BEYOND CAPITAL
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Capital is the least differentiated thing we bring.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Deep tech companies do not fail because a term sheet was two crore too small. They fail because a qualification cycle took eighteen months instead of six, or an unaddressed technical risk caught them. We organise ourselves around those failure modes.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 rounded-full border border-[#2a3449] bg-[#0e121a] px-6 py-3 text-xs font-mono uppercase tracking-wider text-[#00e5a3] hover:border-[#00e5a3] transition-all"
            >
              <span>Explore The Platform</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PILLARS_DATA.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#1e2536] bg-[#0c0f16] p-8 transition-all hover:border-[#00e5a3]/50 hover:bg-[#0e121a]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-[#00e5a3]/50 group-hover:text-[#00e5a3] transition-colors">
                      {pillar.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#222b3d] bg-[#08090c] text-zinc-300 group-hover:text-[#00e5a3] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#00e5a3] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#181f2c] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-400">
                    SINE & IIT Bombay Built
                  </span>
                  <Link
                    href="/platform"
                    className="font-mono text-xs text-[#00e5a3] hover:underline flex items-center gap-1"
                  >
                    <span>Learn how</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We Ask In Return (Section 10.6) */}
        <div className="rounded-2xl border border-[#242d40] bg-[#0b0d13] p-8 sm:p-12 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <AlertOctagon className="h-5 w-5 text-[#f59e0b]" />
            <h3 className="font-serif text-2xl font-bold text-white">
              What We Ask In Return
            </h3>
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6">
            Unusual, and non-negotiable. We believe obligations run in both directions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-[#1b2230] bg-[#08090c] p-5 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00e5a3] font-bold">
                01 Bad news early
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                We have never once been able to help more by hearing about a problem later.
              </p>
            </div>

            <div className="rounded-xl border border-[#1b2230] bg-[#08090c] p-5 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00e5a3] font-bold">
                02 Technical honesty
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Tell us what is not working. We have already assumed something is.
              </p>
            </div>

            <div className="rounded-xl border border-[#1b2230] bg-[#08090c] p-5 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00e5a3] font-bold">
                03 Usable reporting
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                A short, regular, truthful update beats a polished quarterly deck every time.
              </p>
            </div>

            <div className="rounded-xl border border-[#1b2230] bg-[#08090c] p-5 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00e5a3] font-bold">
                04 Respect the ecosystem
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Treat the ecosystem as a resource rather than an entitlement. It took two decades to build.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
