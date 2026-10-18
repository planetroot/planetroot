export interface ResortVilla {
  id: string;
  name: string;
  size: string;
  view: string;
  occupancy: string;
  bedType: string;
  features: string[];
  priceIndication?: string;
  image: string;
}

export interface Resort {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  destination: string;
  destinationSlug: string;
  locationSummary: string;
  category:
    | "Heritage Backwater Villa"
    | "Private Pool Villa"
    | "Tea Estate Bungalow"
    | "Rainforest Treehouse"
    | "Beachfront Stay"
    | "Ayurvedic Wellness Retreat"
    | "Luxury Resort";
  description: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  pricePerNight: string;
  priceNote: string;
  verifiedAmenities: string[];
  curatedHighlights: string[];
  villas: ResortVilla[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    childPolicy: string;
    additionalNote?: string;
  };
  featured: boolean;
}

export const RESORTS: Resort[] = [
  {
    id: "resort-kumarakom",
    slug: "kumarakom-lakefront-palace-private-pool",
    name: "The Kumarakom Lakefront Heritage & Pool Sanctuary",
    tagline: "200-year-old restored Kerala Nalukettu courtyards bordering the tranquil Vembanad Lake.",
    destination: "Kumarakom Backwaters, Kerala",
    destinationSlug: "kumarakom-alleppey",
    locationSummary: "Secluded lakefront peninsula on Vembanad Lake, 75 minutes from Cochin International Airport (COK).",
    category: "Heritage Backwater Villa",
    description: "An authentic tribute to traditional Kerala architecture featuring hand-carved teak wood columns, private lotus canals, open-to-sky courtyards, private plunge pools, and uninterrupted sunsets over the backwaters.",
    longDescription: "Set upon the peaceful eastern shores of Vembanad Lake, this sanctuary revives the royal heritage of Travancore. Master carpenters have meticulously restored ancestral Tharavadu manors dating back to the 18th century, integrating contemporary comforts such as temperature-controlled private plunge pools and rain showers open to the tropical sky. Days begin with the gentle lapping of backwater canoes and unfold through authentic Ayurvedic therapies, lakefront high teas, and candlelit dinners on traditional kettuvallam boats.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    pricePerNight: "From ₹34,000 / night",
    priceNote: "Includes traditional Kerala breakfast, sunset backwater boat cruise, and afternoon high tea with warm banana fritters.",
    verifiedAmenities: [
      "Private Heritage Plunge Pool",
      "Ayurvedic Dhanwanthari Spa",
      "Vembanad Lakefront Infinity Pool",
      "Sunset Houseboat Cruise Included",
      "Open-Air Tropical Rain Courtyard",
      "Traditional Sadya Dining Feasts",
      "Private Luxury Chauffeur from Kochi",
    ],
    curatedHighlights: [
      "Authentic 18th-century Nalukettu timber architecture restored by master wood artisans",
      "Private sunset cruise aboard a traditional kettuvallam with fresh coconut water",
      "Open-air bathroom surrounded by banana palms and flowering jasmine",
      "Private candlelit dinner on a wooden deck suspended above lotus canals",
    ],
    villas: [
      {
        id: "v-kum-1",
        name: "Heritage Lakeview Pool Villa",
        size: "1,250 sq.ft.",
        view: "Uninterrupted Vembanad Backwaters",
        occupancy: "2 Adults",
        bedType: "Royal Hand-Carved Rosewood Four-Poster King Bed",
        features: ["Private Plunge Pool", "Open-Sky Courtyard Shower", "Traditional Charupady Wooden Veranda", "Direct Lagoon Access"],
        priceIndication: "₹34,000 / night",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "v-kum-2",
        name: "Presidential Backwater Nalukettu Suite",
        size: "2,100 sq.ft.",
        view: "360° Lakefront & Private Lotus Pond Panorama",
        occupancy: "4 Guests (Family or Friends)",
        bedType: "Two Master King Suites with Antique Teak Furnishings",
        features: ["Double-Tier Private Infinity Pool", "Dedicated Butler", "Traditional Central Nadumuttam Courtyard", "Private In-Villa Dining"],
        priceIndication: "₹62,000 / night",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Complimentary date alteration up to 14 days before arrival.",
      childPolicy: "Children welcome. Traditional pottery and village canoe rides available.",
      additionalNote: "Private Mercedes-Benz chauffeur transfer from Kochi Airport arranged upon request.",
    },
    featured: true,
  },
  {
    id: "resort-munnar",
    slug: "munnar-cloud-reserve-tea-estate",
    name: "Munnar Cloud Reserve & Tea Estate Bungalow",
    tagline: "Perched 1,600 meters above sea level where emerald tea hills meet morning mountain mist.",
    destination: "Munnar Highlands, Kerala",
    destinationSlug: "munnar",
    locationSummary: "Private colonial tea estate in Chinnakanal, overlooking Anayirankal Dam and high Western Ghats peaks.",
    category: "Tea Estate Bungalow",
    description: "An intimate mountain hideaway set inside sprawling organic tea slopes, featuring roaring wood fireplaces, heated infinity pool facing the clouds, guided tea-plucking walks, and panoramic valley views.",
    longDescription: "Escape to the cool highlands of Munnar, where the scent of eucalyptus and tea blossoms fills the mountain breeze. Originally built during the British planter era and refined into a modern sanctuary of stone and teak, Munnar Cloud Reserve offers total tranquility. Watch swirling mists dance across endless emerald valleys from your private heated balcony, savor bespoke tea-infused tasting menus, and unwind in the heated infinity pool overlooking the Western Ghats.",
    heroImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    pricePerNight: "From ₹28,500 / night",
    priceNote: "Includes artisanal planter's breakfast, afternoon tea tasting session, and guided estate walk.",
    verifiedAmenities: [
      "Heated Mountain Infinity Pool",
      "Private Wood-Burning Fireplaces",
      "Panoramic Tea Valley Decks",
      "Planter's Single-Origin Tea Tasting Room",
      "Himalayan Cedar Spa & Herbal Baths",
      "Private 4WD Kolukkumalai Sunrise Safari",
      "Complimentary Trekking Gear & Guide",
    ],
    curatedHighlights: [
      "Unbroken vistas of morning mist cascading over tea slopes",
      "Private 4WD sunrise expedition to the world's highest organic tea garden (Kolukkumalai)",
      "Evening fireside storytelling with warm spiced cardamom mulled beverages",
      "Interactive tea masterclass and custom blending session",
    ],
    villas: [
      {
        id: "v-mun-1",
        name: "Planter's Mist Chalet Suite",
        size: "980 sq.ft.",
        view: "Endless Rolling Tea Hills & High Peaks",
        occupancy: "2 Adults",
        bedType: "King Bed with Warm Down Comforter",
        features: ["Stone Hearth Fireplace", "Deep Copper Soaking Tub", "Glass Bay Window Daybed", "Private Cedar Balcony"],
        priceIndication: "₹28,500 / night",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Full flexibility with 10 days advance notice.",
      childPolicy: "Welcomes families with engaging tea discovery walks.",
      additionalNote: "Scenic 3.5-hour private chauffeur journey from Kochi via cascading Cheeyappara waterfalls.",
    },
    featured: true,
  },
  {
    id: "resort-wayanad",
    slug: "wayanad-rainforest-treehouse-pool-sanctuary",
    name: "The Wayanad Rainforest Treehouse & Pool Haven",
    tagline: "Suspended amidst ancient mahogany canopies in the heart of the Western Ghats rainforest.",
    destination: "Vythiri & Lakkidi, Wayanad",
    destinationSlug: "wayanad",
    locationSummary: "Set inside a 400-acre private tropical rainforest sanctuary, 2.5 hours from Calicut (CCJ) Airport.",
    category: "Rainforest Treehouse",
    description: "An extraordinary eco-luxury sanctuary combining elevated treehouses built by indigenous artisans with private ground pool villas nestled alongside bubbling mountain streams and dense bamboo groves.",
    longDescription: "Wayanad is Kerala's wild rainforest soul. Here, mornings awaken to the melodic call of the Malabar whistling thrush and the soft patter of rain on broad green leaves. Built without cutting a single living tree, the luxury treehouses and private pool villas blend into virgin wilderness. Unwind in your private plunge pool fed by natural mountain spring waters, savor authentic Malabar tribal delicacies, and embark on private bamboo rafting expeditions through silent mountain lakes.",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    pricePerNight: "From ₹31,000 / night",
    priceNote: "Includes all gourmet meals (farm-to-table breakfast, lunch, high tea, and dinner), guided nature trails, and stream walks.",
    verifiedAmenities: [
      "Private Mountain Spring Plunge Pool",
      "Elevated Luxury Bamboo & Cedar Treehouses",
      "Natural Stream-Side Spa Pavilion",
      "Indigenous Malabar Spice Culinary Journeys",
      "Resident Naturalist Forest Safaris",
      "Private Bamboo Rafting on Kuruva Lake",
      "Solar & Micro-Hydro Powered Luxury",
    ],
    curatedHighlights: [
      "Sleep 60 feet above the forest floor in a handcrafted luxury treehouse",
      "Private plunge pool overlooking wild cardamom plantations and misty valleys",
      "Guided twilight walk to discover bioluminescent fungi and rare Western Ghats frogs",
      "Traditional Kerala Karkidaka Kanji medicinal porridge prepared by tribal herbalists",
    ],
    villas: [
      {
        id: "v-way-1",
        name: "Canopy Crown Luxury Treehouse",
        size: "880 sq.ft.",
        view: "360° Rainforest Canopy & Mist Valley",
        occupancy: "2 Adults",
        bedType: "Custom Teak King Bed with Rainforest Sliders",
        features: ["Suspended Outdoor Balcony", "Open-Air Canopy Shower", "In-Treehouse Espresso Bar", "Binoculars & Field Guide"],
        priceIndication: "₹31,000 / night",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "v-way-2",
        name: "Stream-side Private Pool Estate",
        size: "1,600 sq.ft.",
        view: "Forest Stream & Wild Fern Garden",
        occupancy: "2-4 Guests",
        bedType: "Two Bedroom Suites",
        features: ["Private Spring-Fed Plunge Pool", "Outdoor Teak Deck", "Fireplace Lounge", "Private Butler Service"],
        priceIndication: "₹54,000 / night",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    policies: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Full refund 7 days prior to check-in.",
      childPolicy: "Treehouses recommended for guests 10+. Ground pool villas open to all ages.",
      additionalNote: "Private 4WD transfer provided from Calicut International Airport (CCJ) or Kannur Airport.",
    },
    featured: true,
  },
  {
    id: "resort-marari",
    slug: "marari-barefoot-beach-haven",
    name: "Marari Barefoot Beach Haven & Coconut Grove",
    tagline: "Untouched golden sands and whisper of coconut fronds on the pristine Malabar Coast.",
    destination: "Marari Beach, Alappuzha, Kerala",
    destinationSlug: "marari-varkala",
    locationSummary: "Secluded beachfront estate in Mararikulam, 25 minutes from Alleppey backwaters.",
    category: "Beachfront Stay",
    description: "An eco-conscious beach sanctuary of thatched-roof cottages and private pool villas, nestled between ancient coconut palms and a secluded white-sand shoreline on the Arabian Sea.",
    longDescription: "Marari is where time slows to the rhythm of the waves. Free from commercial tourist hustle, this quiet fishing village coast offers pure rejuvenation. Wake up to the sound of ocean surf, cycle through shaded village pathways, and relax in private pool villas built with eco-friendly laterite stone and palm thatch. In the evening, savor fresh catch grilled with Malabar spices at a candlelit table set directly in the sand.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    ],
    pricePerNight: "From ₹29,000 / night",
    priceNote: "Includes coastal buffet breakfast, private beach access, and daily sunset herbal high tea.",
    verifiedAmenities: [
      "Direct Private White Sand Beach Trail",
      "Private Saltwater Pool in Villa Garden",
      "Ayurvedic Beachside Spa Hut",
      "Barefoot Coconut Grove Dining",
      "Complimentary Coastal Bicycles",
      "Fresh Coastal Seafood Grill Masterclasses",
      "Yoga Pavilion with Sea Breeze",
    ],
    curatedHighlights: [
      "Secluded private beach path leading directly to calm, swimmable Arabian Sea waters",
      "Private garden plunge pool shielded by flowering frangipani and coconut trees",
      "Traditional Karimeen Pollichathu fish preparation by master local cooks",
      "Sunset meditation on the warm sand accompanied by rhythmic ocean surf",
    ],
    villas: [
      {
        id: "v-mar-1",
        name: "Coconut Grove Private Pool Cottage",
        size: "1,100 sq.ft.",
        view: "Private Palm Garden & Partial Ocean Glimpse",
        occupancy: "2 Adults",
        bedType: "King Bed with Organic Handloom Linens",
        features: ["Private Garden Plunge Pool", "Open-Sky Banana Leaf Shower", "Private Hammock Sala", "Sunken Sand Lounge"],
        priceIndication: "₹29,000 / night",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Flexible date alteration up to 7 days before check-in.",
      childPolicy: "Very family friendly with safe, wide beaches and shallow shores.",
      additionalNote: "Easily combined with an Alleppey luxury houseboat overnight.",
    },
    featured: true,
  },
  {
    id: "resort-thekkady",
    slug: "thekkady-spice-valley-forest-chalets",
    name: "Thekkady Spice Valley & Forest Chalets",
    tagline: "Perched amidst cardamom hills at the gateway to Periyar Tiger Reserve.",
    destination: "Thekkady & Periyar, Kerala",
    destinationSlug: "thekkady-spices",
    locationSummary: "Set on an elevated private spice ridge overlooking Periyar forest boundaries.",
    category: "Luxury Resort",
    description: "Handcrafted stone and timber chalets enveloped by organic cardamom, clove, and pepper vines, featuring private forest-view decks, wildlife boat safaris, and authentic tribal spice cooking.",
    longDescription: "Thekkady is the fragrant spice capital of Kerala. Here, the mist carries the aroma of crushed cardamom and wild cinnamon. Reside in spacious stone chalets with panoramic timber balconies looking into the forest canopy. Guests enjoy private guided spice plantation walks, bamboo rafting excursions across Periyar Lake to observe wild elephant herds, and bespoke Ayurvedic therapies using farm-harvested therapeutic oils.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    ],
    pricePerNight: "From ₹26,000 / night",
    priceNote: "Includes spice estate breakfast, guided plantation walk, and evening Kalaripayattu martial art demonstration.",
    verifiedAmenities: [
      "Forest Canopy Infinity Pool",
      "Private Spice Plantation Walks",
      "Periyar Lake Wildlife Boat Safari",
      "Ayurvedic Herbal Treatment Rooms",
      "Open-Air Woodfire Dining",
      "Nightly Kalaripayattu Martial Arts Shows",
      "Birdwatching Hide & Specialist Guide",
    ],
    curatedHighlights: [
      "Private guided walk through certified organic cardamom and pepper estates",
      "Morning boat safari on Periyar Lake to witness elephants, bison, and otters",
      "Warm herbal massage using cold-pressed ginger and mustard oils",
      "Fireside cooking workshop mastering authentic Syrian Christian beef and fish curries",
    ],
    villas: [
      {
        id: "v-thek-1",
        name: "Cardamom Ridge Master Chalet",
        size: "1,050 sq.ft.",
        view: "Periyar Forest Canopy & Spice Hills",
        occupancy: "2-3 Guests",
        bedType: "Handcrafted Teak King Bed",
        features: ["Private Forest Veranda", "Deep Stone Soaking Tub", "Handmade Brass Fixtures", "Fireplace"],
        priceIndication: "₹26,000 / night",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    policies: {
      checkIn: "1:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Full refund 7 days prior to arrival.",
      childPolicy: "Children of all ages welcome.",
      additionalNote: "Easily accessible on the scenic mountain drive connecting Munnar and Kumarakom.",
    },
    featured: false,
  },
  {
    id: "resort-athirappilly",
    slug: "athirappilly-rainforest-falls-luxury-resort",
    name: "The Athirappilly Rainforest Falls Reserve",
    tagline: "Front-row panoramic luxury facing the thundering 'Niagara of India'.",
    destination: "Athirappilly Waterfalls, Thrissur, Kerala",
    destinationSlug: "athirappilly",
    locationSummary: "Perched directly opposite the 80-foot Athirappilly Falls inside dense Chalakudy river forests.",
    category: "Luxury Resort",
    description: "An awe-inspiring architectural wonder where every room and infinity pool commands an uninterrupted view of the mighty Athirappilly waterfall cascading into the lush Sholayar rainforest.",
    longDescription: "Located just 45 minutes from Kochi Airport, this world-renowned sanctuary offers one of Asia's most dramatic views. The resort is designed so that the roaring mist and spray of the falls create a continuous natural symphony. Relax in infinity pools perched directly facing the deluge, explore ancient tribal jungle trails with resident forest rangers, and enjoy gourmet dining suspended over the rainforest canopy.",
    heroImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1920&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    ],
    pricePerNight: "From ₹36,000 / night",
    priceNote: "Includes waterfall-view breakfast, private rainforest guided walk, and evening acoustic forest dinner.",
    verifiedAmenities: [
      "Infinity Pool Directly Facing Athirappilly Falls",
      "Private Waterfall-View Jacuzzi Balconies",
      "Guided Jungle Trek to Base of Falls",
      "Treehouse Dining Pavilions",
      "Ayurvedic Rejuvenation Treatments",
      "Chalakudy River Fishing & Kayaking",
      "45-Min Luxury Chauffeur from Kochi Airport",
    ],
    curatedHighlights: [
      "Wake up to the thunderous majesty of the falls framed by floor-to-ceiling glass",
      "Swim right to the edge of the infinity pool as mist drifts off the waterfall",
      "Private breakfast served on a wooden deck suspended over the river rapids",
      "Exclusive evening jungle walk accompanied by certified forest department guides",
    ],
    villas: [
      {
        id: "v-ath-1",
        name: "Waterfall View Grand Jacuzzi Suite",
        size: "1,150 sq.ft.",
        view: "Direct Unobstructed Athirappilly Waterfall",
        occupancy: "2 Adults",
        bedType: "Plush King Bed Oriented Toward the Falls",
        features: ["Private Balcony Jacuzzi", "Panoramic Glass Walls", "Rain Shower with Falls View", "Complimentary High Tea"],
        priceIndication: "₹36,000 / night",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80",
      },
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Full refund 10 days before arrival.",
      childPolicy: "Children welcome. Guided river nature trails available.",
      additionalNote: "Closest luxury resort to Cochin International Airport (COK).",
    },
    featured: true,
  },
];
