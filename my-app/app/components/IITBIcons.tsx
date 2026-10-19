"use client";

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic IIT Bombay Official Crest Vector
 * 16-Tooth Gear (Engineering) · Lotus & Gyan Deepa Flame (Science & Wisdom) · Motto: ज्ञानं परमं बलम्
 */
export function IITBCrestIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
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
      {/* Outer 16-tooth industrial gear */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
      <circle cx="50" cy="50" r="39.5" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />

      {/* 16 Precision Gear Teeth */}
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
          opacity="0.9"
        />
      ))}

      {/* Inner Concentric Circle */}
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />

      {/* Gyan Deepa (Flaming Torch of Knowledge) */}
      <path
        d="M50 25 C47 31 44 34 44 39 C44 43 47 45 50 45 C53 45 56 43 56 39 C56 34 53 31 50 25 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M50 32 C48.5 35 47 37 47 40 C47 42 48.5 43 50 43 C51.5 43 53 42 53 40 C53 37 51.5 35 50 32 Z"
        fill="#00E5A3"
      />

      {/* Torch Pedestal */}
      <path d="M46 46 L54 46 L52 53 L48 53 Z" fill="currentColor" opacity="0.9" />

      {/* Sacred Open Lotus Petals */}
      <path d="M50 51 C48 56 48 63 50 66 C52 63 52 56 50 51 Z" fill="currentColor" opacity="0.85" />
      <path d="M46 53 C40 57 39 64 43 67 C46 67 48 62 47 56 Z" fill="currentColor" opacity="0.75" />
      <path d="M54 53 C60 57 61 64 57 67 C54 67 52 62 53 56 Z" fill="currentColor" opacity="0.75" />
      <path d="M40 57 C34 61 34 67 38 69 C41 69 43 65 42 60 Z" fill="currentColor" opacity="0.6" />
      <path d="M60 57 C66 61 66 67 62 69 C59 69 57 65 58 60 Z" fill="currentColor" opacity="0.6" />

      {/* Water Ripple Base */}
      <path d="M32 71 Q41 67 50 71 Q59 75 68 71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M36 75 Q43 72 50 75 Q57 78 64 75" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Motto Ribbon */}
      <path d="M26 79 L74 79 L71 85 L50 84 L29 85 Z" fill="currentColor" opacity="0.9" />
      <text x="50" y="83.5" textAnchor="middle" fill="#FFFFFF" fontSize="5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.8">
        IIT BOMBAY
      </text>
    </svg>
  );
}

/**
 * SINE 20-Year Heritage Vector Emblem (2004–2024, 220+ deeptech ventures)
 */
export function SineHeritageIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3" />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path
        d="M13 23 C13 17 18 14 20 14 C22 14 27 17 27 23 C27 27 23 29 20 29 C17 29 13 27 13 23 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="20" r="3" fill="#00E5A3" />
      <path d="M20 7 L20 10 M20 30 L20 33 M7 20 L10 20 M30 20 L33 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Silicon & Advanced Computing: Nano-Lithography Chip Die
 */
export function SiliconWaferIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10" y="10" width="12" height="12" rx="1.5" stroke="#00E5A3" strokeWidth="1.25" fill="#00E5A3" fillOpacity="0.1" />
      <path d="M10 2 V5 M16 2 V5 M22 2 V5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M10 27 V30 M16 27 V30 M22 27 V30" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M2 10 H5 M2 16 H5 M2 22 H5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M27 10 H30 M27 16 H30 M27 22 H30" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="#00E5A3" />
    </svg>
  );
}

/**
 * Advanced Manufacturing: Kinematic Harmonic Actuator & Robotic Arm
 */
export function AdvancedManufacturingIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="16" cy="16" r="7" stroke="#00E5A3" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" fill="#00E5A3" />
      <path d="M16 4 L16 9 M16 23 L16 28 M4 16 L9 16 M23 16 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8 L11 11 M21 21 L24 24 M8 24 L11 21 M21 11 L24 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/**
 * Next-Gen Materials: Hexagonal Graphene Lattice & Graphene Tube
 */
export function MaterialsLatticeIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 4 L24 8.5 V17.5 L16 22 L8 17.5 V8.5 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 22 V28 L8 32.5" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" opacity="0.6" />
      <path d="M24 17.5 L30 21" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" opacity="0.6" />
      <circle cx="16" cy="4" r="1.5" fill="#00E5A3" />
      <circle cx="24" cy="8.5" r="1.5" fill="#00E5A3" />
      <circle cx="24" cy="17.5" r="1.5" fill="#00E5A3" />
      <circle cx="16" cy="22" r="1.5" fill="#00E5A3" />
      <circle cx="8" cy="17.5" r="1.5" fill="#00E5A3" />
      <circle cx="8" cy="8.5" r="1.5" fill="#00E5A3" />
      <circle cx="16" cy="13" r="2.5" fill="#00E5A3" fillOpacity="0.25" stroke="#00E5A3" strokeWidth="1" />
    </svg>
  );
}

/**
 * Space & Defence: Orbital Trajectory & Sub-Orbital Vector
 */
export function SpaceDefenceIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="16" cy="16" rx="13" ry="5.5" stroke="#00E5A3" strokeWidth="1.25" transform="rotate(-30 16 16)" />
      <path d="M6 26 L12 20 M20 12 L26 6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M26 6 L28 4 M28 8 L28 4 L24 4" stroke="#00E5A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="23" cy="12" r="2" fill="#00E5A3" />
    </svg>
  );
}

/**
 * Climate & CleanTech: Axial Flux & Energy Transformation Loop
 */
export function CleanTechEnergyIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 3 C23.18 3 29 8.82 29 16 C29 23.18 23.18 29 16 29 C8.82 29 3 23.18 3 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 7 L12 16 H18 L15 25 L22 14 H16 L19 7 Z" fill="#00E5A3" stroke="#00E5A3" strokeWidth="0.5" strokeLinejoin="round" />
      <circle cx="4" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

/**
 * Life Sciences: CAR-T Immunotherapy & Molecular Receptor Node
 */
export function LifeSciencesIcon({ className = "h-8 w-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8 6 C12 11 20 11 24 16 C20 21 12 21 8 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 6 C20 11 12 11 8 16 C12 21 20 21 24 26" stroke="#00E5A3" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <line x1="10" y1="23" x2="22" y2="23" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <circle cx="16" cy="16" r="2.5" fill="#00E5A3" />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
      <circle cx="24" cy="6" r="1.5" fill="#00E5A3" />
    </svg>
  );
}
