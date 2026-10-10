"use client";

import React, { useState } from "react";
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
    <div className="min-h-screen bg-[#000000] py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Compliance Warning Header Bento */}
        <div className="rounded-2xl border border-white/15 bg-zinc-950 p-4 flex items-center gap-3 text-xs text-zinc-400">
          <ShieldCheck className="h-5 w-5 text-white shrink-0" />
          <span>
            <strong>Informational Notice:</strong> Private placement vehicle under SEBI Category II AIF (IN/AIF2/25-26/1937). Units offered exclusively to eligible investors via Private Placement Memorandum. No public solicitation.
          </span>
        </div>

        {/* 16.1 Public-Facing Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-300">
            <span>FOR INSTITUTIONS AND PARTNERS · SECTION 16</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            FOR INSTITUTIONS AND PARTNERS
          </h1>

          <p className="font-mono text-xl sm:text-2xl text-white">
            Y-Point exists because of a structural gap in how India funds its own research.
          </p>

          <div className="box-editorial-bw p-6 sm:p-8 rounded-r-2xl space-y-4 text-zinc-300 text-base leading-relaxed">
            <p>
              The country&apos;s institutions produce technically exceptional companies. Its venture industry is built to underwrite consumer adoption and software margins. The mismatch is not a matter of appetite — it is a matter of capability, access and time horizon, and it leaves a category of company systematically under-funded at the point where capital is most decisive.
            </p>
            <p>
              Our approach rests on three pillars:
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-white mt-1">01</span>
                <span><strong>Proprietary access:</strong> SINE&apos;s standing pipeline of 100+ incubated companies and direct channel to IIT Bombay&apos;s 17 departments, 13 centres, 16 centres of excellence, and 65,000+ alumni.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-white mt-1">02</span>
                <span><strong>Technical diligence:</strong> Assessment built around engineering rather than commercial risk, with independent faculty and operator validation as a standard step.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-white mt-1">03</span>
                <span><strong>Long-cycle portfolio construction:</strong> 25–30 companies, with approximately 40% of investable corpus reserved for follow-on against pre-agreed technical milestones.</span>
              </div>
            </div>
            <p className="pt-2">
              We work with institutional investors, family offices, corporates, public sector undertakings and development finance institutions seeking considered exposure to Indian deep technology.
            </p>
          </div>

          {/* Mandatory Non-Solicitation Notice (Section 16.1) */}
          <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5 text-xs text-zinc-400 space-y-2">
            <p>
              This page is for information only. It does not constitute an offer of, or an invitation to subscribe for, units in the Fund. Any offer is made solely through the Fund&apos;s private placement memorandum to eligible investors.
            </p>
          </div>
        </div>

        {/* 16.2 Gated Material / Introduction Request Form Bento */}
        <div className="bento-card p-8 sm:p-12 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-white" />
              <h2 className="font-serif text-2xl font-bold text-white">
                Request Institutional Information
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              Accredited &amp; Eligible Investors
            </span>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="mx-auto h-12 w-12 text-white" />
              <h3 className="font-serif text-2xl font-bold text-white">Request Submitted</h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto">
                Thank you. Our investor relations team will reach out directly to coordinate formal informational discussions.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-300">Institutional Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@institution.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-300">Organization / Entity *</label>
                  <input
                    type="text"
                    required
                    placeholder="Fund / Family Office / Corporate / DFI"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-zinc-300">Investor Classification *</label>
                  <select
                    value={formData.investorType}
                    onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-white focus:outline-none"
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
                <label className="font-mono text-xs text-zinc-300">Message / Focus of Interest (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Specify focus areas or co-investment inquiries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-white/15 bg-zinc-950 p-4 text-sm text-white focus:border-white focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-zinc-500">
                  Target Corpus: ₹250 Cr · Term: 10 Years
                </span>
                <button
                  type="submit"
                  className="rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-md"
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
