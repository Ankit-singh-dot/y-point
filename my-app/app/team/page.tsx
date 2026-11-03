"use client";

import React from "react";
import PhotoHero from "../components/PhotoHero";
import TeamSection from "../components/TeamSection";

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <PhotoHero photo="mainBuilding" eyebrow="Team" title="A team for technologically ambitious founders." intro="Investment judgment, technology evaluation and company-building experience in one team." />
      <TeamSection />
    </main>
  );
}
