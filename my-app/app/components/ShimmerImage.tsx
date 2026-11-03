"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { shimmerDataUrl } from "../lib/shimmer";

export interface ShimmerImageProps extends ImageProps {
  wrapperClassName?: string;
}

/**
 * ShimmerImage: Next.js Image with high-fidelity animated shimmer skeleton
 * and silk-smooth progressive fade-in on load.
 */
export default function ShimmerImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  placeholder = "blur",
  blurDataURL,
  onLoad,
  fill,
  width,
  height,
  ...rest
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const numWidth = typeof width === "number" ? width : 800;
  const numHeight = typeof height === "number" ? height : 600;
  const computedBlur = blurDataURL || shimmerDataUrl(numWidth, numHeight);

  if (fill) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${wrapperClassName}`}>
        {/* Shimmer skeleton layer displayed while image bytes stream in */}
        {!isLoaded && (
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 shimmer-skeleton pointer-events-none transition-opacity duration-700"
          />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          placeholder={placeholder}
          blurDataURL={computedBlur}
          onLoad={(e) => {
            setIsLoaded(true);
            if (onLoad) onLoad(e);
          }}
          className={`transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
          } ${className}`}
          {...rest}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${
        !isLoaded ? "shimmer-skeleton" : ""
      } ${wrapperClassName}`}
      style={{
        width: width ? (typeof width === "number" ? `${width}px` : width) : undefined,
        height: height ? (typeof height === "number" ? `${height}px` : height) : undefined,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder={placeholder}
        blurDataURL={computedBlur}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
        className={`transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        } ${className}`}
        {...rest}
      />
    </div>
  );
}

