"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { Leaf, Droplets, TreePine, ShieldCheck, Sun, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SustainabilityPage() {
  return (
    <MainLayout>
      <SustainabilityContent />
    </MainLayout>
  );
}

function SustainabilityContent({ onOpenEnquiry, onOpenLightbox }: any) {
  const initiatives = [
    {
      icon: Leaf,
      title: "Saving Natural River Ecosystems",
      desc: "By manufacturing precision sand from hard rock minerals, Super Sand directly substitutes river sand, stopping riverbed erosion and safeguarding aquatic biodiversity.",
      image: "/images/gallery/manufactured-sand-peak.png",
      tag: "River Conservation"
    },
    {
      icon: Droplets,
      title: "Dedicated Haul Road Dust Suppression",
      desc: "We operate dedicated high-capacity water sprinkler tanker trucks (as shown in our fleet operations) that mist internal haul roads and plant areas continuously.",
      image: "/images/gallery/water-tanker-dust-control.png",
      tag: "Air Quality Control"
    },
    {
      icon: TreePine,
      title: "Green Belt Plantation & Afforestation",
      desc: "Extensive native foliage and tree belts have been planted around our crushing installations to act as natural acoustic buffers and carbon offset sinks.",
      image: "/images/gallery/corporate-site-office.png",
      tag: "Green Belt"
    },
    {
      icon: Droplets,
      title: "Rainwater Harvesting & Closed-Loop Recycling",
      desc: "Runoff water from quarry basins is channeled into specialized settling ponds, where sediment is filtered and water recycled back into air classifiers.",
      image: "/images/gallery/aerial-quarry-operations.png",
      tag: "Water Management"
    }
  ];

  return (
    <div className="bg-[#FAFCFA]">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#E8F5E9]/60 via-white to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            RESPONSIBLE MINING & MANUFACTURING
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Our Commitment to Sustainability
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
            Building a greener future with responsible, eco-friendly practices that protect river ecosystems, eliminate fugitive dust, and preserve natural resources.
          </p>
        </div>
      </section>

      {/* Main Feature Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] bg-gradient-to-br from-[#004B2D] to-[#003822] text-white p-8 sm:p-12 lg:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#F4C928] font-black text-xs uppercase tracking-widest">
                WHY M-SAND IS THE GREEN CHOICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                Manufactured Sand: The 100% Sustainable River Sand Alternative
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Excessive dredging of river sand destroys groundwater tables, collapses river banks, and threatens local agriculture. Super Sand’s manufactured sand provides superior compressive concrete strength without mining a single grain from natural waterways.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F4C928]">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C928]" />
                  <span>Zero Riverbed Depletion</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#F4C928]">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C928]" />
                  <span>Zero Silt or Organic Salts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#F4C928]">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C928]" />
                  <span>8-12% Cement Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#F4C928]">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C928]" />
                  <span>Lower Carbon Footprint</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] border-4 border-white/20 shadow-xl">
                <img
                  src="/images/sustainability/sustainability-seedling.jpg"
                  alt="Sustainable Future"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Initiatives Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest block mb-2">
              ENVIRONMENTAL SAFEGUARDS
            </span>
            <h3 className="text-3xl font-black text-[#17231D]">
              Our 4 Pillars of Eco-Compliance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="rounded-2xl overflow-hidden aspect-video bg-gray-100 mb-5 shadow-sm cursor-pointer"
                      onClick={() => onOpenLightbox && onOpenLightbox({
                        id: `sust-${idx}`,
                        title: item.title,
                        category: 'Sustainability',
                        image: item.image,
                        description: item.desc
                      })}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0">
                        <IconComp className="w-4 h-4 text-[#087A35]" />
                      </div>
                      <h4 className="text-lg font-bold text-[#17231D]">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
