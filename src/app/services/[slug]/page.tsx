"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialServices } from '@/lib/data';
import { Service } from '@/lib/types';
import { useCMS } from '@/context/CMSContext';
import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck, Factory, Truck, Wrench, ZoomIn, MessageSquare, Phone } from 'lucide-react';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { data } = useCMS();
  const services = data?.services && data.services.length > 0 ? data.services : initialServices;
  const service = services.find((s) => s.slug === slug || s.id === slug) || initialServices.find((s) => s.slug === slug);

  if (!service) {
    return (
      <MainLayout>
        <div className="py-28 text-center">
          <h1 className="text-2xl font-bold mb-3">Service Dossier Not Found</h1>
          <Link href="/services" className="text-[#087A35] font-bold underline text-sm">
            Return to All Services
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ServiceDetailContent service={service} />
    </MainLayout>
  );
}

interface ServiceDetailProps {
  service: Service;
  onOpenEnquiry?: () => void;
  onOpenLightbox?: (item: any) => void;
}

function ServiceDetailContent({ service, onOpenEnquiry, onOpenLightbox }: ServiceDetailProps) {
  const whatsappMsg = `Hello Super Sand, I am inquiring about operational capacity and services for ${service.title}.`;
  const whatsappUrl = `https://wa.me/919533895920?text=${encodeURIComponent(whatsappMsg)}`;

  const workflowSteps = [
    {
      step: "01",
      title: "Geological Extraction & Planning",
      desc: "Systematic multi-bench extraction from captive virgin granite deposits ensuring rock hardness and zero weathered contamination."
    },
    {
      step: "02",
      title: "Precision Multi-Stage Processing",
      desc: "Primary jaw crushing followed by secondary cone reduction and tertiary Vertical Shaft Impactor (VSI) rock-on-rock cubical shaping."
    },
    {
      step: "03",
      title: "Classification & Silt Separation",
      desc: "High-frequency double-deck screening with dry air-wash classifiers to remove micro-silts and produce continuous grading per IS 383."
    },
    {
      step: "04",
      title: "Automated Weighing & Express Fleet Delivery",
      desc: "Sub-5-minute vehicle turnaround utilizing 100-ton computerized electronic weighbridges and dedicated tipper fleet."
    }
  ];

  return (
    <div className="bg-transparent">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-[#087A35]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/services" className="hover:text-[#087A35]">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#087A35] font-bold">{service.title}</span>
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
                  id: service.id,
                  title: service.title,
                  category: service.category as any,
                  image: service.mainImage,
                  description: service.description
                })}
              >
                <img
                  src={service.mainImage || '/images/gallery/excavator-mining-face.png'}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/gallery/excavator-mining-face.png';
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#087A35] text-white text-xs font-black px-3 py-1 rounded-full shadow">
                  {service.category}
                </div>
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-1.5 bg-white text-[#17231D] px-4 py-2 rounded-full font-bold text-xs shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#087A35]" />
                    <span>Expand High-Res Photo</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Overview Dossier */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest bg-[#E8F5E9] px-3 py-1 rounded-full inline-block">
                SAI SUPER SAND OPERATIONAL CAPABILITY
              </span>

              <h1 className="text-3xl sm:text-4xl font-black text-[#17231D] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-sm font-bold text-[#087A35]">
                {service.tagline}
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 text-xs font-bold text-[#004B2D] shadow-sm">
                ⚡ <strong>Capacity & Volume:</strong> {service.capacityOrSpecs}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-3 rounded-full font-bold text-xs shadow-brand transition-all hover:scale-105"
                >
                  <span>Request Operational Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-full font-bold text-xs shadow transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL WORKFLOW & METHODOLOGY (4 Scrolling Steps) */}
      <section className="py-12 bg-white/80 backdrop-blur-md border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest block mb-1">
              ENGINEERED PROTOCOLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17231D]">
              Operational Workflow & Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((ws, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 border border-gray-100 space-y-2">
                <span className="text-2xl font-black text-[#087A35] block">
                  {ws.step}
                </span>
                <h4 className="text-sm font-bold text-[#17231D]">
                  {ws.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY OPERATIONAL HIGHLIGHTS (Checklist & Equipment) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest">
                VERIFIED PERFORMANCE METRICS
              </span>
              <h3 className="text-2xl font-black text-[#17231D]">
                Why Sai Super Sand Leads in {service.category}
              </h3>
              
              <div className="space-y-3 pt-2">
                {service.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#087A35] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-semibold">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#004B2D] text-white rounded-2xl p-6 space-y-3 shadow-xl">
              <h4 className="text-base font-black text-[#F4C928]">
                Quality & Compliance Assurance
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed">
                All production activities operate strictly in compliance with the Bureau of Indian Standards (IS 383:2016), Directorate General of Mines Safety (DGMS), and State Environmental Pollution Control regulations.
              </p>
              <div className="pt-2 text-xs font-bold text-[#F4C928]">
                ✓ IS 383:2016 Specification for Coarse & Fine Aggregates<br />
                ✓ MoRTH Section 400 Compliant Sub-Base Blends
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ON-SITE PHOTO GALLERY FOR THIS SERVICE */}
      <section className="py-12 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest block mb-1">
                ON-SITE ARCHIVE
              </span>
              <h3 className="text-2xl font-black text-[#17231D]">
                Operational Visuals & Equipment
              </h3>
            </div>
            <Link
              href="/services#gallery"
              className="text-xs font-bold text-[#087A35] hover:underline flex items-center gap-1"
            >
              <span>View All 22 Site Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {service.galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => onOpenLightbox && onOpenLightbox({
                  id: `${service.id}-gal-${i}`,
                  title: `${service.title} - Operational View ${i + 1}`,
                  category: service.category as any,
                  image: img,
                  description: service.tagline
                })}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/gallery/excavator-mining-face.png';
                  }}
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT & QUOTATION CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
