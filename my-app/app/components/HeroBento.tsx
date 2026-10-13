"use client";

import React, { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroBento() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden bg-black flex items-center justify-center select-none">
      {/* 100% Screen-Fitted Cinematic Video */}
      <video
        ref={videoRef}
        src="/Y-Point_Film_v2_kinetic_draft.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover object-center"
      />

      {/* Pure Circle Action Suite in Bottom Right (X, Instagram, LinkedIn, Sound) */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2 sm:gap-2.5">
        {/* 1. X (formerly Twitter) Circle */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/75 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          aria-label="Follow Y-Point on X"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* 2. Instagram Circle */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/75 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          aria-label="Follow Y-Point on Instagram"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* 3. LinkedIn Circle */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/75 backdrop-blur-2xl border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          aria-label="Connect with Y-Point on LinkedIn"
        >
          <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        </a>

        {/* Divider */}
        <div className="h-4 w-[1px] bg-white/20 mx-0.5" />

        {/* 4. Sound Toggle Circle */}
        <button
          onClick={toggleSound}
          className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center backdrop-blur-2xl border transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(0,0,0,0.5)] ${
            isMuted
              ? "bg-black/50 hover:bg-black/75 border-white/15 hover:border-white/30 text-white/70 hover:text-white"
              : "bg-emerald-500/20 hover:bg-emerald-500/30 border-emerald-400/40 text-emerald-400"
          }`}
          aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </section>
  );
}
