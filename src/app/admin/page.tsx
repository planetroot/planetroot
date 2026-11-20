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
  Sparkles,
  Building2,
  DollarSign,
  MapPin,
  Tag,
  FileText,
  ListPlus,
  ArrowRight,
  Eye,
  AlertCircle,
  X,
  CheckCircle2,
  Pencil,
  FileUp,
  FileCheck,
  RotateCcw,
  Compass,
} from "lucide-react";
import { Resort } from "@/data/resorts";
import PackagesAdmin from "@/components/admin/PackagesAdmin";

const PRESET_DESTINATIONS = [
  "Wayanad, Kerala",
  "900 Kandi, Wayanad",
  "Munnar, Kerala",
  "Thekkady, Kerala",
  "Alleppey, Kerala",
  "Vagamon, Kerala",
  "Kovalam, Kerala",
  "Varkala, Kerala",
  "Bekal, Kerala",
  "Coorg, Karnataka",
  "Ooty, Tamil Nadu",
];

const PRESET_CATEGORIES: Resort["category"][] = [
  "Private Pool Villa",
  "Heritage Backwater Villa",
  "Tea Estate Bungalow",
  "Rainforest Treehouse",
  "Mountain Chalet",
  "Beachfront Stay",
  "Luxury Resort",
];

const POPULAR_AMENITIES = [
  "Private Pool",
  "Infinity Pool",
  "Valley View",
  "Mountain Vista",
  "Jacuzzi",
  "Plantation Trails",
  "Farm-to-Table Dining",
  "Spa & Ayurveda",
  "Balcony Deck",
  "Campfire & Stargazing",
  "Bathtub / Soaking Tub",
  "Wi-Fi & Workstation",
  "Candlelight Dinner",
  "Forest View",
  "Kids Play Area",
  "24/7 Butler Service",
];

const PRESET_PHOTOS = [
  {
    name: "Infinity Pool Valley",
    url: "/images/zeno-village/zeno-infinity-pool-valley.jpg",
  },
  {
    name: "Wooden Luxury Suite",
    url: "/images/zeno-village/zeno-wooden-suite.jpg",
  },
  {
    name: "A-Frame Glass Cabin",
    url: "/images/zeno-village/zeno-aframe-glass-cabin.jpg",
  },
  {
    name: "Canopy Treehouse",
    url: "/images/zeno-village/zeno-canopy-treehouse.jpg",
  },
  {
    name: "Forest Balcony",
    url: "/images/zeno-village/zeno-forest-treehouse-balcony.jpg",
  },
  {
    name: "Curved Nature Pod",
    url: "/images/zeno-village/zeno-curved-pod.jpg",
  },
  {
    name: "Glamping Pod Deck",
    url: "/images/zeno-village/zeno-glamping-pod-deck.jpg",
  },
  {
    name: "Elevated Chalet",
    url: "/images/zeno-village/zeno-elevated-chalet.jpg",
  },
  {
    name: "Stone Mountain Lodge",
    url: "/images/zeno-village/zeno-stone-lodge.jpg",
  },
  {
    name: "Round Wooden Cottage",
    url: "/images/zeno-village/zeno-round-wooden-cottage.jpg",
  },
  {
    name: "Pool Forest Panoramic",
    url: "/images/zeno-village/zeno-pool-forest-panoramic.jpg",
  },
  {
    name: "Mountain Shadow Villa",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=85",
  },
  {
    name: "Heritage Backwaters",
    url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
  },
];

