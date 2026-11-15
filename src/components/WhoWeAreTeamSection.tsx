"use client";

import React from 'react';
import Link from 'next/link';
import { Users, Award, ShieldCheck, Factory, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhoWeAreTeamSection() {
  return (
    <section id="who-we-are" className="py-12 sm:py-20 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 justify-center mb-2.5">
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
              WHO WE ARE
            </span>
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            A Team Dedicated to <span className="text-[#087A35]">Quality & Excellence</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            At Sai Super Sand Minerals, our strength lies in our passionate professionals, certified engineers, and dedicated operations workforce committed to shaping modern infrastructure across South India.
          </p>
        </div>

        {/* Dual Team Showcase Grid with Original Assets (image copy 46.png & 47.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1: Management, Technical & Quality Engineering Team (image copy 46.png) */}
          <div className="glass-card glass-card-hover rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border-2 border-[#087A35]/20 hover:border-[#087A35]/50 transition-all duration-500 shadow-xl">
            <div>
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 shadow-md bg-gray-900 group">
                <img
                  src="/images/team/team-management-plant.png"
                  alt="Super Sand Technical Management & Engineering Team at Crushing Plant"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#087A35] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                    Leadership & Operations
                  </span>
                  <h3 className="text-lg sm:text-xl font-black">
                    Executive Engineers & Plant Supervisors
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                <h4 className="text-xl font-bold text-[#17231D] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#087A35]" />
                  Precision Engineering & Quality Governance
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  Our on-site mechanical, geological, and civil engineering heads ensure each crushing cycle, screening deck, and classification unit functions with zero-defect accuracy to satisfy IS 383:2016 quality standards.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#E8F5E9]/70 rounded-xl p-3 border border-[#087A35]/20">
                    <div className="text-2xl font-black text-[#087A35]">18+</div>
                    <div className="text-xs font-semibold text-[#17231D]">Years Operational Track Record</div>
                  </div>
                  <div className="bg-[#E8F5E9]/70 rounded-xl p-3 border border-[#087A35]/20">
                    <div className="text-2xl font-black text-[#087A35]">100%</div>
                    <div className="text-xs font-semibold text-[#17231D]">Laboratory Tested Batches</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">Managing 350+ TPH Crushing Lines</span>
              <Link href="/about" className="text-xs font-bold text-[#087A35] hover:underline flex items-center gap-1">
                <span>View Full Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Operations, Mining & Heavy Plant Workforce (image copy 47.png) */}
          <div className="glass-card glass-card-hover rounded-[32px] p-6 sm:p-8 flex flex-col justify-between border-2 border-[#087A35]/20 hover:border-[#087A35]/50 transition-all duration-500 shadow-xl">
            <div>
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 shadow-md bg-gray-900 group">
                <img
                  src="/images/team/team-workforce-plant.png"
                  alt="Super Sand Full Mining and Plant Workforce"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#F4C928] text-[#17231D] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                    Operational Backbone
                  </span>
                  <h3 className="text-lg sm:text-xl font-black">
                    Heavy Fleet Operators & Quarry Technicians
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                <h4 className="text-xl font-bold text-[#17231D] flex items-center gap-2">
                  <Factory className="w-5 h-5 text-[#087A35]" />
                  24/7 Mining, Processing & Dispatch Power
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  Comprising certified hydraulic excavator drivers, computerized weighbridge technicians, VSI plant technicians, and commercial tipper operators working together safely to dispatch over 300+ loads daily.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#E8F5E9]/70 rounded-xl p-3 border border-[#087A35]/20">
                    <div className="text-2xl font-black text-[#087A35]">150K+</div>
                    <div className="text-xs font-semibold text-[#17231D]">Metric Tons Monthly Extraction</div>
                  </div>
                  <div className="bg-[#E8F5E9]/70 rounded-xl p-3 border border-[#087A35]/20">
                    <div className="text-2xl font-black text-[#087A35]">300+</div>
                    <div className="text-xs font-semibold text-[#17231D]">Fleet Loads Dispatched Daily</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600">Zero Lost Time Safety Protocol</span>
              <Link href="/services" className="text-xs font-bold text-[#087A35] hover:underline flex items-center gap-1">
                <span>View Plant Infrastructure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Quality Values Strip */}
        <div className="bg-gradient-to-r from-[#004B2D] via-[#087A35] to-[#004B2D] rounded-2xl p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-[#F4C928]" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold">
                Incorporated 2006 • Commercial Operations Since 2008
              </div>
              <div className="text-xs text-white/80">
                Pioneering manufactured sand (M-Sand) and cubical aggregates to safeguard natural riverbeds.
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#F4C928] hover:bg-[#E0B820] text-[#17231D] px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md flex-shrink-0"
          >
            <span>Explore Company Legacy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
