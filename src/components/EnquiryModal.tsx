"use client";

import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultProduct }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    productSelection: defaultProduct || 'Coarse Aggregates',
    quantity: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMessage('Please provide your name and phone number.');
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
        setTimeout(() => {
          // Reset form after a bit
          setFormData({
            fullName: '',
            phoneNumber: '',
            email: '',
            productSelection: defaultProduct || 'Coarse Aggregates',
            quantity: '',
            message: ''
          });
        }, 2000);
      } else {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please try calling us directly at +91 95338 95920.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform animate-in zoom-in-95 duration-200">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#087A35] to-[#004B2D] p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-[#F4C928] text-xs font-bold tracking-widest uppercase block mb-1">
              SUPER SAND DIRECT DESK
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Get an Instant Material Quote
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              Direct supply from Sai Super Sand Minerals crushing plant
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#17231D]">
                Enquiry Submitted Successfully!
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our logistics and pricing dispatch team will contact you shortly at <strong>{formData.phoneNumber}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSuccess(false);
                    onClose();
                  }}
                  className="bg-[#087A35] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow hover:bg-[#06632B]"
                >
                  Done
                </button>
              </div>
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
                    placeholder="e.g. Ramesh Reddy"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087A35] focus:border-transparent transition-all"
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
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087A35] focus:border-transparent transition-all"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087A35] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Product Selection <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.productSelection}
                    onChange={(e) => setFormData({ ...formData, productSelection: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087A35] focus:border-transparent transition-all bg-white"
                  >
                    <option value="Coarse Aggregates">Coarse Aggregates (6mm, 10mm, 20mm, 40mm, 60mm)</option>
                    <option value="Fine Aggregates">Fine Aggregates (M-Sand, P-Sand, Mortar Sand)</option>
                    <option value="Coarse Aggregate Mix">Coarse Aggregate Mix (W.M.M / G.S.B)</option>
                    <option value="Insta Super Mix">Insta Super Mix (Engineered Premix)</option>
                    <option value="Bulk Industrial Supply">Bulk Industrial Supply (Custom Specs)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Estimated Quantity / Location
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 200 Metric Tons / Secunderabad Site"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087A35] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Message / Special Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087A35] focus:border-transparent transition-all resize-none"
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
                      <span>Submit Material Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-gray-400">
                🔒 Your contact info is secure. Sai Super Sand Minerals does not share details with third parties.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
