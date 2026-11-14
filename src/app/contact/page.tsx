"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
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

function ContactContent() {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get("package") || searchParams.get("customize") || "";
  const destParam = searchParams.get("destination") || "";
  const stayParam = searchParams.get("stay") || "";

  const defaultDestination = destParam || "";
  const defaultResortOrPkg = pkgParam || stayParam || "";

  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-2.5">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Contact <span className="text-[#c5a059]">Planet Root</span>
          </h1>
          <p className="mt-3 text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Connect directly with our travel team on WhatsApp, phone, or via the enquiry form below to plan your ideal holiday.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Official Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-3">
                Direct Communication Channels
              </h2>
              <p className="text-sm text-[#525a55] font-light leading-relaxed font-sans-luxury">
                We believe exceptional hospitality begins with personal listening. Whether you need assistance choosing between private pool villas or require custom holiday package planning, our team is directly accessible.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* WhatsApp Direct */}
              <div className="p-6 bg-white border border-[#0e3826]/12 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">For Enquiry</p>
                    <a
                      href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors"
                    >
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">Instant chat, live resort quotes, and photo sharing.</p>
              </div>

              {/* Telephone */}
              <div className="p-6 bg-white border border-[#0e3826]/12 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#dfcaa2]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Direct Phone</p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">Available for direct voice calls Monday to Saturday.</p>
              </div>

              {/* Email */}
              <div className="p-6 bg-white border border-[#0e3826]/12 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#dfcaa2]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Electronic Mail</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">Written itinerary briefs and corporate group queries.</p>
              </div>

              {/* Instagram */}
              <div className="p-6 bg-white border border-[#0e3826]/12 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4 text-[#dfcaa2]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Social Media</p>
                    <a
                      href={SITE_CONFIG.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors"
                    >
                      @planetroottravels
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">Follow our journeys and resort spotlights.</p>
              </div>

              {/* Working Hours */}
              <div className="p-6 bg-white border border-[#0e3826]/12 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#dfcaa2]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Enquiry Hours</p>
                    <p className="text-base font-semibold text-[#181d1a]">{SITE_CONFIG.workingHours}</p>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">24/7 dedicated support for active traveling guests.</p>
              </div>
            </div>

            {/* Integrity assurance */}
            <div className="pt-4 border-t border-[#0e3826]/10">
              <div className="flex items-start gap-3 text-xs text-[#525a55] leading-relaxed">
                <ShieldCheck className="w-5 h-5 text-[#0e3826] shrink-0 mt-0.5" />
                <span>
                  <strong>Planet Root Integrity:</strong> All bookings are arranged with transparent communication. We personally confirm property availability and room views before finalizing your journey.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Full WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm
              initialDestination={defaultDestination}
              initialResortOrPackage={defaultResortOrPkg}
              formTitle="Plan Your Perfect Getaway"
              formSubtitle="Tell us about your ideal holiday, and our team will help you explore suitable resorts and travel experiences within your budget."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center">Loading contact enquiries...</div>}>
      <ContactContent />
    </Suspense>
  );
}
