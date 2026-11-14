"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Curved Green Framed Industrial Image Layout */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-3 -left-3 w-full h-full bg-[#E8F5E9]/80 rounded-[44px] rounded-tr-[110px] -z-10 transform -rotate-1" />
            
            <div className="relative rounded-[36px] rounded-tr-[100px] overflow-hidden border-4 border-[#087A35] shadow-2xl h-[340px] sm:h-[400px]">
              <img
                src="/images/about/about-crusher.jpg"
                alt="Super Sand Crushing Operations"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004B2D]/60 via-transparent to-transparent" />
              
              {/* Floating Experience Badge with Animated Counter */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/50 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#087A35] text-white flex items-center justify-center text-xl flex-shrink-0 shadow-md">
                  <AnimatedCounter end={18} suffix="+" />
                </div>
                <div>
                  <div className="text-[13px] font-black text-[#17231D]">Years Production Experience</div>
                  <div className="text-[11px] text-gray-500 font-medium">Since Commencing in 2008</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Key Highlights */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="inline-block">
              <span className="text-[#087A35] font-extrabold text-xs tracking-[0.2em] uppercase">
                ABOUT SUPER SAND
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#17231D] tracking-tight leading-tight">
              Building Trust Since <AnimatedCounter end={2006} duration={1200} />
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Super Sand (Sai Super Sand Minerals Pvt. Ltd.) was established in 2006, with production operations commencing in 2008. With nearly 20 years of business history and 18 years of production experience, we are a trusted name in construction materials.
            </p>

            {/* 3 Key Highlights Matching Reference */}
            <div className="space-y-3 pt-1">
              
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Calendar className="w-5 h-5 text-[#087A35]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#17231D]">Established in 2006</h4>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    Nearly two decades of unwavering corporate commitment to infrastructure excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-[#087A35]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#17231D]">Our Address</h4>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    Lane No. 4, Opposite SBI, Nehru Nagar Colony, Secunderabad – 500026, Telangana, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Eye className="w-5 h-5 text-[#087A35]" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#17231D]">Our Vision</h4>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    To become a leading and trusted construction materials manufacturer and supplier while building a more sustainable future.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-brand transition-all hover:scale-105 active:scale-95"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
