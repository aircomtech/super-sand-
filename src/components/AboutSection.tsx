"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Eye, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Curved Green Framed Industrial Image Layout */}
          <div className="lg:col-span-5 relative">
            {/* Decorative background curve */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#E8F5E9] rounded-[48px] rounded-tr-[120px] -z-10 transform -rotate-1" />
            
            {/* Main Image with unique curved green boundary */}
            <div className="relative rounded-[40px] rounded-tr-[110px] overflow-hidden border-4 border-[#087A35] shadow-2xl h-[360px] sm:h-[440px]">
              <img
                src="/images/about/about-crusher.jpg"
                alt="Super Sand Crushing Operations"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004B2D]/60 via-transparent to-transparent" />
              
              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/40 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#087A35] text-white flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">
                  18+
                </div>
                <div>
                  <div className="text-[14px] font-black text-[#17231D]">Years Production Experience</div>
                  <div className="text-[12px] text-gray-500 font-medium">Since Commencing in 2008</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Key Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Green Category Tag */}
            <div className="inline-block">
              <span className="text-[#087A35] font-extrabold text-[13px] sm:text-[14px] tracking-[0.2em] uppercase">
                ABOUT SUPER SAND
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight leading-tight">
              Building Trust Since 2006
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-gray-600 font-normal leading-relaxed">
              Super Sand (Sai Super Sand Minerals Pvt. Ltd.) was established in 2006, with production operations commencing in 2008. With nearly 20 years of business history and 18 years of production experience, we are a trusted name in construction materials.
            </p>

            {/* 3 Key Highlights Matching Reference */}
            <div className="space-y-4 pt-2">
              
              {/* Highlight 1: Established */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#F5F9F6] transition-colors border border-transparent hover:border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Calendar className="w-5 h-5 text-[#087A35]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#17231D]">Established in 2006</h4>
                  <p className="text-[13px] text-gray-500 mt-0.5">
                    Nearly two decades of unwavering corporate commitment to infrastructure excellence.
                  </p>
                </div>
              </div>

              {/* Highlight 2: Address */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#F5F9F6] transition-colors border border-transparent hover:border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-5 h-5 text-[#087A35]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#17231D]">Our Address</h4>
                  <p className="text-[13px] text-gray-500 mt-0.5">
                    Lane No. 4, Opposite SBI, Nehru Nagar Colony, Secunderabad – 500026, Telangana, India.
                  </p>
                </div>
              </div>

              {/* Highlight 3: Vision */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-[#F5F9F6] transition-colors border border-transparent hover:border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                  <Eye className="w-5 h-5 text-[#087A35]" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#17231D]">Our Vision</h4>
                  <p className="text-[13px] text-gray-500 mt-0.5">
                    To become a leading and trusted construction materials manufacturer and supplier while building a more sustainable future.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-[#087A35] hover:bg-[#06632B] text-white px-7 py-3.5 rounded-full font-bold text-[14px] tracking-wide shadow-brand transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-0.5 active:translate-y-0"
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
