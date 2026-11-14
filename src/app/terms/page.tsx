import type { Metadata } from "next";
import { ShieldCheck, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Cancellation Policy | Planet Root Travels — Beyond Borders",
  description: "Terms of service, enquiry-based booking integrity, and cancellation policies for Planet Root Travels.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            Governance & Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
            Terms & Cancellation Policy
          </h1>
          <p className="mt-3 text-xs uppercase tracking-widest text-[#7b8580]">
            Effective Date: October 2026 | Planet Root Travels
          </p>
          <div className="w-24 h-[1px] bg-[#c5a86a] mt-6" />
        </div>

        <div className="space-y-10 text-sm text-[#525a55] font-light leading-relaxed font-sans-luxury">
          {/* Booking Integrity Notice Box */}
          <div className="p-6 bg-white border border-[#0e3826]/15 rounded-xs shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0e3826] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-serif-luxury text-[#181d1a]">
                  Booking Integrity & Enquiry-Based Reservation Standard
                </h3>
                <p className="text-xs sm:text-sm text-[#525a55] mt-2 leading-relaxed">
                  Planet Root Travels operates on an authentic, human-managed enquiry basis via WhatsApp and direct consultation. Submission of an enquiry does not charge your card or constitute an instant automated transaction. Our private travel directors directly verify physical resort inventory, villa maintenance schedules, and seasonal rates before delivering a finalized reservation voucher.
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">1. Reservation & Payment Protocols</h2>
            <p>
              Upon receiving your itinerary preferences, our travel director delivers a formalized quotation itemizing villa categories, inclusions, transport arrangements, and applicable government taxes.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Reservation Confirmation:</strong> Verified directly on WhatsApp with itemized quotes and verified property photos.</li>
              <li><strong>Currency:</strong> All rates are quoted in Indian National Rupees (INR) with applicable GST indicated transparently.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">2. Standard Cancellation & Date Alteration Schedule</h2>
            <p>
              Unless otherwise specified by a particular boutique property’s seasonal non-refundable window, standard cancellation terms are:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-xs text-left border border-[#0e3826]/10">
                <thead className="bg-[#f6f1e8] text-[#181d1a] uppercase font-semibold">
                  <tr>
                    <th className="p-3 border-b border-[#0e3826]/10">Cancellation Notice Period</th>
                    <th className="p-3 border-b border-[#0e3826]/10">Refund / Flexibility Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#0e3826]/10">
                  <tr>
                    <td className="p-3 font-medium">14+ Days Prior to Check-in</td>
                    <td className="p-3">Full refund or complimentary date alteration</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">7 to 13 Days Prior to Check-in</td>
                    <td className="p-3">50% refund, or credit applied toward rescheduled dates</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Less than 7 Days Prior to Check-in</td>
                    <td className="p-3">Subject to resort partner retention policy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">3. Contact for Policy Clarifications &amp; Enquiries</h2>
            <p>
              For any clarification regarding hotel booking terms, cancellation terms, or custom payment schedules, please contact our director directly:
            </p>
            <div className="p-5 bg-white border border-[#0e3826]/10 rounded-xs text-xs space-y-1">
              <p className="font-semibold text-[#181d1a]">{SITE_CONFIG.legalName}</p>
              <p>WhatsApp / Phone: <a href={`tel:${SITE_CONFIG.phone}`} className="text-[#0e3826] font-medium underline">{SITE_CONFIG.whatsappDisplay}</a></p>
              <p>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#0e3826] font-medium underline">{SITE_CONFIG.email}</a></p>
              <p className="text-[#7b8580] pt-1">Tagline: Beyond Borders.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
