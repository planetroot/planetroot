"use client";

import Image from "next/image";
import { ArrowRight, Globe, Heart, Compass } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const TRIP_TYPES = [
  { icon: Globe, label: "International Tours" },
  { icon: Compass, label: "Domestic Packages" },
  { icon: Heart, label: "Honeymoon Specials" },
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
    <section id="home" className="relative w-full overflow-hidden bg-[#0a0f1e]">
      <div className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2400&q=85"
            alt="Premium World Travel by Planet Root — International Tours, Honeymoon Packages, Domestic Holidays"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/92 via-[#0a0f1e]/65 to-[#0a0f1e]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-[#0a0f1e]/30" />
          {/* Gold vignette accent */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 text-left text-white space-y-5">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#e2c97e]">
                  Premium World Travel Agency
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight text-white leading-[1.06]">
                Your World,{" "}
                <span className="text-[#c9a84c]">Your Story</span>
                <br />
                Perfectly Crafted
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-stone-200/85 font-light leading-relaxed max-w-lg">
                Handcrafted international tours, honeymoon escapes, domestic adventures, and custom travel plans — built around you, delivered with care.
              </p>

              {/* Trip Type Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {TRIP_TYPES.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/80 text-xs font-medium tracking-wide backdrop-blur-sm"
                    >
                      <Icon className="w-3 h-3 text-[#c9a84c]" />
                      <span>{type.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={scrollToPackages}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c97e] font-semibold text-sm tracking-wide transition-all duration-300 shadow-xl cursor-pointer group"
                >
                  <span>Explore Packages</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  type="button"
                  onClick={() => openEnquiryModal({ destination: "Anywhere in the World" })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/25 text-white hover:bg-white/18 font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer backdrop-blur-sm"
                >
                  <span>Plan Custom Trip</span>
                </button>
              </div>

              {/* WhatsApp quick link */}
              <div className="pt-1">
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-stone-300/80 hover:text-[#c9a84c] transition-colors font-light"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Chat with our travel specialists instantly</span>
                </a>
              </div>
            </div>

            {/* Right Column: Stats */}
            <div className="hidden lg:flex lg:col-span-5 justify-end items-center">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "10,000+", label: "Happy Travelers" },
                  { number: "50+", label: "Destinations" },
                  { number: "100+", label: "Premium Resorts" },
                  { number: "24/7", label: "Expert Support" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl p-5 text-center"
                  >
                    <p className="text-2xl font-serif-luxury font-semibold text-[#c9a84c] tracking-tight">
                      {stat.number}
                    </p>
                    <p className="text-[11px] text-stone-200/70 uppercase tracking-widest font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Services Strip */}
      <div className="relative z-10 bg-[#111829] border-t border-[#c9a84c]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#c9a84c]/10">
            {[
              { label: "International Tours", sub: "Europe, Asia, UAE & More" },
              { label: "Domestic Packages", sub: "Kerala, Kashmir, Rajasthan" },
              { label: "Honeymoon Specials", sub: "Maldives, Bali, Dubai" },
              { label: "Custom Travel Plans", sub: "Tailored Just for You" },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={scrollToPackages}
                className="py-4 sm:py-5 px-4 sm:px-6 text-left hover:bg-white/4 transition-colors cursor-pointer group"
              >
                <p className="text-xs sm:text-sm font-semibold text-[#e2c97e] group-hover:text-[#c9a84c] transition-colors">
                  {item.label}
                </p>
                <p className="text-[10px] sm:text-xs text-stone-400/80 font-light mt-0.5">{item.sub}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
