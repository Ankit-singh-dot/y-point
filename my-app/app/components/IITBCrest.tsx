"use client";

import React from "react";

interface IITBCrestProps {
  className?: string;
  size?: number;
  variant?: "full" | "icon" | "badge";
}

/**
 * Authentic SVG Representation of the Indian Institute of Technology Bombay Crest
 * Features: The industrial cogwheel (engineering), sacred lotus & knowledge flame (science),
 * and the sovereign motto: "ज्ञानं परमं बलम्" (Knowledge is Supreme Strength).
 */
export default function IITBCrest({ className = "h-12 w-12", size = 48, variant = "icon" }: IITBCrestProps) {
  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-xl border border-[#0D7377]/30 bg-[#0D7377]/5 dark:bg-[#0D7377]/10 backdrop-blur-md ${className}`}>
        <IITBCrest size={28} className="h-7 w-7 text-[#0D7377] shrink-0" variant="icon" />
        <div className="flex flex-col text-left">
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#0D7377] font-bold">
            IIT BOMBAY · SINE ANCHOR
          </span>
          <span className="font-sans text-[11px] font-semibold text-[#0A0A0A] dark:text-white leading-tight">
            ज्ञानं परमं बलम् · Estd. 1958
          </span>
        </div>
      </div>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IIT Bombay Crest"
    >
      {/* Outer Industrial Gear / Cogwheel with 16 Precision Teeth */}
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
      <circle cx="50" cy="50" r="39" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />

      {/* 16 Cog Teeth */}
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
        <rect
          key={deg}
          x="48"
          y="2.5"
          width="4"
          height="5.5"
          rx="1"
          fill="currentColor"
          transform={`rotate(${deg} 50 50)`}
          opacity="0.85"
        />
      ))}

      {/* Inner Concentric Circle */}
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />

      {/* Centerpiece: Flaming Torch of Knowledge (Gyan Deepa) */}
      <path
        d="M50 26 C47 32 44 35 44 40 C44 44 47 46 50 46 C53 46 56 44 56 40 C56 35 53 32 50 26 Z"
        fill="currentColor"
        opacity="0.95"
      />
      {/* Inner flame core */}
      <path
        d="M50 33 C48.5 36 47 38 47 41 C47 43 48.5 44 50 44 C51.5 44 53 43 53 41 C53 38 51.5 36 50 33 Z"
        fill="#0D7377"
      />

      {/* Torch Pedestal / Base */}
      <path
        d="M46 47 L54 47 L52 54 L48 54 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Sacred Open Lotus Petals (Symbol of Wisdom & Growth) */}
      {/* Center Petal */}
      <path
        d="M50 52 C48 57 48 64 50 67 C52 64 52 57 50 52 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Left Petal */}
      <path
        d="M46 54 C40 58 39 65 43 68 C46 68 48 63 47 57 Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Right Petal */}
      <path
        d="M54 54 C60 58 61 65 57 68 C54 68 52 63 53 57 Z"
        fill="currentColor"
        opacity="0.75"
      />
      {/* Far Left Petal */}
      <path
        d="M40 58 C34 62 34 68 38 70 C41 70 43 66 42 61 Z"
        fill="currentColor"
        opacity="0.6"
      />
      {/* Far Right Petal */}
      <path
        d="M60 58 C66 62 66 68 62 70 C59 70 57 66 58 61 Z"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Lotus Water Base Waves */}
      <path
        d="M32 72 Q41 68 50 72 Q59 76 68 72"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M36 76 Q43 73 50 76 Q57 79 64 76"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Sanskrit Motto Banner Ribbon */}
      <path
        d="M26 80 L74 80 L71 86 L50 85 L29 86 Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* IIT BOMBAY Text Acronym */}
      <text
        x="50"
        y="84"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="5"
        fontFamily="sans-serif"
        fontWeight="bold"
        letterSpacing="0.8"
      >
        IIT BOMBAY
      </text>
    </svg>
  );
}
