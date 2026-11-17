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
    <section id="why-choose-section" className="py-20 sm:py-24 bg-[#0e1113] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-stone-400 mb-2.5">
            OUR PHILOSOPHY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-white">
            Travel Curated With <span className="font-semibold text-white">Quiet Care</span>
          </h2>
        </div>

        {/* 3-Pillar Minimalist Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <span className="font-mono text-2xl sm:text-3xl font-light text-stone-400 block mb-4">
                {pillar.index}
              </span>

              <h3 className="text-lg sm:text-xl font-medium text-white mb-1">
                {pillar.title}
              </h3>

              <p className="text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-3">
                {pillar.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
