"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import AnimatedCounter from '@/components/AnimatedCounter';
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
      slug: "crushing-complex",
      title: "German-Engineered 3-Stage Crushing Plant",
      specs: "350+ Tons Per Hour Capacity",
      desc: "Equipped with primary heavy jaw crushers, secondary cone crushers, and tertiary Vertical Shaft Impactors (VSI) with high-efficiency air classification.",
      image: "/images/hero/hero-slide-2.png",
      tag: "Crushing Complex"
    },
    {
      slug: "excavator-fleet",
      title: "Heavy Earthmoving & Crawler Fleet",
      specs: "Tata Hitachi 1200, Hyundai 210, CAT & XCMG",
      desc: "Massive captive mining excavator fleet operating continuously to feed high-grade raw granite rock to primary feeding hoppers.",
      image: "/images/gallery/excavator-machinery-fleet.png",
      tag: "Heavy Fleet"
    },
    {
      slug: "weighbridge-station",
      title: "Automated 100-Ton Weighbridge & Logistics Cabin",
      specs: "Electronic Weighing & Tamper-Proof Slip Generation",
      desc: "State-of-the-art dual weighbridges ensuring prompt gross and tare checks, sub-5 minute turnaround, and real-time dispatch tracking.",
      image: "/images/gallery/weighbridge-dispatch-station.png",
      tag: "Dispatch Automation"
    },
    {
      slug: "spares-workshop",
      title: "In-House Mechanical & Hydraulic Workshop Shed",
      specs: "24/7 Plant Engineering & Spares Inventory",
      desc: "Dedicated engineering shed with certified hydraulic specialists, pneumatic torque bays, conveyor spares, and preventative maintenance schedules.",
      image: "/images/gallery/maintenance-workshop.png",
      tag: "Maintenance"
    },
    {
      slug: "plant-capacity",
      title: "High-Capacity Radial Stacking Conveyor Network",
      specs: "Automated Weather-Protected Stockpiling",
      desc: "High-discharge radial conveyors segregating finished aggregate fractions into expansive stockpiles to buffer project surges.",
      image: "/images/gallery/aggregate-stockpile-conveyor.png",
      tag: "Material Handling"
    }
  ];

  return (
    <div className="bg-transparent">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white/90 via-white/80 to-transparent py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase block mb-2">
            MANUFACTURING MIGHT
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-3">
            Our Infrastructure
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
            State-of-the-art manufacturing facilities with advanced technology, heavy excavator fleets, automated classifying screens, and 350+ TPH processing capacity.
          </p>
        </div>
      </section>

      {/* Stats Bar with Animated Counter Numbers in Typing/Counting Mode */}
      <section className="py-6 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">
                <AnimatedCounter end={350} suffix="+" />
              </div>
              <div className="text-[11px] font-bold text-gray-700 mt-1 uppercase tracking-wider">TPH Capacity</div>
              <div className="text-[10px] text-gray-500">Tons Per Hour Processing</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">
                <AnimatedCounter end={150} suffix="K+" />
              </div>
              <div className="text-[11px] font-bold text-gray-700 mt-1 uppercase tracking-wider">Metric Tons / Mo</div>
              <div className="text-[10px] text-gray-500">Monthly Extraction Rate</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">
                <AnimatedCounter end={300} suffix="+" />
              </div>
              <div className="text-[11px] font-bold text-gray-700 mt-1 uppercase tracking-wider">Daily Dispatches</div>
              <div className="text-[10px] text-gray-500">Truckloads Dispatched Daily</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-gray-100">
              <div className="text-2xl sm:text-3xl font-black text-[#087A35]">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-[11px] font-bold text-gray-700 mt-1 uppercase tracking-wider">Weighbridge Slips</div>
              <div className="text-[10px] text-gray-500">Transparent Computerized Slips</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {infraAssets.map((asset, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-5 sm:p-7 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
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
                  <div className="absolute top-3 left-3 bg-[#087A35] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {asset.tag}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-2.5">
                <div className="text-[11px] font-extrabold text-[#087A35] uppercase tracking-wider">
                  {asset.specs}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#17231D]">
                  {asset.title}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {asset.desc}
                </p>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  <Link
                    href={`/infrastructure/${asset.slug}`}
                    className="inline-flex items-center gap-1.5 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2 rounded-full font-bold text-xs shadow transition-all hover:scale-105"
                  >
                    <span>View Dedicated Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className="inline-flex items-center gap-1.5 bg-white/90 hover:bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-full font-semibold text-xs shadow-sm"
                  >
                    <span>Enquire Capacity</span>
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
