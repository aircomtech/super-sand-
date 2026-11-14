"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DualFeatureSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Our Infrastructure */}
          <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 h-[260px] sm:h-[300px] flex flex-col justify-end p-6 sm:p-8">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/infra/infra-plant.jpg"
                alt="Super Sand Infrastructure Facilities"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Deep Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Our Infrastructure
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-200 font-medium max-w-md line-clamp-2">
                State-of-the-art manufacturing facilities with advanced technology.
              </p>
              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#087A35] px-5 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:translate-x-1"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Our Commitment to Sustainability */}
          <div className="group relative rounded-3xl sm:rounded-[36px] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 h-[260px] sm:h-[300px] flex flex-col justify-end p-6 sm:p-8">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <img
                src="/images/sustainability/sustainability-seedling.jpg"
                alt="Super Sand Commitment to Sustainability"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Deep Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003822]/90 via-[#003822]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Our Commitment to Sustainability
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-200 font-medium max-w-md line-clamp-2">
                Building a greener future with responsible and eco-friendly practices.
              </p>
              <div className="pt-2">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#087A35] px-5 py-2.5 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 shadow-md group-hover:shadow-lg transform group-hover:translate-x-1"
                >
                  <span>Our Sustainability</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
