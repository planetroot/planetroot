import fs from "fs";
import path from "path";
import { TourPackage } from "@/data/packages";
import defaultPackages from "@/data/packages.json";

const PACKAGES_FILE_PATH = path.join(process.cwd(), "src", "data", "packages.json");

let inMemoryPackages: TourPackage[] | null = null;

export function getAllPackages(): TourPackage[] {
  if (inMemoryPackages) {
    return inMemoryPackages;
  }

  try {
    if (fs.existsSync(PACKAGES_FILE_PATH)) {
      const data = fs.readFileSync(PACKAGES_FILE_PATH, "utf-8");
      inMemoryPackages = JSON.parse(data) as TourPackage[];
      return inMemoryPackages;
    }
  } catch (error) {
    // Graceful fallback for read-only serverless environments
  }

  inMemoryPackages = (defaultPackages as TourPackage[]).slice();
  return inMemoryPackages;
}

export function saveAllPackages(packages: TourPackage[]): boolean {
  inMemoryPackages = packages;
  try {
    fs.writeFileSync(PACKAGES_FILE_PATH, JSON.stringify(packages, null, 2), "utf-8");
  } catch (error) {
    // Graceful catch for read-only serverless environments like Vercel
  }
  return true;
}

export function getPackageBySlug(slug: string): TourPackage | undefined {
  const all = getAllPackages();
  return all.find((p) => p.slug === slug);
}

export function getPackageById(id: string): TourPackage | undefined {
  const all = getAllPackages();
  return all.find((p) => p.id === id);
}

export function createPackage(newPkgData: Partial<TourPackage>): TourPackage {
  const current = getAllPackages();

  const slug = (newPkgData.slug || newPkgData.title || "new-package")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const id = newPkgData.id || `pkg-${slug}-${Date.now().toString().slice(-4)}`;

  const created: TourPackage = {
    id,
    slug,
    title: newPkgData.title || "Untitled Tour Package",
    category: newPkgData.category || "Custom",
    destination: newPkgData.destination || "Kerala, India",
    destinationSlug: (newPkgData.destination || "kerala").toLowerCase().split(",")[0].trim().replace(/\s+/g, "-"),
    duration: newPkgData.duration || "4 Days / 3 Nights",
    idealFor: newPkgData.idealFor || "Couples, Families & Travelers",
    startingPrice: newPkgData.startingPrice || "From ₹25,000 / person",
    priceNote: newPkgData.priceNote || "Includes accommodation, breakfast, and private vehicle transfers.",
    heroImage: newPkgData.heroImage || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    gallery: newPkgData.gallery && newPkgData.gallery.length > 0
      ? newPkgData.gallery
      : [newPkgData.heroImage || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85"],
    overview: newPkgData.overview || "A tailored journey curated by Planet Root Travels with handpicked stays and bespoke experiences.",
    highlights: newPkgData.highlights && newPkgData.highlights.length > 0
      ? newPkgData.highlights
      : ["Handpicked luxury stays", "Private chauffeur transfers", "Tailored daily itinerary"],
    dayByDay: newPkgData.dayByDay && newPkgData.dayByDay.length > 0
      ? newPkgData.dayByDay
      : [
          {
            day: 1,
            title: "Arrival & Warm Welcome",
            description: "Chauffeur arrival transfer to your private luxury retreat. Leisure evening and welcome dinner.",
            highlights: ["Airport meet and greet", "Scenic arrival drive", "Welcome dinner"],
            mealsIncluded: "Dinner",
          },
        ],
    accommodationDetails: newPkgData.accommodationDetails || {
      category: "Luxury Resorts & Boutique Stays",
      description: "Handcrafted boutique properties with verified views and privacy.",
      stayType: "Private Pool Villa / Heritage Stay",
    },
    transportArrangements: newPkgData.transportArrangements || "Dedicated private air-conditioned vehicle with experienced chauffeur.",
    inclusions: newPkgData.inclusions && newPkgData.inclusions.length > 0
      ? newPkgData.inclusions
      : [
          "Private chauffeur-driven transfers throughout the journey",
          "Luxury accommodation as per selected category",
          "Daily gourmet breakfast",
          "24/7 Planet Root on-trip WhatsApp concierge",
        ],
    exclusions: newPkgData.exclusions && newPkgData.exclusions.length > 0
      ? newPkgData.exclusions
      : [
          "Airfare / train tickets (can be arranged upon request)",
          "Personal expenses and optional activities",
          "Lunch and beverages unless specified",
        ],
    customizationOptions: newPkgData.customizationOptions || [
      "Add private candlelight dinner or poolside floral setup",
      "Upgrade to pool villa or heritage suite",
      "Extend stay or add connected destinations",
    ],
    cancellationTerms: newPkgData.cancellationTerms || "Flexible rescheduling up to 10 days prior to departure.",
    advisoryNotice: newPkgData.advisoryNotice || undefined,
    featured: Boolean(newPkgData.featured ?? true),
  };

  const updated = [created, ...current];
  saveAllPackages(updated);
  return created;
}

export function updatePackage(id: string, updates: Partial<TourPackage>): TourPackage | null {
  const current = getAllPackages();
  const index = current.findIndex((p) => p.id === id);

  if (index === -1) {
    return null;
  }

  const existing = current[index];
  const updatedPkg: TourPackage = {
    ...existing,
    ...updates,
    id: existing.id, // Preserve permanent ID
    slug: updates.slug || existing.slug,
  };

  const nextList = [...current];
  nextList[index] = updatedPkg;
  saveAllPackages(nextList);
  return updatedPkg;
}

export function deletePackageById(id: string): boolean {
  const current = getAllPackages();
  const nextList = current.filter((p) => p.id !== id);

  if (nextList.length === current.length) {
    return false;
  }

  saveAllPackages(nextList);
  return true;
}
