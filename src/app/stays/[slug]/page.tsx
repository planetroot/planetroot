import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Check,
  ShieldCheck,
  ArrowLeft,
  Calendar,
  Users,
  Maximize2,
  Sparkles,
  Phone,
  Mail,
  Info,
} from "lucide-react";
import { RESORTS, Resort } from "@/data/resorts";
import EnquiryForm from "@/components/forms/EnquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESORTS.map((resort) => ({
    slug: resort.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resort = RESORTS.find((r) => r.slug === slug);
  if (!resort) return { title: "Resort Not Found" };

  return {
    title: `${resort.name} | Luxury Stay`,
    description: resort.description,
    openGraph: {
      title: `${resort.name} | PLANET ROOT`,
      description: resort.description,
      images: [{ url: resort.heroImage }],
    },
  };
}

export default async function ResortDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resort = RESORTS.find((r) => r.slug === slug);

  if (!resort) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24 bg-[#fcfbf7]">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <Link
          href="/stays"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0e3826] hover:text-[#c5a86a] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Stays</span>
        </Link>
      </div>

      {/* Main Title & Tagline Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#0e3826]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] mb-2">
              <MapPin className="w-4 h-4 text-[#0e3826]" />
              <span>{resort.destination}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
              {resort.name}
            </h1>
            <p className="mt-2 text-base text-[#0e3826] font-serif-luxury italic">
              {resort.tagline}
            </p>
          </div>

          <div className="lg:text-right">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7b8580] block">
              Curated Luxury Rate
            </span>
            <p className="text-2xl font-serif-luxury font-semibold text-[#0e3826] mt-0.5">
              {resort.pricePerNight}
            </p>
            <p className="text-[11px] text-[#525a55] mt-1 max-w-xs lg:ml-auto">
              {resort.priceNote}
            </p>
          </div>
        </div>
      </section>

      {/* Photography Gallery (Editorial Asymmetric Showcase) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Large Hero Photo (8 cols) */}
          <div className="md:col-span-8 relative aspect-16/10 md:aspect-auto md:h-[500px] overflow-hidden rounded-xs border border-[#0e3826]/10">
            <Image
              src={resort.heroImage}
              alt={resort.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 bg-[#0e3826] text-[#fcfbf7] shadow-sm">
                {resort.category}
              </span>
            </div>
          </div>

          {/* Side Thumbnail Grid (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            {resort.galleryImages.slice(1, 3).map((imgUrl, i) => (
              <div
                key={i}
                className="relative aspect-4/3 md:aspect-auto md:h-[242px] overflow-hidden rounded-xs border border-[#0e3826]/10"
              >
                <Image
                  src={imgUrl}
                  alt={`${resort.name} gallery ${i + 2}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking Enquiry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Details, Villas, Amenities, Policies (7 cols) */}
          <div className="lg:col-span-7 space-y-14">
            {/* 1. Property Story & Long Description */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
                Property Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#181d1a] mb-4">
                The Essence of the Sanctuary
              </h2>
              <p className="text-sm sm:text-base text-[#525a55] font-light leading-relaxed mb-6 font-sans-luxury">
                {resort.longDescription}
              </p>
              <div className="p-4 bg-[#f6f1e8] border-l-2 border-[#0e3826] rounded-xs text-xs text-[#525a55] leading-relaxed">
                <strong>Location Context:</strong> {resort.locationSummary}
              </div>
            </div>

            {/* 2. Curated Highlights */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
                Distinctive Features
              </span>
              <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-6">
                Curated Property Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resort.curatedHighlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-[#0e3826]/10 rounded-xs flex items-start gap-3"
                  >
                    <Sparkles className="w-4 h-4 text-[#c5a86a] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#181d1a] font-light leading-snug">
                      {hl}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Villa & Suite Inventory */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
                Accommodations
              </span>
              <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-6">
                Villas & Suites Available
              </h2>
              <div className="space-y-6">
                {resort.villas.map((villa) => (
                  <div
                    key={villa.id}
                    className="bg-white border border-[#0e3826]/15 overflow-hidden rounded-xs flex flex-col md:flex-row shadow-xs"
                  >
                    <div className="relative md:w-5/12 aspect-16/10 md:aspect-auto overflow-hidden">
                      <Image
                        src={villa.image}
                        alt={villa.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-7/12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl font-serif-luxury text-[#181d1a]">
                            {villa.name}
                          </h3>
                          {villa.priceIndication && (
                            <span className="text-xs font-semibold text-[#0e3826]">
                              {villa.priceIndication}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs text-[#525a55] mb-4">
                          <div className="flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#c5a86a]" />
                            <span>{villa.size}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-[#c5a86a]" />
                            <span>{villa.occupancy}</span>
                          </div>
                          <div className="col-span-2 text-[11px] text-[#7b8580]">
                            <strong>Bedding:</strong> {villa.bedType}
                          </div>
                          <div className="col-span-2 text-[11px] text-[#7b8580]">
                            <strong>View:</strong> {villa.view}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#0e3826]/10">
                          {villa.features.map((feat, i) => (
                            <span
                              key={i}
                              className="text-[10px] text-[#0e3826] bg-[#f6f1e8] px-2 py-0.5 rounded-xs"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Verified Amenities */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
                Facilities
              </span>
              <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-6">
                Verified On-Site Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resort.verifiedAmenities.map((am, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 bg-white border border-[#0e3826]/10 text-xs text-[#181d1a]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#0e3826] shrink-0" />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Policies & Arrival Information */}
            <div className="p-6 bg-white border border-[#0e3826]/15 rounded-xs space-y-4">
              <h3 className="text-lg font-serif-luxury text-[#181d1a] border-b border-[#0e3826]/10 pb-3">
                Reservation Terms & Arrival Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-semibold text-[#181d1a] block">Check-in / Check-out:</span>
                  <p className="text-[#525a55] mt-0.5">Check-in: {resort.policies.checkIn} | Check-out: {resort.policies.checkOut}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#181d1a] block">Cancellation Flexibility:</span>
                  <p className="text-[#525a55] mt-0.5">{resort.policies.cancellation}</p>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold text-[#181d1a] block">Child & Extra Bed Policy:</span>
                  <p className="text-[#525a55] mt-0.5">{resort.policies.childPolicy}</p>
                </div>
                {resort.policies.additionalNote && (
                  <div className="sm:col-span-2 pt-2 border-t border-[#0e3826]/10 text-[11px] text-[#0e3826]">
                    <strong>Transfer Note:</strong> {resort.policies.additionalNote}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Enquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm
                initialDestination={resort.destination}
                initialResortOrPackage={resort.name}
                formTitle={`Enquire for ${resort.name}`}
                formSubtitle="Our private travel director will confirm room category availability and provide a tailored quote."
              />

              {/* Direct Concierge Assist Card */}
              <div className="bg-[#f6f1e8] border border-[#c5a86a]/30 p-6 rounded-xs">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#c5a86a] mb-2">
                  Need Immediate Concierge Advice?
                </p>
                <p className="text-xs text-[#525a55] leading-relaxed mb-4">
                  Speak directly with our senior travel director for customized dates, villa choices, or helicopter transfers.
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
