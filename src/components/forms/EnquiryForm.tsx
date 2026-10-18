"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, MessageCircle } from "lucide-react";

interface EnquiryFormProps {
  initialDestination?: string;
  initialResortOrPackage?: string;
  formTitle?: string;
  formSubtitle?: string;
  className?: string;
}

export default function EnquiryForm({
  initialDestination = "",
  initialResortOrPackage = "",
  formTitle = "Begin Your Personalized Kerala Escape",
  formSubtitle = "Share your journey preferences with our Kerala travel directors. We craft each stay with personal care.",
  className = "",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: initialDestination,
    resortOrPackage: initialResortOrPackage,
    dates: "",
    guests: "2 Adults",
    budget: "₹50,000 – ₹1,00,000",
    specialRequirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    referenceCode: string;
    details: {
      clientName: string;
      destination: string;
      dates: string;
      estimatedResponseTime: string;
    };
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name.";
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }
    if (!formData.destination.trim()) {
      errors.destination = "Please specify or choose your destination.";
    }
    if (!formData.dates.trim()) {
      errors.dates = "Please enter your travel dates or season.";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "An unexpected error occurred. Please try again.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      } else {
        setSuccessResponse(data);
        setFieldErrors({});
      }
    } catch {
      setErrorMessage(
        "Unable to reach the concierge server at this moment. You may contact us directly via WhatsApp or phone at +91 9605990306."
      );
    } finally {
      setLoading(false);
    }
  };

  if (successResponse) {
    const waText = encodeURIComponent(
      `Hello Planet Root! I just submitted enquiry ${successResponse.referenceCode} for ${successResponse.details.destination}. Please assist me with my Kerala luxury booking.`
    );
    return (
      <div className={`bg-[#fcfbf7] border border-[#c5a86a]/40 p-8 sm:p-12 text-center rounded-sm shadow-sm ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#0e3826]/10 text-[#0e3826] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#0e3826]" />
        </div>

        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a]">
          Enquiry Registered
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#181d1a] mt-2 mb-3">
          Your Kerala Escape is in Thoughtful Hands
        </h3>

        <div className="bg-[#f6f1e8] p-4 rounded-sm inline-block my-4 border border-[#0e3826]/10">
          <p className="text-xs uppercase tracking-widest text-[#525a55]">Reference Identifier</p>
          <p className="text-lg font-mono font-semibold text-[#0e3826] mt-0.5">
            {successResponse.referenceCode}
          </p>
        </div>

        <p className="text-sm text-[#525a55] max-w-lg mx-auto leading-relaxed mb-8">
          Thank you, <span className="font-semibold text-[#181d1a]">{successResponse.details.clientName}</span>. Our senior Kerala travel director is reviewing your preferences for{" "}
          <span className="font-semibold text-[#0e3826]">{successResponse.details.destination}</span>. You will receive a personalized consultation {successResponse.details.estimatedResponseTime.toLowerCase()}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/919605990306?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-gold w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>Instant WhatsApp Connect</span>
          </a>
          <button
            onClick={() => {
              setSuccessResponse(null);
              setFormData({
                fullName: "",
                phone: "",
                email: "",
                destination: initialDestination,
                resortOrPackage: initialResortOrPackage,
                dates: "",
                guests: "2 Adults",
                budget: "₹50,000 – ₹1,00,000",
                specialRequirements: "",
              });
            }}
            className="btn-luxury-secondary w-full sm:w-auto"
          >
            Plan Another Journey
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-[#fcfbf7] border border-[#0e3826]/15 p-6 sm:p-10 lg:p-12 rounded-sm shadow-xs ${className}`}>
      <div className="mb-8">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
          Concierge Reservation Service
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#181d1a]">
          {formTitle}
        </h3>
        <p className="text-sm text-[#525a55] mt-2 font-light leading-relaxed">
          {formSubtitle}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-sm bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Please review your submission</p>
            <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Full Name <span className="text-[#c5a86a]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rahul Menon"
              className={`w-full bg-white border ${
                fieldErrors.fullName ? "border-rose-400" : "border-[#0e3826]/20"
              } px-4 py-3 text-sm text-[#181d1a] placeholder:text-[#525a55]/50 focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs`}
            />
            {fieldErrors.fullName && (
              <p className="text-xs text-rose-600 mt-1">{fieldErrors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Contact Number (WhatsApp) <span className="text-[#c5a86a]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9605990306"
              className={`w-full bg-white border ${
                fieldErrors.phone ? "border-rose-400" : "border-[#0e3826]/20"
              } px-4 py-3 text-sm text-[#181d1a] placeholder:text-[#525a55]/50 focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs`}
            />
            {fieldErrors.phone && (
              <p className="text-xs text-rose-600 mt-1">{fieldErrors.phone}</p>
            )}
          </div>
        </div>

        {/* Email & Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Email Address <span className="text-[#c5a86a]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className={`w-full bg-white border ${
                fieldErrors.email ? "border-rose-400" : "border-[#0e3826]/20"
              } px-4 py-3 text-sm text-[#181d1a] placeholder:text-[#525a55]/50 focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-rose-600 mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Preferred Kerala Destination <span className="text-[#c5a86a]">*</span>
            </label>
            <select
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className={`w-full bg-white border ${
                fieldErrors.destination ? "border-rose-400" : "border-[#0e3826]/20"
              } px-4 py-3 text-sm text-[#181d1a] focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs`}
            >
              <option value="">Select Kerala Destination...</option>
              <option value="Kumarakom & Alleppey (Backwaters)">Kumarakom & Alleppey (Backwaters & Houseboat)</option>
              <option value="Munnar Tea Highlands">Munnar Tea Highlands & Misty Peaks</option>
              <option value="Wayanad Rainforest & Treehouses">Wayanad Rainforest & Canopy Treehouses</option>
              <option value="Marari Beach & Coastal Haven">Marari Beach & Coastal Haven</option>
              <option value="Thekkady & Periyar Spice Hills">Thekkady & Periyar Spice Hills</option>
              <option value="Athirappilly Waterfall Reserve">Athirappilly Waterfall Reserve</option>
              <option value="The Grand Kerala Odyssey (Multi-Destination)">The Grand Kerala Odyssey (Multi-Destination)</option>
              <option value="Ayurvedic Panchakarma Wellness Sanctuary">Ayurvedic Panchakarma Wellness Sanctuary</option>
            </select>
            {fieldErrors.destination && (
              <p className="text-xs text-rose-600 mt-1">{fieldErrors.destination}</p>
            )}
          </div>
        </div>

        {/* Preferred Resort / Tour Package & Travel Dates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Preferred Sanctuary or Package
            </label>
            <input
              type="text"
              value={formData.resortOrPackage}
              onChange={(e) => setFormData({ ...formData, resortOrPackage: e.target.value })}
              placeholder="e.g. Kumarakom Lakefront Palace or Munnar Retreat"
              className="w-full bg-white border border-[#0e3826]/20 px-4 py-3 text-sm text-[#181d1a] placeholder:text-[#525a55]/50 focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Dates or Travel Season <span className="text-[#c5a86a]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.dates}
              onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
              placeholder="e.g. Dec 15 - Dec 22, 2026 or Monsoon 2027"
              className={`w-full bg-white border ${
                fieldErrors.dates ? "border-rose-400" : "border-[#0e3826]/20"
              } px-4 py-3 text-sm text-[#181d1a] placeholder:text-[#525a55]/50 focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs`}
            />
            {fieldErrors.dates && (
              <p className="text-xs text-rose-600 mt-1">{fieldErrors.dates}</p>
            )}
          </div>
        </div>

        {/* Guests & Approximate Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Number of Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-white border border-[#0e3826]/20 px-4 py-3 text-sm text-[#181d1a] focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs"
            >
              <option value="1 Solo Traveler">1 Solo Traveler</option>
              <option value="2 Adults (Couple)">2 Adults (Couple)</option>
              <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
              <option value="Family (3-4 Guests)">Family (3-4 Guests)</option>
              <option value="Private Group (5+ Guests)">Private Group (5+ Guests)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
              Approximate Budget (Total / Indicative)
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-white border border-[#0e3826]/20 px-4 py-3 text-sm text-[#181d1a] focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs"
            >
              <option value="₹40,000 – ₹75,000">₹40,000 – ₹75,000</option>
              <option value="₹75,000 – ₹1,50,000">₹75,000 – ₹1,50,000</option>
              <option value="₹1,50,000 – ₹3,00,000">₹1,50,000 – ₹3,00,000</option>
              <option value="₹3,00,000+ (Ultra Luxury)">₹3,00,000+ (Ultra Luxury)</option>
              <option value="Custom Bespoke Pricing">Custom Bespoke Pricing</option>
            </select>
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-[#181d1a] font-medium mb-1.5">
            Special Requirements or Preferences
          </label>
          <textarea
            rows={3}
            value={formData.specialRequirements}
            onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
            placeholder="e.g. Private plunge pool preference, private houseboat overnight, Ayurvedic consultation request, airport chauffeur pickup at Kochi..."
            className="w-full bg-white border border-[#0e3826]/20 px-4 py-3 text-sm text-[#181d1a] placeholder:text-[#525a55]/50 focus:outline-none focus:border-[#0e3826] transition-colors rounded-xs"
          />
        </div>

        {/* Assurance & CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-[#525a55]">
            <ShieldCheck className="w-4 h-4 text-[#0e3826] shrink-0" />
            <span>Enquiry-based reservation. Transparent pricing with no hidden charges.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-luxury-primary w-full sm:w-auto"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                <span>Submitting Your Escape...</span>
              </>
            ) : (
              <>
                <span>Plan My Kerala Escape</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
