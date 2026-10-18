"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#092015] text-[#fcfbf7] border-t border-[#c5a86a]/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background ambient highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0e3826]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-[#fcfbf7]/10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block bg-[#fcfbf7] p-2.5 rounded-md shadow-xs">
              <Image
                src="/images/planet-root-logo.png"
                alt="PLANET ROOT — Beyond Borders"
                width={200}
                height={65}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-xs uppercase tracking-[0.25em] text-[#c5a86a] font-medium">
              Beyond Borders.
            </p>

            <p className="text-sm text-[#fcfbf7]/75 font-light leading-relaxed max-w-md">
              Planet Root brings together exceptional stays, inspiring destinations, and thoughtfully planned holiday experiences across God’s Own Country. From restored Nalukettu backwater manors and private houseboats to misty tea bungalows in Munnar and wild canopy treehouses in Wayanad.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#164e36]/60 border border-[#c5a86a]/30 text-xs text-[#dfcaa2]">
                <Clock className="w-3.5 h-3.5 text-[#c5a86a]" />
                <span>Concierge Desk: 9:00 AM – 8:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a86a]">
              Kerala Collection
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fcfbf7]/80">
              <li>
                <Link href="/destinations" className="hover:text-[#c5a86a] transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/destinations/kumarakom-alleppey" className="hover:text-[#c5a86a] transition-colors">
                  Kumarakom Backwaters
                </Link>
              </li>
              <li>
                <Link href="/destinations/munnar" className="hover:text-[#c5a86a] transition-colors">
                  Munnar Tea Highlands
                </Link>
              </li>
              <li>
                <Link href="/destinations/wayanad" className="hover:text-[#c5a86a] transition-colors">
                  Wayanad Rainforests
                </Link>
              </li>
              <li>
                <Link href="/destinations/marari-varkala" className="hover:text-[#c5a86a] transition-colors">
                  Marari & Varkala Coast
                </Link>
              </li>
              <li>
                <Link href="/destinations/thekkady-spices" className="hover:text-[#c5a86a] transition-colors">
                  Thekkady Spice Hills
                </Link>
              </li>
            </ul>
          </div>

          {/* Journeys Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a86a]">
              Kerala Journeys
            </h4>
            <ul className="space-y-2.5 text-sm text-[#fcfbf7]/80">
              <li>
                <Link href="/packages/the-grand-kerala-odyssey" className="hover:text-[#c5a86a] transition-colors">
                  The Grand Kerala Odyssey (8D/7N)
                </Link>
              </li>
              <li>
                <Link href="/packages/munnar-misty-highland-retreat" className="hover:text-[#c5a86a] transition-colors">
                  Munnar Misty Highland Retreat
                </Link>
              </li>
              <li>
                <Link href="/packages/backwaters-luxury-houseboat-voyage" className="hover:text-[#c5a86a] transition-colors">
                  Backwaters Houseboat Voyage
                </Link>
              </li>
              <li>
                <Link href="/packages/wayanad-deep-rainforest-escape" className="hover:text-[#c5a86a] transition-colors">
                  Wayanad Deep Rainforest Escape
                </Link>
              </li>
              <li>
                <Link href="/packages/romantic-kerala-honeymoon-haven" className="hover:text-[#c5a86a] transition-colors">
                  Romantic Kerala Honeymoon
                </Link>
              </li>
              <li>
                <Link href="/packages/ayurvedic-rejuvenation-monsoon-wellness" className="hover:text-[#c5a86a] transition-colors">
                  Ayurvedic Rejuvenation Sanctuary
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a86a]">
              Direct Kerala Concierge
            </h4>
            <div className="space-y-3 text-sm text-[#fcfbf7]/85">
              <a
                href="tel:9605990306"
                className="flex items-center gap-3 group hover:text-[#c5a86a] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#164e36] flex items-center justify-center text-[#c5a86a] group-hover:bg-[#c5a86a] group-hover:text-[#092015] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#fcfbf7]/60 uppercase tracking-wider">Phone / WhatsApp</p>
                  <p className="font-medium text-white">9605990306</p>
                </div>
              </a>

              <a
                href="mailto:planetroot98@gmail.com"
                className="flex items-center gap-3 group hover:text-[#c5a86a] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#164e36] flex items-center justify-center text-[#c5a86a] group-hover:bg-[#c5a86a] group-hover:text-[#092015] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#fcfbf7]/60 uppercase tracking-wider">Email Concierge</p>
                  <p className="font-medium text-white break-all">planetroot98@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <div className="w-8 h-8 rounded-full bg-[#164e36] flex items-center justify-center text-[#c5a86a] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-[#fcfbf7]/60 uppercase tracking-wider">Kerala Base</p>
                  <p className="text-xs text-[#fcfbf7]/80">Kochi & Kumarakom • Curating God’s Own Country and Beyond</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#dfcaa2] hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Request Custom Kerala Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Rights Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#fcfbf7]/60 gap-4">
          <p>
            © {currentYear} PLANET ROOT Travel & Tourism. All rights reserved. Beyond Borders.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#fcfbf7]/20">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Cancellation Policy
            </Link>
            <span className="text-[#fcfbf7]/20">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Kerala Concierge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
