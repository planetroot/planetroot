"use client";

import Image from "next/image";
import { MessageCircle, Hotel, MapPin, Users } from "lucide-react";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function GetawayCtaSection() {
  const { openEnquiryModal } = useEnquiryModal();
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="relative w-full py-14 sm:py-18 overflow-hidden bg-[#072016] text-white">
      {/* Background Image: Misty mountain hills with deep green gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
          alt="Misty mountain hills by Planet Root"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d14]/95 via-[#072016]/85 to-[#061d14]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Left: Headline with leaf flourish */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-[1.15]">
              Let&apos;s Plan Your <br />
              <span className="text-[#dfcaa2] inline-flex items-center gap-2">
                Next Getaway
                {/* SVG Leaf Motif matching reference image */}
                <svg
                  className="w-7 h-7 sm:w-9 sm:h-9 text-[#dfcaa2] inline-block shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Center: 3 Metrics with Icons */}
          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
            {/* Stat 1: 100+ Resorts & Villas */}
            <div className="flex flex-col items-center text-center">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#dfcaa2] mb-1.5">
                <Hotel className="w-6 h-6 stroke-1.5" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#dfcaa2] tracking-tight">100+</p>
              <p className="text-[10px] sm:text-[11px] text-stone-200 uppercase tracking-widest font-medium mt-0.5">Resorts & Villas</p>
            </div>

            {/* Stat 2: 10+ Destinations */}
            <div className="flex flex-col items-center text-center">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#dfcaa2] mb-1.5">
                <MapPin className="w-6 h-6 stroke-1.5" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#dfcaa2] tracking-tight">10+</p>
              <p className="text-[10px] sm:text-[11px] text-stone-200 uppercase tracking-widest font-medium mt-0.5">Destinations</p>
            </div>

            {/* Stat 3: 5000+ Happy Travelers */}
            <div className="flex flex-col items-center text-center">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-[#dfcaa2] mb-1.5">
                <Users className="w-6 h-6 stroke-1.5" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#dfcaa2] tracking-tight">5,000+</p>
              <p className="text-[10px] sm:text-[11px] text-stone-200 uppercase tracking-widest font-medium mt-0.5">Curated Stays</p>
            </div>
          </div>

          {/* Right: Contact Us on WhatsApp Pill Button */}
          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#dfcaa2] hover:bg-[#c5a059] text-[#072016] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xl hover:scale-105 duration-200 whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#072016]" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
