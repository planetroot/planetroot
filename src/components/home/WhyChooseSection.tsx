"use client";

const PILLARS = [
  {
    index: "01",
    title: "Handpicked & Vetted",
    subtitle: "Authentic Hospitality",
    description:
      "Every boutique resort, heritage estate, and private pool villa is evaluated for authentic privacy, cleanliness, and scenic setting before we recommend it.",
  },
  {
    index: "02",
    title: "Direct Partner Rates",
    subtitle: "Zero Hidden Markups",
    description:
      "We coordinate directly with property leadership and trusted ground operators, delivering clear, itemized quotes with complete transparency.",
  },
  {
    index: "03",
    title: "Dedicated Human Planning",
    subtitle: "Direct WhatsApp Assistance",
    description:
      "You speak directly with an experienced specialist who listens to your dates, preferences, and pace — with continuous support throughout your trip.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose-section" className="py-20 sm:py-24 bg-[#061d15] text-white relative overflow-hidden">
      {/* Subtle ambient forest gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.1),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#c5a059] mb-2.5">
            OUR PHILOSOPHY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal tracking-tight text-white">
            Travel Curated With <span className="text-[#dfcaa2]">Quiet Care</span>
          </h2>
        </div>

        {/* 3-Pillar Minimalist Editorial Layout (No stock icons) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="relative bg-[#0a291e]/60 border border-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#c5a059]/40 hover:bg-[#0a291e]"
            >
              <span className="font-serif-luxury text-2xl sm:text-3xl font-light text-[#c5a059]/80 block mb-4">
                {pillar.index}
              </span>

              <h3 className="text-lg sm:text-xl font-serif-luxury font-semibold text-white mb-1">
                {pillar.title}
              </h3>

              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#dfcaa2] mb-3">
                {pillar.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-300/80 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
