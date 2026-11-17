"use client";

import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0b0d0e] text-[#fcfbf7] border-t border-white/10 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* 1. Brand Column (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-block transition-opacity hover:opacity-85 cursor-pointer"
            >
              <Image
                src="/images/planet-root-logo-gold-trimmed.png"
                alt="PLANET ROOT — Beyond Borders"
                width={240}
                height={55}
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-sm"
              />
            </a>

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-stone-300 font-medium">
              BEYOND BORDERS • CURATED WORLD TRAVEL
            </p>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Handpicked boutique resorts, international holidays, honeymoon escapes, and custom itineraries crafted around your preferences with direct WhatsApp assistance.
            </p>

            {/* Direct WhatsApp Action: Clean Transparent Button */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-white text-white hover:bg-white hover:text-black text-xs font-medium uppercase tracking-wider transition-all duration-300"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>For Enquiry</span>
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation (Span 2, offset) */}
          <div className="lg:col-span-2 lg:col-start-7 space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-stone-300">
              TRAVEL TYPES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-400 font-light">
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  International Tours
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Honeymoon Escapes
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Domestic Packages
                </a>
              </li>
              <li>
                <a href="#featured-resorts-section" className="hover:text-white transition-colors">
                  Resorts &amp; Villas
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Custom Travel Plans
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Top Destinations (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-stone-300">
              DESTINATIONS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-400 font-light">
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Maldives &amp; Bali
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Dubai &amp; Singapore
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Kashmir &amp; Manali
                </a>
              </li>
              <li>
                <a href="#destinations-section" className="hover:text-white transition-colors">
                  Wayanad &amp; Munnar
                </a>
              </li>
              <li>
                <a href="#destinations-section" className="hover:text-white transition-colors">
                  Alleppey Backwaters
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Enquiry Directory (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-stone-300">
              FOR ENQUIRY
            </h4>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-stone-400 font-light">
              <p>
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 text-white font-medium"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span>{SITE_CONFIG.whatsappDisplay}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors block break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-stone-300" />
                  <span>@planetroottravels</span>
                </a>
              </p>
              <p className="text-stone-500 text-xs">
                {SITE_CONFIG.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p className="font-light">
            © {currentYear} {SITE_CONFIG.legalName}. All rights reserved. Beyond Borders.
          </p>

          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center font-light">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Cancellation
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/admin"
              className="text-stone-400 hover:text-white transition-colors font-medium"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
