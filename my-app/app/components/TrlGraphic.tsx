"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, AlertTriangle, Shield, Layers, HelpCircle } from "lucide-react";

export const TRL_STAGES = [
  {
    range: "TRL 1–3",
    label: "Fundamental & Translational Research",
    risk: "Science risk",
    riskColor: "text-amber-400",
    capital: "Grants (under ₹2 Cr)",
    whoInvests: "Grant bodies, government schemes & incubators. Not venture capital.",
    yPointRole: "Pre-entry (SINE incubation & grants)",
    isYPointActive: false,
    detail: "Scientific papers, lab-bench proofs of concept, analytical formulations. Venture capital is the wrong instrument here.",
  },
  {
    range: "TRL 4–5",
    label: "Concept Validation, Prototyping & Pilots",
    risk: "Science + Engineering risk",
    riskColor: "text-[#00e5a3]",
    capital: "Pre-seed & Seed (₹1–10 Cr)",
    whoInvests: "Very few institutional investors. This is where Y-Point enters.",
    yPointRole: "Y-POINT ENTRY POINT (₹3–5 Cr cheque)",
    isYPointActive: true,
    detail: "Validated components in laboratory and simulated environments. First prototype running. We evaluate the test report and characterisation data.",
  },
  {
    range: "TRL 6–7",
    label: "Pilots, Early Orders & Manufacturing Setup",
    risk: "Engineering & Process risk",
    riskColor: "text-[#00e5a3]",
    capital: "Pre-Series A (₹10–25 Cr)",
    whoInvests: "A handful of specialist deep tech funds. Y-Point follow-on reserve.",
    yPointRole: "Y-POINT FOLLOW-ON RESERVE (~40% of fund)",
    isYPointActive: true,
    detail: "System prototype demonstration in an operational or industrial environment. First customer pilots and commercial qualification underway.",
  },
  {
    range: "TRL 8–9",
    label: "Manufacturing Scale-up & Expansion",
    risk: "Execution & Commercial risk",
    riskColor: "text-blue-400",
    capital: "Series A & beyond (> ₹25 Cr)",
    whoInvests: "Most traditional venture funds enter here, once both prior risks are retired.",
    yPointRole: "Growth co-investors & syndication",
    isYPointActive: false,
    detail: "Actual system completed and qualified through test and demonstration. Full-rate production and repeatable commercial go-to-market.",
  },
];

