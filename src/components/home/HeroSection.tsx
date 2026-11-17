"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const QUICK_LINKS = [
  { label: "International Tours", target: "packages-section" },
  { label: "Domestic Holidays", target: "packages-section" },
  { label: "Honeymoon Escapes", target: "packages-section" },
  { label: "Kerala Stays & Villas", target: "featured-resorts-section" },
];

export default function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0b0d0e]">
      {/* Hero Visual Stage */}
      <div className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] flex items-center justify-center overflow-hidden">
        {/* Crisp Background Photography with Neutral Dark Cinema Overlays (Zero Green Tint) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=85"
            alt="Handcrafted Stays and Tailored Journeys — Planet Root Travels"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-102"
          />
          {/* Neutral Deep Black & Charcoal Overlays for Crystal Clear Legibility */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-black/30 to-[#0b0d0e]/60" />
        </div>

        {/* Minimal Centered Editorial Content with Modern Professional Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-40 pb-20 sm:pb-28">
          {/* Quiet Minimal Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.3em] uppercase text-stone-200">
              Planet Root • Beyond Borders
            </p>
          </div>

          {/* Professional Modern Title (Executive Sans Theme) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white leading-[1.08] mb-6">
            Handcrafted Stays &amp; <br />
            <span className="font-semibold text-white">Tailored Journeys</span>
          </h1>

          {/* Clean 1-Sentence Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed mb-9">
            Curated private pool villas, boutique resorts, honeymoon escapes, and custom international tours crafted around your pace.
          </p>

          {/* Clean White and Transparent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            {/* White Solid Button */}
            <button
              type="button"
              onClick={() => scrollTo("packages-section")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-stone-200 text-black font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Transparent Glass Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>For Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#0b0d0e]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center divide-x divide-white/10 text-stone-300">
            {QUICK_LINKS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.target)}
                className="px-5 sm:px-8 py-3.5 sm:py-4 hover:text-white transition-colors cursor-pointer tracking-wider uppercase font-medium text-[11px]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
