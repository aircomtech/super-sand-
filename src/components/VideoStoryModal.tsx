"use client";

import React from 'react';
import { X, CheckCircle, Factory, ShieldCheck, Award, Users } from 'lucide-react';

interface VideoStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoStoryModal({ isOpen, onClose }: VideoStoryModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#17231D] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-black/40 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#087A35] animate-ping" />
            <div>
              <span className="text-[#F4C928] text-[11px] font-extrabold uppercase tracking-widest block">
                OUR CORPORATE JOURNEY
              </span>
              <h3 className="text-lg sm:text-xl font-bold">
                The Super Sand Story: Building Trust Since 2006
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Interactive Visual Showcase */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src="/images/hero/hero-slide-2.png"
            alt="Super Sand Facilities"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231D] via-transparent to-black/60" />

          {/* Center Story Overlay */}
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end text-left">
            <div className="max-w-2xl space-y-3">
              <span className="inline-block bg-[#087A35] text-white text-xs font-bold px-3 py-1 rounded-full">
                Sai Super Sand Minerals Pvt. Ltd.
              </span>
              <h4 className="text-2xl sm:text-3xl font-black text-white">
                Pioneering Sustainable Sand and Precision Aggregates
              </h4>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                Founded in 2006 with operations launched in 2008, Super Sand has powered major infrastructure corridors, metro lines, and premier high-rise complexes across South India with uncompromised material integrity.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#111915] border-t border-white/10 text-xs">
          <div className="flex items-center gap-2.5">
            <Factory className="w-5 h-5 text-[#087A35] flex-shrink-0" />
            <div>
              <div className="font-bold text-white">Advanced Plant</div>
              <div className="text-gray-400 text-[11px]">3-Stage VSI crushers</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-[#F4C928] flex-shrink-0" />
            <div>
              <div className="font-bold text-white">IS 383:2016</div>
              <div className="text-gray-400 text-[11px]">Laboratory tested</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#087A35] flex-shrink-0" />
            <div>
              <div className="font-bold text-white">20 Years Trust</div>
              <div className="text-gray-400 text-[11px]">Since 2006 inception</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-[#F4C928] flex-shrink-0" />
            <div>
              <div className="font-bold text-white">Trusted Partner</div>
              <div className="text-gray-400 text-[11px]">Over 1000+ builders</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
