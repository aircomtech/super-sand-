"use client";

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialProducts } from '@/lib/data';
import { useCMS } from '@/context/CMSContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, FileText } from 'lucide-react';

export default function ProductsPage() {
  return (
    <MainLayout>
      <ProductsPageContent />
    </MainLayout>
  );
}

function ProductsPageContent({ onOpenEnquiry, onOpenLightbox }: any) {
  const { data } = useCMS();
  const products = data?.products && data.products.length > 0 ? data.products : initialProducts;

  return (
    <div className="bg-transparent">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-white/85 via-white/60 to-transparent py-14 sm:py-20 border-b border-gray-100/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
            ENGINEERED AGGREGATES & SAND
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
            Premium Construction Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
            From precision 6mm chips to heavy 60mm ballast, zero-silt manufactured plastering sand, and MoRTH-certified road sub-bases.
          </p>
        </div>
      </section>

      {/* Products List Detailed Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {products.map((product, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={product.id}
                className="glass-card rounded-[36px] p-6 sm:p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-lg border-2 border-gray-50 group">
                      <img
                        src={product.heroImage || product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black text-[#087A35] shadow">
                        IS 383:2016 Compliant
                      </div>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="inline-block">
                      <span className="text-[#087A35] font-extrabold text-xs tracking-wider uppercase bg-[#E8F5E9] px-3 py-1 rounded-full">
                        {product.subtitle}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#17231D]">
                      {product.name}
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {product.fullDesc}
                    </p>

                    {/* Available Sizes or Types */}
                    <div>
                      <h4 className="text-xs font-black tracking-wider uppercase text-gray-500 mb-2">
                        Available Sizes & Classifications:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizesOrTypes.map((st, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-gray-200/60"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-xs font-black tracking-wider uppercase text-gray-500 mb-2">
                        Key Applications:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 font-medium">
                        {product.applications.slice(0, 4).map((app, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#087A35] flex-shrink-0" />
                            <span className="truncate">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide shadow-brand transition-all hover:scale-105"
                      >
                        <span>View Technical Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={() => onOpenEnquiry && onOpenEnquiry()}
                        className="inline-flex items-center gap-2 bg-[#F4C928] hover:bg-[#E2B81C] text-[#003822] px-6 py-3 rounded-full font-black text-xs tracking-wide transition-all shadow-sm hover:scale-105"
                      >
                        <span>Request Bulk Pricing</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Quality Control / Testing Showcase Banner */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#17231D] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#F4C928] font-bold text-xs uppercase tracking-widest">
                IN-HOUSE TESTING ACCREDITATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                Every Ton Tested in Our On-Site Laboratory
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We perform continuous mechanical sieve analysis, crushing tests, and moisture readings. Batch Test Certificates (QTR) are issued with every shipment load.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/services"
                className="bg-[#087A35] hover:bg-[#06632B] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg inline-flex items-center gap-2 transition-transform hover:scale-105"
              >
                <span>Learn About Testing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
