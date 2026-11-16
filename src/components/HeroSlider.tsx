"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Award, Truck, Leaf, ShieldCheck, ChevronDown } from 'lucide-react';
import { HeroSlide } from '@/lib/types';

interface HeroSliderProps {
  slides?: HeroSlide[];
  onOpenVideo?: () => void;
  onOpenEnquiry?: () => void;
}

const defaultSlides = [
  {
    id: 1,
    tag: "SUPER SAND",
    titleLine1: "Building a",
    titleLine2: "Stronger Tomorrow",
    subtitle: "High-Quality Construction Materials for a Sustainable Future.",
    desktopImage: "/images/hero/hero-desktop-1.png",
    mobileImage: "/images/hero/hero-mobile-1.png",
    ctaText: "Explore Our Products",
    ctaLink: "/products",
  },
  {
    id: 2,
    tag: "STATE-OF-THE-ART INFRASTRUCTURE",
    titleLine1: "Precision Crushed",
    titleLine2: "Superior Strength",
    subtitle: "3-Stage automated crushing delivering 100% cubical aggregates and zero-silt sand.",
    desktopImage: "/images/hero/hero-slide-2.png",
    mobileImage: "/images/hero/hero-slide-2.png",
    ctaText: "Explore Facilities",
    ctaLink: "/infrastructure",
  },
  {
    id: 3,
    tag: "RELIABLE LOGISTICS FLEET",
    titleLine1: "Uninterrupted",
    titleLine2: "Express Dispatch",
    subtitle: "Dedicated commercial tipper fleet and automated electronic weighbridges operating 24/7.",
    desktopImage: "/images/hero/hero-slide-3.png",
    mobileImage: "/images/hero/hero-slide-3.png",
    ctaText: "View Logistics & Fleet",
    ctaLink: "/services",
  },
  {
    id: 4,
    tag: "ENVIRONMENTAL EXCELLENCE",
    titleLine1: "Eco-Friendly",
    titleLine2: "Greener Future",
    subtitle: "Conserving fragile riverbeds with certified, zero-silt manufactured plastering sand.",
    desktopImage: "/images/hero/hero-slide-4.png",
    mobileImage: "/images/hero/hero-slide-4.png",
    ctaText: "Our Sustainability",
    ctaLink: "/sustainability",
  }
];

export default function HeroSlider({ slides: cmsSlides, onOpenVideo, onOpenEnquiry }: HeroSliderProps) {
  const slides = cmsSlides && cmsSlides.length > 0 ? cmsSlides : defaultSlides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay timer: 5.5s
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5500);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchStartX - touchEndX < -50) prevSlide();
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const current = slides[currentSlide] || slides[0];

  return (
    <section
      className="relative overflow-hidden w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Showcase"
    >
      {/* FULL-BLEED SLIDER BACKGROUND (Desktop & Brightened Mobile) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transition-transform duration-1000`}
            >
              {/* Responsive picture element: crystal clear & brightened on mobile */}
              <picture>
                <source media="(max-width: 767px)" srcSet={s.mobileImage} />
                <img
                  src={s.desktopImage}
                  alt={s.titleLine2}
                  className="w-full h-full object-cover object-right lg:object-center brightness-[1.10] contrast-[1.06] saturate-[1.08]"
                />
              </picture>

              {/* Gentle Translucent Gradient on Left for Text Contrast, maintaining full brightness on Right & Mobile */}
              <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white/95 via-white/75 to-transparent w-3/5 pointer-events-none" />
              <div className="absolute inset-0 md:hidden bg-gradient-to-b from-white/80 via-transparent to-white/60 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-5 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-7 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-xl text-left space-y-5">
          
          {/* Green Category / Brand Tag */}
          <div className="inline-flex items-center gap-2">
            <span className="text-[#087A35] font-black text-xs sm:text-sm tracking-[0.25em] uppercase border-b-2 border-[#087A35] pb-0.5">
              {current.tag}
            </span>
          </div>

          {/* Main Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17231D] tracking-tight leading-[1.12]">
              {current.titleLine1}{' '}
              <span className="text-[#087A35] block sm:inline">
                {current.titleLine2}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed max-w-lg">
            {current.subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href={current.ctaLink}
              className="inline-flex items-center gap-2.5 bg-[#087A35] hover:bg-[#06632B] text-white px-7 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-brand transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-0.5"
            >
              <span>{current.ctaText}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md hover:bg-white text-[#17231D] border border-gray-200 px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <span className="w-7 h-7 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-3.5 h-3.5 fill-[#087A35] ml-0.5" />
              </span>
              <span>Watch Our Story</span>
            </button>
          </div>

          {/* 4 Trust Indicators */}
          <div className="pt-5 border-t border-gray-200/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-[#087A35]" />
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#17231D] leading-snug">
                  Premium Quality
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Truck className="w-5 h-5 text-[#087A35]" />
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#17231D] leading-snug">
                  Reliable Supply
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Leaf className="w-5 h-5 text-[#087A35]" />
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#17231D] leading-snug">
                  Environmentally Responsible
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#087A35]" />
                </div>
                <div className="text-xs sm:text-[13px] font-bold text-[#17231D] leading-snug">
                  Trusted Partner
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3.5 pt-3">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white/95 hover:bg-[#087A35] hover:text-white text-gray-700 shadow-md border border-gray-200 flex items-center justify-center transition-colors"
                aria-label="Previous Hero Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white/95 hover:bg-[#087A35] hover:text-white text-gray-700 shadow-md border border-gray-200 flex items-center justify-center transition-colors"
                aria-label="Next Hero Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-6 bg-[#087A35]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <span className="text-[11px] font-semibold text-gray-500">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator with elegant badge */}
      <button
        onClick={scrollToProducts}
        className="hidden lg:flex absolute bottom-3 right-8 z-20 items-center gap-2 bg-white/90 backdrop-blur-md hover:bg-[#087A35] text-[#17231D] hover:text-white px-3.5 py-1.5 rounded-full shadow-md border border-gray-200/80 transition-all duration-300 hover:scale-105 active:scale-95 text-[11px] font-bold group"
        title="Scroll down to Products"
      >
        <span>Explore Products</span>
        <ChevronDown className="w-3.5 h-3.5 stroke-[2.5] text-[#087A35] group-hover:text-white transition-colors" />
      </button>
    </section>
  );
}
