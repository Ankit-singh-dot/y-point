"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import ShimmerImage from "./ShimmerImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GallerySlide {
  id: string;
  image: string;
  title: string;
}

const SLIDES: GallerySlide[] = [
  {
    id: "director",
    image: "/new_images/director.webp",
    title: "Director's Address · IIT Bombay",
  },
  {
    id: "leaders",
    image: "/new_images/ypoint_first_close_leaders.webp",
    title: "SINE & Fund Leadership",
  },
  {
    id: "shaji",
    image: "/new_images/ypoint_first_close_shaji.webp",
    title: "Executive Director Keynote",
  },
  {
    id: "collab",
    image: "/new_images/sine_iit_3.webp",
    title: "Research Translation",
  },
];

interface HorizontalScreenGalleryProps {
  sectionId?: string;
  badge?: string;
}

export default function HorizontalScreenGallery({
  sectionId = "documentary-gallery",
}: HorizontalScreenGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [maxScrollDistance, setMaxScrollDistance] = useState<number>(3000);
  const [viewportHeight, setViewportHeight] = useState<number>(900);

  // Measure track dimensions to set exact 1:1 scroll height with zero dead space
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const vh = window.innerHeight;
    setViewportHeight(vh);
    const max = Math.max(track.scrollWidth - window.innerWidth + 120, 0);
    setMaxScrollDistance(max);
  }, []);

  useEffect(() => {
    measure();
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);

    let rafId: number;
    let lastActive = 1;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const rect = container.getBoundingClientRect();
        const max = Math.max(track.scrollWidth - window.innerWidth + 120, 0);
        if (max <= 0) return;

        // Scrolled distance past container top
        const scrolled = -rect.top;
        const progress = Math.min(Math.max(scrolled / max, 0), 1);
        const currentX = progress * max;

        // Translate track smoothly
        track.style.transform = `translate3d(-${currentX}px, 0, 0)`;

        // Calculate active slide index (1 to 4)
        const currentSlide = Math.min(Math.floor(progress * SLIDES.length) + 1, SLIDES.length);
        if (currentSlide !== lastActive) {
          lastActive = currentSlide;
          setActiveIndex(currentSlide);
        }

        // Update counter text directly
        if (counterRef.current) {
          counterRef.current.textContent = String(currentSlide).padStart(2, "0");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount
    onScroll();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [measure]);

  const scrollByCard = (direction: "left" | "right") => {
    const cardWidth = window.innerWidth > 1024 ? 804 : 604;
    const delta = direction === "left" ? -cardWidth : cardWidth;
    window.scrollBy({ top: delta, behavior: "smooth" });
  };

  const goToSlide = (slideIdx: number) => {
    const cardWidth = window.innerWidth > 1024 ? 804 : 604;
    const targetScroll = slideIdx * cardWidth;
    const container = containerRef.current;
    if (!container) return;
    const targetY = container.offsetTop + targetScroll;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <div
      id={sectionId}
      ref={containerRef}
      className="relative bg-[#07090e] text-white"
      style={{
        height: `${viewportHeight + maxScrollDistance}px`,
      }}
    >
      {/* Sticky Viewport: FIXED AND VERTICALLY CENTERED IN THE MIDDLE OF THE SCREEN */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-12 sm:pb-16 z-20">
        
        {/* Top Header: Clean, generous top clearance from navbar, right-aligned controls */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-end pointer-events-auto">
          <div className="flex items-center gap-4">
            {/* Slide Index Counter */}
            <div className="font-mono text-xs text-white/50">
              <span ref={counterRef} className="font-bold text-white">
                01
              </span>
              <span className="mx-1.5 opacity-30">/</span>
              <span>0{SLIDES.length}</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByCard("left")}
                aria-label="Previous slide"
                className="p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all shadow-xs"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("right")}
                aria-label="Next slide"
                className="p-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all shadow-xs"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Track: Perfectly Centered in Viewport */}
        <div className="my-auto w-full overflow-hidden py-3">
          <div
            ref={trackRef}
            className="flex items-center gap-6 sm:gap-8 px-4 sm:px-8 lg:px-12 will-change-transform"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className="group relative shrink-0 w-[80vw] sm:w-[580px] md:w-[680px] lg:w-[780px] h-[48vh] sm:h-[54vh] max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#0c0f16] shadow-2xl transition-transform duration-500"
              >
                {/* Image */}
                <ShimmerImage
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 680px, 780px"
                  priority={idx === 0}
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Minimal Overlay: Number + Title */}
                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white pointer-events-none">
                  <span className="font-mono text-[10px] sm:text-xs text-white/50 font-medium tracking-widest block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-light text-base sm:text-xl lg:text-2xl text-white mt-1">
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Minimalist Segmented Indicator Dots (Pure monochromatic luxury, no AI-slop neon bars) */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-center">
          <div className="flex items-center gap-2.5 py-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i + 1
                    ? "w-8 bg-white"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
