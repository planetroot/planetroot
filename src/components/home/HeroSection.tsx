"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToResorts = () => {
    const el = document.getElementById("featured-resorts-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#071f15]">
      {/* Hero Visual Area with Luxury Resort Photography */}
      <div className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden">
        {/* Background Image: Luxury Kerala Pool Villa & Resort */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=85"
            alt="Luxury Kerala Resort and Private Pool Villa by Planet Root"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-100"
          />

          {/* Gradients matching dark luxury aesthetic from reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071f15] via-transparent to-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headings & CTA matching reference image */}
            <div className="lg:col-span-8 text-left text-white space-y-4">
              {/* Eyebrow */}
              <div className="inline-flex items-center">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#dfcaa2]">
                  DISCOVER EXTRAORDINARY STAYS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight text-white leading-[1.08]">
                Premium <br />
                <span className="text-[#c5a059]">Resort</span> Bookings
              </h1>

              {/* Subtitles matching reference */}
              <div className="pt-1 pb-3 text-sm sm:text-base text-stone-200 font-light leading-relaxed space-y-1">
                <p className="flex items-center gap-2 flex-wrap">
                  <span>Luxury Resorts</span>
                  <span className="text-[#dfcaa2]/70">•</span>
                  <span>Private Pool Villas</span>
                  <span className="text-[#dfcaa2]/70">•</span>
                  <span>Family Stays</span>
                </p>
                <p className="flex items-center gap-2 flex-wrap text-stone-300">
                  <span>Honeymoon Escapes</span>
                  <span className="text-[#dfcaa2]/70">•</span>
                  <span>Nature & Hill Retreats</span>
                </p>
              </div>

              {/* Single Explore Resorts Pill Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToResorts}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#dfcaa2] text-[#092015] hover:bg-[#c5a059] font-medium text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-xl cursor-pointer group"
                >
                  <span>Explore Resorts</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Typographic Accent */}
            <div className="hidden lg:flex lg:col-span-4 justify-end items-center pr-6">
              <div className="text-right text-white select-none drop-shadow-md">
                <p className="font-serif-luxury italic text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white/95 leading-snug">
                  Stay
                </p>
                <p className="font-serif-luxury italic text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white/95 leading-snug pl-6">
                  Explore
                </p>
                <p className="font-serif-luxury italic text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#dfcaa2] leading-snug">
                  Create Memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
