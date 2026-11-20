"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Upload,
  Check,
  Trash2,
  ExternalLink,
  MapPin,
  Clock,
  Eye,
  AlertCircle,
  X,
  CheckCircle2,
  Pencil,
  Compass,
  Calendar,
  Utensils,
  Car,
  ShieldCheck,
  Tag,
  DollarSign,
  FileText,
  RotateCcw,
} from "lucide-react";
import { TourPackage, PackageCategory, ItineraryDay } from "@/data/packages";

const PRESET_CATEGORIES: PackageCategory[] = [
  "Kerala",
  "Domestic",
  "International",
  "Honeymoon",
  "Custom",
];

const PRESET_DESTINATIONS = [
  "Munnar & Alleppey, Kerala",
  "Wayanad & Coorg, South India",
  "Kashmir & Gulmarg, India",
  "Manali & Shimla, Himachal",
  "Rajasthan & Udaipur, India",
  "Maldives Overwater Escapes",
  "Bali & Ubud, Indonesia",
  "Dubai & Abu Dhabi, UAE",
  "Thailand & Phuket, Asia",
  "Singapore & Sentosa",
  "Europe & Swiss Alps",
];

const PRESET_PHOTOS = [
  {
    name: "Kerala Backwaters & Houseboat",
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
  },
  {
    name: "Munnar Tea Highlands",
    url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1920&q=85",
  },
  {
    name: "Wayanad Rainforest Infinity Pool",
    url: "/images/zeno-village/zeno-infinity-pool-valley.jpg",
  },
  {
    name: "Maldives Overwater Lagoon",
    url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=85",
  },
  {
    name: "Bali Jungle Resort",
    url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=85",
  },
  {
    name: "Dubai Skyline & Desert",
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85",
  },
  {
    name: "Kashmir Dal Lake & Peaks",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85",
  },
];

