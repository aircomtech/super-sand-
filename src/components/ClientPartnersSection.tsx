"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Building2, Truck, ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  category: string;
  badge: string;
}

const partners: Partner[] = [
  { name: "NHAI", category: "Highways & Expressways", badge: "Govt of India" },
  { name: "Indian Railways", category: "Transit & Ballast Infrastructure", badge: "National Transit" },
  { name: "TSGENCO", category: "Power & Heavy Foundations", badge: "State Energy" },
  { name: "IRB Infrastructure", category: "Tollway & Corridor Works", badge: "EPC Leader" },
  { name: "Auro Realty", category: "Luxury High-Rise & Commercial", badge: "Real Estate" },
  { name: "Maha Cement", category: "Ready Mix & Cement Blends", badge: "Building Materials" },
  { name: "Aditya Birla Group", category: "UltraTech Ready Mix Supply", badge: "Conglomerate" },
  { name: "Shapoorji Pallonji", category: "Mega Infrastructure & Engineering", badge: "Global EPC" },
  { name: "ACC Limited", category: "Engineered Concrete Solutions", badge: "Cement Leader" },
  { name: "Aurobindo Realty", category: "IT Parks & Commercial Towers", badge: "Tech Parks" },
  { name: "Larsen & Toubro (L&T)", category: "Metro & Elevated Highway Projects", badge: "Premier EPC" },
  { name: "Prism RMC", category: "High-Performance Concrete Mixes", badge: "RMC Specialist" },
  { name: "Infra.Market", category: "Tech-Enabled Material Distribution", badge: "Infra Tech" },
  { name: "My Home Group", category: "Iconic Residential & Commercial", badge: "Real Estate" }
];

export default function ClientPartnersSection() {
  return (
    <section className="py-12 sm:py-20 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 justify-center mb-2.5">
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
              CLIENT PARTNERS & COLLABORATIONS
            </span>
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Trusted by India&apos;s <span className="text-[#087A35]">Infrastructure Leaders</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            From national highway flyovers and metro transit corridors to premier commercial IT tech parks, Sai Super Sand Minerals delivers engineered strength to the country&apos;s most demanding builders.
          </p>
        </div>

        {/* Master Partner Banner from image copy 49.png with Grand Glassmorphic Card Frame */}
        <div className="glass-card glass-card-hover rounded-[32px] p-6 sm:p-8 mb-10 border-2 border-[#087A35]/30 shadow-2xl overflow-hidden relative">
          <div className="relative w-full rounded-2xl overflow-hidden bg-white p-4 sm:p-6 shadow-inner border border-gray-100 flex items-center justify-center">
            <img
              src="/images/clients/strategic-partners-grid.png"
              alt="Strategic Client Partners - NHAI, Indian Railways, TSGENCO, IRB, AURO, MAHA, ADITYA BIRLA, Shapoorji, ACC, L&T, PRISM, INFRA.MARKET, MY HOME"
              className="w-full h-auto max-h-[360px] object-contain object-center"
            />
          </div>

          {/* Quick Metrics Bar underneath */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">14+</div>
              <div className="text-xs font-bold text-gray-700">Tier-1 Corporate Clients</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">500K+</div>
              <div className="text-xs font-bold text-gray-700">Metric Tons Delivered</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">100%</div>
              <div className="text-xs font-bold text-gray-700">On-Time Dispatch Rate</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">IS 383</div>
              <div className="text-xs font-bold text-gray-700">Quality Certified</div>
            </div>
          </div>
        </div>

        {/* Interactive Partner Grid Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="glass-card p-3.5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087A35] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
                  {partner.badge}
                </span>
                <Building2 className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087A35] transition-colors" />
              </div>
              <div className="text-sm font-extrabold text-[#17231D] group-hover:text-[#087A35] transition-colors">
                {partner.name}
              </div>
              <div className="text-[11px] text-gray-500 font-medium line-clamp-1 mt-0.5">
                {partner.category}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Collaborate Banner */}
        <div className="bg-gradient-to-r from-[#087A35] via-[#004B2D] to-[#087A35] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              Partner with Super Sand for Your Next Major Project
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
              We offer customized volume pricing, dedicated batch scheduling, automated weighbridge digital slips, and priority dispatch fleets for tier-1 contractors and developers.
            </p>
          </div>

          <div className="flex items-center gap-3.5 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F4C928] hover:bg-[#E0B820] text-[#17231D] px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md"
            >
              <span>Request Corporate Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
