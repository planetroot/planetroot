"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function DestinationsPage() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-2.5">
            KERALA DESTINATIONS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Popular <span className="text-[#c5a059]">Destinations</span>
          </h1>
          <p className="mt-3 text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore beautiful Kerala destinations — from mist-veiled tea highlands in Munnar and rainforests in Wayanad to tranquil backwaters in Alleppey and beaches in Kovalam.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {DESTINATIONS.map((dest) => (
            <article
              key={dest.id}
              className="group bg-white border border-[#0e3826]/12 flex flex-col justify-between overflow-hidden rounded-xs transition-all duration-500 hover:shadow-xl hover:border-[#0e3826]/30"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-white/95 text-[#0e3826] shadow-xs rounded-xs">
                      {dest.recommendedDuration}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a86a] font-medium tracking-wider uppercase mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Kerala, India</span>
                  </div>

                  <h2 className="text-2xl font-serif-luxury text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug mb-2">
                    <Link href={`/destinations/${dest.slug}`}>{dest.name}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-4 line-clamp-3">
                    {dest.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#0e3826]/10 mb-4 space-y-1.5">
                    {dest.highlights.slice(0, 2).map((item, idx) => (
                      <p key={idx} className="text-xs text-[#181d1a]/85 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a] mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#0e3826]/10 pt-4 bg-[#fcfbf7]">
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Stays</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => openEnquiryModal({ destination: dest.name })}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0e3826] text-[#dfcaa2] text-xs font-medium uppercase tracking-wider rounded-xs hover:bg-[#164e36] transition-colors shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#dfcaa2]" />
                  <span>Enquire</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
