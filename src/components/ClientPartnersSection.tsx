"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, Building2, Truck, ArrowRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import TypingNumber from './TypingNumber';
import { useCMS } from '@/context/CMSContext';
import { ClientPartner } from '@/lib/types';

const defaultPartners: ClientPartner[] = [
  { id: "cp-1", name: "NHAI", category: "Highways & Expressways", badge: "Govt of India", suppliedVolume: "140,000+ MT", projectHighlight: "National Highway Bypass & Elevated Corridor Deck Slabs" },
  { id: "cp-2", name: "Indian Railways", category: "Transit & Ballast Infrastructure", badge: "National Transit", suppliedVolume: "95,000+ MT", projectHighlight: "60mm Heavy-Track Ballast & Station Concourse RCC" },
  { id: "cp-3", name: "TSGENCO", category: "Power & Heavy Foundations", badge: "State Energy", suppliedVolume: "80,000+ MT", projectHighlight: "Heavy Equipment Turbine Foundations & RCC Cooling Towers" },
  { id: "cp-4", name: "IRB Infrastructure", category: "Tollway & Corridor Works", badge: "EPC Leader", suppliedVolume: "120,000+ MT", projectHighlight: "MoRTH Section 400 W.M.M & G.S.B Road Sub-Base" },
  { id: "cp-5", name: "Auro Realty", category: "Luxury High-Rise & Commercial", badge: "Real Estate", suppliedVolume: "110,000+ MT", projectHighlight: "Ultra-High Performance M60 VSI Concrete M-Sand" },
  { id: "cp-6", name: "Maha Cement", category: "Ready Mix & Cement Blends", badge: "Building Materials", suppliedVolume: "85,000+ MT", projectHighlight: "Continuous Daily Concrete Aggregates & Manufactured Sand" },
  { id: "cp-7", name: "Aditya Birla Group", category: "UltraTech Ready Mix Supply", badge: "Conglomerate", suppliedVolume: "160,000+ MT", projectHighlight: "Commercial Batching Plants across Hyderabad Metro Region" },
  { id: "cp-8", name: "Shapoorji Pallonji", category: "Mega Infrastructure & Engineering", badge: "Global EPC", suppliedVolume: "135,000+ MT", projectHighlight: "Major River Bridge Caisson Foundations & Piers" },
  { id: "cp-9", name: "ACC Limited", category: "Engineered Concrete Solutions", badge: "Cement Leader", suppliedVolume: "90,000+ MT", projectHighlight: "Bulk Sieve-Graded Concrete Aggregates" },
  { id: "cp-10", name: "Aurobindo Realty", category: "IT Parks & Commercial Towers", badge: "Tech Parks", suppliedVolume: "105,000+ MT", projectHighlight: "HITEC City & Financial District High-Rise IT Towers" },
  { id: "cp-11", name: "Larsen & Toubro (L&T)", category: "Metro & Elevated Highway Projects", badge: "Premier EPC", suppliedVolume: "210,000+ MT", projectHighlight: "Urban Metro Rail Viaduct Segment Casting Yards" },
  { id: "cp-12", name: "Prism RMC", category: "High-Performance Concrete Mixes", badge: "RMC Specialist", suppliedVolume: "75,000+ MT", projectHighlight: "Custom Continuous Sieve Curves & Plastering Sand" },
  { id: "cp-13", name: "Infra.Market", category: "Tech-Enabled Material Distribution", badge: "Infra Tech", suppliedVolume: "65,000+ MT", projectHighlight: "Express Logistics Dispatch with Automated Weighbridge Slips" },
  { id: "cp-14", name: "My Home Group", category: "Iconic Residential & Commercial", badge: "Real Estate", suppliedVolume: "150,000+ MT", projectHighlight: "Premium Residential Townships & Structural Raft Slabs" }
];

const defaultMetrics = [
  { value: "14+", label: "Tier-1 Corporate Clients", sublabel: "Long-term strategic contracts" },
  { value: "500K+", label: "Metric Tons Delivered", sublabel: "Certified virgin granite" },
  { value: "100%", label: "On-Time Dispatch Rate", sublabel: "Sub-5 min weighbridge turnaround" },
  { value: "IS 383", label: "Quality Certified", sublabel: "Zero silt & 100% cubical" }
];

