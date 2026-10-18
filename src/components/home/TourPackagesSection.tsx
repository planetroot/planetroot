import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Sparkles } from "lucide-react";
import { TOUR_PACKAGES, TourPackage } from "@/data/packages";

export default function TourPackagesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#fcfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-3">
              Curated Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
              Journeys Worth Remembering.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
              Thoughtfully arranged holidays designed around unhurried discovery, exceptional stays, and seamless logistics.
            </p>
          </div>

          <div>
            <Link
              href="/packages"
              className="btn-luxury-secondary text-xs tracking-widest inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>View All 6 Journeys</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <article className="group bg-white border border-[#0e3826]/10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-[#0e3826]/30">
      {/* Visual Header */}
      <div>
        <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#0e3826] text-white shadow-xs">
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

          <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug mb-3">
            <Link href={`/packages/${pkg.slug}`}>{pkg.title}</Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-5 line-clamp-3">
            {pkg.overview}
          </p>

          {/* Key Highlights */}
          <div className="space-y-1.5 pt-4 border-t border-[#0e3826]/10 mb-5">
            {pkg.highlights.slice(0, 2).map((item, idx) => (
              <p key={idx} className="text-xs text-[#181d1a] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a] mt-1.5 shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </p>
            ))}
          </div>

          <div className="pt-3 border-t border-[#0e3826]/10 flex items-baseline justify-between">
            <div>
              <p className="text-[10px] text-[#7b8580] uppercase tracking-wider">Indicative Pricing</p>
              <p className="text-sm font-semibold text-[#0e3826] mt-0.5">
                {pkg.startingPrice}
              </p>
            </div>
            <span className="text-[11px] text-[#525a55]">Per Person</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-6 pt-2 bg-[#fcfbf7] border-t border-[#0e3826]/10 flex items-center justify-between gap-3">
        <Link
          href={`/packages/${pkg.slug}`}
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1 transition-colors"
        >
          <span>View Journey</span>
          <ArrowRight className="w-3 h-3" />
        </Link>

        <Link
          href={`/contact?package=${encodeURIComponent(pkg.title)}`}
          className="text-xs uppercase tracking-wider font-medium px-3.5 py-1.5 bg-[#0e3826]/5 text-[#0e3826] hover:bg-[#0e3826] hover:text-[#fcfbf7] transition-all rounded-xs border border-[#0e3826]/20"
        >
          Request Quote
        </Link>
      </div>
    </article>
  );
}
