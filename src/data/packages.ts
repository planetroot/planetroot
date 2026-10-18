export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  highlights: string[];
  mealsIncluded: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  duration: string;
  idealFor: string;
  startingPrice: string;
  priceNote: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  dayByDay: ItineraryDay[];
  accommodationDetails: {
    category: string;
    description: string;
    stayType: string;
  };
  transportArrangements: string;
  inclusions: string[];
  exclusions: string[];
  customizationOptions: string[];
  cancellationTerms: string;
  advisoryNotice?: string;
  featured: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "pkg-kerala-odyssey",
    slug: "the-grand-kerala-odyssey",
    title: "The Grand Kerala Odyssey",
    destination: "Kochi, Munnar, Thekkady & Kumarakom Backwaters",
    destinationSlug: "kumarakom-alleppey",
    duration: "8 Days / 7 Nights",
    idealFor: "Discerning Travelers, Families & First-Time Kerala Explorers",
    startingPrice: "From ₹62,000 / person",
    priceNote: "Luxury package including private chauffeur vehicle throughout, heritage villas, private kettuvallam houseboat, and all curated experiences.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "The quintessential luxury journey across God's Own Country. From the historic colonial streets of Fort Kochi and the misty emerald tea slopes of Munnar, to the wild cardamom forests of Thekkady and the tranquil backwaters of Kumarakom aboard a private luxury houseboat.",
    highlights: [
      "1 night in a restored Fort Kochi colonial boutique manor",
      "2 nights in a private Munnar tea estate bungalow overlooking misty peaks",
      "2 nights in an elevated Thekkady forest chalet with spice plantation walks",
      "1 night aboard a dedicated private luxury Kettuvallam houseboat with private chef",
      "1 night in a Kumarakom lakefront heritage pool villa",
      "Private dedicated luxury vehicle and chauffeur from arrival to departure",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Arrival in Fort Kochi & Colonial Heritage Walk",
        description: "Arrive at Cochin International Airport (COK) where your private luxury chauffeur welcomes you. Transfer to your heritage hotel in Fort Kochi. In the late afternoon, enjoy a private guided stroll past the 14th-century Chinese fishing nets, St. Francis Church, and Jewish Synagogue, followed by an authentic Malabar coastal dinner.",
        highlights: ["Chauffeur airport escort", "Historic Chinese fishing nets at sunset", "Malabar spice coastal welcome dinner"],
        mealsIncluded: "Dinner",
      },
      {
        day: 2,
        title: "Ascent to the Emerald Mist of Munnar",
        description: "Depart Kochi and wind upward into the Western Ghats past cascading Cheeyappara and Valara waterfalls. Watch the landscape transform into infinite green tea carpets. Check into your private tea estate bungalow, savor single-estate high tea, and unwind by the stone fireplace.",
        highlights: ["Scenic waterfall mountain ascent", "Check-in to tea estate bungalow", "Evening tea tasting and fireside dinner"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 3,
        title: "High Peak Sunrise & Tea Garden Discovery",
        description: "Embark on an early morning 4WD journey to witness the golden sunrise breaking over rolling tea ridges. Tour an organic artisan tea factory with a master planter, followed by a private picnic beside a sparkling mountain stream in the valley.",
        highlights: ["4WD tea peak sunrise view", "Artisan tea plucking & factory tour", "Private alpine picnic lunch"],
        mealsIncluded: "Breakfast, Picnic Lunch & Dinner",
      },
      {
        day: 4,
        title: "Scenic Mountain Drive to Thekkady Spice Hills",
        description: "Descend along the panoramic mountain spine toward Thekkady. The air grows rich with aromas of cardamom, cinnamon, and pepper. Check into your forest chalet and embark on a private guided sensory walk through a certified organic spice estate.",
        highlights: ["Panoramic Ghats mountain drive", "Private organic spice plantation walk", "Freshly brewed herbal infusion tasting"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 5,
        title: "Periyar Wildlife Boat Safari & Kalaripayattu Rituals",
        description: "Enjoy a morning wildlife cruise on Periyar Lake inside the tiger reserve to observe wild elephant herds, sambar, and rare birds. In the evening, attend a private, front-row demonstration of Kalaripayattu, the world's oldest martial art, followed by dinner.",
        highlights: ["Periyar Lake morning wildlife boat cruise", "Front-row Kalaripayattu martial art show", "Traditional Syrian Christian culinary dinner"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 6,
        title: "Embarkation on Private Luxury Houseboat (Kettuvallam)",
        description: "Drive down to Alleppey / Kumarakom where your private, air-conditioned luxury houseboat awaits. Made of seasoned anjili wood and bamboo thatch, your boat is staffed by a captain and private chef. Drift through quiet canals as your chef prepares Karimeen Pollichathu on banana leaves.",
        highlights: ["Boarding private luxury air-conditioned houseboat", "Fresh pearl spot fish lunch on banana leaves", "Sunset cruise across open Vembanad waters"],
        mealsIncluded: "Breakfast, Traditional Sadya Lunch & Candlelit Dinner",
      },
      {
        day: 7,
        title: "Disembarkation & Kumarakom Lakefront Pool Villa",
        description: "Awake to sunrise over calm waters and an in-boat South Indian breakfast. Disembark at Kumarakom to check into your heritage pool villa. Spend the afternoon indulging in a 90-minute Ayurvedic Abhyanga massage followed by a village canoe ride.",
        highlights: ["Morning sunrise lake drift", "Check-in to Nalukettu private pool villa", "90-minute Ayurvedic rejuvenation therapy"],
        mealsIncluded: "Breakfast & Celebration Dinner",
      },
      {
        day: 8,
        title: "Gentle Morning & Kochi Airport Farewell",
        description: "Enjoy a final lakeside breakfast with fresh tropical fruits and appam with vegetable stew. Enjoy a relaxed check-out and private chauffeur transfer back to Cochin International Airport (COK).",
        highlights: ["Lakeside breakfast with warm Appams", "Souvenir gift pack of Kerala organic spices", "Private airport transfer"],
        mealsIncluded: "Breakfast",
      },
    ],
    accommodationDetails: {
      category: "5-Star Heritage, Estate & Houseboat Collection",
      description: "Carefully curated mix of Fort Kochi heritage manors, Munnar tea chalets, private air-conditioned luxury houseboats, and Kumarakom lakefront pool villas.",
      stayType: "Curated Luxury Heritage & Pool Villas",
    },
    transportArrangements: "Private dedicated luxury air-conditioned Toyota Innova Crysta with certified English/Hindi/Malayalam speaking chauffeur throughout the 8 days.",
    inclusions: [
      "7 nights luxury accommodation across curated Kerala properties",
      "1 night exclusive charter of private air-conditioned luxury houseboat with crew & chef",
      "Daily breakfast, all meals on houseboat, and 5 curated dinners",
      "Dedicated luxury private vehicle with chauffeur, tolls, and fuel throughout",
      "90-minute signature Ayurvedic treatment per adult",
      "Private spice plantation walk and tea masterclass",
      "Periyar wildlife boat safari and Kalaripayattu performance tickets",
      "Planet Root 24/7 personal travel director assistance",
    ],
    exclusions: [
      "Commercial flights to/from Kochi (COK) (can be arranged on request)",
      "Alcoholic beverages and personal laundry",
      "Gratuities for drivers and boat crew",
    ],
    customizationOptions: [
      "Upgrade to ultra-luxury Mercedes-Benz chauffeur vehicle",
      "Add 2 nights barefoot beach relaxation in Marari Beach private pool cottage",
      "Private Kathakali dance makeup and performance demonstration",
    ],
    cancellationTerms: "Flexible date alteration up to 14 days before journey.",
    featured: true,
  },
  {
    id: "pkg-munnar-highland",
    slug: "munnar-misty-highland-retreat",
    title: "Munnar Misty Highland Retreat",
    destination: "Munnar & High Western Ghats, Kerala",
    destinationSlug: "munnar",
    duration: "4 Days / 3 Nights",
    idealFor: "Couples, Mountain Seekers & Tea Enthusiasts",
    startingPrice: "From ₹32,000 / person",
    priceNote: "Luxury double-occupancy mountain escape including tea estate chalet, private 4WD Kolukkumalai sunrise safari, and fireside dining.",
    heroImage: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "A restorative highland retreat high in the misty cardamom and tea mountains of Munnar. Settle into a colonial estate chalet warmed by stone fireplaces, witness cloud inversions at dawn from high peaks, and explore tranquil tea gardens at your own rhythm.",
    highlights: [
      "3 nights in an organic tea estate chalet with private fireplace and balcony",
      "Private 4WD sunrise safari to Kolukkumalai peak above the clouds",
      "Curated mountain picnic with warm spiced chai and regional delicacies",
      "Private tour of a heritage tea factory and custom tea blending session",
      "Heated mountain-view infinity pool access",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Ascent to the Tea Hills & Fireside Welcome",
        description: "Private chauffeur greeting at Kochi Airport or railway station. Scenic drive ascending through misty eucalyptus and pepper hills. Check in to your tea estate chalet, enjoy warm spiced ginger tea on your private deck, and dinner by the hearth.",
        highlights: ["Private scenic airport transfer", "Chalet stone fireplace lighting", "Planter's four-course dinner"],
        mealsIncluded: "Dinner",
      },
      {
        day: 2,
        title: "Kolukkumalai Sunrise & Mountain Stream Picnic",
        description: "Early dawn 4WD ascent through rough mountain tracks to Kolukkumalai (7,900 ft), experiencing one of India's most surreal sunrise cloud inversions. Savor freshly brewed tea at the world's highest tea factory, followed by a quiet streamside picnic.",
        highlights: ["Kolukkumalai high-altitude sunrise", "Cloud inversion photography", "Streamside gourmet picnic"],
        mealsIncluded: "Breakfast & Picnic Lunch",
      },
      {
        day: 3,
        title: "Tea Masterclass & Restorative Mountain Spa",
        description: "Spend a relaxing morning walking with a resident tea expert through shaded pathways. In the afternoon, enjoy an 80-minute herbal warm oil massage at the sanctuary spa, followed by a starlit bonfire dinner.",
        highlights: ["Guided tea plucking walk", "80-min restorative herbal massage", "Private starlit bonfire dinner"],
        mealsIncluded: "Breakfast, Afternoon Tea & Dinner",
      },
      {
        day: 4,
        title: "Misty Dawn & Return Descent",
        description: "Enjoy a final sunrise breakfast looking over tea hills. Depart at your leisure with a customized gift pack of single-origin Munnar teas and private chauffeur transfer back to Kochi.",
        highlights: ["Panoramic dawn breakfast", "Planter's tea gift box", "Private chauffeur return"],
        mealsIncluded: "Breakfast",
      },
    ],
    accommodationDetails: {
      category: "Luxury Tea Estate Chalet",
      description: "Handcrafted stone & wood mountain suite with stone fireplace, heated bathroom, and panoramic valley balcony.",
      stayType: "Planter's Mist Chalet Suite",
    },
    transportArrangements: "Private air-conditioned SUV with dedicated mountain chauffeur from Kochi and back.",
    inclusions: [
      "3 nights luxury tea estate chalet accommodation",
      "Daily breakfast, one picnic lunch, and two curated dinners",
      "Private 4WD Kolukkumalai sunrise expedition",
      "One 80-minute signature spa massage per adult",
      "Private vehicle and chauffeur throughout",
    ],
    exclusions: ["Airfare to Kochi", "Personal expenses and tips"],
    customizationOptions: [
      "Add overnight glamping under the stars in high Munnar meadows",
      "Extend journey into Thekkady spice hills or Kumarakom backwaters",
    ],
    cancellationTerms: "Flexible rebooking up to 10 days before departure.",
    featured: true,
  },
  {
    id: "pkg-backwater-voyage",
    slug: "backwaters-luxury-houseboat-voyage",
    title: "Backwaters & Luxury Houseboat Voyage",
    destination: "Kumarakom & Alleppey Backwaters, Kerala",
    destinationSlug: "kumarakom-alleppey",
    duration: "4 Days / 3 Nights",
    idealFor: "Couples, Quiet Luxury Seekers & Rejuvenation",
    startingPrice: "From ₹38,000 / person",
    priceNote: "Includes private luxury air-conditioned kettuvallam houseboat, heritage lakefront pool villa, all meals, and private Kochi chauffeur.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Immerse in the timeless rhythm of the Kerala backwaters. Spend a day and night drifting aboard an exclusive private luxury houseboat with your personal captain and chef, followed by two nights in a restored 200-year-old Nalukettu lakefront pool villa.",
    highlights: [
      "1 night on a private luxury air-conditioned Kettuvallam with private crew & chef",
      "2 nights in a Kumarakom lakefront heritage pool villa with private plunge pool",
      "Authentic Kerala Sadya feast prepared fresh on board and served on banana leaves",
      "Private canoe exploration through narrow lotus waterways",
      "Signature Ayurvedic backwater massage session",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Embarkation on Private Kettuvallam & Lake Sunset",
        description: "Your private chauffeur brings you from Kochi to the jetty. Step aboard your private luxury houseboat, greeted with fresh tender coconut water. Cast off along palm-lined canals into Vembanad Lake. Savor fresh Karimeen fish for lunch and anchor at dusk for a starlit dinner on the open water.",
        highlights: ["Private houseboat welcome", "Traditional banana leaf lunch", "Starlit dinner on anchored boat"],
        mealsIncluded: "Lunch & Dinner",
      },
      {
        day: 2,
        title: "Morning Canal Drift & Check-in to Pool Villa",
        description: "Wake to birdsong and gentle morning ripples. Enjoy hot idlis, dosas, and fresh tropical fruit while cruising through narrow village canals. Disembark at Kumarakom and check in to your heritage Nalukettu private pool villa.",
        highlights: ["Sunrise canal cruise", "Check-in to private pool villa", "Afternoon swim and lakeside tea"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 3,
        title: "Ayurvedic Spa Rejuvenation & Canoe Safari",
        description: "Begin with a guided lakeside yoga session. Indulge in an authentic 90-minute Ayurvedic warm herbal oil massage. In the late afternoon, step into a slender wooden canoe paddled by a local boatman to glide silently into narrow hidden canals.",
        highlights: ["Lakeside morning yoga", "90-minute Ayurvedic Abhyanga therapy", "Sunset village canoe safari"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 4,
        title: "Gentle Lakefront Farewell",
        description: "Enjoy an unhurried breakfast on your veranda. Relax by your private plunge pool before check-out and private chauffeur transfer back to Kochi.",
        highlights: ["Relaxed veranda breakfast", "Private airport transfer"],
        mealsIncluded: "Breakfast",
      },
    ],
    accommodationDetails: {
      category: "Private Luxury Houseboat & 5-Star Heritage Villa",
      description: "Exclusive single-cabin or double-cabin air-conditioned kettuvallam + heritage Nalukettu pool villa.",
      stayType: "Private Kettuvallam & Heritage Pool Villa",
    },
    transportArrangements: "Private chauffeured luxury sedan or SUV throughout.",
    inclusions: [
      "1 night exclusive luxury houseboat charter with full board",
      "2 nights in Kumarakom heritage pool villa with breakfast and dinner",
      "Round-trip private chauffeur transfers from Kochi",
      "Sunset canoe safari and Ayurvedic spa therapy",
    ],
    exclusions: ["Airfare to Kochi", "Personal spending"],
    customizationOptions: [
      "Add private sunset speedboat cruise across Vembanad Lake",
      "Combine with Marari beachfront pool cottage",
    ],
    cancellationTerms: "Flexible rebooking with 14 days notice.",
    featured: true,
  },
  {
    id: "pkg-wayanad-rainforest",
    slug: "wayanad-deep-rainforest-escape",
    title: "Wayanad Deep Rainforest & Treehouse Escape",
    destination: "Vythiri & Lakkidi Rainforests, Wayanad, Kerala",
    destinationSlug: "wayanad",
    duration: "5 Days / 4 Nights",
    idealFor: "Nature Enthusiasts, Adventure Couples & Eco-Seekers",
    startingPrice: "From ₹34,000 / person",
    priceNote: "All-inclusive rainforest stay with treehouse villa, private pool, bamboo rafting, and all organic plantation meals.",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "A transformative journey into the deep evergreen rainforests of the Western Ghats. Stay in luxury treehouses built high in ancient mahogany trees, swim in private spring-fed plunge pools, and explore prehistoric caves and bamboo riverways.",
    highlights: [
      "2 nights in a luxury canopy treehouse 60 feet above the forest floor",
      "2 nights in a stream-side private pool estate villa",
      "Private bamboo rafting through the silent channels of Kuruva Island",
      "Guided trek to the prehistoric petroglyphs at Edakkal Caves",
      "Naturalist-led twilight night walk to spot rare bio-luminescence",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Calicut Airport Greeting & Ascent to the Ghats",
        description: "Private 4WD chauffeur welcome at Calicut (CCJ) Airport. Ascend the famous 9 hairpin bends of Thamarassery Churam. Check in to your luxury treehouse suspended in the forest canopy. Evening warm herbal tea and fireside dinner.",
        highlights: ["Scenic Ghats hairpin ascent", "Check-in to canopy treehouse", "Malabar organic welcome dinner"],
        mealsIncluded: "Dinner",
      },
      {
        day: 2,
        title: "Canopy Birds & Kuruva Island Bamboo Rafting",
        description: "Wake to birdsong above the mist. After breakfast, head to Kuruva Island on the Kabini River for a private guided bamboo raft drift through silent evergreen river channels.",
        highlights: ["Canopy sunrise birdwatching", "Private bamboo raft drift", "Streamside picnic lunch"],
        mealsIncluded: "Breakfast & Picnic Lunch",
      },
      {
        day: 3,
        title: "Edakkal Prehistoric Caves & Pool Villa Check-In",
        description: "Hike up to Edakkal Caves to marvel at Neolithic rock carvings dating back to 6,000 BCE. Transition to your ground-level private pool villa nestled beside a babbling mountain stream.",
        highlights: ["Edakkal ancient rock petroglyphs", "Private plunge pool villa check-in", "Afternoon swim in mountain spring pool"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 4,
        title: "Plantation Spice Walk & Rainforest Night Safari",
        description: "Explore the 400-acre estate's organic cardamom, pepper, and coffee groves. In the evening, accompany our resident naturalist with UV torches on a twilight walk to observe bio-luminescent fungi.",
        highlights: ["Organic coffee & spice harvest walk", "Naturalist night trail for bio-luminescence", "Acoustic fireside dinner"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 5,
        title: "Gentle Morning & Calicut Airport Transfer",
        description: "Final sunrise breakfast surrounded by tropical foliage. Comfortable private 4WD chauffeur transfer back to Calicut International Airport.",
        highlights: ["Rainforest veranda breakfast", "Spices and single-origin coffee souvenir", "Airport transfer"],
        mealsIncluded: "Breakfast",
      },
    ],
    accommodationDetails: {
      category: "Eco-Luxury Canopy Treehouse & Spring-Fed Pool Villa",
      description: "Custom treehouse built by indigenous tribal artisans + private pool villa with stone bath.",
      stayType: "Canopy Treehouse & Stream-side Pool Villa",
    },
    transportArrangements: "Private dedicated 4WD vehicle and chauffeur throughout.",
    inclusions: [
      "4 nights luxury accommodation (2 nights treehouse, 2 nights pool villa)",
      "Daily farm-to-table breakfast, one picnic, and 4 curated dinners",
      "Kuruva Island bamboo raft permits and guide",
      "Edakkal Caves guided excursion",
      "Round-trip transfers from Calicut or Kannur",
    ],
    exclusions: ["Airfare", "Personal spending"],
    customizationOptions: ["Extend stay into Kabini tiger reserve", "Private in-villa Ayurvedic massage package"],
    cancellationTerms: "Full refund 7 days before check-in.",
    featured: true,
  },
  {
    id: "pkg-romantic-kerala",
    slug: "romantic-kerala-honeymoon-haven",
    title: "Romantic Kerala Honeymoon Haven",
    destination: "Munnar Hills, Backwaters & Marari Beach",
    destinationSlug: "marari-varkala",
    duration: "6 Days / 5 Nights",
    idealFor: "Honeymooners & Milestone Anniversaries",
    startingPrice: "From ₹46,000 / person",
    priceNote: "Curated couple's holiday including private pool stays, private houseboat overnight, floral greetings, and candlelit dinners.",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "A dream honeymoon across the three most romantic landscapes of Kerala: the cool emerald tea peaks of Munnar, a private candlelit luxury houseboat gliding through quiet backwater canals, and a secluded private pool cottage on the golden sands of Marari Beach.",
    highlights: [
      "2 nights in a romantic tea estate villa in Munnar with wood fireplace",
      "1 night aboard a dedicated private luxury houseboat with private chef",
      "2 nights in a private beachfront pool cottage in Marari on the Arabian Sea",
      "Private candlelit dinner on the beach with wine and coastal delicacies",
      "Couple's synchronized Ayurvedic rejuvenation massage",
      "Romantic welcome gifts: vintage wine, artisanal chocolates, floral bed decor",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Kochi Arrival & Romantic Munnar Mountain Check-in",
        description: "Private chauffeur meeting at Kochi Airport with fresh jasmine garlands. Ascend into the tea hills of Munnar. Arrive at your secluded mountain villa greeted with chilled sparkling wine. Cozy up by your private stone fireplace for an intimate dinner.",
        highlights: ["Jasmine garland greeting", "Private mountain chauffeur transfer", "Fireside candlelit dinner"],
        mealsIncluded: "Romantic Dinner",
      },
      {
        day: 2,
        title: "Kolukkumalai Cloud Sunrise & Couple's High Tea",
        description: "Watch the morning sunrise over rolling tea peaks. Mid-afternoon high tea served on your private panoramic deck, followed by an unhurried sunset walk through private tea trails.",
        highlights: ["Mountain sunrise views", "Balcony high tea with warm savories", "Private tea garden stroll"],
        mealsIncluded: "Breakfast & Dinner",
      },
      {
        day: 3,
        title: "Private Luxury Houseboat Embarkation & Water Candlelight",
        description: "Drive down to Alleppey and board your exclusive luxury air-conditioned houseboat. Glide through winding backwaters as your chef prepares fresh river prawns and Karimeen on banana leaves. Dine under the stars on the tranquil waters.",
        highlights: ["Private houseboat cruise", "Banana leaf coastal lunch", "Starlit dinner on anchored lake"],
        mealsIncluded: "Breakfast, Lunch & Dinner",
      },
      {
        day: 4,
        title: "Disembarkation & Marari Beachfront Pool Cottage",
        description: "Disembark after a morning cruise and transfer to Marari Beach. Check into your thatched private pool villa nestled in a coconut grove just steps from the Arabian Sea.",
        highlights: ["Check-in to beachfront pool cottage", "Private plunge pool swim", "Sunset barefoot walk on the sand"],
        mealsIncluded: "Breakfast & Coastal Dinner",
      },
      {
        day: 5,
        title: "Couple's Ayurvedic Spa & Beachfront Candlelight Dinner",
        description: "Enjoy a synchronized 90-minute couple's Ayurvedic massage using warm herbal oils and rosewater. At dusk, sit down at an exclusive candlelit table set directly in the sand for a romantic dinner accompanied by gentle ocean surf.",
        highlights: ["Synchronized couple's Ayurvedic massage", "Private candlelit table in the sand", "Chef's 4-course seafood tasting menu"],
        mealsIncluded: "Breakfast & Beach Candlelight Dinner",
      },
      {
        day: 6,
        title: "Gentle Morning & Kochi Airport Farewell",
        description: "Final breakfast on your veranda under coconut palms. Enjoy late check-out privileges before your private chauffeur return transfer to Kochi Airport.",
        highlights: ["Veranda coconut grove breakfast", "Keepsake gift of Kerala handloom & spices", "Airport transfer"],
        mealsIncluded: "Breakfast",
      },
    ],
    accommodationDetails: {
      category: "Luxury Mountain Villa, Private Houseboat & Beach Pool Cottage",
      description: "Dedicated couple's sanctuaries featuring private plunge pools, open-air baths, and exclusive private houseboat charter.",
      stayType: "Exclusive Couple's Pool & Houseboat Sanctuaries",
    },
    transportArrangements: "Private chauffeured luxury sedan throughout the entire honeymoon.",
    inclusions: [
      "5 nights luxury accommodation across Munnar, Houseboat, and Marari Beach",
      "All meals on the private houseboat",
      "Daily breakfast and four romantic dinners including beach candlelight setup",
      "Couple's 90-minute Ayurvedic spa massage",
      "Private luxury vehicle with chauffeur throughout",
    ],
    exclusions: ["Airfare to Kochi", "Personal items"],
    customizationOptions: ["Add professional couple's photoshoot in tea gardens and on the beach", "Add scenic helicopter transfer"],
    cancellationTerms: "Flexible cancellation up to 10 days before arrival.",
    featured: true,
  },
  {
    id: "pkg-ayurveda-wellness",
    slug: "ayurvedic-rejuvenation-monsoon-wellness",
    title: "Ayurvedic Rejuvenation & Wellness Sanctuary",
    destination: "Kumarakom & Western Ghats Foothills, Kerala",
    destinationSlug: "kumarakom-alleppey",
    duration: "7 Days / 6 Nights",
    idealFor: "Holistic Health Seekers, Stress Relief & Wellness Lovers",
    startingPrice: "From ₹48,000 / person",
    priceNote: "Complete wellness immersion including daily Ayurvedic doctor consultations, authentic customized therapies, organic herbal diet, and yoga.",
    heroImage: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1920&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    ],
    overview: "Experience authentic Kerala Ayurveda in its birthplace. Supervised by qualified Ayurvedic physicians (Vaidyas), this 7-day program combines daily Abhyanga, Shirodhara, herbal steam baths, customized Sattvic organic cuisine, and morning lakeside yoga to detoxify, renew, and balance body and mind.",
    highlights: [
      "6 nights in a tranquil lakefront wellness villa with private garden",
      "Daily consultation and pulse diagnosis with resident Chief Ayurvedic Physician",
      "Two authentic 90-minute Ayurvedic treatments daily (Shirodhara, Abhyanga, Njavarakizhi)",
      "Individualized Sattvic diet plan designed around your specific Dosha (Vata/Pitta/Kapha)",
      "Daily sunrise Pranayama, meditation, and gentle Hatha yoga sessions",
    ],
    dayByDay: [
      {
        day: 1,
        title: "Arrival, Physician Consultation & Gentle Abhyanga",
        description: "Arrive at the peaceful wellness sanctuary. Meet your Ayurvedic Vaidya for in-depth pulse diagnosis (Nadi Pariksha) and constitution analysis. Begin with a calming Abhyanga warm herbal oil massage to ease travel fatigue.",
        highlights: ["Ayurvedic physician consultation", "Dosha constitution analysis", "Gentle welcome Abhyanga therapy"],
        mealsIncluded: "Sattvic Herbal Dinner",
      },
      {
        day: 2,
        title: "Deep Detoxification & Warm Shirodhara",
        description: "Begin with morning lakeside meditation. Receive your primary treatment: Shirodhara, where a continuous stream of warm medicated herbal oil flows over the third-eye chakra to calm the central nervous system.",
        highlights: ["Sunrise lakeside meditation", "Therapeutic Shirodhara session", "Organic dosha-balancing lunch"],
        mealsIncluded: "All Organic Meals (Breakfast, Lunch & Dinner)",
      },
      {
        day: 3,
        title: "Njavarakizhi Herbal Rice Poultice Therapy",
        description: "Experience Njavarakizhi — a rejuvenation therapy using warm boluses of medicated Njavara rice cooked in milk and herbal decoctions, massaging the tissues to restore muscle tone and skin radiance.",
        highlights: ["Njavarakizhi herbal poultice massage", "Herbal steam bath (Swedana)", "Ayurvedic herbal tea bar"],
        mealsIncluded: "All Organic Meals",
      },
      {
        day: 4,
        title: "Internal Cleansing & Guided Forest Walk",
        description: "Continue with individualized therapies. Mid-day is spent in quiet contemplative rest. In the late afternoon, enjoy a silent mindful walking meditation through medicinal plant gardens.",
        highlights: ["Personalized Ayurvedic treatment", "Silent medicinal garden meditation", "Evening Ayurvedic wellness workshop"],
        mealsIncluded: "All Organic Meals",
      },
      {
        day: 5,
        title: "Kizhi & Deep Tissue Rejuvenation",
        description: "Herbal leaf bolus therapy (Ela Kizhi) applied with warm medicated oils to relieve joint stiffness and chronic inflammation, followed by a warm herbal bath infused with wild tulsi and neem.",
        highlights: ["Ela Kizhi herbal leaf therapy", "Warm medicinal herbal bath", "Sunset canoe drift on calm waters"],
        mealsIncluded: "All Organic Meals",
      },
      {
        day: 6,
        title: "Vitality Restoring Therapy & Vaidya Farewell Review",
        description: "Final comprehensive treatment session. Concluding consultation with your Ayurvedic doctor to review improvements and receive your customized post-retreat dietary and lifestyle guidance.",
        highlights: ["Final rejuvenation therapy", "Doctor post-program lifestyle plan", "Celebration wellness dinner"],
        mealsIncluded: "All Organic Meals",
      },
      {
        day: 7,
        title: "Mindful Dawn & Return Journey",
        description: "Begin with a final sunrise yoga and chanting session. Enjoy an organic breakfast before private chauffeur transfer to Kochi Airport with newfound vitality and inner peace.",
        highlights: ["Sunrise yoga & chanting", "Personalized herbal medicine kit", "Private airport transfer"],
        mealsIncluded: "Breakfast",
      },
    ],
    accommodationDetails: {
      category: "Dedicated Ayurvedic Wellness Retreat Villa",
      description: "Air-conditioned heritage villa built with eco-friendly laterite and teak, with private herbal garden and veranda.",
      stayType: "Ayurvedic Lakefront Garden Villa",
    },
    transportArrangements: "Private chauffeured airport transfers included.",
    inclusions: [
      "6 nights accommodation in wellness villa",
      "All meals (full board Sattvic organic Ayurvedic cuisine)",
      "Daily doctor consultations and two daily 90-min Ayurvedic therapies",
      "Daily yoga, pranayama, and meditation sessions",
      "All prescribed herbal medicines during the stay",
      "Round-trip private airport transfers from Kochi",
    ],
    exclusions: ["Airfare to Kochi", "Personal items"],
    customizationOptions: ["Extend to 14 or 21-day full Panchakarma curative program"],
    cancellationTerms: "Flexible rebooking with 14 days notice.",
    featured: true,
  },
];
