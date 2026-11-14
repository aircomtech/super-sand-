"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialServices, initialGallery } from '@/lib/data';
import { ArrowRight, CheckCircle2, Factory, Truck, Award, ShieldCheck, Wrench, Leaf, ZoomIn } from 'lucide-react';

export default function ServicesPage() {
  return (
    <MainLayout>
      <ServicesContent />
    </MainLayout>
  );
}

function ServicesContent({ onOpenEnquiry, onOpenLightbox }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Quarrying', 'Production', 'Logistics', 'Quality', 'Infrastructure', 'Sustainability', 'Maintenance'];

  const filteredGallery = selectedCategory === 'All'
    ? initialGallery
    : initialGallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-transparent">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white/85 via-white/60 to-transparent py-14 sm:py-20 border-b border-gray-100/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            COMPREHENSIVE OPERATIONS & CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Our Services & Operations
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
            From mechanized granite extraction in our captive mines to 3-stage precision crushing, computerized dispatch fleets, and environmental dust control.
          </p>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {initialServices.map((service, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="glass-card rounded-[36px] p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Service Gallery Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div
                      className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl border-4 border-white cursor-pointer group"
                      onClick={() => onOpenLightbox && onOpenLightbox({
                        id: service.id,
                        title: service.title,
                        category: service.category as any,
                        image: service.mainImage,
                        description: service.description
                      })}
                    >
                      <img
                        src={service.mainImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#087A35] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow">
                        {service.category}
                      </div>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="flex items-center gap-1.5 bg-white/90 text-[#17231D] px-4 py-2 rounded-full font-bold text-xs shadow-lg">
                          <ZoomIn className="w-4 h-4 text-[#087A35]" />
                          <span>Click to View Full Photo</span>
                        </span>
                      </div>
                    </div>

                    {/* Additional Related Photos Strip */}
                    {service.galleryImages.length > 1 && (
                      <div className="grid grid-cols-4 gap-2.5 mt-3">
                        {service.galleryImages.slice(1, 5).map((imgUrl, gIdx) => (
                          <div
                            key={gIdx}
                            onClick={() => onOpenLightbox && onOpenLightbox({
                              id: `${service.id}-${gIdx}`,
                              title: `${service.title} - Operational View ${gIdx + 2}`,
                              category: service.category as any,
                              image: imgUrl,
                              description: service.tagline
                            })}
                            className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 border border-gray-200 cursor-pointer hover:opacity-80 transition-opacity group/sub"
                          >
                            <img
                              src={imgUrl}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover/sub:bg-transparent" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="text-[#087A35] font-extrabold text-xs tracking-wider uppercase bg-[#E8F5E9] px-3.5 py-1.5 rounded-full inline-block">
                      {service.category}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#17231D] leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#087A35]">
                      {service.tagline}
                    </p>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Operational Highlights */}
                    <div className="space-y-2 pt-2">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-[#087A35] flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Capacity badge */}
                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 text-xs font-bold text-gray-700">
                      ⚡ <strong>Operational Scope:</strong> {service.capacityOrSpecs}
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <button
                        onClick={() => onOpenEnquiry && onOpenEnquiry()}
                        className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-brand transition-all hover:scale-105"
                      >
                        <span>Enquire for this Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Comprehensive Grand Gallery Section */}
      <section id="gallery" className="py-16 sm:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
              ON-SITE PHOTOGRAPHIC ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#17231D] tracking-tight mb-3">
              Super Sand Operations Gallery
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Authentic high-resolution photographs of our granite mines, crushing plants, heavy excavators, weighbridges, and lab testing.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#087A35] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grand 22-Photo Grid with Lightbox Interaction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox && onOpenLightbox(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Tag Pill */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-black text-[#087A35] shadow">
                  {item.category}
                </div>

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <h4 className="text-xs font-bold leading-snug line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#F4C928] font-bold">
                    <ZoomIn className="w-3 h-3" />
                    <span>Click to Expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
