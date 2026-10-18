"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Luxury Stays", href: "/stays" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tour Packages", href: "/packages" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  // On homepage before scroll, we use transparent header with white text; on other pages or after scroll, solid luxury header
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? "bg-gradient-to-b from-black/75 via-black/35 to-transparent text-white pt-4 pb-4"
            : "bg-[#fcfbf7]/95 backdrop-blur-md text-[#181d1a] border-b border-[#0e3826]/10 shadow-xs py-3"
        }`}
      >
        {/* Top announcement / phone strip (subtle, editorial) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-95"
            >
              <div
                className={`transition-all duration-300 rounded-md p-1.5 flex items-center justify-center ${
                  isTransparent
                    ? "bg-white/95 shadow-md backdrop-blur-sm"
                    : "bg-transparent"
                }`}
              >
                <Image
                  src="/images/planet-root-logo.png"
                  alt="PLANET ROOT — Beyond Borders"
                  width={190}
                  height={62}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] tracking-[0.14em] uppercase transition-all duration-200 relative py-1 ${
                      isTransparent
                        ? isActive
                          ? "text-[#dfcaa2] font-semibold"
                          : "text-white/90 hover:text-white"
                        : isActive
                        ? "text-[#0e3826] font-semibold"
                        : "text-[#181d1a]/80 hover:text-[#0e3826]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                          isTransparent ? "bg-[#c5a86a]" : "bg-[#0e3826]"
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Action & Contact */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:9605990306"
                className={`flex items-center gap-2 text-xs tracking-wider transition-colors ${
                  isTransparent
                    ? "text-white/80 hover:text-white"
                    : "text-[#525a55] hover:text-[#0e3826]"
                }`}
                title="Call Planet Root Travel Specialist"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a86a]" />
                <span className="font-medium">9605990306</span>
              </a>

              <Link
                href="/contact"
                className={`text-xs uppercase tracking-[0.15em] font-medium px-5 py-2.5 rounded-sm transition-all duration-300 border flex items-center gap-1.5 ${
                  isTransparent
                    ? "bg-[#c5a86a] text-[#092015] border-[#c5a86a] hover:bg-[#dfcaa2] hover:border-[#dfcaa2]"
                    : "bg-[#0e3826] text-[#fcfbf7] border-[#0e3826] hover:bg-[#164e36]"
                }`}
              >
                <span>Plan Your Holiday</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/contact"
                className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-sm bg-[#c5a86a] text-[#092015]"
              >
                Plan Trip
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md transition-colors ${
                  isTransparent
                    ? "text-white bg-black/40 hover:bg-black/60"
                    : "text-[#0e3826] bg-[#0e3826]/5 hover:bg-[#0e3826]/10"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#fcfbf7] text-[#181d1a] animate-fadeIn">
          {/* Top drawer header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#0e3826]/10">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/images/planet-root-logo.png"
                alt="PLANET ROOT"
                width={160}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#0e3826] hover:bg-[#0e3826]/5 rounded-md"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-xl font-serif-luxury tracking-wide transition-colors ${
                    isActive
                      ? "text-[#0e3826] font-semibold underline underline-offset-8"
                      : "text-[#181d1a]/80 hover:text-[#0e3826]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-6 border-t border-[#0e3826]/10 space-y-4">
              <p className="text-xs tracking-widest uppercase text-[#525a55]">
                Direct Concierge Contact
              </p>
              <div className="space-y-3">
                <a
                  href="tel:9605990306"
                  className="flex items-center gap-3 text-sm text-[#0e3826] font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>9605990306</span>
                </a>
                <a
                  href="mailto:planetroot98@gmail.com"
                  className="flex items-center gap-3 text-sm text-[#0e3826] font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>planetroot98@gmail.com</span>
                </a>
              </div>
            </div>
          </nav>

          {/* Bottom Action */}
          <div className="p-6 border-t border-[#0e3826]/10 bg-[#f6f1e8]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-luxury-primary text-center"
            >
              Plan Your Holiday
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
