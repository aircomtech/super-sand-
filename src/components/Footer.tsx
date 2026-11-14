"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Sparkles, ExternalLink } from 'lucide-react';

export default function Footer() {
  const mapUrl = "https://maps.google.com/?q=Lane+No.+4,+Opposite+SBI,+Nehru+Nagar+Colony,+West+Marredpally,+Secunderabad,+Telangana+500026";

  return (
    <footer className="bg-[#003822] text-white pt-16 pb-8 border-t border-[#064e26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns Matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/images/logos/logo-white.png"
                alt="Super Sand"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] text-gray-300 font-medium leading-relaxed">
              Building a Stronger Tomorrow
            </p>
            <p className="text-[12px] text-gray-400 leading-relaxed">
              Sai Super Sand Minerals Pvt. Ltd. — Leaders in mechanized quarrying, high-precision concrete aggregates, and eco-friendly manufactured sand since 2006.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wider uppercase border-b border-white/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[13px] text-gray-300 font-medium">
              <li>
                <Link href="/" className="hover:text-[#F4C928] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F4C928] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F4C928] transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F4C928] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-white transition-colors text-[11px]">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: More Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wider uppercase border-b border-white/20 pb-2">
              More Links
            </h4>
            <ul className="space-y-2 text-[13px] text-gray-300 font-medium">
              <li>
                <Link href="/infrastructure" className="hover:text-[#F4C928] transition-colors">Infrastructure</Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#F4C928] transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F4C928] transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#F4C928] transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4C928] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wider uppercase border-b border-white/20 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-[12px] text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4C928] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Lane No. 4, Opposite SBI, Nehru Nagar Colony, Secunderabad – 500026
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4C928] flex-shrink-0" />
                <a href="tel:+919533895920" className="hover:text-[#F4C928] transition-colors font-semibold">
                  +91 95338 95920
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4C928] flex-shrink-0" />
                <a href="mailto:info@supersand.in" className="hover:text-[#F4C928] transition-colors font-semibold">
                  info@supersand.in
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Follow Us & Embedded Google Maps */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wider uppercase border-b border-white/20 pb-2">
              Follow Us
            </h4>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>

            {/* Google Maps Thumbnail Card */}
            <div className="relative rounded-xl overflow-hidden border border-white/20 bg-white/5 mt-3 group">
              <div className="h-20 w-full bg-[#E5E3DF] relative">
                {/* Simulated clean map preview */}
                <div className="absolute inset-0 opacity-80 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center animate-bounce">
                    <MapPin className="w-6 h-6 text-red-600 fill-red-600 drop-shadow-md" />
                    <span className="text-[9px] font-extrabold bg-white text-gray-800 px-1.5 py-0.5 rounded shadow">
                      Super Sand
                    </span>
                  </div>
                </div>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white/10 hover:bg-[#F4C928] hover:text-[#003822] text-white text-[11px] font-bold py-1.5 transition-colors flex items-center justify-center gap-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar Matching Reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[12px] text-gray-400 gap-3">
          <p>© 2026 Super Sand (Sai Super Sand Minerals Pvt. Ltd.). All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#F4C928]" />
            <span>Quality Today... A Stronger Tomorrow...</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
