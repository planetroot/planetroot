export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  editorialQuote: string;
  longDescription: string;
  heroImage: string;
  secondaryImage: string;
  gallery: string[];
  ctaText: string;
  ctaLink: string;
  advisoryNote?: string;
  highlights: string[];
  bestTimeToVisit: string;
  weatherOverview: string;
  recommendedDuration: string;
  idealFor: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-kumarakom",
    slug: "kumarakom-alleppey",
    name: "KUMARAKOM & ALLEPPEY",
    tagline: "The Liquid Poetry of the Backwaters",
    shortDescription: "Drift through tranquil palm-fringed canals, stay in restored 200-year-old Nalukettu pool villas, and voyage on private luxury houseboats across Vembanad Lake.",
    editorialQuote: "“Where time dissolves into the soft ripple of backwater canals and the scent of night-blooming water lilies.”",
    longDescription: "The backwaters of Kerala form a mystical labyrinth of canals, lagoons, and lakes stretching across hundreds of miles. Kumarakom and Alleppey represent the romantic heart of this aquatic paradise. Planet Root curates private air-conditioned kettuvallams (traditional thatch-roofed luxury barges) helmed by private chefs who prepare fresh Karimeen fish on banana leaves. On the lakeshore, restored timber palaces offer private plunge pools, open-air courtyards, and deep Ayurvedic restoration.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Backwater Stays",
    ctaLink: "/destinations/kumarakom-alleppey",
    highlights: [
      "Private luxury kettuvallam houseboats with onboard master chefs",
      "Ancestral Nalukettu heritage villas with private plunge pools",
      "Canoe safaris through narrow village waterways and lotus fields",
      "Kumarakom Bird Sanctuary sunset cruises",
    ],
    bestTimeToVisit: "September to March (Pleasant cool breezes; Monsoon Chikitsa in June - August)",
    weatherOverview: "Tropical maritime (24°C - 31°C) with gentle cooling lake winds.",
    recommendedDuration: "3 to 5 Days",
    idealFor: ["Honeymooners", "Slow Travel Seekers", "Ayurvedic Rejuvenation", "Photographers"],
  },
  {
    id: "dest-munnar",
    slug: "munnar",
    name: "MUNNAR",
    tagline: "Where the Mountains Slow Time in Emerald Mist",
    shortDescription: "Escape to high-altitude tea plantations, colonial planter bungalows, and crisp mountain mornings surrounded by the rolling peaks of the Western Ghats.",
    editorialQuote: "“Step into a world painted in every shade of green, where mountain mists drift through ancient tea terraces.”",
    longDescription: "Rising 1,600 meters above sea level where three mountain streams converge, Munnar is South India's premier highland retreat. Here, the hustle of the plains gives way to fragrant tea gardens, cool mountain air, and colonial heritage. Planet Root curates stays in private tea estate bungalows, fireside mountain chalets, and heated infinity pool villas overlooking Anamudi, the highest peak in South India.",
    heroImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1920&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Munnar Highlands",
    ctaLink: "/destinations/munnar",
    highlights: [
      "Private colonial tea bungalows with stone fireplaces",
      "4WD sunrise expedition to Kolukkumalai, the world's highest tea estate",
      "Curated mountain meadow picnics beside cascading streams",
      "Single-origin tea tasting with master tea blenders",
    ],
    bestTimeToVisit: "October to May (Pleasant weather 10°C - 22°C; Lush greenery during Monsoons)",
    weatherOverview: "Crisp highland climate with cool evenings requiring light warm woolens.",
    recommendedDuration: "3 to 4 Days",
    idealFor: ["Mountain Lovers", "Romantic Escapes", "Tea Connoisseurs", "Families"],
  },
  {
    id: "dest-wayanad",
    slug: "wayanad",
    name: "WAYANAD",
    tagline: "Ancient Rainforests, Caves & Mountain Solitude",
    shortDescription: "Discover Kerala's wild soul in deep tropical rainforests, luxury treehouse sanctuaries, bamboo rafting on mountain lakes, and misty spice plantations.",
    editorialQuote: "“Awaken to birdsong and waterfalls in a canopy untouched by centuries.”",
    longDescription: "Set upon a high plateau in the Western Ghats bio-reserve, Wayanad offers untouched nature and deep bio-diversity. Marvel at prehistoric petroglyphs at Edakkal Caves, drift on bamboo rafts along the waters of Kuruva Island, and reside in luxury treehouses suspended 60 feet in ancient mahogany trees or private spring-fed pool villas hidden inside coffee and cardamom plantations.",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Discover Wayanad Rainforest",
    ctaLink: "/destinations/wayanad",
    highlights: [
      "Luxury treehouse villas built into ancient rainforest canopies",
      "Private bamboo rafting across Kuruva Island waterways",
      "Organic cardamom, vanilla, and Robusta coffee plantation tours",
      "Guided forest hikes to natural rock caves and hidden cascades",
    ],
    bestTimeToVisit: "September to May (Lush waterfalls and cool nights)",
    weatherOverview: "Comfortable tropical highland temperatures (18°C - 28°C).",
    recommendedDuration: "3 to 5 Days",
    idealFor: ["Nature Seekers", "Adventure Couples", "Eco-Luxury Travelers", "Birdwatchers"],
  },
  {
    id: "dest-marari",
    slug: "marari-varkala",
    name: "MARARI & VARKALA",
    tagline: "Barefoot Arabian Sea Coastal Living",
    shortDescription: "Unwind on secluded golden sands, thatched eco-villas with private pools, and spectacular red laterite cliffs overlooking the ocean.",
    editorialQuote: "“Barefoot luxury where warm Arabian Sea surf cleanses the rush of the modern world.”",
    longDescription: "For travelers seeking coastal serenity without commercial crowds, Marari and Varkala present Kerala's most picturesque shores. In Marari, peaceful fishing hamlets meet palm groves and eco-luxury thatched cottages with private plunge pools. Further south in Varkala, dramatic red laterite cliffs drop directly into the turquoise sea, fringed by natural mineral springs and serene sunset viewpoints.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Coastal Kerala",
    ctaLink: "/destinations/marari-varkala",
    highlights: [
      "Secluded private pool cottages set inside coconut palm groves",
      "Barefoot dining with freshly caught sea fish and Malabar spices",
      "Sunset yoga and meditation sessions on the sand",
      "Proximity to Alleppey backwaters for easy combined itineraries",
    ],
    bestTimeToVisit: "October to April (Warm sun and calm, swimmable sea)",
    weatherOverview: "Balmy coastal climate (26°C - 32°C) with refreshing ocean breezes.",
    recommendedDuration: "3 to 5 Days",
    idealFor: ["Beach Lovers", "Quiet Rejuvenation", "Couples", "Waterfront Wellness"],
  },
  {
    id: "dest-thekkady",
    slug: "thekkady-spices",
    name: "THEKKADY & SPICE HILLS",
    tagline: "Wild Spice Plantations & Forest Sanctuaries",
    shortDescription: "Immerse in the fragrant hills of cardamom and wild pepper, wildlife boat safaris in Periyar Tiger Reserve, and vibrant Kalaripayattu heritage.",
    editorialQuote: "“Inhale the intoxicating scent of crushed cardamom as wild elephants graze along the water's edge.”",
    longDescription: "Thekkady is the sensory heart of the Western Ghats. Cardamom, cinnamon, nutmeg, and black pepper flourish in mountain soils. Stay in elevated stone chalets overlooking misty forest valleys, embark on boat safaris along Lake Periyar to observe wild elephant herds and otters, and attend authentic Kalaripayattu martial arts rituals and Kathakali theater performances.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    secondaryImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Spice Hills",
    ctaLink: "/destinations/thekkady-spices",
    highlights: [
      "Private guided walks through organic cardamom and clove plantations",
      "Periyar Lake boat safari to spot wild elephants and sambar deer",
      "Intimate evening Kalaripayattu martial art demonstrations",
      "Bespoke cooking masterclass with estate Syrian Christian chefs",
    ],
    bestTimeToVisit: "September to May (Ideal forest walking weather)",
    weatherOverview: "Pleasant mountain climate (15°C - 26°C).",
    recommendedDuration: "2 to 3 Days",
    idealFor: ["Wildlife Enthusiasts", "Culinary Explorers", "Families", "Culture Lovers"],
  },
];
