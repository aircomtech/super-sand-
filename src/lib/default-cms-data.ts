import {
  initialSiteInfo,
  initialProducts,
  initialServices,
  initialProjects,
  initialInfrastructureItems,
  initialSustainabilityItems,
  initialTestimonials,
  initialGallery,
  initialEnquiries
} from './data';
import { FullCMSData } from './types';

export const defaultCMSData: FullCMSData = {
  siteInfo: initialSiteInfo,

  heroSlides: [
    {
      id: 1,
      tag: "SUPER SAND",
      titleLine1: "Building a",
      titleLine2: "Stronger Tomorrow",
      subtitle: "High-Quality Construction Materials for a Sustainable Future.",
      desktopImage: "/images/hero/hero-desktop-1.png",
      mobileImage: "/images/hero/hero-mobile-1.png",
      ctaText: "Explore Our Products",
      ctaLink: "/products",
      isPublished: true,
      displayOrder: 1
    },
    {
      id: 2,
      tag: "STATE-OF-THE-ART INFRASTRUCTURE",
      titleLine1: "Precision Crushed",
      titleLine2: "Superior Strength",
      subtitle: "3-Stage automated crushing delivering 100% cubical aggregates and zero-silt sand.",
      desktopImage: "/images/hero/hero-slide-2.png",
      mobileImage: "/images/hero/hero-slide-2.png",
      ctaText: "Explore Facilities",
      ctaLink: "/infrastructure",
      isPublished: true,
      displayOrder: 2
    },
    {
      id: 3,
      tag: "RELIABLE LOGISTICS FLEET",
      titleLine1: "Uninterrupted",
      titleLine2: "Express Dispatch",
      subtitle: "Dedicated commercial tipper fleet and automated electronic weighbridges operating 24/7.",
      desktopImage: "/images/hero/hero-slide-3.png",
      mobileImage: "/images/hero/hero-slide-3.png",
      ctaText: "View Logistics & Fleet",
      ctaLink: "/services",
      isPublished: true,
      displayOrder: 3
    },
    {
      id: 4,
      tag: "ENVIRONMENTAL EXCELLENCE",
      titleLine1: "Eco-Friendly",
      titleLine2: "Greener Future",
      subtitle: "Conserving fragile riverbeds with certified, zero-silt manufactured plastering sand.",
      desktopImage: "/images/hero/hero-slide-4.png",
      mobileImage: "/images/hero/hero-slide-4.png",
      ctaText: "Our Sustainability",
      ctaLink: "/sustainability",
      isPublished: true,
      displayOrder: 4
    }
  ],

  qualityHighlights: [
    { title: "Premium Quality", subtitle: "100% Virgin Granite Aggregates", icon: "Award" },
    { title: "Reliable Supply", subtitle: "24/7 Bulk Logistics Dispatch", icon: "Truck" },
    { title: "Environmentally Responsible", subtitle: "Zero Riverbed Mining Impact", icon: "Leaf" },
    { title: "Trusted Partner", subtitle: "IS 383:2016 Certified Standards", icon: "ShieldCheck" }
  ],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Quality & Excellence",
      subtitle: "Uncompromising Aggregate Standards",
      desc: "Our 3-stage crushing technology and on-site NABL-aligned laboratory verify every metric ton meets rigorous IS 383:2016 parameters.",
      stats: "100% Batch Tested",
      displayOrder: 1
    },
    {
      id: "why-2",
      title: "Customer Satisfaction",
      subtitle: "Client-First Execution",
      desc: "Dedicated account managers and 24/7 dispatch coordination ensure seamless supply for mega commercial and infrastructure builds.",
      stats: "99.8% On-Time Delivery",
      displayOrder: 2
    },
    {
      id: "why-3",
      title: "Trust & Transparency",
      subtitle: "Certified Weight Accuracy",
      desc: "Computerized electronic weighbridges eliminate discrepancies, providing tamper-proof digital weight slips with gross, tare, and net tonnage.",
      stats: "Sub-5 Min Weighing",
      displayOrder: 3
    },
    {
      id: "why-4",
      title: "Sustainability & Environment",
      subtitle: "Eco-Friendly M-Sand",
      desc: "By manufacturing sand from hard granite rock, we preserve delicate riverbeds, utilize closed-loop dust mists, and plant extensive green buffer belts.",
      stats: "Zero River Sand Used",
      displayOrder: 4
    },
    {
      id: "why-5",
      title: "Innovation & Technology",
      subtitle: "German Engineering Precision",
      desc: "Advanced Vertical Shaft Impactors (VSI) ensure aggregate cubical shaping with zero elongated or flaky particles, producing dense, pumpable concrete.",
      stats: "100% Cubical Shaping",
      displayOrder: 5
    },
    {
      id: "why-6",
      title: "Reliability & Long-Term Relationships",
      subtitle: "Decades of Unbroken Trust",
      desc: "Serving national infrastructure giants, metro railways, and leading developers for nearly 20 years with predictable consistency.",
      stats: "18+ Years Legacy",
      displayOrder: 6
    }
  ],

  directors: [
    {
      id: "dir-1",
      name: "Dr. Ramachandra Reddy",
      designation: "Managing Director",
      roleTitle: "Visionary Founder & Strategic Pioneer",
      image: "/images/leadership/md-ramachandra.png",
      bio: "Founding pioneer behind Sai Super Sand Minerals Pvt. Ltd. With over two decades of industrial leadership, he spearheaded the transition from river sand mining to eco-friendly manufactured sand (M-Sand) and advanced cubical granite aggregates in South India.",
      qualifications: "Ph.D. in Industrial Management & Geological Mining",
      focusAreas: [
        "Strategic Corporate Direction",
        "Ecological & Environmental Governance",
        "Technological Modernization",
        "National Infrastructure Partnerships"
      ],
      displayOrder: 1,
      isPublished: true
    },
    {
      id: "dir-2",
      name: "Dr. P. Krishna Reddy",
      designation: "Director of Operations",
      roleTitle: "Mining Operations & Plant Engineering Head",
      image: "/images/leadership/ops-krishna.png",
      bio: "Directs complete quarry extraction, 3-stage mechanical crushing circuits, and automated dispatch operations. Known for zero-downtime maintenance paradigms and strict adherence to IS 383:2016 quality grading curves.",
      qualifications: "Ph.D. in Mining Engineering & Mechanical Systems",
      focusAreas: [
        "Mechanized Quarry Deep Mining",
        "VSI & Cone Crushing Optimization",
        "Heavy Equipment Fleet Management",
        "Zero-Lost-Time Workplace Safety"
      ],
      displayOrder: 2,
      isPublished: true
    },
    {
      id: "dir-3",
      name: "Mrs. Meghana Reddy",
      designation: "Director of Finance",
      roleTitle: "Financial Governance & Commercial Strategy",
      image: "/images/leadership/fin-meghana.png",
      bio: "Commands corporate finance, capital investment strategies, project feasibility financing, and enterprise risk management. Instrumental in sustaining robust liquidity and financing world-class crushing and heavy transport fleets.",
      qualifications: "Master of Business Administration (Finance & International Banking)",
      focusAreas: [
        "Corporate Financial Planning",
        "Capital Asset Investment & Fleet Growth",
        "Statutory & Environmental Fiscal Compliance",
        "Commercial Client Credit Architecture"
      ],
      displayOrder: 3,
      isPublished: true
    }
  ],

  teamCards: [
    {
      id: "team-1",
      badge: "Leadership & Operations",
      title: "Executive Engineers & Plant Supervisors",
      headline: "Precision Engineering & Quality Governance",
      image: "/images/team/team-management-plant.png",
      description: "Our on-site mechanical, geological, and civil engineering heads ensure each crushing cycle, screening deck, and classification unit functions with zero-defect accuracy to satisfy IS 383:2016 quality standards.",
      stat1Value: "18+",
      stat1Label: "Years Operational Track Record",
      stat2Value: "100%",
      stat2Label: "Laboratory Tested Batches",
      footerNote: "Managing 350+ TPH Crushing Lines",
      ctaLink: "/about"
    },
    {
      id: "team-2",
      badge: "Operational Backbone",
      title: "Heavy Fleet Operators & Quarry Technicians",
      headline: "24/7 Mining, Processing & Dispatch Power",
      image: "/images/team/team-workforce-plant.png",
      description: "Comprising certified hydraulic excavator drivers, computerized weighbridge technicians, VSI plant technicians, and commercial tipper operators working together safely to dispatch over 300+ loads daily.",
      stat1Value: "150K+",
      stat1Label: "Metric Tons Monthly Extraction",
      stat2Value: "300+",
      stat2Label: "Fleet Loads Dispatched Daily",
      footerNote: "Zero Lost Time Safety Protocol",
      ctaLink: "/services"
    }
  ],

  teamCollective: {
    heading: "OUR TEAM",
    subheading: "We are a Strong Collective",
    bodyParagraph1: "At Super Sand, we believe that our team is our greatest asset, and we take great pride in the expertise, dedication, and passion of every member of our organization. From our skilled workers on the plant floor to our knowledgeable technical and logistics teams, every individual is an essential part of our strong collective.",
    bodyParagraph2: "Our team is committed to delivering excellence in everything we do — from producing top-quality IS 383:2016 certified products to providing outstanding client dispatch service. We work collaboratively to implement innovative solutions and sustainable ecological practices, ensuring we remain at the forefront of the construction minerals industry.",
    image: "/images/team/team-collective-grand-hd.png",
    stats: [
      { value: "200+", label: "Skilled Workforce" },
      { value: "18+", label: "Years Experience" },
      { value: "Zero", label: "Safety Incidents" },
      { value: "100%", label: "Quality Tested" }
    ]
  },

  products: initialProducts.map((p, idx) => ({
    ...p,
    isPublished: true,
    displayOrder: idx + 1
  })),

  services: initialServices.map((s, idx) => ({
    ...s,
    isPublished: true,
    displayOrder: idx + 1
  })),

  gallery: initialGallery.map((g, idx) => ({
    ...g,
    isPublished: true,
    displayOrder: idx + 1
  })),

  infrastructureItems: initialInfrastructureItems.map((inf, idx) => ({
    ...inf,
    isPublished: true,
    displayOrder: idx + 1
  })),

  sustainabilityItems: initialSustainabilityItems.map((sus, idx) => ({
    ...sus,
    isPublished: true,
    displayOrder: idx + 1
  })),

  projects: initialProjects.map((prj, idx) => ({
    ...prj,
    isPublished: true,
    displayOrder: idx + 1
  })),

  clientPartners: [
    { id: "cp-1", name: "NHAI", category: "Highways & Expressways", badge: "Govt of India", suppliedVolume: "140,000+ MT", projectHighlight: "National Highway Bypass & Elevated Corridor Deck Slabs", isPublished: true, displayOrder: 1 },
    { id: "cp-2", name: "Indian Railways", category: "Transit & Ballast Infrastructure", badge: "National Transit", suppliedVolume: "95,000+ MT", projectHighlight: "60mm Heavy-Track Ballast & Station Concourse RCC", isPublished: true, displayOrder: 2 },
    { id: "cp-3", name: "TSGENCO", category: "Power & Heavy Foundations", badge: "State Energy", suppliedVolume: "80,000+ MT", projectHighlight: "Heavy Equipment Turbine Foundations & RCC Cooling Towers", isPublished: true, displayOrder: 3 },
    { id: "cp-4", name: "IRB Infrastructure", category: "Tollway & Corridor Works", badge: "EPC Leader", suppliedVolume: "120,000+ MT", projectHighlight: "MoRTH Section 400 W.M.M & G.S.B Road Sub-Base", isPublished: true, displayOrder: 4 },
    { id: "cp-5", name: "Auro Realty", category: "Luxury High-Rise & Commercial", badge: "Real Estate", suppliedVolume: "110,000+ MT", projectHighlight: "Ultra-High Performance M60 VSI Concrete M-Sand", isPublished: true, displayOrder: 5 },
    { id: "cp-6", name: "Maha Cement", category: "Ready Mix & Cement Blends", badge: "Building Materials", suppliedVolume: "85,000+ MT", projectHighlight: "Continuous Daily Concrete Aggregates & Manufactured Sand", isPublished: true, displayOrder: 6 },
    { id: "cp-7", name: "UltraTech Cement", category: "UltraTech Ready Mix Supply", badge: "Aditya Birla Group", suppliedVolume: "160,000+ MT", projectHighlight: "Commercial Batching Plants across Hyderabad Metro Region", logoUrl: "/images/clients/ultratech-cement-logo.svg", isPublished: true, displayOrder: 7 },
    { id: "cp-8", name: "Shapoorji Pallonji", category: "Mega Infrastructure & Engineering", badge: "Global EPC", suppliedVolume: "135,000+ MT", projectHighlight: "Major River Bridge Caisson Foundations & Piers", isPublished: true, displayOrder: 8 },
    { id: "cp-9", name: "ACC Limited", category: "Engineered Concrete Solutions", badge: "Cement Leader", suppliedVolume: "90,000+ MT", projectHighlight: "Bulk Sieve-Graded Concrete Aggregates", isPublished: true, displayOrder: 9 },
    { id: "cp-10", name: "Aurobindo Realty", category: "IT Parks & Commercial Towers", badge: "Tech Parks", suppliedVolume: "105,000+ MT", projectHighlight: "HITEC City & Financial District High-Rise IT Towers", isPublished: true, displayOrder: 10 },
    { id: "cp-11", name: "Larsen & Toubro (L&T)", category: "Metro & Elevated Highway Projects", badge: "Premier EPC", suppliedVolume: "210,000+ MT", projectHighlight: "Urban Metro Rail Viaduct Segment Casting Yards", isPublished: true, displayOrder: 11 },
    { id: "cp-12", name: "Prism RMC", category: "High-Performance Concrete Mixes", badge: "RMC Specialist", suppliedVolume: "75,000+ MT", projectHighlight: "Custom Continuous Sieve Curves & Plastering Sand", isPublished: true, displayOrder: 12 },
    { id: "cp-13", name: "Infra.Market", category: "Tech-Enabled Material Distribution", badge: "Infra Tech", suppliedVolume: "65,000+ MT", projectHighlight: "Express Logistics Dispatch with Automated Weighbridge Slips", isPublished: true, displayOrder: 13 },
    { id: "cp-14", name: "My Home Group", category: "Iconic Residential & Commercial", badge: "Real Estate", suppliedVolume: "150,000+ MT", projectHighlight: "Premium Residential Townships & Structural Raft Slabs", isPublished: true, displayOrder: 14 }
  ],

  partnerMasterBanner: "/images/clients/client-partners-grand-hd.png",

  partnerMetrics: [
    { value: "14+", label: "Tier-1 Corporate Clients", sublabel: "Long-term strategic contracts" },
    { value: "500K+", label: "Metric Tons Delivered", sublabel: "Certified virgin granite" },
    { value: "100%", label: "On-Time Dispatch Rate", sublabel: "Sub-5 min weighbridge turnaround" },
    { value: "IS 383", label: "Quality Certified", sublabel: "Zero silt & 100% cubical" }
  ],

  testimonials: initialTestimonials.map((t, idx) => ({
    ...t,
    isPublished: true,
    displayOrder: idx + 1
  })),

  jobOpenings: [
    {
      id: "job-1",
      title: "Senior Plant Mechanical Engineer (Crushing & Screening)",
      department: "Plant Engineering & Maintenance",
      location: "Plant Complex, Telangana",
      type: "Full-Time (On-Site)",
      experience: "5 - 8 Years",
      description: "Lead preventive maintenance and optimization of 350+ TPH 3-stage crushing systems including primary jaw, cone crushers, and Vertical Shaft Impactors (VSI).",
      responsibilities: [
        "Manage mechanical uptime and operational scheduling of crushing lines.",
        "Oversee screen deck replacements, conveyor belt splicing, and bearing lubrication routines.",
        "Conduct vibration analysis and wear part management on VSI rotors.",
        "Lead a team of 15+ mechanical technicians and welders with zero downtime target."
      ],
      qualifications: [
        "B.Tech / Diploma in Mechanical Engineering.",
        "Proven track record in aggregate crushing or heavy mineral processing plants.",
        "Expert knowledge of hydraulic systems, cone crushers, and radial conveyors."
      ],
      status: "active",
      displayOrder: 1
    },
    {
      id: "job-2",
      title: "Granite Quarry Mining In-Charge (Deep Pit Extraction)",
      department: "Mining Operations",
      location: "Quarry Site, Telangana",
      type: "Full-Time (On-Site)",
      experience: "6 - 10 Years",
      description: "Supervise deep-pit mechanized virgin granite extraction, bench blasting coordination, and heavy hydraulic excavator fleet deployment.",
      responsibilities: [
        "Plan bench layouts and extraction volumes exceeding 150,000 MT monthly.",
        "Ensure full compliance with Director General of Mines Safety (DGMS) regulations.",
        "Direct Tata Hitachi and Hyundai excavator operators for efficient rock feeding.",
        "Implement dust suppression and haul road wetting routines continuously."
      ],
      qualifications: [
        "Degree / Diploma in Mining Engineering with DGMS Second Class Foreman / Manager Certificate.",
        "Deep understanding of hard crystalline granite rock formations and bench stability.",
        "Exemplary safety leadership record with zero reportable incidents."
      ],
      status: "active",
      displayOrder: 2
    },
    {
      id: "job-3",
      title: "Quality Assurance & Laboratory In-Charge (IS 383:2016)",
      department: "Quality Control & R&D",
      location: "On-Site Central QA Lab",
      type: "Full-Time",
      experience: "4 - 7 Years",
      description: "Operate our NABL-aligned laboratory to conduct continuous sieve analysis, flakiness indexing, and specific gravity verification on every production batch.",
      responsibilities: [
        "Perform hourly particle size distribution checks using mechanical sieve shakers.",
        "Issue computerized Quality Test Certificates (QTC) for RMC and infrastructure dispatches.",
        "Test Aggregate Crushing Value (ACV), Aggregate Impact Value (AIV), and moisture content.",
        "Calibrate testing equipment per NABL guidelines and maintain batch retention samples."
      ],
      qualifications: [
        "M.Sc / B.Sc in Chemistry / Geology or B.Tech in Civil Engineering.",
        "Hands-on expertise with Bureau of Indian Standards IS 383:2016 and MoRTH testing protocols.",
        "Strong computer literacy and statistical quality documentation skills."
      ],
      status: "active",
      displayOrder: 3
    },
    {
      id: "job-4",
      title: "Heavy Tipper Fleet Logistics & Dispatch Supervisor",
      department: "Supply Chain & Logistics",
      location: "Weighbridge Station",
      type: "Full-Time (Rotational Shifts)",
      experience: "3 - 6 Years",
      description: "Command automated 100-ton computerized weighbridges and dispatch over 300+ commercial truckloads daily with GPS tracking.",
      responsibilities: [
        "Coordinate vehicle turnaround times under 5 minutes per truck.",
        "Generate tamper-proof weigh slips with gross, tare, and net tonnage verification.",
        "Liaise with infrastructure project managers for midnight concrete pouring schedules.",
        "Monitor driver safety compliance and vehicle fitness documents."
      ],
      qualifications: [
        "Any Graduate / Diploma in Logistics & Supply Chain Management.",
        "Prior experience in bulk aggregates, cement, or RMC dispatch yards.",
        "Fluency in Telugu, Hindi, and basic English."
      ],
      status: "active",
      displayOrder: 4
    },
    {
      id: "job-5",
      title: "Institutional Sales & Key Accounts Manager (Infrastructure)",
      department: "Commercial & Business Development",
      location: "Hyderabad / Regional",
      type: "Full-Time",
      experience: "5 - 9 Years",
      description: "Develop strategic relationships with tier-1 construction giants (L&T, Shapoorji Pallonji, NHAI contractors, Aurobindo Realty, My Home Group).",
      responsibilities: [
        "Secure long-term aggregate supply contracts for flyovers, metro lines, and tech parks.",
        "Provide technical consultations comparing manufactured sand versus river sand.",
        "Manage client order lifecycles and ensure timely payment receivables.",
        "Represent Super Sand at regional construction and civil engineering forums."
      ],
      qualifications: [
        "B.Tech (Civil) + MBA (Marketing) preferred.",
        "Established network among EPC contractors and RMC manufacturers in South India.",
        "Exceptional negotiation and technical presentation capabilities."
      ],
      status: "active",
      displayOrder: 5
    }
  ],

  jobApplications: [
    {
      id: "app-1",
      jobId: "job-1",
      jobTitle: "Senior Plant Mechanical Engineer (Crushing & Screening)",
      fullName: "Srinivas Rao",
      email: "srinivas.crushing@example.com",
      phone: "+91 98490 11223",
      experience: "7 Years",
      qualification: "B.Tech Mechanical",
      message: "Managed crushing circuits with 400 TPH Metso cone crushers and VSI for national highway projects.",
      appliedAt: "2026-11-12T10:30:00Z",
      status: "shortlisted"
    },
    {
      id: "app-2",
      jobId: "job-3",
      jobTitle: "Quality Assurance & Laboratory In-Charge (IS 383:2016)",
      fullName: "Ananya Sharma",
      email: "ananya.qa@example.com",
      phone: "+91 97000 44556",
      experience: "5 Years",
      qualification: "M.Sc Geology & Materials Testing",
      message: "Handled IS 383 sieve analysis, flakiness & elongation index testing in high-speed RMC plants.",
      appliedAt: "2026-11-14T14:15:00Z",
      status: "reviewed"
    }
  ],

  contactSettings: {
    companyAddress: "Sai Super Sand Minerals Pvt. Ltd., Lane No. 4, Opposite SBI, Nehru Nagar Colony, West Marredpally, Secunderabad, Telangana 500026",
    primaryPhone: "+91 95338 95920",
    altPhone: "+91 98480 12345",
    whatsappNumber: "+91 95338 95920",
    primaryEmail: "sales@supersand.in",
    altEmail: "info@supersand.in",
    googleMapsUrl: "https://maps.google.com/?q=Lane+No.+4,+Opposite+SBI,+Nehru+Nagar+Colony,+West+Marredpally,+Secunderabad,+Telangana+500026",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.377983652876!2d78.5085!3d17.4415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a3939393939%3A0x1234567890abcdef!2sNehru%20Nagar%20Colony%2C%20West%20Marredpally%2C%20Secunderabad%2C%20Telangana%20500026!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    latitude: 17.4415,
    longitude: 78.5085,
    officeHours: "Monday – Saturday: 9:00 AM – 7:30 PM",
    dispatchHours: "Crushing Plant & Weighbridge Dispatch: 24/7 Operations",
    sectionHeading: "Direct Desk & Material Dispatch",
    sectionSubtitle: "Contact our sales engineering team for aggregate supply orders, customized mixes, laboratory test reports, and dispatch schedules."
  },

  enquiries: initialEnquiries,

  navigationItems: [
    { id: "nav-1", name: "Home", href: "/", hasDropdown: false, displayOrder: 1, isPublished: true },
    {
      id: "nav-2",
      name: "About Us",
      href: "/about",
      hasDropdown: true,
      subItems: [
        { name: "Corporate Profile & Legacy", href: "/about", desc: "Established 2006, commercial operations 2008" },
        { name: "Board of Directors", href: "/about#leadership", desc: "Dr. Ramachandra Reddy, Dr. P. Krishna Reddy, Mrs. Meghana Reddy" },
        { name: "Who We Are - Team Excellence", href: "/about#who-we-are", desc: "Passionate engineering & mining operations workforce" },
        { name: "Client Testimonials & Trust", href: "/about#testimonials", desc: "Endorsements from top builders and technologist partners" },
        { name: "Vision, Mission & Core Values", href: "/about#values", desc: "Foundational pillars of excellence & sustainability" }
      ],
      displayOrder: 2,
      isPublished: true
    },
    {
      id: "nav-3",
      name: "Products",
      href: "/products",
      hasDropdown: true,
      subItems: [
        { name: "Coarse Aggregates", href: "/products/coarse-aggregates", desc: "Super 6mm, 10mm, 20mm, 40mm, 60mm" },
        { name: "Fine Aggregates (M-Sand)", href: "/products/fine-aggregates", desc: "Plastering, Mortar & Brick Sand" },
        { name: "Coarse Aggregate Mix", href: "/products/coarse-aggregate-mix", desc: "W.M.M & G.S.B Road Sub-Base" },
        { name: "Insta Super Mix", href: "/products/insta-super-mix", desc: "Engineered High-Strength Premix" },
        { name: "Micro Chips (4-6mm)", href: "/products/micro-chips-4-6mm", desc: "High-density paver block grit" },
        { name: "Railway Ballast (60mm)", href: "/products/railway-ballast-60mm", desc: "Heavy track foundation ballast" },
        { name: "RMC Plant Special Mix", href: "/products/rmc-special-aggregates", desc: "Pumpable structural concrete blend" },
        { name: "Dry Lean Concrete (DLC)", href: "/products/dlc-road-aggregates", desc: "MoRTH Clause 601 highway subgrade" }
      ],
      displayOrder: 3,
      isPublished: true
    },
    {
      id: "nav-4",
      name: "Services",
      href: "/services",
      hasDropdown: true,
      subItems: [
        { name: "Granite Quarrying & Mining", href: "/services/quarrying-mining", desc: "Deep pit mechanized extraction" },
        { name: "Multi-Stage Crushing & VSI", href: "/services/advanced-crushing", desc: "3-stage cubical aggregate shaping" },
        { name: "Laboratory Testing & QA", href: "/services/quality-assurance", desc: "NABL-aligned IS 383:2016 sieve analysis" },
        { name: "Heavy Fleet Logistics & Dispatch", href: "/services/fleet-logistics", desc: "100-ton computerized weighbridges" },
        { name: "Plant Engineering Workshop", href: "/services/plant-maintenance", desc: "In-house hydraulic & mechanical repair" },
        { name: "Environmental Dust Control", href: "/services/environmental-sustainability", desc: "Dedicated water tanker mist fleet" },
        { name: "Custom Batch Blending", href: "/services/custom-batch-blending", desc: "Tailored continuous grading curves" },
        { name: "Full Photo Archive (26 Photos)", href: "/services", desc: "Interactive operational visual gallery" }
      ],
      displayOrder: 4,
      isPublished: true
    },
    {
      id: "nav-5",
      name: "Infrastructure",
      href: "/infrastructure",
      hasDropdown: true,
      subItems: [
        { name: "3-Stage Crushing Complex", href: "/infrastructure/crushing-complex", desc: "350+ Tons per hour capacity" },
        { name: "Heavy Excavator Fleet", href: "/infrastructure/excavator-fleet", desc: "Tata Hitachi 1200, Hyundai, CAT, XCMG" },
        { name: "Electronic Weighbridge Station", href: "/infrastructure/weighbridge-station", desc: "Instant gross, tare & net weight slips" },
        { name: "Mechanical & Spares Workshop", href: "/infrastructure/spares-workshop", desc: "Zero downtime maintenance facility" },
        { name: "Plant Capacity & Statistics", href: "/infrastructure/plant-capacity", desc: "150,000+ tons monthly volume" }
      ],
      displayOrder: 5,
      isPublished: true
    },
    {
      id: "nav-6",
      name: "Sustainability",
      href: "/sustainability",
      hasDropdown: true,
      subItems: [
        { name: "Riverbed Conservation", href: "/sustainability/riverbed-conservation", desc: "100% sustainable alternative to river sand" },
        { name: "Haul Road Water Mist Tankers", href: "/sustainability/water-mist-tankers", desc: "Active airborne dust elimination" },
        { name: "Green Tree Plantation Belts", href: "/sustainability/green-plantation-belts", desc: "Extensive acoustic & carbon buffer" },
        { name: "Rainwater Harvesting Basins", href: "/sustainability/rainwater-harvesting", desc: "Closed-loop sediment filtration" },
        { name: "Pollution Board Compliance", href: "/sustainability/pollution-board-compliance", desc: "Zero discharge ecological norms" }
      ],
      displayOrder: 6,
      isPublished: true
    },
    {
      id: "nav-7",
      name: "Projects",
      href: "/projects",
      hasDropdown: true,
      subItems: [
        { name: "Highways & Flyover Corridors", href: "/projects/highways-flyovers", desc: "Heavy pier and deck slab supply" },
        { name: "Commercial IT High-Rises", href: "/projects/commercial-highrises", desc: "HITEC City & Financial District towers" },
        { name: "Metro Transit Viaducts", href: "/projects/metro-viaducts", desc: "High-performance casting yard supply" },
        { name: "River Bridges & Expressways", href: "/projects/bridges-expressways", desc: "High impact resistance concrete mixes" },
        { name: "Outer Ring Road (ORR) Works", href: "/projects/outer-ring-road", desc: "W.M.M & G.S.B road sub-base" },
        { name: "Logistics Parks & Warehouses", href: "/projects/logistics-warehouses", desc: "Laser-screed industrial floor aggregates" },
        { name: "Airport Runway Overlays", href: "/projects/airport-runways", desc: "High-friction aircraft landing pavements" },
        { name: "Precast Casting Yards", href: "/projects/precast-yards", desc: "Zero-silt VSI M-sand and 10mm chips" }
      ],
      displayOrder: 7,
      isPublished: true
    },
    { id: "nav-8", name: "Careers", href: "/careers", hasDropdown: false, displayOrder: 8, isPublished: true },
    { id: "nav-9", name: "Contact Us", href: "/contact", hasDropdown: false, displayOrder: 9, isPublished: true }
  ],

  footerSettings: {
    description: "Sai Super Sand Minerals Pvt. Ltd. — Incorporated in 2006, commercial operations commencing in 2008. South India's trusted pioneer in precision granite aggregates and sustainable manufactured sand.",
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
      { name: "Careers & Openings", href: "/careers" }
    ],
    moreLinks: [
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Projects", href: "/projects" },
      { name: "Testimonials", href: "/about#testimonials" },
      { name: "Contact Us", href: "/contact" }
    ],
    facebookUrl: "https://facebook.com/supersand",
    linkedinUrl: "https://linkedin.com/company/super-sand",
    youtubeUrl: "https://youtube.com/@supersand",
    instagramUrl: "https://instagram.com/supersand",
    whatsappUrl: "https://wa.me/919533895920",
    copyrightText: "© 2006 - 2026 Sai Super Sand Minerals Pvt. Ltd. All Rights Reserved.",
    certificationsNotice: "ISO 9001:2015 Certified | Compliant with Bureau of Indian Standards IS 383:2016"
  },

  sectionSettings: [
    { id: "sec-hero", key: "hero", name: "Hero Showcase & Carousel", isEnabled: true, displayOrder: 1 },
    { id: "sec-products", key: "products", name: "Our Products Grid", isEnabled: true, displayOrder: 2 },
    { id: "sec-about", key: "about", name: "About Super Sand Preview", isEnabled: true, displayOrder: 3 },
    { id: "sec-why", key: "why_choose_us", name: "Why Choose Us 6 Pillars", isEnabled: true, displayOrder: 4 },
    { id: "sec-dual", key: "dual_features", name: "Infrastructure & Sustainability Promo", isEnabled: true, displayOrder: 5 },
    { id: "sec-projects", key: "projects", name: "Landmark Projects Showcase", isEnabled: true, displayOrder: 6 },
    { id: "sec-partners", key: "partners", name: "Client Partners & Collaborations", isEnabled: true, displayOrder: 7 },
    { id: "sec-team", key: "team", name: "Who We Are - Engineering & Operations", isEnabled: true, displayOrder: 8 },
    { id: "sec-contact-cta", key: "contact_cta", name: "Curved Contact CTA Bar", isEnabled: true, displayOrder: 9 }
  ],

  mediaAssets: [
    { id: "med-1", publicId: "logo_main", url: "/images/logos/logo.png", format: "png", resourceType: "image", createdAt: "2026-11-14T10:00:00Z", associatedContent: "Brand Logo" },
    { id: "med-2", publicId: "logo_white", url: "/images/logos/logo-white.png", format: "png", resourceType: "image", createdAt: "2026-11-14T10:00:00Z", associatedContent: "Navbar White Logo" },
    { id: "med-3", publicId: "hero_desk_1", url: "/images/hero/hero-desktop-1.png", format: "png", resourceType: "image", createdAt: "2026-11-14T10:00:00Z", associatedContent: "Hero Slide 1 Desktop" },
    { id: "med-4", publicId: "hero_mob_1", url: "/images/hero/hero-mobile-1.png", format: "png", resourceType: "image", createdAt: "2026-11-14T10:00:00Z", associatedContent: "Hero Slide 1 Mobile" },
    { id: "med-5", publicId: "partners_grand", url: "/images/clients/client-partners-grand-hd.png", format: "png", resourceType: "image", createdAt: "2026-11-15T12:00:00Z", associatedContent: "Strategic Client Partners Master Banner" },
    { id: "med-6", publicId: "team_collective", url: "/images/team/team-collective-grand-hd.png", format: "png", resourceType: "image", createdAt: "2026-11-15T12:00:00Z", associatedContent: "Automated Conveyor Circuits" },
    { id: "med-7", publicId: "dir_ramachandra", url: "/images/leadership/md-ramachandra.png", format: "png", resourceType: "image", createdAt: "2026-11-15T14:00:00Z", associatedContent: "Dr. Ramachandra Reddy (MD)" },
    { id: "med-8", publicId: "dir_krishna", url: "/images/leadership/ops-krishna.png", format: "png", resourceType: "image", createdAt: "2026-11-15T14:00:00Z", associatedContent: "Dr. P. Krishna Reddy (Director Ops)" },
    { id: "med-9", publicId: "dir_meghana", url: "/images/leadership/fin-meghana.png", format: "png", resourceType: "image", createdAt: "2026-11-15T14:00:00Z", associatedContent: "Mrs. Meghana Reddy (Director Finance)" },
    { id: "med-10", publicId: "team_mgmt", url: "/images/team/team-management-plant.png", format: "png", resourceType: "image", createdAt: "2026-11-15T14:00:00Z", associatedContent: "Executive Engineers & Plant Supervisors" },
    { id: "med-11", publicId: "team_workforce", url: "/images/team/team-workforce-plant.png", format: "png", resourceType: "image", createdAt: "2026-11-15T14:00:00Z", associatedContent: "Heavy Fleet Operators & Quarry Technicians" }
  ],

  activityLogs: [
    {
      id: "log-1",
      action: "INITIALIZE_CMS",
      module: "System",
      description: "Super Sand Production CMS initialized with complete live website data.",
      adminUser: "System Administrator",
      timestamp: "2026-11-16T10:00:00Z"
    }
  ]
};
