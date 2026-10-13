"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Search, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerLinks = [
    { name: "Focus Areas", href: "/focus-areas" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Apply for Capital", href: "/apply" },
    { name: "Institutional (LPs)", href: "/institutional" },
    { name: "Contact & Routed Inboxes", href: "/contact" },
  ];

  const isDark = theme === "dark";

  return (
    <>
      {/* 3 Individual Floating Glassmorphic Islands */}
      <header className="fixed top-3 sm:top-5 md:top-6 inset-x-0 z-50 px-4 sm:px-6 md:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Island 1 (Left): Individual Brand Logo Island */}
          <div className="pointer-events-auto flex items-center">
            <Link 
              href="/" 
              className={`flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] transition-all duration-300 hover:border-black/20 dark:hover:border-white/30 hover:scale-[1.02] active:scale-95 group ${
                scrolled
                  ? "bg-white/90 dark:bg-[#080808]/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  : "bg-white/75 dark:bg-[#080808]/75 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
              }`}
              aria-label="Home"
            >
              <div className="relative h-6 sm:h-7 md:h-8 w-auto flex items-center">
                <Image 
                  src="/logo-transparent.png" 
                  alt="Y-Point Logo" 
                  width={180} 
                  height={60} 
                  className={`object-contain h-full w-auto transition-all ${
                    mounted && isDark ? "invert hue-rotate-180" : ""
                  }`} 
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Island 2 (Center): Individual Menu Island (Locked to exact horizontal center) */}
          <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`group flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] transition-all duration-300 hover:border-black/20 dark:hover:border-white/30 hover:scale-[1.03] active:scale-95 ${
                scrolled
                  ? "bg-white/90 dark:bg-[#080808]/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  : "bg-white/75 dark:bg-[#080808]/75 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
              }`}
              aria-label="Open Navigation Menu"
            >
              {/* Swiss-style micro indicator lines */}
              <div className="flex flex-col gap-[3.5px] items-center justify-center w-3.5">
                <span className="block h-[1.5px] w-3.5 bg-black/80 dark:bg-white/80 rounded-full transition-all group-hover:scale-x-110" />
                <span className="block h-[1.5px] w-2.5 bg-black/80 dark:bg-white/80 rounded-full transition-all group-hover:w-3.5" />
              </div>
              <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] uppercase text-black/80 dark:text-white/85 group-hover:text-black dark:group-hover:text-white transition-colors">
                Menu
              </span>
            </button>
          </div>

          {/* Island 3 (Right): Individual Actions Island (Apply CTA + Theme Toggle) */}
          <div className="pointer-events-auto flex items-center">
            <div 
              className={`flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 pl-1.5 sm:pl-2 rounded-full backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] transition-all duration-300 hover:border-black/20 dark:hover:border-white/30 ${
                scrolled
                  ? "bg-white/90 dark:bg-[#080808]/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  : "bg-white/75 dark:bg-[#080808]/75 shadow-[0_4px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
              }`}
            >
              {/* Apply CTA Capsule */}
              <Link
                href="/apply"
                className="group inline-flex items-center gap-1.5 bg-black dark:bg-white text-white dark:text-black hover:bg-black/85 dark:hover:bg-white/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-sans uppercase tracking-[0.16em] font-semibold transition-all active:scale-95 shadow-xs"
              >
                <span>Apply</span>
                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              
              {/* Theme Toggle Button */}
              {mounted ? (
                <button 
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-black/8 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/8 dark:hover:bg-white/15 flex items-center justify-center transition-all text-black/70 dark:text-white/80 active:scale-90"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5" /> : <Moon className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5" />}
                </button>
              ) : (
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-black/8 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05]" />
              )}
            </div>
          </div>

        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[60] bg-white/98 dark:bg-[#050505]/98 backdrop-blur-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center px-6 sm:px-16 lg:px-24 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-5 right-5 sm:top-8 sm:right-8 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Close Menu"
        >
          <X className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto w-full">
          <div className="flex flex-col space-y-2.5 sm:space-y-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/40 dark:text-white/40 mb-2 block font-medium">
              Navigation Index · SINE IIT Bombay
            </span>
            {drawerLinks.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 text-2xl sm:text-4xl lg:text-5xl font-display font-light text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white transition-colors"
                style={{ transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms' }}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex flex-col justify-end text-sm font-sans font-light text-black/50 dark:text-white/40 space-y-8 pb-4 border-l border-black/5 dark:border-white/5 pl-12">
            <div>
              <p className="text-black/80 dark:text-white/80 uppercase tracking-widest mb-2 font-medium text-xs">Headquarters</p>
              <p>SINE, 5th Floor, RBTIC Building</p>
              <p>IIT Bombay, Powai, Mumbai 400076</p>
            </div>
            <div>
              <p className="text-black/80 dark:text-white/80 uppercase tracking-widest mb-2 font-medium text-xs">Direct Contact</p>
              <p className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">contact@y-point.vc</p>
              <p className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">ir@y-point.vc</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
