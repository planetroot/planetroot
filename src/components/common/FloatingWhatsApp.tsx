"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "919605990306";
  const defaultMessage = encodeURIComponent(
    "Hello Planet Root! I am interested in your premium resort bookings and holiday packages. Please help me plan my trip."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Optional subtle dismissible greeting badge */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-[#fcfbf7] text-[#181d1a] border border-[#0e3826]/15 shadow-xl px-4 py-2.5 rounded-full text-xs font-medium animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with Planet Root Concierge</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#525a55] hover:text-[#181d1a] ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contact Planet Root on WhatsApp at 9605990306"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#0e3826] text-[#dfcaa2] shadow-lg border border-[#c5a86a]/40 hover:bg-[#164e36] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a86a] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#c5a86a]" />
        </span>
        <MessageCircle className="w-6 h-6 text-[#fcfbf7] transition-transform duration-300 group-hover:scale-110" />
      </a>
    </aside>
  );
}
