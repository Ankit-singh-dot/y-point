"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    founderName: "",
    founderEmail: "",
    websiteOrLinkedin: "",
    sector: "AI & Advanced Computing",
    institution: "",
    currentTrl: "TRL 4 - Component validation in lab",
    description: "",
    raisedSoFar: "",
    heardAboutUs: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    if (words <= 200) {
      setFormData({ ...formData, description: text });
      setWordCount(words);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <span>For Founders · 10-Day Commitment</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="font-display font-light text-4xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            TELL US WHAT YOU ARE BUILDING.
          </motion.h1>

          <motion.p variants={fadeInUp} className="font-display font-light text-xl sm:text-3xl lg:text-4xl text-black/40 dark:text-white/40">
            We read everything that comes in, and we reply — including when the answer is no.
          </motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl space-y-4 sm:space-y-6 pt-6 sm:pt-10 border-l border-black/10 dark:border-white/20 pl-4 sm:pl-10 text-black/70 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
            <h2 className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 mb-2">WHO WE BACK</h2>
            <p>
              Pre-seed and seed stage companies in India where the hard part is the technology. Most of our companies come out of IIT Bombay or another research institution, but that is not a requirement. What matters is that the science is demonstrated, real engineering risk remains, and the team is capable of retiring it. In TRL terms, that is roughly <strong>4 to 7</strong>.
            </p>
            <p>
              Our initial cheque is <strong>₹3–5 crore</strong>, and we reserve capital for follow-on rounds in companies that clear pre-agreed milestones.
            </p>
          </motion.div>
        </motion.div>

        {/* Process Map */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="rounded-2xl sm:rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-6 sm:p-14 lg:p-20 space-y-10 sm:space-y-16"
        >
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6 sm:pb-8">
            <h3 className="font-display font-light text-3xl sm:text-5xl text-black dark:text-white">
              What happens next
            </h3>
            <span className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full w-max">
              <Clock className="h-4 w-4" />
              <span>10 Working Days SLA</span>
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 sm:gap-y-16 text-black/70 dark:text-white/70">
            <div className="space-y-2 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 block">01 We read it</span>
              <p className="font-sans font-light text-sm sm:text-base leading-relaxed">Every submission is reviewed directly by an investment team member, not an automated filter.</p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 block">02 10-day response</span>
              <p className="font-sans font-light text-sm sm:text-base leading-relaxed">We respond within 10 working days, either way. We do not leave founders in indefinite limbo.</p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 block">03 First discussion</span>
              <p className="font-sans font-light text-sm sm:text-base leading-relaxed">If there is a fit, we schedule a technical discussion rather than a traditional sales pitch.</p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 block">04 Term sheet at Level 1 IC</span>
              <p className="font-sans font-light text-sm sm:text-base leading-relaxed">Unlike most funds, term sheets are authorised at initial IC stage, not postponed to the very end.</p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 block">05 Detailed diligence</span>
              <p className="font-sans font-light text-sm sm:text-base leading-relaxed">Independent expert validation of technology, characterisation data, and IP. (6–10 weeks).</p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 block">06 In-person IC meeting</span>
              <p className="font-sans font-light text-sm sm:text-base leading-relaxed">You interrogate the committee as much as they evaluate you before any final cheque.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-6 sm:pt-8 text-xs font-sans font-light text-black/40 dark:text-white/40 border-t border-black/10 dark:border-white/10">
            <strong>Note on NDAs:</strong> We are not able to sign non-disclosure agreements before a first conversation due to high volume of adjacent technologies. We treat all submissions with strict internal confidentiality.
          </motion.div>
        </motion.div>

        {/* The Application Form */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 p-5 sm:p-12 lg:p-20"
        >
          {submitted ? (
            <div className="text-center py-24 space-y-8">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <CheckCircle2 className="h-10 w-10 text-black dark:text-white" />
              </div>
              <h3 className="font-display font-light text-4xl sm:text-6xl text-black dark:text-white">
                Submission Received
              </h3>
              <p className="font-sans font-light text-black/60 dark:text-white/60 text-lg max-w-lg mx-auto leading-relaxed">
                Thank you for sharing your work with Y-Point. A member of our investment team will review your application and respond within <strong>10 working days</strong>.
              </p>
              <div className="pt-8">
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full border border-black/20 dark:border-white/20 px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  Submit another application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 max-w-4xl mx-auto">
              <div className="border-b border-black/10 dark:border-white/10 pb-8 text-center sm:text-left">
                <h3 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
                  Application Form
                </h3>
                <p className="font-sans font-light text-sm sm:text-base text-black/60 dark:text-white/60 mt-4">
                  Single-screen form. Clear and specific information beats polish.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* Company Name */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    Company Name <span className="text-black dark:text-white">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name (or 'Not yet incorporated')"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Founder Name & Email */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    Founder Name & Email <span className="text-black dark:text-white">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.founderName}
                      onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                      className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.founderEmail}
                      onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                      className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Website or LinkedIn */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    Website or LinkedIn (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={formData.websiteOrLinkedin}
                    onChange={(e) => setFormData({ ...formData, websiteOrLinkedin: e.target.value })}
                    className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Sector */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    Sector Vertical <span className="text-black dark:text-white">*</span>
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    <option value="AI & Advanced Computing">AI & Advanced Computing</option>
                    <option value="Advanced Manufacturing & Semiconductor">Advanced Manufacturing & Semiconductor</option>
                    <option value="Next Gen Materials">Next Gen Materials</option>
                    <option value="Space & Defence">Space & Defence</option>
                    <option value="Climate & CleanTech">Climate & CleanTech</option>
                    <option value="Life Sciences">Life Sciences</option>
                    <option value="Other Deep Tech">Other Deep Tech</option>
                  </select>
                </div>

                {/* Institution of Origin */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    Institution of Origin (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. IIT Bombay, IISc, etc."
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Current TRL */}
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    Current TRL Status <span className="text-black dark:text-white">*</span>
                  </label>
                  <select
                    value={formData.currentTrl}
                    onChange={(e) => setFormData({ ...formData, currentTrl: e.target.value })}
                    className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors appearance-none"
                  >
                    <option value="TRL 1-3 - Research proof of concept">TRL 1–3 — Fundamental research</option>
                    <option value="TRL 4 - Component validation in lab">TRL 4 — Component validation (Y-Point entry)</option>
                    <option value="TRL 5 - Integrated prototype in simulated environment">TRL 5 — Integrated prototype (Y-Point entry)</option>
                    <option value="TRL 6 - Prototype demonstrated in operational environment">TRL 6 — Prototype tested (Y-Point entry)</option>
                    <option value="TRL 7 - System prototype demonstrated in operational field">TRL 7 — System demonstrated (Y-Point entry)</option>
                    <option value="TRL 8-9 - Commercial production & qualified">TRL 8–9 — Commercial production</option>
                  </select>
                </div>
              </div>

              {/* What are you building and why is it hard? */}
              <div className="space-y-3 pt-6">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                    What are you building and why is it hard? <span className="text-black dark:text-white">*</span>
                  </label>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                    {wordCount}/200 words
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleDescriptionChange}
                  placeholder="Describe the underlying science, the engineering bottlenecks, what you have characterised, and why competitors cannot simply copy it..."
                  className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-[#0a0a0a] p-6 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* What have you raised so far, including grants? */}
              <div className="space-y-3">
                <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/60 dark:text-white/60">
                  What have you raised so far, including grants? <span className="text-black dark:text-white">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ₹50L BIRAC BIG grant, ₹1.2 Cr friends & family"
                  value={formData.raisedSoFar}
                  onChange={(e) => setFormData({ ...formData, raisedSoFar: e.target.value })}
                  className="w-full rounded-none border-b border-black/20 dark:border-white/20 bg-transparent px-0 py-4 text-base text-black dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-black/10 dark:border-white/10">
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 text-center sm:text-left">
                  Initial cheque: ₹3–5 crore <br/> Deployed across 25–30 companies
                </div>
                <button
                  type="submit"
                  className="group w-full sm:w-auto rounded-full bg-black dark:bg-white px-10 py-5 text-xs font-sans uppercase tracking-[0.2em] text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-all flex items-center justify-center gap-3"
                >
                  <span>Submit Application</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  );
}
