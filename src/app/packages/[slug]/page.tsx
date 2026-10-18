import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  Check,
  X,
  ShieldCheck,
  Calendar,
  Sparkles,
  Phone,
  Mail,
  Car,
  Home,
  AlertCircle,
} from "lucide-react";
import { TOUR_PACKAGES, TourPackage } from "@/data/packages";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} | ${pkg.duration} Curated Journey`,
    description: pkg.overview,
    openGraph: {
      title: `${pkg.title} | PLANET ROOT`,
      description: pkg.overview,
      images: [{ url: pkg.heroImage }],
    },
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = TOUR_PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24 bg-[#fcfbf7]">
      {/* Top Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0e3826] hover:text-[#c5a86a] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Journeys</span>
        </Link>
      </div>

      {/* Main Headline & Pricing Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#0e3826]/10">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-2">
              <span className="px-2.5 py-0.5 bg-[#0e3826] text-white rounded-xs">
                {pkg.duration}
              </span>
              <span>•</span>
              <span className="text-[#0e3826]">{pkg.destination}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
              {pkg.title}
            </h1>
            <p className="mt-2 text-sm text-[#525a55] font-light">
              Ideal for: <strong className="text-[#181d1a]">{pkg.idealFor}</strong>
            </p>
          </div>

          <div className="lg:text-right">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7b8580] block">
              Indicative Journey Price
            </span>
            <p className="text-2xl font-serif-luxury font-semibold text-[#0e3826] mt-0.5">
              {pkg.startingPrice}
            </p>
            <p className="text-[11px] text-[#525a55] mt-1 max-w-xs lg:ml-auto">
              {pkg.priceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative aspect-16/10 md:aspect-auto md:h-[480px] overflow-hidden rounded-xs border border-[#0e3826]/10">
            <Image
              src={pkg.heroImage}
              alt={pkg.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            {pkg.gallery.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="relative aspect-4/3 md:aspect-auto md:h-[232px] overflow-hidden rounded-xs border border-[#0e3826]/10"
              >
                <Image
                  src={img}
                  alt={`${pkg.title} photo ${i + 2}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Enquiry Form Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Itinerary, Stays, Transport, Inclusions (7 cols) */}
          <div className="lg:col-span-7 space-y-14">
            {/* 1. Overview */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
                Journey Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#181d1a] mb-4">
                The Narrative of the Trip
              </h2>
              <p className="text-sm sm:text-base text-[#525a55] font-light leading-relaxed font-sans-luxury">
                {pkg.overview}
              </p>
            </div>

            {/* 2. Advisory Notice (if any, e.g. Lakshadweep) */}
            {pkg.advisoryNotice && (
              <div className="p-6 bg-[#f6f1e8] border border-[#c5a86a]/40 rounded-xs flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#0e3826] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs uppercase font-semibold text-[#0e3826] tracking-wider">
                    Important Travel Requirement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525a55] leading-relaxed mt-1">
                    {pkg.advisoryNotice}
                  </p>
                </div>
              </div>
            )}

            {/* 3. Day-by-Day Itinerary */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
                Detailed Itinerary
              </span>
              <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-6">
                Day-by-Day Journey
              </h2>

              <div className="space-y-6">
                {pkg.dayByDay.map((day) => (
                  <div
                    key={day.day}
                    className="p-6 bg-white border border-[#0e3826]/10 rounded-xs shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#0e3826] bg-[#f6f1e8] px-3 py-1 rounded-xs">
                        Day {day.day}
                      </span>
                      <span className="text-xs text-[#7b8580]">
                        Meals: <strong className="text-[#181d1a]">{day.mealsIncluded}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg font-serif-luxury text-[#181d1a] mb-2">
                      {day.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-4">
                      {day.description}
                    </p>

                    <div className="pt-3 border-t border-[#0e3826]/10">
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#7b8580] block mb-1.5">
                        Key Experiences:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[11px] text-[#0e3826] bg-[#fcfbf7] border border-[#0e3826]/10 px-2 py-0.5 rounded-xs"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Accommodation & Transport Arrangements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0e3826] mb-3">
                  <Home className="w-4 h-4 text-[#c5a86a]" />
                  <span>Curated Accommodation</span>
                </div>
                <h4 className="text-base font-serif-luxury text-[#181d1a] mb-1">
                  {pkg.accommodationDetails.stayType}
                </h4>
                <p className="text-xs text-[#525a55] leading-relaxed">
                  {pkg.accommodationDetails.description}
                </p>
              </div>

              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0e3826] mb-3">
                  <Car className="w-4 h-4 text-[#c5a86a]" />
                  <span>Transport & Logistics</span>
                </div>
                <p className="text-xs text-[#525a55] leading-relaxed">
                  {pkg.transportArrangements}
                </p>
              </div>
            </div>

            {/* 5. Inclusions and Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0e3826] mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>What is Included</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#525a55]">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#7b8580] mb-4 flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-500" />
                  <span>What is Excluded</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#525a55]">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 6. Customization & Cancellation Terms */}
            <div className="p-6 bg-white border border-[#0e3826]/15 rounded-xs space-y-4">
              <h3 className="text-lg font-serif-luxury text-[#181d1a] border-b border-[#0e3826]/10 pb-3">
                Customization & Cancellation Flexibility
              </h3>
              <div>
                <span className="font-semibold text-xs uppercase tracking-wider text-[#0e3826] block mb-1.5">
                  Available Trip Customizations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pkg.customizationOptions.map((opt, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#f6f1e8] text-[#181d1a] px-3 py-1 rounded-xs border border-[#0e3826]/10"
                    >
                      + {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-[#0e3826]/10 text-xs text-[#525a55]">
                <strong>Cancellation Policy:</strong> {pkg.cancellationTerms}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Enquiry Form & Buttons (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm
                initialDestination={pkg.destination}
                initialResortOrPackage={pkg.title}
                formTitle={`Book or Customize ${pkg.title}`}
                formSubtitle="Our private travel director will confirm schedule feasibility and provide an all-inclusive quotation."
              />

              {/* Direct Concierge Assist */}
              <div className="bg-[#f6f1e8] border border-[#c5a86a]/30 p-6 rounded-xs">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#c5a86a] mb-2">
                  Prefer a Direct Conversation?
                </p>
                <p className="text-xs text-[#525a55] leading-relaxed mb-4">
                  Call or WhatsApp our private travel directors directly to discuss flight timings, dietary requests, or bespoke additions.
                </p>
                <div className="space-y-2 text-xs">
                  <a
                    href="tel:9605990306"
                    className="flex items-center gap-2 text-[#0e3826] font-medium hover:text-[#c5a86a]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 9605990306</span>
                  </a>
                  <a
                    href="mailto:planetroot98@gmail.com"
                    className="flex items-center gap-2 text-[#0e3826] font-medium hover:text-[#c5a86a] break-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>planetroot98@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
