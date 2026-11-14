"use client";

import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactCtaBarProps {
  onOpenEnquiry?: () => void;
}

export default function ContactCtaBar({ onOpenEnquiry }: ContactCtaBarProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-[#087A35] via-[#05682C] to-[#004B2D] p-5 sm:p-7 shadow-xl border-2 border-[#16A34A]/30 overflow-hidden text-white">
          
          {/* Subtle glossy sheen background */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-[32px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            
            {/* Left: Title & Subtitle */}
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                <Phone className="w-6 h-6 text-[#F4C928]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Get in Touch with Us
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-200 font-medium">
                  For Enquiries, Product Details or Immediate Material Supply Support
                </p>
              </div>
            </div>

            {/* Middle: Phone & WhatsApp Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-2 px-4 rounded-2xl bg-black/10 border border-white/10">
              
              {/* Phone Dial */}
              <a
                href="tel:+919533895920"
                className="flex items-center gap-2 hover:text-[#F4C928] font-bold text-[14px] sm:text-[16px] transition-colors"
              >
                <span>+91 95338 95920</span>
              </a>

              <span className="text-white/40 hidden sm:inline">|</span>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/919533895920?text=Hello%20Super%20Sand%2C%20I%20would%20like%20to%20enquire%20about%20materials."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] font-bold text-[14px] sm:text-[15px] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>Chat on WhatsApp</span>
              </a>

            </div>

            {/* Right: Golden Yellow CTA Pill Button */}
            <div>
              <button
                onClick={onOpenEnquiry}
                className="flex items-center gap-2 bg-[#F4C928] hover:bg-[#E2B81C] text-[#003822] px-7 py-3.5 rounded-full font-black text-[14px] sm:text-[15px] tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
