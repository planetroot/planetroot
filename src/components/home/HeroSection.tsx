"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const QUICK_LINKS = [
  { label: "Kerala Stays & Villas", target: "featured-resorts-section" },
  { label: "Curated Packages", target: "packages-section" },
  { label: "Popular Destinations", target: "destinations-section" },
  { label: "Plan Custom Journey", target: "enquiry-section" },
];

export default function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0a0d0c]">
      {/* Hero Visual Container */}
      <div className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] flex items-center justify-center overflow-hidden">
        
        {/* Authentic Kerala Backwater & Houseboat Landscape */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2560&q=85"
            alt="Kerala Backwaters with Traditional Luxury Houseboats — Planet Root Travels"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Pure Natural Dark Vignette for Pristine Legibility */}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0c] via-black/25 to-[#0a0d0c]/70" />
        </div>

        {/* Minimal Centered Editorial Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-40 pb-20 sm:pb-24">
          {/* Subtle Agency Eyebrow */}
          <p className="text-[11px] sm:text-xs font-medium tracking-[0.3em] uppercase text-stone-300 mb-5">
            Planet Root Travels • Beyond Borders
          </p>

          {/* Professional Typography Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white leading-[1.08] mb-6">
            Curated Stays &amp; <br />
            <span className="font-semibold text-white">Tailored Holidays</span>
          </h1>

          {/* Clean Editorial Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed mb-9">
            Handcrafted private pool villas, backwater houseboats, romantic honeymoon retreats, and custom holiday escapes across Kerala and premier global destinations.
          </p>

          {/* White and Transparent Minimal Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            {/* White Primary Button */}
            <button
              type="button"
              onClick={() => scrollTo("packages-section")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-stone-200 text-black font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Transparent WhatsApp Action */}
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

      {/* Sleek Minimal Bottom Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#0a0d0c]/85 backdrop-blur-xl">
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
