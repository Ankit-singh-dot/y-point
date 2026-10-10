"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Shield } from "lucide-react";

const ROTATING_HEADLINES = [
  "INVESTING IN THE FUTURE OF SILICON",
  "INVESTING IN THE FUTURE OF THE FACTORY FLOOR",
  "INVESTING IN THE FUTURE OF MATTER",
  "INVESTING IN THE FUTURE OF ORBIT",
  "INVESTING IN THE FUTURE OF ENERGY",
  "INVESTING IN THE FUTURE OF MEDICINE",
];

export default function HeroKineticVideo() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Rotate headline every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % ROTATING_HEADLINES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#08090c] flex items-center justify-center border-b border-[#1f2532]">
      {/* Background Kinetic Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/Y-Point_Film_v2_kinetic_draft.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-30 transition-opacity duration-1000 scale-105"
        />
        {/* Dark Vignette and Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-[#08090c]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#08090c_80%)] opacity-80" />
        <div className="absolute inset-0 bg-tech-grid opacity-25" />
      </div>

      {/* Floating Ambient Glow */}
      <div className="ambient-glow -top-32 -left-32 h-96 w-96 bg-[#00e5a3]" />
      <div className="ambient-glow -bottom-32 -right-32 h-96 w-96 bg-[#f59e0b]" />

      {/* Video Controls Bar (Discreet, high-tech) */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-2 rounded-full border border-[#262e3e] bg-[#0c0f16]/80 px-3 py-1.5 backdrop-blur-md">
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400 mr-2">
          <span className="h-2 w-2 rounded-full bg-[#00e5a3] animate-pulse" />
          Kinetic Reel
        </span>
        <button
          onClick={togglePlay}
          className="rounded p-1 text-zinc-400 hover:text-white transition-colors"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-[#00e5a3]" />}
        </button>
        <button
          onClick={toggleMute}
          className="rounded p-1 text-zinc-400 hover:text-white transition-colors"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-[#00e5a3]" />}
        </button>
        <button
          onClick={toggleFullscreen}
          className="rounded p-1 text-zinc-400 hover:text-white transition-colors"
          title="Fullscreen"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Hero Content (Strictly adheres to Section 7.1) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00e5a3]/30 bg-[#00e5a3]/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#00e5a3] mb-8 shadow-[0_0_20px_rgba(0,229,163,0.15)]">
          <Shield className="h-3.5 w-3.5" />
          <span>Category II AIF · SEBI Registered · SINE IIT Bombay</span>
        </div>

        {/* 7.1 Rotating Headline Sequence */}
        <div className="min-h-[140px] sm:min-h-[170px] md:min-h-[190px] flex items-center justify-center">
          <h1 className="font-serif text-3xl font-extrabold tracking-tight text-white transition-all duration-700 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-zinc-500 font-mono text-sm sm:text-base md:text-lg tracking-widest uppercase mb-2">
              SECTOR MANDATE
            </span>
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {ROTATING_HEADLINES[headlineIndex]}
            </span>
          </h1>
        </div>

        {/* 7.1 Standing Subline */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl font-normal">
          India&apos;s first institute-linked deep tech venture capital fund. We write the first institutional cheque into companies built on Indian research.
        </p>

        {/* Actions (Section 7.1 CTAs) */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/apply"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#00e5a3] px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#08090c] transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,163,0.4)] sm:w-auto"
          >
            <span>Apply for funding</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="/platform"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2a3449] bg-[#0e121a]/90 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-200 transition-all hover:border-[#00e5a3]/50 hover:bg-[#151c27] hover:text-white sm:w-auto"
          >
            <span>How we work with founders</span>
          </Link>
        </div>

        {/* Indicator Dots for Rotating Headlines */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {ROTATING_HEADLINES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeadlineIndex(i)}
              className={`h-1.5 transition-all rounded-full ${
                headlineIndex === i ? "w-8 bg-[#00e5a3]" : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Jump to headline ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Subtle Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#08090c] to-transparent pointer-events-none" />
    </section>
  );
}
