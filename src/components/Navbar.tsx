"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Products',
      href: '/products',
      hasDropdown: true,
      subItems: [
        { name: 'Coarse Aggregates', href: '/products/coarse-aggregates', desc: 'Super 6mm, 10mm, 20mm, 40mm, 60mm' },
        { name: 'Fine Aggregates', href: '/products/fine-aggregates', desc: 'Plastering, Mortar & Brick Sand' },
        { name: 'Coarse Aggregate Mix', href: '/products/coarse-aggregate-mix', desc: 'W.M.M & G.S.B Road Sub-Base' },
        { name: 'Insta Super Mix', href: '/products/insta-super-mix', desc: 'Engineered High-Strength Premix' },
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Projects', href: '/projects' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleEnquiryClick = (e: React.MouseEvent) => {
    if (onOpenEnquiry) {
      e.preventDefault();
      onOpenEnquiry();
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white py-3.5'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Official Super Sand Logo (Clean, Transparent, No White Patchwork) */}
        <Link href="/" className="flex items-center gap-3 group" title="Super Sand Homepage">
          <div className="relative h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/logos/logo.png"
              alt="Super Sand - Sai Super Sand Minerals Pvt. Ltd."
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2.5 text-[14px] font-semibold text-[#17231D]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith('/products'));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#087A35] font-bold bg-[#E8F5E9]/60'
                        : 'hover:text-[#087A35] hover:bg-gray-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 transition-all duration-200 origin-top-left ${productsDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="text-[11px] font-bold tracking-wider text-gray-400 uppercase px-3 py-1.5 border-b border-gray-100 mb-1">
                      Our Core Materials
                    </div>
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-2.5 rounded-xl hover:bg-[#E8F5E9]/50 transition-colors group/sub"
                      >
                        <div className="text-[13px] font-bold text-[#17231D] group-hover/sub:text-[#087A35] transition-colors flex items-center justify-between">
                          <span>{sub.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#087A35]" />
                        </div>
                        <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">{sub.desc}</div>
                      </Link>
                    ))}
                    <div className="mt-1 pt-1.5 border-t border-gray-100 px-3">
                      <Link
                        href="/products"
                        className="text-[12px] font-bold text-[#087A35] hover:underline flex items-center gap-1"
                      >
                        <span>View All Products</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#087A35] font-bold bg-[#E8F5E9]/60'
                    : 'hover:text-[#087A35] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleEnquiryClick}
            className="flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2.5 rounded-full font-semibold text-[13px] tracking-wide shadow-brand transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Buttons: WhatsApp Quick Tap & Hamburger */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="https://wa.me/919533895920?text=Hello%20Super%20Sand%2C%20I%20would%20like%20to%20enquire%20about%20materials."
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
            aria-label="WhatsApp Quick Chat"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#087A35]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[15px] font-semibold ${
                    pathname === link.href ? 'bg-[#087A35] text-white' : 'text-[#17231D] hover:bg-gray-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown ? (
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  ) : (
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  )}
                </Link>

                {link.hasDropdown && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/60 rounded-xl my-1">
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-3 py-2 text-[13px] font-medium text-gray-700 hover:text-[#087A35]"
                      >
                        • {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
            <button
              onClick={handleEnquiryClick}
              className="w-full flex items-center justify-center gap-2 bg-[#087A35] text-white py-3 rounded-full font-bold text-[14px] shadow-md"
            >
              <span>Get Instant Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919533895920"
              className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#17231D] py-2.5 rounded-full font-semibold text-[13px]"
            >
              <Phone className="w-4 h-4 text-[#087A35]" />
              <span>Call Us: +91 95338 95920</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
