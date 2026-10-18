import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Compass, AlertCircle, Calendar, Clock } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations Collection | Curated Luxury Travel",
  description:
    "Explore Planet Root's handpicked luxury destinations: Manali Himalayan peaks, pristine Lakshadweep coral atolls, dark sky stargazing in Spiti, secluded cliffside villas, and royal romantic getaways.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            The Planet Root Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Curated Destinations
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
            From the eternal snows of the Himalayas to turquoise atolls and high dark-sky plateaus, explore territories crafted for extraordinary journeys.
          </p>
          <div className="divider-luxury w-28 mx-auto mt-6" />
        </div>
      </section>

      {/* Destinations List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {DESTINATIONS.map((dest, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={dest.id}
              className="bg-white border border-[#0e3826]/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Image Section (7 cols) */}
                <div className={`lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-[480px] overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3.5 py-1 bg-[#0e3826] text-white">
                      Featured Destination
                    </span>
                  </div>
                </div>

                {/* Content Section (5 cols) */}
                <div className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-2">
                    {dest.tagline}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#181d1a] mb-3">
                    <Link href={dest.ctaLink} className="hover:text-[#0e3826] transition-colors">
                      {dest.name}
                    </Link>
                  </h2>
                  <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-4">
                    {dest.editorialQuote}
                  </p>
                  <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6 font-sans-luxury">
                    {dest.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {dest.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#181d1a]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Seasonal Context */}
                  <div className="pt-4 border-t border-[#0e3826]/10 mb-6 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-[#7b8580]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#c5a86a]" />
                      <span>{dest.bestTimeToVisit.split("(")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a86a]" />
                      <span>Recommended: {dest.recommendedDuration}</span>
                    </div>
                  </div>

                  {/* Advisory Notice (for Lakshadweep etc.) */}
                  {dest.advisoryNote && (
                    <div className="p-3 bg-[#f6f1e8] border border-[#c5a86a]/40 rounded-xs mb-6 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-[#0e3826] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-[#525a55] leading-relaxed">
                        {dest.advisoryNote}
                      </p>
                    </div>
                  )}

                  <div>
                    <Link
                      href={dest.ctaLink}
                      className="btn-luxury-primary text-xs tracking-widest inline-flex items-center gap-2"
                    >
                      <span>{dest.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
