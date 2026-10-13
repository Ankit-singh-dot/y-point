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
    { name: "About us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Focus Areas", href: "/focus-areas" },
    { name: "Content", href: "/insights" },
    { name: "Apply for funding", href: "/apply" },
  ];

  const isDark = theme === "dark";

  return (
    <>
      {/* Seamless Floating Header: Logo Merged Left + Full Navigation Suite Right */}
      <header className="fixed top-3 sm:top-5 md:top-6 inset-x-0 z-50 px-4 sm:px-8 lg:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Brand Identity (Original logo colors preserved 100% across all scenes) */}
          <div className="pointer-events-auto flex items-center">
            <Link 
              href="/" 
              className="flex items-center group transition-transform hover:scale-[1.02] active:scale-95"
              aria-label="Y-Point Home"
            >
              <div className="flex items-center px-3 sm:px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-white/95 backdrop-blur-xl border border-black/10 dark:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                <div className="relative h-7 sm:h-7.5 md:h-8 w-auto flex items-center">
                  <Image 
                    src="/logo-transparent.png" 
                    alt="Y-Point Logo" 
                    width={180} 
                    height={60} 
                    className="object-contain h-full w-auto" 
                    priority
                  />
                </div>
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

      {/* Full Screen Overlay Menu - ONLY The 6 Requested Items */}
      <div 
        className={`fixed inset-0 z-[60] bg-white/98 dark:bg-[#050505]/98 backdrop-blur-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center px-6 sm:px-16 lg:px-24 ${
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

        <div className="max-w-4xl mx-auto w-full flex flex-col items-start justify-center space-y-4 sm:space-y-6">
          {drawerLinks.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-baseline gap-4 sm:gap-6 text-3xl sm:text-5xl lg:text-6xl font-display font-light text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white transition-all duration-300 hover:translate-x-3"
              style={{ transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms' }}
            >
              <span className="font-mono text-xs sm:text-sm tracking-widest text-black/25 dark:text-white/25 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                0{idx + 1}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
