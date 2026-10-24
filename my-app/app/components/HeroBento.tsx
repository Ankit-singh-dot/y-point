"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, ArrowUpRight, Maximize2 } from "lucide-react";

export default function HeroBento() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    const vid = videoRef.current as any;
    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.webkitEnterFullscreen) {
      // Native iOS Safari fullscreen playback
      vid.webkitEnterFullscreen();
    } else if (vid.webkitRequestFullscreen) {
      vid.webkitRequestFullscreen();
    }
  };

  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex flex-col justify-between items-center select-none">
      {/* 1. Ambient Synchronized Cinema Glow for Mobile (Industry standard to illuminate letterbox without cropping) */}
      <video
        src="/Y-Point_Film_v2_kinetic_draft.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-30 scale-110 pointer-events-none md:hidden"
      />



      {/* 3. Primary Video Canvas: Uncropped (object-contain) on mobile, Full-Bleed (object-cover) on desktop */}
      <div className="relative w-full h-full flex items-center justify-center my-auto">
        <video
          ref={videoRef}
          src="/Y-Point_Film_v2_kinetic_draft.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain md:object-cover object-center shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* 4. Subtle Vignette for Bottom Interface Readability on Desktop */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* 5. Primary Action: "Pitch to Y-Point" Button - Positioned safely above bottom controls on mobile */}
      <div className="absolute bottom-20 sm:bottom-12 inset-x-0 z-20 flex justify-center pointer-events-auto px-4">
        <Link
          href="/apply"
          className="group px-7 py-3 sm:px-9 sm:py-3.5 rounded-full bg-white hover:bg-[#00E5A3] text-black font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_32px_rgba(255,255,255,0.25)] flex items-center gap-2"
        >
          <span>Pitch to Y-Point</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* 6. Bottom Interface Controls: Socials, Sound Toggle & Fullscreen */}
      <div className="absolute bottom-5 inset-x-5 sm:inset-x-auto sm:right-8 sm:bottom-8 z-20 flex items-center justify-between sm:justify-end gap-2 sm:gap-2.5 pointer-events-auto">
        {/* Social Links: Compact on mobile, rich on desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-label="Follow Y-Point on X"
          >
            <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-label="Follow Y-Point on Instagram"
          >
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-label="Connect with Y-Point on LinkedIn"
          >
            <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
        </div>

        {/* Video Sound Toggle Button */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={toggleSound}
            className={`h-8 px-3 sm:h-9 sm:px-3 rounded-full flex items-center gap-1.5 backdrop-blur-2xl border transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)] ${
              isMuted
                ? "bg-black/60 hover:bg-black/80 border-white/15 hover:border-white/30 text-white/70 hover:text-white"
                : "bg-[#00E5A3]/20 hover:bg-[#00E5A3]/30 border-[#00E5A3]/50 text-[#00E5A3]"
            }`}
            aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
              {isMuted ? "Sound Off" : "Sound On"}
            </span>
          </button>

          {/* Fullscreen Expand Button (Industry standard for mobile video) */}
          <button
            onClick={toggleFullscreen}
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center bg-black/60 hover:bg-black/80 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-label="Watch Fullscreen"
            title="Fullscreen"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
