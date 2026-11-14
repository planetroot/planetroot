"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { TOUR_PACKAGES, TourPackage, PackageCategory } from "@/data/packages";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

type FilterTab = "All" | PackageCategory;

const TABS: { label: string; value: FilterTab }[] = [
  { label: "All Packages", value: "All" },
  { label: "Kerala", value: "Kerala" },
  { label: "Domestic", value: "Domestic" },
  { label: "International", value: "International" },
];

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const { openEnquiryModal } = useEnquiryModal();

  const filteredPackages =
    activeTab === "All"
      ? TOUR_PACKAGES
      : TOUR_PACKAGES.filter((p) => p.category === activeTab);

  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-2.5">
            HOLIDAY PACKAGES
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Curated <span className="text-[#c5a059]">Travel Packages</span>
          </h1>
          <p className="mt-3 text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Explore handpicked holidays across Kerala, iconic Indian destinations, and international escapes. Enquire directly on WhatsApp for customized itineraries.
          </p>
        </div>
      </section>

      {/* Category Tabs: All, Kerala, Domestic, International */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 gap-2 no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 rounded-xs cursor-pointer ${
                activeTab === tab.value
                  ? "bg-[#0e3826] text-[#dfcaa2] shadow-xs"
                  : "bg-white text-[#525a55] hover:text-[#0e3826] hover:bg-[#f6f1e8] border border-[#0e3826]/12"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-white border border-[#0e3826]/12 flex flex-col justify-between overflow-hidden rounded-xs transition-all duration-500 hover:shadow-xl hover:border-[#0e3826]/30"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {pkg.duration && (
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#0e3826] text-[#fcfbf7] shadow-xs rounded-xs flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#dfcaa2]" />
                        <span>{pkg.duration}</span>
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-0.5 bg-white/95 text-[#0e3826] shadow-xs rounded-xs">
                      {pkg.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a86a] font-medium tracking-wider uppercase mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{pkg.destination}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif-luxury text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug mb-3">
                    <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-4 line-clamp-3">
                    {pkg.overview}
                  </p>

                  {/* Highlights */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-[#0e3826]/10 mb-4">
                      {pkg.highlights.slice(0, 2).map((item, idx) => (
                        <p key={idx} className="text-xs text-[#181d1a]/85 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a] mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Starting Price */}
                  {pkg.startingPrice && (
                    <div className="pt-3 border-t border-[#0e3826]/10 flex items-baseline justify-between">
                      <div>
                        <p className="text-[10px] text-[#7b8580] uppercase tracking-wider">Starting Rate</p>
                        <p className="text-sm font-semibold text-[#0e3826] mt-0.5">
                          {pkg.startingPrice}
                        </p>
                      </div>
                      <span className="text-[11px] text-[#525a55]">{pkg.idealFor?.split(",")[0] || "Curated"}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons: View Package Details & Enquire */}
              <div className="p-6 pt-3 pb-6 flex items-center justify-between gap-2 border-t border-[#0e3826]/10 bg-[#fcfbf7]">
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0e3826] hover:text-[#c5a86a] flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    openEnquiryModal({
                      destination: pkg.destination,
                      resortOrProperty: pkg.title,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xs bg-[#0e3826] text-[#dfcaa2] hover:bg-[#164e36] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#dfcaa2]" />
                  <span>Enquire</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Custom Planning Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-[#0e3826] text-[#fcfbf7] p-8 sm:p-10 rounded-sm shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#c5a86a]/30">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#dfcaa2] block mb-2">
              Looking for a Customized Itinerary?
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury">
              Craft Your Holiday Directly on WhatsApp
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#fcfbf7]/80 font-light leading-relaxed">
              Have specific travel dates, group requirements, or multiple destinations? Chat with our senior travel directors directly.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal({ destination: "Anywhere in Kerala" })}
            className="px-6 py-3.5 bg-[#c5a86a] text-[#092015] hover:bg-[#dfcaa2] font-semibold text-xs uppercase tracking-wider rounded-xs transition-all shadow-md whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#092015]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
}
