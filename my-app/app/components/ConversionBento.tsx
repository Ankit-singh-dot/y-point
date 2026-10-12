"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";

export default function ConversionBento() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="relative bg-white dark:bg-[#030303] py-14 sm:py-24 lg:py-32 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24 lg:space-y-32">
        
        {/* Dual Conversion Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-24">
          
          {/* For Founders */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold">
                For Founders
              </span>
              <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white leading-[1.15] tracking-tight">
                Building something hard?
              </h3>
              <p className="font-sans font-light text-base text-black/70 dark:text-white/70 leading-relaxed max-w-md">
                Tell us what you are working on. We read everything, and we answer — including when the answer is no.
              </p>
              <div className="font-sans font-semibold text-xs uppercase tracking-wider text-black/50 dark:text-white/50 pt-1">
                Initial ticket ₹3–5 Cr · Response in 10 days
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
              <Link
                href="/apply"
                className="group inline-flex items-center gap-3 rounded-full bg-black dark:bg-white px-7 py-4 text-xs sm:text-sm font-sans uppercase tracking-wider text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all w-max font-semibold"
              >
                <span>Apply for funding</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* For Institutions */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/60 dark:text-white/50 font-bold">
                For Partners
              </span>
              <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white leading-[1.15] tracking-tight">
                Deep tech decade.
              </h3>
              <p className="font-sans font-light text-base text-black/70 dark:text-white/70 leading-relaxed max-w-md">
                We work with institutions, corporates and co-investors who want considered exposure to research-led ventures.
              </p>
              <div className="font-sans font-semibold text-xs uppercase tracking-wider text-black/50 dark:text-white/50 pt-1">
                Category II AIF · Private placement
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-black/10 dark:border-white/10">
              <Link
                href="/institutional"
                className="group inline-flex items-center gap-3 rounded-full border border-black/20 dark:border-white/20 bg-transparent px-7 py-4 text-xs sm:text-sm font-sans uppercase tracking-wider text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all w-max font-semibold"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Newsletter Section */}
        <div id="newsletter" className="rounded-2xl sm:rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-6 sm:p-14 lg:p-20 text-center space-y-6 sm:space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-3">
            <Mail className="h-4.5 w-4.5 text-black/50 dark:text-white/50" />
            <span className="font-sans text-xs sm:text-xs uppercase tracking-widest text-black/70 dark:text-white/70 font-semibold">
              Signal From The Lab
            </span>
          </div>

          <h3 className="font-display font-light text-2xl sm:text-4xl lg:text-5xl text-black dark:text-white tracking-tight max-w-2xl leading-tight">
            A monthly note on Indian deep tech.
          </h3>

          <p className="font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 max-w-xl leading-relaxed">
            What we are seeing in the pipeline, what we are reading, and what founders keep getting wrong. No hype, no fund marketing.
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-3 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 px-6 py-3.5 font-sans text-sm text-black dark:text-white">
              <CheckCircle2 className="h-4 w-4" />
              <span>Subscribed. Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-3 sm:flex-row pt-2 sm:pt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@institution.ac.in"
                required
                className="flex-1 rounded-full border border-black/20 dark:border-white/20 bg-transparent dark:bg-black/50 px-5 py-3.5 sm:px-6 sm:py-4 font-sans text-sm font-light text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:border-black dark:focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-black dark:bg-white px-7 py-3.5 sm:px-8 sm:py-4 font-sans text-xs sm:text-sm uppercase tracking-wider text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all shrink-0 font-semibold"
              >
                Subscribe
              </button>
            </form>
          )}

          <div className="font-sans text-xs sm:text-xs uppercase tracking-wider text-black/50 dark:text-white/50 pt-2 font-medium">
            Read by 3,000+ researchers and founders.
          </div>
        </div>

      </div>
    </section>
  );
}
