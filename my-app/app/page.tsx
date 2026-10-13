import React from "react";
import HeroBento from "./components/HeroBento";
import PositioningBento from "./components/PositioningBento";
import FocusAreasBento from "./components/FocusAreasBento";
import EdgeBento from "./components/EdgeBento";
import ConversionBento from "./components/ConversionBento";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 7.1 Hero Section: Parallax Bento Grid with Kinetic Video */}
      <HeroBento />

      {/* 7.2 Positioning Statement & 7.4 Why Now / The 19-Month Problem */}
      <PositioningBento />

      {/* 7.5 & 8 Focus Areas Floating Bento Grid */}
      <FocusAreasBento />

      {/* 7.6 & 10 The Y-Point Edge Bento: What You Get Beyond the Cheque */}
      <EdgeBento />

      {/* 7.9 Dual Conversion Bento & 7.10 Newsletter */}
      <ConversionBento />
    </div>
  );
}
