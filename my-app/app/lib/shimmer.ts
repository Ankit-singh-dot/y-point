/**
 * High-performance SVG Shimmer DataURL generator for Next.js Image blur placeholders.
 * Uses Y-Point's deeptech aesthetic: dark graphite substrate with an emerald/zinc metallic sweep.
 */
export const shimmerSvg = (w: number = 700, h: number = 475) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop stop-color="#07090e" offset="15%" />
      <stop stop-color="#141a24" offset="35%" />
      <stop stop-color="#00E5A3" stop-opacity="0.15" offset="50%" />
      <stop stop-color="#141a24" offset="65%" />
      <stop stop-color="#07090e" offset="85%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#07090e" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.6s" repeatCount="indefinite" />
</svg>`;

export const toBase64 = (str: string): string => {
  if (typeof window === "undefined") {
    return Buffer.from(str).toString("base64");
  }
  return window.btoa(str);
};

export const shimmerDataUrl = (w: number = 700, h: number = 475): string => {
  return `data:image/svg+xml;base64,${toBase64(shimmerSvg(w, h))}`;
};
