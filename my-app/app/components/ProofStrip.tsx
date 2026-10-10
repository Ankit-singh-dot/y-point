import React from "react";
import { Shield } from "lucide-react";

export default function ProofStrip() {
  const metrics = [
    {
      value: "₹250 Cr",
      label: "target fund size",
      detail: "Category II AIF",
    },
    {
      value: "25–30",
      label: "companies",
      detail: "concentrated portfolio",
    },
    {
      value: "₹3–5 Cr",
      label: "initial cheque",
      detail: "plus follow-on reserve",
    },
    {
      value: "TRL 4–7",
      label: "where we enter",
      detail: "validated science",
      highlight: true,
    },
    {
      value: "532",
      label: "startups supported by SINE*",
      detail: "since 2004",
    },
    {
      value: "SEBI",
      label: "Category II AIF",
      detail: "IN/AIF2/25-26/1937",
    },
  ];

  return (
    <section className="relative border-b border-[#1f2532] bg-[#0b0d13] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-4 text-center rounded-xl transition-all ${
                item.highlight
                  ? "border border-[#00e5a3]/30 bg-[#00e5a3]/5 shadow-[0_0_20px_rgba(0,229,163,0.1)]"
                  : "border border-[#1b2230]/60 bg-[#0e121a]/40"
              }`}
            >
              <span
                className={`font-mono text-2xl font-bold sm:text-3xl tracking-tight ${
                  item.highlight ? "text-[#00e5a3]" : "text-white"
                }`}
              >
                {item.value}
              </span>
              <span className="mt-2 text-xs font-medium text-zinc-300">
                {item.label}
              </span>
              <span className="mt-0.5 font-mono text-[10px] text-zinc-400">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Mandatory SINE Attribution Label (Section 4.4 & 7.3) */}
        <div className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-zinc-400">
          <Shield className="h-3.5 w-3.5 text-[#00e5a3]" />
          <span>
            *SINE, the technology business incubator of IIT Bombay, since 2004. Reconciled to SEBI registration and fund PPM.
          </span>
        </div>
      </div>
    </section>
  );
}
