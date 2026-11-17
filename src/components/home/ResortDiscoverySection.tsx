"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, X, Check, FileText } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { RESORTS, Resort } from "@/data/resorts";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { createWhatsAppUrl } from "@/config/site";

export default function ResortDiscoverySection() {
  const [resorts, setResorts] = useState<Resort[]>(RESORTS);
  const [showAll, setShowAll] = useState(false);
  const [selectedResort, setSelectedResort] = useState<Resort | null>(null);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    fetch("/api/resorts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setResorts(data);
        }
      })
      .catch((err) => {
        // Silently keep default RESORTS if fetch fails
      });
  }, []);

  const displayResorts = showAll ? resorts : resorts.slice(0, 3);

  return (
    <section id="featured-resorts-section" className="py-16 sm:py-20 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-1">
              HANDPICKED SANCTUARIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#1a1e2e] tracking-tight">
              Featured <span className="text-[#c9a84c]">Resorts &amp; Villas</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#6b7190] font-light font-sans-luxury">
              Personally inspected private pool villas, tea chalets, and luxury hideaways
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-stone-300 text-stone-700 hover:border-[#0a291e] hover:bg-[#0a291e] hover:text-[#dfcaa2] text-xs font-medium tracking-wide transition-colors cursor-pointer"
            >
              <span>{showAll ? "Show Top Stays" : "View All Resorts"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Featured Resort Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayResorts.map((resort) => (
            <article
              key={resort.id}
              className="group bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div
                onClick={() => setSelectedResort(resort)}
                className="block cursor-pointer"
              >
                {/* Resort Photograph */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
                  <Image
                    src={resort.heroImage}
                    alt={resort.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 pb-2">
                  <h3 className="text-lg sm:text-xl font-serif-luxury font-medium text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug">
                    {resort.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium mt-1 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{resort.destination}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Price & View Details Pill Button */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 flex items-center justify-between border-t border-stone-100">
                <div>
                  <p className="text-sm sm:text-base font-serif-luxury font-semibold text-[#0e3826]">
                    {resort.pricePerNight}
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedResort(resort)}
                    className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-700 hover:border-[#0a291e] hover:bg-[#0a291e] hover:text-[#dfcaa2] text-xs font-semibold tracking-wider transition-all cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* IN-PAGE RESORT DETAILS MODAL (Keeps user on single page) */}
      {/* ======================================================== */}
      {selectedResort && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedResort(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedResort(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-all"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="relative aspect-16/9 w-full bg-stone-100">
              <Image
                src={selectedResort.heroImage}
                alt={selectedResort.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-[#0a291e] rounded-sm text-[#dfcaa2]">
                  {selectedResort.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white mt-2">
                  {selectedResort.name}
                </h3>
                <p className="text-xs text-stone-200 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
                  <span>{selectedResort.destination}</span>
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Pricing & Tagline */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">Starting Rate</p>
                  <p className="text-2xl font-bold text-[#18221d]">{selectedResort.pricePerNight}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {selectedResort.brochurePdf && (
                    <a
                      href={selectedResort.brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-stone-50 text-[#0a291e] border border-[#0a291e]/30 text-xs font-semibold tracking-wider transition-all shadow-xs"
                    >
                      <FileText className="w-4 h-4 text-[#c5a059]" />
                      <span>Brochure (PDF)</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      const resortToEnquire = selectedResort;
                      setSelectedResort(null);
                      openEnquiryModal({
                        destination: resortToEnquire.destination,
                        resortOrProperty: resortToEnquire.name,
                        stayType: resortToEnquire.category,
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c5a059] hover:bg-[#dfcaa2] text-[#061d15] text-xs font-semibold tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#061d15]" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm uppercase tracking-wider font-semibold text-stone-800 mb-2">
                  About the Sanctuary
                </h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  {selectedResort.longDescription || selectedResort.description}
                </p>
              </div>

              {/* Verified Amenities */}
              {selectedResort.verifiedAmenities && selectedResort.verifiedAmenities.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-stone-800 mb-3">
                    Verified Amenities & Experiences
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {selectedResort.verifiedAmenities.map((amenity, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-200/60 text-xs text-stone-700 font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0e3826] shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Photo Thumbnails */}
              {selectedResort.galleryImages && selectedResort.galleryImages.length > 1 && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-stone-800 mb-3">
                    Resort Photography
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {selectedResort.galleryImages.slice(0, 4).map((img, i) => (
                      <div key={i} className="relative aspect-4/3 rounded-lg overflow-hidden bg-stone-100 border border-stone-200">
                        <Image
                          src={img}
                          alt={`${selectedResort.name} photo ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 200px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Room Categories */}
              {selectedResort.villas && selectedResort.villas.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase tracking-wider font-semibold text-stone-800 mb-3">
                    Available Villas & Suites
                  </h4>
                  <div className="space-y-3">
                    {selectedResort.villas.map((villa) => (
                      <div
                        key={villa.id}
                        className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                      >
                        <div>
                          <p className="text-sm font-bold text-stone-900">{villa.name}</p>
                          <p className="text-xs text-stone-500 mt-0.5">{villa.view} • {villa.size}</p>
                        </div>
                        {villa.priceIndication && (
                          <span className="text-xs font-semibold text-[#0e3826] bg-white px-3 py-1 rounded-full border border-stone-200">
                            {villa.priceIndication}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
