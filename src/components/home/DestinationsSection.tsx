import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsSection() {
  const kumarakom = DESTINATIONS.find((d) => d.slug === "kumarakom-alleppey")!;
  const munnar = DESTINATIONS.find((d) => d.slug === "munnar")!;
  const wayanad = DESTINATIONS.find((d) => d.slug === "wayanad")!;
  const marari = DESTINATIONS.find((d) => d.slug === "marari-varkala")!;
  const thekkady = DESTINATIONS.find((d) => d.slug === "thekkady-spices")!;

  return (
    <section id="destinations-section" className="py-24 sm:py-32 bg-[#f6f1e8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-3">
            <Compass className="w-4 h-4 text-[#0e3826]" />
            <span>The Kerala Destinations Collection</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#181d1a] tracking-tight leading-tight">
            Territories of God’s Own Country.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
            From the silent waters of Vembanad Lake to the cool mist of Munnar tea hills, ancient Wayanad rainforests, and golden Arabian Sea beaches.
          </p>
        </div>

        {/* Feature 1: KUMARAKOM & ALLEPPEY (Large Horizontal Editorial Feature) */}
        <div className="mb-20 bg-white border border-[#0e3826]/10 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-[480px] overflow-hidden">
              <Image
                src={kumarakom.heroImage}
                alt={kumarakom.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-2">
                Tranquil Waterways & Houseboats
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#181d1a] mb-2">
                {kumarakom.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-4">
                {kumarakom.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6 font-sans-luxury">
                {kumarakom.shortDescription}
              </p>
              <div className="space-y-2 mb-8">
                {kumarakom.highlights.slice(0, 2).map((h, i) => (
                  <p key={i} className="text-xs text-[#181d1a] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                    <span>{h}</span>
                  </p>
                ))}
              </div>
              <div>
                <Link
                  href={kumarakom.ctaLink}
                  className="btn-luxury-primary text-xs tracking-widest inline-flex items-center gap-2"
                >
                  <span>{kumarakom.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: MUNNAR & WAYANAD (Asymmetric Two-Column Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* MUNNAR */}
          <div className="bg-white border border-[#0e3826]/10 overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={munnar.heroImage}
                alt={munnar.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-white/95 text-[#0e3826]">
                  Emerald Highlands
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#181d1a] mb-1">
                {munnar.name}
              </h3>
              <p className="text-xs font-serif-luxury italic text-[#0e3826] mb-3">
                {munnar.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6 font-sans-luxury">
                {munnar.shortDescription}
              </p>
              <div className="space-y-2 mb-8">
                {munnar.highlights.slice(0, 2).map((h, i) => (
                  <p key={i} className="text-xs text-[#181d1a] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                    <span>{h}</span>
                  </p>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href={munnar.ctaLink}
                  className="btn-luxury-secondary text-xs tracking-widest inline-flex items-center gap-2"
                >
                  <span>{munnar.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* WAYANAD */}
          <div className="bg-[#092015] text-[#fcfbf7] border border-[#c5a86a]/30 overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <Image
                src={wayanad.heroImage}
                alt={wayanad.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-[#092015]/90 text-[#dfcaa2] border border-[#c5a86a]/40">
                  Virgin Rainforest Bio-Reserve
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#fcfbf7] mb-1">
                {wayanad.name}
              </h3>
              <p className="text-xs font-serif-luxury italic text-[#dfcaa2] mb-3">
                {wayanad.tagline}
              </p>
              <p className="text-sm text-[#fcfbf7]/80 font-light leading-relaxed mb-6">
                {wayanad.shortDescription}
              </p>
              <div className="space-y-2 mb-8">
                {wayanad.highlights.slice(0, 2).map((h, i) => (
                  <p key={i} className="text-xs text-[#dfcaa2] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a86a]" />
                    <span>{h}</span>
                  </p>
                ))}
              </div>
              <div className="mt-auto">
                <Link
                  href={wayanad.ctaLink}
                  className="btn-luxury-gold text-xs tracking-widest inline-flex items-center gap-2"
                >
                  <span>{wayanad.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: MARARI COAST & THEKKADY SPICES (Two-Card Row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Marari & Varkala Coast */}
          <div className="group relative bg-white border border-[#0e3826]/10 p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="relative aspect-16/9 w-full mb-6 overflow-hidden">
              <Image
                src={marari.heroImage}
                alt={marari.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a86a] block mb-2">
                Barefoot Malabar Shores
              </span>
              <h3 className="text-2xl font-serif-luxury text-[#181d1a] mb-2">
                {marari.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-3">
                {marari.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6">
                {marari.shortDescription}
              </p>
            </div>
            <div>
              <Link
                href={marari.ctaLink}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{marari.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Thekkady & Spice Hills */}
          <div className="group relative bg-white border border-[#0e3826]/10 p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="relative aspect-16/9 w-full mb-6 overflow-hidden">
              <Image
                src={thekkady.heroImage}
                alt={thekkady.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c5a86a] block mb-2">
                Wild Cardamom & Elephant Corridors
              </span>
              <h3 className="text-2xl font-serif-luxury text-[#181d1a] mb-2">
                {thekkady.name}
              </h3>
              <p className="text-sm font-serif-luxury italic text-[#0e3826] mb-3">
                {thekkady.tagline}
              </p>
              <p className="text-sm text-[#525a55] font-light leading-relaxed mb-6">
                {thekkady.shortDescription}
              </p>
            </div>
            <div>
              <Link
                href={thekkady.ctaLink}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1.5 transition-colors"
              >
                <span>{thekkady.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
