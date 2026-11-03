"use client";

import React from "react";
import PhotoHero from "../components/PhotoHero";
import ApplySection from "../components/ApplySection";

export default function ApplyPage() {
  return (
    <main className="min-h-screen">
      <PhotoHero
        photo="mainGate"
        eyebrow="Pitch to us"
        title="Building a deeptech company?"
        intro="Tell us the problem, the technology behind it, and what you have validated so far."
      />
      <ApplySection />
    </main>
  );
}
