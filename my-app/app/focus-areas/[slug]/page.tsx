import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users
} from "lucide-react";
import { VERTICALS } from "../../data/verticals";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(VERTICALS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vertical = VERTICALS[slug];
  if (!vertical) return { title: "Not Found" };
  return {
    title: `${vertical.name} | Focus Areas | Y-Point Venture Capital Fund-I`,
    description: vertical.oneLineThesis,
  };
}

export default async function VerticalDetailPage({ params }: Props) {
  const { slug } = await params;
  const vertical = VERTICALS[slug];

  if (!vertical) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-24">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/focus-areas"
            className="group inline-flex items-center gap-2.5 font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Focus Areas</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/5 px-3.5 py-1 text-[11px] sm:text-xs font-sans uppercase tracking-widest text-black/60 dark:text-white/60">
            <span>Vertical Thesis · TRL 4–7 Entry</span>
          </div>

          <h1 className="font-display font-light text-3xl sm:text-6xl md:text-8xl tracking-tight text-black dark:text-white leading-[1.1]">
            {vertical.heroHeadline}
          </h1>

          <p className="font-display font-light text-lg sm:text-3xl lg:text-4xl text-black/40 dark:text-white/40">
            {vertical.name} — &ldquo;{vertical.oneLineThesis}&rdquo;
          </p>
        </div>

        {/* Featured Visual Header */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black">
          <Image
            src={vertical.image}
            alt={vertical.name}
            fill
            className="object-cover opacity-80 mix-blend-screen"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <span className="font-sans text-xs uppercase tracking-wider font-semibold text-white bg-black/60 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md">
              IIT Bombay &amp; SINE Backed Diligence
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-8 space-y-24">
            {/* Block 2: What We Believe */}
            <div className="space-y-8">
              <div className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-bold">
                01 · PERSPECTIVE &amp; WORLDVIEW
              </div>
              <h2 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
                What we believe
              </h2>
              <div className="space-y-6 pt-4 border-t border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 font-sans font-light text-lg leading-relaxed">
                {vertical.whatWeBelieve.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Block 3: Where We Are Looking */}
            <div className="space-y-8">
              <div className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-bold">
                02 · PIPELINE FOCUS
              </div>
              <h2 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
                Where we are looking
              </h2>
              <div className="space-y-0 pt-4 border-t border-black/10 dark:border-white/10 divide-y divide-black/5 dark:divide-white/5">
                {vertical.whereWeAreLooking.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 py-6 text-black/80 dark:text-white/80"
                  >
                    <span className="font-sans text-[10px] text-black dark:text-white font-bold mt-1">›</span>
                    <span className="font-sans font-light text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 4: What a Fundable Company Looks Like Here */}
            <div className="space-y-8">
              <div className="font-sans text-xs uppercase tracking-wider text-black/60 dark:text-white/60 font-bold">
                03 · THE INVESTMENT BAR
              </div>
              <h2 className="font-display font-light text-4xl sm:text-5xl text-black dark:text-white">
                What a fundable company looks like here
              </h2>
              <div className="space-y-6 pt-8 border-t border-black/10 dark:border-white/10">
                {vertical.fundableCompany.map((criteria, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-black/80 dark:text-white/80">
                    <CheckCircle2 className="h-6 w-6 text-black dark:text-white shrink-0" />
                    <span className="font-sans font-light text-lg leading-relaxed">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>



          </div>
          
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 h-max">
            {/* Block 6: Ecosystem Reference */}
            <div className="rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-8 space-y-6 border border-black/10 dark:border-white/5">
              <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                <ShieldCheck className="h-5 w-5 text-black dark:text-white" />
                <h3 className="font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-semibold">
                  Ecosystem Reference
                </h3>
              </div>
              <p className="font-sans font-light text-sm sm:text-base text-black/70 dark:text-white/70 leading-relaxed">
                {vertical.ecosystemReference.disclaimer}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {vertical.ecosystemReference.companies.map((co, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-black/10 dark:border-white/20 bg-white dark:bg-black px-3.5 py-1.5 font-sans text-xs uppercase tracking-wider text-black/80 dark:text-white/80 font-medium"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>

            {/* Block 7: Team & IC Coverage */}
            <div className="rounded-3xl bg-black/5 dark:bg-[#0a0a0a] p-8 space-y-6 border border-black/10 dark:border-white/5">
              <div className="flex items-center gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                <Users className="h-5 w-5 text-black dark:text-white" />
                <h3 className="font-sans text-xs uppercase tracking-wider text-black/70 dark:text-white/70 font-semibold">
                  Team Coverage
                </h3>
              </div>
              <div className="space-y-6 text-sm sm:text-base">
                <div className="space-y-2">
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">Investment Team Lead:</span>
                  <span className="font-sans font-light text-black/90 dark:text-white/90">{vertical.teamCoverage.lead}</span>
                </div>
                <div className="space-y-2 pt-4 border-t border-black/5 dark:border-white/5">
                  <span className="font-sans text-xs uppercase tracking-wider text-black/50 dark:text-white/50 block font-semibold">IC &amp; Domain Reviewers:</span>
                  <span className="font-sans font-light text-black/90 dark:text-white/90 leading-relaxed block">{vertical.teamCoverage.icMembers.join(" · ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 8: Call to Action Block */}
        <div className="rounded-3xl bg-black dark:bg-white p-12 sm:p-24 text-center space-y-12 mt-16">
          <h3 className="font-display font-light text-4xl sm:text-5xl text-white dark:text-black">
            Building in {vertical.name}?
          </h3>
          <p className="font-sans font-light text-lg text-white/60 dark:text-black/60 max-w-2xl mx-auto leading-relaxed">
            Tell us what you are working on. We read every submission and respond within 10 working days, including when the answer is no.
          </p>
          <div className="pt-4">
            <Link
              href="/apply"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 dark:border-black/20 bg-transparent px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/5 transition-all"
            >
              <span>Tell us about it</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
