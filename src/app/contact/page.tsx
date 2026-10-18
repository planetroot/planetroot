"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, Clock, MapPin, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";

function ContactContent() {
  const searchParams = useSearchParams();
  const pkgParam = searchParams.get("package") || searchParams.get("customize") || "";
  const destParam = searchParams.get("destination") || "";
  const stayParam = searchParams.get("stay") || "";

  const defaultDestination = destParam || (pkgParam.includes("Manali") ? "Manali & Himalayan Peaks" : pkgParam.includes("Lakshadweep") ? "Lakshadweep Island Atolls" : pkgParam.includes("Stargazing") ? "Stargazing Dark Sky (Spiti/Ladakh)" : "");
  const defaultResortOrPkg = pkgParam || stayParam || "";

  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            Private Travel Concierge
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Plan Your Extraordinary Escape
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
            Connect directly with Planet Root travel directors to begin designing your bespoke journey.
          </p>
          <div className="divider-luxury w-28 mx-auto mt-6" />
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
              <p className="text-sm text-[#525a55] font-light leading-relaxed">
                We believe exceptional hospitality begins with attentive human listening. Whether you need assistance choosing between overwater villas or require high-altitude acclimatization planning, our team is directly accessible.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Telephone */}
              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Direct Line</p>
                    <a
                      href="tel:9605990306"
                      className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors"
                    >
                      9605990306
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">Available for calls and direct WhatsApp messaging.</p>
              </div>

              {/* Email */}
              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Electronic Mail</p>
                    <a
                      href="mailto:planetroot98@gmail.com"
                      className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors break-all"
                    >
                      planetroot98@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">Written itinerary briefs and corporate queries.</p>
              </div>

              {/* Working Hours */}
              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-widest text-[#7b8580]">Concierge Hours</p>
                    <p className="text-base font-semibold text-[#181d1a]">Mon – Sat: 9:00 AM – 8:00 PM IST</p>
                  </div>
                </div>
                <p className="text-xs text-[#525a55] mt-1">24/7 dedicated crisis & arrival support for active traveling guests.</p>
              </div>
            </div>

            {/* Instant WhatsApp Quick Link */}
            <div className="p-6 bg-[#092015] text-[#fcfbf7] rounded-xs border border-[#c5a86a]/30">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-[#dfcaa2]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Instant WhatsApp Consultation
                </h3>
              </div>
              <p className="text-xs text-[#fcfbf7]/80 leading-relaxed mb-4">
                Prefer immediate messaging? Chat directly with our private travel directors to share dates and questions.
              </p>
              <a
                href={`https://wa.me/919605990306?text=${encodeURIComponent(
                  "Hello Planet Root! I am interested in your premium resort bookings and holiday packages. Please help me plan my trip."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-gold text-xs w-full justify-center"
              >
                <span>Open WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Integrity assurance */}
            <div className="p-4 bg-[#f6f1e8] border border-[#0e3826]/10 rounded-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0e3826] shrink-0 mt-0.5" />
              <p className="text-xs text-[#525a55] leading-relaxed">
                <strong>Transparent Reservation Guarantee:</strong> All bookings are conducted under an enquiry-based reservation workflow with transparent pricing, official receipts, and documented terms.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm
              initialDestination={defaultDestination}
              initialResortOrPackage={defaultResortOrPkg}
              formTitle="Request a Tailored Proposal"
              formSubtitle="Please provide your approximate dates, guest count, and preferences. A dedicated travel director will curate your escape."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-[#525a55]">Loading Contact Portal...</div>}>
      <ContactContent />
    </Suspense>
  );
}
