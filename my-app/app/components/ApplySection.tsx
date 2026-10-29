"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Send, CheckCircle2, Lock } from "lucide-react";

export default function ApplySection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    founderName: "",
    workEmail: "",
    companyName: "",
    website: "",
    sector: "AI & Advanced Computing",
    fundingStage: "Pre-seed",
    trl: "TRL 4–5",
    problem: "",
    differentiation: "",
    traction: "",
    fundingSought: "₹3–5 Cr",
    deckUrl: "",
    consent: false,
  });

  const whatWeLookFor = [
    {
      title: "Early-stage ambition",
      description: "Pre-seed and seed-stage ventures.",
    },
    {
      title: "Technology depth",
      description: "Typically TRL 4–7, with validated proof-of-concept beyond theoretical science.",
    },
    {
      title: "A meaningful market",
      description: "A clearly defined problem and credible industrial customer need.",
    },
    {
      title: "A capable team",
      description: "Founders with deep technical expertise, domain authority, and commitment to execute.",
    },
    {
      title: "A path to commercialisation",
      description: "A thoughtful plan for validation, product development and customer adoption.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setSubmitted(true);
  };

  return (
    <section id="apply" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10 overflow-hidden">
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
              Pitch to Us
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              For Founders Building with Science
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            STAGE: PRE-SEED &amp; SEED · TRL 4–7 · SINE IIT BOMBAY
          </div>
        </div>

        {/* HERO TITLE & INSTITUTIONAL SEED ANCHOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Building a deeptech company?
            </h1>
            <p className="font-sans font-medium text-lg sm:text-xl text-[#0A0A0A] dark:text-white leading-snug">
              We would like to understand what you&apos;re building.
            </p>
            <p className="font-sans font-light text-base sm:text-lg text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
              We invest in early-stage deeptech ventures developing technology-led solutions for significant markets. Tell us about the problem you are solving, the technology behind your solution, what you have validated so far and the milestones you are working towards.
            </p>
          </div>

          {/* Institutional Anchor Card */}
          <div className="lg:col-span-4">
            <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-md">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/iitb/main-gate.webp"
                  alt="IIT Bombay Main Gate"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  <div className="relative h-3.5 w-3.5 shrink-0">
                    <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-mono text-[9px] text-white tracking-wider font-semibold">
                    SINE · IIT BOMBAY
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="font-mono text-[10px] text-[#00E5A3] font-semibold">
                    ज्ञानं परमं ध्येयम्
                  </div>
                  <div className="font-sans font-medium text-xs text-white">
                    Pre-Seed &amp; Seed Investment
                  </div>
                  <p className="hidden sm:block font-sans text-[11px] text-white/70 font-light leading-snug">
                    Typically ₹3–5 Cr initial investment with follow-on reserves, backed by IIT Bombay technical diligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. WHAT WE LOOK FOR */}
        <div className="mb-20 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Evaluation Criteria
            </span>
            <h2 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              What We Look For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeLookFor.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] space-y-3"
              >
                <div className="font-mono text-xs font-bold text-[#0D7377]">
                  0{idx + 1}
                </div>
                <h3 className="font-sans font-semibold text-base sm:text-lg text-[#0A0A0A] dark:text-white">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. FOUNDER SUBMISSION FORM */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-black/5 dark:border-white/5 pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Application
            </span>
            <h2 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Founder Submission Form
            </h2>
            <p className="font-sans font-light text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Please share specific, technical details regarding your innovation and commercial progress.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-[#0D7377]/10 text-[#0D7377] flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-display font-light text-2xl text-[#0A0A0A] dark:text-white">
                Submission Received
              </h3>
              <p className="font-sans font-light text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                Thank you for sharing your venture details. Our investment team reviews every submission through our confirmed internal technical diligence process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Founder Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.founderName}
                    onChange={(e) => setForm({ ...form, founderName: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Kumar"
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.workEmail}
                    onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                    placeholder="founder@venture.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="e.g. Q-Silicon Dynamics"
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Website or URL
                  </label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Sector *
                  </label>
                  <select
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  >
                    <option value="AI & Advanced Computing">AI &amp; Advanced Computing</option>
                    <option value="Advanced Manufacturing & Semicon">Advanced Manufacturing &amp; Semicon</option>
                    <option value="Next-Gen Materials">Next-Gen Materials</option>
                    <option value="Biotechnology & Lifesciences">Biotechnology &amp; Lifesciences</option>
                    <option value="Climate & CleanTech">Climate &amp; CleanTech</option>
                    <option value="Space & Defence">Space &amp; Defence</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Funding Stage
                  </label>
                  <select
                    value={form.fundingStage}
                    onChange={(e) => setForm({ ...form, fundingStage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  >
                    <option value="Pre-seed">Pre-seed</option>
                    <option value="Seed">Seed</option>
                    <option value="Bridge / Pre-Series A">Bridge / Pre-Series A</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    TRL Level (if known)
                  </label>
                  <select
                    value={form.trl}
                    onChange={(e) => setForm({ ...form, trl: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  >
                    <option value="TRL 4">TRL 4 (Lab validated)</option>
                    <option value="TRL 5">TRL 5 (Relevant environment)</option>
                    <option value="TRL 6">TRL 6 (Pilot demonstration)</option>
                    <option value="TRL 7+">TRL 7+ (Pre-commercial)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                  Problem Being Solved *
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  placeholder="What is the critical industrial, scientific, or market problem?"
                  className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                  Technology Differentiation &amp; Current Validation *
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.differentiation}
                  onChange={(e) => setForm({ ...form, differentiation: e.target.value })}
                  placeholder="What makes your approach defensible? What characterisation, benchmarks, or IP exist?"
                  className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                  Customer Pilots, Traction, or Supporting Evidence
                </label>
                <textarea
                  rows={2}
                  value={form.traction}
                  onChange={(e) => setForm({ ...form, traction: e.target.value })}
                  placeholder="Ongoing trials, LOIs, grant receipts, or deployment testing..."
                  className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Funding Sought &amp; Target Milestones
                  </label>
                  <input
                    type="text"
                    value={form.fundingSought}
                    onChange={(e) => setForm({ ...form, fundingSought: e.target.value })}
                    placeholder="e.g. ₹3–5 Cr for pilot qualification"
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase text-zinc-600 dark:text-zinc-300 font-semibold block">
                    Pitch Deck Link (Google Drive, DocSend, Notion)
                  </label>
                  <input
                    type="url"
                    value={form.deckUrl}
                    onChange={(e) => setForm({ ...form, deckUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-4 py-2.5 rounded-lg border border-black/15 dark:border-white/15 bg-transparent text-sm focus:border-[#0D7377] focus:outline-none"
                  />
                </div>
              </div>

              {/* Privacy Consent */}
              <div className="pt-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0D7377] focus:ring-[#0D7377]"
                />
                <label htmlFor="consent" className="font-sans text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I consent to the secure handling of this information for internal evaluation by Y-Point Venture Capital Fund and SINE IIT Bombay in accordance with institutional privacy standards.
                </label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Confidential Technical Diligence Review</span>
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-black text-white hover:bg-[#0D7377] dark:bg-white dark:text-black dark:hover:bg-[#00E5A3] font-sans text-xs uppercase tracking-wider font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Submit Venture Details</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
