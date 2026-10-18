import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin, Clock, Check, Sparkles } from "lucide-react";
import { TOUR_PACKAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "Curated Tour Packages | Luxury Journeys Worth Remembering",
  description:
    "Explore bespoke tour packages from Planet Root: Manali mountain escapes, Lakshadweep island getaways, high-altitude stargazing weekends, private pool villa getaways, romantic honeymoons, and family experiences.",
};

export default function PackagesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            The Tour Collection
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Journeys Worth Remembering.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
            Thoughtfully presented holiday packages designed around slow exploration, vetted stays, and personalized care.
          </p>
          <div className="divider-luxury w-28 mx-auto mt-6" />
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {TOUR_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className="group bg-white border border-[#0e3826]/10 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg hover:border-[#0e3826]/30 transition-all duration-500"
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
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#0e3826] text-white">
                      {pkg.duration}
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

                  <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-5 line-clamp-3">
                    {pkg.overview}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#0e3826]/10 mb-5">
                    {pkg.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#181d1a]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a] mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing indication */}
                  <div className="pt-3 border-t border-[#0e3826]/10 flex items-baseline justify-between">
                    <div>
                      <p className="text-[10px] text-[#7b8580] uppercase tracking-wider">Indicative Pricing</p>
                      <p className="text-sm font-semibold text-[#0e3826] mt-0.5">
                        {pkg.startingPrice}
                      </p>
                    </div>
                    <span className="text-[11px] text-[#525a55]">Double Occupancy</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 bg-[#fcfbf7] border-t border-[#0e3826]/10 flex items-center justify-between gap-3">
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Journey</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/contact?customize=${encodeURIComponent(pkg.title)}`}
                    className="text-xs uppercase tracking-wider font-medium px-3 py-1.5 bg-[#f6f1e8] text-[#525a55] hover:text-[#0e3826] rounded-xs border border-[#0e3826]/10 transition-colors"
                  >
                    Customize
                  </Link>

                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.title)}`}
                    className="text-xs uppercase tracking-wider font-semibold px-3.5 py-1.5 bg-[#0e3826] text-white hover:bg-[#164e36] rounded-xs transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
