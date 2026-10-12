"use client";

import React from "react";
import { ShieldCheck, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
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

  const fundFacts = [
    { item: "Fund", value: "Y-Point Venture Capital Fund-I, first scheme of Y-Point Venture Capital Trust" },
    { item: "Target size", value: "₹250 crore" },
    { item: "Stage & TRL", value: "Pre-seed and seed; TRL 4–7" },
    { item: "Initial cheque", value: "₹3–5 crore" },
    { item: "Portfolio construction", value: "25–30 companies; ~40% reserved for follow-on against milestones" },
    { item: "Concentration limits", value: "Max ~10% investable corpus per company; Max ~20% per sector" },
    { item: "Term", value: "Close-ended; 10 years from First Closing, extendable by 2 years" },
    { item: "SEBI registration", value: "Category II Alternative Investment Fund; IN/AIF2/25-26/1937" },
    { item: "Date of registration", value: "29 October 2025, Mumbai" },
    { item: "Investment Manager", value: "Y-Point Investment Advisors Pvt Ltd (wholly owned by SINE)" },
    { item: "Co-Sponsor Trust", value: "SINE Innoventure Private Trust (sole beneficiary: IIT Bombay)" },
    { item: "Trustee", value: "Vistra ITCL (India) Limited" },
    { item: "Legal & Tax Advisor", value: "Nishith Desai Associates" },
    { item: "Registered Office", value: "SINE Office, 5th Floor, IIT Bombay, Powai, Mumbai 400076" },
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
            <span>Mandate & Institutional Backing</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            THE FUND
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-3xl lg:text-4xl text-black/40 dark:text-white/40">
            India&apos;s first deep technology venture fund managed by an academia-linked incubator.
          </motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl space-y-4 sm:space-y-6 pt-6 sm:pt-10 border-l border-black/10 dark:border-white/20 pl-4 sm:pl-10 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
            <p>
              The Fund was established by <strong>SINE</strong> — the Society for Innovation and Entrepreneurship, the technology business incubator of <strong>IIT Bombay</strong> — to address a gap that two decades of incubation had made impossible to ignore. India&apos;s research institutions were producing technically outstanding companies that could not raise the patient, technically literate capital needed at the point where a proven technology has to become a manufacturable product.
            </p>
            <p>
              We invest at pre-seed and seed stage in ventures emerging from IIT Bombay and other premier research institutions, across artificial intelligence and advanced computing, advanced manufacturing and semiconductor, next generation materials, space and defence, climate and clean technology, and life sciences.
            </p>
            <p>
              The Fund is the first scheme of Y-Point Venture Capital Trust, registered with the Securities and Exchange Board of India as a Category II Alternative Investment Fund.
            </p>
          </motion.div>
        </motion.div>

        {/* Verified Fund Fact Sheet */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="rounded-2xl sm:rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-6 sm:p-14 lg:p-24 space-y-8 sm:space-y-12"
        >
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-black/10 dark:border-white/10 pb-8">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-black dark:text-white" />
              <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white">
                Fund Fact Sheet
              </h2>
            </div>
            <span className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-semibold">
              SEBI Reg. IN/AIF2/25-26/1937
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 divide-y divide-black/5 dark:divide-white/5 md:divide-none">
            {/* Split facts into two columns for editorial look */}
            <div className="space-y-0 divide-y divide-black/5 dark:divide-white/5 border-b md:border-b-0 border-black/5 dark:border-white/5">
              {fundFacts.slice(0, 7).map((fact, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 py-6 text-sm sm:text-base gap-4">
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 font-semibold">{fact.item}</span>
                  <span className="sm:col-span-2 text-black/80 dark:text-white/80 font-light leading-relaxed">{fact.value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-0 divide-y divide-black/5 dark:divide-white/5">
              {fundFacts.slice(7).map((fact, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 py-6 text-sm sm:text-base gap-4">
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 font-semibold">{fact.item}</span>
                  <span className="sm:col-span-2 text-black/80 dark:text-white/80 font-light leading-relaxed">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Investment Team */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          id="team" 
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="space-y-4 max-w-2xl border-b border-black/10 dark:border-white/10 pb-8">
            <div className="font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-bold">
              OPERATORS & INVESTORS
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
              Investment Team
            </h2>
            <p className="font-sans font-light text-black/60 dark:text-white/60 text-lg">
              Who decides, and why they are credible. Decades of early-stage deep tech investing and company creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
            {investmentTeam.map((member, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display font-light text-3xl sm:text-4xl text-black dark:text-white">{member.name}</h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block mt-4 font-semibold">
                    {member.role}
                  </span>
                </div>
                <p className="font-sans font-light text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <hr className="border-black/10 dark:border-white/10" />

        {/* Investment Committee */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          id="ic" 
          className="space-y-16"
        >
          <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl border-b border-black/10 dark:border-white/10 pb-8">
            <div className="font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-bold">
              INDEPENDENT OVERSIGHT & SECTOR AUTHORITY
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
              Investment Committee
            </h2>
            <p className="font-sans font-light text-black/60 dark:text-white/60 text-lg">
              Six members. More than 110 years of combined experience across investment management, space, defence, advanced materials, manufacturing and biotechnology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {investmentCommittee.map((ic, idx) => (
              <motion.div
                variants={fadeInUp}
                key={idx}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-black dark:text-white">{ic.name}</h3>
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">{ic.title}</span>
                </div>
                <p className="font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed">
                  {ic.desc}
                </p>
                <div className="pt-6 border-t border-black/5 dark:border-white/5 font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 font-medium">
                  Two-stage IC evaluation protocol
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="governance" 
          className="rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-12 sm:p-24 space-y-12"
        >
          <div className="flex items-center gap-4 border-b border-black/10 dark:border-white/10 pb-8">
            <Building2 className="h-8 w-8 text-black dark:text-white" />
            <h2 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white">
              Governance & Structure
            </h2>
          </div>
          <div className="space-y-8 font-sans font-light text-base sm:text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-4xl">
            <p>
              Y-Point operates within the governance framework of one of India&apos;s foremost research institutions.
            </p>
            <p>
              Y-Point Venture Capital Fund-I is the first scheme of Y-Point Venture Capital Trust, a Category II Alternative Investment Fund registered with SEBI under registration number <strong>IN/AIF2/25-26/1937</strong>. The Trust is established under the Indian Trusts Act, 1882.
            </p>
            <p>
              Y-Point Investment Advisors Private Limited, a company wholly owned by SINE, acts as investment manager and co-sponsor. SINE Innoventure Private Trust, whose sole beneficiary is the Indian Institute of Technology Bombay, is co-sponsor. Vistra ITCL (India) Limited acts as trustee and provides independent oversight of the Fund&apos;s operations. Nishith Desai Associates is legal and tax counsel to the Fund.
            </p>
            <p>
              Investment decisions are taken by a six-member investment committee through a two-stage review: an initial approval that authorises a term sheet, and a final approval following detailed diligence and a meeting between the founders and the committee.
            </p>
            <div className="inline-flex rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/20 px-6 py-3 font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-semibold">
              The Fund&apos;s establishment was formally approved by the Board of Governors of IIT Bombay.
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
