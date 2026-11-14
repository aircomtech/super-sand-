"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, Users, Shield, Leaf, Lightbulb, Handshake } from 'lucide-react';

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Trophy,
      title: "Quality & Excellence",
      desc: "Zero-silt mechanical grading meeting rigid IS 383:2016 standards."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      desc: "Tailored aggregate blends suited for high-rise, infrastructure & residential builders."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      desc: "Computerized weighbridge receipts and traceable batch test reports."
    },
    {
      icon: Leaf,
      title: "Sustainability & Environmental",
      desc: "Protecting natural riverbeds with eco-responsible manufactured sand."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      desc: "German 3-stage crushing systems & automated air-wash classifying."
    },
    {
      icon: Handshake,
      title: "Reliability & Long-Term",
      desc: "Uninterrupted 24/7 dedicated fleet supply since 2008."
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-[#004B2D] via-[#004227] to-[#003822] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Decorative Leaf / Grain Watermark */}
        <div className="absolute -right-10 -bottom-10 w-96 h-96 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M40,-60C52,-52,62,-40,68,-26C74,-12,76,4,72,18C68,32,58,44,46,54C34,64,20,72,4,74C-12,76,-28,72,-42,63C-56,54,-68,40,-74,24C-80,8,-80,-10,-73,-25C-66,-40,-52,-52,-38,-60C-24,-68,-8,-72,5,-71C18,-70,28,-68,40,-60Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#F4C928] text-xs font-extrabold tracking-[0.25em] uppercase">
              <span>—</span>
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Driven by Quality.<br />
              <span className="text-[#F4C928]">Built on Trust.</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] text-gray-200/90 font-normal leading-relaxed">
              We are committed to delivering excellence in every grain of sand we provide. Our continuous laboratory testing and prompt logistics ensure your construction projects stand the test of time.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#F4C928] hover:bg-[#E2B81C] text-[#003822] px-6 py-3 rounded-full font-bold text-[13px] tracking-wide transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <span>Our Strength</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Attractive Icon-Based Feature Items */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-7">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/15 text-[#F4C928] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#F4C928] group-hover:text-[#004B2D] transition-all shadow-sm">
                      <IconComponent className="w-6 h-6 transition-colors" />
                    </div>
                    <h3 className="text-[14px] font-bold text-white group-hover:text-[#F4C928] transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-gray-300/80 leading-relaxed hidden sm:block">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
