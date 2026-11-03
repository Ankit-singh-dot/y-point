"use client";

import React from "react";
import PhotoHero from "../components/PhotoHero";
import AboutSection from "../components/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PhotoHero photo="mainBuildingLeaves" eyebrow="About Y-Point" title="Investing where science meets opportunity." intro="Launched by SINE, IIT Bombay, to back early-stage deeptech ventures built on real scientific progress." />
      <AboutSection />
    </main>
  );
}
