import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SITE_CONFIG, createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | Planet Root Travels — Beyond Borders",
  description:
    "Planet Root Travels brings together exceptional luxury resorts, private pool villas, and curated domestic and international holiday experiences. Beyond Borders.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-2.5">
            ABOUT US
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Rooted in Discovery. <span className="text-[#c5a059]">Beyond Borders.</span>
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#0e3826]">
            Planet Root Travels
          </p>
        </div>
      </section>

      {/* Main Narrative & Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Composition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs border border-[#0e3826]/10 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury Kerala backwater resort curated by Planet Root Travels"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#0e3826]/10">
                <Image
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                  alt="Wayanad rainforest canopy treehouse"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#0e3826]/10">
                <Image
                  src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80"
                  alt="Munnar misty tea hill chalet"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-[#525a55] font-light text-base leading-relaxed font-sans-luxury">
            <p className="text-xl sm:text-2xl font-serif-luxury text-[#181d1a] leading-relaxed">
              Planet Root Travels brings together exceptional stays, inspiring destinations, and thoughtfully planned holiday experiences.
            </p>

            <p>
              From premium resort escapes, private pool villas, and misty highland chalets in Munnar and Vagamon to serene backwater houseboats in Alleppey and ancient rainforest sanctuaries in Wayanad, we help travelers discover the true, soulful essence of God’s Own Country and beyond.
            </p>

            <p>
              Our goal is to make every journey feel effortless, every stay feel special, and every experience become a lasting memory. We operate with a dedicated approach for every enquiry — engaging directly on WhatsApp to listen to your preferences, verify resort standards, and tailor stays to your budget.
            </p>

            <div className="p-6 bg-[#f6f1e8] border border-[#0e3826]/10 rounded-xs my-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0e3826] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0e3826]" />
                <span>Our Quality Standard</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#525a55] leading-relaxed">
                Every property in our portfolio is evaluated for location quality, guest privacy, clean amenities, and dependable hospitality before we recommend it.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0e3826]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7b8580]">For Enquiry</p>
                <a
                  href={createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>{SITE_CONFIG.whatsappDisplay}</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0e3826] text-[#dfcaa2] hover:bg-[#164e36] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
