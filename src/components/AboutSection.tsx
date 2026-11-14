"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Eye, CheckCircle2, Factory, ShieldCheck, Truck, Scale } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function AboutSection() {
  const highlights = [
    {
      icon: Calendar,
      title: "Established in 2006",
      desc: "Nearly two decades of unwavering corporate commitment to infrastructure excellence."
    },
    {
      icon: Factory,
      title: "Commercial Production Commenced 2008",
      desc: "18+ continuous years of large-scale automated quarrying and crushing operations."
    },
    {
      icon: ShieldCheck,
      title: "IS 383:2016 & MoRTH Compliant",
      desc: "Every batch tested for crushing, impact, and flakiness index below 15%."
    },
    {
      icon: Scale,
      title: "100-Ton Digital Weighbridge Transparency",
      desc: "Instant gross, tare, and net computerized weight slips for 100% billing accuracy."
    },
    {
      icon: Truck,
      title: "Dedicated GPS-Tracked Tipper Fleet",
      desc: "Over 30 heavy vehicles guaranteeing round-the-clock site concrete pour schedules."
    },
    {
      icon: MapPin,
      title: "Our Corporate Address",
      desc: "Lane No. 4, Opposite SBI, Nehru Nagar Colony, Secunderabad – 500026, Telangana, India."
    },
    {
      icon: Eye,
      title: "Our Sustainable Vision",
      desc: "To be the foremost trusted supplier building eco-friendly foundations for a stronger tomorrow."
    }
  ];

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Curved Green Framed Industrial Image Layout with image copy 39.png */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Animated Green Backdrop Glow */}
            <div className="absolute -top-3 -left-3 w-full h-full bg-[#E8F5E9]/90 rounded-[44px] rounded-tr-[110px] -z-10 transform -rotate-1 transition-transform group-hover:rotate-0 duration-700 shadow-lg" />
            
            <div className="relative rounded-[36px] rounded-tr-[100px] overflow-hidden border-4 border-[#087A35] shadow-2xl h-[380px] sm:h-[480px] bg-gray-900">
              <img
                src="/images/about/about-crusher-grand.png"
                alt="Super Sand Crushing Operations"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003822]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Experience Badge with Animated Counter */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/60 flex items-center gap-4 transition-transform group-hover:-translate-y-1 duration-500">
                <div className="w-14 h-14 rounded-xl bg-[#087A35] text-white flex items-center justify-center text-2xl font-black flex-shrink-0 shadow-md">
                  <AnimatedCounter end={18} suffix="+" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#17231D]">Years Production Experience</div>
                  <div className="text-xs text-gray-500 font-medium">Since Commercial Production in 2008</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Rich Scrolling Moments of Content */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-block">
              <span className="text-[#087A35] font-extrabold text-xs tracking-[0.25em] uppercase border-b-2 border-[#087A35] pb-0.5">
                ABOUT SUPER SAND
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight leading-[1.15]">
              Building Trust Since <span className="text-[#087A35]"><AnimatedCounter end={2006} duration={1200} /></span>
            </h2>

            <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed">
              Super Sand (Sai Super Sand Minerals Pvt. Ltd.) was established in 2006, with commercial production operations commencing in 2008. With nearly 20 years of business history and 18 years of production experience, we stand as Telangana’s premier producer of engineered aggregates and eco-friendly manufactured sand.
            </p>

            {/* 7 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.slice(0, 6).map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl glass-card transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                      <IconComp className="w-4 h-4 text-[#087A35]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#17231D] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-600 mt-0.5 leading-snug line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 7th Feature: Vision Banner & CTA */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#E8F5E9]/90 to-white/90 border border-[#087A35]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#087A35] text-white flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-black text-[#004B2D] uppercase tracking-wider">Our Sustainable Vision</h5>
                  <p className="text-xs text-gray-700">100% eco-friendly sand preserving natural river systems.</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2.5 rounded-full font-bold text-xs tracking-wide shadow-brand transition-all hover:scale-105 active:scale-95 flex-shrink-0"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
