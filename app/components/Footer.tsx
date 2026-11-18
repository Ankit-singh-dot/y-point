"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-14 sm:pb-20 rounded-t-[2.5rem] sm:rounded-t-[4rem] border-t border-black/5 dark:border-white/10 z-20">
      
      {/* Upper Minimal Navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center px-4 py-2 rounded-2xl bg-white border border-black/10 shadow-xs">
                <div className="relative h-10 sm:h-12 md:h-14 w-auto flex items-center">
                  <Image 
                    src="/logo-transparent.webp" 
                    alt="Y-Point Logo" 
                    width={220} 
                    height={75} 
                    className="object-contain h-full w-auto opacity-95 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
            </div>

            <p className="max-w-sm font-sans font-light text-base leading-relaxed text-black/75 dark:text-white/75">
              India&apos;s first institute-linked deep tech venture capital fund.
            </p>

            <div className="space-y-3 font-sans font-light text-sm text-black/60 dark:text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  SINE Office, 5th Floor, RBTIC Building, IIT Bombay, Powai, Mumbai 400076
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4.5 w-4.5 shrink-0" />
                <span>Manager: Y-Point Investment Advisors</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-8 pt-4 sm:pt-0">
            {/* Sections */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] font-semibold">01 · Structure</h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><Link href="/about" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Portfolio & Track Record</Link></li>
                <li><Link href="/team" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Team & Advisors</Link></li>
              </ul>
            </div>

            {/* Theses & Content */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] font-semibold">02 · Insights</h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><Link href="/insights" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">SINE Voices</Link></li>
                <li><Link href="/insights" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors">Podcast Series</Link></li>
              </ul>
            </div>

            {/* Engagement */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0D7377] font-semibold">03 · Engage</h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><Link href="/apply" className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors font-medium">Apply for Funding</Link></li>
                <li>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@y-point.vc&su=Y-Point%20General%20Enquiry" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black/70 dark:text-white/70 hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>info@y-point.vc</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
