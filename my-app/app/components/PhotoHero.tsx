import React from "react";
import Image from "next/image";

const INK = "5,7,10";
const ACCENT = "0,229,163";

/**
 * Ultra HD master photography (2752x1536, 16:9 widescreen). High fidelity architectural
 * detail designed for full-screen display without pixelation or compression artifacts.
 */
export const HERO_PHOTOS = {
  mainBuilding: { src: "/iitb/main-building.webp", w: 4096, h: 1948, label: "Main Building", alt: "The Main Building at IIT Bombay under dramatic sky", position: "center 48%" },
  mainBuildingLeaves: { src: "/iitb/main-building-leaves.webp", w: 2880, h: 2160, label: "Main Building", alt: "IIT Bombay Main Building facade framed by leaves", position: "center 45%" },
  campusLawn: { src: "/iitb/campus-lawn.webp", w: 2880, h: 2160, label: "Central Lawn", alt: "IIT Bombay central campus lawn and iconic metal sculpture", position: "center 45%" },
  mainGate: { src: "/iitb/main-gate.webp", w: 3200, h: 2400, label: "Main Gate", alt: "IIT Bombay campus entrance portico and green rain trees", position: "center 42%" },
  entranceWall: { src: "/iitb/main-gate.webp", w: 3200, h: 2400, label: "Campus Entrance", alt: "IIT Bombay campus entrance and architectural canopy", position: "center 42%" },
  crestPlaque: { src: "/iitb/crest-plaque.webp", w: 2752, h: 1536, label: "Institute Crest", alt: "The bronze IIT Bombay crest plaque, lit against a textured wall", position: "75% center" },
  entranceSign: { src: "/iitb/main-gate.webp", w: 3200, h: 2400, label: "Campus Entrance", alt: "IIT Bombay entrance portico under green canopy", position: "center 42%" },
} as const;

export type HeroPhoto = keyof typeof HERO_PHOTOS;

type StageProps = {
  photo: HeroPhoto;
  layout?: "bottom" | "top";
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  preload?: boolean;
  children: React.ReactNode;
};

export function PhotoStage({
  photo,
  layout = "bottom",
  minHeight = "100vh",
  preload = false,
  children,
}: StageProps) {
  const p = HERO_PHOTOS[photo];

  return (
    <section 
      className="relative z-10 w-full h-screen h-[100dvh] min-h-[100dvh] overflow-hidden bg-[#05070a] flex flex-col justify-between text-white select-none"
    >
      {/* 1. Full-Bleed Ultra HD Flexible Background Photograph: Perfectly fits 100% of any screen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={p.src}
          alt={p.alt}
          fill
          priority={preload}
          sizes="100vw"
          style={{ objectPosition: p.position }}
          className="object-cover w-full h-full scale-100 transition-transform duration-1000 ease-out"
        />

        {/* 2. Top Scrim: Preserves navbar transparency and readability */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#05070a]/90 via-[#05070a]/40 to-transparent pointer-events-none" />

        {/* 3. Directional Asymmetric Cinematic Scrim:
            Ensures text on the left has deep, razor-sharp legibility while the architecture and campus on the right remains sunlit, open, and completely unobscured */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, rgba(5,7,10,0.92) 0%, rgba(5,7,10,0.80) 36%, rgba(5,7,10,0.48) 58%, rgba(5,7,10,0.12) 78%, transparent 100%)",
          }}
        />

        {/* 4. Bottom Horizon Scrim: Smooth cinematic transition into page content */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05070a] via-[#05070a]/50 to-transparent pointer-events-none" />

        {/* 5. Subtle Accent Light on text anchor */}
        <div
          className="absolute -left-20 top-1/2 h-[40vh] w-[45vw] -translate-y-1/2 rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: `radial-gradient(closest-side, #00E5A3, transparent)` }}
        />
      </div>

      {/* 6. Text Content: Clean left-aligned editorial orientation */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 my-auto pt-24 sm:pt-28 lg:pt-32">
        <div className="relative max-w-2xl lg:max-w-3xl text-left">
          {children}
        </div>
      </div>

      {/* 7. Bottom Anchor: Clean spacing at bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 pointer-events-none" />
    </section>
  );
}

type Props = {
  photo: HeroPhoto;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  layout?: "bottom" | "top";
};

/** Page-opening IIT Bombay photograph with headline. */
export default function PhotoHero({ photo, eyebrow, title, intro, layout = "bottom" }: Props) {
  return (
    <PhotoStage photo={photo} layout={layout} preload>
      <div className="space-y-6 sm:space-y-8 text-left">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5A3] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#00E5A3] font-semibold">{eyebrow}</span>
          </div>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] tracking-tight leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          {title}
        </h1>
        {intro && (
          <p className="font-sans font-light text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            {intro}
          </p>
        )}
        <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/70">
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">Pre-seed &amp; Seed</span>
          <span className="text-white/30">·</span>
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">TRL 4+</span>
          <span className="text-white/30">·</span>
          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">Deep Tech</span>
        </div>
      </div>
    </PhotoStage>
  );
}
