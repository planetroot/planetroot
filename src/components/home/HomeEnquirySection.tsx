"use client";

import {
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function HomeEnquirySection() {
  return (
    <section id="enquiry-section" className="py-20 sm:py-28 bg-[#fcfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Concierge & Verified Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-1.5">
                CONTACT & ENQUIRIES
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#181d1a] tracking-tight leading-tight">
                Plan Your Getaway With Our Travel Specialists
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 font-light leading-relaxed font-sans-luxury">
                Whether you desire a private pool villa in Wayanad, a misty tea chalet in Munnar, or an overwater houseboat in Alleppey, we craft every detail around your preferences and budget.
              </p>
            </div>

            {/* Direct Official Contact Directory */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
              {/* WhatsApp Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#072016] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#dfcaa2]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Direct WhatsApp Concierge
                  </p>
                  <a
                    href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-stone-900 hover:text-[#0e3826] transition-colors block mt-0.5"
                  >
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Live chat assistance, resort photo previews & custom quotes
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-stone-100" />

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#072016] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#dfcaa2]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Direct Phone Call
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-base font-semibold text-stone-900 hover:text-[#0e3826] transition-colors block mt-0.5"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Speak directly with our Kerala travel directors
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-stone-100" />

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#072016] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#dfcaa2]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Email Inquiries
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-base font-semibold text-stone-900 hover:text-[#0e3826] transition-colors break-all block mt-0.5"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Itinerary planning and group reservations
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-stone-100" />

              {/* Instagram Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#072016] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-4 h-4 text-[#dfcaa2]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Instagram & Social
                  </p>
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-stone-900 hover:text-[#0e3826] transition-colors block mt-0.5"
                  >
                    @planetroottravels
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Daily Kerala resort stories and stay previews
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours & Guarantee */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-stone-500">
                <Clock className="w-4 h-4 text-[#072016] shrink-0" />
                <span>
                  <strong>Operating Hours:</strong> {SITE_CONFIG.workingHours} (24/7 on-trip assistance)
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-500 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-[#072016] shrink-0 mt-0.5" />
                <span>
                  <strong>No Hidden Surprises:</strong> Every reservation is personally coordinated on WhatsApp. We verify live resort availability, room views, and seasonal rates before you make any payment.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The Main WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm
              formTitle="Plan Your Perfect Getaway"
              formSubtitle="Tell us about your ideal holiday, and our team will help you explore suitable resorts and travel experiences within your budget."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
