"use client";

import Image from "next/image";
import { Hotel, Globe, Users, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function GetawayCtaSection() {
  const { openEnquiryModal } = useEnquiryModal();
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="relative w-full py-16 sm:py-20 overflow-hidden bg-[#0a0f1e] text-white">
      {/* Background Image: Luxury cinematic escape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury travel escapes by Planet Root"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/98 via-[#111829]/90 to-[#0a0f1e]/98" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left: Headline with elegant accent */}
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#c9a84c] mb-2">
              START YOUR JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-[1.15]">
              Let&apos;s Plan Your <br />
              <span className="text-[#e2c97e] inline-flex items-center gap-2">
                Next Dream Getaway
              </span>
            </h2>
          </div>

          {/* Center: 3 Metrics with Icons */}
          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
            {/* Stat 1: 100+ Resorts & Villas */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/6 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-2">
                <Hotel className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#c9a84c] tracking-tight">100+</p>
              <p className="text-[10px] sm:text-[11px] text-stone-300 uppercase tracking-widest font-medium mt-0.5">Resorts &amp; Villas</p>
            </div>

            {/* Stat 2: 50+ Destinations */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/6 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-2">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#c9a84c] tracking-tight">50+</p>
              <p className="text-[10px] sm:text-[11px] text-stone-300 uppercase tracking-widest font-medium mt-0.5">Global Destinations</p>
            </div>

            {/* Stat 3: 10,000+ Happy Travelers */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/6 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#c9a84c] tracking-tight">10,000+</p>
              <p className="text-[10px] sm:text-[11px] text-stone-300 uppercase tracking-widest font-medium mt-0.5">Happy Travelers</p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#c9a84c] hover:bg-[#e2c97e] text-[#0a0f1e] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xl hover:scale-105 duration-200 whitespace-nowrap cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#0a0f1e]" />
              <span>Contact on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => openEnquiryModal({ destination: "Anywhere in the World" })}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/18 text-white font-medium text-xs sm:text-sm tracking-wide transition-all border border-white/20 whitespace-nowrap cursor-pointer backdrop-blur-sm"
            >
              <span>Custom Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}