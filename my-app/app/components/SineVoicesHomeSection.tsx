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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6">
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 font-medium">
              SINE Voices · Video Podcast Series
            </div>
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] dark:text-white tracking-tight leading-tight">
              Signal from the Lab
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
              Candid conversations with the founders, venture capitalists, and institution builders translating Indian laboratory breakthroughs into global industry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-sans text-xs uppercase tracking-[0.18em] font-semibold transition-all hover:opacity-90 inline-flex items-center gap-2 shadow-sm"
            >
              <span>Play All on YouTube</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/insights"
              className="px-5 py-2.5 rounded-full border border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white font-sans text-xs uppercase tracking-[0.18em] text-zinc-700 dark:text-zinc-300 transition-all inline-flex items-center gap-1.5 font-medium"
            >
              <span>Full Content Hub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Theater Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 16:9 Video Player (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-black/10 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&autoplay=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Active Episode Details */}
            <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0f16] space-y-3 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-2.5">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 font-semibold">
                  {activeVideo.epNumber} · {activeVideo.category}
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.videoId}&list=PLDKsKSD5DcTIzCGj3IH8mOKo5nLUoC-XM`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-zinc-500 hover:text-black dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              <h3 className="font-display font-medium text-xl sm:text-2xl text-[#0A0A0A] dark:text-white">
                {activeVideo.title}
              </h3>

              <p className="font-sans font-medium text-xs text-zinc-500 dark:text-zinc-400">
                Topic / Guest: {activeVideo.guestOrTopic}
              </p>

              <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
                {activeVideo.summary}
              </p>
            </div>
          </div>

          {/* Right Column: Episode Queue (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-bold">
                Playlist Queue ({EPISODES.length} Episodes)
              </span>
              <span className="font-mono text-[10px] text-zinc-400">
                Click to switch active player
              </span>
            </div>

            <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-1">
              {EPISODES.map((ep, idx) => {
                const isSelected = activeIdx === idx;

                return (
                  <button
                    key={ep.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3.5 group ${
                      isSelected
                        ? "bg-white dark:bg-[#121620] border-[#0D7377] dark:border-[#00E5A3] shadow-md ring-1 ring-[#00E5A3]/30"
                        : "bg-white/80 dark:bg-[#0c0f16] border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20"
                    }`}
                  >
                    {/* Thumbnail with overlay icon */}
                    <div className="relative w-24 sm:w-28 aspect-video rounded-lg overflow-hidden bg-black shrink-0 border border-black/10 dark:border-white/10">
                      <img
                        src={ep.thumbnail}
                        alt={ep.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white ${isSelected ? "bg-red-600" : "bg-black/60 group-hover:bg-red-600"} transition-colors`}>
                          <Play className="h-3 w-3 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`font-mono text-[10px] font-bold ${isSelected ? "text-red-600 dark:text-red-400" : "text-zinc-500"}`}>
                          {ep.epNumber}
                        </span>
                        <span className="font-mono text-[9px] text-zinc-400 truncate max-w-[100px]">
                          {ep.category}
                        </span>
                      </div>
                      <h4 className="font-sans font-semibold text-xs text-[#0A0A0A] dark:text-white line-clamp-2 leading-tight">
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
