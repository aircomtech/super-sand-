"use client";

import React from 'react';
import Link from 'next/link';
import { Award, Briefcase, GraduationCap, CheckCircle2, Linkedin, Mail } from 'lucide-react';

interface Leader {
  name: string;
  designation: string;
  roleTitle: string;
  image: string;
  bio: string;
  qualifications: string;
  focusAreas: string[];
}

const leaders: Leader[] = [
  {
    name: "Dr. Ramachandra Reddy",
    designation: "Managing Director",
    roleTitle: "Visionary Founder & Strategic Pioneer",
    image: "/images/leadership/md-ramachandra.png",
    bio: "Founding pioneer behind Sai Super Sand Minerals Pvt. Ltd. With over two decades of industrial leadership, he spearheaded the transition from river sand mining to eco-friendly manufactured sand (M-Sand) and advanced cubical granite aggregates in South India.",
    qualifications: "Ph.D. in Industrial Management & Geological Mining",
    focusAreas: [
      "Strategic Corporate Direction",
      "Ecological & Environmental Governance",
      "Technological Modernization",
      "National Infrastructure Partnerships"
    ]
  },
  {
    name: "Dr. P. Krishna Reddy",
    designation: "Director of Operations",
    roleTitle: "Mining Operations & Plant Engineering Head",
    image: "/images/leadership/ops-krishna.png",
    bio: "Directs complete quarry extraction, 3-stage mechanical crushing circuits, and automated dispatch operations. Known for zero-downtime maintenance paradigms and strict adherence to IS 383:2016 quality grading curves.",
    qualifications: "Ph.D. in Mining Engineering & Mechanical Systems",
    focusAreas: [
      "Mechanized Quarry Deep Mining",
      "VSI & Cone Crushing Optimization",
      "Heavy Equipment Fleet Management",
      "Zero-Lost-Time Workplace Safety"
    ]
  },
  {
    name: "Mrs. Meghana Reddy",
    designation: "Director of Finance",
    roleTitle: "Financial Governance & Commercial Strategy",
    image: "/images/leadership/fin-meghana.png",
    bio: "Commands corporate finance, capital investment strategies, project feasibility financing, and enterprise risk management. Instrumental in sustaining robust liquidity and financing world-class crushing and heavy transport fleets.",
    qualifications: "Master of Business Administration (Finance & International Banking)",
    focusAreas: [
      "Corporate Financial Planning",
      "Capital Asset Investment & Fleet Growth",
      "Statutory & Environmental Fiscal Compliance",
      "Commercial Client Credit Architecture"
    ]
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-14 sm:py-20 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-2.5">
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
              LEADERSHIP & GOVERNANCE
            </span>
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Board of <span className="text-[#087A35]">Directors</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Visionary executive leadership steering Sai Super Sand Minerals Pvt. Ltd. toward unmatched engineering benchmarks, sustainable mining practices, and continuous nationwide growth.
          </p>
        </div>

        {/* 3 Executive Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="glass-card glass-card-hover rounded-[32px] p-6 sm:p-7 flex flex-col justify-between border-2 border-[#087A35]/20 hover:border-[#087A35]/60 transition-all duration-500 shadow-xl group"
            >
              <div>
                {/* Director Portrait Frame with Grand Green Halo */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-200 shadow-md flex items-center justify-center">
                  <img
                    src={leader.image}
                    alt={`${leader.name} - ${leader.designation}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="bg-[#087A35] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1 shadow-sm">
                      {leader.designation}
                    </span>
                    <h3 className="text-lg font-black tracking-tight text-white drop-shadow-sm">
                      {leader.name}
                    </h3>
                  </div>
                </div>

                {/* Subtitle & Role */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-[#087A35] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{leader.roleTitle}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-medium">
                    {leader.bio}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="bg-[#E8F5E9]/60 rounded-xl p-3 mb-4 border border-[#087A35]/20">
                  <div className="text-[11px] font-extrabold text-[#087A35] flex items-center gap-1 mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Credential & Expertise</span>
                  </div>
                  <div className="text-xs font-bold text-[#17231D]">
                    {leader.qualifications}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 mb-2">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Core Strategic Focus:
                  </div>
                  {leader.focusAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#17231D] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087A35] flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-gray-200/80 flex items-center justify-between text-xs font-bold text-gray-500">
                <span className="text-[#087A35]">Sai Super Sand Minerals</span>
                <span className="text-[11px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">Executive Board</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Integrity Guarantee Banner */}
        <div className="glass-card rounded-2xl p-6 border-l-4 border-[#087A35] shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#087A35] text-white flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-[#F4C928]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#17231D]">
                Leadership Commitment to Sustainable Aggregate Development
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Under the board&apos;s visionary supervision, 100% of our products undergo daily sieve calibration, ensuring zero silt and saving millions of metric tons of natural river sand.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-md flex-shrink-0"
          >
            <span>Connect with Management</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
