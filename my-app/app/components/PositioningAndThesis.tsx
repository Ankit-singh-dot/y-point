import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Award, Compass, Sparkles } from "lucide-react";

export default function PositioningAndThesis() {
  return (
    <section className="relative bg-[#08090c] py-24 sm:py-32 border-b border-[#1f2532]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 7.2 Positioning Block */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 mb-28">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5a3]/30 bg-[#00e5a3]/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#00e5a3]">
              <span>Category Position</span>
            </div>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              Where technology stops being a research result and has to become a company.
            </h2>

            <div className="box-teal-edge p-6 rounded-r-xl space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                We are the venture capital arm of <strong>SINE</strong>, the technology business incubator of <strong>IIT Bombay</strong>, and we write pre-seed and seed cheques into ventures emerging from IIT Bombay and India&apos;s other premier research institutions.
              </p>
              <p>
                By the time we invest, the science usually works. What remains is the harder, less celebrated problem: building a manufacturable product, finding a first customer willing to take a risk on an unproven supplier, and surviving the years in between.
              </p>
              <p className="font-semibold text-[#00e5a3]">
                That is the part we are built for.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00e5a3] hover:underline"
              >
                <span>Read the Y-Point Edge</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <span className="text-zinc-600">·</span>
              <Link
                href="/lab-to-market"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white"
              >
                <span>Explore Lab to Market</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Visual (Featuring user's Creation of Adam human-robot hands artwork) */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-[#232b3d] bg-[#0d1017] p-2 shadow-2xl transition-all hover:border-[#00e5a3]/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/sectors/semiconductor.jpg"
                  alt="Semiconductor fabrication cleanroom inspection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded bg-[#08090c]/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00e5a3] backdrop-blur-md border border-[#00e5a3]/30">
                    The Intersection
                  </span>
                  <p className="mt-1 font-serif text-sm font-semibold text-white drop-shadow">
                    Translational research meeting real-world industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7.4 Why Now — The Thesis & The 19-Month Problem */}
        <div className="rounded-2xl border border-[#1f2532] bg-[#0c0e14] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="ambient-glow -top-24 -right-24 h-72 w-72 bg-[#00e5a3]" />

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Thesis Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#00e5a3]">
                WHY NOW · THE MACRO THESIS
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
                India produces world-class research and world-class venture capital. Very little connects the two.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  The country files patents, publishes papers and trains engineers at a scale few nations match. It also has a venture industry that has become genuinely expert at underwriting consumer adoption and software margins. Neither capability transfers to a team with a qualified prototype, a five-year path to meaningful revenue and a capital requirement that front-loads before the first customer exists.
                </p>
                <p>
                  The evidence is in the timelines. A deep tech company in India takes around <strong>19 months</strong> to go from founding to seed, against <strong>10 months</strong> for everything else — and another <strong>20 months</strong> to reach Series A. That gap is not a measure of ambition. It is a measure of how few investors are equipped to say yes.
                </p>
                <p>
                  Most institutional capital arrives only after <strong>TRL 7</strong>, once both the science and the engineering risk have been retired by somebody else. We were built inside the institution that does that retiring — and we invest a full stage earlier because of it.
                </p>
              </div>

              <div className="pt-2 font-mono text-xs text-zinc-400">
                Source: Tracxn data and internal analysis.
              </div>
            </div>

            {/* The 19-Month Problem Comparison Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl border border-[#2a3449] bg-[#08090c]/90 p-6 sm:p-8 backdrop-blur-md shadow-xl">
                <div className="flex items-center justify-between border-b border-[#1b2230] pb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#00e5a3]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-200">
                      The Timeline Gap
                    </span>
                  </div>
                  <span className="rounded bg-[#e24a3f]/10 px-2 py-0.5 font-mono text-[10px] text-[#e24a3f] border border-[#e24a3f]/30">
                    The 19-Month Problem
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  {/* Metric 1: Founding to Seed */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-300">Founding to Seed</span>
                      <span className="text-[#e24a3f] font-bold">19 mo vs 10 mo (+90%)</span>
                    </div>
                    {/* Deep Tech bar */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-20 text-[10px] font-mono text-zinc-400">Deep Tech</span>
                        <div className="h-2 flex-1 rounded-full bg-[#1b2230] overflow-hidden">
                          <div className="h-full bg-[#e24a3f] rounded-full w-[95%]" />
                        </div>
                        <span className="w-10 text-right font-mono text-[11px] text-[#e24a3f] font-semibold">19m</span>
                      </div>
                      {/* Non-deep tech */}
                      <div className="flex items-center gap-2">
                        <span className="w-20 text-[10px] font-mono text-zinc-400">Software / D2C</span>
                        <div className="h-2 flex-1 rounded-full bg-[#1b2230] overflow-hidden">
                          <div className="h-full bg-zinc-600 rounded-full w-[50%]" />
                        </div>
                        <span className="w-10 text-right font-mono text-[11px] text-zinc-400">10m</span>
                      </div>
                    </div>
                  </div>

                  {/* Metric 2: Seed to Series A */}
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-zinc-300">Seed to Series A</span>
                      <span className="text-zinc-400">20 mo vs 16 mo</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-20 text-[10px] font-mono text-zinc-400">Deep Tech</span>
                        <div className="h-2 flex-1 rounded-full bg-[#1b2230] overflow-hidden">
                          <div className="h-full bg-[#00e5a3] rounded-full w-[80%]" />
                        </div>
                        <span className="w-10 text-right font-mono text-[11px] text-[#00e5a3]">20m</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-20 text-[10px] font-mono text-zinc-400">Non-Deep Tech</span>
                        <div className="h-2 flex-1 rounded-full bg-[#1b2230] overflow-hidden">
                          <div className="h-full bg-zinc-600 rounded-full w-[64%]" />
                        </div>
                        <span className="w-10 text-right font-mono text-[11px] text-zinc-400">16m</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight callout */}
                  <div className="rounded-lg bg-[#0e121a] p-3 text-xs text-zinc-300 border border-[#1e2536]">
                    <span className="font-semibold text-[#00e5a3]">Our Solution:</span> We enter at <strong>TRL 4–7</strong> with pre-seed/seed capital of ₹3–5 Cr, shaving quarters off the gestation cycle through SINE infrastructure.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
