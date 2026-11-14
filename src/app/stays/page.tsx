"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { RESORTS, Resort } from "@/data/resorts";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

const CATEGORIES = [
  "All Stays",
  "Private Pool Villa",
  "Heritage Backwater Villa",
  "Tea Estate Bungalow",
  "Rainforest Treehouse",
  "Mountain Chalet",
  "Beachfront Stay",
];

export default function StaysPage() {
  const [resorts, setResorts] = useState<Resort[]>(RESORTS);
  const [selectedCategory, setSelectedCategory] = useState("All Stays");
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    fetch("/api/resorts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setResorts(data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredResorts =
    selectedCategory === "All Stays"
      ? resorts
      : resorts.filter((r) => r.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-2.5">
            RESORTS & VILLAS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Luxury Resorts & <span className="text-[#c5a059]">Pool Villas</span>
          </h1>
          <p className="mt-3 text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore verified private pool villas, tea estate bungalows, and backwater stays across Kerala. Enquire directly on WhatsApp for real-time rates and availability.
          </p>
        </div>
      </section>

      {/* Category Filter Chips (NO search panel) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium rounded-xs transition-all duration-300 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0e3826] text-[#dfcaa2] font-semibold shadow-xs"
                  : "bg-white text-[#525a55] hover:text-[#0e3826] hover:bg-[#f6f1e8] border border-[#0e3826]/12"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Resorts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredResorts.map((resort) => (
            <article
              key={resort.id}
              className="group bg-white border border-[#0e3826]/12 flex flex-col justify-between overflow-hidden rounded-xs transition-all duration-500 hover:shadow-xl hover:border-[#0e3826]/30"
            >
              <div>
                {/* Resort Photograph */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
                  <Image
                    src={resort.heroImage}
                    alt={resort.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0e3826] shadow-xs rounded-xs">
                      {resort.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a86a] font-medium tracking-wider uppercase mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{resort.destination}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug mb-3">
                    <Link href={`/stays/${resort.slug}`}>{resort.name}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-5 line-clamp-3">
                    {resort.description}
                  </p>

                  {/* Verified Amenities */}
                  {resort.verifiedAmenities && resort.verifiedAmenities.length > 0 && (
                    <div className="pt-4 border-t border-[#0e3826]/10 mb-4">
                      <p className="text-[10px] uppercase tracking-wider text-[#7b8580] font-semibold mb-2">
                        Verified Amenities
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {resort.verifiedAmenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] text-[#525a55] bg-[#f6f1e8] px-2 py-0.5 rounded-xs flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-[#0e3826]" />
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Starting Price (Only if confirmed) */}
                  {resort.pricePerNight && (
                    <div className="pt-3 border-t border-[#0e3826]/10 flex items-baseline justify-between">
                      <div>
                        <p className="text-[10px] text-[#7b8580] uppercase tracking-wider">Starting Rate</p>
                        <p className="text-sm font-semibold text-[#0e3826] mt-0.5">
                          {resort.pricePerNight}
                        </p>
                      </div>
                      <span className="text-[11px] text-[#525a55]">Confirmed Pricing</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons: View Details & Enquire on WhatsApp */}
              <div className="p-6 pt-3 pb-6 flex items-center justify-between gap-2 border-t border-[#0e3826]/10 bg-[#fcfbf7]">
                <Link
                  href={`/stays/${resort.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0e3826] hover:text-[#c5a86a] flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    openEnquiryModal({
                      destination: resort.destination,
                      resortOrProperty: resort.name,
                      stayType: resort.category,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs bg-[#0e3826] text-[#dfcaa2] hover:bg-[#164e36] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#dfcaa2]" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Direct Assistance Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0e3826] text-[#fcfbf7] p-8 sm:p-10 rounded-sm shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#c5a86a]/30">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#dfcaa2] block mb-2">
              Looking for a Specific Resort or Pool Villa?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury">
              Let Us Verify Availability for Your Enquiry
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#fcfbf7]/80 font-light leading-relaxed">
              Tell us your dates, group size, and budget. We provide customized recommendations and confirmed rates within hours.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal({ destination: "Anywhere in Kerala" })}
            className="px-6 py-3.5 bg-[#c5a86a] text-[#092015] hover:bg-[#dfcaa2] font-semibold text-xs uppercase tracking-wider rounded-xs transition-all shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#092015]" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
}
