import fs from 'fs';
import path from 'path';
import { FullCMSData } from './types';
import { defaultCMSData } from './default-cms-data';
import { supabase } from './supabase';

export { defaultCMSData };

const DB_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'db.json');

let inMemoryCache: FullCMSData | null = null;

// Synchronize from Supabase
export async function syncFromSupabase(): Promise<FullCMSData | null> {
  try {
    const { data, error } = await supabase
      .from('super_sand_cms')
      .select('content')
      .eq('id', 'main')
      .maybeSingle();

    if (!error && data?.content && Object.keys(data.content).length > 0) {
      const merged: FullCMSData = {
        ...defaultCMSData,
        ...data.content,
      };
      inMemoryCache = merged;
      return merged;
    }
  } catch (err: any) {
    // Graceful fallback to local storage
  }
  return null;
}

// Synchronize to Supabase
export async function syncToSupabase(dbData: FullCMSData): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('super_sand_cms')
      .upsert(
        {
          id: 'main',
          content: dbData,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'id' }
      );

    if (!error) {
      return true;
    }
  } catch (err: any) {
    // Graceful fallback
  }
  return false;
}

export function getDatabase(): FullCMSData {
  if (inMemoryCache) {
    return inMemoryCache;
  }

  try {
    if (fs.existsSync(DB_FILE_PATH)) {
      const data = fs.readFileSync(DB_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      const merged: FullCMSData = {
        ...defaultCMSData,
        ...parsed,
        siteInfo: { ...defaultCMSData.siteInfo, ...(parsed.siteInfo || {}) },
        contactSettings: { ...defaultCMSData.contactSettings, ...(parsed.contactSettings || {}) },
        teamCollective: { ...defaultCMSData.teamCollective, ...(parsed.teamCollective || {}) },
        footerSettings: { ...defaultCMSData.footerSettings, ...(parsed.footerSettings || {}) },
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

export async function getDatabaseAsync(): Promise<FullCMSData> {
  const fromSupabase = await syncFromSupabase();
  if (fromSupabase) {
    return fromSupabase;
  }
  return getDatabase();
}

export function saveDatabase(data: FullCMSData): boolean {
  inMemoryCache = data;

  // 1. Asynchronously sync to Supabase in background
  syncToSupabase(data).catch(() => {});

  // 2. Persist to local JSON file
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

export async function saveDatabaseAsync(data: FullCMSData): Promise<boolean> {
  inMemoryCache = data;
  const synced = await syncToSupabase(data);
  try {
    const dir = path.dirname(DB_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving DB file:', err);
  }
  return synced;
}

export function logAdminActivity(
  action: string,
  module: string,
  description: string,
  adminUser = 'Admin'
) {
  try {
    const db = getDatabase();
    const newLog = {
      id: `log-${Date.now()}`,
      action,
      module,
      description,
      adminUser,
      timestamp: new Date().toISOString(),
    };
    db.activityLogs = [newLog, ...(db.activityLogs || [])].slice(0, 100);
    saveDatabase(db);
  } catch (err) {
    console.error('Failed to log admin activity:', err);
  }
}
