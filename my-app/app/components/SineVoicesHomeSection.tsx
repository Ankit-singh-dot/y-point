"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";

interface Episode {
  id: string;
  epNumber: string;
  videoId: string;
  title: string;
  guestOrTopic: string;
  summary: string;
  thumbnail: string;
  category: string;
}

const EPISODES: Episode[] = [
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

export default function SineVoicesHomeSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeVideo = EPISODES[activeIdx];
  const playlistUrl = "https://www.youtube.com/playlist?list=PLDKsKSD5DcTIzCGj3IH8mOKo5nLUoC-XM";

  return (
    <section id="sine-voices" className="relative z-10 py-20 sm:py-28 border-t border-black/[0.08] dark:border-white/[0.08] bg-[#F9F9F8] dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-black/10 dark:border-white/10 pb-5 sm:pb-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              SINE Voices · Video Podcast Series
            </div>
            <h2 className="font-display font-light text-2xl sm:text-4xl md:text-5xl text-[#0A0A0A] dark:text-white tracking-tight leading-tight">
              Signal from the Lab
            </h2>
            <p className="font-sans font-light text-xs sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Candid conversations with the founders, venture capitalists, and institution builders translating Indian laboratory breakthroughs into global industry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-0">
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-sans text-[10px] sm:text-xs uppercase tracking-[0.16em] font-semibold transition-all hover:opacity-90 inline-flex items-center gap-1.5 sm:gap-2 shadow-sm"
            >
              <span>Play All</span>
              <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </a>
            <Link
              href="/insights"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white font-sans text-[10px] sm:text-xs uppercase tracking-[0.16em] text-zinc-700 dark:text-zinc-300 transition-all inline-flex items-center gap-1.5 font-medium"
            >
              <span>Full Content Hub</span>
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Theater Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: 16:9 Video Player (7 cols) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-black/10 dark:border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&autoplay=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Active Episode Details (Optimized for Small Screens) */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] space-y-2 sm:space-y-3 shadow-xs">
              <div className="flex items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-2">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#0D7377] dark:text-[#00E5A3] font-semibold">
                  {activeVideo.epNumber} · {activeVideo.category}
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.videoId}&list=PLDKsKSD5DcTIzCGj3IH8mOKo5nLUoC-XM`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] sm:text-[11px] text-zinc-500 hover:text-black dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>YouTube</span>
                  <ExternalLink className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </a>
              </div>

              <h3 className="font-display font-medium text-lg sm:text-2xl text-[#0A0A0A] dark:text-white leading-snug">
                {activeVideo.title}
              </h3>

              <div className="font-sans font-medium text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400">
                Topic: {activeVideo.guestOrTopic}
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-0.5 line-clamp-2 sm:line-clamp-none">
                {activeVideo.summary}
              </p>
            </div>
          </div>

          {/* Right Column: Episode Queue (5 cols) - Swipeable Carousel on Mobile, Vertical Queue on Desktop */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 font-bold">
                Playlist Queue ({EPISODES.length} Episodes)
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400">
                <span className="lg:hidden">Swipe to explore · </span>Tap to switch
              </span>
            </div>

            {/* Horizontal swipe on mobile, vertical stack on desktop */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto gap-2.5 pb-2.5 lg:pb-0 lg:max-h-[580px] scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
              {EPISODES.map((ep, idx) => {
                const isSelected = activeIdx === idx;

                return (
                  <button
                    key={ep.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-[230px] sm:w-[260px] lg:w-full shrink-0 snap-start text-left p-2.5 sm:p-3 rounded-xl border transition-all flex items-center gap-3 group ${
                      isSelected
                        ? "bg-white dark:bg-[#121620] border-[#0D7377] dark:border-[#00E5A3] shadow-md ring-1 ring-[#00E5A3]/30"
                        : "bg-white/80 dark:bg-[#0c0f16] border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20"
                    }`}
                  >
                    {/* Thumbnail with overlay icon */}
                    <div className="relative w-20 sm:w-24 aspect-video rounded-lg overflow-hidden bg-black shrink-0 border border-black/10 dark:border-white/10">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full flex items-center justify-center text-white ${isSelected ? "bg-[#0D7377] dark:bg-[#00E5A3] dark:text-black" : "bg-black/60 group-hover:bg-[#0D7377]"} transition-colors`}>
                          <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`font-mono text-[9px] sm:text-[10px] font-bold ${isSelected ? "text-[#0D7377] dark:text-[#00E5A3]" : "text-zinc-500"}`}>
                          {ep.epNumber}
                        </span>
                      </div>
                      <h4 className="font-sans font-semibold text-[11px] sm:text-xs text-[#0A0A0A] dark:text-white line-clamp-2 leading-tight">
                        {ep.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
