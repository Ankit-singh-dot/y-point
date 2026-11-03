"use client";

import React from "react";
import PhotoHero from "../components/PhotoHero";
import ContentSection from "../components/ContentSection";

export default function InsightsPage() {
  return (
    <main className="min-h-screen">
      <PhotoHero photo="campusLawn" eyebrow="Insights · SINE Voices" title="Signal from the Lab." intro="Conversations with founders, scientists and builders taking Indian research to global scale." />
      <ContentSection />
    </main>
  );
}
