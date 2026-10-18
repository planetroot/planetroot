import HeroSection from "@/components/home/HeroSection";
import QuickBookingBar from "@/components/home/QuickBookingBar";
import ResortDiscoverySection from "@/components/home/ResortDiscoverySection";
import DestinationsSection from "@/components/home/DestinationsSection";
import TourPackagesSection from "@/components/home/TourPackagesSection";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import AboutSection from "@/components/home/AboutSection";
import HomeEnquirySection from "@/components/home/HomeEnquirySection";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Interactive Search & Filter Bar */}
      <QuickBookingBar />

      {/* 3. Section 4: Premium Resort Discovery (Primary Feature) */}
      <ResortDiscoverySection />

      {/* 4. Section 5: Destinations Collection */}
      <DestinationsSection />

      {/* 5. Section 6: Curated Tour Packages */}
      <TourPackagesSection />

      {/* 6. Section 7: Not Just Places. Feelings. */}
      <ExperiencesSection />

      {/* 7. Section 8: Why Discerning Travelers Choose Planet Root */}
      <WhyChooseSection />

      {/* 8. Section 9: About Planet Root */}
      <AboutSection />

      {/* 9. Section 10 & 11: Booking Enquiry & Verified Contacts */}
      <HomeEnquirySection />
    </>
  );
}
