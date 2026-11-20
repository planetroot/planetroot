"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { TOUR_PACKAGES, type TourPackage, type PackageCategory } from "@/data/packages";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

type FilterTab = "All" | PackageCategory;

const TABS: { label: string; value: FilterTab }[] = [
  { label: "All Packages", value: "All" },
  { label: "International", value: "International" },
  { label: "Domestic", value: "Domestic" },
  { label: "Honeymoon", value: "Honeymoon" },
  { label: "Kerala Circuits", value: "Kerala" },
  { label: "Custom Plans", value: "Custom" },
];

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [packages, setPackages] = useState<TourPackage[]>(TOUR_PACKAGES);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    fetch("/api/packages")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPackages(data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredPackages =
    activeTab === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === activeTab);

  return (
    <div className="bg-[#fcfbf7] min-h-screen pt-28 pb-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-2">
            CURATED ITINERARIES
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-[#18221d] tracking-tight">
            Curated Travel Packages
          </h1>
          <p className="mt-3 text-base text-[#56655e] font-light leading-relaxed max-w-2xl mx-auto">
            Discover premier international getaways, romantic honeymoons, domestic circuits, and bespoke travel plans. Enquire directly on WhatsApp for personalized itinerary planning.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0a291e] text-[#dfcaa2] shadow-md"
                    : "bg-white text-[#56655e] hover:text-[#0a291e] hover:bg-stone-50 border border-stone-200"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Package Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-200/80 flex flex-col justify-between"
            >
              <div>
                {/* Hero Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#061d15]/85 text-[#dfcaa2] border border-[#c5a059]/30 backdrop-blur-md">
                      {pkg.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#dfcaa2]" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Destination Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs text-white/90 flex items-center gap-1 drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#dfcaa2]" />
                      <span>{pkg.destination}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif-luxury font-normal text-[#18221d] leading-snug group-hover:text-[#0a291e] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#56655e] font-light leading-relaxed line-clamp-3">
                    {pkg.overview}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <p key={idx} className="text-xs text-[#18221d] flex items-start gap-2 font-light">
                        <span className="text-[#c5a059] shrink-0 mt-0.5">•</span>
                        <span className="line-clamp-1">{highlight}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price & Actions Strip */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-100">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">
                    Starting Price
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#18221d] font-serif-luxury">
                    {pkg.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-stone-300 hover:border-[#0a291e] hover:bg-[#0a291e] hover:text-[#dfcaa2] text-xs font-semibold tracking-wider transition-all"
                  >
                    <span>Details</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      openEnquiryModal({
                        destination: pkg.destination,
                        resortOrProperty: pkg.title,
                        stayType: pkg.category,
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#c5a059] hover:bg-[#dfcaa2] text-[#061d15] text-xs font-semibold tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#061d15]" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Custom Planning Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0e1113] text-[#fcfbf7] p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-stone-400 block mb-2">
              Looking for a Customized Itinerary?
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-light text-white">
              Craft Your Dream Trip Directly on WhatsApp
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Have specific travel dates, honeymoon preferences, multi-city flights, or family requirements? Chat directly with our senior travel specialists.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal({ destination: "Custom Itinerary" })}
            className="px-7 py-3.5 bg-white text-black hover:bg-stone-200 font-medium text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-black" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
}
