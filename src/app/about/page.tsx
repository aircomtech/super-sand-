"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialSiteInfo } from '@/lib/data';
import { Award, ShieldCheck, Target, Eye, Compass, Calendar, CheckCircle2, Factory, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutPageContent />
    </MainLayout>
  );
}

function AboutPageContent({ onOpenEnquiry, onOpenLightbox }: any) {
  return (
    <div className="bg-[#FAFCFA]">
      
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-[#E8F5E9]/60 via-white to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            ABOUT SAI SUPER SAND MINERALS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Building Trust Since <span className="text-[#087A35]">2006</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            With nearly 20 years of business history and 18 years of continuous production experience, Sai Super Sand Minerals Pvt. Ltd. is South India’s trusted powerhouse in precision construction materials.
          </p>
        </div>
      </section>

      {/* Main Story & Operations Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left: Administrative Site Office photo */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-pointer group" onClick={() => onOpenLightbox && onOpenLightbox({
                id: 'gal-16',
                title: 'Sai Super Sand Administrative Site Office',
                category: 'About',
                image: '/images/gallery/corporate-site-office.png',
                description: 'Super Sand site administration and operations hub surrounded by lush greenery.'
              })}>
                <img
                  src="/images/gallery/corporate-site-office.png"
                  alt="Sai Super Sand Administrative Office"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-bold bg-[#087A35] px-3 py-1.5 rounded-full">
                    Sai Super Sand Minerals Administrative Facility
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Journey and Overview */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest">
                NEARLY TWO DECADES OF EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#17231D] leading-tight">
                From Raw Granite to Landmark Corridors
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {initialSiteInfo.legalName} was incorporated in 2006, with production operations commencing in 2008. Over the past 18 years of continuous quarrying and mechanized crushing, we have grown into an industry benchmark for aggregates, manufactured sand, and sub-base solutions.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                By investing heavily in modern high-capacity crushing equipment, computerized weighbridge logistics, and dedicated environmental suppression fleets, we ensure builders and infrastructure giants receive consistent, on-spec materials without batch fluctuations.
              </p>

              {/* Key Milestones */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-[#087A35]">2006</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Company Established</div>
                  <div className="text-xs text-gray-500">Founded with vision for sustainable aggregates</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-3xl font-black text-[#087A35]">2008</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Commercial Production</div>
                  <div className="text-xs text-gray-500">18 continuous years of quarry operations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#17231D] mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                "{initialSiteInfo.vision}"
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#17231D] mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                "{initialSiteInfo.mission}"
              </p>
            </div>

          </div>

          {/* Core Values */}
          <div className="rounded-[40px] bg-[#004B2D] text-white p-8 sm:p-14 shadow-2xl mb-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#F4C928] font-bold text-xs uppercase tracking-widest block mb-2">
                FOUNDATIONAL PILLARS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black">
                Our Core Values
              </h3>
              <p className="text-gray-200 text-sm mt-2">
                Principles that guide every blast, every grain, and every client relationship.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialSiteInfo.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex items-center gap-4 hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F4C928] text-[#004B2D] flex items-center justify-center font-black text-sm flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <span className="text-base font-bold text-white">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
