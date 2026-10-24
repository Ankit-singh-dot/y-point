"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, ExternalLink, Video, BookOpen, FileText, Calendar, Check, Send } from "lucide-react";

interface SineVoicesEpisode {
  id: string;
  epNumber: string;
  videoId: string;
  title: string;
  guestOrTopic: string;
  summary: string;
  thumbnail: string;
  category: string;
}

interface ContentPiece {
  category: "Research" | "Essays" | "Ecosystem" | "Events";
  title: string;
  abstract: string;
  sector: string;
  readTime: string;
  date: string;
}

export default function ContentSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeSector, setActiveSector] = useState<string>("All");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const playlistUrl = "https://www.youtube.com/playlist?list=PLDKsKSD5DcTIzCGj3IH8mOKo5nLUoC-XM";

  // Real SINE Voices Playlist Episodes
  const sineVoicesEpisodes: SineVoicesEpisode[] = [
    {
      id: "ep-04",
      epNumber: "EPISODE 04",
      videoId: "vP986jbeIWk",
      title: "Episode 4 - The VC Playbook",
      guestOrTopic: "Institutional Deeptech Venture Capital Mechanics",
      summary: "Decoding how venture investors evaluate science-backed startups, navigating the TRL 4–7 Valley of Death, term sheet nuances, and what it takes to syndicate institutional capital in India.",
      thumbnail: "https://i.ytimg.com/vi/vP986jbeIWk/hqdefault.jpg",
      category: "Venture Capital & Scale",
    },
    {
      id: "ep-03",
      epNumber: "EPISODE 03",
      videoId: "DqhzDDP_ytU",
      title: "Episode 3 - Built Against the Odds: Inside Atomberg’s Unlikely Rise",
      guestOrTopic: "Founders of Atomberg Technologies",
      summary: "The candid inside story of building a hardware category leader from SINE IIT Bombay, pioneering energy-efficient BLDC motors, factory floor trials, and achieving national commercial scale.",
      thumbnail: "https://i.ytimg.com/vi/DqhzDDP_ytU/hqdefault.jpg",
      category: "Hardware & Manufacturing",
    },
    {
      id: "ep-02",
      epNumber: "EPISODE 02",
      videoId: "QyuzPcX8jyY",
      title: "Episode 2 - What's your excuse? The playbook to institution building with Mr Ashank Desai",
      guestOrTopic: "Mr. Ashank Desai (Founder, Mastek & Co-founder, SINE)",
      summary: "Three decades of building technology institutions: corporate governance, enduring deeptech ecosystems, university-industry bridges, and leadership resilience.",
      thumbnail: "https://i.ytimg.com/vi/QyuzPcX8jyY/hqdefault.jpg",
      category: "Institution Building",
    },
    {
      id: "ep-01",
      epNumber: "EPISODE 01",
      videoId: "VJeastYzeSc",
      title: "Episode 1 - From labs to startups at SINE IIT Bombay",
      guestOrTopic: "Translational Deeptech Leadership",
      summary: "How intellectual property born inside IIT Bombay laboratories is de-risked, incubated, and commercialized into category-defining industrial companies.",
      thumbnail: "https://i.ytimg.com/vi/VJeastYzeSc/hqdefault.jpg",
      category: "Lab to Market",
    },
    {
      id: "trailer",
      epNumber: "SERIES TRAILER",
      videoId: "WgLTPvRYjXs",
      title: "EP 01 Trailer - From labs to startups at SINE, IIT Bombay",
      guestOrTopic: "SINE IIT Bombay Official Series",
      summary: "Two decades, 220+ ventures, and India's premier academic incubator: an introduction to the founders, scientists, and operators defining deep technology.",
      thumbnail: "https://i.ytimg.com/vi/WgLTPvRYjXs/hqdefault.jpg",
      category: "Series Introduction",
    },
  ];

  const contentPieces: ContentPiece[] = [
    {
      category: "Research",
      title: "Assigning IP Out of an IIT: What Every Academic Founder Must Settle in Writing",
      abstract: "How intellectual property assignment works through the Dean R&D office, standard equity structures, and avoiding fatal university spinout missteps.",
      sector: "Governance & IP",
      readTime: "12 min read",
      date: "October 2026",
    },
    {
      category: "Essays",
      title: "The Nineteen-Month Problem: Why Indian Deep Tech Takes Twice as Long to Reach Seed",
      abstract: "Tracxn data shows deep tech ventures take 19 months to reach seed versus 10 months for consumer software. That gap is a structural shortage of test-report-literate capital.",
      sector: "Venture Economics",
      readTime: "10 min read",
      date: "September 2026",
    },
    {
      category: "Research",
      title: "The Grant Ladder: How to Sequence ₹3 Cr in Non-Dilutive Capital Before Your Seed Round",
      abstract: "Mapping BIRAC BIG, MeitY TIDE, DST, SINE EIR and translational grant schemes against TRL milestones so you don't surrender early equity before the science works.",
      sector: "Capital Architecture",
      readTime: "15 min read",
      date: "August 2026",
    },
    {
      category: "Essays",
      title: "Surviving the iDEX and Defence Procurement Cycle as a Twelve-Person Company",
      abstract: "Insights from the co-creator of iDEX on procurement pathways, testing gates, mil-spec qualification, and surviving the multi-quarter qualification gap with export revenue.",
      sector: "Space & Defence",
      readTime: "14 min read",
      date: "July 2026",
    },
    {
      category: "Ecosystem",
      title: "Diligence That Reads a Test Report: What Technical Investors Actually Look For",
      abstract: "Why deep tech diligence interrogates characterisation data, failure modes and batch variance rather than pitch decks — and how to prepare your technical dossier.",
      sector: "Technical Diligence",
      readTime: "11 min read",
      date: "June 2026",
    },
    {
      category: "Research",
      title: "Pricing Hardware When Your BOM Is 60% of Revenue",
      abstract: "Why hardware and advanced manufacturing companies fail on service, warranty and working capital rather than component margins — and how to structure contracts.",
      sector: "Semicon & Mfg",
      readTime: "13 min read",
      date: "May 2026",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const filteredContent = contentPieces.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchSector = activeSector === "All" || item.sector === activeSector;
    return matchCategory && matchSector;
  });

  const activeVideo = sineVoicesEpisodes[selectedVideoIndex];

  return (
    <section id="content" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-24 sm:pt-32 pb-24 border-b border-[#E5E5E5] dark:border-white/10 overflow-hidden">
      {/* Subtle IIT Bombay Crest Watermark in Background */}
      <div 
        className="absolute -right-28 top-1/4 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px]"
        aria-hidden="true"
      >
        <Image
          src="/iitb/iitb-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] dark:border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              05 — Content &amp; Media
            </span>
            <span className="h-1 w-1 rounded-full bg-[#0D7377]" />
            <span className="font-sans text-xs uppercase tracking-wider text-[#666666] dark:text-zinc-400">
              SINE Voices &amp; Research Archive
            </span>
          </div>

          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs tracking-wider text-[#0D7377] hover:underline bg-[#0D7377]/10 px-3 py-1 rounded"
          >
            <span>WATCH ON YOUTUBE PLAYLIST</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* HERO TITLE & SINE VOICES INSTITUTIONAL ANCHOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-light text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12]">
              Signal from the Lab
            </h1>
            <p className="font-sans font-light text-lg sm:text-xl text-[#666666] dark:text-zinc-300 leading-relaxed max-w-3xl">
              Unfiltered dialogues with deep technology founders, scientists, and institutional builders translating breakthrough physics, biology, and silicon from Indian laboratories to global category scale.
            </p>
          </div>

          {/* Institutional Anchor Card */}
          <div className="lg:col-span-4">
            <div className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black shadow-md">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/iitb/crest-plaque.jpg"
                  alt="SINE IIT Bombay Voices"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  <div className="relative h-3.5 w-3.5 shrink-0">
                    <Image src="/iitb/iitb-logo.png" alt="" fill className="object-contain" />
                  </div>
                  <span className="font-mono text-[9px] text-white tracking-wider font-semibold">
                    SINE · IIT BOMBAY
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="font-mono text-[10px] text-[#00E5A3] font-semibold">
                    ज्ञानं परमं ध्येयम्
                  </div>
                  <div className="font-sans font-medium text-xs text-white">
                    Founders, Faculty &amp; Operators
                  </div>
                  <p className="hidden sm:block font-sans text-[11px] text-white/70 font-light leading-snug">
                    Real discussions on university spinouts, TRL maturation, and building hardware winners from Powai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. INTEGRATED YOUTUBE PLAYLIST HUB: SINE VOICES
           ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3]/50 dark:bg-white/[0.02] mb-20 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                SINE Voices · Video Podcast Series
              </div>
              <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
                SINE IIT Bombay Video Podcasts
              </h3>
            </div>

            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-sans text-xs uppercase tracking-wider font-semibold transition-all hover:opacity-90 shadow-sm"
            >
              <span>Play All on YouTube</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Interactive Player Theater */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Active 16:9 Video Player */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-black/10 dark:border-white/10 shadow-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Active Video Info */}
              <div className="space-y-2 p-4 rounded-lg bg-white dark:bg-[#111] border border-[#E5E5E5] dark:border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#0D7377] bg-[#0D7377]/10 px-2 py-0.5 rounded">
                    {activeVideo.epNumber} · {activeVideo.category}
                  </span>
                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo.videoId}&list=PLDKsKSD5DcTIzCGj3IH8mOKo5nLUoC-XM`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#666] hover:text-[#0D7377] inline-flex items-center gap-1"
                  >
                    <span>Watch in YouTube</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <h4 className="font-display font-medium text-lg sm:text-xl text-[#0A0A0A] dark:text-white">
                  {activeVideo.title}
                </h4>

                <p className="font-sans text-xs sm:text-sm text-[#666] dark:text-zinc-300 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {activeVideo.summary}
                </p>
              </div>
            </div>

            {/* Right: Scrollable Playlist Selector */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#666] dark:text-zinc-400 font-semibold">
                  Playlist Queue ({sineVoicesEpisodes.length} Episodes)
                </span>
                <span className="font-mono text-[11px] text-[#0D7377]">Click to Play</span>
              </div>

              <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto gap-2.5 pb-2.5 lg:pb-0 lg:max-h-[500px] scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
                {sineVoicesEpisodes.map((ep, idx) => {
                  const isSelected = selectedVideoIndex === idx;

                  return (
                    <button
                      key={ep.id}
                      onClick={() => setSelectedVideoIndex(idx)}
                      className={`w-[230px] sm:w-[260px] lg:w-full shrink-0 snap-start p-2.5 rounded-lg border text-left transition-all flex gap-3 items-center ${
                        isSelected
                          ? "bg-white dark:bg-[#161616] border-[#0D7377] ring-1 ring-[#0D7377] shadow-sm"
                          : "bg-white/60 dark:bg-[#101010] border-[#E5E5E5] dark:border-white/10 hover:border-black/20 dark:hover:border-white/20"
                      }`}
                    >
                      {/* Thumbnail with Play Overlay */}
                      <div className="relative aspect-[16/9] w-20 sm:w-24 shrink-0 rounded overflow-hidden bg-black border border-black/10 dark:border-white/10">
                        <img
                          src={ep.thumbnail}
                          alt={ep.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 flex items-center justify-center transition-all ${
                          isSelected ? "bg-[#0D7377]/40" : "bg-black/30 hover:bg-black/10"
                        }`}>
                          <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center ${
                            isSelected ? "bg-[#0D7377] text-white" : "bg-white/80 text-black"
                          }`}>
                            <Play className="h-2 w-2 sm:h-2.5 sm:w-2.5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Episode Details */}
                      <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-mono text-[9px] font-bold text-[#0D7377]">
                            {ep.epNumber}
                          </span>
                        </div>
                        <h5 className="font-sans font-bold text-[11px] sm:text-xs text-[#0A0A0A] dark:text-white line-clamp-2 leading-snug">
                          {ep.title}
                        </h5>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Direct Full Playlist Action Card */}
              <div className="p-3.5 rounded-lg border border-[#0D7377]/30 bg-[#0D7377]/5 dark:bg-[#0D7377]/10 flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="font-mono text-[10px] text-[#0D7377] uppercase font-bold block">
                    Full SINE Voices Archive
                  </span>
                  <span className="font-sans text-[11px] text-[#666] dark:text-zinc-300">
                    Subscribe to SINE IIT Bombay on YouTube
                  </span>
                </div>
                <a
                  href={playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#0D7377] hover:bg-[#0D7377]/90 text-white font-mono text-[10px] uppercase tracking-wider font-semibold shrink-0 inline-flex items-center gap-1"
                >
                  <span>Open List</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* 3. ESSAYS & RESEARCH (2-Column Editorial Grid with Filters) */}
        <div className="space-y-10 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E5E5] dark:border-white/10 pb-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
                Theses &amp; Deeptech Economics
              </span>
              <h3 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
                Research &amp; Thought Leadership
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {["All", "Research", "Essays", "Ecosystem"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded text-xs font-mono uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-[#0D7377] text-white font-semibold shadow-sm"
                      : "bg-[#F5F5F3] dark:bg-white/5 text-[#666666] dark:text-zinc-400 hover:border-black/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredContent.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-[#0E0E0E] hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-[#666666] dark:text-zinc-400">
                    <span className="text-[#0D7377] font-semibold">{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h4 className="font-display font-light text-2xl text-[#0A0A0A] dark:text-white group-hover:text-[#0D7377] dark:group-hover:text-teal-400 transition-colors leading-snug">
                    {item.title}
                  </h4>

                  <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400 leading-relaxed">
                    {item.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#666666] dark:text-zinc-500">
                    {item.sector} · {item.date}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-[#0D7377] group-hover:underline">
                    <span>Read Analysis</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. NEWSLETTER SUBSCRIPTION BAR */}
        <div className="p-8 sm:p-12 rounded-xl border border-[#E5E5E5] dark:border-white/10 bg-[#F5F5F3] dark:bg-[#111111] max-w-4xl mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Signal From The Lab — Monthly Memo
            </span>
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
              Written for founders who read characterisation reports.
            </h3>
            <p className="font-sans font-light text-sm text-[#666666] dark:text-zinc-400 max-w-xl mx-auto">
              One analytical memo each month covering hard tech bottlenecks, TRL translation data, and university IP frameworks. No marketing spam.
            </p>
          </div>

          {subscribed ? (
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono text-xs inline-flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>You are subscribed to Signal from the Lab.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@institution.edu"
                className="flex-1 px-4 py-3 rounded-lg border border-[#E5E5E5] dark:border-white/10 bg-white dark:bg-black/50 text-[#0A0A0A] dark:text-white font-sans text-sm placeholder:text-[#999999] focus:outline-hidden focus:border-[#0D7377]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#0D7377] hover:bg-[#0D7377]/90 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="h-3 w-3" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
