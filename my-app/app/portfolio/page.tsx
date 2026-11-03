"use client";

import React from "react";
import PhotoHero from "../components/PhotoHero";
import PortfolioSection from "../components/PortfolioSection";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PhotoHero photo="crestPlaque" eyebrow="Portfolio" title="Backing the next generation of deeptech." intro="Advanced computing, manufacturing, materials, biotechnology, climate, space and defence." />
      <PortfolioSection />
    </main>
  );
}
