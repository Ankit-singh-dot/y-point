import React from "react";
import Image from "next/image";

const INK = "5,7,10";
const ACCENT = "0,229,163";

/**
 * w/h are the real pixel dimensions of each file. The sources only carry ~736px of genuine
 * detail, so on desktop we never stretch them full-bleed: the sharp photo sits in a rounded frame
 * at its own aspect ratio, and a blurred copy fills the screen (blur hides missing resolution).
 * On phones (portrait screens) the photo is shown full-bleed, where it is close to native size.
 */
export const HERO_PHOTOS = {
  mainBuilding: { src: "/iitb/main-building.webp", w: 1472, h: 1104, label: "Main Building", alt: "The Main Building at IIT Bombay under monsoon clouds", position: "62% 50%" },
  mainBuildingLeaves: { src: "/iitb/main-building-leaves.webp", w: 1472, h: 920, label: "Main Building", alt: "IIT Bombay Main Building seen through peepal leaves", position: "55% 40%" },
  campusLawn: { src: "/iitb/campus-lawn.webp", w: 1472, h: 1962, label: "Central Lawn", alt: "IIT Bombay central lawn and trees", position: "50% 38%" },
  mainGate: { src: "/iitb/main-gate.webp", w: 1472, h: 1720, label: "Main Gate", alt: "IIT Bombay Main Gate beneath the trees", position: "50% 30%" },
  entranceWall: { src: "/iitb/entrance-wall.webp", w: 1472, h: 1580, label: "Institute Entrance", alt: "IIT Bombay entrance wall beneath the trees", position: "50% 50%" },
  crestPlaque: { src: "/iitb/crest-plaque.webp", w: 1472, h: 1104, label: "Institute Crest", alt: "The brass IIT Bombay crest, lit against a wall", position: "50% 45%" },
  entranceSign: { src: "/iitb/entrance-sign.webp", w: 1472, h: 1760, label: "Institute Entrance", alt: "IIT Bombay entrance signage under a banyan canopy", position: "50% 52%" },
} as const;

export type HeroPhoto = keyof typeof HERO_PHOTOS;

/** Largest CSS width the framed photo may take on desktop (keeps it near native sharpness). */
const FRAME_MAX_W = 580;

type StageProps = {
  photo: HeroPhoto;
  /**
   * Mobile composition only (desktop is always text-left / photo-right):
   * bottom – text bottom-left over the photo
   * top    – text centred over the canopy, subject visible below
   */
  layout?: "bottom" | "top";
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  preload?: boolean;
  /** Show the "Scroll" hint at the bottom of the section on desktop. */
  scrollCue?: boolean;
  children: React.ReactNode;
};

export function PhotoStage({
  photo,
  layout = "bottom",
  minHeight = "100svh",
  paddingTop = "8rem",
  paddingBottom = "clamp(3rem, 7vw, 5.5rem)",
  preload = false,
  scrollCue = false,
  children,
}: StageProps) {
  const p = HERO_PHOTOS[photo];
  const top = layout === "top";
  const aspect = p.w / p.h;
  const frameStyle = {
    "--frame-w": `min(${FRAME_MAX_W}px, 40vw, calc(min(58svh, 580px) * ${aspect.toFixed(4)}))`,
    "--frame-w-sm": `min(100%, 560px, calc(44svh * ${aspect.toFixed(4)}))`,
    "--frame-ar": `${p.w} / ${p.h}`,
  } as React.CSSProperties;

  return (
    <section className="relative z-10 w-full overflow-hidden text-white" style={{ minHeight, background: `rgb(${INK})` }}>
      {/* Backdrop: blurred photo, accent glow and a faint dot texture (blur hides missing resolution) */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image src={p.src} alt="" fill sizes="30vw" className="object-cover scale-125 blur-3xl saturate-125 opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(120% 90% at 72% 50%, rgba(${INK},0.3) 0%, rgba(${INK},0.75) 60%, rgba(${INK},0.94) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(70% 70% at 30% 50%, black 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(70% 70% at 30% 50%, black 0%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[30%] h-[40vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] lg:left-auto lg:right-[8%] lg:top-1/2 lg:h-[60vh] lg:w-[45vw] lg:translate-x-0 lg:blur-[120px]"
          style={{ background: `radial-gradient(closest-side, rgba(${ACCENT},0.18), transparent)` }}
        />
      </div>

      <div
        className={`mx-auto flex max-w-7xl flex-col justify-center gap-10 px-4 sm:px-8 lg:px-12 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-20 lg:text-left ${
          top ? "items-center text-center" : ""
        }`}
        style={{ minHeight, paddingTop: `min(${paddingTop}, 6.5rem)`, paddingBottom }}
      >
        <div className={`relative z-10 w-full ${top ? "max-w-3xl" : "max-w-2xl"}`}>{children}</div>

        {/* Sharp photo in a rounded frame at its own aspect ratio, never stretched past its real detail.
            Phones: above the text. Desktop: right of the text. */}
        <figure
          className="group relative order-first m-0 w-(--frame-w-sm) self-center aspect-(--frame-ar) overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10 lg:order-none lg:w-(--frame-w) lg:rounded-[1.75rem] lg:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]"
          style={frameStyle}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            preload={preload}
            sizes={`(min-width: 1024px) ${FRAME_MAX_W}px, min(100vw, 560px)`}
            className="object-cover transition-transform duration-[1.2s] ease-out lg:group-hover:scale-[1.03]"
          />
          {/* Gentle vignette so the photo sits into the dark page */}
          <div aria-hidden="true" className="absolute inset-0" style={{ boxShadow: `inset 0 0 80px rgba(${INK},0.35)` }} />
        </figure>
      </div>

      {scrollCue && (
        <div aria-hidden="true" className="absolute bottom-8 hidden items-center gap-3 lg:flex left-[max(3rem,calc((100vw-80rem)/2+3rem))]">
          <span className="relative h-9 w-5 rounded-full border border-white/25">
            <span className="absolute left-1/2 top-1.5 h-2 w-0.5 -translate-x-1/2 rounded-full bg-[#00E5A3] animate-float-reverse" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">Scroll to explore</span>
        </div>
      )}
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
  const top = layout === "top";
  return (
    <PhotoStage photo={photo} layout={layout} preload scrollCue paddingTop={top ? "clamp(7rem, 12vw, 9rem)" : "8rem"}>
      <div className="space-y-6">
        <div className={`flex items-center gap-3 ${top ? "justify-center lg:justify-start" : ""}`}>
          <span className="hidden h-px w-10 bg-[#00E5A3]/70 lg:block" />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#00E5A3] font-semibold">{eyebrow}</span>
        </div>
        <h1 className="font-display font-light text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white">
          {title}
        </h1>
        {intro && (
          <p className={`font-sans font-light text-base sm:text-xl text-white/75 leading-relaxed max-w-xl ${top ? "mx-auto lg:mx-0" : ""}`}>
            {intro}
          </p>
        )}
        <div className={`hidden pt-4 lg:flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50`}>
          <span>Pre-seed &amp; Seed</span>
          <span className="h-3 w-px bg-white/20" />
          <span>TRL 4+</span>
          <span className="h-3 w-px bg-white/20" />
          <span>Deep Tech</span>
        </div>
      </div>
    </PhotoStage>
  );
}
