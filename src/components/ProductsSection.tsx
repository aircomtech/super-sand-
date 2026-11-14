"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductsSectionProps {
  products: Product[];
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="products-section" className="py-16 sm:py-24 bg-[#FAFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-3 justify-center mb-3">
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
            <span className="text-[#087A35] font-extrabold text-[13px] sm:text-[14px] tracking-[0.25em] uppercase">
              OUR PRODUCTS
            </span>
            <span className="w-10 h-0.5 bg-[#087A35]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17231D] tracking-tight mb-3">
            Premium Construction Solutions
          </h2>

          <p className="text-[15px] sm:text-[17px] text-gray-600 font-medium">
            Delivering the best quality for all your construction needs.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-3xl p-4 shadow-card hover:shadow-card-hover border border-gray-100/80 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-[#17231D] group-hover:text-[#087A35] transition-colors mb-2">
                  {product.name}
                </h3>

                {/* Product Description */}
                <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed line-clamp-2">
                  {product.shortDesc}
                </p>
              </div>

              {/* Bottom Action Arrow matching Reference */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#087A35] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Specifications
                </span>
                <div className="w-9 h-9 rounded-full bg-[#087A35] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#06632B] group-hover:scale-110 ml-auto shadow-sm">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
