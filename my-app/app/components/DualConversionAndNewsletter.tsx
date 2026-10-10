"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Send, CheckCircle2, Shield, Mail } from "lucide-react";

export default function DualConversionAndNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="relative bg-[#07080b] py-24 sm:py-32 border-b border-[#1f2532]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 7.9 Dual Conversion Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: For Founders */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-[#232d3f] bg-[#0c0f16] p-8 sm:p-12 transition-all hover:border-[#00e5a3]/60 hover:shadow-[0_0_30px_rgba(0,229,163,0.15)]">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#00e5a3]">
                FOR FOUNDERS
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                Building something hard?
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Tell us what you are working on. We read everything, and we answer — including when the answer is no.
              </p>
              <div className="font-mono text-xs text-zinc-400 pt-2">
                Pre-seed & seed · Initial cheque ₹3–5 Cr · Response within 10 working days
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a2130]">
              <Link
                href="/apply"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#00e5a3] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white"
              >
                <span>Apply for funding</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: For Institutions and Partners */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-[#222837] bg-[#0b0d13] p-8 sm:p-12 transition-all hover:border-zinc-500">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#f59e0b]">
                FOR INSTITUTIONS AND PARTNERS
              </span>
              <h3 className="font-serif text-3xl font-bold text-white">
                Interested in India&apos;s deep tech decade?
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                We work with institutions, corporates and co-investors who want considered exposure to research-led ventures.
              </p>
              <div className="font-mono text-[11px] text-zinc-400 pt-2">
                Informational exchange only · Category II AIF private placement
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a2130]">
              <Link
                href="/institutional"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-600 bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 7.10 Newsletter: Signal from the Lab */}
        <div className="rounded-2xl border border-[#232b3d] bg-gradient-to-r from-[#0d1017] via-[#090b0f] to-[#0d1017] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5a3]/30 bg-[#00e5a3]/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#00e5a3]">
              <Mail className="h-3.5 w-3.5" />
              <span>SIGNAL FROM THE LAB</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              A monthly note on Indian deep tech.
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              What we are seeing in the pipeline, what we are reading, and what founders keep getting wrong. No hype, no fund marketing.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 rounded-xl bg-[#00e5a3]/10 border border-[#00e5a3]/40 px-6 py-4 text-sm font-medium text-[#00e5a3]">
                <CheckCircle2 className="h-5 w-5" />
                <span>You are subscribed to Signal from the Lab. Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.ac.in"
                  required
                  className="flex-1 rounded-full border border-[#2a3449] bg-[#08090c] px-5 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#00e5a3] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#00e5a3] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black hover:bg-white transition-all shadow-md shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="text-[11px] font-mono text-zinc-400">
              Read by 3,000+ deep tech researchers, academic founders and co-investors nationwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
