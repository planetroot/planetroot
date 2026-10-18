"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Calendar, Users, Home, MapPin, SlidersHorizontal } from "lucide-react";

export default function QuickBookingBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("all");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2");
  const [accommodationType, setAccommodationType] = useState("all");
  const [budgetRange, setBudgetRange] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination !== "all") params.set("destination", destination);
    if (accommodationType !== "all") params.set("category", accommodationType);
    if (budgetRange !== "all") params.set("budget", budgetRange);
    if (guests) params.set("guests", guests);
    if (dates) params.set("dates", dates);

    router.push(`/stays?${params.toString()}`);
  };

  return (
    <div className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-[#fcfbf7] border border-[#0e3826]/15 shadow-xl p-4 sm:p-6 rounded-sm">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          {/* Destination */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#0e3826]/10 pb-3 lg:pb-0 lg:pr-4">
            <label className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#525a55] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#c5a86a]" />
              <span>Destination</span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[#181d1a] focus:outline-none cursor-pointer"
            >
              <option value="all">All Destinations</option>
              <option value="manali">Manali (Himalayas)</option>
              <option value="lakshadweep">Lakshadweep Islands</option>
              <option value="stargazing">Spiti (Dark Sky)</option>
              <option value="luxury-resorts">Goa & Western Ghats</option>
              <option value="romantic-getaways">Udaipur Royal Lakes</option>
            </select>
          </div>

          {/* Dates */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#0e3826]/10 pb-3 lg:pb-0 lg:pr-4">
            <label className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#525a55] mb-1">
              <Calendar className="w-3.5 h-3.5 text-[#c5a86a]" />
              <span>Travel Dates</span>
            </label>
            <input
              type="text"
              placeholder="Select Season / Dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[#181d1a] placeholder:text-[#525a55]/60 focus:outline-none"
            />
          </div>

          {/* Guests */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#0e3826]/10 pb-3 lg:pb-0 lg:pr-4">
            <label className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#525a55] mb-1">
              <Users className="w-3.5 h-3.5 text-[#c5a86a]" />
              <span>Guests</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[#181d1a] focus:outline-none cursor-pointer"
            >
              <option value="1">1 Solo Guest</option>
              <option value="2">2 Adults (Couple)</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests (Family)</option>
              <option value="5+">5+ Guests (Estate)</option>
            </select>
          </div>

          {/* Accommodation Type */}
          <div className="border-b lg:border-b-0 lg:border-r border-[#0e3826]/10 pb-3 lg:pb-0 lg:pr-4">
            <label className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#525a55] mb-1">
              <Home className="w-3.5 h-3.5 text-[#c5a86a]" />
              <span>Stay Type</span>
            </label>
            <select
              value={accommodationType}
              onChange={(e) => setAccommodationType(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-[#181d1a] focus:outline-none cursor-pointer"
            >
              <option value="all">Any Category</option>
              <option value="Private Pool Villa">Private Pool Villa</option>
              <option value="Beachfront Stay">Beachfront & Lagoon</option>
              <option value="Mountain Retreat">Mountain Retreat</option>
              <option value="Stargazing Escape">Stargazing Domes</option>
              <option value="Romantic Resort">Romantic Resort</option>
              <option value="Boutique Nature Stay">Boutique Nature Stay</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="pt-2 lg:pt-0">
            <button
              type="submit"
              className="w-full btn-luxury-primary py-3.5 text-xs tracking-widest flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Stays</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
