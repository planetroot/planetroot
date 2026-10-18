import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Cancellation Policy | PLANET ROOT — Beyond Borders",
  description: "Terms of service, enquiry-based booking integrity, and cancellation policies for PLANET ROOT Travel & Tourism.",
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
            Effective Date: October 2026 | PLANET ROOT Travel & Tourism
          </p>
          <div className="divider-luxury w-24 mt-6" />
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
                  PLANET ROOT operates on an authentic, human-managed enquiry basis. Submission of an online enquiry does not constitute an instant automatic booking or charge. Our private travel directors directly verify physical resort inventory, villa maintenance schedules, flight slots, and government permit requirements before delivering a finalized, binding reservation voucher.
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
              <li><strong>Reservation Deposit:</strong> A deposit (typically 30% to 50% depending on the luxury resort property) secures room allocations.</li>
              <li><strong>Balance Settlement:</strong> The remaining balance is payable 21 to 30 days prior to the journey start date, or as specified in your custom voucher.</li>
              <li><strong>Currency & Taxes:</strong> All rates are quoted in Indian National Rupees (INR) with mandatory Goods & Services Tax (GST) itemized transparently.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">2. Lakshadweep Archipelago Travel & Permit Advisory</h2>
            <div className="p-4 bg-[#f6f1e8] border border-[#c5a86a]/40 rounded-xs mb-3 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#0e3826] shrink-0 mt-0.5" />
              <p className="text-xs text-[#525a55] leading-relaxed">
                Entry into the Union Territory of Lakshadweep requires mandatory administrative clearance under the Laccadive, Minicoy, and Amindivi Islands (Restriction on Entry and Residence) Rules.
              </p>
            </div>
            <p>
              Planet Root assists with complete e-permit processing for all confirmed guests. Guests must provide valid government photo identification and police verification documents at least 15–20 business days prior to departure. Inter-island boat transfers and water activities are subject to maritime weather safety clearances issued by the island port authority.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">3. High-Altitude Mountain & Stargazing Escapes</h2>
            <p>
              For itineraries involving high-altitude destinations such as Spiti Valley (3,800m+) or Rohtang/Solang high passes in Manali, guests must adhere to gradual acclimatization advice. Planet Root provides high-altitude support protocols and reserves the right to alter day-to-day driving routes in the event of sudden mountain snowfall, landslides, or state road advisories.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">4. Standard Cancellation & Date Alteration Schedule</h2>
            <p>
              Unless otherwise specified by a particular boutique property’s seasonal non-refundable window, our standard cancellation terms are:
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
                    <td className="p-3 font-medium">30+ Days Prior to Check-in</td>
                    <td className="p-3">Full refund less administrative and permit processing fee (approx. 5%)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">15 to 29 Days Prior to Check-in</td>
                    <td className="p-3">50% refund, or 75% credit applied toward a rescheduled future journey</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Less than 14 Days Prior to Check-in</td>
                    <td className="p-3">Subject to resort partner retention; best-effort date transfer provided</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">5. Concierge Contact for Policy Clarifications</h2>
            <p>
              For any clarification regarding specific hotel booking terms, permit criteria, or bespoke payment plans, please contact our director directly:
            </p>
            <div className="p-5 bg-white border border-[#0e3826]/10 rounded-xs text-xs space-y-1">
              <p className="font-semibold text-[#181d1a]">PLANET ROOT — Travel & Tourism</p>
              <p>Phone: <a href="tel:9605990306" className="text-[#0e3826] font-medium underline">9605990306</a></p>
              <p>Email: <a href="mailto:planetroot98@gmail.com" className="text-[#0e3826] font-medium underline">planetroot98@gmail.com</a></p>
              <p className="text-[#7b8580] pt-1">Tagline: Beyond Borders.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
