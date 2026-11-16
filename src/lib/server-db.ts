import fs from 'fs';
import path from 'path';
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

const DB_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

import { defaultCMSData } from './default-cms-data';
export { defaultCMSData };

let inMemoryCache: FullCMSData | null = null;

export function getDatabase(): FullCMSData {
  if (inMemoryCache) {
    return inMemoryCache;
  }

  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      // Merge with default to guarantee all new sections exist
      const merged: FullCMSData = {
        ...defaultCMSData,
        ...parsed,
        siteInfo: { ...defaultCMSData.siteInfo, ...(parsed.siteInfo || {}) },
        contactSettings: { ...defaultCMSData.contactSettings, ...(parsed.contactSettings || {}) },
        teamCollective: { ...defaultCMSData.teamCollective, ...(parsed.teamCollective || {}) },
        footerSettings: { ...defaultCMSData.footerSettings, ...(parsed.footerSettings || {}) }
      };
      inMemoryCache = merged;
      return merged;
    }
  } catch (err) {
    console.error('Error reading DB file, using default data:', err);
  }

  inMemoryCache = defaultCMSData;

  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(defaultCMSData, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing default DB file:', err);
  }

  return defaultCMSData;
}

export function saveDatabase(data: FullCMSData): boolean {
  inMemoryCache = data;
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error saving DB file:', err);
    return false;
  }
}

export function logAdminActivity(action: string, module: string, description: string, adminUser = 'Admin') {
  try {
    const db = getDatabase();
    const newLog = {
      id: `log-${Date.now()}`,
      action,
      module,
      description,
      adminUser,
      timestamp: new Date().toISOString()
    };
    db.activityLogs = [newLog, ...(db.activityLogs || [])].slice(0, 100);
    saveDatabase(db);
  } catch (err) {
    console.error('Failed to log admin activity:', err);
  }
}
