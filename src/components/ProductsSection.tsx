"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, CheckCircle2, X } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductsSectionProps {
  products: Product[];
  onOpenEnquiry?: () => void;
}

export default function ProductsSection({ products, onOpenEnquiry }: ProductsSectionProps) {
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<Product | null>(null);

  return (
    <section id="products-section" className="py-14 sm:py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 justify-center mb-2.5">
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase">
              OUR PRODUCTS
            </span>
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-2.5">
            Premium Construction Solutions
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium">
            Delivering the best quality for all your construction needs — 8 engineered aggregate and sand classifications.
          </p>
        </div>

        {/* 8 Product Cards Grid with Glassmorphism Over Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group glass-card glass-card-hover rounded-3xl p-4 flex flex-col justify-between relative"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-gray-100 mb-3.5 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />

                  {/* Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveQuickViewProduct(product);
                    }}
                    className="absolute top-2.5 right-2.5 bg-white/95 hover:bg-[#087A35] hover:text-white text-gray-800 px-2.5 py-1.5 rounded-xl text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1"
                    title="Quick Specs Preview"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Quick View</span>
                  </button>
                </div>

                {/* Product Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#17231D] group-hover:text-[#087A35] transition-colors mb-1 leading-snug">
                  <Link href={`/products/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>

                {/* Product Tagline / Sizes */}
                <p className="text-xs font-semibold text-[#087A35] mb-1.5 line-clamp-1">
                  {product.tagline}
                </p>

                {/* Product Description */}
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {product.shortDesc}
                </p>
              </div>

              {/* Bottom Action Arrow */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs font-bold text-[#087A35] hover:underline"
                >
                  View Details
                </Link>

                <Link
                  href={`/products/${product.slug}`}
                  className="w-8 h-8 rounded-full bg-[#087A35] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#06632B] group-hover:scale-110 shadow-sm"
                  aria-label={`Open ${product.name}`}
                >
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
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
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[#087A35] font-extrabold text-[11px] uppercase tracking-wider block mb-1">
                  PRODUCT SPECIFICATION SUMMARY
                </span>
                <h3 className="text-2xl font-black text-[#17231D]">
                  {activeQuickViewProduct.name}
                </h3>
                <p className="text-xs font-bold text-[#087A35]">
                  {activeQuickViewProduct.subtitle}
                </p>
              </div>
              <button
                onClick={() => setActiveQuickViewProduct(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {activeQuickViewProduct.fullDesc}
            </p>

            <div>
              <h5 className="text-[11px] font-black uppercase tracking-wider text-gray-500 mb-1.5">
                Available Fractions / Grades:
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeQuickViewProduct.sizesOrTypes.map((st, i) => (
                  <span key={i} className="bg-gray-100 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-lg">
                    {st}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <Link
                href={`/products/${activeQuickViewProduct.slug}`}
                className="flex-1 text-center bg-[#087A35] hover:bg-[#06632B] text-white py-2.5 rounded-full font-bold text-xs shadow"
              >
                Full Product Page
              </Link>
              <button
                onClick={() => {
                  setActiveQuickViewProduct(null);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="flex-1 bg-[#F4C928] hover:bg-[#E2B81C] text-[#003822] py-2.5 rounded-full font-black text-xs shadow"
              >
                Instant Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
