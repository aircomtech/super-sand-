"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialProjects } from '@/lib/data';
import { Project } from '@/lib/types';
import { ArrowRight, CheckCircle2, ChevronRight, Building2, MapPin, ShieldCheck, ZoomIn, Phone, MessageSquare, Award } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = initialProjects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <MainLayout>
        <div className="py-28 text-center bg-transparent">
          <h1 className="text-2xl font-bold mb-3 text-[#17231D]">Project Showcase Not Found</h1>
          <Link href="/projects" className="text-[#087A35] font-bold underline text-sm">
            Return to Projects Portfolio
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ProjectDetailContent project={project} />
    </MainLayout>
  );
}

interface ProjectDetailContentProps {
  project: Project;
  onOpenEnquiry?: () => void;
  onOpenLightbox?: (item: any) => void;
}

function ProjectDetailContent({ project, onOpenEnquiry, onOpenLightbox }: ProjectDetailContentProps) {
  const whatsappMsg = `Hello Super Sand, I am inquiring about project supply specifications similar to ${project.title}.`;
  const whatsappUrl = `https://wa.me/919533895920?text=${encodeURIComponent(whatsappMsg)}`;

  const gallery = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.image, "/images/gallery/weighbridge-dispatch-station.png", "/images/gallery/wheel-loader-loading-truck.png", "/images/gallery/dump-truck-haul-road.png"];

  const projectSpecs = [
    { label: "Infrastructure Sector", value: project.category },
    { label: "Project Location", value: project.location },
    { label: "Total Volume Delivered", value: project.volumeSupplied || "75,000+ Metric Tons" },
    { label: "Contract Period", value: project.duration || "Multi-Month Continuous Supply" }
  ];

  return (
    <div className="bg-transparent">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-[#087A35]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/projects" className="hover:text-[#087A35]">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#087A35] font-bold">{project.title}</span>
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
                  id: project.id,
                  title: project.title,
                  category: 'Projects',
                  image: project.image,
                  description: project.description
                })}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#087A35] px-3 py-1 rounded-full shadow-md">
                    {project.category}
                  </span>
                  <span className="text-xs bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                    <ZoomIn className="w-3 h-3 text-[#F4C928]" /> Click to Enlarge
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Project Dossier */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase">
                LANDMARK PROJECT SUPPLY CASE
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#17231D] tracking-tight leading-tight">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                <MapPin className="w-4 h-4 text-[#087A35]" />
                <span>{project.location}</span>
                <span className="text-gray-400">|</span>
                <Building2 className="w-4 h-4 text-[#087A35]" />
                <span>{project.clientOrSector}</span>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                {project.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request Project Rate Contract</span>
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-gray-800 border border-gray-200 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm shadow-sm transition-all hover:border-[#087A35]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#087A35]" />
                  <span>WhatsApp Project Head</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROJECT SPECIFICATIONS */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-6 sm:p-10">
            <h2 className="text-xl sm:text-2xl font-black text-[#17231D] mb-6 flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-[#087A35]" />
              Supply Scope & Delivered Metrics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectSpecs.map((spec, i) => (
                <div key={i} className="bg-white/80 rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {spec.label}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-[#17231D]">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/80">
              <h3 className="text-sm font-bold text-[#087A35] uppercase tracking-wider mb-3">
                Materials Engineered & Supplied:
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.materialsSupplied.map((mat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-[#E8F5E9] text-[#087A35] font-bold text-xs px-3.5 py-1.5 rounded-xl border border-[#087A35]/20 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE & LOGISTICS COMMITMENT */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-3 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#087A35]" />
              </div>
              <h3 className="text-base font-bold text-[#17231D] mb-1.5">
                Batch Quality Consistency
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every batch certified with lab sieve test reports before dispatch, guaranteeing zero contamination and optimal strength.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-3 shadow-sm">
                <Award className="w-5 h-5 text-[#087A35]" />
              </div>
              <h3 className="text-base font-bold text-[#17231D] mb-1.5">
                Guaranteed Daily Supply
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dedicated tipper fleet allocations preventing casting stoppages or concrete mixer idle time on fast-track sites.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mb-3 shadow-sm">
                <Building2 className="w-5 h-5 text-[#087A35]" />
              </div>
              <h3 className="text-base font-bold text-[#17231D] mb-1.5">
                Weighbridge Transparency
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Digital tamper-proof gross and tare slips with time stamps and vehicle CCTV capture on every single delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT PHOTO GALLERY */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase block mb-1">
                PROJECT VISUAL FOOTPRINT
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#17231D]">
                Site & Operational Photography
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#087A35] hover:underline"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md border-2 border-white cursor-pointer group"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  id: `${project.id}-gal-${idx}`,
                  title: `${project.title} - Photo ${idx + 1}`,
                  category: 'Projects',
                  image: imgUrl,
                  description: project.description
                })}
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} photo ${idx + 1}`}
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
