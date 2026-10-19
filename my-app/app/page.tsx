import React from "react";
import HeroBento from "./components/HeroBento";
import FocusAreasStackingBento from "./components/FocusAreasStackingBento";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#05070a]">
      {/* 1. Pure Full-Screen Cinematic Video Hero with Single "Apply for Funding" Button */}
      <HeroBento />

      {/* 2. Six Deep Tech Focus Areas with Card-Over-Card Stacking Scroll Physics */}
      <FocusAreasStackingBento />
    </div>
  );
}
