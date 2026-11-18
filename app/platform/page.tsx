"use client";

import React, { useRef } from "react";
import PhotoHero from "../components/PhotoHero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PlatformPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });


  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <>
    <PhotoHero photo="campusLawn" eyebrow="Platform" title="How we work with founders." intro="Capital is the least differentiated thing we bring." />
    <div ref={containerRef} className="relative min-h-screen pt-16 sm:pt-20 pb-14 sm:pb-20 lg:pb-24 overflow-hidden">

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 space-y-14 sm:space-y-24 lg:space-y-32">
        


        {/* Four Deep Dive Pillars */}
        <div className="space-y-16 sm:space-y-32">
          
          {/* Pillar 1 */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-5 space-y-4 md:sticky md:top-32">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] font-bold">
                01 — OWNERSHIP STRUCTURE
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white leading-tight">
                We are the capital arm of the incubator.
              </h2>
              
            </div>
            <div className="md:col-span-7 space-y-6 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                SINE has been building deep tech companies at IIT Bombay since 2004: <strong>532 ventures supported</strong>, 1,200+ innovators, 103 companies currently incubated, around 300 IP assets generated.
              </p>
              <p>
                Y-Point is owned by SINE. That is not a partnership announcement — it is the ownership structure. In practice it means our companies reach us having already used infrastructure most startups never see: specialised bio-labs, electronics and prototyping facilities, metalworking for advanced manufacturing, and privileged access to IIT Bombay&apos;s research laboratories and equipment.
              </p>
              <p>
                It also means the intellectual property question is handled properly, early. Clean IP transfer and licensing runs through the Dean R&amp;D office under formalised equity structures. The single most common way an academic spinout damages itself is by getting that assignment wrong at the start.
              </p>
              <p>
                SINE&apos;s own funding ladder does the work before us: Institute of Eminence and entrepreneur-in-residence grants, translational grants, and scale-up seed funding move a venture from TRL 3 toward TRL 7 without taking venture equity.
              </p>
            </div>
          </motion.div>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Pillar 2 */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-5 space-y-4 md:sticky md:top-32">
              <span className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-bold">
                02 — TECHNICAL RIGOR
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white leading-tight">
                We underwrite technology, not traction.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                Most investors ask for traction. At TRL 5 there is often no traction to discuss, so the question is either answered dishonestly or the meeting ends.
              </p>
              <p>
                We assess the technology directly. Detailed diligence includes independent expert validation of the technology, the IP, the TRL claim, scalability and the surrounding IP landscape — drawn from IIT Bombay faculty and from operators who have built the same class of system. We work through the characterisation data, the failure modes, the scale-up assumptions and the parts of the design that are not settled.
              </p>
              <p>
                Founders consistently tell us this is the most useful part of our process, including the ones we decline. We think that is the right outcome. A fast, well-reasoned no is worth more to a founder than a slow maybe.
              </p>
            </div>
          </motion.div>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Pillar 3 */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-5 space-y-4 md:sticky md:top-32">
              <span className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-bold">
                03 — PRACTITIONER DECISION-MAKERS
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white leading-tight">
                The people who decide have done the work.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                Our six-member investment committee brings more than 110 years of combined experience across investment management, space, defence, advanced materials, manufacturing and biotechnology.
              </p>
              <p>
                It includes a former Associate Director at ISRO&apos;s Satish Dhawan Space Centre who contributed to Chandrayaan-1 and Mangalyaan; a co-creator of the iDEX initiative who served as a Director in the Ministry of Defence Production; the former Managing Director of AstraZeneca India, who led development of the company&apos;s first anti-TB molecule; and two general partners running active early-stage venture funds.
              </p>
              <p>
                For a founder, this is not a governance detail. It means the person assessing your propulsion architecture has qualified one, and the person assessing your procurement plan helped design the programme you are applying to.
              </p>
            </div>
          </motion.div>

          <hr className="border-black/5 dark:border-white/5" />

          {/* Pillar 4 */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
          >
            <div className="md:col-span-5 space-y-4 md:sticky md:top-32">
              <span className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-bold">
                04 — COMMERCIAL ACCESS & RESERVES
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white leading-tight">
                The hardest sale is the first one.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
              <p>
                A deep tech company&apos;s first customer is rarely won on product quality. It is won on someone being willing to take a risk on an unproven supplier, which is a trust problem before it is a technical one.
              </p>
              <p>
                We open doors into IIT Bombay&apos;s industry relationships, its network of 25+ industry partners, public sector and policy channels, and an alumni network of more than 65,000 people. Where it helps, we put institutional weight behind an introduction a two-person startup could not make alone.
              </p>
              <p>
                We also work on the round after ours from the day we invest — syndicating follow-on funding with growth investors, and using the relationships SINE has built with more than 100 investors over two decades. Around 40% of the fund is reserved for follow-on, allocated to companies that clear pre-agreed technical and commercial milestones.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Institutional Closing CTA */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] p-10 sm:p-16 text-center space-y-6 overflow-hidden shadow-lg"
        >

          <div className="relative space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              Pitch to Y-Point · SINE IIT Bombay
            </span>
            <h3 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white max-w-2xl mx-auto leading-tight">
              Ready to build with institutional backing?
            </h3>
            <p className="font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
              We invest in early-stage deeptech ventures developing technology-led solutions with validated proof-of-concept (typically TRL 4+).
            </p>
          </div>

          <div className="relative pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 rounded-full bg-black dark:bg-white px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] text-white dark:text-black hover:bg-[#0D7377] dark:hover:bg-[#00E5A3] transition-all shadow-md"
            >
              <span>Apply For Funding</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300 hover:border-black dark:hover:border-white transition-all"
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>

          <div className="relative pt-4 font-mono text-[11px] text-zinc-400">
            SINE Office, 5th Floor, RBTIC Building, IIT Bombay, Powai, Mumbai 400076
          </div>
        </motion.div>

      </div>
    </div>
    </>
  );
}
