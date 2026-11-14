"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialSiteInfo } from '@/lib/data';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Award, ShieldCheck, Target, Eye, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutPageContent />
    </MainLayout>
  );
}

function AboutPageContent({ onOpenEnquiry, onOpenLightbox }: any) {
  return (
    <div className="bg-transparent">
      
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-white/90 via-white/80 to-transparent py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase block mb-2">
            ABOUT SAI SUPER SAND MINERALS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-3">
            Building Trust Since <span className="text-[#087A35]"><AnimatedCounter end={2006} duration={1200} /></span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            With nearly 20 years of business history and 18 years of continuous production experience, Sai Super Sand Minerals Pvt. Ltd. is South India’s trusted powerhouse in precision construction materials.
          </p>
        </div>
      </section>

      {/* Main Story & Operations Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
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
                  className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                  <span className="text-white text-xs font-bold bg-[#087A35] px-3 py-1.5 rounded-full">
                    Sai Super Sand Minerals Administrative Facility
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Journey and Overview */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest">
                NEARLY TWO DECADES OF EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17231D] leading-tight">
                From Raw Granite to Landmark Corridors
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {initialSiteInfo.legalName} was incorporated in 2006, with production operations commencing in 2008. Over the past 18 years of continuous quarrying and mechanized crushing, we have grown into an industry benchmark for aggregates, manufactured sand, and sub-base solutions.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                By investing heavily in modern high-capacity crushing equipment, computerized weighbridge logistics, and dedicated environmental suppression fleets, we ensure builders and infrastructure giants receive consistent, on-spec materials without batch fluctuations.
              </p>

              {/* Key Milestones with Animated Counters */}
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#087A35]">
                    <AnimatedCounter end={2006} duration={1200} />
                  </div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Company Established</div>
                  <div className="text-[11px] text-gray-500">Founded with vision for sustainable aggregates</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#087A35]">
                    <AnimatedCounter end={18} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Years Commercial Production</div>
                  <div className="text-[11px] text-gray-500">Continuous operations since 2008</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#17231D] mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-medium">
                "{initialSiteInfo.vision}"
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#17231D] mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-medium">
                "{initialSiteInfo.mission}"
              </p>
            </div>
          </div>

          {/* Core Values 8 Items */}
          <div className="rounded-[36px] bg-[#004B2D] text-white p-6 sm:p-10 shadow-2xl mb-12">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[#F4C928] font-bold text-xs uppercase tracking-widest block mb-1">
                FOUNDATIONAL PILLARS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Our Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {initialSiteInfo.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-3 hover:bg-white/15 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#F4C928] text-[#004B2D] flex items-center justify-center font-black text-xs flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
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
