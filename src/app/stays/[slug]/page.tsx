import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Check,
  ArrowLeft,
  Users,
  Maximize2,
  Phone,
  Mail,
  MessageCircle,
  FileText,
} from "lucide-react";
import { RESORTS, Resort } from "@/data/resorts";
import { getAllResorts } from "@/lib/resorts-storage";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { SITE_CONFIG, createWhatsAppUrl } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const resorts = getAllResorts();
  return resorts.map((resort) => ({
    slug: resort.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resorts = getAllResorts();
  const resort = resorts.find((r) => r.slug === slug);
  if (!resort) return { title: "Resort Not Found" };

  return {
    title: `${resort.name} | Luxury Resort Booking`,
    description: resort.description,
    openGraph: {
      title: `${resort.name} | Planet Root Travels`,
      description: resort.description,
      images: [{ url: resort.heroImage }],
    },
  };
}

export default async function ResortDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resorts = getAllResorts();
  const resort = resorts.find((r) => r.slug === slug);

  if (!resort) {
    notFound();
  }

  const quickEnquiryText = `Hello Planet Root Travels! I would like to enquire about availability and rates for ${resort.name} (${resort.destination}).`;
  const directWhatsAppUrl = createWhatsAppUrl(quickEnquiryText);

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

          <div className="lg:text-right flex flex-col items-start lg:items-end gap-2">
            {resort.pricePerNight && (
              <div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#7b8580] block">
                  Starting Rate
                </span>
                <p className="text-2xl font-serif-luxury font-semibold text-[#0e3826]">
                  {resort.pricePerNight}
                </p>
                {resort.priceNote && (
                  <p className="text-[11px] text-[#525a55] mt-0.5 max-w-xs">{resort.priceNote}</p>
                )}
              </div>
            )}

            {/* Actions: WhatsApp Enquiry & Brochure PDF */}
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {resort.brochurePdf && (
                <a
                  href={resort.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#0e3826] border border-[#0e3826]/30 hover:bg-[#f6f1e8] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-[#c5a86a]" />
                  <span>Brochure (PDF)</span>
                </a>
              )}

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e3826] text-[#dfcaa2] hover:bg-[#164e36] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#dfcaa2]" />
                <span>Enquire About This Resort</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Gallery */}
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
                  alt={`${resort.name} gallery image ${i + 2}`}
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
          {/* Left Column: Details, Highlights, Villas, Amenities, Policies (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            {/* 1. Property Overview */}
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
            {resort.curatedHighlights && resort.curatedHighlights.length > 0 && (
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
                      <Check className="w-4 h-4 text-[#0e3826] shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-[#181d1a] font-light leading-snug">
                        {hl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Villa & Suite Inventory */}
            {resort.villas && resort.villas.length > 0 && (
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
            )}

            {/* Full Property Photo Gallery */}
            {resort.galleryImages && resort.galleryImages.length > 3 && (
              <div>
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-1.5">
                  PROPERTY GALLERY
                </p>
                <h2 className="text-2xl font-serif-luxury text-[#181d1a] mb-5">
                  Experience {resort.name} in Photos
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {resort.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-4/3 overflow-hidden rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 group"
                    >
                      <Image
                        src={img}
                        alt={`${resort.name} photograph ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Verified Amenities */}
            {resort.verifiedAmenities && resort.verifiedAmenities.length > 0 && (
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
            )}

            {/* 5. Policies & Arrival Information */}
            <div className="p-6 bg-white border border-[#0e3826]/15 rounded-xs space-y-4">
              <h3 className="text-lg font-serif-luxury text-[#181d1a] border-b border-[#0e3826]/10 pb-3">
                Reservation Terms & Arrival Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-semibold text-[#181d1a] block">Check-in / Check-out:</span>
                  <p className="text-[#525a55] mt-0.5">
                    Check-in: {resort.policies.checkIn} | Check-out: {resort.policies.checkOut}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-[#181d1a] block">Cancellation Policy:</span>
                  <p className="text-[#525a55] mt-0.5">{resort.policies.cancellation}</p>
                </div>
                <div className="sm:col-span-2">
                  <span className="font-semibold text-[#181d1a] block">Child & Family Policy:</span>
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

          {/* Right Column: Sticky WhatsApp Enquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm
                initialDestination={resort.destination}
                initialResortOrPackage={resort.name}
                initialStayType={resort.category}
                formTitle={`Enquire for ${resort.name}`}
                formSubtitle="Our team will confirm room category availability, check seasonal rates, and prepare a personalized quote via WhatsApp."
              />

              {/* Direct Concierge Contact Card */}
              <div className="bg-[#f6f1e8] border border-[#c5a86a]/30 p-6 rounded-xs">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#c5a86a] mb-1.5">
                  Direct Concierge Support
                </p>
                <p className="text-xs text-[#525a55] leading-relaxed mb-4">
                  Prefer a quick chat? Talk directly with our travel director about customized dates or special arrangements.
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
