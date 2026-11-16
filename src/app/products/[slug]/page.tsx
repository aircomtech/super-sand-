"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialProducts } from '@/lib/data';
import { Product } from '@/lib/types';
import { useCMS } from '@/context/CMSContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, ChevronRight, MessageSquare } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { data } = useCMS();
  const products = data?.products && data.products.length > 0 ? data.products : initialProducts;
  const product = products.find((p) => p.slug === slug || p.id === slug) || initialProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <MainLayout>
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#087A35] font-bold underline">
            Return to Products Catalog
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ProductDetailContent product={product} />
    </MainLayout>
  );
}

interface ProductDetailContentProps {
  product: Product;
  onOpenEnquiry?: () => void;
  onOpenLightbox?: (item: any) => void;
}

function ProductDetailContent({ product, onOpenEnquiry, onOpenLightbox }: ProductDetailContentProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications'>('overview');

  const whatsappMsg = `Hello Super Sand, I am inquiring about technical specifications and pricing for ${product.name} (${product.slug}).`;
  const whatsappUrl = `https://wa.me/919533895920?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-transparent">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500">
          <Link href="/" className="hover:text-[#087A35]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/products" className="hover:text-[#087A35]">Products</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#087A35] font-bold">{product.name}</span>
        </div>
      </div>

      {/* Main Product Showcase Header */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Product Images Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div
                className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-gray-100 shadow-xl border-4 border-white cursor-pointer group"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  id: product.id,
                  title: product.name,
                  category: 'Production',
                  image: product.heroImage || product.image,
                  description: product.fullDesc
                })}
              >
                <img
                  src={product.heroImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#087A35] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                  Sai Super Sand Minerals
                </div>
              </div>

              {/* Smaller thumbnail preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 border-2 border-white shadow-sm">
                  <img
                    src={product.image}
                    alt={`${product.name} Sample`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-gray-100 border-2 border-white shadow-sm">
                  <img
                    src="/images/gallery/lab-sieve-grading-test.png"
                    alt="Laboratory Grading Test"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Technical Info & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-widest block mb-2">
                  OFFICIAL PRODUCT DOSSIER
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-[#17231D] tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm font-bold text-[#087A35] mt-1">
                  {product.subtitle}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {product.fullDesc}
              </p>

              {/* Key Features Bullet List */}
              <div className="p-5 rounded-2xl bg-[#E8F5E9]/50 border border-[#087A35]/20 space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#004B2D]">
                  Engineered Advantages:
                </h4>
                {product.features.map((feat: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#17231D]">
                    <CheckCircle2 className="w-4 h-4 text-[#087A35] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry()}
                  className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-brand hover:shadow-card-hover transition-all"
                >
                  <span>Request Bulk Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#087A35]" />
                  <span>100% Genuine Plant Dispatch</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#087A35]" />
                  <span>Automated Weighbridge Slips</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Technical Specifications & Applications Tabs Glass Card */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-6 sm:p-10">
          
          {/* Tabs Navigation */}
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-sm sm:text-base font-bold pb-2 border-b-2 transition-all ${
                activeTab === 'overview' ? 'border-[#087A35] text-[#087A35]' : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              Sizes & Grading
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`text-sm sm:text-base font-bold pb-2 border-b-2 transition-all ${
                activeTab === 'specs' ? 'border-[#087A35] text-[#087A35]' : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`text-sm sm:text-base font-bold pb-2 border-b-2 transition-all ${
                activeTab === 'applications' ? 'border-[#087A35] text-[#087A35]' : 'border-transparent text-gray-400 hover:text-gray-700'
              }`}
            >
              Project Applications
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#17231D]">
                  Standard Sizes and Fractional Grading
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.sizesOrTypes.map((st: string, i: number) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#087A35] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">{st}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#17231D]">
                  Laboratory Physical & Mechanical Properties
                </h3>
                <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F8FAF8] text-gray-700 font-bold border-b border-gray-200">
                      <tr>
                        <th className="p-3.5">Testing Parameter</th>
                        <th className="p-3.5">Observed Test Value / Specification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr key={idx} className="hover:bg-gray-50/80">
                          <td className="p-3.5 font-bold text-[#17231D]">{key}</td>
                          <td className="p-3.5 font-medium text-[#087A35]">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#17231D]">
                  Recommended Engineering Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app: string, i: number) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#087A35] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      </section>

      {/* Bottom CTA */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />

    </div>
  );
}
