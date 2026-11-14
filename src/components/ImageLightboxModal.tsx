"use client";

import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';
import { GalleryItem } from '@/lib/types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function ImageLightboxModal({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#17231D] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between p-4 bg-black/50 text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="bg-[#087A35] text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full">
              {item.category}
            </span>
            <h4 className="text-sm sm:text-base font-bold truncate max-w-md">
              {item.title}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Center High-Resolution Image */}
        <div className="flex-1 flex items-center justify-center p-2 bg-black/70 overflow-hidden min-h-[300px]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Bottom Details */}
        <div className="p-4 bg-[#121B17] text-gray-300 text-xs sm:text-sm border-t border-white/10">
          <p className="leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
