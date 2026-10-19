"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, X, Shield, FileText, Send, Sparkles, Building, Lock } from "lucide-react";

export default function ApplySection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    institution: "",
    sector: "AI & Advanced Computing",
    trl: "TRL 4–5",
    description: "",
    deckUrl: "",
  });

  const evaluationDimensions = [
    { step: "01", dim: "TECHNOLOGY", question: "Is the science proven? TRL 4+?" },
    { step: "02", dim: "PROBLEM", question: "Is it solving a real, painful industrial problem?" },
    { step: "03", dim: "PRODUCT", question: "Can it be manufactured / repeated at volume?" },
    { step: "04", dim: "TEAM", question: "Deep technical founders with domain authority?" },
    { step: "05", dim: "MARKET", question: "Large enough addressable market for venture returns?" },
    { step: "06", dim: "TRACTION", question: "Any early characterisation data, pilot, or testing report?" },
    { step: "07", dim: "CAPITAL", question: "What milestone will ₹3–5 Cr achieve and why?" },
  ];

  const lookFor = [
    "Deep technology with proven science",
    "Large addressable markets",
    "Exceptional technical founding teams",
    "Defensible intellectual property",
    "Strong founder-market fit",
    "Clear path to first revenue",
  ];

  const avoid = [
    "Incremental software innovation",
    "Technology without a clear problem",
    "Weak technical differentiation",
    "Unclear IP ownership",
    "Markets too small for venture returns",
    "Teams without domain expertise",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              06 — Apply for Funding
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              For Founders & Co-Investors
            </span>
          </div>

          <div className="font-mono text-[11px] sm:text-xs tracking-wider text-[#666666] dark:text-zinc-400 bg-[#F5F5F3] dark:bg-white/5 px-3 py-1 rounded">
            INITIAL TICKET: INR 3–5 CR · RESPONSE WITHIN 10 WORKING DAYS
          </div>
        </div>

        {/* HERO TITLE */}
        <div className="max-w-4xl space-y-6 mb-16 sm:mb-20">
          <h2 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
            Building something difficult?
          </h2>
          <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
            Tell us what you are working on. We read everything, and we answer — including when the answer is no. Initial ticket: INR 3–5 Cr. Response within 10 working days.
          </p>
        </div>

        {/* 2. INFOGRAPHIC: QUALIFICATION FRAMEWORK (Vertical Flow of 7 Dimensions) */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-16 space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Infographic · Self-Assessment
            </span>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Qualification Framework
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400">
              A vertical flow showing the seven dimensions Y-Point evaluates. Self-assess whether your technology is at the right translational stage before applying.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {evaluationDimensions.map((item) => (
              <div
                key={item.dim}
                className="p-4 rounded border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#111111] flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#0D7377] font-bold">
                    {item.step}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0D7377]" />
                </div>
                <div className="font-mono text-xs font-bold text-[#0A0A0A] dark:text-white">
                  {item.dim}
                </div>
                <p className="font-sans font-light text-xs text-[#666666] dark:text-zinc-400 leading-snug">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LOOK FOR / AVOID MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Look For */}
          <div className="p-8 rounded-xl border border-[#0D7377]/30 bg-[#0D7377]/5 dark:bg-[#0D7377]/10 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-6 w-6 rounded-full bg-[#0D7377] flex items-center justify-center text-white">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#0D7377] font-bold">
                WHAT WE LOOK FOR
              </h4>
            </div>
            <div className="space-y-3 font-sans text-sm text-[#0A0A0A] dark:text-zinc-200">
              {lookFor.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-[#0D7377] font-bold mt-0.5">+</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Avoid */}
          <div className="p-8 rounded-xl border border-red-500/20 bg-red-500/5 dark:bg-red-500/10 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center text-white">
                <X className="h-3.5 w-3.5 stroke-[3]" />
              </span>
              <h4 className="font-mono text-xs uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                WHAT WE AVOID
              </h4>
            </div>
            <div className="space-y-3 font-sans text-sm text-[#0A0A0A] dark:text-zinc-200">
              {avoid.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">-</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. CTA — APPLY FOR FUNDING (Full-Width Button) */}
        <div className="space-y-4 mb-20 text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full py-5 rounded bg-[#0D7377] hover:bg-[#0D7377]/90 text-white font-sans text-sm sm:text-base uppercase tracking-[0.2em] font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-3"
          >
            <span>APPLY FOR FUNDING</span>
            <ArrowUpRight className="h-5 w-5" />
          </button>

          <div>
            <a
              href="#content"
              className="text-xs font-mono text-[#666666] hover:text-[#0D7377] dark:text-zinc-400 dark:hover:text-teal-400 transition-colors"
            >
              Not ready to apply? Subscribe to Signal from the Lab →
            </a>
          </div>
        </div>

        {/* 5. FOR LPS AND PARTNERS */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/60 dark:bg-white/[0.02] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Institutional Co-Investors
            </span>
            <h4 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Deep tech decade.
            </h4>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-300">
              We work with institutions, corporates and co-investors who want considered exposure to research-led ventures.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-wider text-[#666666] dark:text-zinc-500 pt-1">
              CATEGORY II AIF · PRIVATE PLACEMENT
            </div>
          </div>

          <a
            href="mailto:ir@y-point.vc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-black/20 dark:border-white/20 bg-white dark:bg-black font-sans text-xs uppercase tracking-widest text-[#0A0A0A] dark:text-white font-semibold hover:border-[#0D7377] hover:text-[#0D7377] transition-all shrink-0"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>

      {/* Embedded Application Modal Form */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-white/20 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-[#666666] hover:text-[#0A0A0A] dark:text-zinc-400 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-1 border-b border-black/5 dark:border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-bold">
                  Y-Point Venture Capital Fund-I
                </span>
                <h3 className="font-display font-light text-2xl text-[#0A0A0A] dark:text-white">
                  Application for TRL 4–7 Capital
                </h3>
                <p className="font-sans font-light text-xs text-[#666666] dark:text-zinc-400">
                  Initial ticket: INR 3–5 Cr. Evaluated by our investment team within 10 working days.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-[#0D7377] text-white flex items-center justify-center mx-auto">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-light text-xl text-[#0A0A0A] dark:text-white">
                    Dossier Received
                  </h4>
                  <p className="font-sans text-xs text-[#666666] dark:text-zinc-400">
                    Thank you, {form.name}. Our investment team reviews characterisation reports on rolling cycles. We will reply to {form.email} within 10 working days.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setModalOpen(false);
                    }}
                    className="mt-4 px-5 py-2 rounded bg-black/5 dark:bg-white/10 text-xs font-mono uppercase tracking-wider"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">Founder Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">University / Institution *</label>
                      <input
                        type="text"
                        required
                        value={form.institution}
                        onChange={(e) => setForm({ ...form, institution: e.target.value })}
                        placeholder="e.g. IIT Bombay, SINE, CSIR"
                        className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">Sector *</label>
                      <select
                        value={form.sector}
                        onChange={(e) => setForm({ ...form, sector: e.target.value })}
                        className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                      >
                        <option>AI & Advanced Computing</option>
                        <option>Advanced Manufacturing & Semiconductor</option>
                        <option>Next Gen Materials</option>
                        <option>Space & Defence</option>
                        <option>Climate & CleanTech</option>
                        <option>Life Sciences</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">Current TRL Stage *</label>
                    <select
                      value={form.trl}
                      onChange={(e) => setForm({ ...form, trl: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                    >
                      <option>TRL 4 (Component lab validated)</option>
                      <option>TRL 5 (Integrated subsystem tested)</option>
                      <option>TRL 6 (Pilot in operational environment)</option>
                      <option>TRL 7 (Full scale prototype qualification)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">One-Line Technical Thesis / Defensibility *</label>
                    <textarea
                      required
                      rows={2}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="What is proprietary: silicon architecture, chemistry, patent, or process?"
                      className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[#666666] dark:text-zinc-400">Deck / Characterisation Dossier URL</label>
                    <input
                      type="url"
                      value={form.deckUrl}
                      onChange={(e) => setForm({ ...form, deckUrl: e.target.value })}
                      placeholder="Google Drive, DocSend, or Dropbox link"
                      className="w-full px-3 py-2 rounded border border-[#E5E5E5] dark:border-white/20 bg-white dark:bg-black text-[#0A0A0A] dark:text-white focus:outline-none focus:border-[#0D7377]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded bg-[#0D7377] hover:bg-[#0D7377]/90 text-white font-sans text-xs uppercase tracking-widest font-bold transition-colors"
                    >
                      Submit Technical Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
