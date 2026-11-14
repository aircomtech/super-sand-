"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Factory, Leaf } from 'lucide-react';

export default function DualFeatureSection() {
  return (
    <section className="py-10 sm:py-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Our Infrastructure with HD image copy 35.png */}
          <div className="group relative rounded-[32px] sm:rounded-[38px] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(8,122,53,0.25)] transition-all duration-700 min-h-[300px] sm:min-h-[360px] flex flex-col justify-end p-7 sm:p-9 border border-white/60">
            {/* HD Background Image with Smooth Ambient Animation */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img
                src="/images/infra/infra-stockpiles-hd.png"
                alt="Super Sand Manufacturing Infrastructure"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-1000 ease-out"
              />
              {/* Grand Gradient Overlay for Maximum Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003822]/90 via-[#003822]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 space-y-2.5 max-w-lg">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                <Factory className="w-3.5 h-3.5 text-[#F4C928]" />
                <span>Advanced Processing Infrastructure</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md">
                Our Infrastructure
              </h3>

              <p className="text-xs sm:text-sm text-gray-100 font-medium leading-relaxed line-clamp-2 drop-shadow">
                State-of-the-art manufacturing facilities with 3-stage advanced robotic crushing technology, captive mines, and 350+ TPH processing lines.
              </p>

              <div className="pt-2">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#F4C928] text-[#004B2D] hover:text-[#17231D] px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover:translate-x-1"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Our Commitment to Sustainability with HD image copy 37.png */}
          <div className="group relative rounded-[32px] sm:rounded-[38px] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(8,122,53,0.25)] transition-all duration-700 min-h-[300px] sm:min-h-[360px] flex flex-col justify-end p-7 sm:p-9 border border-white/60">
            {/* HD Background Image with Smooth Ambient Animation */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <img
                src="/images/sustainability/sustainability-banner-hd.png"
                alt="Super Sand Commitment to Sustainability"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-1000 ease-out"
              />
              {/* Grand Gradient Overlay for Maximum Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003822]/90 via-[#003822]/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 space-y-2.5 max-w-lg">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                <Leaf className="w-3.5 h-3.5 text-[#F4C928]" />
                <span>100% Eco-Friendly Riverbed Alternative</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md">
                Our Commitment to Sustainability
              </h3>

              <p className="text-xs sm:text-sm text-gray-100 font-medium leading-relaxed line-clamp-2 drop-shadow">
                Building a greener future with responsible, eco-friendly practices that protect river ecosystems, eliminate fugitive dust, and harvest rainwater.
              </p>

              <div className="pt-2">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#F4C928] text-[#004B2D] hover:text-[#17231D] px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover:translate-x-1"
                >
                  <span>Our Sustainability</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
