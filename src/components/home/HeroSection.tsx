"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const TRIP_CATEGORIES = [
  "International Tours",
  "Domestic Packages",
  "Honeymoon Escapes",
  "Kerala Stays",
];

export default function HeroSection() {
  const { openEnquiryModal } = useEnquiryModal();

  const scrollToPackages = () => {
    const el = document.getElementById("packages-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToResorts = () => {
    const el = document.getElementById("featured-resorts-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#061d15]">
      <div className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[800px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=85"
            alt="Handcrafted Stays and Tailored Journeys — Planet Root Travels"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep forest cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d15]/95 via-[#061d15]/75 to-[#061d15]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d15] via-transparent to-[#061d15]/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#061d15] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-left text-white space-y-6">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a291e]/80 border border-[#c5a059]/40 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#dfcaa2]">
                  Curated Travel &amp; Bespoke Stays
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight text-white leading-[1.08]">
                Handcrafted Stays &amp; <br />
                <span className="text-[#dfcaa2]">Tailored Journeys</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-stone-200/90 font-light leading-relaxed max-w-xl">
                Boutique resorts, private pool villas, honeymoon escapes, and custom travel itineraries across Kerala, India, and premier global destinations.
              </p>

              {/* Clean trip category pills without icon clutter */}
              <div className="flex flex-wrap gap-2 pt-1">
                {TRIP_CATEGORIES.map((category) => (
                  <span
                    key={category}
                    className="inline-block px-3.5 py-1 rounded-full bg-[#0a291e]/60 border border-white/10 text-stone-200 text-xs font-medium tracking-wide backdrop-blur-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={scrollToPackages}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c5a059] text-[#061d15] hover:bg-[#dfcaa2] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl cursor-pointer group"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={scrollToResorts}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/18 font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <span>Featured Resorts</span>
                </button>
              </div>

              {/* WhatsApp direct line */}
              <div className="pt-1">
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-stone-300/80 hover:text-[#dfcaa2] transition-colors font-light"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Direct WhatsApp planning with our travel specialists</span>
                </a>
              </div>
            </div>

            {/* Right Column: Editorial Philosophy Card (No fake numbers/stats) */}
            <div className="hidden lg:flex lg:col-span-5 justify-end items-center">
              <div className="w-full max-w-sm bg-[#0a291e]/75 backdrop-blur-xl border border-white/10 rounded-3xl p-7 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />

                <p className="text-[10px] uppercase tracking-[0.24em] text-[#dfcaa2] font-semibold mb-3">
                  The Planet Root Standard
                </p>

                <p className="text-xl font-serif-luxury font-normal text-white leading-snug mb-5">
                  Every journey is personal, verified, and crafted with quiet precision.
                </p>

                <div className="space-y-4 border-t border-white/10 pt-5 text-xs text-stone-300 font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                    <p><strong className="text-white font-medium">Physically Inspected:</strong> Stays are vetted for authentic hospitality and verified room views.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                    <p><strong className="text-white font-medium">Direct Partner Rates:</strong> Transparent, negotiated pricing with zero hidden surcharges.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                    <p><strong className="text-white font-medium">One-on-One Care:</strong> Dedicated WhatsApp support throughout planning and your stay.</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => openEnquiryModal({ destination: "Bespoke Journey" })}
                    className="w-full py-2.5 rounded-full bg-white/10 hover:bg-[#c5a059] hover:text-[#061d15] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 border border-white/15"
                  >
                    Request Custom Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Category Strip */}
      <div className="relative z-10 bg-[#0a291e] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "International Tours", sub: "Maldives, Bali, Dubai, Thailand" },
              { label: "Domestic Packages", sub: "Kashmir, Manali, Rajasthan" },
              { label: "Honeymoon Escapes", sub: "Private pool villas & candlelight dinners" },
              { label: "Kerala Stays", sub: "Wayanad, Munnar, Backwaters" },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={scrollToPackages}
                className="py-4 sm:py-5 px-4 sm:px-6 text-left hover:bg-white/5 transition-colors cursor-pointer group"
              >
                <p className="text-xs sm:text-sm font-semibold text-[#dfcaa2] group-hover:text-white transition-colors">
                  {item.label}
                </p>
                <p className="text-[10px] sm:text-xs text-stone-300/80 font-light mt-0.5">{item.sub}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
