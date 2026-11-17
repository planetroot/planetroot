"use client";

import {
  Globe,
  ShieldCheck,
  Headphones,
  Star,
  Heart,
  Zap,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Globe,
    title: "50+ Destinations",
    subtitle: "India & International",
    description: "From Kerala to Maldives, Rajasthan to Europe — we cover it all.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    subtitle: "Quality Assured",
    description: "Every hotel, villa and resort personally vetted by our team.",
  },
  {
    icon: Star,
    title: "Best Price",
    subtitle: "Guaranteed Rates",
    description: "Direct negotiations with properties ensure the best value.",
  },
  {
    icon: Heart,
    title: "Honeymoon Experts",
    subtitle: "Romance Specialists",
    description: "Dedicated honeymoon planners for the most memorable trip.",
  },
  {
    icon: Zap,
    title: "Custom Itineraries",
    subtitle: "Built Around You",
    description: "No cookie-cutter trips. Every journey crafted for your needs.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "WhatsApp Concierge",
    description: "Our experts are always reachable before and during your trip.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose-section" className="py-16 sm:py-20 bg-[#0a0f1e] text-white overflow-hidden relative">
      {/* Ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#c9a84c] mb-2">
            THE PLANET ROOT DIFFERENCE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal tracking-tight text-white">
            Why Travel with <span className="text-[#c9a84c]">Planet Root</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/4 hover:bg-white/8 border border-white/8 hover:border-[#c9a84c]/30 rounded-2xl p-6 sm:p-7 transition-all duration-300"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/15 border border-[#c9a84c]/25 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c]/25 transition-colors">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#c9a84c] font-medium tracking-wide mt-0.5 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-stone-400/80 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
