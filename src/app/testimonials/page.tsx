"use client";

import React from 'react';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialTestimonials } from '@/lib/data';
import { Quote, Star, Building2, CheckCircle } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <MainLayout>
      <TestimonialsPageContent />
    </MainLayout>
  );
}

function TestimonialsPageContent({ onOpenEnquiry }: any) {
  return (
    <div className="bg-transparent">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white/85 via-white/60 to-transparent py-14 sm:py-20 border-b border-gray-100/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            CLIENT ENDORSEMENTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            What Our Clients Say
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
            Trusted by top infrastructure builders, RMC manufacturers, and developers for nearly 20 years.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initialTestimonials.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#F4C928] mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F4C928]" />
                    ))}
                  </div>

                  <div className="text-[#087A35] opacity-70 mb-3">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>

                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-[#087A35] flex-shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#17231D] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#087A35] font-semibold mt-0.5">
                      {item.designation}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
