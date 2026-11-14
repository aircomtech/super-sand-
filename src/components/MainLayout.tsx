"use client";

import React, { useState } from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import EnquiryModal from './EnquiryModal';
import VideoStoryModal from './VideoStoryModal';
import ImageLightboxModal from './ImageLightboxModal';
import { GalleryItem } from '@/lib/types';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const openEnquiry = () => setEnquiryModalOpen(true);
  const closeEnquiry = () => setEnquiryModalOpen(false);

  const openVideo = () => setVideoModalOpen(true);
  const closeVideo = () => setVideoModalOpen(false);

  const openLightbox = (item: GalleryItem) => setActiveLightboxItem(item);
  const closeLightbox = () => setActiveLightboxItem(null);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Animated Background from image copy 28.png applied across header to footer */}
      <div className="site-animated-bg" />

      <TopBar />
      <Navbar onOpenEnquiry={openEnquiry} />

      <main className="flex-1 relative z-10">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              onOpenEnquiry: openEnquiry,
              onOpenVideo: openVideo,
              onOpenLightbox: openLightbox,
            });
          }
          return child;
        })}
      </main>

      <Footer />

      {/* Interactive Global Modals & Actions */}
      <FloatingActions />
      <EnquiryModal isOpen={enquiryModalOpen} onClose={closeEnquiry} />
      <VideoStoryModal isOpen={videoModalOpen} onClose={closeVideo} />
      <ImageLightboxModal item={activeLightboxItem} onClose={closeLightbox} />
    </div>
  );
}
