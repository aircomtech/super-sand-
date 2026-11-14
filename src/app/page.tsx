"use client";

import React from 'react';
import MainLayout from '@/components/MainLayout';
import HeroSlider from '@/components/HeroSlider';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import DualFeatureSection from '@/components/DualFeatureSection';
import TestimonialsAndProjectsSection from '@/components/TestimonialsAndProjectsSection';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialProducts, initialTestimonials, initialProjects } from '@/lib/data';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroContent />
    </MainLayout>
  );
}

// Child component to receive injected modal props from MainLayout
function HeroContent({ onOpenEnquiry, onOpenVideo, onOpenLightbox }: any) {
  return (
    <>
      {/* Section 3: Hero Section with Dynamic Carousel */}
      <HeroSlider onOpenVideo={onOpenVideo} onOpenEnquiry={onOpenEnquiry} />

      {/* Section 4: Our Products */}
      <ProductsSection products={initialProducts} />

      {/* Section 5: About Super Sand */}
      <AboutSection />

      {/* Section 6: Why Choose Us */}
      <WhyChooseUsSection />

      {/* Section 7 & 8: Infrastructure & Sustainability Dual Cards */}
      <DualFeatureSection />

      {/* Section 9 & 10: Testimonials & Projects Grid */}
      <TestimonialsAndProjectsSection
        testimonials={initialTestimonials}
        projects={initialProjects}
        onOpenProjectPreview={(proj) => {
          if (onOpenLightbox) {
            onOpenLightbox({
              id: proj.id,
              title: proj.title,
              category: 'Infrastructure',
              image: proj.image,
              description: `${proj.description} - Supplied: ${proj.materialsSupplied.join(', ')}`
            });
          }
        }}
      />

      {/* Section 11: Curved Contact CTA Bar */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}
