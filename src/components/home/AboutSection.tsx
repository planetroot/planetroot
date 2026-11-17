"use client";

import Image from "next/image";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

export default function AboutSection() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#fcfbf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Visual (Left 6 Columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury resort sanctuary curated by Planet Root Travels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Editorial Text Composition (Right 6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-1.5">
              ABOUT PLANET ROOT
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#18221d] tracking-tight leading-tight mb-6">
              Bespoke Stays &amp; <br />
              <span className="text-[#c5a059]">Thoughtfully Planned</span> Journeys.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#56655e] font-light leading-relaxed font-sans-luxury">
              <p>
                Planet Root Travels is an independent travel consultancy dedicated to private pool villas, boutique resorts, and bespoke holiday planning across Kerala, India, and premier international destinations.
              </p>
              <p>
                Rather than generic packaged tours or automated search engines, every itinerary is arranged by human specialists who personally evaluate properties for privacy, service standards, and scenic value.
              </p>
              <p>
                From initial date coordination to live on-trip logistics, our team remains directly reachable on WhatsApp to ensure your stay runs smoothly from start to finish.
              </p>
            </div>

            {/* Signature & CTAs */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a291e]">
                  PLANET ROOT — BEYOND BORDERS
                </p>
                <p className="text-xs text-[#56655e] mt-0.5">International Tours, Honeymoons &amp; Luxury Stays</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => openEnquiryModal({ destination: "Anywhere in the World" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a291e] text-[#dfcaa2] hover:bg-[#144a39] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#dfcaa2]" />
                  <span>Enquire With Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
