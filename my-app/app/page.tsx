import React from "react";
import HeroBento from "./components/HeroBento";
import HomeIntroAndAdvantage from "./components/HomeIntroAndAdvantage";
import SineVoicesHomeSection from "./components/SineVoicesHomeSection";
import HomeClosingCta from "./components/HomeClosingCta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#05070a]">
      {/* 1. Cinematic Film Hero with Clean Single CTA */}
      <HeroBento />

      {/* 2. From Science to Significance & The Y-Point Advantage (with purposeful IITB integration) */}
      <HomeIntroAndAdvantage />

      {/* 3. Official SINE Voices YouTube Video Podcast Theater */}
      <SineVoicesHomeSection />

      {/* 4. Closing CTA with purposeful IITB Institutional Gateway backdrop */}
      <HomeClosingCta />
    </div>
  );
}
