import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertCircle, Compass } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsSection() {
  const manali = DESTINATIONS.find((d) => d.slug === "manali")!;
  const lakshadweep = DESTINATIONS.find((d) => d.slug === "lakshadweep")!;
  const stargazing = DESTINATIONS.find((d) => d.slug === "stargazing")!;
  const luxuryResorts = DESTINATIONS.find((d) => d.slug === "luxury-resorts")!;
  const romantic = DESTINATIONS.find((d) => d.slug === "romantic-getaways")!;

  return (
    <section className="py-24 sm:py-32 bg-[#f6f1e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-3">
            <Compass className="w-4 h-4 text-[#0e3826]" />
            <span>The Planet Root Travel Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#181d1a] tracking-tight leading-tight">
            Destinations Beyond the Horizon.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
            From the silent heights of the Himalayas to azure island atolls and night skies untouched by city glare.
          </p>
        </div>

        {/* Feature 1: MANALI (Large Horizontal Editorial Feature) */}
        <div className="mb-20 bg-white border border-[#0e3826]/10 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-[480px] overflow-hidden">
              <Image
                src={manali.heroImage}
                alt={manali.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-2">
                Himalayan Alpine Haven
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#181d1a] mb-2">
                {manali.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-4">
                {manali.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6">
                {manali.shortDescription}
              </p>
              <div className="space-y-2 mb-8">
                {manali.highlights.slice(0, 2).map((h, i) => (
                  <p key={i} className="text-xs text-[#181d1a] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                    <span>{h}</span>
                  </p>
                ))}
              </div>
              <div>
                <Link
                  href={manali.ctaLink}
                  className="btn-luxury-primary text-xs tracking-widest inline-flex items-center gap-2"
                >
                  <span>{manali.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: LAKSHADWEEP & STARGAZING (Asymmetric Two-Column Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* LAKSHADWEEP */}
          <div className="bg-white border border-[#0e3826]/10 overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={lakshadweep.heroImage}
                alt={lakshadweep.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-white/95 text-[#0e3826]">
                  Island Sanctuary
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#181d1a] mb-1">
                {lakshadweep.name}
              </h3>
              <p className="text-xs font-serif-luxury italic text-[#0e3826] mb-3">
                {lakshadweep.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-5">
                {lakshadweep.shortDescription}
              </p>

              {/* Crucial Advisory Note */}
              <div className="p-3.5 bg-[#f6f1e8] border border-[#c5a86a]/40 rounded-xs mb-6 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#0e3826] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#525a55] leading-relaxed">
                  Permits, transport, accommodation, and activity availability depend on current administration requirements and seasonal confirmation.
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={lakshadweep.ctaLink}
                  className="btn-luxury-secondary text-xs tracking-widest inline-flex items-center gap-2"
                >
                  <span>{lakshadweep.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* STARGAZING TRIPS */}
          <div className="bg-[#092015] text-[#fcfbf7] border border-[#c5a86a]/30 overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={stargazing.heroImage}
                alt={stargazing.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#092015]/90 text-[#dfcaa2] border border-[#c5a86a]/40">
                  Bortle Class 1 Dark Sky
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#fcfbf7] mb-1">
                {stargazing.name}
              </h3>
              <p className="text-xs font-serif-luxury italic text-[#dfcaa2] mb-3">
                {stargazing.tagline}
              </p>
              <p className="text-sm text-[#fcfbf7]/80 font-light leading-relaxed mb-6">
                {stargazing.shortDescription}
              </p>
              <div className="space-y-2 mb-8">
                {stargazing.highlights.slice(0, 2).map((h, i) => (
                  <p key={i} className="text-xs text-[#dfcaa2] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                    <span>{h}</span>
                  </p>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href={stargazing.ctaLink}
                  className="btn-luxury-gold text-xs tracking-widest inline-flex items-center gap-2"
                >
                  <span>{stargazing.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: LUXURY RESORT ESCAPES & ROMANTIC GETAWAYS (Balanced Two-Card Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Luxury Resort Escapes */}
          <div className="group relative bg-white border border-[#0e3826]/10 p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="relative aspect-16/9 w-full mb-6 overflow-hidden">
              <Image
                src={luxuryResorts.heroImage}
                alt={luxuryResorts.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a86a] block mb-2">
                Private Villas & Infinity Horizons
              </span>
              <h3 className="text-2xl font-serif-luxury text-[#181d1a] mb-2">
                {luxuryResorts.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-3">
                {luxuryResorts.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6">
                {luxuryResorts.shortDescription}
              </p>
            </div>
            <div>
              <Link
                href={luxuryResorts.ctaLink}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{luxuryResorts.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Romantic Getaways */}
          <div className="group relative bg-white border border-[#0e3826]/10 p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="relative aspect-16/9 w-full mb-6 overflow-hidden">
              <Image
                src={romantic.heroImage}
                alt={romantic.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a86a] block mb-2">
                Honeymoons & Milestones
              </span>
              <h3 className="text-2xl font-serif-luxury text-[#181d1a] mb-2">
                {romantic.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-3">
                {romantic.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6">
                {romantic.shortDescription}
              </p>
            </div>
            <div>
              <Link
                href={romantic.ctaLink}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{romantic.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