export default function AdminPage() {
  const [adminSection, setAdminSection] = useState<"resorts" | "packages">("resorts");
  const [activeTab, setActiveTab] = useState<"add" | "list">("add");
  const [resorts, setResorts] = useState<Resort[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingBrochure, setIsUploadingBrochure] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // EDITING STATE
  const [editingResortId, setEditingResortId] = useState<string | null>(null);

  // FORM STATE
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [destination, setDestination] = useState("Wayanad, Kerala");
  const [customDestination, setCustomDestination] = useState("");
  const [category, setCategory] = useState<Resort["category"]>("Private Pool Villa");
  const [pricePerNight, setPricePerNight] = useState("₹ 14,500 / Night");
  const [priceNote, setPriceNote] = useState("Includes breakfast, taxes & plantation trail");
  const [featured, setFeatured] = useState(true);
  const [heroImage, setHeroImage] = useState("/images/zeno-village/zeno-infinity-pool-valley.jpg");
  const [galleryImages, setGalleryImages] = useState<string[]>([
    "/images/zeno-village/zeno-infinity-pool-valley.jpg",
    "/images/zeno-village/zeno-wooden-suite.jpg",
    "/images/zeno-village/zeno-aframe-glass-cabin.jpg",
  ]);
  const [brochurePdf, setBrochurePdf] = useState<string>("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "Private Pool",
    "Valley View",
    "Plantation Trails",
    "Farm-to-Table Dining",
  ]);
  const [customAmenityInput, setCustomAmenityInput] = useState("");
  const [highlight1, setHighlight1] = useState("Private infinity pool overlooking misty Western Ghats");
  const [highlight2, setHighlight2] = useState("Curated plantation walks and authentic chef-curated dining");
  const [villaName, setVillaName] = useState("Signature Luxury Pool Villa");
  const [villaSize, setVillaSize] = useState("850 sq.ft.");
  const [villaView, setVillaView] = useState("Panoramic Forest & Valley Vista");

  // Image tab for hero image selector
  const [imageSelectorMode, setImageSelectorMode] = useState<"preset" | "upload" | "url">("preset");
  const [customUrlInput, setCustomUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const brochureInputRef = useRef<HTMLInputElement>(null);

  // Fetch resorts
  const fetchResorts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/resorts", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setResorts(data);
      }
    } catch (err) {
      console.error("Failed to load resorts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResorts();
  }, []);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // Reset Form
  const resetForm = () => {
    setEditingResortId(null);
    setName("");
    setTagline("");
    setDestination("Wayanad, Kerala");
    setCustomDestination("");
    setCategory("Private Pool Villa");
    setPricePerNight("₹ 14,500 / Night");
    setPriceNote("Includes breakfast, taxes & plantation trail");
    setFeatured(true);
    setHeroImage("/images/zeno-village/zeno-infinity-pool-valley.jpg");
    setGalleryImages([
      "/images/zeno-village/zeno-infinity-pool-valley.jpg",
      "/images/zeno-village/zeno-wooden-suite.jpg",
      "/images/zeno-village/zeno-aframe-glass-cabin.jpg",
    ]);
    setBrochurePdf("");
    setDescription("");
    setLongDescription("");
    setSelectedAmenities([
      "Private Pool",
      "Valley View",
      "Plantation Trails",
      "Farm-to-Table Dining",
    ]);
    setCustomAmenityInput("");
    setHighlight1("Private infinity pool overlooking misty Western Ghats");
    setHighlight2("Curated plantation walks and authentic chef-curated dining");
    setVillaName("Signature Luxury Pool Villa");
    setVillaSize("850 sq.ft.");
    setVillaView("Panoramic Forest & Valley Vista");
  };

  // Populate form to edit existing resort
  const handleStartEdit = (resort: Resort) => {
    setEditingResortId(resort.id);
    setName(resort.name || "");
    setTagline(resort.tagline || "");

    if (PRESET_DESTINATIONS.includes(resort.destination)) {
      setDestination(resort.destination);
      setCustomDestination("");
    } else {
      setDestination("custom");
      setCustomDestination(resort.destination || "");
    }

    setCategory(resort.category || "Private Pool Villa");
    setPricePerNight(resort.pricePerNight || "");
    setPriceNote(resort.priceNote || "");
    setFeatured(Boolean(resort.featured));
    setHeroImage(resort.heroImage || "/images/zeno-village/zeno-infinity-pool-valley.jpg");
    setGalleryImages(
      resort.galleryImages && resort.galleryImages.length > 0
        ? resort.galleryImages
        : [resort.heroImage || "/images/zeno-village/zeno-infinity-pool-valley.jpg"]
    );
    setBrochurePdf(resort.brochurePdf || "");
    setDescription(resort.description || "");
    setLongDescription(resort.longDescription || "");
    setSelectedAmenities(resort.verifiedAmenities || []);
    setHighlight1(resort.curatedHighlights?.[0] || "");
    setHighlight2(resort.curatedHighlights?.[1] || "");

    if (resort.villas && resort.villas.length > 0) {
      setVillaName(resort.villas[0].name || "");
      setVillaSize(resort.villas[0].size || "");
      setVillaView(resort.villas[0].view || "");
    } else {
      setVillaName(`${resort.name} Signature Villa`);
      setVillaSize("850 sq.ft.");
      setVillaView("Panoramic Nature Vista");
    }

    setActiveTab("add");
    window.scrollTo({ top: 0, behavior: "smooth" });
    showNotification("success", `Editing "${resort.name}". Make your changes below.`);
  };

  // Handle image upload
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
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Upload failed");
      }

      if (target === "hero") {
        setHeroImage(data.url);
        if (!galleryImages.includes(data.url)) {
          setGalleryImages((prev) => [data.url, ...prev]);
        }
      } else {
        if (!galleryImages.includes(data.url)) {
          setGalleryImages((prev) => [...prev, data.url]);
        }
      }
      showNotification("success", "Photo uploaded successfully!");
    } catch (err: any) {
      showNotification("error", err.message || "Failed to upload photo");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Handle PDF Brochure upload
  const handleBrochureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf") && file.type !== "application/pdf") {
      showNotification("error", "Please upload a valid PDF file");
      return;
    }

    try {
      setIsUploadingBrochure(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Brochure upload failed");
      }

      setBrochurePdf(data.url);
      showNotification("success", "Resort brochure PDF uploaded successfully!");
    } catch (err: any) {
      showNotification("error", err.message || "Failed to upload brochure PDF");
    } finally {
      setIsUploadingBrochure(false);
      if (brochureInputRef.current) brochureInputRef.current.value = "";
    }
  };

  // Toggle amenity
  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleAddCustomAmenity = () => {
    if (customAmenityInput.trim() && !selectedAmenities.includes(customAmenityInput.trim())) {
      setSelectedAmenities([...selectedAmenities, customAmenityInput.trim()]);
      setCustomAmenityInput("");
    }
  };

  const removeGalleryImage = (url: string) => {
    setGalleryImages(galleryImages.filter((img) => img !== url));
  };

  // Submit resort (Create or Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      showNotification("error", "Please enter a resort name");
      return;
    }

    const finalDestination = destination === "custom" ? customDestination.trim() : destination;
    if (!finalDestination) {
      showNotification("error", "Please specify a destination");
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        name: name.trim(),
        tagline: tagline.trim() || `Handpicked ${category} experience curated by Planet Root Travels.`,
        destination: finalDestination,
        category,
        pricePerNight: pricePerNight.trim() || "₹ 15,000 / Night",
        priceNote: priceNote.trim() || "Includes breakfast & complimentary nature walks",
        featured,
        heroImage,
        galleryImages: galleryImages.length > 0 ? galleryImages : [heroImage],
        brochurePdf: brochurePdf.trim() || undefined,
        description:
          description.trim() ||
          `Escape into pure luxury at ${name.trim()}, nestled in the tranquil beauty of ${finalDestination}. Designed for discerning travelers seeking privacy, comfort, and nature.`,
        longDescription:
          longDescription.trim() ||
          `Set against the breathtaking landscapes of ${finalDestination}, ${name.trim()} offers an unparalleled retreat for honeymoons, private getaways, and luxury holidays. Experience world-class hospitality, curated local cuisine, and unmatched serenity.`,
        verifiedAmenities: selectedAmenities.length > 0 ? selectedAmenities : ["Private Pool", "Valley View"],
        curatedHighlights: [highlight1, highlight2].filter(Boolean),
        villas: [
          {
            id: `villa-${Date.now()}`,
            name: villaName.trim() || `${name.trim()} Premier Villa`,
            size: villaSize.trim() || "850 sq.ft.",
            view: villaView.trim() || "Panoramic Nature Vista",
            occupancy: "2-3 Guests",
            bedType: "King Bed",
            features: selectedAmenities.slice(0, 4),
            priceIndication: pricePerNight.trim() || "₹ 15,000 / Night",
            image: heroImage,
          },
        ],
        policies: {
          checkIn: "2:00 PM",
          checkOut: "11:00 AM",
          cancellation: "Flexible alteration up to 7 days prior to check-in.",
          childPolicy: "Children welcome. Verified family-friendly suites and enclosed villas.",
        },
      };

      if (editingResortId) {
        // UPDATE existing resort
        const res = await fetch("/api/resorts", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingResortId, ...payload }),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to update resort");
        }

        showNotification("success", `"${name}" updated successfully!`);
      } else {
        // CREATE new resort
        const res = await fetch("/api/resorts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to create resort");
        }

        showNotification("success", `"${name}" published to Planet Root Travels!`);
      }

      resetForm();
      fetchResorts();
      setActiveTab("list");
    } catch (err: any) {
      showNotification("error", err.message || "Failed to save resort");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete a resort
  const handleDeleteResort = async (id: string, resortName: string) => {
    if (!window.confirm(`Are you sure you want to remove "${resortName}" from Planet Root Travels?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/resorts?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete resort");
      }
      showNotification("success", `"${resortName}" removed successfully.`);
      setResorts(resorts.filter((r) => r.id !== id));
      if (editingResortId === id) {
        resetForm();
      }
    } catch (err: any) {
      showNotification("error", err.message || "Failed to delete resort");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfbf7] text-[#181d1a] pt-24 pb-20">
      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed top-24 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-lg shadow-xl border text-sm font-medium transition-all transform animate-in fade-in slide-in-from-top-4 duration-300 ${
            notification.type === "success"
              ? "bg-[#0e3826] text-[#dfcaa2] border-[#c5a059]/40"
              : "bg-red-900 text-white border-red-700"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-[#dfcaa2] shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-300 shrink-0" />
          )}
          <span>{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 hover:opacity-75 cursor-pointer text-stone-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Card */}
        <div className="bg-[#072016] text-white rounded-2xl p-6 sm:p-8 mb-8 border border-[#c5a059]/20 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.15),transparent_70%)] pointer-events-none" />

          {/* Section Switcher: Resorts vs Tour Packages */}
          <div className="flex flex-wrap items-center gap-2 mb-6 bg-black/40 p-1.5 rounded-xl border border-white/10 w-fit relative z-10">
            <button
              type="button"
              onClick={() => setAdminSection("resorts")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                adminSection === "resorts"
                  ? "bg-[#dfcaa2] text-[#072016] shadow-md"
                  : "text-stone-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Resorts &amp; Villas ({resorts.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setAdminSection("packages")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                adminSection === "packages"
                  ? "bg-[#dfcaa2] text-[#072016] shadow-md"
                  : "text-stone-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Tour Packages</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#c5a059]/15 text-[#dfcaa2] border border-[#c5a059]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Admin Portal
                </span>
                <span className="text-xs text-stone-400">Planet Root Travels</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury text-white">
                {adminSection === "resorts" ? (
                  <>Resort &amp; Villa <span className="text-[#dfcaa2]">Management</span></>
                ) : (
                  <>Tour Package <span className="text-[#dfcaa2]">Management</span></>
                )}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-light">
                {adminSection === "resorts"
                  ? "Add, edit, and manage verified luxury resorts, pool villas, and download brochures."
                  : "Add, edit, and manage curated holiday itineraries, day-by-day schedules, and transparent pricing."}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={adminSection === "resorts" ? "/#featured-resorts-section" : "/packages"}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-stone-200 hover:text-white border border-white/15 text-xs font-medium tracking-wide transition-colors"
              >
                <span>View Live {adminSection === "resorts" ? "Resorts" : "Packages"}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#dfcaa2]" />
              </Link>
            </div>
          </div>

          {/* Resorts Navigation Tabs (Only shown when managing resorts) */}
          {adminSection === "resorts" && (
            <div className="flex items-center gap-2 mt-8 border-t border-white/10 pt-4 relative z-10">
              <button
                onClick={() => {
                  if (editingResortId) resetForm();
                  setActiveTab("add");
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "add"
                    ? "bg-[#dfcaa2] text-[#072016] font-semibold shadow-sm"
                    : "text-stone-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {editingResortId ? (
                  <>
                    <Pencil className="w-3.5 h-3.5" />
                    <span>Edit Resort</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add New Resort</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setActiveTab("list")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "list"
                    ? "bg-[#dfcaa2] text-[#072016] font-semibold shadow-sm"
                    : "text-stone-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>All Resorts ({resorts.length})</span>
              </button>
            </div>
          )}
        </div>

        {/* SECTION: TOUR PACKAGES */}
        {adminSection === "packages" && <PackagesAdmin />}

        {/* SECTION: RESORTS (TAB 1: ADD OR EDIT RESORT) */}
        {adminSection === "resorts" && activeTab === "add" && (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Editing Notice Banner */}
            {editingResortId && (
              <div className="flex items-center justify-between p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-900">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-800">
                    <Pencil className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                      Editing Mode Active
                    </p>
                    <p className="text-sm font-bold text-stone-900">
                      You are currently updating: <span className="underline">{name}</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-medium cursor-pointer shadow-xs transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Cancel Edit & Add New</span>
                </button>
              </div>
            )}

            {/* Card 1: Essential Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#181d1a]">1. General Information</h2>
                  <p className="text-xs text-stone-500">Resort name, category, destination and tagline</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Resort Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Resort Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vythiri Mist Sanctuary, Wayanad"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] focus:ring-1 focus:ring-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  />
                </div>

                {/* Destination Dropdown / Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] focus:ring-1 focus:ring-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  >
                    {PRESET_DESTINATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                    <option value="custom">+ Other / Custom Location...</option>
                  </select>

                  {destination === "custom" && (
                    <input
                      type="text"
                      value={customDestination}
                      onChange={(e) => setCustomDestination(e.target.value)}
                      placeholder="Enter city, state or country"
                      className="mt-2 w-full px-4 py-2 rounded-lg border border-stone-200 focus:border-[#0e3826] text-sm text-[#181d1a]"
                    />
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Resort["category"])}
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] focus:ring-1 focus:ring-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  >
                    {PRESET_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tagline */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Tagline (One-sentence summary)
                  </label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="e.g. Glass-fronted infinity pool sanctuary immersed in rainforest mist."
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] focus:ring-1 focus:ring-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Pricing & Showcase Setting */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#181d1a]">2. Pricing & Showcase</h2>
                  <p className="text-xs text-stone-500">Nightly tariff, inclusions note, and visibility</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Price per Night
                  </label>
                  <input
                    type="text"
                    value={pricePerNight}
                    onChange={(e) => setPricePerNight(e.target.value)}
                    placeholder="e.g. ₹ 16,000 / Night"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Rate Inclusions Note
                  </label>
                  <input
                    type="text"
                    value={priceNote}
                    onChange={(e) => setPriceNote(e.target.value)}
                    placeholder="e.g. Includes breakfast, taxes & nature walk"
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <label className="inline-flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                      className="w-4 h-4 text-[#0e3826] rounded border-stone-300 focus:ring-[#0e3826]"
                    />
                    <span className="text-sm font-medium text-stone-800">
                      Feature on Homepage Showcase (Top Highlights)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Card 3: Resort Photography & Hero Image */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                  <Upload className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#181d1a]">3. Resort Photography</h2>
                  <p className="text-xs text-stone-500">
                    Upload your high-res photos or choose from verified Kerala presets
                  </p>
                </div>
              </div>

              {/* Hero Image Preview */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Main Hero Image (Card & Header View)
                </label>
                <div className="relative aspect-16/9 sm:aspect-21/9 max-h-72 w-full rounded-xl overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
                  {heroImage && (
                    <Image
                      src={heroImage}
                      alt="Hero preview"
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs text-white/90 font-mono truncate">{heroImage}</p>
                  </div>
                </div>
              </div>

              {/* Mode Selector Tabs */}
              <div className="flex items-center gap-2 mb-4 border-b border-stone-100 pb-3">
                <button
                  type="button"
                  onClick={() => setImageSelectorMode("preset")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                    imageSelectorMode === "preset"
                      ? "bg-[#0e3826] text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  Choose From Preset Library ({PRESET_PHOTOS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setImageSelectorMode("upload")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                    imageSelectorMode === "upload"
                      ? "bg-[#0e3826] text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  Upload New Photo
                </button>
                <button
                  type="button"
                  onClick={() => setImageSelectorMode("url")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                    imageSelectorMode === "url"
                      ? "bg-[#0e3826] text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  Direct Image URL
                </button>
              </div>

              {/* Mode 1: Preset library grid */}
              {imageSelectorMode === "preset" && (
                <div className="space-y-2">
                  <p className="text-xs text-stone-500">
                    Click any image to set it as the Hero Photo. (You can also add it to the gallery).
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2.5 max-h-60 overflow-y-auto p-1 border border-stone-200 rounded-xl bg-stone-50/50">
                    {PRESET_PHOTOS.map((p, idx) => {
                      const isSelected = heroImage === p.url;
                      return (
                        <div
                          key={idx}
                          onClick={() => setHeroImage(p.url)}
                          className={`relative aspect-4/3 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                            isSelected
                              ? "border-[#0e3826] ring-2 ring-[#c5a059]"
                              : "border-transparent hover:opacity-90 opacity-75"
                          }`}
                        >
                          <Image src={p.url} alt={p.name} fill className="object-cover" />
                          <div className="absolute inset-0 bg-black/25 flex items-end p-1">
                            <span className="text-[10px] text-white font-medium truncate">
                              {p.name}
                            </span>
                          </div>
                          {isSelected && (
                            <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#0e3826] text-white flex items-center justify-center">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Mode 2: Upload File */}
              {imageSelectorMode === "upload" && (
                <div className="p-6 border-2 border-dashed border-stone-300 rounded-xl bg-stone-50/50 text-center">
                  <Upload className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-stone-700 mb-1">
                    Upload image from your device
                  </p>
                  <p className="text-xs text-stone-400 mb-4">
                    Supports JPG, PNG, WEBP (stored in public/images/uploads)
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, "hero")}
                    className="hidden"
                    id="hero-file-input"
                  />
                  <label
                    htmlFor="hero-file-input"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0e3826] text-[#dfcaa2] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#072016] transition-colors ${
                      isUploading ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    {isUploading ? "Uploading..." : "Select File & Set As Hero"}
                  </label>
                </div>
              )}

              {/* Mode 3: Direct URL */}
              {imageSelectorMode === "url" && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    placeholder="https://example.com/photo.jpg or /images/..."
                    className="flex-1 px-4 py-2.5 rounded-lg border border-stone-200 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (customUrlInput.trim()) {
                        setHeroImage(customUrlInput.trim());
                        if (!galleryImages.includes(customUrlInput.trim())) {
                          setGalleryImages([...galleryImages, customUrlInput.trim()]);
                        }
                        setCustomUrlInput("");
                      }
                    }}
                    className="px-4 py-2.5 rounded-lg bg-[#0e3826] text-white text-xs font-medium hover:bg-[#072016]"
                  >
                    Apply URL
                  </button>
                </div>
              )}

              {/* Additional Gallery Photos Section */}
              <div className="mt-8 pt-6 border-t border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Resort Gallery Photos ({galleryImages.length})
                  </label>
                  <label
                    htmlFor="gallery-file-input"
                    className="inline-flex items-center gap-1.5 text-xs text-[#0e3826] hover:underline font-medium cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Upload more to gallery</span>
                  </label>
                  <input
                    type="file"
                    id="gallery-file-input"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, "gallery")}
                    className="hidden"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-4/3 rounded-lg overflow-hidden border border-stone-200 bg-stone-100"
                    >
                      <Image src={img} alt="Gallery" fill className="object-cover" />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(img)}
                        className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 cursor-pointer"
                        title="Remove photo"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: Verified Amenities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#181d1a]">4. Verified Amenities</h2>
                  <p className="text-xs text-stone-500">
                    Select features available at this resort or add custom amenities
                  </p>
                </div>
              </div>

              {/* Amenity Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {POPULAR_AMENITIES.map((amenity) => {
                  const isChecked = selectedAmenities.includes(amenity);
                  return (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => toggleAmenity(amenity)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#0e3826] text-[#dfcaa2] shadow-xs"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {isChecked ? (
                        <Check className="w-3 h-3 text-[#dfcaa2]" />
                      ) : (
                        <Plus className="w-3 h-3 text-stone-400" />
                      )}
                      <span>{amenity}</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Amenity Adder */}
              <div className="flex gap-2 max-w-md pt-2">
                <input
                  type="text"
                  value={customAmenityInput}
                  onChange={(e) => setCustomAmenityInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddCustomAmenity();
                    }
                  }}
                  placeholder="Type custom amenity (e.g. Helipad, Heated Pool)"
                  className="flex-1 px-3.5 py-2 rounded-lg border border-stone-200 text-xs text-[#181d1a]"
                />
                <button
                  type="button"
                  onClick={handleAddCustomAmenity}
                  className="px-3.5 py-2 rounded-lg bg-stone-800 text-white text-xs font-medium hover:bg-black cursor-pointer"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Card 5: Story & Descriptions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#181d1a]">5. Resort Story & Description</h2>
                  <p className="text-xs text-stone-500">Editorial review, landscape description, and highlights</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Short Overview (Card & Quick View Modal)
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the atmosphere, privacy, architecture, and appeal of this property..."
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:border-[#0e3826] outline-hidden text-sm text-[#181d1a] bg-stone-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Curated Highlight #1
                    </label>
                    <input
                      type="text"
                      value={highlight1}
                      onChange={(e) => setHighlight1(e.target.value)}
                      placeholder="e.g. Private heated plunge pool with unobstructed valley vistas"
                      className="w-full px-4 py-2 rounded-lg border border-stone-200 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Curated Highlight #2
                    </label>
                    <input
                      type="text"
                      value={highlight2}
                      onChange={(e) => setHighlight2(e.target.value)}
                      placeholder="e.g. Farm-to-table organic Kerala specialties and sunset tea"
                      className="w-full px-4 py-2 rounded-lg border border-stone-200 text-xs"
                    />
                  </div>
                </div>

                {/* Villa details */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0e3826] mb-3">
                    Primary Villa Configuration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] text-stone-500 mb-1">Villa Category Name</label>
                      <input
                        type="text"
                        value={villaName}
                        onChange={(e) => setVillaName(e.target.value)}
                        placeholder="Signature Pool Villa"
                        className="w-full px-3 py-1.5 rounded border border-stone-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-500 mb-1">Villa Size</label>
                      <input
                        type="text"
                        value={villaSize}
                        onChange={(e) => setVillaSize(e.target.value)}
                        placeholder="850 sq.ft."
                        className="w-full px-3 py-1.5 rounded border border-stone-200 text-xs bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-stone-500 mb-1">View Type</label>
                      <input
                        type="text"
                        value={villaView}
                        onChange={(e) => setVillaView(e.target.value)}
                        placeholder="Forest & Valley View"
                        className="w-full px-3 py-1.5 rounded border border-stone-200 text-xs bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Resort Brochure (PDF) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-[#0e3826]/10 flex items-center justify-center text-[#0e3826]">
                  <FileUp className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#181d1a]">6. Resort Brochure (PDF)</h2>
                  <p className="text-xs text-stone-500">
                    Attach a downloadable guest brochure or presentation PDF for travelers
                  </p>
                </div>
              </div>

              {/* Current Brochure State */}
              {brochurePdf ? (
                <div className="p-4 rounded-xl bg-[#0e3826]/5 border border-[#0e3826]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                      PDF
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0e3826] uppercase tracking-wider flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Brochure Attached</span>
                      </p>
                      <p className="text-xs text-stone-600 font-mono mt-0.5 break-all max-w-md">
                        {brochurePdf}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-[#0e3826] text-stone-700 hover:text-[#0e3826] text-xs font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview PDF</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setBrochurePdf("")}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 border-2 border-dashed border-stone-300 rounded-xl bg-stone-50/50 text-center mb-4">
                  <FileUp className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-stone-700 mb-1">
                    Upload PDF Brochure from Device
                  </p>
                  <p className="text-xs text-stone-400 mb-4">
                    Guests can view or download this brochure on the resort details card
                  </p>

                  <input
                    type="file"
                    ref={brochureInputRef}
                    accept=".pdf,application/pdf"
                    onChange={handleBrochureUpload}
                    className="hidden"
                    id="brochure-file-input"
                  />
                  <label
                    htmlFor="brochure-file-input"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0e3826] text-[#dfcaa2] text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-[#072016] transition-colors ${
                      isUploadingBrochure ? "opacity-50 pointer-events-none" : ""
                    }`}
                  >
                    {isUploadingBrochure ? "Uploading PDF..." : "Select PDF Brochure"}
                  </label>
                </div>
              )}

              {/* Direct PDF Link or Quick Preset */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <input
                  type="text"
                  value={brochurePdf}
                  onChange={(e) => setBrochurePdf(e.target.value)}
                  placeholder="Or enter direct PDF path/URL (e.g. /brochures/resort-brochure.pdf)"
                  className="flex-1 px-3.5 py-2 rounded-lg border border-stone-200 text-xs text-[#181d1a]"
                />
                <button
                  type="button"
                  onClick={() => setBrochurePdf("/brochures/zeno-village-resort-brochure.pdf")}
                  className="px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  Use Zeno Village PDF Preset
                </button>
              </div>
            </div>

            {/* Submit Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white rounded-2xl border border-stone-200/80 shadow-md">
              <div>
                <p className="text-sm font-semibold text-[#181d1a]">
                  {editingResortId
                    ? `Ready to update "${name}"?`
                    : "Ready to publish this resort?"}
                </p>
                <p className="text-xs text-stone-500">
                  {editingResortId
                    ? "Changes will be reflected immediately in all showcases and detail views."
                    : "It will immediately become visible in the Featured Resorts showcase and stays directory."}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {editingResortId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#0e3826] text-[#dfcaa2] hover:bg-[#072016] text-xs font-semibold tracking-wider uppercase transition-all shadow-md cursor-pointer ${
                    isSubmitting ? "opacity-60 pointer-events-none" : ""
                  }`}
                >
                  {editingResortId ? (
                    <>
                      <Pencil className="w-4 h-4" />
                      <span>{isSubmitting ? "Saving Changes..." : "Save & Update Resort"}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>{isSubmitting ? "Publishing Resort..." : "Publish Resort"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* SECTION: RESORTS (TAB 2: MANAGE ALL RESORTS) */}
        {adminSection === "resorts" && activeTab === "list" && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
              <div>
                <h2 className="text-lg font-semibold text-[#181d1a]">
                  Active Resorts ({resorts.length})
                </h2>
                <p className="text-xs text-stone-500">
                  Live inventory synced with Planet Root Travels showcases
                </p>
              </div>
              <button
                onClick={() => {
                  resetForm();
                  setActiveTab("add");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0e3826] text-[#dfcaa2] text-xs font-semibold uppercase tracking-wider hover:bg-[#072016] transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Resort</span>
              </button>
            </div>

            {isLoading ? (
              <div className="py-16 text-center text-sm text-stone-500">
                Loading resorts database...
              </div>
            ) : resorts.length === 0 ? (
              <div className="py-16 text-center">
                <Building2 className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                <p className="text-base font-medium text-stone-700">No resorts found</p>
                <p className="text-xs text-stone-500 mt-1">
                  Click the button above to add your first resort.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-stone-100">
                {resorts.map((resort) => (
                  <div
                    key={resort.id}
                    className="py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-stone-50/70 p-3 rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* Image Thumbnail */}
                      <div className="relative w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                        <Image
                          src={resort.heroImage}
                          alt={resort.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-[#181d1a]">
                            {resort.name}
                          </h3>
                          {resort.featured && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#c5a059]/15 text-[#8c6b2d]">
                              Featured
                            </span>
                          )}
                          {resort.brochurePdf && (
                            <a
                              href={resort.brochurePdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                              title="Click to view Brochure PDF"
                            >
                              <FileText className="w-2.5 h-2.5" />
                              <span>Brochure PDF</span>
                            </a>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-stone-400" />
                            {resort.destination}
                          </span>
                          <span>•</span>
                          <span className="text-[#0e3826] font-medium">
                            {resort.category}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-stone-800">
                            {resort.pricePerNight}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={() => handleStartEdit(resort)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50/60 text-amber-900 hover:bg-amber-100 text-xs font-medium transition-colors cursor-pointer"
                        title="Edit Resort Details"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <Link
                        href={`/stays/${resort.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:text-[#0e3826] hover:border-[#0e3826] text-xs font-medium transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDeleteResort(resort.id, resort.name)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 text-xs font-medium transition-colors cursor-pointer"
                        title="Delete Resort"
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
    </div>
  );
}
