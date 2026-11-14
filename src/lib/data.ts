import { Product, Service, Project, Testimonial, GalleryItem, Enquiry, SiteInfo } from './types';

export const initialSiteInfo: SiteInfo = {
  businessName: "Super Sand",
  legalName: "Sai Super Sand Minerals Pvt. Ltd.",
  establishedYear: 2006,
  productionOperationsYear: 2008,
  primaryPhone: "+91 95338 95920",
  altPhone: "+91 95536 31919",
  primaryEmail: "info@supersand.in",
  altEmail: "krishnareddy@supersand.in",
  whatsappNumber: "+91 95338 95920",
  address: "Lane No. 4, Opposite SBI, Nehru Nagar Colony, West Marredpally, Secunderabad, Telangana – 500026, India.",
  tagline: "Quality Today... A Stronger Tomorrow...",
  vision: "To become a leading and trusted construction materials manufacturer and supplier while building a more sustainable future for the construction industry.",
  mission: "To deliver high-quality construction materials through advanced production technology, consistent quality control, reliable supply, and environmentally responsible practices.",
  coreValues: [
    "Quality and Excellence",
    "Customer Satisfaction",
    "Trust and Transparency",
    "Sustainability and Environmental Responsibility",
    "Innovation and Technology",
    "Reliability and Long-Term Relationships"
  ]
};

