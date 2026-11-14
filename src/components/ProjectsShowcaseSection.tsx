"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { Project } from '@/lib/types';

interface Props {
  projects: Project[];
  onOpenProjectPreview?: (project: Project) => void;
}

export default function ProjectsShowcaseSection({ projects, onOpenProjectPreview }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Highways & Flyovers', 'Commercial Towers', 'Metro Transit', 'Bridges & Expressways'];

  const filteredProjects = activeCategory === 'All'
    ? projects.slice(0, 8)
    : projects.filter(p => p.category === activeCategory).slice(0, 8);

  return (
    <section className="py-14 sm:py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#087A35]"></span>
              <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                LANDMARK DEPLOYMENTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight">
              Our Projects & Deployments
            </h2>
            <p className="text-sm sm:text-base text-gray-700 font-medium mt-2 max-w-2xl">
              Supplying high-performance aggregates and manufactured sand to South India’s most critical infrastructure corridors, high-rises, and metro systems.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#004B2D] hover:bg-[#003822] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:scale-105 active:scale-95 flex-shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#087A35] text-white shadow-md'
                  : 'bg-white/80 hover:bg-white text-gray-700 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="group glass-card glass-card-hover rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Project Image Frame */}
                <div
                  className="relative aspect-[16/10] bg-gray-900 overflow-hidden cursor-pointer"
                  onClick={() => onOpenProjectPreview && onOpenProjectPreview(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-[#087A35] shadow">
                    {project.category}
                  </div>

                  {/* Hover Overlay Preview Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-1.5 bg-[#087A35] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-black text-[#17231D] group-hover:text-[#087A35] transition-colors leading-snug mb-1.5 line-clamp-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#087A35] flex-shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Materials Tag */}
                  <div className="flex flex-wrap gap-1">
                    {project.materialsSupplied.slice(0, 2).map((mat, i) => (
                      <span key={i} className="text-[10px] font-semibold bg-[#E8F5E9] text-[#087A35] px-2 py-0.5 rounded-md">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-4 pt-0 border-t border-gray-100/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500 truncate max-w-[140px]">
                  {project.clientOrSector}
                </span>

                <Link
                  href={`/projects/${project.slug || project.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#087A35] hover:text-[#06632B]"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
