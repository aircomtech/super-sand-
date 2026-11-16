export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  heroImage?: string;
  sizesOrTypes: string[];
  applications: string[];
  features: string[];
  specifications: { [key: string]: string };
  isPublished?: boolean;
  displayOrder?: number;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
  highlights: string[];
  capacityOrSpecs: string;
  isPublished?: boolean;
  displayOrder?: number;
}

export interface InfrastructureItem {
  id: string;
  slug: string;
  title: string;
  tag: string;
  specs: string;
  desc: string;
  heroImage: string;
  image?: string;
  galleryImages: string[];
  technicalFeatures: string[];
  parameters: { [key: string]: string };
  isPublished?: boolean;
  displayOrder?: number;
}

export interface SustainabilityItem {
  id: string;
  slug: string;
  title: string;
  tag: string;
  metric: string;
  desc: string;
  heroImage: string;
  image?: string;
  galleryImages: string[];
  ecologicalImpact: string[];
  certifications: string[];
  isPublished?: boolean;
  displayOrder?: number;
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  materialsSupplied: string[];
  clientOrSector: string;
  volumeSupplied?: string;
  duration?: string;
  galleryImages?: string[];
  isPublished?: boolean;
  displayOrder?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  isPublished?: boolean;
  displayOrder?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Quarrying' | 'Production' | 'Logistics' | 'Quality' | 'Infrastructure' | 'Sustainability' | 'Maintenance' | 'About';
  image: string;
  description: string;
  isPublished?: boolean;
  displayOrder?: number;
}

export interface Enquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  productSelection: string;
  quantity: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface HeroSlide {
  id: number;
  tag: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  desktopImage: string;
  mobileImage: string;
  ctaText: string;
  ctaLink: string;
  isPublished?: boolean;
  displayOrder?: number;
}

export interface WhyChooseUsPillar {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon?: string;
  stats?: string;
  displayOrder?: number;
}

export interface Director {
  id: string;
  name: string;
  designation: string;
  roleTitle: string;
  image: string;
  bio: string;
  qualifications: string;
  focusAreas: string[];
  displayOrder?: number;
  isPublished?: boolean;
}

export interface TeamCard {
  id: string;
  badge: string;
  title: string;
  headline: string;
  image: string;
  description: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  footerNote: string;
  ctaLink: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
  badge: string;
  suppliedVolume: string;
  projectHighlight: string;
  logoUrl?: string;
  isPublished?: boolean;
  displayOrder?: number;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  deadline?: string;
  status: 'active' | 'closed' | 'draft';
  displayOrder?: number;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  qualification: string;
  message: string;
  resumeUrl?: string;
  appliedAt: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
}

export interface ContactSettings {
  companyAddress: string;
  primaryPhone: string;
  altPhone: string;
  whatsappNumber: string;
  primaryEmail: string;
  altEmail: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  latitude: number;
  longitude: number;
  officeHours: string;
  dispatchHours: string;
  sectionHeading: string;
  sectionSubtitle: string;
}

export interface NavigationItem {
  id: string;
  name: string;
  href: string;
  hasDropdown: boolean;
  subItems?: { name: string; href: string; desc?: string }[];
  displayOrder: number;
  isPublished: boolean;
}

export interface FooterSettings {
  description: string;
  quickLinks: { name: string; href: string }[];
  moreLinks: { name: string; href: string }[];
  facebookUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  whatsappUrl: string;
  copyrightText: string;
  certificationsNotice: string;
}

export interface SectionSetting {
  id: string;
  key: string;
  name: string;
  isEnabled: boolean;
  displayOrder: number;
  customHeading?: string;
  customSubtitle?: string;
}

export interface MediaAsset {
  id: string;
  publicId: string;
  url: string;
  format: string;
  width?: number;
  height?: number;
  resourceType: 'image' | 'video' | 'raw';
  tags?: string[];
  createdAt: string;
  originalFilename?: string;
  associatedContent?: string;
}

export interface AdminActivityLog {
  id: string;
  action: string;
  module: string;
  description: string;
  adminUser: string;
  timestamp: string;
}

export interface SiteInfo {
  businessName: string;
  legalName: string;
  establishedYear: number;
  productionOperationsYear: number;
  primaryPhone: string;
  altPhone: string;
  primaryEmail: string;
  altEmail: string;
  whatsappNumber: string;
  address: string;
  tagline: string;
  vision: string;
  mission: string;
  coreValues: string[];
}

export interface FullCMSData {
  siteInfo: SiteInfo;
  heroSlides: HeroSlide[];
  qualityHighlights: { title: string; subtitle: string; icon: string }[];
  whyChooseUs: WhyChooseUsPillar[];
  directors: Director[];
  teamCards: TeamCard[];
  teamCollective: {
    heading: string;
    subheading: string;
    bodyParagraph1: string;
    bodyParagraph2: string;
    image: string;
    stats: { value: string; label: string }[];
  };
  products: Product[];
  services: Service[];
  gallery: GalleryItem[];
  infrastructureItems: InfrastructureItem[];
  sustainabilityItems: SustainabilityItem[];
  projects: Project[];
  clientPartners: ClientPartner[];
  partnerMasterBanner: string;
  partnerMetrics: { value: string; label: string; sublabel: string }[];
  testimonials: Testimonial[];
  jobOpenings: JobOpening[];
  jobApplications: JobApplication[];
  contactSettings: ContactSettings;
  enquiries: Enquiry[];
  navigationItems: NavigationItem[];
  footerSettings: FooterSettings;
  sectionSettings: SectionSetting[];
  mediaAssets: MediaAsset[];
  activityLogs: AdminActivityLog[];
}
