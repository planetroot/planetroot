import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  MapPin,
  Check,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { TOUR_PACKAGES, TourPackage } from "@/data/packages";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { SITE_CONFIG, createWhatsAppUrl } from "@/config/site";

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
    title: `${pkg.title} | ${pkg.duration} Curated Holiday`,
    description: pkg.overview,
    openGraph: {
      title: `${pkg.title} | Planet Root Travels`,
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

  const quickEnquiryText = `Hello Planet Root Travels! I would like to enquire about the "${pkg.title}" package (${pkg.duration}, ${pkg.destination}).`;
  const directWhatsAppUrl = createWhatsAppUrl(quickEnquiryText);

  return (
    <div className="pt-24 pb-24 bg-[#fcfbf7]">
      {/* Top Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0e3826] hover:text-[#c5a86a] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Packages</span>
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

          <div className="lg:text-right flex flex-col items-start lg:items-end gap-2">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7b8580] block">
                Starting Rate
              </span>
              <p className="text-2xl font-serif-luxury font-semibold text-[#0e3826] mt-0.5">
                {pkg.startingPrice}
              </p>
              {pkg.priceNote && (
                <p className="text-[11px] text-[#525a55] mt-1 max-w-xs">{pkg.priceNote}</p>
              )}
            </div>

            {/* Quick WhatsApp Action */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e3826] text-[#dfcaa2] hover:bg-[#164e36] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#dfcaa2]" />
              <span>Enquire About This Package</span>
            </a>
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
          <div className="lg:col-span-7 space-y-12">
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

            {/* 2. Advisory Notice (if any) */}
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
                Day-by-Day Experience
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

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#0e3826]/10">
                      {day.highlights.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-[#0e3826] bg-[#f6f1e8] px-2.5 py-1 rounded-xs"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
                <h3 className="text-base font-serif-luxury text-[#0e3826] font-semibold mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0e3826]" />
                  <span>Curated Inclusions</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#525a55]">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0e3826] mt-1 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
                <h3 className="text-base font-serif-luxury text-[#7b8580] font-semibold mb-4">
                  Exclusions
                </h3>
                <ul className="space-y-2 text-xs text-[#7b8580]">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1 shrink-0" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky WhatsApp Enquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm
                initialDestination={pkg.destination}
                initialResortOrPackage={pkg.title}
                formTitle={`Enquire for ${pkg.title}`}
                formSubtitle="Our senior travel director will verify seasonal rates, vehicle logistics, and present your bespoke itinerary on WhatsApp."
              />

              {/* Direct Concierge Contact Card */}
              <div className="bg-[#f6f1e8] border border-[#c5a86a]/30 p-6 rounded-xs">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#c5a86a] mb-1.5">
                  Have Custom Dates or Questions?
                </p>
                <p className="text-xs text-[#525a55] leading-relaxed mb-4">
                  We modify any itinerary to match your family size, honeymoon preferences, or flight schedules.
                </p>
                <div className="space-y-2 text-xs">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#0e3826] font-semibold hover:text-[#c5a86a]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp: {SITE_CONFIG.whatsappDisplay}</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-2 text-[#0e3826] font-medium hover:text-[#c5a86a]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: {SITE_CONFIG.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-2 text-[#0e3826] font-medium hover:text-[#c5a86a] break-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{SITE_CONFIG.email}</span>
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
