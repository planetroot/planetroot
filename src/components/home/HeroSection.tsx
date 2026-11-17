"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";

const CINEMATIC_SCENES = [
  {
    id: 1,
    title: "Misty Mountain Sanctuaries",
    location: "WAYANAD & MUNNAR, KERALA",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2560&q=85",
  },
  {
    id: 2,
    title: "Turquoise Overwater Villas",
    location: "MALDIVES & BALI, INDONESIA",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2560&q=85",
  },
  {
    id: 3,
    title: "Alpine Horizons & Backwaters",
    location: "KASHMIR & ALLEPPEY",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=85",
  },
];

const QUICK_LINKS = [
  { label: "International Tours", target: "packages-section" },
  { label: "Domestic Holidays", target: "packages-section" },
  { label: "Honeymoon Escapes", target: "packages-section" },
  { label: "Kerala Stays & Villas", target: "featured-resorts-section" },
];

export default function HeroSection() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  // Auto crossfade cinematic scenes every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % CINEMATIC_SCENES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentScene = CINEMATIC_SCENES[activeSceneIndex];

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0b0d0e]">
      {/* Hero Visual Stage */}
      <div className="relative min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] flex items-center justify-center overflow-hidden">
        
        {/* Layer 1: Background Images with Cinematic Slow Ken Burns Drift & Crossfade */}
        {CINEMATIC_SCENES.map((scene, index) => {
          const isActive = index === activeSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={scene.image}
                alt={`${scene.title} — Planet Root Travels`}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center ${
                  isActive ? "animate-kenburns" : ""
                }`}
              />
            </div>
          );
        })}

        {/* Layer 2: Cinematic Anamorphic Letterbox & Vignette Overlays */}
        {/* Deep cinematic radial gradient that darkens edges and highlights center */}
        <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(11,13,14,0.65)_70%,rgba(11,13,14,0.92)_100%)] pointer-events-none" />

        {/* Top letterbox fade for fixed navbar integration */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0b0d0e] via-[#0b0d0e]/60 to-transparent z-1 pointer-events-none" />

        {/* Bottom letterbox fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0b0d0e] via-[#0b0d0e]/70 to-transparent z-1 pointer-events-none" />

        {/* Layer 3: Subtle 35mm Film Grain / Texture */}
        <div
          className="absolute inset-0 z-2 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 4: Cinematic Ambient Light Glow Behind Center Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full bg-white/[0.04] blur-3xl pointer-events-none animate-cinematic-glow z-2" />

        {/* Layer 5: Viewfinder Corner Markers (Cinematic Camera Frame) */}
        <div className="absolute inset-8 sm:inset-12 lg:inset-16 z-3 pointer-events-none hidden md:block">
          {/* Top-Left */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
          {/* Top-Right */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
          {/* Bottom-Left */}
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
          {/* Bottom-Right */}
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
        </div>

        {/* Layer 6: Main Centered Editorial Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-40 pb-20 sm:pb-28">
          {/* Cinematic Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/15 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.32em] uppercase text-stone-200">
              Planet Root • Beyond Borders
            </p>
          </div>

          {/* Professional Modern Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-light tracking-tight text-white leading-[1.08] mb-6">
            Handcrafted Stays &amp; <br />
            <span className="font-semibold text-white drop-shadow-sm">Tailored Journeys</span>
          </h1>

          {/* Clean 1-Sentence Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed mb-9">
            Curated private pool villas, boutique resorts, honeymoon escapes, and custom international tours crafted around your pace.
          </p>

          {/* Clean White and Transparent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            {/* White Solid Button */}
            <button
              type="button"
              onClick={() => scrollTo("packages-section")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-stone-200 text-black font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Transparent Glass Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>For Enquiry</span>
            </a>
          </div>
        </div>

        {/* Layer 7: Cinematic Scene Indicator (Bottom Right) */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-10 hidden sm:flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <Compass className="w-3.5 h-3.5 text-stone-300 animate-spin" style={{ animationDuration: "20s" }} />
          <span className="text-[10px] tracking-widest uppercase font-medium text-stone-300">
            {currentScene.location}
          </span>
          <div className="flex items-center gap-1.5 ml-1">
            {CINEMATIC_SCENES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveSceneIndex(idx)}
                aria-label={`Jump to scene ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === activeSceneIndex ? "w-5 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#0b0d0e]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center divide-x divide-white/10 text-stone-300">
            {QUICK_LINKS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.target)}
                className="px-5 sm:px-8 py-3.5 sm:py-4 hover:text-white transition-colors cursor-pointer tracking-wider uppercase font-medium text-[11px]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
