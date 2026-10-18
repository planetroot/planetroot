"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Check, ArrowRight, SlidersHorizontal, ShieldCheck, X } from "lucide-react";
import { RESORTS, Resort } from "@/data/resorts";

function StaysContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialDest = searchParams.get("destination") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedDestination, setSelectedDestination] = useState<string>(initialDest);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedAmenity, setSelectedAmenity] = useState<string>("all");

  const categories = [
    "all",
    "Private Pool Villa",
    "Beachfront Stay",
    "Mountain Retreat",
    "Stargazing Escape",
    "Romantic Resort",
    "Boutique Nature Stay",
  ];

  const destinations = [
    "all",
    "manali",
    "lakshadweep",
    "stargazing",
    "luxury-resorts",
    "romantic-getaways",
  ];

  const commonAmenities = [
    "Private Infinity Pool",
    "Lagoon Access",
    "Hydrotherapy Spa",
    "Observatory Telescope",
    "Dedicated Butler",
  ];

  const filteredResorts = useMemo(() => {
    return RESORTS.filter((resort) => {
      // Category filter
      if (selectedCategory !== "all" && resort.category !== selectedCategory) {
        return false;
      }
      // Destination filter
      if (selectedDestination !== "all" && resort.destinationSlug !== selectedDestination) {
        return false;
      }
      // Amenity filter
      if (selectedAmenity !== "all") {
        const hasAmenity = resort.verifiedAmenities.some((a) =>
          a.toLowerCase().includes(selectedAmenity.toLowerCase())
        );
        if (!hasAmenity) return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = resort.name.toLowerCase().includes(q);
        const matchDest = resort.destination.toLowerCase().includes(q);
        const matchDesc = resort.description.toLowerCase().includes(q);
        if (!matchName && !matchDest && !matchDesc) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedDestination, selectedAmenity, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedDestination("all");
    setSelectedAmenity("all");
    setSearchQuery("");
  };

  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            The Planet Root Collection
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury text-[#181d1a] tracking-tight">
            Exceptional Luxury Stays
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#525a55] font-light leading-relaxed">
            Handpicked private pool villas, overwater lagoon sanctuaries, snow-view alpine chalets, and dark-sky geodesic domes.
          </p>
          <div className="divider-luxury w-28 mx-auto mt-6" />
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white border border-[#0e3826]/15 p-6 shadow-xs rounded-sm">
          {/* Top row: search & category pills */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pb-6 border-b border-[#0e3826]/10">
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#525a55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by stay name, location, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#f6f1e8] text-sm text-[#181d1a] placeholder:text-[#525a55]/60 border border-transparent focus:border-[#0e3826] focus:bg-white focus:outline-none transition-colors rounded-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-[#f6f1e8] border border-transparent text-sm text-[#181d1a] px-3.5 py-2.5 focus:border-[#0e3826] focus:bg-white focus:outline-none rounded-xs cursor-pointer"
              >
                <option value="all">All Regions</option>
                <option value="manali">Manali & Himalayas</option>
                <option value="lakshadweep">Lakshadweep Atolls</option>
                <option value="stargazing">Spiti (Dark Sky)</option>
                <option value="luxury-resorts">Goa & Western Ghats</option>
                <option value="romantic-getaways">Udaipur Royal Lakes</option>
              </select>
            </div>

            <div className="md:col-span-3 flex items-center justify-between gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#f6f1e8] border border-transparent text-sm text-[#181d1a] px-3.5 py-2.5 focus:border-[#0e3826] focus:bg-white focus:outline-none rounded-xs cursor-pointer"
              >
                <option value="all">All Stay Types</option>
                <option value="Private Pool Villa">Private Pool Villa</option>
                <option value="Beachfront Stay">Beachfront & Lagoon</option>
                <option value="Mountain Retreat">Mountain Retreat</option>
                <option value="Stargazing Escape">Stargazing Escape</option>
                <option value="Romantic Resort">Romantic Resort</option>
                <option value="Boutique Nature Stay">Boutique Nature Stay</option>
              </select>

              {(selectedCategory !== "all" || selectedDestination !== "all" || selectedAmenity !== "all" || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="px-3 py-2 text-xs uppercase tracking-wider text-[#0e3826] hover:bg-[#0e3826]/10 rounded-xs transition-colors shrink-0"
                  title="Reset all filters"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#7b8580] mr-2 shrink-0">
              Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 whitespace-nowrap transition-all rounded-xs ${
                  selectedCategory === cat
                    ? "bg-[#0e3826] text-white font-medium"
                    : "bg-[#f6f1e8] text-[#525a55] hover:text-[#0e3826]"
                }`}
              >
                {cat === "all" ? "All Stays" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resorts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 text-xs text-[#525a55]">
          <span>
            Showing <strong className="text-[#181d1a]">{filteredResorts.length}</strong> verified luxury sanctuaries
          </span>
          <div className="flex items-center gap-1.5 text-[#0e3826]">
            <ShieldCheck className="w-4 h-4" />
            <span>Enquiry-based reservation guarantee</span>
          </div>
        </div>

        {filteredResorts.length === 0 ? (
          <div className="bg-white border border-[#0e3826]/10 p-12 text-center my-12">
            <h3 className="text-xl font-serif-luxury text-[#181d1a] mb-2">No stays match your criteria</h3>
            <p className="text-sm text-[#525a55] mb-6">
              Try adjusting your region or accommodation type filter, or connect with our concierge for bespoke requests.
            </p>
            <button onClick={resetFilters} className="btn-luxury-primary text-xs tracking-widest">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredResorts.map((resort) => (
              <article
                key={resort.id}
                className="group bg-white border border-[#0e3826]/10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-[#0e3826]/30"
              >
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#e8e0d2]">
                    <Image
                      src={resort.heroImage}
                      alt={resort.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 bg-white/95 text-[#0e3826] shadow-xs">
                        {resort.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-1.5 text-xs text-[#c5a86a] font-medium tracking-wider uppercase mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{resort.destination}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif-luxury text-[#181d1a] group-hover:text-[#0e3826] transition-colors leading-snug mb-3">
                      <Link href={`/stays/${resort.slug}`}>{resort.name}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#525a55] font-light leading-relaxed mb-5 line-clamp-3">
                      {resort.description}
                    </p>

                    <div className="pt-4 border-t border-[#0e3826]/10 mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {resort.verifiedAmenities.slice(0, 3).map((amenity, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] text-[#525a55] bg-[#f6f1e8] px-2.5 py-1 rounded-xs flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-[#0e3826]" />
                            <span>{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#0e3826]/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#7b8580] uppercase tracking-wider">Verified Stay</p>
                    <p className="text-sm font-semibold text-[#0e3826] mt-0.5">
                      {resort.pricePerNight}
                    </p>
                  </div>

                  <Link
                    href={`/stays/${resort.slug}`}
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0e3826] group-hover:text-[#c5a86a] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Stay</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function StaysPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-[#525a55]">Loading Luxury Stays...</div>}>
      <StaysContent />
    </Suspense>
  );
}
