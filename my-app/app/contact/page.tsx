import React from "react";
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
      channel: "Founders",
      dest: "Application Form",
      action: "Use the application form — it reaches the investment team directly with a 10-day response commitment.",
      link: "/apply",
      buttonText: "Go to Application Form",
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
      dest: "contact@y-point.vc",
      action: "For all other correspondence not covered above.",
      link: "mailto:contact@y-point.vc",
      buttonText: "Email General Desk",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Page Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-zinc-300">
            <span>ROUTED INBOXES · SECTION 17</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            CONTACT &amp; DIRECT ROUTES
          </h1>

          <p className="text-zinc-400 text-xs sm:text-base max-w-2xl">
            We use routed inboxes so your inquiry reaches the right person immediately without languishing in a generic catch-all inbox.
          </p>
        </div>

        {/* Routes Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className="bento-card flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-white font-bold block">
                  {route.channel}
                </span>
                <div className="font-mono text-sm font-semibold text-zinc-200">
                  {route.dest}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {route.action}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={route.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:underline"
                >
                  <span>{route.buttonText}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Registered Office Bento */}
        <div className="bento-card p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-white" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Registered Office
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3 text-sm text-zinc-300">
              <p className="font-semibold text-white">
                Y-Point Investment Advisors Private Limited
              </p>
              <p className="text-xs leading-relaxed text-zinc-400">
                Investment Manager to Y-Point Venture Capital Fund-I<br />
                SINE Office, 5th Floor, RBTIC Building, A S Marg<br />
                Indian Institute of Technology Bombay, Powai<br />
                Mumbai 400076, Maharashtra, India
              </p>
              <div className="pt-2 font-mono text-xs text-white">
                Campus Location: RBTIC Building, IIT Bombay Main Campus
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 space-y-3 text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-white font-mono">
                <Building className="h-4 w-4 text-white" />
                <span>Visiting Protocol</span>
              </div>
              <p>
                Visitors to the SINE office within IIT Bombay campus must register at the main campus security gate with valid government photo identification. Prior appointment required.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
