import React from "react";
import PhotoHero from "../components/PhotoHero";
import HorizontalScreenGallery from "../components/HorizontalScreenGallery";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Building, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Routed Inboxes | Y-Point Venture Capital Fund-I",
  description:
    "Direct contact routes for founders, institutional partners, compliance, press, and SINE IIT Bombay.",
};

export default function ContactPage() {
  const routes = [
    {
      channel: "Founders & Ventures",
      dest: "info@y-point.vc",
      action: "Direct investment desk for pitch decks, validation data, and commercial roadmaps.",
      link: "/apply",
      buttonText: "Pitch to Investment Team",
    },
    {
      channel: "Institutions & LPs",
      dest: "ir@y-point.vc",
      action: "For institutional co-investors, family offices, corporates and DFIs.",
      link: "mailto:ir@y-point.vc",
      buttonText: "Email Investor Relations",
    },
    {
      channel: "Compliance & Regulatory",
      dest: "compliance@y-point.vc",
      action: "For regulatory, SEBI AIF compliance, trustee and formal correspondence.",
      link: "mailto:compliance@y-point.vc",
      buttonText: "Email Compliance",
    },
    {
      channel: "Press & Media",
      dest: "press@y-point.vc",
      action: "For media enquiries, editorial commentary and interview requests.",
      link: "mailto:press@y-point.vc",
      buttonText: "Email Media Desk",
    },
    {
      channel: "SINE & Incubation",
      dest: "sine@sineiitb.org",
      action: "For IIT Bombay incubation, grant ladders, lab facilities and student programmes.",
      link: "mailto:sine@sineiitb.org",
      buttonText: "Contact SINE Office",
    },
    {
      channel: "General Enquiries",
      dest: "info@y-point.vc",
      action: "For all other correspondence not covered above.",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=info@y-point.vc&su=Y-Point%20General%20Enquiry",
      buttonText: "Email General Desk",
    },
  ];

  return (
    <>
    <PhotoHero photo="campusLawn" eyebrow="Contact" title="Contact & direct routes." intro="Routed inboxes, so your message reaches the right person first time." />
    <div className="relative min-h-screen bg-white dark:bg-[#07090e] text-[#0A0A0A] dark:text-white pt-16 sm:pt-20 pb-20 sm:pb-28 lg:pb-36 overflow-hidden">

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-4 border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] hover:border-[#0D7377] transition-all hover:-translate-y-0.5 shadow-xs"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0D7377] dark:text-[#00E5A3] font-bold block">
                  {route.channel}
                </span>
                <div className="font-mono text-sm sm:text-base font-semibold text-[#0A0A0A] dark:text-zinc-200">
                  {route.dest}
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {route.action}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/10">
                <Link
                  href={route.link}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-[#00E5A3] font-semibold transition-colors"
                >
                  <span>{route.buttonText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Registered Office Bento with Authentic IIT Bombay Visual Anchor */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-[#FBFBFB] dark:bg-[#0c0f16] p-6 sm:p-10 lg:p-12 space-y-8 overflow-hidden shadow-md">

          <div className="relative flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#0D7377] dark:text-[#00E5A3]" />
              <h2 className="font-display font-light text-2xl sm:text-3xl text-[#0A0A0A] dark:text-white">
                Registered Office
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#0D7377] dark:text-[#00E5A3] font-semibold">
              <div className="relative h-4 w-4 shrink-0">
                <Image src="/iitb/iitb-logo.webp" alt="" fill className="object-contain" />
              </div>
              <span>IIT Bombay Campus</span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light">
              <p className="font-semibold text-[#0A0A0A] dark:text-white">
                Y-Point Investment Advisors Private Limited
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Investment Manager to Y-Point Venture Capital Fund-I<br />
                SINE Office, 5th Floor, RBTIC Building, A S Marg<br />
                Indian Institute of Technology Bombay, Powai<br />
                Mumbai 400076, Maharashtra, India
              </p>
              <div className="pt-2 font-mono text-xs text-[#0D7377] dark:text-[#00E5A3]">
                Campus Location: RBTIC Building, IIT Bombay Main Campus
              </div>
              <div className="font-mono text-xs text-zinc-400">
                ज्ञानं परमं ध्येयम् · Knowledge is the Supreme Goal
              </div>
            </div>

            <div className="md:col-span-5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 p-6 space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2 text-[#0A0A0A] dark:text-white font-mono">
                <Building className="h-4 w-4 text-[#0D7377] dark:text-[#00E5A3]" />
                <span className="font-semibold">Visiting Protocol</span>
              </div>
              <p className="leading-relaxed font-light">
                Visitors to the SINE office within IIT Bombay campus must register at the main campus security gate with valid government photo identification. Prior appointment required.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Horizontal Documentary Screen starting from Director Image */}
    <HorizontalScreenGallery
      sectionId="campus-archive"
    />

    {/* Section Footer Navigation */}
    <div className="bg-[#F9F9F8] dark:bg-[#07090e] border-t border-black/10 dark:border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4 font-sans text-sm">
        <span className="font-mono text-xs text-[#666666] dark:text-zinc-400">
          NEXT SECTIONS:
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/team"
            className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
          >
            <span>Investment Team</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-1.5 font-semibold text-[#0A0A0A] dark:text-white hover:text-[#0D7377] dark:hover:text-teal-400 transition-colors"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
