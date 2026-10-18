import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#f6f1e8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Composition (Left 6 Columns) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/5 w-full max-w-lg mx-auto overflow-hidden shadow-lg border border-[#0e3826]/10">
              <Image
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85"
                alt="Kerala backwater sanctuary curated by Planet Root"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Subtle floating editorial quote box */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 bg-white border border-[#0e3826]/15 p-6 max-w-xs shadow-md">
              <p className="font-serif-luxury italic text-sm text-[#0e3826] leading-relaxed">
                “Every journey should feel effortless, every stay feel special, and every experience become a lasting memory.”
              </p>
            </div>
          </div>

          {/* Editorial Text Composition (Right 6 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-3">
              About Planet Root
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#181d1a] tracking-tight leading-tight mb-6">
              Rooted in Discovery. Inspired by the World.
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-[#525a55] font-light leading-relaxed font-sans-luxury">
              <p>
                Planet Root brings together exceptional stays, inspiring destinations, and thoughtfully planned holiday experiences.
              </p>
              <p>
                From premium resort escapes and private pool villas to emerald tea mountain chalets in Munnar, serene backwater houseboats in Kumarakom, and transformative Ayurvedic healing sanctuaries, we help travelers discover the true, soulful essence of God’s Own Country.
              </p>
              <p>
                Our goal is to make every journey feel effortless, every stay feel special, and every experience become a lasting memory.
              </p>
            </div>

            {/* Brand Signature */}
            <div className="mt-8 pt-6 border-t border-[#0e3826]/15 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0e3826]">
                  PLANET ROOT — Beyond Borders.
                </p>
                <p className="text-xs text-[#7b8580] mt-1">Kerala Luxury Travel & Tourism Concierge</p>
              </div>

              <Link
                href="/about"
                className="btn-luxury-primary text-xs tracking-widest inline-flex items-center gap-2"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
