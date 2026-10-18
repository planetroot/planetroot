"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const scrollToDestinations = () => {
    const el = document.getElementById("destinations-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#071f15]">
      {/* Background Image: Iconic luxury Kerala resort overlooking tranquil backwaters */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury Kerala Backwaters by Planet Root"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-cinematic-zoom scale-100"
        />

        {/* Cinematic Multi-layered Dark Scrim Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f15] via-[#071f15]/45 to-black/55" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#071f15]/30 to-[#071f15]/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#fcfbf7] pt-28 pb-20">
        {/* Brand Statement Tagline */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dfcaa2]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#dfcaa2]">
            PLANET ROOT — Beyond Borders.
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-normal tracking-tight text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-sm">
          Find Your Place in God’s Own Country.
        </h1>

        {/* Supporting Text */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-light text-[#fcfbf7]/90 max-w-2xl mx-auto leading-relaxed font-sans-luxury">
          Private backwater houseboats. Misty tea hill sanctuaries. Secluded Arabian Sea shores. Journeys crafted with the timeless soul of Kerala.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/destinations"
            className="w-full sm:w-auto btn-luxury-gold shadow-lg hover:shadow-xl"
          >
            <span>Explore Destinations</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>

          <Link
            href="/packages"
            className="w-full sm:w-auto btn-luxury-white"
          >
            <span>Curated Tour Packages</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Kerala Brand Assurance Indicator */}
        <div className="mt-14 pt-8 border-t border-white/15 max-w-xl mx-auto flex items-center justify-center gap-6 sm:gap-8 text-[11px] tracking-[0.2em] uppercase text-white/75 flex-wrap">
          <span>Curated Kerala Journeys</span>
          <span className="w-1 h-1 rounded-full bg-[#c5a86a]" />
          <span>Private Houseboats</span>
          <span className="w-1 h-1 rounded-full bg-[#c5a86a]" />
          <span>Misty Tea Hills</span>
          <span className="w-1 h-1 rounded-full bg-[#c5a86a]" />
          <span>Ayurvedic Wellness</span>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <button
        onClick={scrollToDestinations}
        aria-label="Scroll to destinations"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-light">Scroll to Explore</span>
        <div className="w-7 h-11 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-white transition-colors">
          <div className="w-1.5 h-2.5 rounded-full bg-[#dfcaa2] animate-bounce mt-1" />
        </div>
      </button>
    </section>
  );
}
