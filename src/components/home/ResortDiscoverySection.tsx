"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Check } from "lucide-react";
import { RESORTS, Resort } from "@/data/resorts";

const FILTER_TABS = [
  { label: "All Curated Stays", value: "all" },
  { label: "Private Pool Villas", value: "Private Pool Villa" },
  { label: "Beachfront & Island", value: "Beachfront Stay" },
  { label: "Mountain Retreats", value: "Mountain Retreat" },
  { label: "Stargazing Escapes", value: "Stargazing Escape" },
  { label: "Romantic Sanctuaries", value: "Romantic Resort" },
  { label: "Boutique Nature", value: "Boutique Nature Stay" },
];

export default function ResortDiscoverySection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredResorts = activeTab === "all"
    ? RESORTS
    : RESORTS.filter((r) => r.category === activeTab);

  return (
    <section id="luxury-resorts-section" className="py-24 sm:py-32 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-3">
            Handpicked Luxury Accommodation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
            Stay Somewhere Extraordinary.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed font-sans-luxury">
            Discover exceptional resorts, private villas, and secluded retreats selected for unforgettable escapes.
          </p>
          <div className="divider-luxury w-32 mx-auto mt-6" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-all duration-300 whitespace-nowrap rounded-xs ${
                activeTab === tab.value
                  ? "bg-[#0e3826] text-[#fcfbf7] font-medium shadow-xs"
                  : "bg-white text-[#525a55] hover:text-[#0e3826] hover:bg-[#f6f1e8] border border-[#0e3826]/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resort Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredResorts.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>

        {/* Bottom Collection Link */}
        <div className="mt-16 text-center">
          <Link
            href="/stays"
            className="btn-luxury-secondary text-xs tracking-widest inline-flex items-center gap-2"
          >
            <span>Explore Complete Luxury Stays Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ResortCard({ resort }: { resort: Resort }) {
  return (
    <article className="group bg-white border border-[#0e3826]/10 flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-[#0e3826]/30">
      {/* Property Image with subtle hover zoom */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
        <Image
          src={resort.heroImage}
          alt={resort.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-white/90 backdrop-blur-xs text-[#0e3826] shadow-xs">
            {resort.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Destination & Location */}
        <div className="flex items-center gap-1.5 text-xs text-[#c5a86a] font-medium tracking-wider uppercase mb-2">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>{resort.destination}</span>
        </div>

        {/* Property Name */}
        <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug mb-3">
          <Link href={`/stays/${resort.slug}`}>
            {resort.name}
          </Link>
        </h3>

        {/* Sophisticated Description */}
        <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-5 line-clamp-3 flex-1">
          {resort.description}
        </p>

        {/* Verified Amenities (Top 3) */}
        <div className="pt-4 border-t border-[#0e3826]/10 mb-5">
          <div className="flex flex-wrap gap-2">
            {resort.verifiedAmenities.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="text-[11px] text-[#525a55] bg-[#f6f1e8] px-2.5 py-1 rounded-xs flex items-center gap-1"
              >
                <Check className="w-3 h-3 text-[#0e3826]" />
                <span>{amenity}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Price & Link */}
        <div className="pt-2 flex items-center justify-between border-t border-[#0e3826]/10">
          <div>
            <p className="text-xs text-[#7b8580] uppercase tracking-wider">Verified Stay</p>
            <p className="text-sm font-semibold text-[#0e3826] mt-0.5">
              {resort.pricePerNight}
            </p>
          </div>

          <Link
            href={`/stays/${resort.slug}`}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0e3826] group-hover:text-[#c5a86a] flex items-center gap-1.5 transition-colors"
          >
            <span>View Stay</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
