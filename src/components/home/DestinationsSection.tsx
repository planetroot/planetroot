"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

// Exact category label mapping matching reference image
const DEST_LABELS: Record<string, string> = {
  wayanad: "Resorts",
  munnar: "Resorts",
  vagamon: "Resorts",
  alleppey: "Backwaters",
  thekkady: "Nature Stays",
  kovalam: "Beach Stays",
};

export default function DestinationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { openEnquiryModal } = useEnquiryModal();

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="destinations-section" className="py-16 sm:py-20 bg-[#fdfcf8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-1">
              DISCOVER INSPIRING PLACES
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#1a1e2e] tracking-tight">
              Popular <span className="text-[#c9a84c]">Destinations</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#6b7190] font-light font-sans-luxury">
              Experience the most beautiful places across India and the world with Planet Root
            </p>
          </div>

          <div>
            <a
              href="#destinations-section"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 text-stone-700 hover:border-[#0a0f1e] hover:text-[#0a0f1e] text-xs font-medium tracking-wide transition-colors cursor-pointer"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Carousel Container with Left/Right Arrow Buttons */}
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-stone-200 flex items-center justify-center text-stone-700 hover:text-black hover:scale-105 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-lg border border-stone-200 flex items-center justify-center text-stone-700 hover:text-black hover:scale-105 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Destination Cards Row */}
          <div
            ref={scrollRef}
            className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
          >
            {DESTINATIONS.map((dest) => {
              const label = DEST_LABELS[dest.slug] || "Resorts";
              return (
                <div
                  key={dest.id}
                  onClick={() => openEnquiryModal({ destination: dest.name })}
                  className="group relative shrink-0 w-[200px] sm:w-[220px] aspect-3/4 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient Overlay for Readable White Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Bottom Text Matching Reference Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-stone-200/90 font-light mt-0.5">
                      {label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