export const initialProducts: Product[] = [
  {
    id: "coarse-aggregates",
    slug: "coarse-aggregates",
    name: "Coarse Aggregates",
    subtitle: "Premium High-Strength Angular Stone Aggregates",
    tagline: "Super 6mm, 10mm, 20mm, 40mm and 60mm.",
    shortDesc: "Super 6mm, 10mm, 20mm, 40mm and 60mm.",
    fullDesc: "High-quality coarse aggregates available in different sizes, including Super 6mm, 10mm, 20mm, 40mm, and 60mm. Manufactured from premium virgin granite quarry rock through multi-stage robotic crushing to ensure optimal cubical shape, maximum interlocking strength, and low flakiness index. Suitable for high-grade concrete production, infrastructure foundations, highway paving, and heavy structural applications.",
    image: "/images/products/coarse-aggregates.jpg",
    heroImage: "/images/gallery/aggregate-stockpile-conveyor.png",
    sizesOrTypes: [
      "Super 6mm (Chips / Micro Aggregate)",
      "Super 10mm (Graded Structural Concrete)",
      "Super 20mm (Reinforced Concrete RCC)",
      "Super 40mm (Heavy Mass Concrete)",
      "Super 60mm (Railway Ballast & Heavy Foundations)"
    ],
    applications: [
      "Ready-Mix Concrete (RMC) production from M20 to M70 grades",
      "Reinforced Cement Concrete (RCC) columns, slabs, and beams",
      "Highway bitumen paving and asphalt concrete layers",
      "Heavy industrial machine foundations and bridge piers",
      "Railway permanent way track ballast"
    ],
    features: [
      "High compressive strength & 100% mechanical cubical shape",
      "Negligible elongation and flakiness index (<15%)",
      "Triple washed and free from dust coatings or organic impurities",
      "Fully compliant with IS 383:2016 specifications"
    ],
    specifications: {
      "Specific Gravity": "2.65 - 2.72",
      "Water Absorption": "< 0.8%",
      "Crushing Value": "< 18%",
      "Impact Value": "< 16%",
      "Abrasion Value": "< 20%",
      "Grading Standard": "IS 383:2016 Table 2"
    }
  },
  {
    id: "fine-aggregates",
    slug: "fine-aggregates",
    name: "Fine Aggregates",
    subtitle: "Precision Manufactured Sand (M-Sand & P-Sand)",
    tagline: "Plastering Sand, Mortar Sand, and Brick Sand.",
    shortDesc: "Plastering Sand, Mortar Sand, and Brick Sand.",
    fullDesc: "Premium-quality fine aggregates, including Plastering Sand (P-Sand), Mortar Sand, and Brick Sand. Carefully processed through vertical shaft impactors (VSI) and air classifiers to ensure consistent particle size distribution, zero silt content, and superior hydration bonding. Designed as the ultimate eco-friendly and cost-effective replacement for diminishing natural river sand.",
    image: "/images/products/fine-aggregates.jpg",
    heroImage: "/images/gallery/sand-conveyor-discharge.png",
    sizesOrTypes: [
      "Plastering Sand (P-Sand 0 - 2.36mm)",
      "Concrete M-Sand (Zone II 0 - 4.75mm)",
      "Mortar Sand (Bricklaying & Masonry)",
      "Brick Sand (Jointing & Paver Blocks)"
    ],
    applications: [
      "Internal and external wall plastering with mirror-smooth finish",
      "High-strength brick masonry and fly ash block jointing mortar",
      "Precast concrete products and architectural finishes",
      "Sub-base interlocking concrete paver block manufacturing",
      "Waterproofing screeds and tile adhesives"
    ],
    features: [
      "Zero silt, zero clay, and zero organic marine salts",
      "Balanced micro-fines preventing surface cracking and shrinkage",
      "High workability reducing cement consumption by 8-12%",
      "100% eco-friendly preserving river beds and water bodies"
    ],
    specifications: {
      "Fineness Modulus": "2.6 - 2.8 (M-Sand) / 1.5 - 1.8 (P-Sand)",
      "Silt Content": "0% (Nil)",
      "Zone Classification": "Zone II as per IS 383",
      "Bulk Density": "1550 - 1650 kg/m³"
    }
  },
  {
    id: "coarse-aggregate-mix",
    slug: "coarse-aggregate-mix",
    name: "Coarse Aggregate Mix",
    subtitle: "Engineered Sub-Base and Base Course Blends",
    tagline: "W.M.M and G.S.B for strong and durable construction.",
    shortDesc: "W.M.M & G.S.B for strong and durable construction.",
    fullDesc: "High-quality engineered construction mixes, including W.M.M (Wet Mix Macadam) and G.S.B (Granular Sub-Base). Formulated with precision proportioning of coarse and fine aggregates to provide maximum density, structural stability, and long-lasting durability for highway roadways, industrial pavements, airport runways, and heavy transport corridors.",
    image: "/images/products/coarse-aggregate-mix.jpg",
    heroImage: "/images/gallery/dump-truck-haul-road.png",
    sizesOrTypes: [
      "Wet Mix Macadam (W.M.M Mix 0.075mm to 53mm)",
      "Granular Sub-Base (G.S.B Grading I, II, III)",
      "Crusher Run Aggregate Mix (0 - 40mm)",
      "Dry Lean Concrete (DLC) Aggregates"
    ],
    applications: [
      "National and state highway road base and sub-base layers",
      "Heavy industrial internal pavement and logistics yard subgrade",
      "Airport runways, taxiways, and container terminal aprons",
      "Railway track sub-ballast formation",
      "Large commercial parking foundations"
    ],
    features: [
      "Optimum moisture content consistency for rapid site compaction",
      "High California Bearing Ratio (CBR) exceeding 80%",
      "Eliminates segregation during transit and mechanical spreading",
      "Conforms strictly to MoRTH Section 400 specifications"
    ],
    specifications: {
      "CBR Value": "> 80%",
      "Liquid Limit": "< 25%",
      "Plasticity Index": "< 6%",
      "Standard": "MoRTH Specification for Road & Bridge Works"
    }
  },
  {
    id: "insta-super-mix",
    slug: "insta-super-mix",
    name: "Insta Super Mix",
    subtitle: "Factory-Proportioned All-In-One Aggregate Solution",
    tagline: "A perfect blend for stronger construction.",
    shortDesc: "A perfect blend for stronger construction.",
    fullDesc: "A specially formulated proprietary combination of coarse aggregates, fine aggregates, and coarse aggregate mix. Designed to simplify on-site construction batching while delivering consistent particle packing, reduced void ratio, exceptional strength, and enhanced durability. Perfect for builders seeking hassle-free material procurement without batching errors.",
    image: "/images/products/insta-super-mix.jpg",
    heroImage: "/images/gallery/wheel-loader-loading-truck.png",
    sizesOrTypes: [
      "Insta Super Mix - Grade Standard",
      "Insta Super Mix - High Strength Premix",
      "Insta Super Mix - Pavement Grade"
    ],
    applications: [
      "Residential and commercial slab castings",
      "Pavements, driveways, and factory floors",
      "Underground drainage, culverts, and retaining walls",
      "Site concrete with uniform slump retention"
    ],
    features: [
      "Pre-blended for ideal void-filling and compressive density",
      "Saves labor time and avoids on-site aggregate mixing guesswork",
      "Consistent supply guarantee direct from crusher to site",
      "Engineered by materials specialists for maximum strength"
    ],
    specifications: {
      "Blend Ratio": "Optimized continuous grading curve",
      "Fineness Index": "Uniformly balanced",
      "Moisture": "Controlled dry-batch delivery"
    }
  }
];

