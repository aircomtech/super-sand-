"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { FullCMSData } from '@/lib/types';
import { defaultCMSData } from '@/lib/default-cms-data';

interface CMSContextType {
  data: FullCMSData;
  loading: boolean;
  refreshCMS: () => Promise<void>;
}

const CMSContext = createContext<CMSContextType>({
  data: defaultCMSData,
  loading: false,
  refreshCMS: async () => {}
});

const STORAGE_KEY = 'super_sand_cms_data_cache';

export function CMSProvider({ children }: { children: React.ReactNode }) {
  // Synchronous initialization from localStorage to eliminate any initial blink
  const [data, setData] = useState<FullCMSData>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem(STORAGE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed && typeof parsed === 'object') {
            return { ...defaultCMSData, ...parsed };
          }
        }
      } catch (e) {
        // Fallback to default
      }
    }
    return defaultCMSData;
  });

  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      const res = await fetch('/api/content', { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setData((prev) => {
            // Prevent redundant re-renders / flashes if data hasn't changed
            try {
              if (JSON.stringify(prev) === JSON.stringify(json.data)) {
                return prev;
              }
            } catch (e) {}
            return json.data;
          });

          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(json.data));
          } catch (e) {}
        }
      }
    } catch (err) {
      console.warn('Could not fetch dynamic CMS content, using cached data:', err);
    }
  }, []);

  useEffect(() => {
    fetchContent();

    // Cross-tab real-time synchronization via BroadcastChannel
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      const channel = new BroadcastChannel('super_sand_cms_sync');
      channel.onmessage = (event) => {
        if (event.data?.type === 'CMS_UPDATED') {
          fetchContent();
        }
      };
      return () => {
        channel.close();
      };
    }
  }, [fetchContent]);

  // Sync state when another tab modifies localStorage
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          setData((prev) => ({ ...prev, ...parsed }));
        } catch (err) {}
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <CMSContext.Provider value={{ data, loading, refreshCMS: fetchContent }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}
