"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
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
    <footer className="bg-[#051811] text-[#fcfbf7] border-t border-[#c5a86a]/20 pt-18 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(22,78,54,0.22),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/[0.08]">
          {/* 1. Brand Column (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-block transition-opacity hover:opacity-90 cursor-pointer"
            >
              <Image
                src="/images/planet-root-logo-gold-trimmed.png"
                alt="PLANET ROOT — Beyond Borders"
                width={260}
                height={60}
                className="h-10 sm:h-11 w-auto object-contain drop-shadow-sm"
              />
            </a>

            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#dfcaa2] font-medium">
              BEYOND BORDERS • KERALA LUXURY TRAVEL
            </p>

            <p className="text-xs sm:text-sm text-stone-300/80 font-light leading-relaxed max-w-sm">
              Handpicked luxury resorts, private pool villas, and curated domestic &amp; international holiday escapes. Experience God&apos;s Own Country with personalized WhatsApp concierge assistance.
            </p>

            {/* Direct WhatsApp Concierge Action */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#dfcaa2] hover:bg-[#c5a059] text-[#072016] text-xs font-semibold uppercase tracking-wider transition-all shadow-md hover:scale-105 duration-200"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#072016]" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation (Span 2, offset) */}
          <div className="lg:col-span-2 lg:col-start-7 space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#dfcaa2]">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-300/80 font-light">
              <li>
                <a href="#featured-resorts-section" className="hover:text-[#dfcaa2] transition-colors">
                  Featured Resorts
                </a>
              </li>
              <li>
                <a href="#featured-resorts-section" className="hover:text-[#dfcaa2] transition-colors">
                  Private Pool Villas
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-[#dfcaa2] transition-colors">
                  Holiday Packages
                </a>
              </li>
              <li>
                <a href="#resort-gallery-section" className="hover:text-[#dfcaa2] transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-[#dfcaa2] transition-colors">
                  About Planet Root
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Destinations (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#dfcaa2]">
              DESTINATIONS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-300/80 font-light">
              <li>
                <a href="#destinations-section" className="hover:text-[#dfcaa2] transition-colors">
                  Wayanad
                </a>
              </li>
              <li>
                <a href="#destinations-section" className="hover:text-[#dfcaa2] transition-colors">
                  Munnar
                </a>
              </li>
              <li>
                <a href="#destinations-section" className="hover:text-[#dfcaa2] transition-colors">
                  Alleppey
                </a>
              </li>
              <li>
                <a href="#destinations-section" className="hover:text-[#dfcaa2] transition-colors">
                  Thekkady &amp; Vagamon
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-[#dfcaa2] transition-colors">
                  Domestic &amp; Beyond
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Concierge Directory (Span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#dfcaa2]">
              CONCIERGE
            </h4>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-stone-300/80 font-light">
              <p>
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dfcaa2] transition-colors inline-flex items-center gap-2 text-white font-medium group"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366] shrink-0 transition-transform group-hover:scale-110" />
                  <span>{SITE_CONFIG.whatsappDisplay}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#dfcaa2] transition-colors block break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dfcaa2] transition-colors inline-flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#dfcaa2]" />
                  <span>@planetroottravels</span>
                </a>
              </p>
              <p className="text-stone-400 text-xs">
                {SITE_CONFIG.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400/80 gap-4">
          <p className="font-light">
            © {currentYear} {SITE_CONFIG.legalName}. All rights reserved. Beyond Borders.
          </p>

          <div className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center font-light">
            <Link href="/privacy" className="hover:text-[#dfcaa2] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-[#dfcaa2] transition-colors">
              Terms &amp; Cancellation
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/contact" className="hover:text-[#dfcaa2] transition-colors">
              Contact
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/admin"
              className="text-[#dfcaa2]/80 hover:text-[#dfcaa2] transition-colors font-medium"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