export default function ClientPartnersSection() {
  const { data } = useCMS();
  const [selectedPartner, setSelectedPartner] = useState<ClientPartner | null>(null);

  const masterBanner = data?.partnerMasterBanner || "/images/clients/client-partners-grand-hd.png";
  const partnersList = (data?.clientPartners && data.clientPartners.length > 0)
    ? data.clientPartners.filter((p) => p.isPublished !== false)
    : defaultPartners;
  const metrics = (data?.partnerMetrics && data.partnerMetrics.length === 4)
    ? data.partnerMetrics
    : defaultMetrics;

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
            We collaborate with some of the most respected names in the construction industry. At Super Sand, our clients rely on us for superior quality, reliability, and professionalism. These partnerships are the foundation of our continued growth.
          </p>
        </div>

        {/* Master Partner Banner from CMS with Grand Glassmorphic Card Frame */}
        <div className="glass-card glass-card-hover rounded-[36px] p-6 sm:p-8 mb-10 border-2 border-[#087A35]/30 shadow-2xl overflow-hidden relative">
          <div className="relative w-full rounded-2xl overflow-hidden bg-white p-4 sm:p-6 shadow-inner border border-gray-100 flex items-center justify-center group">
            <img
              src={masterBanner}
              alt="Strategic Client Partners"
              className="w-full h-auto max-h-[380px] object-contain object-center group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          {/* Quick Metrics Bar underneath with TYPING MODE Numbers from CMS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-200">
            {metrics.map((metric, mIdx) => (
              <div key={mIdx} className="text-center p-3 bg-white/60 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-2xl sm:text-4xl font-black text-[#087A35] flex items-center justify-center">
                  <TypingNumber value={metric.value} speed={100 + mIdx * 10} />
                </div>
                <div className="text-xs font-bold text-gray-800 mt-1">{metric.label}</div>
                <div className="text-[10px] text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Down Section: Interactive Partner Grid with Typing Numbers & Details */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-gray-600">
              Select any Partner to view Volume & Project Dossier:
            </span>
            <span className="text-[11px] font-bold text-[#087A35] bg-[#E8F5E9] px-3 py-1 rounded-full">
              Clickable Partner Cards
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 mb-10">
            {partnersList.map((partner, index) => (
              <div
                key={partner.id || partner.name}
                onClick={() => setSelectedPartner(partner)}
                className="glass-card p-4 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all duration-300 flex flex-col justify-between group hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087A35] bg-[#E8F5E9] px-2 py-0.5 rounded-full truncate">
                      {partner.badge}
                    </span>
                    {partner.logoUrl ? (
                      <img src={partner.logoUrl} alt={partner.name} className="h-4 sm:h-5 w-auto max-w-[60px] object-contain" />
                    ) : (
                      <Building2 className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#087A35] transition-colors flex-shrink-0" />
                    )}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#17231D] group-hover:text-[#087A35] transition-colors">
                    {partner.name}
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium line-clamp-1 mt-0.5">
                    {partner.category}
                  </div>
                </div>

                {/* Down Section Typing Mode Metric */}
                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-semibold">Volume:</span>
                  <span className="font-extrabold text-[#087A35]">
                    <TypingNumber value={partner.suppliedVolume} speed={70 + index * 5} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Detail Popup Modal */}
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border-2 border-[#087A35]">
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#E8F5E9] text-[#087A35] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedPartner.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium">Strategic Infrastructure Collaboration</span>
              </div>

              {selectedPartner.logoUrl && (
                <div className="mb-3 max-h-12 flex items-center">
                  <img src={selectedPartner.logoUrl} alt={selectedPartner.name} className="h-10 w-auto object-contain" />
                </div>
              )}

              <h3 className="text-2xl font-black text-[#17231D] mb-1">
                {selectedPartner.name}
              </h3>
              <p className="text-xs text-gray-600 mb-4 font-semibold">
                Sector: {selectedPartner.category}
              </p>

              <div className="space-y-3 bg-[#F5FAF6] rounded-2xl p-4 border border-[#087A35]/20 mb-6">
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-[#087A35] tracking-wider mb-0.5">
                    Total Material Supplied
                  </div>
                  <div className="text-xl font-black text-[#17231D]">
                    {selectedPartner.suppliedVolume}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-extrabold uppercase text-[#087A35] tracking-wider mb-0.5">
                    Project Highlight
                  </div>
                  <div className="text-xs text-gray-700 font-medium leading-relaxed">
                    {selectedPartner.projectHighlight}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#087A35]/10 flex items-center gap-2 text-xs font-bold text-[#087A35]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>100% Quality Conformance per IS 383:2016 Standards</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-md transition-colors"
                >
                  <span>Enquire for Corporate Supply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

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
