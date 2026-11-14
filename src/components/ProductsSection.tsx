"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, CheckCircle2, X, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductsSectionProps {
  products: Product[];
  onOpenEnquiry?: () => void;
}

export default function ProductsSection({ products, onOpenEnquiry }: ProductsSectionProps) {
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);

  return (
    <section id="products-section" className="py-14 sm:py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-2.5">
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
              OUR PRODUCTS
            </span>
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-3">
            Premium Construction Solutions
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Delivering the best quality for all your construction needs — 8 engineered aggregate and sand classifications manufactured from virgin granite rock.
          </p>
        </div>

        {/* 8 Product Cards Grid with Grand HD Imagery and Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.map((product, index) => {
            const isTopFour = index < 4;

            return (
              <div
                key={product.id}
                className="group glass-card glass-card-hover rounded-[32px] p-4 sm:p-5 flex flex-col justify-between relative transition-all duration-500 hover:shadow-[0_20px_45px_rgba(8,122,53,0.18)]"
              >
                <div>
                  {/* HD Product Image Frame with Grand Hover Zoom & Badges */}
                  <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-gray-900 mb-4 shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle Gradient Shadow for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Quality Badge */}
                    <div className="absolute top-3 left-3 bg-[#004B2D]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black text-[#F4C928] flex items-center gap-1 shadow-sm border border-white/20">
                      <ShieldCheck className="w-3 h-3 text-[#F4C928]" />
                      <span>{isTopFour ? "IS 383:2016 Certified" : "Engineered Spec"}</span>
                    </div>

                    {/* Quick View Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveQuickViewProduct(product);
                      }}
                      className="absolute top-3 right-3 bg-white/95 hover:bg-[#087A35] hover:text-white text-gray-800 px-2.5 py-1.5 rounded-xl text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1"
                      title="Quick Specs Preview"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-[10px]">Quick View</span>
                    </button>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg sm:text-xl font-black text-[#17231D] group-hover:text-[#087A35] transition-colors mb-1.5 leading-snug">
                    <Link href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>

                  {/* Product Tagline / Sizes */}
                  <p className="text-xs font-bold text-[#087A35] mb-2 line-clamp-1 bg-[#E8F5E9] inline-block px-2.5 py-0.5 rounded-md">
                    {product.tagline}
                  </p>

                  {/* Product Description */}
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3">
                    {product.shortDesc}
                  </p>

                  {/* Key Feature Bullets for Content Richness */}
                  <div className="space-y-1 mb-2 pt-1 border-t border-gray-100">
                    {product.sizesOrTypes.slice(0, 2).map((size, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-[#087A35] flex-shrink-0" />
                        <span className="line-clamp-1">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Arrow */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs font-bold text-[#087A35] hover:underline"
                  >
                    View Specifications
                  </Link>

                  <Link
                    href={`/products/${product.slug}`}
                    className="w-8 h-8 rounded-full bg-[#087A35] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#06632B] group-hover:scale-110 shadow-md"
                    aria-label={`Open ${product.name}`}
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Quick-View Modal Popup */}
      {activeQuickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveQuickViewProduct(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveQuickViewProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 shadow border">
                <img
                  src={activeQuickViewProduct.image}
                  alt={activeQuickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#087A35] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full inline-block mb-1">
                  OFFICIAL SPECIFICATIONS
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#17231D]">
                  {activeQuickViewProduct.name}
                </h3>
                <p className="text-xs text-gray-500 font-semibold">
                  {activeQuickViewProduct.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {activeQuickViewProduct.fullDesc}
            </p>

            {/* Available Sizes / Grades */}
            <div className="space-y-1.5 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#17231D]">
                Available Sizes & Fractional Cuts:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeQuickViewProduct.sizesOrTypes.map((st, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-800 font-semibold px-2.5 py-1 rounded-lg"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Advantages */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#17231D]">
                Engineered Advantages:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activeQuickViewProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#087A35] flex-shrink-0" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
              <Link
                href={`/products/${activeQuickViewProduct.slug}`}
                className="text-xs font-bold text-[#087A35] hover:underline"
              >
                Open Full Technical Dossier →
              </Link>

              <button
                onClick={() => {
                  setActiveQuickViewProduct(null);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="inline-flex items-center gap-1.5 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                <span>Request Instant Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
