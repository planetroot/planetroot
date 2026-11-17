"use client";

import Image from "next/image";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function AboutSection() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="about-section" className="py-20 sm:py-28 bg-[#f7f2e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Composition (Left 6 Columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 w-full max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl border border-[#c9a84c]/20">
              <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
                alt="World luxury travel by Planet Root Travels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Subtle floating quote card */}
            <div className="hidden sm:block absolute -bottom-6 -right-2 bg-white/95 backdrop-blur-md border border-[#c9a84c]/25 p-6 max-w-xs shadow-xl rounded-2xl">
              <p className="font-serif-luxury italic text-xs text-[#0a0f1e] leading-relaxed">
                “Every journey should feel effortless, every stay feel special, and every experience become a lasting memory.”
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-semibold mt-2.5">
                — Planet Root Travels
              </p>
            </div>
          </div>

          {/* Editorial Text Composition (Right 6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-1.5">
              ABOUT US
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#1a1e2e] tracking-tight leading-tight mb-6">
              Rooted in Hospitality. <br />
              <span className="text-[#c9a84c]">Curating World Class</span> Holidays.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6b7190] font-light leading-relaxed font-sans-luxury">
              <p>
                At <strong>Planet Root Travels</strong>, we believe travel is at its finest when crafted with intention. We curate extraordinary experiences across the globe — from idyllic overwater villas in the Maldives and romantic jungle retreats in Bali, to private backwater houseboats in Kerala, Himalayan peaks, and royal palaces in Rajasthan.
              </p>
              <p>
                Whether you dream of a seamless international holiday, an unforgettable honeymoon, a multi-generational family vacation, or a bespoke adventure off the beaten track, our specialists tailor every single day around your preferences, pace, and budget.
              </p>
              <p>
                Without rigid tour packages or impersonal booking engines, our travel consultants provide direct, one-on-one assistance on WhatsApp — guiding your choices, verifying luxury standards, and remaining by your side before and during your journey.
              </p>
            </div>

            {/* Signature & CTAs */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0a0f1e]">
                  PLANET ROOT — BEYOND BORDERS
                </p>
                <p className="text-xs text-[#6b7190] mt-0.5">International Tours, Honeymoons &amp; Luxury Resorts</p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => openEnquiryModal({ destination: "Anywhere in the World" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0f1e] text-[#e2c97e] hover:bg-[#1a2540] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
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