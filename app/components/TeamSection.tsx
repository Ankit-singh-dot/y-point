"use client";

import React from "react";
import ShimmerImage from "./ShimmerImage";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  responsibility: string;
  bullets: string[];
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Shaji Varghese",
      role: "Executive Director, Y-Point ",
      image: "/shaji_d2e4ea2a32.webp",
      linkedin: "https://www.linkedin.com/in/shaji-varghese-59079b5/",
      responsibility: "Oversees fund governance, institutional incubation, and LP syndication.",
      bullets: [
        "30+ years in private equity and venture capital (Partner at BTS India PE, senior roles at GVFL & KVCF).",
        "CEO of SINE, overseeing incubation and institutional translation for 220+ deeptech ventures.",
        "CFA (India), MBA, B.Tech.",
      ],
    },
    {
      name: "Saurabh Jain",
      role: "Partner / Fund Manager",
      image: "/Saurabh_Jain_d1169fdf3d.webp",
      linkedin: "https://www.linkedin.com/in/saurabh-jain-a8a2bb19/",
      responsibility: "Leads semiconductors, computing, and industrial hardware diligence and portfolio support.",
      bullets: [
        "10+ years early-stage investing (ex-Refex Capital, Tracxn); evaluated 400+ deeptech opportunities.",
        "Led investments in chip design, photonics, and robotics through TRL 4–7 translation.",
        "B.Tech, IIT Kharagpur.",
      ],
    },
    {
      name: "Saurabh Singh",
      role: "Partner / Investment Manager",
      image: "/Saurabh_Singh_67047a2afb.webp",
      linkedin: "https://www.linkedin.com/in/saurabh-singh-08447142/",
      responsibility: "Operator-led technical diligence, material science, and clean climate tech sourcing.",
      bullets: [
        "Former deeptech founder (3 ventures) with direct operational manufacturing and factory floor experience.",
        "Consulted on supply chains and commercial manufacturing economics at PwC.",
        "B.Tech, BIT Mesra.",
      ],
    },
    {
      name: "Jay Dhadhal",
      role: "Partner / Senior Analyst",
      image: "/Jay Dhadhal.webp",
      linkedin: "https://www.linkedin.com/in/jaydhadhal/",
      responsibility: "Manages SEBI AIF compliance, fund operations, and institutional LP diligence reporting.",
      bullets: [
        "Evaluated 250+ deeptech deals and worked on institutional venture investments at GVFL.",
        "Manages statutory reporting for SIDBI, SBI, and Category II AIF regulatory frameworks.",
        "CFA Level 2 and CAIA Level 1 candidate.",
      ],
    },
  ];

  return (
    <section id="team" className="relative pt-20 sm:pt-28 pb-16 sm:pb-20 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. FUND MANAGEMENT TEAM GRID */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#0D7377] font-semibold">
              Fund Management
            </span>
            <h2 className="font-display font-light text-2xl sm:text-4xl text-[#0A0A0A] dark:text-white">
              Leadership Profiles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-[#F9F9F8] dark:bg-[#0c0f16] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#0D7377] hover:shadow-lg"
              >
                <div>
                  {/* Portrait: small beside the name on phones (the source photos are ~300px wide), full-width from md up */}
                  <div className="flex items-center gap-4 p-6 pb-0 md:block md:p-0">
                    <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl bg-black/5 md:w-full md:rounded-none">
                      <ShimmerImage
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 767px) 96px, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 hidden bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 md:block" />

                      {/* Floating LinkedIn Button on Portrait (Desktop) */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        title={`Connect with ${member.name} on LinkedIn`}
                        className="absolute top-3 right-3 z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-[#0A66C2] text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>

                      <div className="absolute bottom-3 left-4 right-4 hidden text-white md:block">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-teal-300 block">
                          Y-Point Investment Team
                        </span>
                      </div>
                    </div>
                    <div className="md:hidden flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display font-medium text-xl text-[#0A0A0A] dark:text-white truncate">{member.name}</h3>
                          <div className="font-sans text-xs text-[#0D7377] dark:text-[#00E5A3] font-semibold mt-1">{member.role}</div>
                        </div>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          title={`Connect with ${member.name} on LinkedIn`}
                          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 hover:bg-[#0A66C2] hover:text-white text-[#0A66C2] dark:text-white transition-colors"
                        >
                          <LinkedInIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bio Content */}
                  <div className="p-6 space-y-3">
                    <div className="hidden md:block">
                      <h3 className="font-display font-medium text-xl text-[#0A0A0A] dark:text-white">
                        {member.name}
                      </h3>
                      <div className="font-sans text-xs text-[#0D7377] dark:text-[#00E5A3] font-semibold mt-1">
                        {member.role}
                      </div>
                    </div>

                    <p className="font-sans italic text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed border-l-2 border-[#0D7377] pl-3 py-0.5">
                      &ldquo;{member.responsibility}&rdquo;
                    </p>

                    <div className="pt-3 border-t border-black/5 dark:border-white/5 space-y-2">
                      {member.bullets.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-sans font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          <span className="text-[#0D7377] font-bold mt-0.5">·</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Aligned LinkedIn Action */}
                <div className="p-4 px-6 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#11141c] hover:border-[#0D7377] dark:hover:border-[#00E5A3] transition-all duration-200 group/link shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current text-[#0A66C2] group-hover/link:scale-110 transition-transform" />
                      <span className="font-mono text-xs font-semibold text-[#0A0A0A] dark:text-white group-hover/link:text-[#0D7377] dark:group-hover/link:text-[#00E5A3] transition-colors">
                        LinkedIn
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0D7377] dark:text-[#00E5A3] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
