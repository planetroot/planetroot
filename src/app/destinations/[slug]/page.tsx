import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Compass, AlertCircle, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { DESTINATIONS, Destination } from "@/data/destinations";
import { RESORTS } from "@/data/resorts";
import { TOUR_PACKAGES } from "@/data/packages";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} — ${dest.tagline} | PLANET ROOT`,
    description: dest.shortDescription,
    openGraph: {
      title: `${dest.name} | PLANET ROOT — Beyond Borders`,
      description: dest.shortDescription,
      images: [{ url: dest.heroImage }],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Find relevant resorts & packages for this destination
  const destinationResorts = RESORTS.filter(
    (r) => r.destinationSlug === destination.slug || (destination.slug === "luxury-resorts" && r.category === "Private Pool Villa")
  );

  const destinationPackages = TOUR_PACKAGES.filter(
    (p) => p.destinationSlug === destination.slug || (destination.slug === "luxury-resorts" && p.slug.includes("luxury"))
  );

  return (
    <div className="pt-24 pb-24 bg-[#fcfbf7]">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0e3826] hover:text-[#c5a86a] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Destinations</span>
        </Link>
      </div>

      {/* Cinematic Hero Banner */}
      <section className="relative w-full h-[65vh] min-h-[460px] max-h-[600px] overflow-hidden mb-16">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092015] via-black/40 to-black/30" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full text-white">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#dfcaa2] block mb-2">
              Curated Destination Collection
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury tracking-tight text-white mb-2">
              {destination.name}
            </h1>
            <p className="text-lg sm:text-xl font-serif-luxury italic text-[#dfcaa2] max-w-2xl">
              {destination.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Narrative, Advisory, Stays, Packages (7 cols) */}
          <div className="lg:col-span-7 space-y-16">
            {/* 1. Editorial Story */}
            <div>
              <p className="text-lg sm:text-xl font-serif-luxury italic text-[#0e3826] mb-6 leading-relaxed">
                {destination.editorialQuote}
              </p>
              <div className="space-y-4 text-sm sm:text-base text-[#525a55] font-light leading-relaxed font-sans-luxury">
                <p>{destination.longDescription}</p>
              </div>
            </div>

            {/* 2. Important Travel Advisory (Crucial for Lakshadweep) */}
            {destination.advisoryNote && (
              <div className="p-6 bg-[#f6f1e8] border border-[#c5a86a]/40 rounded-xs">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#0e3826] shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#0e3826]">
                      Entry Permits & Regional Travel Advisory
                    </h2>
                    <p className="text-xs sm:text-sm text-[#525a55] leading-relaxed mt-2">
                      {destination.advisoryNote}
                    </p>
                    <p className="text-xs text-[#0e3826] font-medium mt-3">
                      ✓ Planet Root handles complete administrative paperwork and verification.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Climate & Planning Essentials */}
            <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
              <h2 className="text-xl font-serif-luxury text-[#181d1a] mb-4 border-b border-[#0e3826]/10 pb-3">
                Seasonal Travel Guidance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#525a55]">
                <div>
                  <span className="font-semibold text-[#181d1a] block">Best Time to Visit:</span>
                  <p className="mt-1 leading-relaxed">{destination.bestTimeToVisit}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#181d1a] block">Weather Overview:</span>
                  <p className="mt-1 leading-relaxed">{destination.weatherOverview}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#181d1a] block">Recommended Duration:</span>
                  <p className="mt-1 leading-relaxed">{destination.recommendedDuration}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#181d1a] block">Ideal Travelers:</span>
                  <p className="mt-1 leading-relaxed">{destination.idealFor.join(" • ")}</p>
                </div>
              </div>
            </div>

            {/* 4. Signature Stays in This Destination */}
            {destinationResorts.length > 0 && (
              <div>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-1">
                      Where to Stay
                    </span>
                    <h2 className="text-2xl font-serif-luxury text-[#181d1a]">
                      Curated Sanctuaries in {destination.name}
                    </h2>
                  </div>
                </div>

                <div className="space-y-6">
                  {destinationResorts.map((resort) => (
                    <article
                      key={resort.id}
                      className="bg-white border border-[#0e3826]/10 rounded-xs overflow-hidden flex flex-col sm:flex-row shadow-xs hover:border-[#0e3826]/30 transition-all"
                    >
                      <div className="relative sm:w-5/12 aspect-16/10 sm:aspect-auto">
                        <Image
                          src={resort.heroImage}
                          alt={resort.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 sm:w-7/12 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-[#c5a86a] block mb-1">
                            {resort.category}
                          </span>
                          <h3 className="text-lg font-serif-luxury text-[#181d1a] mb-2">
                            {resort.name}
                          </h3>
                          <p className="text-xs text-[#525a55] font-light leading-relaxed mb-4 line-clamp-2">
                            {resort.description}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-[#0e3826]/10 flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#0e3826]">
                            {resort.pricePerNight}
                          </span>
                          <Link
                            href={`/stays/${resort.slug}`}
                            className="text-xs uppercase tracking-wider font-semibold text-[#0e3826] hover:text-[#c5a86a] inline-flex items-center gap-1"
                          >
                            <span>View Stay</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Recommended Tour Packages in This Destination */}
            {destinationPackages.length > 0 && (
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-1">
                  Complete Journeys
                </span>
                <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-6">
                  Curated Packages in {destination.name}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {destinationPackages.map((pkg) => (
                    <article
                      key={pkg.id}
                      className="p-6 bg-white border border-[#0e3826]/10 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <span className="text-[10px] font-semibold tracking-widest uppercase text-[#0e3826] bg-[#f6f1e8] px-2.5 py-0.5 rounded-xs inline-block mb-1">
                          {pkg.duration}
                        </span>
                        <h3 className="text-lg font-serif-luxury text-[#181d1a]">
                          {pkg.title}
                        </h3>
                        <p className="text-xs text-[#525a55] mt-1 max-w-md line-clamp-2">
                          {pkg.overview}
                        </p>
                      </div>

                      <div className="sm:text-right shrink-0">
                        <p className="text-xs font-semibold text-[#0e3826] mb-2">{pkg.startingPrice}</p>
                        <Link
                          href={`/packages/${pkg.slug}`}
                          className="btn-luxury-primary text-[11px] py-2 px-4"
                        >
                          View Journey
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Booking Enquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm
                initialDestination={destination.name}
                formTitle={`Plan Your ${destination.name} Journey`}
                formSubtitle="Our private travel director will connect with you to tailor dates, permits, and private stays."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
