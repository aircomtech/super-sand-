"use client";

import React, { useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { initialSiteInfo } from '@/lib/data';
import { useCMS } from '@/context/CMSContext';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const { data: cmsData } = useCMS();
  const contact = cmsData?.contactSettings;
  const address = contact?.companyAddress || initialSiteInfo.address;
  const primaryPhone = contact?.primaryPhone || "+91 95338 95920";
  const alternatePhone = contact?.altPhone || "+91 95536 31919";
  const primaryEmail = contact?.primaryEmail || "info@supersand.in";
  const alternateEmail = contact?.altEmail || "krishnareddy@supersand.in";
  const whatsappNumber = contact?.whatsappNumber || "+91 95338 95920";
  const mapEmbedUrl = contact?.googleMapsEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.496738587372!2d78.5037!3d17.436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzA5LjYiTiA3OMKwMzAnMTMuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";
  const mapUrl = contact?.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    productSelection: 'Coarse Aggregates',
    quantity: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMessage('Full name and phone number are required.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          productSelection: 'Coarse Aggregates',
          quantity: '',
          message: ''
        });
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry.');
      }
    } catch (err) {
      setErrorMessage('Connection failed. Please dial +91 95338 95920.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="bg-transparent">
        
        {/* Header */}
        <section className="bg-gradient-to-b from-white/85 via-white/60 to-transparent py-14 sm:py-20 border-b border-gray-100/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="text-[#087A35] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase block mb-3">
              DIRECT DESK & MATERIAL DISPATCH
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#17231D] tracking-tight mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
              Contact our sales engineering team for aggregate supply orders, customized mixes, laboratory test reports, and dispatch schedules.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
                  <h3 className="text-xl font-black text-[#17231D]">
                    Head Office & Communications
                  </h3>

                  <div className="space-y-4 text-sm text-gray-700">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#17231D]">Registered Office</div>
                        <div className="text-gray-500 leading-snug mt-0.5">{address}</div>
                        <a
                          href={mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#087A35] mt-1 hover:underline"
                        >
                          <span>Get Directions on Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#17231D]">Direct Telephone</div>
                        <div className="space-y-1 mt-1">
                          <a href={`tel:${primaryPhone.replace(/\s+/g, '')}`} className="block text-[#087A35] font-bold hover:underline">
                            {primaryPhone} (Primary)
                          </a>
                          {alternatePhone && (
                            <a href={`tel:${alternatePhone.replace(/\s+/g, '')}`} className="block text-gray-600 font-semibold hover:underline">
                              {alternatePhone} (Alternative)
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Emails */}
                    <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#17231D]">Email Enquiries</div>
                        <div className="space-y-1 mt-1">
                          <a href={`mailto:${primaryEmail}`} className="block text-[#087A35] font-bold hover:underline">
                            {primaryEmail}
                          </a>
                          {alternateEmail && (
                            <a href={`mailto:${alternateEmail}`} className="block text-gray-600 font-semibold hover:underline">
                              {alternateEmail}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3.5 pt-2 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#25D366] flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-[#17231D]">WhatsApp Instant Channel</div>
                        <a
                          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=Hello%20Super%20Sand%2C%20I%20would%20like%20to%20enquire%20about%20materials.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#25D366] text-white px-3.5 py-1.5 rounded-full mt-1.5 hover:bg-[#20ba59] transition-colors"
                        >
                          <span>Chat on WhatsApp: {whatsappNumber}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Operating Hours card */}
                <div className="bg-[#004B2D] text-white rounded-3xl p-6 shadow-xl space-y-2">
                  <h4 className="font-bold text-base text-[#F4C928]">Plant Dispatch Timings</h4>
                  <p className="text-xs text-gray-200 leading-relaxed">
                    Production operations run 24/7. Order bookings and electronic weighbridge clearances are handled Monday through Sunday for continuous infrastructure readiness.
                  </p>
                </div>

              </div>

              {/* Right Column: Interactive Real Enquiry Form */}
              <div className="lg:col-span-7">
                <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-card">
                  <div className="mb-6">
                    <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-wider block mb-1">
                      REAL-TIME DISPATCH REQUEST
                    </span>
                    <h3 className="text-2xl font-black text-[#17231D]">
                      Send Us Your Project Requirements
                    </h3>
                  </div>

                  {success ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mx-auto animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-black text-[#17231D]">
                        Enquiry Received!
                      </h4>
                      <p className="text-sm text-gray-600 max-w-sm mx-auto">
                        Thank you. Your request has been stored in our system and forwarded to the Sai Super Sand dispatch office. We will call you back promptly.
                      </p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="bg-[#087A35] text-white px-6 py-2.5 rounded-full font-bold text-xs shadow hover:bg-[#06632B]"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMessage && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Ramesh Kumar"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="+91 95338 95920"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1">
                            Required Material <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.productSelection}
                            onChange={(e) => setFormData({ ...formData, productSelection: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none bg-white"
                          >
                            <option value="Coarse Aggregates (6mm, 10mm, 20mm, 40mm, 60mm)">Coarse Aggregates (6mm, 10mm, 20mm, 40mm, 60mm)</option>
                            <option value="Fine Aggregates (M-Sand, P-Sand, Mortar Sand)">Fine Aggregates (M-Sand, P-Sand, Mortar Sand)</option>
                            <option value="Coarse Aggregate Mix (W.M.M & G.S.B)">Coarse Aggregate Mix (W.M.M & G.S.B)</option>
                            <option value="Insta Super Mix (Engineered Premix)">Insta Super Mix (Engineered Premix)</option>
                            <option value="Custom Commercial Specification">Custom Commercial Specification</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Estimated Quantity & Site Delivery Destination
                        </label>
                        <input
                          type="text"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 500 MT / Delivery to HITEC City Phase 2"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Message / Technical Specifications
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Provide any additional specifications, testing criteria, or delivery schedules..."
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-[#087A35] hover:bg-[#06632B] text-white py-3.5 rounded-full font-bold text-sm tracking-wide shadow-brand transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Official Supply Request</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Google Maps Embed Section */}
        <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-[36px] p-6 sm:p-8 shadow-card overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[#087A35] font-extrabold text-xs uppercase tracking-wider block mb-1">
                    LOCATION PIN & DIRECTIONS
                  </span>
                  <h3 className="text-2xl font-black text-[#17231D]">
                    Find Sai Super Sand on Google Maps
                  </h3>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow transition-all hover:scale-105 self-start sm:self-auto"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
                <iframe
                  title="Sai Super Sand Location Map"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </MainLayout>
  );
}
