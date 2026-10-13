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
      {/* Seamless Floating Header: Logo Merged Left + Full Navigation Suite Right */}
      <header className="fixed top-3 sm:top-5 md:top-6 inset-x-0 z-50 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Identity (Seamlessly merged with the video, no opaque pill) */}
          <div className="pointer-events-auto flex items-center">
            <Link 
              href="/" 
              className="flex items-center group transition-transform hover:scale-[1.02] active:scale-95 py-1"
              aria-label="Y-Point Home"
            >
              <div className="relative h-8 sm:h-9 md:h-10 w-auto flex items-center">
                <Image 
                  src="/logo-transparent.png" 
                  alt="Y-Point Logo" 
                  width={200} 
                  height={70} 
                  className={`object-contain h-full w-auto transition-all duration-300 ${
                    scrolled 
                      ? (mounted && isDark ? "brightness-0 invert" : "") 
                      : "brightness-0 invert drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
                  }`} 
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right Corner: Only Menu & Theme Toggle */}
          <div className="pointer-events-auto flex items-center">
            <div 
              className={`flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 pl-2 sm:pl-2.5 rounded-full backdrop-blur-2xl transition-all duration-500 ${
                scrolled
                  ? "bg-white/90 dark:bg-[#0a0a0a]/90 border border-black/[0.08] dark:border-white/[0.12] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  : "bg-black/45 hover:bg-black/60 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Menu Trigger Button (Opens full-screen index drawer) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-full transition-all active:scale-95 ${
                  scrolled
                    ? "hover:bg-black/5 dark:hover:bg-white/10 text-black/80 dark:text-white/85"
                    : "hover:bg-white/15 text-white/90"
                }`}
                aria-label="Open Full Navigation Menu"
              >
                <div className="flex flex-col gap-1 items-center justify-center w-3.5">
                  <span className={`block h-[1.5px] w-3.5 rounded-full transition-transform group-hover:scale-x-110 ${scrolled ? "bg-black/80 dark:bg-white/80" : "bg-white"}`} />
                  <span className={`block h-[1.5px] w-2.5 rounded-full ml-auto transition-all group-hover:w-3.5 ${scrolled ? "bg-black/80 dark:bg-white/80" : "bg-white"}`} />
                </div>
                <span className="text-xs font-sans font-semibold tracking-[0.22em] uppercase">
                  Menu
                </span>
              </button>

              {/* Theme Toggle Button */}
              {mounted ? (
                <button 
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center transition-all active:scale-90 ${
                    scrolled
                      ? "border border-black/8 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/8 dark:hover:bg-white/15 text-black/70 dark:text-white/80"
                      : "border border-white/15 bg-white/10 hover:bg-white/20 text-white"
                  }`}
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                </button>
              ) : (
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/10 bg-white/5" />
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
