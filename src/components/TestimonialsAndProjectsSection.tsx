"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Testimonial Slider */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#F8FAF8] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm relative min-h-[340px]">
            <div>
              {/* Header */}
              <div className="mb-4">
                <span className="text-[#087A35] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase block mb-1">
                  WHAT OUR CLIENTS SAY
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#17231D]">
                  Trusted by Builders, Valued for Quality.
                </h3>
              </div>

              {/* Quote Icon & Content */}
              <div className="relative mt-4">
                <div className="text-[#087A35] opacity-80 mb-2">
                  <Quote className="w-8 h-8 rotate-180" />
                </div>
                
                <p className="text-[14px] sm:text-[15px] text-gray-700 font-medium leading-relaxed italic min-h-[60px]">
                  "{currentTestimonial.quote}"
                </p>
              </div>
            </div>

            {/* Bottom Row: Client info & controls */}
            <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between">
              
              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 border-2 border-[#087A35] flex-shrink-0">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#17231D] leading-tight">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-[12px] text-[#087A35] font-semibold mt-0.5">
                    {currentTestimonial.designation} <span className="text-gray-400 font-normal">| {currentTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full bg-white hover:bg-[#087A35] hover:text-white text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full bg-white hover:bg-[#087A35] hover:text-white text-gray-700 shadow-sm border border-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
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

          {/* Right Column: Projects Showcase Gallery */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#F8FAF8] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm min-h-[340px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[#087A35] font-extrabold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase block mb-1">
                    OUR PROJECTS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#17231D]">
                    Building Better Together.
                  </h3>
                </div>
              </div>

              {/* 4 Project Thumbnails in Row Matching Reference Screenshot */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {projects.slice(0, 4).map((project, idx) => (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[10px] font-bold text-white line-clamp-1 leading-tight">
                        {project.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between">
              <span className="text-[12px] text-gray-500 font-medium">
                Supplying landmark road, metro & high-rise ventures
              </span>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[#004B2D] hover:bg-[#003822] text-white px-5 py-2.5 rounded-full font-bold text-[12px] tracking-wide transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
