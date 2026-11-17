"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/gallery";

export default function ResortGallerySection() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1) : null
        );
      } else if (e.key === "ArrowRight") {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex]);

  const activeItem =
    selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  return (
    <section id="resort-gallery-section" className="py-20 sm:py-28 bg-[#fdfcf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-1.5">
            VISUAL GALLERY
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#1a1e2e] tracking-tight">
            Resort &amp; Villa <span className="text-[#c9a84c]">Gallery</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#6b7190] font-light font-sans-luxury">
            Moments from handpicked pool villas, cloud-forest sanctuaries, overwater bungalows, and mountain retreats
          </p>
        </div>

        {/* Pure Photography Grid (No filters, No text detailing) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative aspect-16/11 overflow-hidden rounded-2xl bg-[#e8e0d2] cursor-pointer border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt="Planet Root Resort & Villa Gallery photograph"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pure & Minimal Lightbox Modal */}
      {activeItem && selectedItemIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItemIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/95 backdrop-blur-md animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItemIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItemIndex((prev) =>
                prev !== null ? (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1) : null
              );
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItemIndex((prev) =>
                prev !== null ? (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0) : null
              );
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center"
          >
            <div className="relative w-full h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden">
              <Image
                src={activeItem.image}
                alt="Planet Root Resort & Villa Gallery photograph"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            {/* Understated Minimal Image Counter */}
            <div className="mt-3 text-stone-400 text-xs font-medium tracking-widest">
              {selectedItemIndex + 1} / {GALLERY_ITEMS.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
