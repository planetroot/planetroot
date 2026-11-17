"use client";

import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

export default function FloatingWhatsApp() {
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Planet Root Travels on WhatsApp at ${SITE_CONFIG.whatsappDisplay}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.38)] hover:shadow-[0_6px_26px_rgba(37,211,102,0.55)] hover:scale-108 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
      >
        {/* Subtle Luxury Ambient Pulse */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* Minimal Hover Tooltip (Desktop Only, Unobtrusive) */}
        <span
          className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#061d15]/95 backdrop-blur-md text-[#fcfbf7] px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-medium shadow-xl border border-[#c5a059]/30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:inline-flex items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>For Enquiry</span>
        </span>

        {/* Authentic WhatsApp Icon */}
        <WhatsAppIcon className="relative z-10 w-6 h-6 sm:w-6.5 sm:h-6.5 text-white transition-transform duration-300 group-hover:scale-110" />
      </a>
    </aside>
  );
}
