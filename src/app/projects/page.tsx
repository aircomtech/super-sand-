"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialProjects } from '@/lib/data';
import { Project } from '@/lib/types';
import { MapPin, Building2, CheckCircle2, ArrowRight, ZoomIn } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <MainLayout>
      <ProjectsContent />
    </MainLayout>
  );
}

function ProjectsContent({ onOpenEnquiry, onOpenLightbox }: any) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Highways & Flyovers', 'Commercial Towers', 'Metro Transit', 'Bridges & Expressways'];

  const filtered = activeFilter === 'All'
    ? initialProjects
    : initialProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#FAFCFA]">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#E8F5E9]/60 via-white to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            LANDMARK INFRASTRUCTURE FOOTPRINT
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Our Projects & Deployments
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Supplying high-strength aggregates, manufactured sand, and engineered road sub-bases to premier flyovers, metro lines, commercial towers, and highways.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-[#087A35] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div
                    className="relative aspect-video bg-gray-100 overflow-hidden cursor-pointer"
                    onClick={() => onOpenLightbox && onOpenLightbox({
                      id: proj.id,
                      title: proj.title,
                      category: 'Infrastructure',
                      image: proj.image,
                      description: `${proj.description} | Location: ${proj.location}`
                    })}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#087A35] shadow">
                      {proj.category}
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="flex items-center gap-1.5 bg-white text-[#17231D] px-4 py-2 rounded-full font-bold text-xs shadow-lg">
                        <ZoomIn className="w-4 h-4 text-[#087A35]" />
                        <span>Preview Project</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#087A35]" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#17231D] group-hover:text-[#087A35] transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Materials Supplied */}
                    <div className="pt-2">
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-gray-400 mb-2">
                        Materials Supplied:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.materialsSupplied.map((m, i) => (
                          <span
                            key={i}
                            className="bg-[#E8F5E9] text-[#004B2D] text-xs font-bold px-3 py-1 rounded-xl"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                  <span className="text-xs font-bold text-gray-500">
                    Client: {proj.clientOrSector}
                  </span>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className="text-xs font-bold text-[#087A35] hover:underline flex items-center gap-1"
                  >
                    <span>Supply Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
