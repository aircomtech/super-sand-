"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Star, Eye } from 'lucide-react';
import { Testimonial, Project } from '@/lib/types';

interface Props {
  testimonials: Testimonial[];
  projects: Project[];
  onOpenProjectPreview?: (project: Project) => void;
}

export default function TestimonialsAndProjectsSection({ testimonials, projects, onOpenProjectPreview }: Props) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Auto sliding testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex] || testimonials[0];

  return (
    <section className="py-12 sm:py-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Testimonial Slider Glass Card */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card rounded-3xl p-6 sm:p-7 relative min-h-[360px]">
            <div>
              {/* Header */}
              <div className="mb-3.5">
                <span className="text-[#087A35] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase block mb-1">
                  WHAT OUR CLIENTS SAY
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#17231D]">
                  Trusted by Builders, Valued for Quality.
                </h3>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-[#F4C928] mb-2.5">
                {[...Array(currentTestimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F4C928]" />
                ))}
              </div>

              {/* Quote Icon & Content */}
              <div className="relative">
                <div className="text-[#087A35] opacity-80 mb-2">
                  <Quote className="w-6 h-6 rotate-180" />
                </div>
                
                <p className="text-[13px] sm:text-[14px] text-gray-800 font-medium leading-relaxed italic min-h-[60px]">
                  "{currentTestimonial.quote}"
                </p>
              </div>
            </div>

            {/* Bottom Row: Client info & controls */}
            <div className="mt-5 pt-3.5 border-t border-gray-200/70 flex items-center justify-between">
              
              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-[#087A35] flex-shrink-0 shadow-sm">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#17231D] leading-tight">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-[11px] text-[#087A35] font-semibold mt-0.5">
                    {currentTestimonial.designation} <span className="text-gray-400 font-normal">| {currentTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-7 h-7 rounded-full bg-white hover:bg-[#087A35] hover:text-white text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-7 h-7 rounded-full bg-white hover:bg-[#087A35] hover:text-white text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonialIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentTestimonialIndex ? 'w-5 bg-[#087A35]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

          </div>

          {/* Right Column: Projects Showcase Gallery Glass Card */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card rounded-3xl p-6 sm:p-7 min-h-[360px]">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div>
                  <span className="text-[#087A35] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase block mb-1">
                    OUR PROJECTS & DEPLOYMENTS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#17231D]">
                    Building Better Together.
                  </h3>
                </div>
              </div>

              {/* 8 Project Thumbnails Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2.5">
                {projects.slice(0, 8).map((project, idx) => (
                  <div
                    key={project.id || idx}
                    onClick={() => onOpenProjectPreview && onOpenProjectPreview(project)}
                    className="group relative rounded-2xl overflow-hidden aspect-square bg-gray-200 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                      <span className="text-[10px] font-bold text-white line-clamp-1 leading-tight">
                        {project.title}
                      </span>
                      <span className="text-[9px] text-[#F4C928] font-bold flex items-center gap-1 mt-0.5">
                        <Eye className="w-2.5 h-2.5" /> Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-4 pt-3.5 border-t border-gray-200/70 flex items-center justify-between">
              <span className="text-[11px] text-gray-600 font-medium">
                Supplying 8+ landmark infrastructure corridors
              </span>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 bg-[#004B2D] hover:bg-[#003822] text-white px-4 py-2 rounded-full font-bold text-[11px] tracking-wide transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
