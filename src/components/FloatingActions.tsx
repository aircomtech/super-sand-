"use client";

import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#087A35] hover:bg-[#004B2D] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in zoom-in"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919533895920?text=Hello%20Super%20Sand%2C%20I%20would%20like%20to%20enquire%20about%20construction%20materials."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 animate-bounce"
        style={{ animationDuration: '3s' }}
        aria-label="Chat on WhatsApp"
        title="Chat with Super Sand on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs px-0 group-hover:px-2">
          Chat with Us
        </span>
        <MessageSquare className="w-6 h-6 fill-white" />
        
        {/* Notification indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
      </a>

    </div>
  );
}
