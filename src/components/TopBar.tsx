"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#087A35] text-white text-[12px] sm:text-[13px] font-medium tracking-wide py-2 px-4 sm:px-8 border-b border-[#06632B]/50 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-1">
          <a
            href="tel:+919533895920"
            className="flex items-center gap-1.5 hover:text-[#F4C928] transition-colors"
            title="Call Super Sand Primary"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 95338 95920</span>
          </a>

          <span className="hidden sm:inline text-white/50">|</span>

          <a
            href="tel:+919553631919"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#F4C928] transition-colors"
            title="Call Super Sand Alternate"
          >
            <span>+91 95536 31919</span>
          </a>

          <span className="text-white/50">|</span>

          <a
            href="mailto:info@supersand.in"
            className="flex items-center gap-1.5 hover:text-[#F4C928] transition-colors"
            title="Email Super Sand"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@supersand.in</span>
          </a>
        </div>

        {/* Tagline & Socials */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/95 font-medium italic">
            <span className="w-2 h-2 rounded-full bg-[#F4C928] animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-[#F4C928]" />
            <span>Quality Today... A Stronger Tomorrow...</span>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-white/20">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#F4C928] hover:text-[#004B2D] flex items-center justify-center transition-all text-xs font-bold"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#F4C928] hover:text-[#004B2D] flex items-center justify-center transition-all text-xs font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#F4C928] hover:text-[#004B2D] flex items-center justify-center transition-all text-xs font-bold"
              aria-label="YouTube"
            >
              ▶
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