export default function TrlGraphic() {
  const [activeTab, setActiveTab] = useState(1); // Default to TRL 4-5 (Y-Point entry)

  return (
    <section className="relative bg-[#0a0c10] py-24 sm:py-32 border-b border-[#1f2532]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5a3]/30 bg-[#00e5a3]/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#00e5a3]">
            <span>THE LAB TO MARKET MAP</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Where institutional capital actually enters.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Most institutional capital arrives only after TRL 7, once both the science and the engineering risk have been retired by somebody else. We were built inside the institution that does that retiring — and we invest a full stage earlier because of it.
          </p>
        </div>

        {/* TRL Horizontal Stepper Bar */}
        <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRL_STAGES.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative flex flex-col p-5 text-left rounded-xl border transition-all ${
                activeTab === idx
                  ? stage.isYPointActive
                    ? "border-[#00e5a3] bg-[#00e5a3]/10 shadow-[0_0_25px_rgba(0,229,163,0.2)]"
                    : "border-zinc-400 bg-[#161c28]"
                  : "border-[#1e2536] bg-[#0e121a]/80 hover:border-zinc-700"
              }`}
            >
              {stage.isYPointActive && (
                <span className="absolute -top-2.5 left-4 rounded bg-[#00e5a3] px-2 py-0.5 font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#08090c]">
                  Y-POINT ZONE
                </span>
              )}
              <span className="font-mono text-lg font-bold text-white">{stage.range}</span>
              <span className="mt-1 text-xs text-zinc-300 font-medium line-clamp-1">{stage.label}</span>
              <span className="mt-2 font-mono text-[11px] text-zinc-400">{stage.capital}</span>
            </button>
          ))}
        </div>

        {/* Detailed Stage Showcase */}
        <div className="rounded-2xl border border-[#222b3d] bg-[#0c0f16] p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#00e5a3]">
                  {TRL_STAGES[activeTab].range}
                </span>
                <span className="rounded-full border border-[#2a3449] bg-[#141a26] px-3 py-1 font-mono text-xs text-zinc-300">
                  {TRL_STAGES[activeTab].label}
                </span>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {TRL_STAGES[activeTab].detail}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1b2230]">
                <div className="rounded-lg bg-[#08090c] p-4 border border-[#1b2230]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                    Dominant Risk
                  </span>
                  <span className="font-mono text-sm font-semibold text-white">
                    {TRL_STAGES[activeTab].risk}
                  </span>
                </div>

                <div className="rounded-lg bg-[#08090c] p-4 border border-[#1b2230]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                    Capital Instrument
                  </span>
                  <span className="font-mono text-sm font-semibold text-white">
                    {TRL_STAGES[activeTab].capital}
                  </span>
                </div>
              </div>

              <div className="box-teal-edge p-4 rounded-r-lg">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#00e5a3] font-bold block mb-1">
                  Who actually invests here today:
                </span>
                <p className="text-xs text-zinc-200 leading-relaxed">
                  {TRL_STAGES[activeTab].whoInvests}
                </p>
              </div>
            </div>

            {/* Right Status Panel */}
            <div className="lg:col-span-5 rounded-xl border border-[#242d40] bg-[#08090c] p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1b2230]">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  Y-Point Mandate Role
                </span>
                <span
                  className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded ${
                    TRL_STAGES[activeTab].isYPointActive
                      ? "bg-[#00e5a3]/20 text-[#00e5a3] border border-[#00e5a3]/40"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {TRL_STAGES[activeTab].isYPointActive ? "ACTIVE DEPLOYMENT" : "EXTERNAL / SYNDICATE"}
                </span>
              </div>

              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00e5a3] shrink-0 mt-0.5" />
                  <span>
                    <strong>Mandate alignment:</strong> {TRL_STAGES[activeTab].yPointRole}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00e5a3] shrink-0 mt-0.5" />
                  <span>
                    <strong>Initial ticket:</strong> ₹3–5 crore deployed against ~60% of investable corpus.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00e5a3] shrink-0 mt-0.5" />
                  <span>
                    <strong>Follow-on reserve:</strong> ~40% reserved for technical and commercial milestones.
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/apply"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00e5a3] py-3 text-center text-xs font-bold uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
                >
                  <span>Apply with your TRL status</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Five Questions Before You Incorporate Callout (Section 11.3) */}
        <div className="mt-16 rounded-xl border border-[#1e2536] bg-[#0c0e14] p-8">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-5 w-5 text-[#00e5a3]" />
            <h3 className="font-serif text-xl font-bold text-white">
              The Five Questions Before You Incorporate
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-xs text-zinc-300">
            <div className="space-y-1 p-3 rounded-lg bg-[#08090c] border border-[#1b2230]">
              <span className="font-mono text-[#00e5a3] font-bold">01 IP Ownership</span>
              <p className="text-zinc-400">Settled in writing with institute Dean R&D before taking outside capital.</p>
            </div>
            <div className="space-y-1 p-3 rounded-lg bg-[#08090c] border border-[#1b2230]">
              <span className="font-mono text-[#00e5a3] font-bold">02 Full-Time Owner</span>
              <p className="text-zinc-400">A technology needs an owner whose full-time job it is, not only academic roles.</p>
            </div>
            <div className="space-y-1 p-3 rounded-lg bg-[#08090c] border border-[#1b2230]">
              <span className="font-mono text-[#00e5a3] font-bold">03 First Invoice</span>
              <p className="text-zinc-400">Not the grand vision — the first component, test, or qualification customer.</p>
            </div>
            <div className="space-y-1 p-3 rounded-lg bg-[#08090c] border border-[#1b2230]">
              <span className="font-mono text-[#00e5a3] font-bold">04 Capital Buffer</span>
              <p className="text-zinc-400">Calculate milestone requirements if qualification slips two quarters.</p>
            </div>
            <div className="space-y-1 p-3 rounded-lg bg-[#08090c] border border-[#1b2230]">
              <span className="font-mono text-[#00e5a3] font-bold">05 Kill Criterion</span>
              <p className="text-zinc-400">A pre-agreed pivot or stop test is a mark of scientific discipline and rigor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
