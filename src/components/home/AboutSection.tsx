"use client";

import Image from "next/image";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function AboutSection() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#f8f6f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Composition (Left 6 Columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 w-full max-w-lg mx-auto overflow-hidden rounded-3xl shadow-xl border border-stone-200/80">
              <Image
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury Kerala backwater resort by Planet Root Travels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Subtle floating quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-2 bg-white/95 backdrop-blur-md border border-stone-200/90 p-6 max-w-xs shadow-xl rounded-2xl">
              <p className="font-serif-luxury italic text-xs text-[#072016] leading-relaxed">
                “Every journey should feel effortless, every stay feel special, and every experience become a lasting memory.”
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold mt-2.5">
                — Planet Root Travels
              </p>
            </div>
          </div>

          {/* Editorial Text Composition (Right 6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-1.5">
              ABOUT US
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#181d1a] tracking-tight leading-tight mb-6">
              Rooted in Hospitality. Curating Memorable Holidays.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed font-sans-luxury">
              <p>
                At <strong>Planet Root Travels</strong>, we believe travel is at its finest when every stay is handpicked with intention. Our focus is simple: connecting travelers with exceptional resorts, private pool villas, and carefully planned holidays across God’s Own Country and inspiring destinations beyond.
              </p>
              <p>
                From misty colonial tea bungalows in Munnar and wild canopy treehouses in Wayanad, to private houseboats drifting across Alleppey&apos;s backwaters and coastal stays, we personally verify every property to ensure seclusion, cleanliness, and authentic warmth.
              </p>
              <p>
                Without rigid tour packages or automated booking engines, our travel specialists provide genuine, one-on-one assistance directly on WhatsApp — answering your questions, matching your family or romantic escape to the perfect resort, and crafting itineraries that honor your budget.
              </p>
            </div>

            {/* Signature & CTAs */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#072016]">
                  PLANET ROOT — BEYOND BORDERS
                </p>
                <p className="text-xs text-stone-500 mt-0.5">Kerala Luxury Resorts & Stays for Enquiry</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => openEnquiryModal({ destination: "Anywhere in Kerala" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#072016] text-[#dfcaa2] hover:bg-[#0e3826] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
