"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, FileText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function InsightsPage() {
  const handbookPieces = [
    {
      num: "01",
      title: "Assigning IP Out of an IIT: What Every Academic Founder Must Settle in Writing",
      summary: "How intellectual property assignment works through the Dean R&D office, standard equity structures, and avoiding the single most fatal mistake in university spinouts.",
      tag: "Intellectual Property & Governance",
      readTime: "12 min read",
    },
    {
      num: "02",
      title: "The Grant Ladder: How to Sequence ₹3 Cr in Non-Dilutive Capital Before Your Seed Round",
      summary: "Mapping BIRAC BIG, MeitY TIDE, DST, SINE EIR and translational grant schemes against TRL milestones so you don't surrender early equity before the science is proven.",
      tag: "Non-Dilutive Capital",
      readTime: "15 min read",
    },
    {
      num: "03",
      title: "Surviving the iDEX and Defence Procurement Cycle as a Twelve-Person Company",
      summary: "Insights from the co-creator of iDEX on procurement pathways, testing gates, mil-spec qualification, and surviving the multi-quarter qualification gap with export revenue.",
      tag: "Defence & Aerospace",
      readTime: "14 min read",
    },
    {
      num: "04",
      title: "Diligence That Reads a Test Report: What Technical Investors Actually Look For",
      summary: "Why deep tech diligence interrogates characterisation data, failure modes and batch variance rather than pitch decks — and how to prepare your technical dossier.",
      tag: "Technical Diligence",
      readTime: "10 min read",
    },
    {
      num: "05",
      title: "Pricing Hardware When Your BOM Is 60% of Revenue",
      summary: "Why hardware and advanced manufacturing companies fail on service, warranty and working capital rather than component margins — and how to structure contracts.",
      tag: "Manufacturing Economics",
      readTime: "11 min read",
    },
    {
      num: "06",
      title: "The First Customer Problem: Selling Deep Tech to Indian Enterprise and PSUs",
      summary: "Trust is harder than technology. How to leverage institutional weight, pilot protocols, and founder-led qualification to win enterprise risk-takers.",
      tag: "Go-to-Market & Sales",
      readTime: "13 min read",
    },
  ];

  const perspectives = [
    {
      title: "The Nineteen-Month Problem: Why Indian Deep Tech Takes Twice as Long to Reach Seed",
      excerpt: "Tracxn data shows deep tech ventures take 19 months to reach seed versus 10 months for consumer software. That gap is not an ambition issue — it is a structural shortage of investors who read test reports.",
      author: "Y-Point Investment Team",
      date: "September 2026",
    },
    {
      title: "Materials Companies Are Process Companies, and the Industry Underwrites Them Wrong",
      excerpt: "The valuable asset is rarely the molecule — which is published — but the ability to synthesise it repeatedly at ten times the batch size. Why we fund the scale-up, not discovery.",
      author: "Saurabh Singh & Saurabh Jain",
      date: "August 2026",
    },
    {
      title: "What Two Decades of Incubation Data Says About Why Deep Tech Companies Fail",
      excerpt: "Analyzing failure modes across 532 SINE-supported ventures: when spinouts stumble, it is rarely the underlying science. It is IP assignment, team single-points-of-failure, or pilot delays.",
      author: "Shaji Varghese",
      date: "July 2026",
    },
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-24 lg:space-y-32">
        
        {/* Page Hero */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-8 max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60">
            <span>Content Engine · Section 13</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            INSIGHTS & PERSPECTIVES
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-3xl lg:text-4xl text-black/40 dark:text-white/40">
            The Deep Tech Founder&apos;s Handbook and partner essays.
          </motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl space-y-4 sm:space-y-6 pt-6 sm:pt-10 border-l border-black/10 dark:border-white/20 pl-4 sm:pl-10 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
            <p>
              We don&apos;t run a generic newsroom or marketing feed. We publish two things: evergreen practical primers on the mechanics of building a deep tech company in India, and partner perspectives taking a firm, defended position on sector structures.
            </p>
          </motion.div>
        </motion.div>

        {/* Stream 1: The Deep Tech Founder's Handbook */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          id="handbook" 
          className="space-y-10 sm:space-y-16"
        >
          <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4 max-w-2xl border-b border-black/10 dark:border-white/10 pb-6 sm:pb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60 font-medium">
                STREAM 01 · EVERGREEN PRIMERS
              </span>
            </div>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white">
              The Founder&apos;s Handbook
            </h2>
            <p className="font-sans font-light text-black/60 dark:text-white/60 text-base sm:text-lg">
              Practical guides written from internal operational experience: Dean R&amp;D IP processes, SINE grant mechanics, and defence procurement pathways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-16">
            {handbookPieces.map((piece) => (
              <motion.div
                variants={fadeInUp}
                key={piece.num}
                className="group flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black dark:text-white font-medium">{piece.num} · {piece.tag}</span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{piece.readTime}</span>
                  </div>

                  <h3 className="font-display font-light text-3xl text-black dark:text-white leading-tight">
                    {piece.title}
                  </h3>

                  <p className="font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed">
                    {piece.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">Publication Series</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stream 2: Perspectives */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="space-y-4 max-w-2xl border-b border-black/10 dark:border-white/10 pb-8">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-black dark:text-white" />
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60 font-medium">
                STREAM 02 · PARTNER ESSAYS
              </span>
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
              Perspectives
            </h2>
            <p className="font-sans font-light text-black/60 dark:text-white/60 text-lg">
              Partner worldview on why deep tech in India behaves differently from consumer software and foreign models.
            </p>
          </motion.div>

          <div className="space-y-0 divide-y divide-black/10 dark:divide-white/10">
            {perspectives.map((essay, idx) => (
              <motion.div variants={fadeInUp} key={idx} className="py-12 first:pt-0 last:pb-0 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{essay.author}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">{essay.date}</span>
                </div>
                <h3 className="font-display font-light text-3xl sm:text-4xl text-black dark:text-white">
                  {essay.title}
                </h3>
                <p className="font-sans font-light text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-4xl">
                  {essay.excerpt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stream 3: Signal from the lab CTA */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-12 sm:p-24 text-center space-y-12"
        >
          <h3 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
            Get Every Handbook Primer Delivered
          </h3>
          <p className="font-sans font-light text-black/60 dark:text-white/60 text-lg max-w-md mx-auto">
            A monthly note on Indian deep tech pipeline, technical diligence, and founder guides. No hype.
          </p>
          <div className="pt-4">
            <Link
              href="/#newsletter"
              className="group inline-flex items-center gap-3 rounded-full bg-black dark:bg-white px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all"
            >
              <span>Subscribe to Signal from the Lab</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
