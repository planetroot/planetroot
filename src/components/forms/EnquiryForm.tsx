"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import { SITE_CONFIG, createWhatsAppUrl } from "@/config/site";

export interface EnquiryFormProps {
  initialDestination?: string;
  initialResortOrPackage?: string;
  initialStayType?: string;
  initialTripType?: string;
  initialBudget?: string;
  formTitle?: string;
  formSubtitle?: string;
  className?: string;
  onSuccess?: () => void;
}

const DESTINATION_OPTIONS = [
  "Maldives",
  "Bali, Indonesia",
  "Dubai, UAE",
  "Singapore",
  "Thailand (Phuket / Krabi)",
  "Malaysia (KL / Langkawi)",
  "Kashmir",
  "Manali & Himachal",
  "Rajasthan & Golden Triangle",
  "Ladakh & Spiti",
  "Lakshadweep",
  "Wayanad, Kerala",
  "Munnar, Kerala",
  "Alleppey Backwaters",
  "Thekkady & Vagamon",
  "Kovalam Beach",
  "Anywhere in Kerala",
  "Other Domestic Destination",
  "Other International Destination",
  "Custom / Open to Suggestions",
];

const TRIP_TYPE_OPTIONS = [
  "Honeymoon Escape",
  "International Tour",
  "Domestic Holiday Package",
  "Private Luxury Pool Villa Stay",
  "Custom Travel Plan",
  "Family Vacation",
  "Friends Group Trip",
  "Adventure & Nature Trek",
  "Solo Getaway",
  "Corporate / Incentive Retreat",
];

const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000–₹2,00,000",
  "Above ₹2,00,000",
  "Flexible / Custom Budget",
];

const STAY_TYPE_OPTIONS = [
  "Overwater Bungalow / Villa",
  "Private Pool Villa",
  "5-Star Luxury Resort",
  "Beachfront Resort",
  "Colonial Planter Bungalow",
  "Rainforest Treehouse",
  "Luxury Houseboat",
  "Boutique Heritage Hotel",
  "Alpine Chalet / Tent Camp",
  "Any Suitable Premium Property",
];

const COUNTRY_CODES = [
  { code: "+91", country: "IN" },
  { code: "+971", country: "UAE" },
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+65", country: "SG" },
  { code: "+966", country: "KSA" },
  { code: "+974", country: "QA" },
  { code: "+968", country: "OM" },
  { code: "+60", country: "MY" },
  { code: "+61", country: "AU" },
  { code: "+49", country: "DE" },
];

