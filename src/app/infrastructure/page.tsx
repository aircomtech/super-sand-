"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { Factory, Cog, Truck, Scale, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InfrastructurePage() {
  return (
    <MainLayout>
      <InfrastructureContent />
    </MainLayout>
  );
}

function InfrastructureContent({ onOpenEnquiry, onOpenLightbox }: any) {
  const infraAssets = [
    {
      title: "German-Engineered 3-Stage Crushing Plant",
      specs: "350+ Tons Per Hour Capacity",
      desc: "Equipped with primary heavy jaw crushers, secondary cone crushers, and tertiary Vertical Shaft Impactors (VSI) with high-efficiency air classification.",
      image: "/images/hero/hero-slide-2.png",
      tag: "Crushing Complex"
    },
    {
      title: "Heavy Earthmoving & Crawler Fleet",
      specs: "Tata Hitachi 1200, Hyundai 210, CAT & XCMG",
      desc: "Massive captive mining excavator fleet operating continuously to feed high-grade raw granite rock to primary feeding hoppers.",
      image: "/images/gallery/excavator-machinery-fleet.png",
      tag: "Heavy Fleet"
    },
    {
      title: "Automated 100-Ton Weighbridge & Logistics Cabin",
      specs: "Electronic Weighing & Tamper-Proof Slip Generation",
      desc: "State-of-the-art dual weighbridges ensuring prompt gross and tare checks, sub-5 minute turnaround, and real-time dispatch tracking.",
      image: "/images/gallery/weighbridge-dispatch-station.png",
      tag: "Dispatch Automation"
    },
    {
      title: "In-House Mechanical & Hydraulic Workshop Shed",
      specs: "24/7 Plant Engineering & Spares Inventory",
      desc: "Dedicated engineering shed with certified hydraulic specialists, pneumatic torque bays, conveyor spares, and preventative maintenance schedules.",
      image: "/images/gallery/maintenance-workshop.png",
      tag: "Maintenance"
    }
  ];

  return (
    <div className="bg-[#FAFCFA]">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#E8F5E9]/60 via-white to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            MANUFACTURING MIGHT
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Our Infrastructure
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            State-of-the-art manufacturing facilities with advanced technology, heavy excavator fleets, automated classifying screens, and 350+ TPH processing capacity.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#F8FAF8]">
              <div className="text-3xl sm:text-4xl font-black text-[#087A35]">350+</div>
              <div className="text-xs font-bold text-gray-700 mt-1 uppercase tracking-wider">TPH Capacity</div>
              <div className="text-xs text-gray-500">Tons Per Hour Processing</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAF8]">
              <div className="text-3xl sm:text-4xl font-black text-[#087A35]">150K+</div>
              <div className="text-xs font-bold text-gray-700 mt-1 uppercase tracking-wider">Metric Tons / Mo</div>
              <div className="text-xs text-gray-500">Monthly Extraction Rate</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAF8]">
              <div className="text-3xl sm:text-4xl font-black text-[#087A35]">300+</div>
              <div className="text-xs font-bold text-gray-700 mt-1 uppercase tracking-wider">Daily Dispatches</div>
              <div className="text-xs text-gray-500">Truckloads Dispatched Daily</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8FAF8]">
              <div className="text-3xl sm:text-4xl font-black text-[#087A35]">100%</div>
              <div className="text-xs font-bold text-gray-700 mt-1 uppercase tracking-wider">Weighbridge Slips</div>
              <div className="text-xs text-gray-500">Transparent Computerized Slips</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {infraAssets.map((asset, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-6 sm:p-8 shadow-card border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-6">
                <div
                  className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 shadow-md cursor-pointer group"
                  onClick={() => onOpenLightbox && onOpenLightbox({
                    id: `infra-${idx}`,
                    title: asset.title,
                    category: 'Infrastructure',
                    image: asset.image,
                    description: asset.desc
                  })}
                >
                  <img
                    src={asset.image}
                    alt={asset.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#087A35] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {asset.tag}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div className="text-xs font-extrabold text-[#087A35] uppercase tracking-wider">
                  {asset.specs}
                </div>
                <h3 className="text-2xl font-black text-[#17231D]">
                  {asset.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {asset.desc}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className="inline-flex items-center gap-2 bg-[#087A35] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow hover:bg-[#06632B]"
                  >
                    <span>Enquire Supply Capacity</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
