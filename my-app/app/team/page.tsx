"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, ShieldCheck } from "lucide-react";

export default function TeamPage() {
  const investmentTeam = [
    {
      name: "Shaji Varghese",
      role: "Director, Y-Point Investment Advisors; CEO, SINE IIT Bombay",
      bio: "Shaji has spent more than three decades in private equity and venture capital, including as a Partner at BTS India Private Equity Fund and in senior roles at GVFL and the Kerala Venture Capital Fund, across more than fifteen investments. As CEO of SINE he runs the incubator Y-Point invests out of, which makes him uniquely placed to see a company's technical trajectory years before a term sheet is on the table. CFA (India), MBA, and B.Tech from Kerala.",
    },
    {
      name: "Saurabh Jain",
      role: "Fund Manager",
      bio: "Saurabh leads the Fund's investment activity, from sourcing through diligence to portfolio support, with a focus on semiconductors, advanced computing and industrial technology. He spent over a decade in early-stage investing, most recently at Refex Capital and earlier at Tracxn, and has led investments in Indian deep tech companies through the difficult years between prototype and production. B.Tech, IIT Kharagpur.",
    },
    {
      name: "Saurabh Singh",
      role: "Investment Manager",
      bio: "Saurabh brings an operator's lens to diligence. He began his career at PwC and then founded three companies, including a deep tech venture in sustainable biotechnology, before moving to the investing side. He works across sourcing, technical diligence and portfolio support. B.Tech, BIT Mesra.",
    },
    {
      name: "Jay Dhadhal",
      role: "Senior Analyst",
      bio: "Jay covers diligence, fund operations and investor relations, having evaluated more than 250 opportunities and worked on five investments at GVFL. He also handles the Fund's SEBI AIF compliance and its relationships with institutional investors including SIDBI and SBI. CFA Level 2 and CAIA Level 1 candidate.",
    },
  ];

  const investmentCommittee = [
    {
      name: "Samir Kumar",
      title: "General Partner, Athera Ventures",
      desc: "Twenty-four years in early-stage investing and fifteen in the technology industry. IIT Bombay and IIM Bengaluru.",
    },
    {
      name: "Gagan Goyal",
      title: "General Partner, IndiaQuotient",
      desc: "Entrepreneur turned investor with over twenty years' experience, an active angel portfolio and a focus on IP-led companies. IIT Bombay.",
    },
    {
      name: "Dr Seshagiri Rao V (Retd)",
      title: "Former Associate Director, ISRO Satish Dhawan Space Centre",
      desc: "Over forty years in aerospace systems, real-time networks and radar. A key contributor to the Chandrayaan-1 and Mangalyaan missions.",
    },
    {
      name: "Ravin Kulshrestha (Retd)",
      title: "Co-creator of the iDEX initiative",
      desc: "Former Director at Advanced Weapons and Equipment India Limited, and previously a Director in the Ministry of Defence Production. IIT Kanpur.",
    },
    {
      name: "Dr T S Balganesh",
      title: "President, GangaGen Biotechnologies",
      desc: "More than thirty years in antibacterial drug discovery, and former Managing Director of AstraZeneca India. Advisor to CSIR laboratories and the Gates Foundation.",
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-20 sm:space-y-32">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6 max-w-4xl"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60"
          >
            <Users className="h-3 w-3 text-teal-600 dark:text-teal-400" />
            Leadership & Governance
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight text-black dark:text-white"
          >
            Team & Committee
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-sans font-light text-lg sm:text-xl text-black/70 dark:text-white/70 max-w-2xl leading-relaxed"
          >
            Who decides, and why they are credible. Operators, veteran fund managers, and sovereign scientific authorities evaluating test reports rather than buzzwords.
          </motion.p>
        </motion.div>

        {/* Investment Team */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="space-y-4 max-w-2xl border-b border-black/10 dark:border-white/10 pb-8">
            <div className="font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-bold">
              OPERATORS & INVESTORS
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-black dark:text-white">
              Investment Team
            </h2>
            <p className="font-sans font-light text-black/60 dark:text-white/60 text-base sm:text-lg">
              Decades of early-stage deep tech investing, company creation, and hands-on governance out of SINE IIT Bombay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 sm:gap-y-20">
            {investmentTeam.map((member, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="space-y-5 p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]"
              >
                <div>
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-black dark:text-white">{member.name}</h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 block mt-2 font-semibold">
                    {member.role}
                  </span>
                </div>
                <p className="font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Committee */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl border-b border-black/10 dark:border-white/10 pb-8">
            <div className="font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-bold">
              INDEPENDENT OVERSIGHT & SECTOR AUTHORITY
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-black dark:text-white">
              Investment Committee
            </h2>
            <p className="font-sans font-light text-black/60 dark:text-white/60 text-base sm:text-lg">
              More than 110 years of combined authority across space, defence, semiconductors, advanced materials, and clinical biotechnology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentCommittee.map((ic, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="space-y-4 p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]"
              >
                <div className="space-y-2">
                  <h3 className="font-display font-light text-xl sm:text-2xl text-black dark:text-white">{ic.name}</h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">{ic.title}</span>
                </div>
                <p className="font-sans font-light text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  {ic.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h4 className="font-display font-light text-2xl sm:text-3xl text-black dark:text-white">
              Ready for technical diligence?
            </h4>
            <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60">
              Submit your milestone data, test characterisation, and grant journey for first institutional review.
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-sans text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
          >
            Apply for funding
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
