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

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<FullCMSData>(defaultCMSData);
  const [loading, setLoading] = useState(false);

  const fetchContent = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/content', { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setData(json.data);
        }
      }
    } catch (err) {
      console.warn('Could not fetch dynamic CMS content, using default data:', err);
    } finally {
      setLoading(false);
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

  // Also auto-refresh when tab receives focus
  useEffect(() => {
    const handleFocus = () => {
      fetchContent();
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [fetchContent]);

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
