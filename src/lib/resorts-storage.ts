import fs from "fs";
import path from "path";
import { Resort } from "@/data/resorts";
import defaultResorts from "@/data/resorts.json";

const RESORTS_FILE_PATH = path.join(process.cwd(), "src", "data", "resorts.json");

let inMemoryResorts: Resort[] | null = null;

export function getAllResorts(): Resort[] {
  if (inMemoryResorts) {
    return inMemoryResorts;
  }

  try {
    if (fs.existsSync(RESORTS_FILE_PATH)) {
      const data = fs.readFileSync(RESORTS_FILE_PATH, "utf-8");
      inMemoryResorts = JSON.parse(data) as Resort[];
      return inMemoryResorts;
    }
  } catch (error) {
    // Graceful fallback for read-only serverless environments
  }

  inMemoryResorts = (defaultResorts as Resort[]).slice();
  return inMemoryResorts;
}

export function saveAllResorts(resorts: Resort[]): boolean {
  inMemoryResorts = resorts;
  try {
    fs.writeFileSync(RESORTS_FILE_PATH, JSON.stringify(resorts, null, 2), "utf-8");
  } catch (error) {
    // Graceful catch for read-only serverless environments like Vercel
  }
  return true;
}

export function createResort(newResortData: Partial<Resort>): Resort {
  const current = getAllResorts();

  const slug = (newResortData.name || "new-resort")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const id = `resort-${slug}-${Date.now().toString().slice(-4)}`;

  const created: Resort = {
    id,
    slug,
    name: newResortData.name || "Untitled Luxury Resort",
    tagline: newResortData.tagline || "Curated luxury sanctuary by Planet Root Travels.",
    destination: newResortData.destination || "Wayanad, Kerala",
    destinationSlug: (newResortData.destination || "wayanad").toLowerCase().split(",")[0].trim().replace(/\s+/g, "-"),
    locationSummary: newResortData.locationSummary || `${newResortData.destination || "Kerala"}, India.`,
    category: (newResortData.category as Resort["category"]) || "Private Pool Villa",
    description: newResortData.description || "A breathtaking sanctuary handpicked by Planet Root Travels.",
    longDescription: newResortData.longDescription || newResortData.description || "A secluded luxury haven offering unmatched privacy and nature escapes.",
    heroImage: newResortData.heroImage || "/images/zeno-village/zeno-infinity-pool-valley.jpg",
    galleryImages: newResortData.galleryImages && newResortData.galleryImages.length > 0
      ? newResortData.galleryImages
      : [newResortData.heroImage || "/images/zeno-village/zeno-infinity-pool-valley.jpg"],
    pricePerNight: newResortData.pricePerNight || "₹ 15,000 / Night",
    priceNote: newResortData.priceNote || "Includes breakfast and nature trails.",
    verifiedAmenities: newResortData.verifiedAmenities && newResortData.verifiedAmenities.length > 0
      ? newResortData.verifiedAmenities
      : ["Private Pool", "Valley View", "Farm-to-Table Dining"],
    curatedHighlights: newResortData.curatedHighlights || [
      "Secluded private pool villa overlooking mist-clad valleys",
      "Organic farm dining and sunset high tea",
    ],
    villas: newResortData.villas || [
      {
        id: `villa-${id}-1`,
        name: "Luxury View Villa",
        size: "850 sq.ft.",
        view: "Panoramic Nature Vista",
        occupancy: "2-3 Guests",
        bedType: "King Bed",
        features: ["Private Plunge Pool", "Sun Deck", "Deep Soaking Tub"],
        priceIndication: newResortData.pricePerNight || "₹ 15,000 / Night",
        image: newResortData.heroImage || "/images/zeno-village/zeno-infinity-pool-valley.jpg",
      },
    ],
    policies: newResortData.policies || {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Flexible alteration up to 7 days before arrival.",
      childPolicy: "Children welcome. Safe enclosed properties.",
    },
    featured: Boolean(newResortData.featured ?? true),
    brochurePdf: newResortData.brochurePdf || undefined,
  };

  // Add new resort to beginning of list
  const updated = [created, ...current];
  saveAllResorts(updated);

  return created;
}

export function updateResort(id: string, updates: Partial<Resort>): Resort | null {
  const current = getAllResorts();
  const index = current.findIndex((r) => r.id === id);
  if (index === -1) return null;

  const existing = current[index];

  const destination = updates.destination || existing.destination;
  const destinationSlug = updates.destination
    ? destination.toLowerCase().split(",")[0].trim().replace(/\s+/g, "-")
    : existing.destinationSlug;

  const updated: Resort = {
    ...existing,
    ...updates,
    id: existing.id,
    slug: updates.slug || existing.slug,
    destination,
    destinationSlug,
    locationSummary: updates.locationSummary || `${destination}, India.`,
    brochurePdf: updates.brochurePdf !== undefined ? updates.brochurePdf : existing.brochurePdf,
  };

  current[index] = updated;
  saveAllResorts(current);
  return updated;
}

export function deleteResortById(id: string): boolean {
  const current = getAllResorts();
  const updated = current.filter((r) => r.id !== id);
  return saveAllResorts(updated);
}
