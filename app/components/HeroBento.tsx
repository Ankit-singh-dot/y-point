"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function HeroBento() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Guarantee autoplay kicks off immediately on deployment without blank delay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: video remains muted and ready
      });
    }
    if (ambientVideoRef.current) {
      ambientVideoRef.current.play().catch(() => {});
    }
  }, []);

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
    <section className="relative w-full h-screen h-[100dvh] min-h-[100dvh] overflow-hidden bg-black flex flex-col justify-between items-center select-none">
      {/* 0. Instant Poster Backdrop: Guarantees zero blank screen while stream connects on deployment */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 pointer-events-none ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/hero_video_poster.webp')" }}
      />

      {/* 1. Ambient Synchronized Cinema Glow for Mobile (Ultra-lightweight stream for background blur) */}
      <video
        ref={ambientVideoRef}
        poster="/hero_video_poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-110 pointer-events-none md:hidden"
      >
        <source src="/hero_ambient_video.mp4" type="video/mp4" />
        <source src="/3rd_video_chnage.mp4" type="video/mp4" />
      </video>

      {/* 2. Primary Video Canvas: Uncropped (object-contain) on mobile, Full-Bleed (object-cover) on desktop */}
      <div className="relative w-full h-full flex items-center justify-center my-auto">
        <video
          ref={videoRef}
          poster="/hero_video_poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          onPlaying={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-contain md:object-cover object-center shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-opacity duration-700 ${
            isVideoLoaded ? "opacity-100" : "opacity-90"
          }`}
        >
          {/* Primary fast-start web stream with movflags=faststart */}
          <source src="/hero_main_video.mp4" type="video/mp4" />
          {/* High-bitrate original fallback */}
          <source src="/3rd_video_chnage.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle Vignette for Bottom Interface Readability */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* 6. Bottom Interface Controls: Socials, Sound Toggle & Fullscreen */}
      <div className="absolute bottom-4 sm:bottom-8 inset-x-3 sm:inset-x-auto sm:right-8 z-20 flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2.5 pointer-events-auto">
        {/* Social Links: Compact on mobile, rich on desktop */}
        <div className="flex items-center gap-1.5 sm:gap-2"></div>

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
            {isMuted ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
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
