export interface Experience {
  id: string;
  slug: string;
  title: string;
  feeling: string;
  tagline: string;
  description: string;
  editorialText: string;
  image: string;
  idealLocation: string;
  keySensations: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-kettuvallam",
    slug: "private-kettuvallam-drifts",
    title: "Private Luxury Houseboat Drifts",
    feeling: "Serenity, Time Dissolving & Gentle Rhythm",
    tagline: "Gliding across glassy backwaters as the sun dips into coconut palms.",
    description: "Exclusive private air-conditioned houseboats with personal captains and chefs preparing fresh catch on banana leaves.",
    editorialText: "A kettuvallam voyage is unlike any travel experience in the world. As the boat parts the mirrored waters of Vembanad Lake, the rhythm of everyday hurry slows to a crawl. Watch village life unfold on palm-shaded banks, breathe the fragrance of flowering water hyacinths, and dine on Karimeen Pollichathu prepared fresh by your onboard chef.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Vembanad Lake, Kumarakom & Alleppey",
    keySensations: ["Rippling water sounds", "Warm Karimeen fish on banana leaf", "Sunset over coconut palms", "No road traffic"],
  },
  {
    id: "exp-munnar-sunrise",
    slug: "misty-tea-sunrise-walks",
    title: "Misty Mountain Tea Awakenings",
    feeling: "Crisp Stillness, Clarity & Awe",
    tagline: "Golden sunlight piercing the morning fog over emerald tea ridges.",
    description: "Wrapped in warm wool with steaming single-estate tea, watching the mist roll over the Western Ghats.",
    editorialText: "Before dawn breaks over the peaks of Munnar, a heavy blanket of cool mist covers the tea terraces. Standing 1,600 meters above sea level on your wooden chalet deck with a freshly steeped cup of organic tea, you watch the sun ignite the fog in shades of amber and rose. A profound stillness settles across the soul.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Chinnakanal & Kolukkumalai, Munnar Highlands",
    keySensations: ["Crisp mountain air", "Aroma of fresh tea blossoms", "Cloud inversions", "Warm stone fireplaces"],
  },
  {
    id: "exp-ayurveda-chikitsa",
    slug: "authentic-ayurvedic-chikitsa",
    title: "Authentic Ayurvedic Rejuvenation",
    feeling: "Deep Purification, Balance & Centered Healing",
    tagline: "Ancient botanicals, warm medicated oils, and thousand-year-old healing.",
    description: "Personalized Panchakarma therapies supervised by veteran physicians in open-air courtyard pavilions.",
    editorialText: "Kerala is the revered birthplace of Ayurveda. Here, medicine is not a pill, but an alignment of body, mind, and spirit. Feel warm medicated herbal oil stream steadily across your forehead in Shirodhara, melting years of accumulated tension. Synchronized Abhyanga massages restore circulation using herbs harvested right from the resort's medicinal gardens.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Kumarakom Wellness Pavilions & Palakkad Heritage Manors",
    keySensations: ["Warm herbal oil streaming (Shirodhara)", "Fragrant medicinal steam", "Gentle lakeside yoga", "Deep cellular renewal"],
  },
  {
    id: "exp-marari-beach",
    slug: "barefoot-coastal-solitude",
    title: "Barefoot Malabar Coastal Living",
    feeling: "Total Ease, Warm Sands & Unburdened Freedom",
    tagline: "Golden sands kissed by the gentle surf of the Arabian Sea.",
    description: "Thatched eco-luxury cottages where shoes are forgotten and the day is measured by ocean tides.",
    editorialText: "Kick off your shoes the moment you arrive. Walk barefoot across powdery golden sands shaded by leaning coconut palms. Swim in warm, gentle Arabian Sea waters, read in a swinging hammock, and watch local fishermen haul in their colorful wooden boats at sundown as the horizon turns crimson.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Marari Beach & Varkala Cliffs",
    keySensations: ["Warm golden sand beneath feet", "Gentle ocean surf sounds", "Fresh tender coconut water", "Red sunset horizons"],
  },
  {
    id: "exp-wayanad-canopy",
    slug: "rainforest-canopy-living",
    title: "Rainforest Canopy & Treehouse Solitude",
    feeling: "Wild Immersion, Wonder & Pure Air",
    tagline: "Sleeping 60 feet high amidst ancient mahogany trees and mist.",
    description: "Handcrafted wooden treehouses and spring-fed pool villas nestled deep inside bio-reserve rainforests.",
    editorialText: "Escape modern civilization to the high green canopies of Wayanad. Living inside an elevated luxury treehouse, your neighbors are the Malabar hornbill and giant flying squirrel. Listen to the gentle sound of raindrops drumming on teak leaves, and breathe air filtered by millions of tropical trees.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Vythiri & Lakkidi Rainforests, Wayanad",
    keySensations: ["Scent of damp mountain earth", "Song of Malabar whistling thrush", "Spring-fed private plunge pool", "Rain on broad leaves"],
  },
  {
    id: "exp-spice-living",
    slug: "spiced-plantation-living",
    title: "Fragrant Spice Plantation Living",
    feeling: "Aromatic Awakening, Earthiness & Discovery",
    tagline: "The rich aroma of green cardamom pods, cinnamon bark, and vanilla vines.",
    description: "Private walks through centuries-old spice hills guided by local planters who know every leaf and vine.",
    editorialText: "Kerala's spices drew ancient Phoenician, Roman, and Arab merchants across oceans. Walking through high-altitude cardamom groves in Thekkady, crush a fresh green pod between your fingers and inhale its electric, citrus-peppery aroma. Savor dinners flavored with fresh peppercorns picked just hours earlier.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Thekkady Spice Hills & Cardamom Reserves",
    keySensations: ["Fresh crushed cardamom aroma", "Cinnamon bark scent", "Woodfire farm cooking", "Warm herbal infusions"],
  },
  {
    id: "exp-sadya-feasts",
    slug: "traditional-sadya-culinary-feasts",
    title: "Traditional Sadya Culinary Feasts",
    feeling: "Abundance, Gastronomic Joy & Cultural Heritage",
    tagline: "24 authentic regional delicacies served with grace on a fresh banana leaf.",
    description: "An elaborate vegetarian and coastal feast balancing all six Ayurvedic tastes in joyous celebration.",
    editorialText: "The Kerala Sadya is not just a meal; it is a cultural celebration of nature's bounty. Sit down before a broad, glistening banana leaf as traditional hosts serve red Matta rice, Avial, Thoran, Olan, and golden Payasam infused with jaggery and coconut milk. Every bite connects you to generations of culinary wisdom.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Kumarakom Heritage Manors & Central Travancore",
    keySensations: ["Warm banana leaf fragrance", "Golden jaggery Payasam", "Creamy coconut milk curries", "Generous cultural warmth"],
  },
  {
    id: "exp-canoe-serenade",
    slug: "village-canoe-serenades",
    title: "Village Canoe Water Serenades",
    feeling: "Intimate Silence, Stillness & Authentic Human Touch",
    tagline: "Drifting into narrow village waterways where motorboats cannot go.",
    description: "Slender wooden canoes rowed with long poles through quiet canals shaded by overarching palms.",
    editorialText: "While houseboats cruise the wide open lakes, the true magic of Kerala hides in the narrow village canals. Step into a slender wooden canoe and glide beneath arched coconut trees. Wave to children cycling to school along the banks, watch kingfishers dive for fish, and experience the tender heartbeat of rural Kerala.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85",
    idealLocation: "Kuttanad & Kumarakom Canal Villages",
    keySensations: ["Gentle paddle dipping in water", "Dragonflies skimming lotus petals", "Warm village smiles", "Absolute quietude"],
  },
];
