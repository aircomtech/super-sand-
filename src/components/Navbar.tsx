"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowRight, MessageSquare, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownName, setOpenDropdownName] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdownName(null);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      hasDropdown: true,
      subItems: [
        { name: 'Corporate Profile & Legacy', href: '/about', desc: 'Established 2006, commercial operations 2008' },
        { name: 'Board of Directors', href: '/about#leadership', desc: 'Dr. Ramachandra Reddy, Dr. P. Krishna Reddy, Mrs. Meghana Reddy' },
        { name: 'Who We Are - Team Excellence', href: '/about#who-we-are', desc: 'Passionate engineering & mining operations workforce' },
        { name: 'Client Testimonials & Trust', href: '/about#testimonials', desc: 'Endorsements from top builders and technologist partners' },
        { name: 'Vision, Mission & Core Values', href: '/about#values', desc: 'Foundational pillars of excellence & sustainability' }
      ]
    },
    {
      name: 'Products',
      href: '/products',
      hasDropdown: true,
      subItems: [
        { name: 'Coarse Aggregates', href: '/products/coarse-aggregates', desc: 'Super 6mm, 10mm, 20mm, 40mm, 60mm' },
        { name: 'Fine Aggregates (M-Sand)', href: '/products/fine-aggregates', desc: 'Plastering, Mortar & Brick Sand' },
        { name: 'Coarse Aggregate Mix', href: '/products/coarse-aggregate-mix', desc: 'W.M.M & G.S.B Road Sub-Base' },
        { name: 'Insta Super Mix', href: '/products/insta-super-mix', desc: 'Engineered High-Strength Premix' },
        { name: 'Micro Chips (4-6mm)', href: '/products/micro-chips-4-6mm', desc: 'High-density paver block grit' },
        { name: 'Railway Ballast (60mm)', href: '/products/railway-ballast-60mm', desc: 'Heavy track foundation ballast' },
        { name: 'RMC Plant Special Mix', href: '/products/rmc-special-aggregates', desc: 'Pumpable structural concrete blend' },
        { name: 'Dry Lean Concrete (DLC)', href: '/products/dlc-road-aggregates', desc: 'MoRTH Clause 601 highway subgrade' }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'Granite Quarrying & Mining', href: '/services/quarrying-mining', desc: 'Deep pit mechanized extraction' },
        { name: 'Multi-Stage Crushing & VSI', href: '/services/advanced-crushing', desc: '3-stage cubical aggregate shaping' },
        { name: 'Laboratory Testing & QA', href: '/services/quality-assurance', desc: 'NABL-aligned IS 383:2016 sieve analysis' },
        { name: 'Heavy Fleet Logistics & Dispatch', href: '/services/fleet-logistics', desc: '100-ton computerized weighbridges' },
        { name: 'Plant Engineering Workshop', href: '/services/plant-maintenance', desc: 'In-house hydraulic & mechanical repair' },
        { name: 'Environmental Dust Control', href: '/services/environmental-sustainability', desc: 'Dedicated water tanker mist fleet' },
        { name: 'Custom Batch Blending', href: '/services/custom-batch-blending', desc: 'Tailored continuous grading curves' },
        { name: 'Full Photo Archive (22 Photos)', href: '/services', desc: 'Interactive operational visual gallery' }
      ]
    },
    {
      name: 'Infrastructure',
      href: '/infrastructure',
      hasDropdown: true,
      subItems: [
        { name: '3-Stage Crushing Complex', href: '/infrastructure/crushing-complex', desc: '350+ Tons per hour capacity' },
        { name: 'Heavy Excavator Fleet', href: '/infrastructure/excavator-fleet', desc: 'Tata Hitachi 1200, Hyundai, CAT, XCMG' },
        { name: 'Electronic Weighbridge Station', href: '/infrastructure/weighbridge-station', desc: 'Instant gross, tare & net weight slips' },
        { name: 'Mechanical & Spares Workshop', href: '/infrastructure/spares-workshop', desc: 'Zero downtime maintenance facility' },
        { name: 'Plant Capacity & Statistics', href: '/infrastructure/plant-capacity', desc: '150,000+ tons monthly volume' }
      ]
    },
    {
      name: 'Sustainability',
      href: '/sustainability',
      hasDropdown: true,
      subItems: [
        { name: 'Riverbed Conservation', href: '/sustainability/riverbed-conservation', desc: '100% sustainable alternative to river sand' },
        { name: 'Haul Road Water Mist Tankers', href: '/sustainability/water-mist-tankers', desc: 'Active airborne dust elimination' },
        { name: 'Green Tree Plantation Belts', href: '/sustainability/green-plantation-belts', desc: 'Extensive acoustic & carbon buffer' },
        { name: 'Rainwater Harvesting Basins', href: '/sustainability/rainwater-harvesting', desc: 'Closed-loop sediment filtration' },
        { name: 'Pollution Board Compliance', href: '/sustainability/pollution-board-compliance', desc: 'Zero discharge ecological norms' }
      ]
    },
    {
      name: 'Projects',
      href: '/projects',
      hasDropdown: true,
      subItems: [
        { name: 'Highways & Flyover Corridors', href: '/projects/highways-flyovers', desc: 'Heavy pier and deck slab supply' },
        { name: 'Commercial IT High-Rises', href: '/projects/commercial-highrises', desc: 'HITEC City & Financial District towers' },
        { name: 'Metro Transit Viaducts', href: '/projects/metro-viaducts', desc: 'High-performance casting yard supply' },
        { name: 'River Bridges & Expressways', href: '/projects/bridges-expressways', desc: 'High impact resistance concrete mixes' },
        { name: 'Outer Ring Road (ORR) Works', href: '/projects/outer-ring-road', desc: 'W.M.M & G.S.B road sub-base' },
        { name: 'Logistics Parks & Warehouses', href: '/projects/logistics-warehouses', desc: 'Laser-screed industrial floor aggregates' },
        { name: 'Airport Runway Overlays', href: '/projects/airport-runways', desc: 'High-friction aircraft landing pavements' },
        { name: 'Precast Casting Yards', href: '/projects/precast-yards', desc: 'Zero-silt VSI M-sand and 10mm chips' }
      ]
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleEnquiryClick = (e: React.MouseEvent) => {
    if (onOpenEnquiry) {
      e.preventDefault();
      onOpenEnquiry();
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-2.5'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Official Super Sand Logo */}
        <Link href="/" className="flex items-center gap-3 group" title="Super Sand Homepage">
          <div className="relative h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105">
            <img
              src="/images/logos/logo.png"
              alt="Super Sand - Sai Super Sand Minerals Pvt. Ltd."
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Menu with Multi-Dropdowns */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-[12px] xl:text-[13px] font-bold text-[#17231D]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));
            const isDropdownOpen = openDropdownName === link.name;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group py-1.5"
                  onMouseEnter={() => setOpenDropdownName(link.name)}
                  onMouseLeave={() => setOpenDropdownName(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#087A35] font-bold bg-[#E8F5E9]'
                        : 'hover:text-[#087A35] hover:bg-gray-100/70'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-[#087A35] ${isDropdownOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                  </Link>

                  {/* Rich Animated Dropdown Menu with CSS + State Trigger */}
                  <div
                    className={`absolute top-full left-0 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-2.5 transition-all duration-200 origin-top-left z-50 ${
                      isDropdownOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'
                    }`}
                  >
                    <div className="text-[10px] font-extrabold tracking-wider text-gray-400 uppercase px-3 py-1 border-b border-gray-100 mb-1 flex items-center justify-between">
                      <span>Explore {link.name}</span>
                      <span className="text-[#087A35]">{link.subItems?.length} Options</span>
                    </div>

                    <div className="max-h-[360px] overflow-y-auto space-y-0.5">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-2 rounded-xl hover:bg-[#E8F5E9]/80 transition-colors group/sub"
                        >
                          <div className="text-[12px] font-bold text-[#17231D] group-hover/sub:text-[#087A35] transition-colors flex items-center justify-between">
                            <span>{sub.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[#087A35]" />
                          </div>
                          <div className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                            {sub.desc}
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-1 pt-1.5 border-t border-gray-100 px-3">
                      <Link
                        href={link.href}
                        className="text-[11px] font-bold text-[#087A35] hover:underline flex items-center justify-between"
                      >
                        <span>Open Complete {link.name} Page</span>
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
                className={`px-2.5 xl:px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#087A35] font-bold bg-[#E8F5E9]'
                    : 'hover:text-[#087A35] hover:bg-gray-100/70'
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
            className="flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2 rounded-full font-bold text-[12px] tracking-wide shadow-brand transition-all hover:scale-105 active:scale-95"
          >
            <span>Get Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="https://wa.me/919533895920?text=Hello%20Super%20Sand%2C%20I%20would%20like%20to%20enquire%20about%20materials."
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
            aria-label="WhatsApp Quick Chat"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#087A35]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with Expandable Accordions */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 pt-3 pb-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isItemDropdownOpen = openDropdownName === link.name;

              return (
                <div key={link.name} className="border-b border-gray-100 last:border-none pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`flex-1 py-2 px-3 rounded-xl text-[14px] font-bold ${
                        pathname === link.href ? 'text-[#087A35] bg-[#E8F5E9]' : 'text-[#17231D]'
                      }`}
                    >
                      {link.name}
                    </Link>

                    {link.hasDropdown && (
                      <button
                        onClick={() => setOpenDropdownName(isItemDropdownOpen ? null : link.name)}
                        className="p-2 text-gray-500 hover:text-[#087A35]"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isItemDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && isItemDropdownOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/70 rounded-xl my-1">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-3 py-1.5 text-[12px] font-medium text-gray-700 hover:text-[#087A35]"
                        >
                          • {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
            <button
              onClick={handleEnquiryClick}
              className="w-full flex items-center justify-center gap-2 bg-[#087A35] text-white py-3 rounded-full font-bold text-[13px] shadow-md"
            >
              <span>Get Instant Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
