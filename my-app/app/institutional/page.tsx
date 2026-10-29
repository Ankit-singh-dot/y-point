"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Send, CheckCircle2 } from "lucide-react";

export default function InstitutionalPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investorType: "Family Office",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#07090e] text-[#0A0A0A] dark:text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
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

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Compliance Warning Header */}
        <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-[#F9F9F8] dark:bg-zinc-950 p-4 flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
          <ShieldCheck className="h-5 w-5 text-[#0D7377] dark:text-[#00E5A3] shrink-0" />
          <span>
            <strong>Informational Notice:</strong> Private placement vehicle under SEBI Category II AIF (IN/AIF2/25-26/1937). Units offered exclusively to eligible investors via Private Placement Memorandum. No public solicitation.
          </span>
        </div>

        {/* Public-Facing Copy */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              For Institutions and Partners · SINE IIT Bombay
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377] dark:bg-[#00E5A3]" />
            <span className="font-mono text-xs uppercase tracking-wider text-black/40 dark:text-white/40">
              Category II AIF
            </span>
          </div>

          <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[#0A0A0A] dark:text-white leading-[1.1]">
            FOR INSTITUTIONS AND PARTNERS
          </h1>

          <p className="font-display font-light text-lg sm:text-2xl text-[#0A0A0A] dark:text-white">
            Y-Point exists because of a structural gap in how India funds its own research.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light shadow-xs">
            <p>
              The country&apos;s institutions produce technically exceptional companies. Its venture industry is built to underwrite consumer adoption and software margins. The mismatch is not a matter of appetite — it is a matter of capability, access and time horizon, and it leaves a category of company systematically under-funded at the point where capital is most decisive.
            </p>
            <p className="font-medium text-[#0A0A0A] dark:text-white pt-2">
              Our approach rests on three institutional pillars:
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3] mt-1">01</span>
                <span><strong>Proprietary access:</strong> SINE&apos;s standing pipeline of 100+ incubated companies and direct channel to IIT Bombay&apos;s 17 departments, 13 centres, 16 centres of excellence, and 65,000+ alumni.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3] mt-1">02</span>
                <span><strong>Technical diligence:</strong> Assessment built around engineering rather than commercial risk, with independent faculty and operator validation as a standard step.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#0D7377] dark:text-[#00E5A3] mt-1">03</span>
                <span><strong>Long-cycle portfolio construction:</strong> 25–30 companies, with approximately 40% of investable corpus reserved for follow-on against pre-agreed technical milestones.</span>
              </div>
            </div>
            <p className="pt-2">
              We work with institutional investors, family offices, corporates, public sector undertakings and development finance institutions seeking considered exposure to Indian deep technology.
            </p>
          </div>

          {/* Mandatory Non-Solicitation Notice */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-zinc-950 p-4 sm:p-5 text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
            <p>
              This page is for information only. It does not constitute an offer of, or an invitation to subscribe for, units in the Fund. Any offer is made solely through the Fund&apos;s private placement memorandum to eligible investors.
            </p>
          </div>
        </div>

        {/* Gated Material / Introduction Request Form Bento */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] p-6 sm:p-10 lg:p-12 space-y-6 shadow-md overflow-hidden">
          {/* Transparent Crest Watermark - Zero hard cutoff edges */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 pointer-events-none select-none opacity-[0.035] dark:opacity-[0.045]">
            <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
          </div>

          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/5 dark:border-white/10 pb-4 gap-2">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#0D7377] dark:text-[#00E5A3]" />
              <h2 className="font-display font-light text-2xl font-bold text-[#0A0A0A] dark:text-white">
                Request Institutional Information
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Accredited &amp; Eligible Investors
            </span>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#0D7377] dark:text-[#00E5A3]" />
              <h3 className="font-display font-light text-2xl font-bold text-[#0A0A0A] dark:text-white">Request Submitted</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-md mx-auto">
                Thank you. Our investor relations team will reach out directly to coordinate formal informational discussions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-600 dark:text-zinc-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-[#0A0A0A] dark:text-white focus:border-[#0D7377] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-600 dark:text-zinc-300">Institutional Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@institution.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-[#0A0A0A] dark:text-white focus:border-[#0D7377] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-600 dark:text-zinc-300">Organization / Entity *</label>
                  <input
                    type="text"
                    required
                    placeholder="Fund / Family Office / Corporate / DFI"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-[#0A0A0A] dark:text-white focus:border-[#0D7377] focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-600 dark:text-zinc-300">Investor Classification *</label>
                  <select
                    value={formData.investorType}
                    onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                    className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-[#0A0A0A] dark:text-white focus:border-[#0D7377] focus:outline-none"
                  >
                    <option value="Family Office">Family Office</option>
                    <option value="Institutional Investor">Institutional Investor</option>
                    <option value="Corporate / CVC">Corporate / Strategic Partner</option>
                    <option value="DFI / Development Bank">DFI / Public Sector Entity</option>
                    <option value="Co-Investor">Venture Capital Co-Investor</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-xs text-zinc-600 dark:text-zinc-300">Message / Focus of Interest (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Specify focus areas or co-investment inquiries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-950 p-4 text-sm text-[#0A0A0A] dark:text-white focus:border-[#0D7377] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                  Target Corpus: ₹250 Cr · Term: 10 Years
                </span>
                <button
                  type="submit"
                  className="rounded-full bg-black text-white hover:bg-[#0D7377] dark:bg-white dark:text-black dark:hover:bg-[#00E5A3] px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  <span>Request an Introduction</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
