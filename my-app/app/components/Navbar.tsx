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

  const navLinks = [
    { name: "Focus Areas", href: "/focus-areas" },
    { name: "Platform", href: "/platform" },
    { name: "Lab to Market", href: "/lab-to-market" },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Apply", href: "/apply" },
  ];

  const isDark = theme === "dark";

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-12 py-6 transition-all duration-500 ${
          scrolled ? "bg-white dark:bg-black py-4 border-b border-black/5 dark:border-white/5 shadow-sm" : "bg-transparent"
        }`}
      >
        {/* Brand Identity / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-8 w-auto flex items-center">
            {/* Logo adapts blending based on theme if needed, but since it's a jpeg we'll use mix-blend-multiply in light mode and mix-blend-lighten in dark mode */}
            <Image 
              src="/logo.jpeg" 
              alt="Y-Point Logo" 
              width={100} 
              height={32} 
              className={`object-contain h-full w-auto opacity-90 transition-opacity group-hover:opacity-100 ${
                mounted && isDark ? "invert hue-rotate-180 mix-blend-screen" : "mix-blend-multiply"
              }`} 
            />
          </div>
        </Link>

        {/* Center: Minimal Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="absolute left-1/2 -translate-x-1/2 text-xs font-sans font-medium tracking-[0.15em] text-black/60 hover:text-black dark:text-white/70 dark:hover:text-white uppercase transition-colors"
        >
          Menu
        </button>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <Link
            href="/apply"
            className="text-xs font-sans font-medium tracking-[0.15em] text-black/60 hover:text-black dark:text-white/70 dark:hover:text-white uppercase transition-colors hidden sm:block"
          >
            Apply
          </Link>
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button 
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="text-black/60 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}

        </div>
      </div>

      {/* Full Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-[60] bg-white dark:bg-[#030303] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center px-6 sm:px-24 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 sm:top-12 sm:right-12 text-black/40 hover:text-black dark:text-white/50 dark:hover:text-white p-4 transition-colors"
        >
          <X className="h-8 w-8 font-light" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto w-full">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {navLinks.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-4 text-4xl sm:text-6xl font-display font-light text-black/40 hover:text-black dark:text-white/40 dark:hover:text-white transition-colors"
                style={{ transitionDelay: mobileMenuOpen ? `${idx * 50}ms` : '0ms' }}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex flex-col justify-end text-sm font-sans font-light text-black/40 dark:text-white/40 space-y-8 pb-4">
            <div>
              <p className="text-black/80 dark:text-white/80 uppercase tracking-widest mb-2 font-medium">Headquarters</p>
              <p>SINE, IIT Bombay</p>
              <p>Powai, Mumbai, Maharashtra 400076</p>
            </div>
            <div>
              <p className="text-black/80 dark:text-white/80 uppercase tracking-widest mb-2 font-medium">Connect</p>
              <p className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">contact@y-point.com</p>
              <p className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
