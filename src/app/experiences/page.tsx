import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Heart, Compass } from "lucide-react";
import { EXPERIENCES } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Travel Experiences & Holiday Themes | PLANET ROOT",
  description:
    "Explore bespoke holiday experiences with Planet Root: private rainforest pool villas, authentic Ayurvedic therapies, mountain treks, backwater houseboats, and coastal retreats.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-28 pb-24 bg-[#092015] text-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#dfcaa2] block mb-2">
            Curated Travel Experiences
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-white tracking-tight">
            Distinctive Ways to Travel
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#fcfbf7]/80 font-light leading-relaxed">
            From secluded rainforest pool villas and restorative Ayurvedic treatments to private backwater cruises and highland plantation walks.
          </p>
          <div className="divider-luxury-light w-28 mx-auto mt-6" />
        </div>
      </section>

      {/* Editorial Experiences List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {EXPERIENCES.map((exp, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <article
              key={exp.id}
              className="bg-[#071f15] border border-[#c5a86a]/20 overflow-hidden shadow-lg transition-all"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                {/* Visual */}
                <div className={`lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-[480px] overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-3.5 py-1 bg-[#092015]/90 text-[#dfcaa2] border border-[#c5a86a]/30">
                      {exp.feeling}
                    </span>
                  </div>
                </div>

                {/* Editorial Text */}
                <div className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#dfcaa2] mb-2">
                    {exp.idealLocation}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white mb-2">
                    {exp.title}
                  </h2>
                  <p className="text-sm font-serif-luxury italic text-[#dfcaa2] mb-5">
                    “{exp.tagline}”
                  </p>
                  <p className="text-sm text-[#fcfbf7]/80 font-light leading-relaxed mb-6">
                    {exp.editorialText}
                  </p>

                  {/* Sensations */}
                  <div className="space-y-2 mb-8">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#dfcaa2] block mb-1">
                      Experience Highlights:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.keySensations.map((sens, i) => (
                        <span
                          key={i}
                          className="text-xs text-[#dfcaa2] bg-white/5 border border-[#c5a86a]/20 px-3 py-1 rounded-xs"
                        >
                          ✦ {sens}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/contact?experience=${encodeURIComponent(exp.title)}`}
                      className="btn-luxury-gold text-xs tracking-widest inline-flex items-center gap-2"
                    >
                      <span>Plan This Experience</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Bottom Quote Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center mt-24 pt-16 border-t border-white/10">
        <p className="text-2xl sm:text-3xl font-serif-luxury italic text-white/90">
          “Travel is the only purchase that enriches the human spirit forever.”
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-[#dfcaa2] mt-4">
          PLANET ROOT — Beyond Borders.
        </p>
      </section>
    </div>
  );
}
