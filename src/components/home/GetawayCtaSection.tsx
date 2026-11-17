"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function GetawayCtaSection() {
  const { openEnquiryModal } = useEnquiryModal();
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section className="relative w-full py-18 sm:py-24 overflow-hidden bg-[#061d15] text-white">
      {/* Background Image: Luxury cinematic escape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury travel escapes by Planet Root"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d15]/95 via-[#0a291e]/85 to-[#061d15]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 text-center lg:text-left">
          {/* Left: Refined Headline & Editorial Copy */}
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#c5a059] mb-2.5">
              BEGIN YOUR JOURNEY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-[1.18]">
              Ready to Plan Your <br className="hidden sm:inline" />
              <span className="text-[#dfcaa2]">Next Escape?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300/85 font-light leading-relaxed">
              Share your dates and preferred destination. Our travel specialists confirm availability, negotiate partner rates, and send a personalized plan directly on WhatsApp.
            </p>
          </div>

          {/* Right: Actions (Clean WhatsApp and Custom Enquiry buttons) */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#dfcaa2] text-[#061d15] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-xl hover:scale-105 duration-200 whitespace-nowrap cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#061d15]" />
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