export default function PackagesAdmin() {
  const [activeTab, setActiveTab] = useState<"add" | "list">("list");
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // Search and Category Filter
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  // EDITING STATE
  const [editingPkgId, setEditingPkgId] = useState<string | null>(null);

  // FORM FIELDS
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState<PackageCategory>("Kerala");
  const [destination, setDestination] = useState("Munnar & Alleppey, Kerala");
  const [customDestination, setCustomDestination] = useState("");
  const [duration, setDuration] = useState("5 Days / 4 Nights");
  const [idealFor, setIdealFor] = useState("Couples, Honeymooners & Nature Lovers");
  const [startingPrice, setStartingPrice] = useState("₹ 24,500 / person");
  const [priceNote, setPriceNote] = useState("Includes private chauffeur, resort stay & daily breakfast");
  const [featured, setFeatured] = useState(true);

  // Visuals
  const [heroImage, setHeroImage] = useState(PRESET_PHOTOS[0].url);
  const [gallery, setGallery] = useState<string[]>([
    PRESET_PHOTOS[0].url,
    PRESET_PHOTOS[1].url,
  ]);
  const [imageSelectorMode, setImageSelectorMode] = useState<"preset" | "upload" | "url">("preset");
  const [customUrlInput, setCustomUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Content
  const [overview, setOverview] = useState("");
  const [highlights, setHighlights] = useState<string[]>([
    "Curated boutique resort and private pool villa accommodation",
    "Dedicated private air-conditioned vehicle with English/Hindi chauffeur",
    "Bespoke sightseeing experiences tailored around your preferences",
  ]);
  const [highlightInput, setHighlightInput] = useState("");

  // Day-by-Day Itinerary Builder
  const [dayByDay, setDayByDay] = useState<ItineraryDay[]>([
    {
      day: 1,
      title: "Scenic Arrival & Warm Welcome",
      description: "Chauffeur meet and greet at the airport. Scenic drive to your retreat with welcome refreshments and evening at leisure.",
      highlights: ["Airport meet and greet", "Scenic arrival drive", "Welcome dinner"],
      mealsIncluded: "Dinner",
    },
    {
      day: 2,
      title: "Guided Sightseeing & Sunset Excursion",
      description: "Full day curated expedition covering scenic viewpoints, heritage trails, and private sunset boat ride.",
      highlights: ["Guided natural tour", "Sunset cruise", "Authentic dining"],
      mealsIncluded: "Breakfast & Dinner",
    },
    {
      day: 3,
      title: "Leisure Morning & Onward Journey",
      description: "Unwind by the pool or enjoy a nature trail before your private transfer to the airport.",
      highlights: ["Breakfast overlooking views", "Souvenir shopping", "Airport drop-off"],
      mealsIncluded: "Breakfast",
    },
  ]);

  // Accommodation & Logistics
  const [accommodationCategory, setAccommodationCategory] = useState("Boutique Luxury Resorts & Villas");
  const [accommodationDesc, setAccommodationDesc] = useState("Handpicked properties with verified views and privacy.");
  const [stayType, setStayType] = useState("Private Pool Villa / Heritage Stay");
  const [transportArrangements, setTransportArrangements] = useState("Dedicated private air-conditioned vehicle with experienced chauffeur.");

  // Inclusions & Exclusions
  const [inclusions, setInclusions] = useState<string[]>([
    "Dedicated private chauffeur transfers throughout",
    "Handpicked luxury resort or villa accommodation",
    "Daily gourmet breakfast",
    "24/7 Planet Root WhatsApp travel concierge",
  ]);
  const [inclusionInput, setInclusionInput] = useState("");

  const [exclusions, setExclusions] = useState<string[]>([
    "Airfare or train tickets (available upon request)",
    "Personal expenses and optional excursions",
    "Meals not specified in the itinerary",
  ]);
  const [exclusionInput, setExclusionInput] = useState("");

  const [customizationOptions, setCustomizationOptions] = useState<string[]>([
    "Upgrade to private pool villa or suite",
    "Add romantic candlelight dinner with floral bed setup",
    "Extend stay duration or combine connected destinations",
  ]);
  const [customizationInput, setCustomizationInput] = useState("");

  const [cancellationTerms, setCancellationTerms] = useState("Flexible alteration up to 10 days prior to arrival.");
  const [advisoryNotice, setAdvisoryNotice] = useState("");

  // Fetch Packages
  const fetchPackages = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/packages", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setPackages(data);
      }
    } catch (err) {
      console.error("Failed to load packages:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // Reset Form
  const resetForm = () => {
    setEditingPkgId(null);
    setTitle("");
    setSlug("");
    setCategory("Kerala");
    setDestination("Munnar & Alleppey, Kerala");
    setCustomDestination("");
    setDuration("5 Days / 4 Nights");
    setIdealFor("Couples, Honeymooners & Nature Lovers");
    setStartingPrice("₹ 24,500 / person");
    setPriceNote("Includes private chauffeur, resort stay & daily breakfast");
    setFeatured(true);
    setHeroImage(PRESET_PHOTOS[0].url);
    setGallery([PRESET_PHOTOS[0].url, PRESET_PHOTOS[1].url]);
    setOverview("");
    setHighlights([
      "Curated boutique resort and private pool villa accommodation",
      "Dedicated private air-conditioned vehicle with English/Hindi chauffeur",
      "Bespoke sightseeing experiences tailored around your preferences",
    ]);
    setDayByDay([
      {
        day: 1,
        title: "Scenic Arrival & Warm Welcome",
        description: "Chauffeur meet and greet at the airport. Scenic drive to your retreat with welcome refreshments and evening at leisure.",
        highlights: ["Airport meet and greet", "Scenic arrival drive", "Welcome dinner"],
        mealsIncluded: "Dinner",
      },
      {
        day: 2,
        title: "Guided Sightseeing & Sunset Excursion",
        description: "Full day curated expedition covering scenic viewpoints, heritage trails, and private sunset boat ride.",
        highlights: ["Guided natural tour", "Sunset cruise", "Authentic dining"],
        mealsIncluded: "Breakfast & Dinner",
      },
    ]);
    setAccommodationCategory("Boutique Luxury Resorts & Villas");
    setAccommodationDesc("Handpicked properties with verified views and privacy.");
    setStayType("Private Pool Villa / Heritage Stay");
    setTransportArrangements("Dedicated private air-conditioned vehicle with experienced chauffeur.");
    setInclusions([
      "Dedicated private chauffeur transfers throughout",
      "Handpicked luxury resort or villa accommodation",
      "Daily gourmet breakfast",
      "24/7 Planet Root WhatsApp travel concierge",
    ]);
    setExclusions([
      "Airfare or train tickets (available upon request)",
      "Personal expenses and optional excursions",
      "Meals not specified in the itinerary",
    ]);
    setCustomizationOptions([
      "Upgrade to private pool villa or suite",
      "Add romantic candlelight dinner with floral bed setup",
      "Extend stay duration or combine connected destinations",
    ]);
    setCancellationTerms("Flexible alteration up to 10 days prior to arrival.");
    setAdvisoryNotice("");
  };

  // Populate form to edit
  const handleStartEdit = (pkg: TourPackage) => {
    setEditingPkgId(pkg.id);
    setTitle(pkg.title || "");
    setSlug(pkg.slug || "");
    setCategory(pkg.category || "Custom");

    if (PRESET_DESTINATIONS.includes(pkg.destination)) {
      setDestination(pkg.destination);
      setCustomDestination("");
    } else {
      setDestination("custom");
      setCustomDestination(pkg.destination || "");
    }

    setDuration(pkg.duration || "4 Days / 3 Nights");
    setIdealFor(pkg.idealFor || "");
    setStartingPrice(pkg.startingPrice || "");
    setPriceNote(pkg.priceNote || "");
    setFeatured(Boolean(pkg.featured));
    setHeroImage(pkg.heroImage || PRESET_PHOTOS[0].url);
    setGallery(pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.heroImage || PRESET_PHOTOS[0].url]);
    setOverview(pkg.overview || "");
    setHighlights(pkg.highlights || []);
    setDayByDay(pkg.dayByDay && pkg.dayByDay.length > 0 ? pkg.dayByDay : []);
    setAccommodationCategory(pkg.accommodationDetails?.category || "Boutique Luxury Resorts & Villas");
    setAccommodationDesc(pkg.accommodationDetails?.description || "");
    setStayType(pkg.accommodationDetails?.stayType || "Private Pool Villa");
    setTransportArrangements(pkg.transportArrangements || "");
    setInclusions(pkg.inclusions || []);
    setExclusions(pkg.exclusions || []);
    setCustomizationOptions(pkg.customizationOptions || []);
    setCancellationTerms(pkg.cancellationTerms || "");
    setAdvisoryNotice(pkg.advisoryNotice || "");

    setActiveTab("add");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showNotification("success", `Editing "${pkg.title}". Make your updates below.`);
  };

  // Handle File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: "hero" | "gallery") => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "File upload failed");
      }

      if (target === "hero") {
        setHeroImage(data.url);
        showNotification("success", "Hero image uploaded successfully!");
      } else {
        setGallery((prev) => [...prev, data.url]);
        showNotification("success", "Image added to gallery!");
      }
    } catch (err: any) {
      showNotification("error", err.message || "Upload failed");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Day-by-day Itinerary Handlers
  const handleAddDay = () => {
    const nextDayNum = dayByDay.length + 1;
    setDayByDay((prev) => [
      ...prev,
      {
        day: nextDayNum,
        title: `Day ${nextDayNum} Highlights`,
        description: "Curated experiences, local exploration, and relaxing stay.",
        highlights: ["Sightseeing trail", "Culinary experience"],
        mealsIncluded: "Breakfast",
      },
    ]);
  };

  const handleRemoveDay = (index: number) => {
    if (dayByDay.length <= 1) {
      showNotification("error", "At least one itinerary day is required");
      return;
    }
    const updated = dayByDay
      .filter((_, i) => i !== index)
      .map((item, i) => ({ ...item, day: i + 1 }));
    setDayByDay(updated);
  };

  const handleUpdateDay = (index: number, field: keyof ItineraryDay, value: any) => {
    setDayByDay((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalDestination = destination === "custom" ? customDestination.trim() : destination;

    if (!title.trim()) {
      showNotification("error", "Please provide a package title");
      return;
    }

    if (!finalDestination) {
      showNotification("error", "Please specify a destination");
      return;
    }

    try {
      setIsSubmitting(true);

      const packageData: Partial<TourPackage> = {
        title: title.trim(),
        slug: slug.trim() || undefined,
        category,
        destination: finalDestination,
        duration: duration.trim(),
        idealFor: idealFor.trim(),
        startingPrice: startingPrice.trim(),
        priceNote: priceNote.trim(),
        featured,
        heroImage,
        gallery: gallery.length > 0 ? gallery : [heroImage],
        overview: overview.trim() || `An exclusive ${duration} curated journey in ${finalDestination} curated by Planet Root Travels.`,
        highlights: highlights.filter((h) => h.trim().length > 0),
        dayByDay,
        accommodationDetails: {
          category: accommodationCategory.trim(),
          description: accommodationDesc.trim(),
          stayType: stayType.trim(),
        },
        transportArrangements: transportArrangements.trim(),
        inclusions: inclusions.filter((inc) => inc.trim().length > 0),
        exclusions: exclusions.filter((exc) => exc.trim().length > 0),
        customizationOptions: customizationOptions.filter((opt) => opt.trim().length > 0),
        cancellationTerms: cancellationTerms.trim(),
        advisoryNotice: advisoryNotice.trim() || undefined,
      };

      let res;
      if (editingPkgId) {
        // Update existing package
        res = await fetch("/api/packages", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingPkgId, ...packageData }),
        });
      } else {
        // Create new package
        res = await fetch("/api/packages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(packageData),
        });
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to save package");
      }

      showNotification(
        "success",
        editingPkgId
          ? `Package "${title}" updated successfully!`
          : `Package "${title}" created and published!`
      );

      resetForm();
      fetchPackages();
      setActiveTab("list");
    } catch (err: any) {
      showNotification("error", err.message || "Failed to save package");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Package
  const handleDeletePackage = async (id: string, pkgTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${pkgTitle}"? This cannot be undone.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/packages?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete package");
      }

      showNotification("success", `Package "${pkgTitle}" deleted.`);
      if (editingPkgId === id) resetForm();
      fetchPackages();
    } catch (err: any) {
      showNotification("error", err.message || "Failed to delete package");
    }
  };

  // Filtered packages for listing
  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || pkg.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border text-sm font-medium transition-all ${
            notification.type === "success"
              ? "bg-stone-900 text-white border-stone-700"
              : "bg-red-950 text-red-200 border-red-500/40"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          )}
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 text-stone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Package Sub-Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (editingPkgId) resetForm();
              setActiveTab("add");
            }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "add"
                ? "bg-stone-900 text-white shadow-sm"
                : "text-stone-600 hover:text-black hover:bg-stone-100"
            }`}
          >
            {editingPkgId ? (
              <>
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit Package</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add Tour Package</span>
              </>
            )}
          </button>

          <button
            onClick={() => setActiveTab("list")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "list"
                ? "bg-stone-900 text-white shadow-sm"
                : "text-stone-600 hover:text-black hover:bg-stone-100"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>All Packages ({packages.length})</span>
          </button>
        </div>

        <Link
          href="/packages"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-black font-medium"
        >
          <span>View Public Packages Page</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: ADD OR EDIT PACKAGE FORM */}
      {/* ========================================================= */}
      {activeTab === "add" && (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Editing Notice Banner */}
          {editingPkgId && (
            <div className="flex items-center justify-between p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-900">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-800">
                  <Pencil className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Editing Tour Package: {title}</h4>
                  <p className="text-xs text-amber-800/80">
                    Make your adjustments below and click &quot;Save &amp; Update Package&quot;.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-medium text-amber-900 hover:bg-amber-50 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Cancel Editing</span>
              </button>
            </div>
          )}

          {/* 1. Basic Details */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#c5a059]" />
                <span>1. Package Essentials</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Title, destination, travel category, and duration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Title */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Package Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Munnar & Alleppey Honeymoon Retreat"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Travel Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PackageCategory)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm bg-white"
                >
                  {PRESET_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat} Tour Package
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Duration <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 5 Days / 4 Nights"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Destination Circuit <span className="text-red-500">*</span>
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm bg-white mb-2"
                >
                  {PRESET_DESTINATIONS.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                  <option value="custom">+ Enter Custom Destination...</option>
                </select>

                {destination === "custom" && (
                  <input
                    type="text"
                    required
                    value={customDestination}
                    onChange={(e) => setCustomDestination(e.target.value)}
                    placeholder="Enter custom destination (e.g. Wayanad & Mysore)"
                    className="w-full px-4 py-2 rounded-xl border border-stone-300 text-sm focus:outline-hidden focus:border-[#072016]"
                  />
                )}
              </div>

              {/* Ideal For */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Ideal For
                </label>
                <input
                  type="text"
                  value={idealFor}
                  onChange={(e) => setIdealFor(e.target.value)}
                  placeholder="e.g. Couples, Honeymooners & Nature Lovers"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm"
                />
              </div>
            </div>
          </div>

          {/* 2. Pricing & Homepage Feature */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#c5a059]" />
                <span>2. Pricing &amp; Visibility</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Starting rate, price inclusions note, and featured showcase status.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Starting Price */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Starting Rate <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={startingPrice}
                  onChange={(e) => setStartingPrice(e.target.value)}
                  placeholder="e.g. From ₹24,500 / person"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm"
                />
              </div>

              {/* Featured Switch */}
              <div className="flex items-center pt-6">
                <label className="relative flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-stone-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#072016]"></div>
                  <span className="text-xs font-medium text-stone-800">
                    Feature on Homepage Showcase
                  </span>
                </label>
              </div>

              {/* Price Note */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Price Inclusion Note
                </label>
                <input
                  type="text"
                  value={priceNote}
                  onChange={(e) => setPriceNote(e.target.value)}
                  placeholder="e.g. Includes private chauffeur, luxury resort stay & daily breakfast"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm"
                />
              </div>
            </div>
          </div>

          {/* 3. Hero Visuals & Photography */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#c5a059]" />
                <span>3. Photography &amp; Visuals</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Hero showcase image and package gallery photos.
              </p>
            </div>

            {/* Current Hero Preview */}
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="relative w-full sm:w-64 aspect-video rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                <Image src={heroImage} alt="Package Hero" fill className="object-cover" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 text-white text-[10px] rounded-md font-medium">
                  Current Hero Photo
                </span>
              </div>

              <div className="flex-1 space-y-3 w-full">
                {/* Mode Selector */}
                <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                  <button
                    type="button"
                    onClick={() => setImageSelectorMode("preset")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                      imageSelectorMode === "preset"
                        ? "bg-stone-900 text-white"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    Preset Destinations
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageSelectorMode("upload")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                      imageSelectorMode === "upload"
                        ? "bg-stone-900 text-white"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    Upload from Device
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageSelectorMode("url")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                      imageSelectorMode === "url"
                        ? "bg-stone-900 text-white"
                        : "text-stone-600 hover:bg-stone-100"
                    }`}
                  >
                    Custom URL
                  </button>
                </div>

                {/* Preset Selector */}
                {imageSelectorMode === "preset" && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-h-48 overflow-y-auto p-1">
                    {PRESET_PHOTOS.map((photo) => (
                      <div
                        key={photo.name}
                        onClick={() => setHeroImage(photo.url)}
                        className={`relative aspect-video rounded-lg overflow-hidden border cursor-pointer group transition-all ${
                          heroImage === photo.url
                            ? "border-[#072016] ring-2 ring-[#072016]"
                            : "border-stone-200 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image src={photo.url} alt={photo.name} fill className="object-cover" />
                        <span className="absolute bottom-1 left-1 right-1 text-[9px] text-white bg-black/60 px-1 truncate rounded">
                          {photo.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* File Upload Mode */}
                {imageSelectorMode === "upload" && (
                  <div className="p-4 border-2 border-dashed border-stone-200 rounded-xl text-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "hero")}
                      className="hidden"
                      id="hero-file-upload"
                    />
                    <label
                      htmlFor="hero-file-upload"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#072016] text-[#dfcaa2] text-xs font-medium rounded-lg cursor-pointer hover:bg-[#0e3826] transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{isUploading ? "Uploading Image..." : "Choose Image File"}</span>
                    </label>
                    <p className="text-[11px] text-stone-500 mt-2">
                      Supports JPG, PNG, WEBP up to 10MB
                    </p>
                  </div>
                )}

                {/* Custom URL Input */}
                {imageSelectorMode === "url" && (
                  <div className="flex items-center gap-2">
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="flex-1 px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-hidden focus:border-[#072016]"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (customUrlInput.trim()) {
                          setHeroImage(customUrlInput.trim());
                          setCustomUrlInput("");
                          showNotification("success", "Hero image URL set!");
                        }
                      }}
                      className="px-3 py-2 bg-[#072016] text-[#dfcaa2] text-xs rounded-lg font-medium cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 4. Overview & Highlights */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#c5a059]" />
                <span>4. Overview &amp; Key Highlights</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Editorial trip summary and selling highlights.
              </p>
            </div>

            {/* Overview */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                Package Overview
              </label>
              <textarea
                rows={3}
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                placeholder="Describe the atmosphere, travel style, and why this journey is exceptional..."
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:outline-hidden focus:border-[#072016] text-sm"
              />
            </div>

            {/* Highlights List */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Trip Highlights
              </label>

              <div className="space-y-2 mb-3">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 p-2.5 bg-stone-50 border border-stone-200/80 rounded-xl text-xs text-stone-800"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{h}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setHighlights((prev) => prev.filter((_, idx) => idx !== i))}
                      className="text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={highlightInput}
                  onChange={(e) => setHighlightInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (highlightInput.trim()) {
                        setHighlights((prev) => [...prev, highlightInput.trim()]);
                        setHighlightInput("");
                      }
                    }
                  }}
                  placeholder="Type a highlight and press Enter or Add..."
                  className="flex-1 px-4 py-2 rounded-xl border border-stone-200 text-xs focus:outline-hidden focus:border-[#072016]"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (highlightInput.trim()) {
                      setHighlights((prev) => [...prev, highlightInput.trim()]);
                      setHighlightInput("");
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-[#072016] text-[#dfcaa2] text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* 5. Day-by-Day Itinerary Builder */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <div>
                <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#c5a059]" />
                  <span>5. Day-by-Day Itinerary ({dayByDay.length} Days)</span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Build the chronological daily schedule for travelers.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddDay}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#072016] text-[#dfcaa2] text-xs font-semibold uppercase tracking-wider hover:bg-[#0e3826] transition-colors cursor-pointer shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Day {dayByDay.length + 1}</span>
              </button>
            </div>

            <div className="space-y-4">
              {dayByDay.map((dayItem, index) => (
                <div
                  key={index}
                  className="border border-stone-200 rounded-xl p-5 bg-stone-50/50 space-y-4 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#072016] text-[#dfcaa2]">
                      Day {dayItem.day}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleRemoveDay(index)}
                      className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove Day</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Day Title */}
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Day {dayItem.day} Title
                      </label>
                      <input
                        type="text"
                        value={dayItem.title}
                        onChange={(e) => handleUpdateDay(index, "title", e.target.value)}
                        placeholder="e.g. Scenic Mountain Ascent & Fireside Dinner"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-hidden focus:border-[#072016]"
                      />
                    </div>

                    {/* Meals Included */}
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Meals Included
                      </label>
                      <input
                        type="text"
                        value={dayItem.mealsIncluded}
                        onChange={(e) => handleUpdateDay(index, "mealsIncluded", e.target.value)}
                        placeholder="e.g. Breakfast & Dinner"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-hidden focus:border-[#072016]"
                      />
                    </div>
                  </div>

                  {/* Day Description */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Day {dayItem.day} Description
                    </label>
                    <textarea
                      rows={2}
                      value={dayItem.description}
                      onChange={(e) => handleUpdateDay(index, "description", e.target.value)}
                      placeholder="Detailed schedule of the day, transfer logistics, and sights visited..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-hidden focus:border-[#072016]"
                    />
                  </div>

                  {/* Highlights of the Day */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Day {dayItem.day} Key Highlights (Comma separated)
                    </label>
                    <input
                      type="text"
                      value={Array.isArray(dayItem.highlights) ? dayItem.highlights.join(", ") : ""}
                      onChange={(e) => {
                        const split = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                        handleUpdateDay(index, "highlights", split);
                      }}
                      placeholder="e.g. Tea museum visit, Sunset viewpoint, Fireside high tea"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-hidden focus:border-[#072016]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Inclusions & Exclusions */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>6. Inclusions &amp; Exclusions</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Transparent inclusions and exclusions for travelers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                  What is Included
                </label>
                <div className="space-y-1.5 mb-3">
                  {inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-2 p-2 bg-emerald-50/60 border border-emerald-100 rounded-lg text-xs text-emerald-950"
                    >
                      <span className="truncate">{inc}</span>
                      <button
                        type="button"
                        onClick={() => setInclusions((prev) => prev.filter((_, idx) => idx !== i))}
                        className="text-stone-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inclusionInput}
                    onChange={(e) => setInclusionInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (inclusionInput.trim()) {
                          setInclusions((prev) => [...prev, inclusionInput.trim()]);
                          setInclusionInput("");
                        }
                      }
                    }}
                    placeholder="Add inclusion..."
                    className="flex-1 px-3 py-1.5 rounded-lg border border-stone-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (inclusionInput.trim()) {
                        setInclusions((prev) => [...prev, inclusionInput.trim()]);
                        setInclusionInput("");
                      }
                    }}
                    className="px-3 py-1.5 bg-[#072016] text-[#dfcaa2] text-xs font-semibold rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Exclusions */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  What is Excluded
                </label>
                <div className="space-y-1.5 mb-3">
                  {exclusions.map((exc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-2 p-2 bg-stone-50 border border-stone-200/80 rounded-lg text-xs text-stone-600"
                    >
                      <span className="truncate">{exc}</span>
                      <button
                        type="button"
                        onClick={() => setExclusions((prev) => prev.filter((_, idx) => idx !== i))}
                        className="text-stone-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={exclusionInput}
                    onChange={(e) => setExclusionInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (exclusionInput.trim()) {
                          setExclusions((prev) => [...prev, exclusionInput.trim()]);
                          setExclusionInput("");
                        }
                      }
                    }}
                    placeholder="Add exclusion..."
                    className="flex-1 px-3 py-1.5 rounded-lg border border-stone-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (exclusionInput.trim()) {
                        setExclusions((prev) => [...prev, exclusionInput.trim()]);
                        setExclusionInput("");
                      }
                    }}
                    className="px-3 py-1.5 bg-stone-700 text-white text-xs font-semibold rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Accommodation & Transport Details */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h2 className="text-lg font-semibold text-[#181d1a] flex items-center gap-2">
                <Car className="w-5 h-5 text-[#c5a059]" />
                <span>7. Stays &amp; Transport Arrangements</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Property categories, stay types, and dedicated vehicle logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Stay Category
                </label>
                <input
                  type="text"
                  value={accommodationCategory}
                  onChange={(e) => setAccommodationCategory(e.target.value)}
                  placeholder="e.g. Boutique Luxury Resorts & Villas"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Stay Type
                </label>
                <input
                  type="text"
                  value={stayType}
                  onChange={(e) => setStayType(e.target.value)}
                  placeholder="e.g. Private Pool Villa / Heritage Tea Estate"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Transport Logistics
                </label>
                <input
                  type="text"
                  value={transportArrangements}
                  onChange={(e) => setTransportArrangements(e.target.value)}
                  placeholder="e.g. Dedicated private air-conditioned vehicle with experienced chauffeur."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Submit Actions */}
          <div className="p-6 bg-white border border-stone-200/80 rounded-2xl flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2.5 rounded-full border border-stone-200 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:bg-stone-50 transition-colors"
            >
              Reset Form
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-stone-900 text-white hover:bg-black text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {editingPkgId ? (
                <>
                  <Pencil className="w-4 h-4" />
                  <span>{isSubmitting ? "Saving Updates..." : "Save & Update Package"}</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>{isSubmitting ? "Publishing..." : "Publish Tour Package"}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* ========================================================= */}
      {/* TAB 2: MANAGE ALL TOUR PACKAGES */}
      {/* ========================================================= */}
      {activeTab === "list" && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div>
              <h2 className="text-lg font-semibold text-[#181d1a]">
                Active Tour Packages ({packages.length})
              </h2>
              <p className="text-xs text-stone-500">
                Manage, edit, or remove live tour packages displayed on Planet Root Travels.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                resetForm();
                setActiveTab("add");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Package</span>
            </button>
          </div>

          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by package title or destination..."
              className="px-4 py-2 text-xs rounded-xl border border-stone-200 bg-stone-50/70 focus:outline-hidden focus:border-[#072016] flex-1 max-w-md"
            />

            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
              {["All", ...PRESET_CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                    categoryFilter === cat
                      ? "bg-[#072016] text-[#dfcaa2]"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Package List */}
          {isLoading ? (
            <div className="py-16 text-center text-sm text-stone-500">
              Loading packages database...
            </div>
          ) : filteredPackages.length === 0 ? (
            <div className="py-16 text-center">
              <Compass className="w-12 h-12 text-stone-300 mx-auto mb-3" />
              <p className="text-base font-medium text-stone-700">No tour packages found</p>
              <p className="text-xs text-stone-500 mt-1">
                {searchQuery ? "Try adjusting your search criteria." : "Click above to create your first tour package."}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-stone-100">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-stone-50/70 p-3 rounded-xl transition-colors"
                >
                  {/* Thumbnail & Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                      <Image src={pkg.heroImage} alt={pkg.title} fill className="object-cover" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-[#181d1a]">
                          {pkg.title}
                        </h3>
                        {pkg.featured && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#c5a059]/15 text-[#8c6b2d]">
                            Featured
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200">
                          {pkg.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-stone-400" />
                          {pkg.destination}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#0e3826] font-medium">
                          <Clock className="w-3 h-3" />
                          {pkg.duration}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-stone-800">
                          {pkg.startingPrice}
                        </span>
                        <span>•</span>
                        <span className="text-stone-400">
                          {pkg.dayByDay?.length || 0} Days Itinerary
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={() => handleStartEdit(pkg)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50/60 text-amber-900 hover:bg-amber-100 text-xs font-medium transition-colors cursor-pointer"
                      title="Edit Tour Package"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <Link
                      href={`/packages/${pkg.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:text-[#0e3826] hover:border-[#0e3826] text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleDeletePackage(pkg.id, pkg.title)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-xs font-medium transition-colors cursor-pointer"
                      title="Delete Package"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
