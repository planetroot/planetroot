"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Globe, Compass, Heart, Sparkles, MapPin, Clock } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { TOUR_PACKAGES, type PackageCategory } from "@/data/packages";

type FilterTab = "All" | PackageCategory;

const TABS: { label: string; value: FilterTab; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "All Packages", value: "All", icon: Sparkles },
  { label: "International", value: "International", icon: Globe },
  { label: "Domestic", value: "Domestic", icon: Compass },
  { label: "Honeymoon", value: "Honeymoon", icon: Heart },
  { label: "Kerala Tours", value: "Kerala", icon: MapPin },
  { label: "Custom Plans", value: "Custom", icon: Sparkles },
];

const CATEGORY_COLORS: Record<string, string> = {
  International: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  Domestic: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Honeymoon: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  Kerala: "bg-teal-500/15 text-teal-300 border-teal-500/25",
  Custom: "bg-amber-500/15 text-amber-300 border-amber-500/25",
};

export default function TourPackagesSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const { openEnquiryModal } = useEnquiryModal();

  const featured = TOUR_PACKAGES.filter((p) => p.featured);
  const filtered = activeTab === "All"
    ? featured
    : featured.filter((p) => p.category === activeTab);

  const displayPackages = filtered.slice(0, 6);

  return (
    <section id="packages-section" className="py-20 sm:py-28 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#c9a84c] mb-2">
            CURATED JOURNEYS
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#1a1e2e] tracking-tight">
            Our Travel <span className="text-[#c9a84c]">Packages</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6b7190] font-light max-w-xl mx-auto">
            International escapes, domestic adventures, honeymoon specials, and custom travel plans — crafted with care.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0a0f1e] text-[#e2c97e] shadow-lg"
                    : "bg-white border border-stone-200 text-[#6b7190] hover:border-[#0a0f1e] hover:text-[#0a0f1e]"
                }`}
              >
                <Icon className="w-3 h-3" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        {displayPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {displayPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-100"
                onClick={() =>
                  openEnquiryModal({
                    destination: pkg.destination,
                    resortOrProperty: pkg.title,
                    stayType: pkg.category,
                  })
                }
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border backdrop-blur-sm ${CATEGORY_COLORS[pkg.category] || "bg-white/15 text-white border-white/25"}`}>
                      {pkg.category}
                    </span>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 text-white text-[10px] font-medium backdrop-blur-sm">
                      <Clock className="w-2.5 h-2.5" />
                      {pkg.duration.split("/")[0].trim()}
                    </span>
                  </div>
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-serif-luxury font-semibold text-[#1a1e2e] leading-tight group-hover:text-[#0a0f1e] transition-colors">
                      {pkg.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] text-[#9a9fb8] mb-3">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{pkg.destination}</span>
                  </div>

                  <p className="text-xs text-[#6b7190] font-light leading-relaxed line-clamp-2 mb-4">
                    {pkg.overview.substring(0, 100)}...
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                    <div>
                      <p className="text-[10px] text-[#9a9fb8] uppercase tracking-wider font-medium">Starting from</p>
                      <p className="text-sm sm:text-base font-semibold text-[#1a1e2e] font-serif-luxury">
                        {pkg.startingPrice}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a0f1e] text-[#e2c97e] text-xs font-semibold tracking-wide hover:bg-[#1a2540] transition-colors shadow-sm group-hover:bg-[#c9a84c] group-hover:text-[#0a0f1e]"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[#9a9fb8]">
            <p className="text-sm">No packages found. Contact us to design a custom itinerary.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#111829] text-white px-8 py-6 rounded-3xl shadow-xl">
            <div className="text-center sm:text-left">
              <p className="text-xs text-[#9a9fb8] uppercase tracking-widest font-medium mb-0.5">Need something different?</p>
              <p className="text-base sm:text-lg font-serif-luxury text-[#e2c97e]">We build completely custom itineraries</p>
            </div>
            <button
              type="button"
              onClick={() => openEnquiryModal({ destination: "Anywhere in the World" })}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c9a84c] text-[#0a0f1e] font-semibold text-sm tracking-wide hover:bg-[#e2c97e] transition-colors cursor-pointer"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
