export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Private Pool Villas"
    | "Forest & Treehouses"
    | "Mountain Stays"
    | "Backwaters & Beaches";
  location: string;
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-zeno-1",
    title: "Mountain Valley Infinity Pool",
    category: "Private Pool Villas",
    location: "900 Kandi, Wayanad",
    image: "/images/zeno-village/zeno-infinity-pool-valley.jpg",
    caption: "Timber sun deck and fresh mountain-water infinity pool overlooking mist-veiled Western Ghats peaks at Zeno Village Resort.",
  },
  {
    id: "gal-zeno-2",
    title: "Suspended Glass A-Frame Cabin",
    category: "Forest & Treehouses",
    location: "900 Kandi, Wayanad",
    image: "/images/zeno-village/zeno-aframe-glass-cabin.jpg",
    caption: "Modern glass A-frame cabin accessed via private suspended wooden walkway bridge inside the virgin rainforest canopy.",
  },
  {
    id: "gal-zeno-3",
    title: "Thatched Canopy Treehouse",
    category: "Forest & Treehouses",
    location: "900 Kandi, Wayanad",
    image: "/images/zeno-village/zeno-canopy-treehouse.jpg",
    caption: "Thatched-roof eco-treehouse secluded high within the wild rainforest canopy of Wayanad.",
  },
  {
    id: "gal-zeno-4",
    title: "Panoramic Forest Pool Deck",
    category: "Private Pool Villas",
    location: "900 Kandi, Wayanad",
    image: "/images/zeno-village/zeno-pool-forest-panoramic.jpg",
    caption: "Panoramic mountain-water pool surrounded by towering trees on a secluded hillside retreat.",
  },
  {
    id: "gal-zeno-5",
    title: "Curved Wooden Glamping Pod",
    category: "Forest & Treehouses",
    location: "900 Kandi, Wayanad",
    image: "/images/zeno-village/zeno-glamping-pod-deck.jpg",
    caption: "Curved timber glamping pod with private view balcony overlooking coffee and cardamom plantations.",
  },
  {
    id: "gal-1",
    title: "Heritage Backwater Pool Villa",
    category: "Private Pool Villas",
    location: "Vembanad Backwaters, Alleppey",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85",
    caption: "Private plunge pool secluded within restored 18th-century Nalukettu courtyards.",
  },
  {
    id: "gal-2",
    title: "Highland Tea Ridge Heated Pool",
    category: "Mountain Stays",
    location: "Chinnakanal, Munnar",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1600&q=85",
    caption: "Floating above morning mists cascading across endless emerald tea slopes.",
  },
  {
    id: "gal-3",
    title: "Royal Kettuvallam Houseboat",
    category: "Backwaters & Beaches",
    location: "Vembanad Lake, Alleppey",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    caption: "Handcrafted wooden barge with private master bedroom and chef cruising silent waterways.",
  },
  {
    id: "gal-4",
    title: "Vythiri Bamboo Treehouse",
    category: "Forest & Treehouses",
    location: "Vythiri, Wayanad",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
    caption: "Handcrafted bamboo and cedar treehouse suspended 60 feet in ancient Western Ghats rainforest.",
  },
  {
    id: "gal-9",
    title: "Pine Forest Mist Chalet",
    category: "Mountain Stays",
    location: "Pine Hills, Vagamon",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    caption: "Tranquil mountain chalets surrounded by pine trees and rolling green Kurisumala meadows.",
  },
  {
    id: "gal-10",
    title: "Peninsula Lakeview Plunge Pool",
    category: "Private Pool Villas",
    location: "Meppadi, Wayanad",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    caption: "Private plunge pool floating on an exclusive peninsula overlooking Karapuzha reservoir.",
  },
];
