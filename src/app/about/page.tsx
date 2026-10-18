import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, Mail, Compass, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Planet Root | Rooted in Discovery. Inspired by the World.",
  description:
    "Planet Root brings together exceptional stays, inspiring destinations, and thoughtfully planned holiday experiences across India and beyond. Beyond Borders.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            The Brand Ethos
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Rooted in Discovery. Inspired by the World.
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#0e3826]">
            PLANET ROOT — Beyond Borders.
          </p>
          <div className="divider-luxury w-28 mx-auto mt-6" />
        </div>
      </section>

      {/* Main Narrative & Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Composition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs border border-[#0e3826]/10 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85"
                alt="Himalayan mountain sanctuary curated by Planet Root"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#0e3826]/10">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                  alt="Pristine island lagoon"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#0e3826]/10">
                <Image
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Stargazing night skies"
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
              Planet Root brings together exceptional stays, inspiring destinations, and thoughtfully planned holiday experiences.
            </p>

            <p>
              From premium resort escapes and private villas to Himalayan adventures, tropical island holidays, and unforgettable nights beneath the stars, we help travelers discover a different side of the world.
            </p>

            <p>
              Our goal is to make every journey feel effortless, every stay feel special, and every experience become a lasting memory.
            </p>

            <div className="p-6 bg-[#f6f1e8] border border-[#0e3826]/10 rounded-xs my-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0e3826] mb-2">
                Our Guiding Curation Standard
              </h3>
              <p className="text-xs sm:text-sm text-[#525a55] leading-relaxed">
                We believe true luxury is personal, natural, and unhurried. Every sanctuary we recommend is evaluated for its authentic connection to its surroundings, the privacy it affords guests, and the genuine warmth of its hospitality.
              </p>
            </div>

            <div className="pt-4 border-t border-[#0e3826]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7b8580]">Direct Concierge Desk</p>
                <a
                  href="tel:9605990306"
                  className="text-lg font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors"
                >
                  9605990306
                </a>
              </div>

              <Link href="/contact" className="btn-luxury-primary text-xs tracking-widest">
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Commitments */}
      <section className="bg-[#f6f1e8] py-20 border-y border-[#0e3826]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl font-serif-luxury text-[#181d1a]">
              The Four Cornerstones of Planet Root
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
              <span className="font-serif-luxury text-3xl font-light text-[#c5a86a] block mb-2">01</span>
              <h3 className="text-base font-serif-luxury text-[#181d1a] mb-2">Authentic Curation</h3>
              <p className="text-xs text-[#525a55] leading-relaxed">
                Properties chosen for character, stunning natural geography, and verified service quality.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
              <span className="font-serif-luxury text-3xl font-light text-[#c5a86a] block mb-2">02</span>
              <h3 className="text-base font-serif-luxury text-[#181d1a] mb-2">End-to-End Ease</h3>
              <p className="text-xs text-[#525a55] leading-relaxed">
                Handling entry permits, private speedboats, 4WD vehicles, and luggage transfers so you simply arrive.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
              <span className="font-serif-luxury text-3xl font-light text-[#c5a86a] block mb-2">03</span>
              <h3 className="text-base font-serif-luxury text-[#181d1a] mb-2">Absolute Transparency</h3>
              <p className="text-xs text-[#525a55] leading-relaxed">
                Enquiry-based reservations with clear price breakdowns and verified inventory. Never fabricated quotes.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#0e3826]/10 rounded-xs">
              <span className="font-serif-luxury text-3xl font-light text-[#c5a86a] block mb-2">04</span>
              <h3 className="text-base font-serif-luxury text-[#181d1a] mb-2">Human-Led Service</h3>
              <p className="text-xs text-[#525a55] leading-relaxed">
                Direct communication with experienced travel directors who listen to your travel aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
