"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { createWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from "@/config/site";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const NAV_LINKS = [
  { label: "Home", href: "#home", targetId: "home" },
  { label: "Resorts", href: "#featured-resorts-section", targetId: "featured-resorts-section" },
  { label: "Packages", href: "#packages-section", targetId: "packages-section" },
  { label: "Destinations", href: "#destinations-section", targetId: "destinations-section" },
  { label: "About Us", href: "#about-section", targetId: "about-section" },
  { label: "Gallery", href: "#resort-gallery-section", targetId: "resort-gallery-section" },
  { label: "Contact", href: "#enquiry-section", targetId: "enquiry-section" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { openEnquiryModal } = useEnquiryModal();
  const whatsappUrl = createWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].targetId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].targetId);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#061d15]/95 backdrop-blur-md border-b border-white/10 text-white py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => scrollTo(e, "home")}
              className="flex items-center transition-opacity duration-300 hover:opacity-90 py-0.5 cursor-pointer"
            >
              <Image
                src="/images/planet-root-logo-gold.png"
                alt="Planet Root Travels"
                width={240}
                height={55}
                priority
                className="h-10 sm:h-12 md:h-13 w-auto object-contain drop-shadow-sm"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.targetId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.targetId)}
                    className={`text-xs sm:text-[13px] tracking-wide transition-all duration-200 relative py-1 cursor-pointer ${
                      isActive
                        ? "text-[#dfcaa2] font-semibold"
                        : "text-stone-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#dfcaa2] rounded-full animate-fadeIn" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Side: Book on WhatsApp Pill Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c5a059] hover:bg-[#dfcaa2] text-[#061d15] text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#061d15]" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#c5a059] text-[#061d15] flex items-center gap-1 shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#061d15]" />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-200 hover:text-white hover:bg-white/10 rounded-sm"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#061d15] text-white animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a291e]">
            <a
              href="#home"
              onClick={(e) => scrollTo(e, "home")}
              className="py-1 cursor-pointer"
            >
              <Image
                src="/images/planet-root-logo-gold.png"
                alt="Planet Root Travels"
                width={200}
                height={46}
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-sm"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-md"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.targetId)}
                  className={`block text-lg font-serif-luxury transition-colors ${
                    isActive ? "text-[#dfcaa2] font-semibold" : "text-white/85 hover:text-[#c5a059]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-6 border-t border-white/10 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-[#c5a059] hover:bg-[#dfcaa2] text-[#061d15] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#061d15]" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEnquiryModal({});
                }}
                className="w-full py-3.5 rounded-full bg-white/10 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20"
              >
                <span>For Enquiry</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
