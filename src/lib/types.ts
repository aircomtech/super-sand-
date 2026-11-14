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
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  materialsSupplied: string[];
  clientOrSector: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Quarrying' | 'Production' | 'Logistics' | 'Quality' | 'Infrastructure' | 'Sustainability' | 'Maintenance' | 'About';
  image: string;
  description: string;
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
