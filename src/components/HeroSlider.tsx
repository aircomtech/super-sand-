"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Award, Truck, Leaf, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroSliderProps {
  onOpenVideo?: () => void;
  onOpenEnquiry?: () => void;
}

const slides = [
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
    tag: "STATE-OF-THE-ART CRUSHING",
    titleLine1: "Engineered for",
    titleLine2: "Unmatched Strength",
    subtitle: "Multi-stage automated crushing producing 100% cubical aggregates and zero-silt sand.",
    desktopImage: "/images/hero/hero-slide-2.png",
    mobileImage: "/images/hero/hero-slide-2.png",
    ctaText: "Explore Facilities",
    ctaLink: "/infrastructure",
  },
  {
    id: 3,
    tag: "RELIABLE SUPPLY CHAIN",
    titleLine1: "Express Logistics",
    titleLine2: "On-Time Delivery",
    subtitle: "Dedicated multi-axle tipper fleet and automated electronic weighbridge dispatch.",
    desktopImage: "/images/hero/hero-slide-3.png",
    mobileImage: "/images/hero/hero-slide-3.png",
    ctaText: "View Our Services",
    ctaLink: "/services",
  },
  {
    id: 4,
    tag: "SUSTAINABILITY FIRST",
    titleLine1: "Preserving Rivers",
    titleLine2: "Greener Tomorrow",
    subtitle: "Eco-friendly manufactured sand meeting IS 383:2016 standards with superior bonding.",
    desktopImage: "/images/hero/hero-slide-4.png",
    mobileImage: "/images/hero/hero-slide-4.png",
    ctaText: "Our Sustainability",
    ctaLink: "/sustainability",
  }
];

export default function HeroSlider({ onOpenVideo, onOpenEnquiry }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay timer: 5.5 seconds
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }
    if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F9F6] via-white to-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Carousel"
    >
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-40 lg:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F9F6] via-transparent to-transparent z-10" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[#087A35] font-extrabold text-[13px] sm:text-[14px] tracking-[0.2em] uppercase py-1 px-0 border-b-2 border-[#087A35]">
                {current.tag}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#17231D] tracking-tight leading-[1.12]">
                {current.titleLine1}{' '}
                <span className="text-[#087A35] block sm:inline">{current.titleLine2}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-medium max-w-xl leading-relaxed">
              {current.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={current.ctaLink}
                className="inline-flex items-center gap-2.5 bg-[#087A35] hover:bg-[#06632B] text-white px-7 py-3.5 rounded-full font-bold text-[15px] tracking-wide shadow-brand transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#17231D] border border-gray-200 hover:border-gray-300 px-6 py-3.5 rounded-full font-semibold text-[15px] shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span className="w-8 h-8 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-[#087A35] ml-0.5" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* 4 Trust Indicators Matching Reference Screenshot Exactly */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Award className="w-5 h-5 text-[#087A35]" />
                  </div>
                  <div className="text-[13px] font-bold text-[#17231D] leading-snug">
                    Premium Quality
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Truck className="w-5 h-5 text-[#087A35]" />
                  </div>
                  <div className="text-[13px] font-bold text-[#17231D] leading-snug">
                    Reliable Supply
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Leaf className="w-5 h-5 text-[#087A35]" />
                  </div>
                  <div className="text-[13px] font-bold text-[#17231D] leading-snug">
                    Environmentally Responsible
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#087A35]" />
                  </div>
                  <div className="text-[13px] font-bold text-[#17231D] leading-snug">
                    Trusted Partner
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Slider Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              
              {/* Carousel Slides */}
              {slides.map((s, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                    } transition-transform duration-1000`}
                  >
                    {/* Responsive image loading: mobile hero image on small screens, widescreen desktop on large */}
                    <picture>
                      <source media="(max-width: 767px)" srcSet={s.mobileImage} />
                      <img
                        src={s.desktopImage}
                        alt={s.titleLine2}
                        className="w-full h-full object-cover object-center"
                      />
                    </picture>

                    {/* Gradient Overlay for polish and depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                    {/* Subtle caption badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center justify-between text-xs font-semibold text-[#17231D] shadow-md">
                      <span className="truncate pr-2 font-bold text-[#087A35]">{s.tag}</span>
                      <span className="text-gray-500 whitespace-nowrap">Slide {index + 1} of {slides.length}</span>
                    </div>
                  </div>
                );
              })}

              {/* Slider Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#17231D] shadow-lg flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-[#087A35]" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#17231D] shadow-lg flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-[#087A35]" />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === currentSlide ? 'w-8 bg-[#087A35]' : 'w-2.5 bg-white/80 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* Scroll Down Target Button matching Reference */}
            <button
              onClick={scrollToProducts}
              className="hidden lg:flex absolute -bottom-5 right-10 z-30 w-12 h-12 rounded-full bg-[#087A35] hover:bg-[#06632B] text-white shadow-xl items-center justify-center transition-transform hover:scale-110 animate-bounce"
              title="Scroll to Products"
            >
              <ChevronDown className="w-6 h-6" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
