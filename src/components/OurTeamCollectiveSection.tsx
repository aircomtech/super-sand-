"use client";

import React from 'react';
import Link from 'next/link';
import { Users, HeartHandshake, Shield, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OurTeamCollectiveSection() {
  return (
    <section className="py-12 sm:py-20 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="glass-card glass-card-hover rounded-[36px] p-6 sm:p-10 lg:p-12 border-2 border-[#087A35]/25 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image of Sand Discharge Conveyor from image copy 50.png */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-gray-900 border-4 border-[#087A35]/30 group">
                <img
                  src="/images/team/team-collective-conveyor.png"
                  alt="Super Sand Crushing Plant Conveyor Discharge - Our Team Collective"
                  className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-[#087A35] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#F4C928]" />
                    <span>Engineered by People</span>
                  </div>
                  <h4 className="text-lg font-black leading-snug">
                    Continuous Innovation from Quarry to Dispatch
                  </h4>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    Empowering 200+ technicians, heavy machinery operators, and lab specialists every single day.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Text & Collective Culture */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#087A35]"></span>
                <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                  OUR TEAM
                </span>
                <span className="w-8 h-0.5 bg-[#087A35]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight leading-[1.15]">
                We are a <span className="text-[#087A35]">Strong Collective</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                Behind every ton of precision-crushed aggregate and zero-silt manufactured sand is a team of passionate professionals dedicated to building India&apos;s infrastructure with uncompromising integrity.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="bg-[#E8F5E9]/70 rounded-2xl p-3.5 border border-[#087A35]/20 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#087A35] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-[#F4C928]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#17231D]">Safety-First Culture</h5>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                      Zero lost-time injury record with rigorous quarry and plant safety training.
                    </p>
                  </div>
                </div>

                <div className="bg-[#E8F5E9]/70 rounded-2xl p-3.5 border border-[#087A35]/20 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#087A35] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4 text-[#F4C928]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#17231D]">Mutual Respect & Growth</h5>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                      Continuous upskilling in modern crushing automation and lab quality testing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Button to Careers */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2.5 bg-[#087A35] hover:bg-[#06632B] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-brand transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Our Collective • View Careers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-[#087A35] text-[#087A35] hover:bg-[#087A35] hover:text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300"
                >
                  <span>Learn More About Us</span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
