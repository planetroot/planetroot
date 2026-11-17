"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const QUICK_LINKS = [
  { label: "International Tours", target: "packages-section" },
  { label: "Domestic Holidays", target: "packages-section" },
  { label: "Honeymoon Escapes", target: "packages-section" },
  { label: "Kerala Stays & Villas", target: "featured-resorts-section" },
];

export default function HeroSection() {
  const { openEnquiryModal } = useEnquiryModal();
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#061d15]">
      {/* Hero Visual Stage */}
      <div className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=85"
            alt="Handcrafted Stays and Tailored Journeys — Planet Root Travels"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep Forest Minimalist Gradient Overlays */}
          <div className="absolute inset-0 bg-[#061d15]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d15] via-transparent to-[#061d15]/70" />
        </div>

        {/* Minimal Centered Editorial Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-36 pb-16 sm:pb-24">
          {/* Small Quiet Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-[#dfcaa2]">
              Planet Root • Beyond Borders
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
          </div>

          {/* Majestic Minimal Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight text-white leading-[1.08] mb-6">
            Handcrafted Stays &amp; <br />
            <span className="text-[#dfcaa2] italic font-light">Tailored Journeys</span>
          </h1>

          {/* Clean 1-Sentence Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-stone-200/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Curated private pool villas, romantic honeymoon escapes, and custom international holiday plans — arranged with quiet care.
          </p>

          {/* Minimal Action Pair */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollTo("packages-section")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#dfcaa2] text-[#061d15] font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xl cursor-pointer group hover:scale-105"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/18 text-white border border-white/20 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>For Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#061d15]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center divide-x divide-white/10 text-xs sm:text-[13px] text-stone-300">
            {QUICK_LINKS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.target)}
                className="px-4 sm:px-8 py-3.5 sm:py-4 hover:text-[#dfcaa2] transition-colors cursor-pointer tracking-wider uppercase font-medium text-[11px]"
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
