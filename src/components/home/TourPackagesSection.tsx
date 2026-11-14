"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface FeaturedPackage {
  title: string;
  subtitle: string;
  slug: string;
  image: string;
}

const FEATURED_PACKAGES: FeaturedPackage[] = [
  {
    title: "Manali",
    subtitle: "Winter Special",
    slug: "manali-himalayan-escape",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kashmir",
    subtitle: "Heaven on Earth",
    slug: "kashmir-paradise-valley",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lakshadweep",
    subtitle: "Island Paradise",
    slug: "lakshadweep-coral-island-getaway",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Singapore",
    subtitle: "City Experience",
    slug: "singapore-futuristic-garden-city",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Thailand",
    subtitle: "Tropical Escape",
    slug: "thailand-tropical-island-escape",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Malaysia",
    subtitle: "Vibrant Culture",
    slug: "malaysia-culture-rainforest-gateway",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TourPackagesSection() {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section id="packages-section" className="py-16 sm:py-20 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-1">
              CURATED ESCAPES
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#181d1a] tracking-tight">
              Our Travel <span className="text-[#c5a059]">Packages</span>
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-500 font-light font-sans-luxury">
              Explore India & International Destinations
            </p>
          </div>

          <div>
            <a
              href="#packages-section"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 text-stone-700 hover:border-[#0e3826] hover:text-[#0e3826] text-xs font-medium tracking-wide transition-colors cursor-pointer"
            >
              <span>View All Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Package Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURED_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              onClick={() =>
                openEnquiryModal({
                  destination: pkg.title,
                  resortOrProperty: `${pkg.title} (${pkg.subtitle})`,
                })
              }
              className="group relative aspect-3/4 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Bottom Label matching reference image */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h3 className="text-base sm:text-lg font-serif-luxury font-medium leading-tight drop-shadow-sm group-hover:text-[#dfcaa2] transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] tracking-wider uppercase text-stone-200/90 font-medium mt-0.5">
                  {pkg.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
