import HeroSection from "@/components/home/HeroSection";
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

      {/* 2. Section: Kerala Destinations Collection */}
      <DestinationsSection />

      {/* 3. Section: Curated Kerala Tour Packages */}
      <TourPackagesSection />

      {/* 4. Section: Not Just Places. Feelings. */}
      <ExperiencesSection />

      {/* 5. Section: Why Discerning Travelers Choose Planet Root */}
      <WhyChooseSection />

      {/* 6. Section: About Planet Root */}
      <AboutSection />

      {/* 7. Section: Booking Enquiry & Verified Contacts */}
      <HomeEnquirySection />
    </>
  );
}
