import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Planet Root Travels — Beyond Borders",
  description: "Privacy policy and client data handling standards for Planet Root Travels.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-[#fcfbf7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a86a] block mb-2">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury text-[#181d1a] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs uppercase tracking-widest text-[#7b8580]">
            Effective Date: October 2026 | Planet Root Travels
          </p>
          <div className="w-24 h-[1px] bg-[#c5a86a] mt-6" />
        </div>

        <div className="space-y-8 text-sm text-[#525a55] font-light leading-relaxed font-sans-luxury">
          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">1. Commitment to Client Confidentiality</h2>
            <p>
              At Planet Root Travels (“we”, “our”), we hold the privacy and trust of our travelers with highest reverence. This Privacy Policy outlines our transparent protocols regarding the collection, handling, and protection of your personal travel details when you interact with our website, submit holiday enquiries, or engage with our private travel directors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">2. Information We Collect</h2>
            <p>
              To curate bespoke stays and coordinate verified resort reservations, we collect the following information provided voluntarily by you:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Identifiers:</strong> Full legal name, telephone/WhatsApp contact number, and electronic mail address.</li>
              <li><strong>Travel Specifications:</strong> Preferred destinations, intended dates of travel, accommodation category preferences, estimated number of guests, and approximate budget parameters.</li>
              <li><strong>Administrative Requirements:</strong> Government-issued identification solely when required by regulatory bodies (e.g. Lakshadweep Administration e-Permit clearance).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">3. How Your Information is Utilized</h2>
            <p>
              Your personal data is utilized strictly for the purpose of fulfilling your luxury travel arrangements:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Formulating personalized proposals, verifying resort room inventory, and confirming flight or transfer arrangements.</li>
              <li>Direct concierge communications via WhatsApp, phone, or email regarding your travel requests.</li>
              <li>We strictly do not sell, lease, monetize, or distribute your private contact details to external marketing agencies or unsolicited third parties.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption protocols and secure internal access controls to safeguard your data against unauthorized access, disclosure, or accidental destruction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif-luxury text-[#181d1a]">5. Inquiries & Data Rights</h2>
            <p>
              You maintain the absolute right to inspect, update, or request the deletion of your personal records from our active reservation systems at any time. For questions regarding this policy, please reach out to our team at:
            </p>
            <div className="p-4 bg-white border border-[#0e3826]/10 rounded-xs text-xs space-y-1">
              <p><strong>{SITE_CONFIG.legalName}</strong></p>
              <p>WhatsApp / Phone: {SITE_CONFIG.whatsappDisplay}</p>
              <p>Email: {SITE_CONFIG.email}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
