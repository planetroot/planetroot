"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const { openEnquiryModal } = useEnquiryModal();
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Dismissible Greeting Pill */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md text-stone-800 border border-stone-200/80 shadow-xl px-4 py-2.5 rounded-full text-xs animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <button
            onClick={() => openEnquiryModal({ destination: "Anywhere in Kerala" })}
            className="text-left font-medium hover:text-[#072016] transition-colors cursor-pointer"
          >
            <span>Plan Getaway on WhatsApp</span>
          </button>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 ml-1 p-0.5 rounded-full hover:bg-black/5 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Planet Root Travels on WhatsApp at ${SITE_CONFIG.whatsappDisplay}`}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
      </a>
    </aside>
  );
}
