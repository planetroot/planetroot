import { Phone, Mail, Clock, ShieldCheck, MapPin } from "lucide-react";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function HomeEnquirySection() {
  return (
    <section id="enquiry-section" className="py-24 sm:py-32 bg-[#fcfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Concierge & Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-3">
                Tailored Travel Planning
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#181d1a] tracking-tight leading-tight">
                Plan Your Next Exceptional Journey.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#525a55] font-light leading-relaxed">
                Whether you are seeking a secluded overwater bungalow in Lakshadweep, a snowbound chalet in Manali, or a starlit high-altitude observatory dome, our private travel specialists craft every detail around your vision.
              </p>
            </div>

            {/* Direct Official Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-5 bg-[#f6f1e8] border border-[#0e3826]/10 rounded-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#7b8580]">Direct Concierge Phone</p>
                  <a
                    href="tel:9605990306"
                    className="text-base font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors"
                  >
                    9605990306
                  </a>
                  <p className="text-xs text-[#525a55] mt-0.5">Direct phone call or WhatsApp message</p>
                </div>
              </div>

              <div className="p-5 bg-[#f6f1e8] border border-[#0e3826]/10 rounded-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#7b8580]">Official Email</p>
                  <a
                    href="mailto:planetroot98@gmail.com"
                    className="text-base font-semibold text-[#0e3826] hover:text-[#c5a86a] transition-colors break-all"
                  >
                    planetroot98@gmail.com
                  </a>
                  <p className="text-xs text-[#525a55] mt-0.5">Written enquiries answered within hours</p>
                </div>
              </div>

              <div className="p-5 bg-[#f6f1e8] border border-[#0e3826]/10 rounded-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0e3826] text-[#dfcaa2] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#7b8580]">Working Hours</p>
                  <p className="text-sm font-semibold text-[#181d1a]">Monday – Saturday: 9:00 AM – 8:00 PM IST</p>
                  <p className="text-xs text-[#525a55] mt-0.5">Priority assistance for on-trip guests 24/7</p>
                </div>
              </div>
            </div>

            {/* Booking Integrity Notice */}
            <div className="pt-4 border-t border-[#0e3826]/10">
              <div className="flex items-start gap-2.5 text-xs text-[#525a55] leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-[#0e3826] shrink-0 mt-0.5" />
                <span>
                  <strong>Planet Root Booking Integrity:</strong> All reservations are handled through an enquiry-based curation workflow. We verify live resort availability, room classifications, and permit approvals before issuing confirmed documentation.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
