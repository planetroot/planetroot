"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal() {
  const { isOpen, initialData, closeEnquiryModal } = useEnquiryModal();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeEnquiryModal();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Plan Your Perfect Getaway"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Dimmed backdrop */}
      <div
        onClick={closeEnquiryModal}
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-transparent z-10 max-h-[92vh] overflow-y-auto my-auto no-scrollbar animate-scaleUp">
        {/* Floating Close Button */}
        <button
          onClick={closeEnquiryModal}
          aria-label="Close enquiry modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/95 shadow-md border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-[#0a291e] hover:text-[#dfcaa2] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <EnquiryForm
          initialDestination={initialData.destination}
          initialResortOrPackage={initialData.resortOrProperty}
          initialStayType={initialData.stayType}
          initialTripType={initialData.tripType}
          initialBudget={initialData.budget}
          formTitle="Plan Your Dream Journey"
          formSubtitle="Tell us about your holiday, honeymoon, or custom trip, and our specialists will craft the perfect plan within your budget."
          className="shadow-2xl border-[#c9a84c]/30"
        />
      </div>
    </div>
  );
}
