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
    id: "dest-wayanad",
    slug: "wayanad",
    name: "Wayanad",
    tagline: "Ancient Rainforests, Misty Peaks & Canopy Solitude",
    shortDescription:
      "Immerse in deep Western Ghats rainforests, luxury treehouse sanctuaries, spring-fed private pool villas, and misty spice plantations.",
    editorialQuote:
      "“Awaken to birdsong, cascading streams, and emerald canopies untouched by centuries.”",
    longDescription:
      "Perched upon a high green plateau in the Western Ghats bio-reserve, Wayanad is Kerala’s wild soul. Wander prehistoric petroglyphs at Edakkal Caves, drift on bamboo rafts along the waters of Kuruva Island, and reside in luxury treehouses suspended 60 feet above the forest floor or private pool villas hidden amidst cardamom and coffee estates.",
    heroImage:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "/images/zeno-village/zeno-infinity-pool-valley.jpg",
      "/images/zeno-village/zeno-aframe-glass-cabin.jpg",
      "/images/zeno-village/zeno-canopy-treehouse.jpg",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Wayanad Stays",
    ctaLink: "/destinations/wayanad",
    highlights: [
      "Luxury treehouse villas crafted into rainforest canopies",
      "Private spring-fed pool villas inside cardamom plantations",
      "Bamboo rafting on silent mountain waters at Kuruva Island",
      "Guided forest hikes to natural rock caves and hidden cascades",
    ],
    bestTimeToVisit: "September to May (Cool mountain breezes and lush greenery)",
    weatherOverview: "Pleasant highland climate (17°C – 27°C) with mist-clad mornings.",
    recommendedDuration: "3 to 4 Days",
    idealFor: ["Nature Seekers", "Couples & Honeymooners", "Eco-Luxury Travelers", "Families"],
  },
  {
    id: "dest-munnar",
    slug: "munnar",
    name: "Munnar",
    tagline: "Rolling Emerald Tea Highlands & Cloud Terraces",
    shortDescription:
      "Escape to high-altitude tea plantations, colonial planter bungalows, heated infinity pools, and crisp mountain mornings.",
    editorialQuote:
      "“Step into a world painted in every shade of green, where mountain mists drift through ancient tea terraces.”",
    longDescription:
      "Rising 1,600 meters above sea level where three mountain streams converge, Munnar is South India’s premier highland retreat. Here, the rush of everyday life gives way to fragrant tea gardens, cool mountain breezes, and colonial charm. Planet Root curates stays in private colonial tea bungalows, fireside mountain chalets, and heated infinity pool villas overlooking Anamudi.",
    heroImage:
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1920&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Munnar Stays",
    ctaLink: "/destinations/munnar",
    highlights: [
      "Private colonial tea bungalows with stone hearth fireplaces",
      "4WD sunrise expedition to Kolukkumalai, highest organic tea estate",
      "Heated infinity pool villas floating above rolling cloud valleys",
      "Single-origin artisan tea tastings with master blenders",
    ],
    bestTimeToVisit: "September to May (Crisp highland weather 10°C – 22°C)",
    weatherOverview: "Crisp highland temperatures with cool evenings requiring light woolens.",
    recommendedDuration: "3 to 4 Days",
    idealFor: ["Romantic Escapes", "Highland Honeymoons", "Photography", "Relaxed Family Breaks"],
  },
  {
    id: "dest-vagamon",
    slug: "vagamon",
    name: "Vagamon",
    tagline: "Serene Pine Forests, Rolling Meadows & Quiet Hills",
    shortDescription:
      "A peaceful highland hideaway of dense pine forests, green velvet hillocks, tea gardens, and unhurried mountain serenity.",
    editorialQuote:
      "“Where gentle mist weaves between pine needle trails and green meadows touch the sky.”",
    longDescription:
      "Vagamon remains one of Kerala’s most tranquil and unspoiled hill stations. Situated along the Kottayam-Idukki border, it is famed for towering pine valleys, rolling green meadows, and misty tea plantations. Far from crowded tourist circuits, Vagamon offers secluded stone chalets, private mountain valley stays, and scenic trekking trails ideal for quiet couples and peaceful family retreats.",
    heroImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Vagamon Stays",
    ctaLink: "/destinations/vagamon",
    highlights: [
      "Secluded mountain chalets overlooking pine-fringed valleys",
      "Walks through fragrant pine forests and rolling Kurisumala hills",
      "Cool breeze and scenic viewpoints away from busy crowds",
      "Private cottage gardens with warm bonfires under starry skies",
    ],
    bestTimeToVisit: "Throughout the year; especially October to May",
    weatherOverview: "Pleasantly cool temperatures ranging from 15°C to 25°C.",
    recommendedDuration: "2 to 3 Days",
    idealFor: ["Quiet Getaways", "Couples", "Writers & Creatives", "Nature Lovers"],
  },
  {
    id: "dest-alleppey",
    slug: "alleppey",
    name: "Alleppey",
    tagline: "The Venetian Soul of Kerala’s Backwaters",
    shortDescription:
      "Drift through palm-fringed backwater canals, stay in restored Nalukettu lakefront villas, and voyage on private luxury houseboats.",
    editorialQuote:
      "“Where time dissolves into the soft ripple of backwater canals and the scent of night-blooming water lilies.”",
    longDescription:
      "The backwaters of Alleppey form a mystical aquatic world of canals, lagoons, and lakes stretching across the coastal belt. Alleppey is the romantic epicenter of this watery paradise. Planet Root curates private air-conditioned kettuvallams (traditional thatch-roofed luxury barges) helmed by private chefs who prepare fresh Karimeen fish on banana leaves, alongside lakefront villas with private plunge pools.",
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Alleppey Stays",
    ctaLink: "/destinations/alleppey",
    highlights: [
      "Private luxury kettuvallam houseboats with onboard master chefs",
      "Ancestral Nalukettu heritage villas with private plunge pools",
      "Canoe safaris through narrow village waterways and lotus fields",
      "Sunset backwater cruises with fresh coconut water and warm snacks",
    ],
    bestTimeToVisit: "September to March (Pleasant breezes; Monsoon Chikitsa June – August)",
    weatherOverview: "Tropical maritime (24°C – 31°C) with gentle cooling lake breezes.",
    recommendedDuration: "2 to 3 Days",
    idealFor: ["Honeymooners", "Slow Travel Enthusiasts", "Families", "Houseboat Explorers"],
  },
  {
    id: "dest-thekkady",
    slug: "thekkady",
    name: "Thekkady",
    tagline: "Wild Cardamom Hills & Periyar Forest Sanctuaries",
    shortDescription:
      "Immerse in fragrant hills of cardamom and wild pepper, wildlife boat safaris on Periyar Lake, and vibrant Kalaripayattu heritage.",
    editorialQuote:
      "“Inhale the intoxicating scent of crushed cardamom as wild elephants graze along the water's edge.”",
    longDescription:
      "Thekkady is the sensory heart of Kerala’s spice-growing highlands. Cardamom, cinnamon, nutmeg, and black pepper flourish in rich mountain soils. Stay in elevated stone chalets overlooking misty forest valleys, embark on boat safaris along Lake Periyar to observe wild elephant herds and otters, and attend authentic Kalaripayattu martial arts rituals and Kathakali theater performances.",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Thekkady Stays",
    ctaLink: "/destinations/thekkady",
    highlights: [
      "Private guided walks through organic cardamom and clove plantations",
      "Periyar Lake boat safari to spot wild elephants and sambar deer",
      "Intimate evening Kalaripayattu martial art demonstrations",
      "Bespoke cooking masterclass with estate Syrian Christian chefs",
    ],
    bestTimeToVisit: "September to May (Ideal forest walking weather)",
    weatherOverview: "Pleasant mountain climate (16°C – 26°C).",
    recommendedDuration: "2 to 3 Days",
    idealFor: ["Wildlife Enthusiasts", "Culinary Explorers", "Families", "Culture Lovers"],
  },
  {
    id: "dest-kovalam",
    slug: "kovalam",
    name: "Kovalam",
    tagline: "Iconic Crescent Beaches & Arabian Sea Cliffside Luxury",
    shortDescription:
      "Unwind on golden sands framed by swaying coconut palms, red-and-white lighthouse sunsets, and beachfront private pool villas.",
    editorialQuote:
      "“Where warm Arabian Sea waves meet golden shores under the glow of the historic lighthouse.”",
    longDescription:
      "World-famous for its trio of crescent beaches, Kovalam is Kerala’s premier coastal retreat. Reside in clifftop resorts with infinity pools gazing across the endless Arabian Sea, relax with authentic beachfront Ayurvedic therapies, and watch local catamarans set out as the sunset paints the sky in shades of gold and amber.",
    heroImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    ],
    ctaText: "Explore Kovalam Stays",
    ctaLink: "/destinations/kovalam",
    highlights: [
      "Clifftop infinity pool villas with panoramic Arabian Sea views",
      "Historic red-and-white striped Kovalam Lighthouse sunset strolls",
      "Traditional coastal Ayurvedic rejuvenation therapies",
      "Freshly prepared coastal Malabar seafood dining right on the shore",
    ],
    bestTimeToVisit: "October to April (Warm sun, calm sea, and soothing coastal breeze)",
    weatherOverview: "Balmy coastal climate (24°C – 32°C) with refreshing sea winds.",
    recommendedDuration: "3 to 4 Days",
    idealFor: ["Beach Lovers", "Romantic Couples", "Ayurvedic Wellness", "Relaxed Vacations"],
  },
];
