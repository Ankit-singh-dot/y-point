"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ExternalLink, ArrowUpRight } from "lucide-react";
import HorizontalScreenGallery from "./HorizontalScreenGallery";

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

export default function ContentSection() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);

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
      thumbnail: "/youtube_thumbs/ep-04.webp",
      category: "Venture Capital & Scale",
    },
    {
      id: "ep-03",
      epNumber: "EPISODE 03",
      videoId: "DqhzDDP_ytU",
      title: "Episode 3 - Built Against the Odds: Inside Atomberg’s Unlikely Rise",
      guestOrTopic: "Founders of Atomberg Technologies",
      summary: "The candid inside story of building a hardware category leader from SINE IIT Bombay, pioneering energy-efficient BLDC motors, factory floor trials, and achieving national commercial scale.",
      thumbnail: "/youtube_thumbs/ep-03.webp",
      category: "Hardware & Manufacturing",
    },
    {
      id: "ep-02",
      epNumber: "EPISODE 02",
      videoId: "QyuzPcX8jyY",
      title: "Episode 2 - What's your excuse? The playbook to institution building with Mr Ashank Desai",
      guestOrTopic: "Mr. Ashank Desai (Founder, Mastek & Co-founder, SINE)",
      summary: "Three decades of building technology institutions: corporate governance, enduring deeptech ecosystems, university-industry bridges, and leadership resilience.",
      thumbnail: "/youtube_thumbs/ep-02.webp",
      category: "Institution Building",
    },
    {
      id: "ep-01",
      epNumber: "EPISODE 01",
      videoId: "VJeastYzeSc",
      title: "Episode 1 - From labs to startups at SINE IIT Bombay",
      guestOrTopic: "Translational Deeptech Leadership",
      summary: "How intellectual property born inside IIT Bombay laboratories is de-risked, incubated, and commercialized into category-defining industrial companies.",
      thumbnail: "/youtube_thumbs/ep-01.webp",
      category: "Lab to Market",
    },
    {
      id: "trailer",
      epNumber: "SERIES TRAILER",
      videoId: "WgLTPvRYjXs",
      title: "EP 01 Trailer - From labs to startups at SINE, IIT Bombay",
      guestOrTopic: "SINE IIT Bombay Official Series",
      summary: "Two decades, 220+ ventures, and India's premier academic incubator: an introduction to the founders, scientists, and operators defining deep technology.",
      thumbnail: "/youtube_thumbs/trailer.webp",
      category: "Series Introduction",
    },
  ];

  const activeVideo = sineVoicesEpisodes[selectedVideoIndex];

  return (
    <>
    <section id="content" className="relative bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#F5F5F3] pt-20 sm:pt-28 pb-16 sm:pb-20 border-b border-[#E5E5E5] dark:border-white/10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        


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
      </div>
    </section>

    {/* 3. DOCUMENTARY HORIZONTAL SCREEN GALLERY: DIRECTLY AFTER PODCAST */}
    <HorizontalScreenGallery
      sectionId="first-close-moments"
    />

    {/* Section Footer Navigation */}
    <div className="bg-[#F9F9F8] dark:bg-[#07090e] border-t border-black/10 dark:border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
        <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
          NEXT SECTIONS:
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/team"
            className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
          >
            <span>Investment Team</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
