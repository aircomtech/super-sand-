"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lock, Unlock, Mail, Phone, Calendar, CheckCircle2, Clock, Trash2, Edit3, Save, LogOut, ArrowLeft, RefreshCw, AlertCircle } from 'lucide-react';
import { Enquiry, Product, Project, Testimonial, SiteInfo } from '@/lib/types';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Data states
  const [activeTab, setActiveTab] = useState<'enquiries' | 'products' | 'projects' | 'testimonials' | 'siteInfo'>('enquiries');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  // Check auth on mount
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await fetch('/api/admin/auth');
      if (res.ok) {
        setIsAuthenticated(true);
        loadAdminData();
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const loadAdminData = async () => {
    try {
      const res = await fetch('/api/admin/data');
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setEnquiries(json.data.enquiries || []);
          setProducts(json.data.products || []);
          setProjects(json.data.projects || []);
          setTestimonials(json.data.testimonials || []);
          setSiteInfo(json.data.siteInfo || null);
        }
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPasswordInput('');
        loadAdminData();
      } else {
        setLoginError(data.error || 'Authentication failed. Please check password.');
      }
    } catch {
      setLoginError('Server error during authentication.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
  };

  const updateEnquiryStatus = async (id: string, newStatus: 'new' | 'contacted' | 'resolved') => {
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_enquiry_status',
          payload: { id, status: newStatus }
        })
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        flashStatus('Enquiry status updated');
      }
    } catch (err) {
      alert('Failed to update enquiry');
    }
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete_enquiry',
          payload: { id }
        })
      });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        flashStatus('Enquiry removed');
      }
    } catch (err) {
      alert('Failed to delete enquiry');
    }
  };

  const saveSiteInfo = async () => {
    if (!siteInfo) return;
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update_site_info',
          payload: siteInfo
        })
      });
      if (res.ok) {
        flashStatus('Company information saved successfully');
      }
    } catch (err) {
      alert('Failed to save settings');
    }
  };

  const flashStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 3000);
  };

  // Login Screen
  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-[#F5F7F5] flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
          <div className="text-center space-y-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-[#17231D]">
              Super Sand Admin Portal
            </h1>
            <p className="text-xs text-gray-500">
              Sai Super Sand Minerals Pvt. Ltd. Management Console
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter admin password (default: supersand2026)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#087A35] hover:bg-[#06632B] text-white py-3.5 rounded-full font-bold text-sm tracking-wide shadow-brand transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs font-bold text-gray-500 hover:text-[#087A35] flex items-center justify-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-500 text-sm">
        Verifying security credentials...
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#F5F7F5] flex flex-col">
      {/* Admin Top Header */}
      <header className="bg-[#004B2D] text-white px-6 py-4 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="/images/logos/logo-white.png"
              alt="Super Sand"
              className="h-9 w-auto"
            />
          </Link>
          <span className="hidden sm:inline text-xs font-bold bg-[#F4C928] text-[#004B2D] px-2.5 py-1 rounded-full uppercase tracking-wider">
            Admin Console
          </span>
        </div>

        <div className="flex items-center gap-4">
          {statusMessage && (
            <span className="text-xs bg-white/20 text-white font-bold px-3 py-1 rounded-full animate-fade">
              {statusMessage}
            </span>
          )}

          <button
            onClick={loadAdminData}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs font-bold bg-red-600/80 hover:bg-red-600 text-white px-3.5 py-1.5 rounded-full transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Admin Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'enquiries'
                ? 'bg-[#087A35] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <span>Material Enquiries</span>
            <span className="w-5 h-5 rounded-full bg-white text-[#087A35] text-[10px] font-black flex items-center justify-center">
              {enquiries.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'products'
                ? 'bg-[#087A35] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Products ({products.length})
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'projects'
                ? 'bg-[#087A35] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Projects ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'testimonials'
                ? 'bg-[#087A35] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Testimonials ({testimonials.length})
          </button>

          <button
            onClick={() => setActiveTab('siteInfo')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === 'siteInfo'
                ? 'bg-[#087A35] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Company & Contact Settings
          </button>
        </div>

        {/* Tab 1: Material Enquiries */}
        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-[#17231D]">Incoming Material Enquiries</h2>
                <p className="text-xs text-gray-500">Direct lead requests submitted from website forms and enquiry modals.</p>
              </div>
            </div>

            {enquiries.length === 0 ? (
              <div className="py-12 text-center text-gray-400 text-sm">
                No customer enquiries recorded yet.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {enquiries.map((enq) => (
                  <div key={enq.id} className="py-5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="text-base font-black text-[#17231D]">{enq.fullName}</h4>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                          enq.status === 'new'
                            ? 'bg-blue-100 text-blue-700'
                            : enq.status === 'contacted'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {enq.status}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {new Date(enq.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                        <span className="flex items-center gap-1 font-bold text-[#087A35]">
                          <Phone className="w-3.5 h-3.5" />
                          <a href={`tel:${enq.phoneNumber}`} className="hover:underline">{enq.phoneNumber}</a>
                        </span>
                        {enq.email && (
                          <span className="flex items-center gap-1 text-gray-500">
                            <Mail className="w-3.5 h-3.5" />
                            <a href={`mailto:${enq.email}`} className="hover:underline">{enq.email}</a>
                          </span>
                        )}
                        <span className="font-semibold text-gray-800">
                          Product: <strong>{enq.productSelection}</strong>
                        </span>
                        {enq.quantity && (
                          <span className="text-gray-500">
                            Qty: <strong>{enq.quantity}</strong>
                          </span>
                        )}
                      </div>

                      {enq.message && (
                        <p className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                          "{enq.message}"
                        </p>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 self-end md:self-center">
                      <select
                        value={enq.status}
                        onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as any)}
                        className="text-xs font-bold border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none"
                      >
                        <option value="new">Mark New</option>
                        <option value="contacted">Mark Contacted</option>
                        <option value="resolved">Mark Resolved</option>
                      </select>

                      <button
                        onClick={() => deleteEnquiry(enq.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Products */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-gray-100"
                    />
                    <div>
                      <h3 className="text-lg font-black text-[#17231D]">{p.name}</h3>
                      <p className="text-xs text-[#087A35] font-bold">{p.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {p.fullDesc}
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-xs font-bold text-[#087A35] hover:underline"
                    >
                      View Live Product Page →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Projects */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-20 h-14 rounded-xl object-cover border border-gray-100"
                  />
                  <div>
                    <h3 className="text-base font-black text-[#17231D]">{proj.title}</h3>
                    <p className="text-xs text-gray-500">{proj.location}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{proj.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div key={test.id} className="bg-white rounded-3xl p-6 shadow-card border border-gray-100 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#087A35]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#17231D]">{test.name}</h4>
                    <p className="text-xs text-gray-500">{test.designation} | {test.company}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 italic">"{test.quote}"</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 5: Company & Contact Settings */}
        {activeTab === 'siteInfo' && siteInfo && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100 max-w-3xl space-y-6">
            <div>
              <h2 className="text-xl font-black text-[#17231D]">Corporate Identity & Contacts</h2>
              <p className="text-xs text-gray-500">Live configuration for phone numbers, address, and legal identity.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Brand Name</label>
                <input
                  type="text"
                  value={siteInfo.businessName}
                  onChange={(e) => setSiteInfo({ ...siteInfo, businessName: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Legal Entity Name</label>
                <input
                  type="text"
                  value={siteInfo.legalName}
                  onChange={(e) => setSiteInfo({ ...siteInfo, legalName: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Primary Phone</label>
                <input
                  type="text"
                  value={siteInfo.primaryPhone}
                  onChange={(e) => setSiteInfo({ ...siteInfo, primaryPhone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Alternative Phone</label>
                <input
                  type="text"
                  value={siteInfo.altPhone}
                  onChange={(e) => setSiteInfo({ ...siteInfo, altPhone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Primary Email</label>
                <input
                  type="email"
                  value={siteInfo.primaryEmail}
                  onChange={(e) => setSiteInfo({ ...siteInfo, primaryEmail: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">WhatsApp Hotline</label>
                <input
                  type="text"
                  value={siteInfo.whatsappNumber}
                  onChange={(e) => setSiteInfo({ ...siteInfo, whatsappNumber: e.target.value })}
                  className="w-full px-3 py-2 border rounded-xl text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Registered Address</label>
              <textarea
                rows={2}
                value={siteInfo.address}
                onChange={(e) => setSiteInfo({ ...siteInfo, address: e.target.value })}
                className="w-full px-3 py-2 border rounded-xl text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Official Vision</label>
              <textarea
                rows={2}
                value={siteInfo.vision}
                onChange={(e) => setSiteInfo({ ...siteInfo, vision: e.target.value })}
                className="w-full px-3 py-2 border rounded-xl text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Official Mission</label>
              <textarea
                rows={2}
                value={siteInfo.mission}
                onChange={(e) => setSiteInfo({ ...siteInfo, mission: e.target.value })}
                className="w-full px-3 py-2 border rounded-xl text-sm resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                onClick={saveSiteInfo}
                className="bg-[#087A35] hover:bg-[#06632B] text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow"
              >
                <Save className="w-4 h-4" />
                <span>Save Company Settings</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
