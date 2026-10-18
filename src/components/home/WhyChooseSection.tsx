export default function WhyChooseSection() {
  const pillars = [
    {
      num: "01",
      title: "Thoughtfully Curated Stays",
      description:
        "Discover accommodation suited to your preferences and travel plans. Every property in our collection is personally evaluated for architectural character, seclusion, and genuine hospitality.",
    },
    {
      num: "02",
      title: "Personalized Journeys",
      description:
        "Customize your holiday around your interests, dates, and budget. Our private travel directors shape every itinerary without rigid group templates or hurried schedules.",
    },
    {
      num: "03",
      title: "Exceptional Experiences",
      description:
        "Explore distinctive stays, inspiring destinations, and memorable activities — from high-altitude dark sky observatories to private lagoon sandbanks.",
    },
    {
      num: "04",
      title: "Clear Booking Assistance",
      description:
        "Receive transparent information, personalized recommendations, and end-to-end assistance with permits, private aviation, and luxury ground transport.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#fcfbf7] border-y border-[#0e3826]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-3">
            The Planet Root Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
            Why Discerning Travelers Choose Planet Root.
          </h2>
          <div className="divider-luxury w-32 mx-auto mt-6" />
        </div>

        {/* Minimalist 4-Pillar Layout with Thin Dividers & Typography (No generic cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-start relative pt-6 border-t border-[#0e3826]/15 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:pl-8 lg:first:pl-0"
            >
              {/* Refined numeral indicator */}
              <span className="font-serif-luxury text-3xl font-light text-[#c5a86a] mb-4">
                {pillar.num}
              </span>

              {/* Title */}
              <h3 className="text-xl font-serif-luxury text-[#181d1a] mb-3 leading-snug">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#525a55] font-light leading-relaxed font-sans-luxury">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