export default function EnquiryForm({
  initialDestination = "",
  initialResortOrPackage = "",
  initialStayType = "",
  initialTripType = "",
  initialBudget = "",
  formTitle = "Plan Your Perfect Getaway",
  formSubtitle = "Tell us about your ideal holiday, and our team will help you explore suitable resorts and travel experiences within your budget.",
  className = "",
  onSuccess,
}: EnquiryFormProps) {
  // Form State
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");

  const [destination, setDestination] = useState(initialDestination);
  const [resortOrProperty, setResortOrProperty] = useState(initialResortOrPackage);
  const [tripType, setTripType] = useState(initialTripType || "Couple Stay");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [rooms, setRooms] = useState("1");

  const [budget, setBudget] = useState(initialBudget || "₹25,000–₹50,000");
  const [budgetBasis, setBudgetBasis] = useState<"Entire Stay" | "Per Night">("Entire Stay");
  const [stayType, setStayType] = useState(initialStayType || "Any Suitable Property");
  const [specialRequirements, setSpecialRequirements] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  // Sync props when modal opens with new params
  useEffect(() => {
    if (initialDestination) setDestination(initialDestination);
    if (initialResortOrPackage) setResortOrProperty(initialResortOrPackage);
    if (initialStayType) setStayType(initialStayType);
    if (initialTripType) setTripType(initialTripType);
    if (initialBudget) setBudget(initialBudget);
  }, [initialDestination, initialResortOrPackage, initialStayType, initialTripType, initialBudget]);

  const todayStr = "2026-11-02";

  const calculateDurationNights = (): number => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required.";
    } else {
      const cleanNum = whatsappNumber.replace(/\D/g, "");
      if (cleanNum.length < 7 || cleanNum.length > 15) {
        newErrors.whatsappNumber = "Please enter a valid phone number.";
      }
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!destination) {
      newErrors.destination = "Please select a preferred destination.";
    }

    if (!tripType) {
      newErrors.tripType = "Please select your trip type.";
    }

    if (!checkInDate) {
      newErrors.checkInDate = "Check-in date is required.";
    }

    if (!checkOutDate) {
      newErrors.checkOutDate = "Check-out date is required.";
    } else if (checkInDate && checkOutDate <= checkInDate) {
      newErrors.checkOutDate = "Check-out date must be after check-in date.";
    }

    if (adults < 1) {
      newErrors.adults = "At least one adult guest is required.";
    }

    if (!budget) {
      newErrors.budget = "Please select your budget range.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppMessage = (nights: number): string => {
    let msg = `Hello Planet Root Travels! I would like to enquire about a resort stay.\n\n`;

    msg += `CUSTOMER DETAILS\n`;
    msg += `Name: ${fullName.trim()}\n`;
    msg += `WhatsApp: ${countryCode} ${whatsappNumber.trim()}\n`;
    if (email.trim()) {
      msg += `Email: ${email.trim()}\n`;
    }

    msg += `\nTRAVEL DETAILS\n`;
    msg += `Destination: ${destination || "Any suitable destination"}\n`;
    if (resortOrProperty.trim()) {
      msg += `Preferred Resort: ${resortOrProperty.trim()}\n`;
    }
    msg += `Trip Type: ${tripType}\n`;
    msg += `Check-in: ${checkInDate}\n`;
    msg += `Check-out: ${checkOutDate}\n`;
    if (nights > 0) {
      msg += `Duration: ${nights} ${nights === 1 ? "night" : "nights"}\n`;
    }
    msg += `Adults: ${adults}\n`;
    msg += `Children: ${children}\n`;
    if (infants > 0) {
      msg += `Infants: ${infants}\n`;
    }
    if (rooms) {
      msg += `Rooms: ${rooms}\n`;
    }

    msg += `\nBUDGET & PREFERENCES\n`;
    msg += `Total Stay Budget: ${budget}\n`;
    msg += `Budget Basis: ${budgetBasis}\n`;
    if (stayType && stayType !== "Any Suitable Property") {
      msg += `Stay Type: ${stayType}\n`;
    }
    if (specialRequirements.trim()) {
      msg += `Special Requirements: ${specialRequirements.trim()}\n`;
    }
    if (additionalMessage.trim()) {
      msg += `Additional Notes: ${additionalMessage.trim()}\n`;
    }

    msg += `\nPlease suggest suitable properties, available options, and the final pricing for these dates.\n\n`;
    msg += `Thank you!`;

    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorKey = Object.keys(errors)[0];
      const errorEl = document.getElementById(`field-${firstErrorKey}`);
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    const nights = calculateDurationNights();
    const message = buildWhatsAppMessage(nights);
    const waUrl = createWhatsAppUrl(message);

    setGeneratedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div
      className={`bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-9 lg:p-10 shadow-xl shadow-stone-200/40 relative ${className}`}
    >
      {/* Form Header */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c5a059] mb-1.5">
          BESPOKE RESERVATIONS
        </p>
        <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-[#181d1a] tracking-tight">
          {formTitle}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-stone-500 font-light leading-relaxed font-sans-luxury">
          {formSubtitle}
        </p>
      </div>

      {/* Submission Success State Notice */}
      {isSubmitted && (
        <div className="mb-8 p-5 bg-[#0a291e]/5 border border-[#0a291e]/15 rounded-2xl animate-fadeIn">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0a291e] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#0a291e]">
                WhatsApp Click-to-Chat Launched
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Your enquiry message has been prepared for WhatsApp number{" "}
                <strong>{SITE_CONFIG.whatsappDisplay}</strong>. Please review the details in WhatsApp and tap <strong>Send</strong>.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0a291e] text-[#dfcaa2] text-xs font-semibold rounded-full hover:bg-[#144a39] transition-colors"
                >
                  <span>Re-open WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-3 py-2 text-xs text-stone-600 hover:text-black underline cursor-pointer"
                >
                  Edit details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Body */}
      <form onSubmit={handleSubmit} noValidate className="space-y-7">
        {/* A. PERSONAL DETAILS */}
        <div>
          <div className="pb-2 mb-4 border-b border-stone-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
              01 • PERSONAL DETAILS
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div id="field-fullName" className="sm:col-span-2">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: "" });
                }}
                placeholder="e.g. Rahul Sharma"
                className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#072016]/10 transition-all ${
                  errors.fullName
                    ? "border-red-400 focus:border-red-500"
                    : "border-stone-200 focus:border-[#072016]"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* WhatsApp Number with Country Code */}
            <div id="field-whatsappNumber" className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-3 py-3 text-xs bg-stone-50/70 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#072016] text-stone-800 font-medium shrink-0 cursor-pointer"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.country} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => {
                    setWhatsappNumber(e.target.value);
                    if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: "" });
                  }}
                  placeholder="9876543210"
                  className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#072016]/10 transition-all ${
                    errors.whatsappNumber
                      ? "border-red-400 focus:border-red-500"
                    : "border-stone-200 focus:border-[#072016]"
                  }`}
                />
              </div>
              {errors.whatsappNumber && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.whatsappNumber}
                </p>
              )}
            </div>

            {/* Email Address (Optional) */}
            <div id="field-email" className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Email Address <span className="text-stone-400 text-[11px] font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="rahul@example.com"
                className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#072016]/10 transition-all ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-stone-200 focus:border-[#072016]"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* B. TRAVEL PREFERENCES */}
        <div>
          <div className="pb-2 mb-4 border-b border-stone-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
              02 • TRAVEL & STAY PREFERENCES
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Destination */}
            <div id="field-destination" className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Preferred Destination <span className="text-red-500">*</span>
              </label>
              <select
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  if (errors.destination) setErrors({ ...errors, destination: "" });
                }}
                className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] text-stone-800 cursor-pointer ${
                  errors.destination ? "border-red-400" : "border-stone-200"
                }`}
              >
                <option value="">Select Destination</option>
                {DESTINATION_OPTIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.destination && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.destination}
                </p>
              )}
            </div>

            {/* Resort or Property Name */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Resort or Property <span className="text-stone-400 text-[11px] font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={resortOrProperty}
                onChange={(e) => setResortOrProperty(e.target.value)}
                placeholder="e.g. Zeno Village / Any suitable"
                className="w-full px-4 py-3 text-sm bg-stone-50/70 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e]"
              />
            </div>

            {/* Trip Type */}
            <div id="field-tripType" className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Trip Type <span className="text-red-500">*</span>
              </label>
              <select
                value={tripType}
                onChange={(e) => {
                  setTripType(e.target.value);
                  if (errors.tripType) setErrors({ ...errors, tripType: "" });
                }}
                className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] text-stone-800 cursor-pointer ${
                  errors.tripType ? "border-red-400" : "border-stone-200"
                }`}
              >
                {TRIP_TYPE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.tripType && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.tripType}
                </p>
              )}
            </div>

            {/* Preferred Stay Type */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Preferred Stay Type <span className="text-stone-400 text-[11px] font-normal">(Optional)</span>
              </label>
              <select
                value={stayType}
                onChange={(e) => setStayType(e.target.value)}
                className="w-full px-4 py-3 text-sm bg-stone-50/70 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] text-stone-800 cursor-pointer"
              >
                {STAY_TYPE_OPTIONS.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in Date */}
            <div id="field-checkInDate" className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Check-in Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                min={todayStr}
                value={checkInDate}
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                  if (errors.checkInDate) setErrors({ ...errors, checkInDate: "" });
                  if (checkOutDate && e.target.value >= checkOutDate) {
                    setCheckOutDate("");
                  }
                }}
                className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] text-stone-800 cursor-pointer ${
                  errors.checkInDate ? "border-red-400" : "border-stone-200"
                }`}
              />
              {errors.checkInDate && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.checkInDate}
                </p>
              )}
            </div>

            {/* Check-out Date */}
            <div id="field-checkOutDate" className="sm:col-span-1">
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                Check-out Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                min={checkInDate || todayStr}
                value={checkOutDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                  if (errors.checkOutDate) setErrors({ ...errors, checkOutDate: "" });
                }}
                className={`w-full px-4 py-3 text-sm bg-stone-50/70 border rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] text-stone-800 cursor-pointer ${
                  errors.checkOutDate ? "border-red-400" : "border-stone-200"
                }`}
              />
              {errors.checkOutDate && (
                <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.checkOutDate}
                </p>
              )}
              {checkInDate && checkOutDate && checkOutDate > checkInDate && (
                <p className="mt-1 text-[11px] text-[#0a291e] font-medium">
                  Stay duration: {calculateDurationNights()} night(s)
                </p>
              )}
            </div>
          </div>
        </div>

        {/* C. GUESTS & ROOMS */}
        <div>
          <div className="pb-2 mb-4 border-b border-stone-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
              03 • GUESTS & ROOMS
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Adults Counter */}
            <div className="p-3.5 bg-stone-50/80 border border-stone-200 rounded-2xl">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-semibold">
                Adults <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm hover:border-black cursor-pointer transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-sm text-stone-900">{adults}</span>
                <button
                  type="button"
                  onClick={() => setAdults((prev) => prev + 1)}
                  className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm hover:border-black cursor-pointer transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children Counter */}
            <div className="p-3.5 bg-stone-50/80 border border-stone-200 rounded-2xl">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-semibold">
                Children
              </label>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm hover:border-black cursor-pointer transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-sm text-stone-900">{children}</span>
                <button
                  type="button"
                  onClick={() => setChildren((prev) => prev + 1)}
                  className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm hover:border-black cursor-pointer transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants Counter */}
            <div className="p-3.5 bg-stone-50/80 border border-stone-200 rounded-2xl">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-semibold">
                Infants
              </label>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setInfants((prev) => Math.max(0, prev - 1))}
                  className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm hover:border-black cursor-pointer transition-colors"
                >
                  -
                </button>
                <span className="font-semibold text-sm text-stone-900">{infants}</span>
                <button
                  type="button"
                  onClick={() => setInfants((prev) => prev + 1)}
                  className="w-7 h-7 rounded-full bg-white border border-stone-200 text-stone-700 flex items-center justify-center font-bold text-sm hover:border-black cursor-pointer transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Number of Rooms */}
            <div className="p-3.5 bg-stone-50/80 border border-stone-200 rounded-2xl">
              <label className="block text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-semibold">
                Rooms
              </label>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full text-xs font-semibold bg-white border border-stone-200 rounded-lg py-1 px-2 focus:outline-hidden cursor-pointer"
              >
                <option value="1">1 Room</option>
                <option value="2">2 Rooms</option>
                <option value="3">3 Rooms</option>
                <option value="4">4 Rooms</option>
                <option value="5+">5+ Rooms</option>
              </select>
            </div>
          </div>
        </div>

        {/* D. BUDGET & REQUIREMENTS */}
        <div>
          <div className="pb-2 mb-4 border-b border-stone-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
              04 • BUDGET & SPECIAL REQUIREMENTS
            </p>
          </div>

          {/* Budget Range & Basis Selector */}
          <div className="mb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
              <label className="block text-xs font-medium text-stone-700">
                Total Stay Budget <span className="text-red-500">*</span>
              </label>

              {/* Budget Basis Toggle: Entire Stay vs Per Night */}
              <div className="inline-flex p-1 bg-stone-100 rounded-full border border-stone-200/80 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setBudgetBasis("Entire Stay")}
                  className={`px-3 py-1 text-xs font-medium transition-all rounded-full cursor-pointer ${
                    budgetBasis === "Entire Stay"
                      ? "bg-[#0a291e] text-[#dfcaa2] shadow-xs"
                      : "text-stone-600 hover:text-black"
                  }`}
                >
                  Entire Stay
                </button>
                <button
                  type="button"
                  onClick={() => setBudgetBasis("Per Night")}
                  className={`px-3 py-1 text-xs font-medium transition-all rounded-full cursor-pointer ${
                    budgetBasis === "Per Night"
                      ? "bg-[#0a291e] text-[#dfcaa2] shadow-xs"
                      : "text-stone-600 hover:text-black"
                  }`}
                >
                  Per Night
                </button>
              </div>
            </div>

            {/* Selectable Budget Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BUDGET_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setBudget(opt)}
                  className={`px-3.5 py-2.5 text-xs font-medium rounded-xl border transition-all text-center cursor-pointer ${
                    budget === opt
                      ? "bg-[#0a291e] text-[#dfcaa2] border-[#0a291e] shadow-sm font-semibold"
                      : "bg-stone-50/70 text-stone-700 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Special Requirements Text Area */}
          <div className="mb-4">
            <label className="block text-xs font-medium text-stone-700 mb-1.5">
              Special Requirements <span className="text-stone-400 text-[11px] font-normal">(Optional)</span>
            </label>
            <textarea
              rows={3}
              value={specialRequirements}
              onChange={(e) => setSpecialRequirements(e.target.value)}
              placeholder="Tell us about your preferences, such as a private pool, honeymoon decoration, mountain view, children’s facilities, extra bed, or other requirements."
              className="w-full px-4 py-3 text-sm bg-stone-50/70 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] placeholder:text-stone-400"
            />
          </div>

          {/* Additional Message (Optional) */}
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1.5">
              Additional Message <span className="text-stone-400 text-[11px] font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              value={additionalMessage}
              onChange={(e) => setAdditionalMessage(e.target.value)}
              placeholder="Any other details or questions you'd like our travel team to know?"
              className="w-full px-4 py-3 text-sm bg-stone-50/70 border border-stone-200 rounded-xl focus:bg-white focus:outline-hidden focus:border-[#0a291e] placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#0a291e] hover:bg-[#144a39] text-[#dfcaa2] hover:text-white font-medium text-sm sm:text-base tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <span>Send Enquiry on WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="mt-3 text-center text-[11px] text-stone-500 leading-relaxed font-light">
            WhatsApp opens with your complete stay and budget details ready to send directly to our team.
          </p>
        </div>
      </form>
    </div>
  );
}
