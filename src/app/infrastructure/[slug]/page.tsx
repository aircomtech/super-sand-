"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialInfrastructureItems } from '@/lib/data';
import { InfrastructureItem } from '@/lib/types';
import { useCMS } from '@/context/CMSContext';
import { ArrowRight, CheckCircle2, ChevronRight, Factory, Cog, ShieldCheck, Scale, ZoomIn, Phone, MessageSquare } from 'lucide-react';

export default function InfrastructureDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { data } = useCMS();
  const items = data?.infrastructureItems && data.infrastructureItems.length > 0 ? data.infrastructureItems : initialInfrastructureItems;
  const item = items.find((i) => i.slug === slug || i.id === slug) || initialInfrastructureItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <MainLayout>
        <div className="py-28 text-center bg-transparent">
          <h1 className="text-2xl font-bold mb-3 text-[#17231D]">Infrastructure Facility Not Found</h1>
          <Link href="/infrastructure" className="text-[#087A35] font-bold underline text-sm">
            Return to Infrastructure Overview
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <InfrastructureDetailContent item={item} />
    </MainLayout>
  );
}

interface InfrastructureDetailContentProps {
  item: InfrastructureItem;
  onOpenEnquiry?: () => void;
  onOpenLightbox?: (item: any) => void;
}

function InfrastructureDetailContent({ item, onOpenEnquiry, onOpenLightbox }: InfrastructureDetailContentProps) {
  const whatsappMsg = `Hello Super Sand, I am inquiring about plant capacity and infrastructure specifications for ${item.title}.`;
  const whatsappUrl = `https://wa.me/919533895920?text=${encodeURIComponent(whatsappMsg)}`;

  const workflowSteps = [
    {
      step: "01",
      title: "Automated Continuous Monitoring",
      desc: "PLC electrical sensors continuously track motor load, vibration, and feed rates to prevent equipment bottlenecks."
    },
    {
      step: "02",
      title: "Rigorous Precision Calibration",
      desc: "Routine weekly calibration of load cells, vibrating screens, and crusher jaws to maintain exact particle sizing per IS 383."
    },
    {
      step: "03",
      title: "Zero-Downtime Spares Redundancy",
      desc: "On-site mechanical workshop housing immediate replacements for high-wear manganese liners, bearings, and conveyor rollers."
    },
    {
      step: "04",
      title: "Environmental & Acoustic Shielding",
      desc: "Dust containment enclosures and high-pressure water sprinkler lines safeguarding plant personnel and surrounding green belts."
    }
  ];

  return (
    <div className="bg-transparent">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-[#087A35]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/infrastructure" className="hover:text-[#087A35]">Infrastructure</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#087A35] font-bold">{item.title}</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Featured Image */}
            <div className="lg:col-span-6">
              <div
                className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white cursor-pointer group"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  id: item.id,
                  title: item.title,
                  category: 'Infrastructure',
                  image: item.heroImage,
                  description: item.desc
                })}
              >
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#087A35] px-3 py-1 rounded-full shadow-md">
                    {item.tag}
                  </span>
                  <span className="text-xs bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                    <ZoomIn className="w-3 h-3 text-[#F4C928]" /> Click to Enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical Overview */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase">
                SUPER SAND INFRASTRUCTURE DOSSIER
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#17231D] tracking-tight leading-tight">
                {item.title}
              </h1>
              <p className="text-sm font-semibold text-[#087A35] bg-[#E8F5E9] inline-block px-3 py-1 rounded-lg">
                Verified Benchmark: {item.specs}
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                {item.desc}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire Operational Capacity</span>
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-gray-800 border border-gray-200 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-sm transition-all hover:border-[#087A35]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#087A35]" />
                  <span>WhatsApp Engineering Desk</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS & PARAMETERS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#17231D] mb-6 flex items-center gap-2.5">
              <Cog className="w-6 h-6 text-[#087A35]" />
              Engineering Parameters & Verified Ratings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(item.parameters).map(([paramName, paramValue], i) => (
                <div key={i} className="bg-white/80 rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {paramName}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#17231D]">
                    {paramValue}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/80">
              <h3 className="text-sm font-bold text-[#087A35] uppercase tracking-wider mb-3">
                Key Technical Highlights:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.technicalFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#087A35] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL WORKFLOW */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase block mb-1">
              OPERATIONAL PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17231D]">
              Standard Operating Procedures & Reliability
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((ws, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black text-[#087A35]/30 mb-2">
                    {ws.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#17231D] mb-1.5">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGH-RESOLUTION PHOTO GALLERY */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase block mb-1">
                ON-SITE VISUAL ARCHIVE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#17231D]">
                Machinery & Field Operations Gallery
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#087A35] hover:underline"
            >
              <span>View All 22 On-Site Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {item.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md border-2 border-white cursor-pointer group"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  id: `${item.id}-gal-${idx}`,
                  title: `${item.title} - Operational View ${idx + 1}`,
                  category: 'Infrastructure',
                  image: imgUrl,
                  description: item.desc
                })}
              >
                <img
                  src={imgUrl}
                  alt={`${item.title} photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT / CALL-TO-ACTION */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
