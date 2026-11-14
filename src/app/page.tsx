import HeroSection from "@/components/home/HeroSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import ResortDiscoverySection from "@/components/home/ResortDiscoverySection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import TourPackagesSection from "@/components/home/TourPackagesSection";
import GetawayCtaSection from "@/components/home/GetawayCtaSection";
import ResortGallerySection from "@/components/home/ResortGallerySection";
import AboutSection from "@/components/home/AboutSection";
import HomeEnquirySection from "@/components/home/HomeEnquirySection";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero Section (#home) */}
      <HeroSection />

      {/* 2. Popular Destinations Carousel (#destinations-section) */}
      <DestinationsSection />

      {/* 3. Featured Resorts Showcase with Quick-View (#featured-resorts-section) */}
      <ResortDiscoverySection />

      {/* 4. Why Choose Planet Root Benefits (#why-choose-section) */}
      <WhyChooseSection />

      {/* 5. Our Travel Packages (#packages-section) */}
      <TourPackagesSection />

      {/* 6. Let's Plan Your Next Getaway Stats & WhatsApp CTA */}
      <GetawayCtaSection />

      {/* 7. Resort & Villa Gallery (#resort-gallery-section) */}
      <ResortGallerySection />

      {/* 8. About Planet Root Travels (#about-section) */}
      <AboutSection />

      {/* 9. Main WhatsApp Enquiry Form & Contact for Enquiry (#enquiry-section) */}
      <HomeEnquirySection />
    </>
  );
}
