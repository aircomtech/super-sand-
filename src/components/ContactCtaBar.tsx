"use client";

import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactCtaBarProps {
  onOpenEnquiry?: () => void;
}

export default function ContactCtaBar({ onOpenEnquiry }: ContactCtaBarProps) {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#087A35] via-[#05682C] to-[#004B2D] p-5 sm:p-6 shadow-xl border border-[#16A34A]/40 overflow-hidden text-white">
          
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-[28px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 relative z-10">
            
            {/* Left: Title & Subtitle */}
            <div className="flex items-center gap-3.5 text-center lg:text-left">
              <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <Phone className="w-5 h-5 text-[#F4C928]" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  Get in Touch with Us
                </h3>
                <p className="text-[11px] sm:text-[12px] text-gray-200 font-medium">
                  For Enquiries, Product Details or Immediate Material Supply Support
                </p>
              </div>
            </div>

            {/* Middle: Phone & WhatsApp Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 py-1.5 px-3.5 rounded-2xl bg-black/15 border border-white/10">
              <a
                href="tel:+919533895920"
                className="flex items-center gap-1.5 hover:text-[#F4C928] font-bold text-xs sm:text-sm transition-colors"
              >
                <span>+91 95338 95920</span>
              </a>

              <span className="text-white/40 hidden sm:inline">|</span>

              <a
                href="https://wa.me/919533895920?text=Hello%20Super%20Sand%2C%20I%20would%20like%20to%20enquire%20about%20materials."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#25D366] font-bold text-xs sm:text-sm transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <MessageSquare className="w-3 h-3" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Right: CTA Button */}
            <div>
              <button
                onClick={onOpenEnquiry}
                className="flex items-center gap-2 bg-[#F4C928] hover:bg-[#E2B81C] text-[#003822] px-6 py-2.5 rounded-full font-black text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
