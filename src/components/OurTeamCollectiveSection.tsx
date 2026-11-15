"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, HeartHandshake, Shield, Sparkles, ArrowRight, CheckCircle2, Award, X } from 'lucide-react';
import TypingNumber from './TypingNumber';

export default function OurTeamCollectiveSection() {
  const [showCollectiveModal, setShowCollectiveModal] = useState(false);

  return (
    <section id="our-team" className="py-12 sm:py-20 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="glass-card glass-card-hover rounded-[36px] p-6 sm:p-10 lg:p-12 border-2 border-[#087A35]/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image with Grand Look from image copy 62.png */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div
                onClick={() => setShowCollectiveModal(true)}
                className="relative rounded-[28px] overflow-hidden shadow-2xl bg-gray-900 border-4 border-[#087A35] group cursor-pointer"
              >
                <img
                  src="/images/team/team-collective-grand-hd.png"
                  alt="Super Sand Crushing Plant Conveyor Circuits - High-Tech Operations"
                  className="w-full h-80 sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                
                {/* Floating High-Tech Operations Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#087A35]/95 backdrop-blur-md text-white text-[11px] font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-[#F4C928]" />
                    <span>HIGH-TECH OPERATIONS</span>
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-[#F4C928] text-[#17231D] text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    <span>Automated Conveyor Circuits</span>
                  </div>
                  <h4 className="text-xl font-black leading-snug drop-shadow-md">
                    Engineered Precision • Skilled Human Governance
                  </h4>
                  <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                    Click to view operational details & team collective dossier.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Text from image copy 61.png with Typing Mode Numbers */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#087A35]"></span>
                <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
                  OUR TEAM
                </span>
                <span className="w-8 h-0.5 bg-[#087A35]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight leading-[1.15]">
                We are a <span className="text-[#087A35]">Strong Collective</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                At Super Sand, we believe that our team is our greatest asset, and we take great pride in the expertise, dedication, and passion of every member of our organization. From our skilled workers on the plant floor to our knowledgeable technical and logistics teams, every individual is an essential part of our strong collective.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                Our team is committed to delivering excellence in everything we do — from producing top-quality IS 383:2016 certified products to providing outstanding client dispatch service. We work collaboratively to implement innovative solutions and sustainable ecological practices, ensuring we remain at the forefront of the construction minerals industry.
              </p>

              {/* Typing Mode Numbers Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#E8F5E9]/70 rounded-2xl p-3 border border-[#087A35]/20 text-center">
                  <div className="text-2xl font-black text-[#087A35]">
                    <TypingNumber value="200+" speed={100} />
                  </div>
                  <div className="text-[11px] font-bold text-[#17231D] mt-0.5">Skilled Workforce</div>
                </div>

                <div className="bg-[#E8F5E9]/70 rounded-2xl p-3 border border-[#087A35]/20 text-center">
                  <div className="text-2xl font-black text-[#087A35]">
                    <TypingNumber value="18+" speed={120} />
                  </div>
                  <div className="text-[11px] font-bold text-[#17231D] mt-0.5">Years Experience</div>
                </div>

                <div className="bg-[#E8F5E9]/70 rounded-2xl p-3 border border-[#087A35]/20 text-center">
                  <div className="text-2xl font-black text-[#087A35]">
                    <TypingNumber value="Zero" speed={130} />
                  </div>
                  <div className="text-[11px] font-bold text-[#17231D] mt-0.5">Safety Incidents</div>
                </div>

                <div className="bg-[#E8F5E9]/70 rounded-2xl p-3 border border-[#087A35]/20 text-center">
                  <div className="text-2xl font-black text-[#087A35]">
                    <TypingNumber value="100%" speed={110} />
                  </div>
                  <div className="text-[11px] font-bold text-[#17231D] mt-0.5">Quality Tested</div>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="bg-white/80 rounded-2xl p-3.5 border border-gray-200/80 flex items-start gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#087A35] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-[#F4C928]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#17231D]">Safety-First Workplace</h5>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                      Uncompromising safety protocols across every mining pit and crushing screen deck.
                    </p>
                  </div>
                </div>

                <div className="bg-white/80 rounded-2xl p-3.5 border border-gray-200/80 flex items-start gap-3 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#087A35] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4 text-[#F4C928]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#17231D]">Collective Innovation</h5>
                    <p className="text-[11px] text-gray-600 mt-0.5 leading-snug">
                      Continuous upskilling in modern PLC plant automation and sieve grading curve analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Button to Careers */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2.5 bg-[#087A35] hover:bg-[#06632B] text-white px-7 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-brand transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Our Collective • View Openings</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setShowCollectiveModal(true)}
                  className="inline-flex items-center gap-2 border-2 border-[#087A35] text-[#087A35] hover:bg-[#087A35] hover:text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300"
                >
                  <span>About Our Collective</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Collective Popup Modal */}
        {showCollectiveModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border-2 border-[#087A35] max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowCollectiveModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#087A35] bg-[#E8F5E9] px-2.5 py-1 rounded-full">
                  HIGH-TECH OPERATIONS
                </span>
                <h3 className="text-2xl font-black text-[#17231D] mt-2">
                  Our Strong Collective & Conveyor Technology
                </h3>
              </div>

              <div className="rounded-2xl overflow-hidden mb-4 border border-gray-200 shadow-md">
                <img
                  src="/images/team/team-collective-grand-hd.png"
                  alt="Super Sand Automated Conveyor Circuits"
                  className="w-full h-52 object-cover"
                />
              </div>

              <div className="space-y-3 text-xs text-gray-700 leading-relaxed font-medium mb-6">
                <p>
                  Sai Super Sand Minerals operates automated multi-tier conveyor networks moving raw blasted rock through primary jaw crushers, secondary cone crushers, and precision Vertical Shaft Impactors (VSI) shaping units.
                </p>
                <p>
                  Our strong collective includes certified mechanics, instrumentation engineers, lab QA technicians, and dispatch personnel working in synchronized 24/7 harmony.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-bold">Sai Super Sand Minerals Pvt. Ltd.</span>
                <Link
                  href="/careers"
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Explore Open Roles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

