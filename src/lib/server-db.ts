import fs from 'fs';
import path from 'path';
import {
  initialSiteInfo,
  initialProducts,
  initialServices,
  initialProjects,
  initialTestimonials,
  initialGallery,
  initialEnquiries
} from './data';
import { Product, Service, Project, Testimonial, GalleryItem, Enquiry, SiteInfo } from './types';

export interface DatabaseSchema {
  siteInfo: SiteInfo;
  products: Product[];
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  gallery: GalleryItem[];
  enquiries: Enquiry[];
}

const DB_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

export function getDatabase(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading DB file, falling back to defaults:', err);
  }

  const initialData: DatabaseSchema = {
    siteInfo: initialSiteInfo,
    products: initialProducts,
    services: initialServices,
    projects: initialProjects,
    testimonials: initialTestimonials,
    gallery: initialGallery,
    enquiries: initialEnquiries
  };

  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error initializing DB file:', err);
  }

  return initialData;
}

export function saveDatabase(data: DatabaseSchema): boolean {
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing DB file:', err);
    return false;
  }
}
