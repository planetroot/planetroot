/**
 * Centralized Configuration for Planet Root Travels
 * Note: Never hardcode WhatsApp or contact numbers elsewhere in the project.
 */

export const SITE_CONFIG = {
  name: "Planet Root Travels",
  tagline: "Beyond Borders",
  legalName: "Planet Root Travels & Tourism",
  description:
    "Curated luxury Kerala resorts, private pool villas, heritage backwater sanctuaries, and bespoke domestic and international holiday experiences.",
  
  // WhatsApp Configuration (International format without '+' or spaces)
  whatsappNumber: "917594990300",
  whatsappDisplay: "+91 75949 90300",
  
  // Direct Phone & Email
  phone: "+91 75949 90300",
  phoneDisplay: "+91 75949 90300",
  email: "travels@planetroot.in",
  
  // Location
  location: "Kerala, India",
  locationDetails: "Kochi, Wayanad & Kumarakom, Kerala, India",
  
  // Operational Hours
  workingHours: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
  supportNote: "Priority concierge assistance available 24/7 for traveling guests",
  
  // Social Links
  socials: {
    instagram: "https://instagram.com/planetroottravels",
    facebook: "https://facebook.com/planetroottravels",
    whatsapp: "https://wa.me/917594990300",
  },
};

/**
 * Helper to generate official WhatsApp click-to-chat URL
 * URL pattern: https://wa.me/917594990300?text=ENCODED_MESSAGE
 */
export function createWhatsAppUrl(message?: string): string {
  if (!message) {
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  }
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = 
  "Hello Planet Root Travels! I would like to enquire about a luxury stay / holiday package. Please help me plan my getaway.";
