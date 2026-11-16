"use client";

import React from 'react';
import MainLayout from '@/components/MainLayout';
import HeroSlider from '@/components/HeroSlider';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import DualFeatureSection from '@/components/DualFeatureSection';
import ProjectsShowcaseSection from '@/components/ProjectsShowcaseSection';
import WhoWeAreTeamSection from '@/components/WhoWeAreTeamSection';
import ClientPartnersSection from '@/components/ClientPartnersSection';
import ContactCtaBar from '@/components/ContactCtaBar';
import { initialProducts, initialProjects } from '@/lib/data';
import { useCMS } from '@/context/CMSContext';

export default function HomePage() {
  return (
    <MainLayout>
      <HeroContent />
    </MainLayout>
  );
}

// Child component to receive injected modal props from MainLayout
function HeroContent({ onOpenEnquiry, onOpenVideo, onOpenLightbox }: any) {
  const { data } = useCMS();

  const heroSlides = data?.heroSlides && data.heroSlides.length > 0 ? data.heroSlides : undefined;
  const products = data?.products && data.products.length > 0 ? data.products : initialProducts;
  const projects = data?.projects && data.projects.length > 0 ? data.projects : initialProjects;
  const whyChooseUs = data?.whyChooseUs && data.whyChooseUs.length > 0 ? data.whyChooseUs : undefined;

  return (
    <>
      {/* Section 3: Hero Section with Dynamic Carousel */}
      <HeroSlider slides={heroSlides} onOpenVideo={onOpenVideo} onOpenEnquiry={onOpenEnquiry} />

      {/* Section 4: Our Products */}
      <ProductsSection products={products} onOpenEnquiry={onOpenEnquiry} />

      {/* Section 5: About Super Sand */}
      <AboutSection />

      {/* Section 6: Why Choose Us */}
      <WhyChooseUsSection pillars={whyChooseUs} />

      {/* Section 7 & 8: Infrastructure & Sustainability Dual Cards */}
      <DualFeatureSection />

      {/* Section 9: Landmark Projects Showcase */}
      <ProjectsShowcaseSection
        projects={projects}
        onOpenProjectPreview={(proj) => {
          if (onOpenLightbox) {
            onOpenLightbox({
              id: proj.id,
              title: proj.title,
              category: 'Infrastructure',
              image: proj.image,
              description: `${proj.description} - Supplied: ${proj.materialsSupplied?.join(', ')}`
            });
          }
        }}
      />

      {/* Section 10: Client Partners & Collaborations (image copy 49.png) */}
      <ClientPartnersSection />

      {/* Section 11: Who We Are - Operations & Engineering Team (image copy 45, 46, 47.png) */}
      <WhoWeAreTeamSection />

      {/* Section 12: Curved Contact CTA Bar */}
      <ContactCtaBar onOpenEnquiry={onOpenEnquiry} />
    </>
  );
}