export const initialServices: Service[] = [
  {
    id: "quarrying-mining",
    slug: "quarrying-mining",
    title: "Granite Quarrying & Mechanized Mining",
    category: "Mining Operations",
    tagline: "High-grade virgin granite extraction utilizing world-class excavator fleets",
    description: "Sai Super Sand operates state-of-the-art captive granite quarry mines equipped with heavy hydraulic excavators including Tata Hitachi 1200 and Hyundai 210, precision bench blasting systems, and automated stone handling equipment. Our geological engineering ensures consistent, dense rock quality free from weathered deposits.",
    mainImage: "/images/gallery/excavator-mining-face.png",
    galleryImages: [
      "/images/gallery/excavator-mining-face.png",
      "/images/gallery/dump-truck-haul-road.png",
      "/images/gallery/hyundai-excavator-loading.png",
      "/images/gallery/quarry-cliff-face.png",
      "/images/gallery/aerial-quarry-operations.png",
      "/images/gallery/quarry-basin-access.png",
      "/images/gallery/pit-drilling-operations.png"
    ],
    highlights: [
      "Multi-bench controlled mining ensuring raw stone uniformity",
      "Heavy Tata Hitachi and Hyundai excavator fleets on site 24/7",
      "Deep granite deposit yielding hard crystalline rock matrix",
      "Zero compromise on workplace safety and environmental norms"
    ],
    capacityOrSpecs: "Monthly extraction capacity exceeding 150,000 Metric Tons of granite rock"
  },
  {
    id: "advanced-crushing",
    slug: "advanced-crushing",
    title: "Multi-Stage Crushing & VSI Sand Processing",
    category: "Manufacturing",
    tagline: "German-engineered 3-stage jaw, cone, and VSI crushing systems",
    description: "Our processing complex features heavy-duty primary jaw crushers, secondary cone crushers, and advanced Vertical Shaft Impactors (VSI) integrated with high-frequency screening decks and air classifiers. This mechanical process produces perfectly cubical coarse aggregates and finely graded manufactured sand without harmful fines.",
    mainImage: "/images/gallery/infra-crushing-complex.png",
    galleryImages: [
      "/images/gallery/infra-crushing-complex.png",
      "/images/gallery/sand-conveyor-discharge.png",
      "/images/gallery/aggregate-stockpile-conveyor.png",
      "/images/gallery/manufactured-sand-peak.png"
    ],
    highlights: [
      "3-Stage crushing with VSI shaping for zero needle/flaky particles",
      "Dual air-classifier air-wash circuits removing excess silt",
      "Automated centralized PLC control room monitoring grading real-time",
      "Radial stacking conveyors building vast weather-protected reserves"
    ],
    capacityOrSpecs: "Hourly crushing capacity of 350+ Tons per hour with continuous automated operation"
  },
  {
    id: "quality-assurance",
    slug: "quality-assurance",
    title: "Laboratory Testing & Strict Quality Assurance",
    category: "Quality Control",
    tagline: "On-site NABL-aligned laboratory conducting continuous sieve and strength tests",
    description: "Every production batch undergoes systematic laboratory analysis in accordance with IS 383:2016 standards. Our testing protocols verify particle size distribution, flakiness and elongation indices, aggregate crushing value (ACV), aggregate impact value (AIV), specific gravity, and moisture content before dispatch.",
    mainImage: "/images/gallery/lab-sieve-grading-test.png",
    galleryImages: [
      "/images/gallery/lab-sieve-grading-test.png"
    ],
    highlights: [
      "Continuous mechanical sieve grading test trays for every batch",
      "Routine tests for ACV, AIV, Los Angeles abrasion, and moisture",
      "Batch test certificates provided with every dispatch load",
      "Strict compliance with Bureau of Indian Standards (IS 383:2016)"
    ],
    capacityOrSpecs: "100% batch-tested materials with traceable Quality Test Reports (QTR)"
  },
  {
    id: "fleet-logistics",
    slug: "fleet-logistics",
    title: "Heavy Fleet Logistics & Automated Weighbridge Dispatch",
    category: "Supply Chain",
    tagline: "Dedicated tipper fleet and precision weighbridges for timely site delivery",
    description: "Sai Super Sand Minerals maintains an extensive dedicated fleet of multi-axle tippers, heavy wheel loaders, and electronic weighbridge facilities. Our computerized dispatch system provides instant gross, tare, and net weight slips with tamper-proof tracking, guaranteeing fast deliveries across Telangana and Andhra Pradesh.",
    mainImage: "/images/gallery/weighbridge-dispatch-station.png",
    galleryImages: [
      "/images/gallery/wheel-loaders-fleet.png",
      "/images/gallery/wheel-loader-loading-truck.png",
      "/images/gallery/excavator-machinery-fleet.png",
      "/images/gallery/weighbridge-dispatch-station.png",
      "/images/gallery/dispatch-haul-route.png"
    ],
    highlights: [
      "Automated computerized 100-ton electronic weighbridge",
      "Heavy wheel loader fleet ensuring sub-5-minute vehicle turnaround",
      "Fleet GPS monitoring providing transparent delivery tracking",
      "24/7 dedicated dispatch for urgent infrastructure and RMC requirements"
    ],
    capacityOrSpecs: "Capacity to dispatch over 300+ truckloads daily without transit bottlenecks"
  },
  {
    id: "plant-maintenance",
    slug: "plant-maintenance",
    title: "Plant Engineering & In-House Workshop Maintenance",
    category: "Engineering",
    tagline: "Comprehensive mechanical, electrical, and hydraulic workshop on site",
    description: "To maintain 99.8% plant uptime, our manufacturing facility houses a fully equipped maintenance shed staffed with certified mechanical engineers, pneumatic specialists, and heavy equipment technicians. We stock critical crusher spares, conveyor rollers, hydraulic lines, and wear plates for zero downtime.",
    mainImage: "/images/gallery/maintenance-workshop.png",
    galleryImages: [
      "/images/gallery/maintenance-workshop.png",
      "/images/gallery/spare-parts-yard.png"
    ],
    highlights: [
      "Heavy maintenance shed equipped with pneumatic tooling & spare bays",
      "Massive on-site stock of conveyor rollers, belts, and crusher liners",
      "Preventative maintenance schedules avoiding unexpected downtime",
      "Round-the-clock technical emergency response crew"
    ],
    capacityOrSpecs: "Zero-downtime redundancy ensuring continuous material availability"
  },
  {
    id: "environmental-sustainability",
    slug: "environmental-sustainability",
    title: "Environmental Dust Suppression & Green Practices",
    category: "Sustainability",
    tagline: "Dedicated water tanker fleets, green plantation belts, and eco-friendly M-Sand",
    description: "Sustainability is at the core of Super Sand's operations. We operate dedicated heavy water sprinkling tankers to eliminate fugitive dust across all haul roads and processing zones. By manufacturing sand from hard rock, we protect natural river ecosystems from illegal sand mining and soil erosion.",
    mainImage: "/images/gallery/water-tanker-dust-control.png",
    galleryImages: [
      "/images/gallery/water-tanker-dust-control.png",
      "/images/gallery/corporate-site-office.png"
    ],
    highlights: [
      "Continuous haul-road water misting using dedicated tanker trucks",
      "Eco-friendly M-Sand protects fragile river ecosystems and aquatic life",
      "Extensive green tree plantation belts surrounding our plant premises",
      "Rainwater harvesting ponds recharging local groundwater tables"
    ],
    capacityOrSpecs: "100% compliant with State Pollution Control Board environmental norms"
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: "gal-5",
    title: "Advanced Crushing & Screening Plant Complex",
    category: "Infrastructure",
    image: "/images/gallery/infra-crushing-complex.png",
    description: "Multi-tier crushing towers, conveyor circuits, and automated processing cabins at the Sai Super Sand production facility."
  },
  {
    id: "gal-6",
    title: "Tata Hitachi Heavy Excavator in Granite Quarry",
    category: "Quarrying",
    image: "/images/gallery/excavator-mining-face.png",
    description: "Heavy Tata Hitachi 1200 hydraulic excavator excavating blasted granite boulders in our primary quarry pit."
  },
  {
    id: "gal-7",
    title: "Heavy Dump Truck Transporting Stone Boulders",
    category: "Logistics",
    image: "/images/gallery/dump-truck-haul-road.png",
    description: "Commercial tipper vehicle hauling massive rock boulders through the quarry canyon haul road to the primary crusher."
  },
  {
    id: "gal-8",
    title: "Hyundai Excavator Loading Commercial Tipper",
    category: "Quarrying",
    image: "/images/gallery/hyundai-excavator-loading.png",
    description: "Hyundai 210 excavator loading fresh granite rocks into a heavy-duty commercial tipper truck."
  },
  {
    id: "gal-9",
    title: "Granite Quarry Face Geological Inspection",
    category: "Quarrying",
    image: "/images/gallery/quarry-cliff-face.png",
    description: "Geological inspection vehicle parked at the sheer granite rock face cliff showcasing virgin crystalline rock formations."
  },
  {
    id: "gal-10",
    title: "Deep Granite Pit Mechanized Extraction",
    category: "Quarrying",
    image: "/images/gallery/rock-quarry-excavation.png",
    description: "Systematic multi-bench mechanized mining ensuring continuous raw material feed to our crushing plant."
  },
  {
    id: "gal-11",
    title: "Heavy Wheel Loaders Ready for Loading",
    category: "Logistics",
    image: "/images/gallery/wheel-loaders-fleet.png",
    description: "Fleet of high-capacity wheel loaders positioned for rapid loading of aggregate stockpiles into customer transport vehicles."
  },
  {
    id: "gal-12",
    title: "Quality Control Laboratory Sieve Grading Analysis",
    category: "Quality",
    image: "/images/gallery/lab-sieve-grading-test.png",
    description: "Laboratory sieve tray exhibiting precise particle grading of 6mm, 10mm, 20mm, 40mm aggregates and sand per IS 383."
  },
  {
    id: "gal-13",
    title: "High-Speed Bulk Material Loading",
    category: "Logistics",
    image: "/images/gallery/wheel-loader-loading-truck.png",
    description: "Front loader loading graded concrete aggregates into an express transport truck."
  },
  {
    id: "gal-14",
    title: "Heavy Earthmoving Machinery Fleet",
    category: "Infrastructure",
    image: "/images/gallery/excavator-machinery-fleet.png",
    description: "Machinery staging yard featuring heavy CAT and XCMG crawler excavators ready for large-scale mining operations."
  },
  {
    id: "gal-15",
    title: "Electronic Weighbridge & Automated Dispatch",
    category: "Logistics",
    image: "/images/gallery/weighbridge-dispatch-station.png",
    description: "State-of-the-art electronic weighbridge and elevated dispatch cabin recording exact truck tare and gross weights."
  },
  {
    id: "gal-16",
    title: "Sai Super Sand Minerals Corporate Site Office",
    category: "About",
    image: "/images/gallery/corporate-site-office.png",
    description: "Modern, green-landscaped administrative and technical operations building of Sai Super Sand Minerals Pvt. Ltd."
  },
  {
    id: "gal-17",
    title: "Aerial View of Granite Quarry Operations",
    category: "Quarrying",
    image: "/images/gallery/aerial-quarry-operations.png",
    description: "Elevated panoramic view of quarry pit, active mining benches, haul trucks, and water management basin."
  },
  {
    id: "gal-18",
    title: "Automated Sand Classifier Discharging Sand",
    category: "Production",
    image: "/images/gallery/sand-conveyor-discharge.png",
    description: "High-level conveyor belt discharging freshly washed, uniform manufactured sand into a clean conical stockpile."
  },
  {
    id: "gal-19",
    title: "Radial Conveyor Building Aggregate Stockpile",
    category: "Production",
    image: "/images/gallery/aggregate-stockpile-conveyor.png",
    description: "Automated radial conveyor stacker building extensive stockpiles of graded structural coarse aggregates."
  },
  {
    id: "gal-20",
    title: "Quarry Basin Access & Earthmoving",
    category: "Quarrying",
    image: "/images/gallery/quarry-basin-access.png",
    description: "Excavator operating on internal haul roads deep within the granite mining basin."
  },
  {
    id: "gal-21",
    title: "In-House Mechanical & Hydraulic Workshop",
    category: "Maintenance",
    image: "/images/gallery/maintenance-workshop.png",
    description: "Precision tooling workshop with pneumatic hoses, torque equipment, and spare parts for zero-downtime maintenance."
  },
  {
    id: "gal-22",
    title: "Equipment Component Yard & Spares Warehouse",
    category: "Maintenance",
    image: "/images/gallery/spare-parts-yard.png",
    description: "Organized inventory of conveyor idler rollers, pulleys, bearings, and heavy structural spares."
  },
  {
    id: "gal-23",
    title: "Dedicated All-Weather Access Route",
    category: "Logistics",
    image: "/images/gallery/dispatch-haul-route.png",
    description: "Smooth asphalt-paved transport road flanked by green trees ensuring safe transport from quarry to city routes."
  },
  {
    id: "gal-24",
    title: "Bench Mining & Extraction Operations",
    category: "Quarrying",
    image: "/images/gallery/pit-drilling-operations.png",
    description: "Multiple heavy excavators and transport units coordinating stone extraction at lower mining benches."
  },
  {
    id: "gal-25",
    title: "Environmental Dust Suppression Water Tanker",
    category: "Sustainability",
    image: "/images/gallery/water-tanker-dust-control.png",
    description: "Dedicated Sai Super Sand heavy water tanker wetting down haul roads to prevent airborne dust pollution."
  },
  {
    id: "gal-26",
    title: "Massive Stockpile of Manufactured Sand",
    category: "Production",
    image: "/images/gallery/manufactured-sand-peak.png",
    description: "Grand stockpile of premium manufactured sand with company marker against a bright blue sky."
  }
];

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Strategic Highway Flyovers & Elevated Corridors",
    category: "Highways & Flyovers",
    location: "Hyderabad Metropolitan Area, Telangana",
    image: "/images/projects/project-bridge-1.jpg",
    description: "Supply of high-strength Super 20mm aggregates and M-Sand for RCC piers, deck slabs, and pre-stressed concrete girders.",
    materialsSupplied: ["Super 20mm Aggregates", "Plastering Sand", "Concrete M-Sand"],
    clientOrSector: "State Infrastructure & Road Development"
  },
  {
    id: "proj-2",
    title: "Commercial High-Rise IT Towers & Tech Parks",
    category: "Commercial Towers",
    location: "HITEC City & Financial District",
    image: "/images/projects/project-highrise.jpg",
    description: "Continuous concrete aggregate supply for M50 & M60 grade high-performance pumpable concrete in 40+ floor towers.",
    materialsSupplied: ["Super 10mm & 20mm Aggregates", "P-Sand", "VSI M-Sand"],
    clientOrSector: "Top Tier Commercial Real Estate Builders"
  },
  {
    id: "proj-3",
    title: "Urban Metro Rail Viaducts & Station Piers",
    category: "Metro Transit",
    location: "Metro Corridor Network",
    image: "/images/projects/project-metro.jpg",
    description: "Strictly graded IS 383:2016 coarse aggregates for heavy viaduct casting yards and station concourse foundations.",
    materialsSupplied: ["Super 20mm Aggregates", "Super 10mm Aggregates", "W.M.M Mix"],
    clientOrSector: "Metro Rail Infrastructure Projects"
  },
  {
    id: "proj-4",
    title: "Major River Bridge & Bypass Expressways",
    category: "Bridges & Expressways",
    location: "Regional Expressway Corridors",
    image: "/images/projects/project-bridge-2.jpg",
    description: "High-impact resistance aggregates for underwater well foundations, abutments, and asphalt concrete wearing course.",
    materialsSupplied: ["Super 40mm Aggregates", "G.S.B Road Sub-Base", "W.M.M Mix"],
    clientOrSector: "National Highway Authority"
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Ramesh Kumar",
    designation: "Project Manager",
    company: "Apex Infrastructure Ltd.",
    quote: "Super Sand has been our trusted partner for construction projects. Their consistent quality, reliable supply and professional service are truly commendable.",
    rating: 5,
    avatar: "/images/testimonials/avatar-ramesh.jpg"
  },
  {
    id: "test-2",
    name: "Srinivasa Rao",
    designation: "Chief Concrete Technologist",
    company: "Hyderabad RMC Solutions",
    quote: "The cubic shape of Super Sand coarse aggregates and zero silt in their M-Sand gives our concrete mixes superior workability while significantly optimizing our cement usage.",
    rating: 5,
    avatar: "/images/testimonials/avatar-ramesh.jpg"
  },
  {
    id: "test-3",
    name: "K. Venkat Reddy",
    designation: "Managing Director",
    company: "Bhavani Constructions",
    quote: "Having worked with Sai Super Sand for over 12 years, their electronic weighbridge transparency, prompt fleet dispatch, and professional management make them the most dependable supplier in the region.",
    rating: 5,
    avatar: "/images/testimonials/avatar-ramesh.jpg"
  }
];

export const initialEnquiries: Enquiry[] = [
  {
    id: "enq-101",
    fullName: "Satish Varma",
    phoneNumber: "+91 98490 12345",
    email: "satish.varma@constructions.com",
    productSelection: "Coarse Aggregates (20mm)",
    quantity: "450 Metric Tons",
    message: "Require prompt delivery of Super 20mm for residential apartment foundation at Gachibowli.",
    createdAt: "2026-11-12T10:30:00.000Z",
    status: "contacted"
  },
  {
    id: "enq-102",
    fullName: "Praveen Sharma",
    phoneNumber: "+91 97011 88990",
    email: "praveen@hyderabadbuilders.in",
    productSelection: "Fine Aggregates (Plastering P-Sand)",
    quantity: "120 Metric Tons",
    message: "Looking for high-purity plastering sand with zero silt for internal plastering work.",
    createdAt: "2026-11-13T14:15:00.000Z",
    status: "new"
  }
];
