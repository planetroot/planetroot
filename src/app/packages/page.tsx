"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Globe, Compass, Heart, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { TOUR_PACKAGES, TourPackage, PackageCategory } from "@/data/packages";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

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
  International: "bg-blue-500/15 text-blue-700 border-blue-500/25",
  Domestic: "bg-emerald-500/15 text-emerald-800 border-emerald-500/25",
  Honeymoon: "bg-rose-500/15 text-rose-800 border-rose-500/25",
  Kerala: "bg-teal-500/15 text-teal-800 border-teal-500/25",
  Custom: "bg-amber-500/15 text-amber-800 border-amber-500/25",
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const { openEnquiryModal } = useEnquiryModal();

  const filteredPackages =
    activeTab === "All"
      ? TOUR_PACKAGES
      : TOUR_PACKAGES.filter((p) => p.category === activeTab);

  return (
    <div className="pt-28 pb-24 bg-[#fdfcf8] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-2.5">
            HANDCRAFTED ITINERARIES
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#1a1e2e] tracking-tight">
            Curated <span className="text-[#c9a84c]">Tour Packages</span>
          </h1>
          <p className="mt-3 text-base text-[#6b7190] font-light leading-relaxed max-w-2xl mx-auto">
            Discover iconic international escapes, romantic honeymoons, domestic highlights, and bespoke custom journeys. Enquire directly on WhatsApp for personal itinerary planning.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setActiveTab(tab.value)}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0a0f1e] text-[#e2c97e] shadow-lg"
                    : "bg-white text-[#6b7190] hover:text-[#0a0f1e] hover:bg-[#f7f2e8] border border-stone-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
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
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200/80 flex flex-col justify-between"
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
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border backdrop-blur-md ${CATEGORY_COLORS[pkg.category] || "bg-white/90 text-[#0a0f1e]"}`}>
                      {pkg.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#e2c97e]" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Destination Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs text-white/90 flex items-center gap-1 drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#e2c97e]" />
                      <span>{pkg.destination}</span>
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif-luxury font-normal text-[#1a1e2e] leading-snug group-hover:text-[#0a0f1e] transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#6b7190] font-light leading-relaxed line-clamp-3">
                    {pkg.overview}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-1.5">
                    {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                      <p key={idx} className="text-xs text-[#1a1e2e] flex items-start gap-2 font-light">
                        <span className="text-[#c9a84c] shrink-0 mt-0.5">•</span>
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
                  <span className="text-base sm:text-lg font-bold text-[#0a0f1e] font-serif-luxury">
                    {pkg.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-stone-300 hover:border-[#0a0f1e] hover:bg-[#0a0f1e] hover:text-[#e2c97e] text-xs font-semibold tracking-wider transition-all"
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#c9a84c] hover:bg-[#e2c97e] text-[#0a0f1e] text-xs font-semibold tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#0a0f1e]" />
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
        <div className="bg-[#0a0f1e] text-[#fdfcf8] p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#c9a84c]/30">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] block mb-2">
              Looking for a Customized Itinerary?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury">
              Craft Your Dream Trip Directly on WhatsApp
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Have specific travel dates, honeymoon requests, multi-city flights, or family requirements? Chat directly with our senior travel directors.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal({ destination: "Custom Itinerary" })}
            className="px-7 py-3.5 bg-[#c9a84c] text-[#0a0f1e] hover:bg-[#e2c97e] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#0a0f1e]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
}