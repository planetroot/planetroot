"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { TOUR_PACKAGES, type TourPackage, type PackageCategory } from "@/data/packages";

type FilterTab = "All" | PackageCategory;

const TABS: { label: string; value: FilterTab }[] = [
  { label: "All Packages", value: "All" },
  { label: "International", value: "International" },
  { label: "Domestic", value: "Domestic" },
  { label: "Honeymoon", value: "Honeymoon" },
  { label: "Kerala Tours", value: "Kerala" },
  { label: "Custom Plans", value: "Custom" },
];

export default function TourPackagesSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [allPackages, setAllPackages] = useState<TourPackage[]>(TOUR_PACKAGES);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    fetch("/api/packages")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setAllPackages(data);
        }
      })
      .catch(() => {});
  }, []);

  const featured = allPackages.filter((p) => p.featured);
  const filtered = activeTab === "All"
    ? featured
    : featured.filter((p) => p.category === activeTab);

  const displayPackages = filtered.slice(0, 6);

  return (
    <section id="packages-section" className="py-20 sm:py-28 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#c5a059] mb-2">
            CURATED JOURNEYS
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#18221d] tracking-tight">
            Our Travel <span className="text-[#c5a059]">Packages</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#56655e] font-light max-w-xl mx-auto">
            International escapes, domestic circuits, honeymoon specials, and custom travel itineraries.
          </p>
        </div>

        {/* Category Tabs (Clean text pills, no icon clutter) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#0a291e] text-[#dfcaa2] shadow-md"
                    : "bg-white border border-stone-200 text-[#56655e] hover:border-[#0a291e] hover:text-[#0a291e]"
                }`}
              >
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
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-stone-100 flex flex-col"
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
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#061d15]/85 text-[#dfcaa2] border border-[#c5a059]/30 backdrop-blur-sm">
                      {pkg.category}
                    </span>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 text-white text-[10px] font-medium backdrop-blur-sm">
                      <Clock className="w-2.5 h-2.5" />
                      {pkg.duration.split("/")[0].trim()}
                    </span>
                  </div>
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-serif-luxury font-semibold text-[#18221d] leading-tight group-hover:text-[#0a291e] transition-colors mb-2">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#56655e] mb-3">
                      <MapPin className="w-3 h-3 text-[#c5a059] shrink-0" />
                      <span className="truncate">{pkg.destination}</span>
                    </div>

                    <p className="text-xs text-[#56655e] font-light leading-relaxed line-clamp-2 mb-4">
                      {pkg.overview}
                    </p>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">Starting from</p>
                      <p className="text-sm sm:text-base font-semibold text-[#18221d] font-serif-luxury">
                        {pkg.startingPrice}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a291e] text-[#dfcaa2] text-xs font-semibold tracking-wide group-hover:bg-[#c5a059] group-hover:text-[#061d15] transition-colors shadow-sm"
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
          <div className="text-center py-16 text-stone-500">
            <p className="text-sm">No packages found for this category. Contact us for a custom itinerary.</p>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#0e1113] text-white px-8 py-6 rounded-3xl shadow-xl border border-white/10">
            <div className="text-center sm:text-left">
              <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-0.5">Need a tailored itinerary?</p>
              <p className="text-base sm:text-lg font-sans font-light text-white">We build completely bespoke holiday plans</p>
            </div>
            <button
              type="button"
              onClick={() => openEnquiryModal({ destination: "Anywhere in the World" })}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-stone-200 transition-colors cursor-pointer"
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
