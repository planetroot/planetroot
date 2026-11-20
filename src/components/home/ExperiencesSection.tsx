import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/experiences";

export default function ExperiencesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#092015] text-[#fcfbf7] relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0e3826]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#dfcaa2] block mb-3">
            EXPLORE BY TRAVEL STYLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white tracking-tight leading-tight">
            Curated Travel Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#fcfbf7]/80 font-light leading-relaxed font-sans-luxury">
            From secluded mountain pool villas and Ayurvedic wellness retreats to tranquil backwater houseboats and guided plantation walks.
          </p>
          <div className="divider-luxury-light w-32 mx-auto mt-6" />
        </div>

        {/* Art-Directed Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.slice(0, 6).map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative overflow-hidden border border-[#c5a86a]/20 bg-[#071f15] transition-all duration-500 hover:border-[#c5a86a]/50 ${
                index === 0 || index === 3 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Image with subtle hover zoom */}
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092015] via-[#092015]/40 to-transparent" />
                
                {/* Floating Feeling Pill */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase font-semibold tracking-widest px-3 py-1 bg-[#092015]/85 text-[#dfcaa2] border border-[#c5a86a]/30 backdrop-blur-xs">
                    {exp.feeling}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-serif-luxury text-white mb-2 group-hover:text-[#dfcaa2] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#fcfbf7]/70 font-light leading-relaxed mb-4">
                  {exp.editorialText}
                </p>

                {/* Sensations */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {exp.keySensations.slice(0, 3).map((sens, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-[#dfcaa2]/85 bg-white/5 px-2 py-0.5 rounded-xs"
                    >
                      {sens}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Experiences Link */}
        <div className="mt-14 text-center">
          <Link
            href="/experiences"
            className="btn-luxury-gold text-xs tracking-widest inline-flex items-center gap-2"
          >
            <span>Explore All Travel Experiences</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
