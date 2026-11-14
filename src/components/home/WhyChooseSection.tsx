"use client";

import {
  Bed,
  ShieldCheck,
  Tag,
  Users,
  Leaf,
  Headphones,
} from "lucide-react";

export default function WhyChooseSection() {
  const benefits = [
    {
      icon: Bed,
      title: "Premium",
      subtitle: "Resort Bookings",
    },
    {
      icon: ShieldCheck,
      title: "Verified",
      subtitle: "Properties",
    },
    {
      icon: Tag,
      title: "Best Price",
      subtitle: "Guarantee",
    },
    {
      icon: Users,
      title: "Family Friendly",
      subtitle: "Stays",
    },
    {
      icon: Leaf,
      title: "Nature & Luxury",
      subtitle: "Experiences",
    },
    {
      icon: Headphones,
      title: "24/7",
      subtitle: "Support",
    },
  ];

  return (
    <section id="why-choose-section" className="py-12 sm:py-16 bg-[#072016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-[#dfcaa2] mb-1.5">
            THE PLANET ROOT DISTINCTION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-normal tracking-tight text-white">
            Why Choose <span className="text-[#c5a059]">Planet Root</span>
          </h2>
        </div>

        {/* 6 Icons & Labels Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 items-center justify-center">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center group"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[#dfcaa2] group-hover:scale-110 group-hover:text-white transition-transform mb-2.5">
                  <Icon className="w-8 h-8 stroke-1 text-[#dfcaa2]" />
                </div>
                <h3 className="text-xs sm:text-sm font-serif-luxury font-medium text-white/95 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#dfcaa2]/80 font-light mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
