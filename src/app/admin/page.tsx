"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Lock,
  Unlock,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  Trash2,
  Edit3,
  Save,
  LogOut,
  ArrowLeft,
  RefreshCw,
  AlertCircle,
  Plus,
  Image as ImageIcon,
  Upload,
  Eye,
  Layers,
  Briefcase,
  Users,
  Building2,
  Award,
  ShieldCheck,
  Leaf,
  Factory,
  MessageSquare,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  X,
  FileText,
  MapPin,
  Sparkles,
  Sliders,
  Globe,
  Database
} from 'lucide-react';
import {
  FullCMSData,
  Product,
  Service,
  Project,
  Testimonial,
  GalleryItem,
  Enquiry,
  SiteInfo,
  HeroSlide,
  Director,
  TeamCard,
  ClientPartner,
  JobOpening,
  JobApplication,
  ContactSettings,
  NavigationItem,
  SectionSetting,
  WhyChooseUsPillar
} from '@/lib/types';
import { defaultCMSData } from '@/lib/default-cms-data';

type AdminTab =
  | 'overview'
  | 'home'
  | 'about'
  | 'products'
  | 'services'
  | 'gallery'
  | 'infrastructure'
  | 'sustainability'
  | 'projects'
  | 'partners'
  | 'testimonials'
  | 'careers'
  | 'contact'
  | 'navigation'
  | 'sections'
  | 'media';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Active navigation tab
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Full CMS Data State
  const [cmsData, setCmsData] = useState<FullCMSData>(defaultCMSData);
  const [loadingData, setLoadingData] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Editing Modals / Selection States
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isNewProduct, setIsNewProduct] = useState(false);

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isNewService, setIsNewService] = useState(false);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  const [editingDirector, setEditingDirector] = useState<Director | null>(null);
  const [editingPartner, setEditingPartner] = useState<ClientPartner | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isNewTestimonial, setIsNewTestimonial] = useState(false);

  const [editingJob, setEditingJob] = useState<JobOpening | null>(null);
  const [isNewJob, setIsNewJob] = useState(false);

  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);
  const [isNewGalleryItem, setIsNewGalleryItem] = useState(false);

  // Image Upload helper
  const [uploadingImage, setUploadingImage] = useState(false);
  const [activeImageFieldTarget, setActiveImageFieldTarget] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
    setLoadingData(true);
    try {
      const res = await fetch('/api/admin/data');
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setCmsData(json.data);
        }
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setAuthLoading(true);

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
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
  };

  const flashStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 3500);
  };

  // Generic API Save Handler
  const saveAction = async (action: string, payload: any, successMessage = 'Changes saved successfully') => {
    try {
      const res = await fetch('/api/admin/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, payload })
      });
      if (res.ok) {
        flashStatus(successMessage);
        loadAdminData();

        // Broadcast to live website tabs immediately
        if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
          try {
            const channel = new BroadcastChannel('super_sand_cms_sync');
            channel.postMessage({ type: 'CMS_UPDATED', timestamp: Date.now() });
            channel.close();
          } catch (e) {
            // Ignore channel errors
          }
        }
        return true;
      } else {
        const json = await res.json();
        alert(json.error || 'Failed to save changes');
        return false;
      }
    } catch (err) {
      alert('Network error while saving changes');
      return false;
    }
  };

  // Image Upload Trigger
  const triggerImageUpload = (fieldTarget: string) => {
    setActiveImageFieldTarget(fieldTarget);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeImageFieldTarget) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('associatedContent', activeImageFieldTarget);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();

      if (res.ok && data.success && data.asset?.url) {
        const uploadedUrl = data.asset.url;
        flashStatus('Image uploaded & referenced successfully');

        // Apply URL based on active target
        applyUploadedUrl(activeImageFieldTarget, uploadedUrl);
      } else {
        alert(data.error || 'Failed to upload image');
      }
    } catch (err) {
      alert('Upload failed. Server connection error.');
    } finally {
      setUploadingImage(false);
      setActiveImageFieldTarget(null);
    }
  };

  const applyUploadedUrl = (target: string, url: string) => {
    if (target.startsWith('hero_desktop_')) {
      const id = parseInt(target.replace('hero_desktop_', ''), 10);
      const updated = cmsData.heroSlides.map((s) => (s.id === id ? { ...s, desktopImage: url } : s));
      setCmsData({ ...cmsData, heroSlides: updated });
      saveAction('update_hero_slides', updated, 'Hero desktop image updated');
    } else if (target.startsWith('hero_mobile_')) {
      const id = parseInt(target.replace('hero_mobile_', ''), 10);
      const updated = cmsData.heroSlides.map((s) => (s.id === id ? { ...s, mobileImage: url } : s));
      setCmsData({ ...cmsData, heroSlides: updated });
      saveAction('update_hero_slides', updated, 'Hero mobile image updated');
    } else if (target === 'editing_product') {
      if (editingProduct) setEditingProduct({ ...editingProduct, image: url });
    } else if (target === 'editing_service') {
      if (editingService) setEditingService({ ...editingService, mainImage: url });
    } else if (target === 'editing_project') {
      if (editingProject) setEditingProject({ ...editingProject, image: url });
    } else if (target === 'editing_director') {
      if (editingDirector) setEditingDirector({ ...editingDirector, image: url });
    } else if (target === 'editing_gallery') {
      if (editingGalleryItem) setEditingGalleryItem({ ...editingGalleryItem, image: url });
    } else if (target === 'partner_master_banner') {
      setCmsData({ ...cmsData, partnerMasterBanner: url });
      saveAction('update_partner_master', { banner: url }, 'Partner master banner updated');
    } else if (target === 'team_collective_image') {
      setCmsData({ ...cmsData, teamCollective: { ...cmsData.teamCollective, image: url } });
      saveAction('update_team_collective', { image: url }, 'Team collective photo updated');
    } else if (target.startsWith('team_card_')) {
      const id = target.replace('team_card_', '');
      const updated = cmsData.teamCards.map((c) => (c.id === id ? { ...c, image: url } : c));
      setCmsData({ ...cmsData, teamCards: updated });
      saveAction('update_team_cards', updated, 'Team card photo updated');
    }
  };

  // --------------------------------------------------------------------------
  // LOGIN SCREEN
  // --------------------------------------------------------------------------
  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen bg-[#F5FAF6] flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl border border-[#087A35]/20">
          <div className="text-center space-y-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] text-[#087A35] flex items-center justify-center mx-auto shadow-inner border border-[#087A35]/20">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black text-[#17231D]">
              Super Sand CMS Portal
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              Sai Super Sand Minerals Pvt. Ltd. Management Console
            </p>
          </div>

          {loginError && (
            <div className="mb-4 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2 font-medium">
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
                placeholder="Enter password (default: supersand2026)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-[#087A35] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#087A35] hover:bg-[#06632B] text-white py-3.5 rounded-full font-bold text-sm tracking-wide shadow-brand transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {authLoading ? 'Verifying...' : 'Sign In to Super Sand CMS'}
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
      <div className="min-h-screen flex items-center justify-center bg-[#F5FAF6] text-[#087A35] font-bold text-sm">
        Verifying security credentials...
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F5FAF6] flex flex-col antialiased">
      
      {/* Hidden File Input for Real Cloudinary/Local Uploads */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Top Bar */}
      <header className="bg-[#004B2D] text-white px-4 sm:px-8 py-3.5 shadow-lg flex items-center justify-between sticky top-0 z-40 border-b border-[#087A35]/30">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
          >
            <Sliders className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center gap-3 group" title="View Public Website">
            <img
              src="/images/logos/logo-white.png"
              alt="Super Sand"
              className="h-8 sm:h-9 w-auto"
            />
            <span className="hidden md:inline text-[11px] font-extrabold bg-[#F4C928] text-[#004B2D] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              CMS Engine
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {statusMessage && (
            <span className="text-xs bg-[#087A35] text-white font-bold px-3 py-1.5 rounded-full shadow-md animate-fade flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C928]" />
              <span>{statusMessage}</span>
            </span>
          )}

          <button
            onClick={loadAdminData}
            disabled={loadingData}
            title="Refresh All Database Records"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin text-[#F4C928]' : ''}`} />
          </button>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-full transition-colors"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1 bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold px-3.5 py-2 rounded-full transition-colors shadow-sm"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Container: Sidebar + Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Navigation Sidebar */}
        <aside
          className={`fixed lg:static top-14 bottom-0 left-0 w-64 bg-white border-r border-gray-200/80 p-4 overflow-y-auto z-30 transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="text-[10px] font-black uppercase tracking-wider text-gray-400 px-3 mb-2">
            CMS MODULES
          </div>

          <nav className="space-y-1 text-xs font-bold">
            <button
              onClick={() => { setActiveTab('overview'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'overview' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4" />
                <span>Dashboard Overview</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('home'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'home' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4" />
                <span>Home Page Manager</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.heroSlides.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('about'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'about' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>About & Leadership</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.directors.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('products'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'products' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4" />
                <span>Products Manager</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.products.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('services'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'services' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Factory className="w-4 h-4" />
                <span>Services (7 Operations)</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.services.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('gallery'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'gallery' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ImageIcon className="w-4 h-4" />
                <span>Operations Gallery</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.gallery.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('infrastructure'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'infrastructure' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4" />
                <span>Infrastructure (5 Lines)</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.infrastructureItems.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('sustainability'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'sustainability' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Leaf className="w-4 h-4" />
                <span>Sustainability</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.sustainabilityItems.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('projects'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'projects' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4" />
                <span>Landmark Projects</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.projects.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('partners'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'partners' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4" />
                <span>14 Client Partners</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.clientPartners.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('testimonials'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'testimonials' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4" />
                <span>Testimonials</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.testimonials.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('careers'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'careers' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4" />
                <span>Careers & Openings</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.jobOpenings.length}</span>
            </button>

            <button
              onClick={() => { setActiveTab('contact'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'contact' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" />
                <span>Contact & Maps</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.enquiries.length} Enq</span>
            </button>

            <button
              onClick={() => { setActiveTab('navigation'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'navigation' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4" />
                <span>Header & Footer</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('sections'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'sections' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4" />
                <span>Section Builder</span>
              </div>
            </button>

            <button
              onClick={() => { setActiveTab('media'); setSidebarOpen(false); }}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors ${
                activeTab === 'media' ? 'bg-[#087A35] text-white shadow-md' : 'text-gray-700 hover:bg-[#E8F5E9]/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Database className="w-4 h-4" />
                <span>Media & Assets</span>
              </div>
              <span className="text-[10px] opacity-75">{cmsData.mediaAssets.length}</span>
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#17231D]">
                    Dashboard Overview
                  </h2>
                  <p className="text-xs text-gray-500 font-medium">
                    Live database synchronization active • All content backed by single source of truth
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (confirm('Restore all content to factory production defaults? This will reseed all products, services, photos, and settings.')) {
                        saveAction('reset_to_defaults', {}, 'Factory defaults restored');
                      }
                    }}
                    className="text-xs font-bold text-gray-500 hover:text-red-600 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-red-200 transition-colors"
                  >
                    Reset Defaults
                  </button>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div onClick={() => setActiveTab('products')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.products.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Products Managed</div>
                  <div className="text-[10px] text-gray-500">Coarse, Fine M-Sand, DLC</div>
                </div>

                <div onClick={() => setActiveTab('services')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.services.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Services & Operations</div>
                  <div className="text-[10px] text-gray-500">Quarrying, VSI, Lab QA</div>
                </div>

                <div onClick={() => setActiveTab('projects')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.projects.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Landmark Projects</div>
                  <div className="text-[10px] text-gray-500">Highways, Metro, Highrises</div>
                </div>

                <div onClick={() => setActiveTab('partners')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.clientPartners.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Client Partners</div>
                  <div className="text-[10px] text-gray-500">NHAI, L&T, Railways, etc.</div>
                </div>

                <div onClick={() => setActiveTab('contact')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.enquiries.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Total Enquiries</div>
                  <div className="text-[10px] text-gray-500">
                    {cmsData.enquiries.filter((e) => e.status === 'new').length} New Pending
                  </div>
                </div>

                <div onClick={() => setActiveTab('careers')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.jobOpenings.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Active Job Openings</div>
                  <div className="text-[10px] text-gray-500">{cmsData.jobApplications.length} Candidates</div>
                </div>

                <div onClick={() => setActiveTab('gallery')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.gallery.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Gallery Photographs</div>
                  <div className="text-[10px] text-gray-500">7 Operational Categories</div>
                </div>

                <div onClick={() => setActiveTab('testimonials')} className="glass-card p-5 rounded-2xl border border-[#087A35]/20 hover:border-[#087A35] transition-all cursor-pointer">
                  <div className="text-3xl font-black text-[#087A35]">{cmsData.testimonials.length}</div>
                  <div className="text-xs font-bold text-gray-700 mt-1">Testimonials & Reviews</div>
                  <div className="text-[10px] text-gray-500">Tier-1 Builder Endorsements</div>
                </div>
              </div>

              {/* Recent Activity Log */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black text-[#17231D] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#087A35]" />
                    <span>Recent Admin & Content Audit Logs</span>
                  </h3>
                  <span className="text-[11px] font-bold text-gray-500">Last 10 Actions</span>
                </div>

                <div className="divide-y divide-gray-100">
                  {cmsData.activityLogs.slice(0, 10).map((log) => (
                    <div key={log.id} className="py-2.5 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-extrabold text-[#087A35] bg-[#E8F5E9] px-2 py-0.5 rounded-full text-[10px] mr-2">
                          {log.module}
                        </span>
                        <span className="font-medium text-gray-800">{log.description}</span>
                      </div>
                      <span className="text-[11px] text-gray-400">
                        {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HOME PAGE MANAGER */}
          {activeTab === 'home' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Home Page Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Hero carousel slides, quality highlights, and Why Choose Us pillars</p>
                </div>
                <button
                  onClick={() => {
                    const newId = Date.now();
                    const newSlide: HeroSlide = {
                      id: newId,
                      tag: "NEW SLIDE",
                      titleLine1: "Engineered",
                      titleLine2: "Quality Minerals",
                      subtitle: "High performance aggregates customized for heavy commercial builds.",
                      desktopImage: "/images/hero/hero-desktop-1.png",
                      mobileImage: "/images/hero/hero-mobile-1.png",
                      ctaText: "Explore Products",
                      ctaLink: "/products",
                      isPublished: true,
                      displayOrder: cmsData.heroSlides.length + 1
                    };
                    const updated = [...cmsData.heroSlides, newSlide];
                    setCmsData({ ...cmsData, heroSlides: updated });
                    saveAction('update_hero_slides', updated, 'Added new hero slide');
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Hero Slide</span>
                </button>
              </div>

              {/* Hero Slides List */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-gray-500 tracking-wider">
                  Hero Slides ({cmsData.heroSlides.length})
                </h3>

                {cmsData.heroSlides.map((slide, idx) => (
                  <div key={slide.id} className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-md flex flex-col md:flex-row gap-5 items-start">
                    {/* Dual Image Preview: Desktop Banner + Mobile View Visible Side-by-Side */}
                    <div className="w-full lg:w-[350px] flex-shrink-0 space-y-2 bg-gradient-to-br from-gray-50 to-gray-100/60 p-3 rounded-2xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-200/60">
                        <span>Slide Visuals</span>
                        <span className="text-[#087A35] font-extrabold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#087A35] animate-ping" />
                          Desktop + Mobile Active
                        </span>
                      </div>

                      <div className="grid grid-cols-12 gap-2.5 items-stretch">
                        
                        {/* 1. Desktop Image Preview (Wide 16:9) */}
                        <div className="col-span-7 flex flex-col justify-between space-y-1.5">
                          <div className="relative rounded-xl overflow-hidden h-32 bg-gray-900 border border-gray-300 shadow-sm group">
                            <img
                              src={slide.desktopImage}
                              alt={`Slide ${idx + 1} Desktop`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-1.5 left-1.5 bg-[#004B2D]/95 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow">
                              🖥️ Desktop (16:9)
                            </span>
                          </div>
                          <button
                            onClick={() => triggerImageUpload(`hero_desktop_${slide.id}`)}
                            className="w-full bg-white hover:bg-[#E8F5E9] text-[10px] font-bold text-[#087A35] py-2 rounded-lg border border-gray-300 shadow-sm flex items-center justify-center gap-1 transition-colors"
                          >
                            <Upload className="w-3 h-3" />
                            <span>Replace Desk</span>
                          </button>
                        </div>

                        {/* 2. Mobile View Image Preview (Visible Phone Portrait) */}
                        <div className="col-span-5 flex flex-col justify-between space-y-1.5">
                          <div className="relative rounded-xl overflow-hidden h-32 bg-gray-900 border-2 border-[#087A35] shadow-sm group">
                            <img
                              src={slide.mobileImage || slide.desktopImage}
                              alt={`Slide ${idx + 1} Mobile`}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 brightness-[1.08]"
                            />
                            <span className="absolute top-1.5 left-1.5 bg-[#087A35] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow">
                              📱 Mobile View
                            </span>
                          </div>
                          <button
                            onClick={() => triggerImageUpload(`hero_mobile_${slide.id}`)}
                            className="w-full bg-[#E8F5E9] hover:bg-[#087A35] hover:text-white text-[10px] font-bold text-[#087A35] py-2 rounded-lg border border-[#087A35]/30 shadow-sm flex items-center justify-center gap-1 transition-colors"
                          >
                            <Upload className="w-3 h-3" />
                            <span>Replace Mob</span>
                          </button>
                        </div>

                      </div>

                      <div className="text-[9px] text-gray-500 font-semibold flex items-center justify-between px-1 pt-1 border-t border-gray-200/60">
                        <span>Desktop: 1920×1080</span>
                        <span className="text-[#087A35] font-bold">Mobile: 800×1200 HD</span>
                      </div>
                    </div>

                    {/* Slide Text Inputs */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      <div>
                        <label className="text-[11px] font-bold text-gray-600 block mb-0.5">Category Tag</label>
                        <input
                          type="text"
                          value={slide.tag}
                          onChange={(e) => {
                            const updated = cmsData.heroSlides.map((s) => (s.id === slide.id ? { ...s, tag: e.target.value } : s));
                            setCmsData({ ...cmsData, heroSlides: updated });
                          }}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#087A35]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-gray-600 block mb-0.5">CTA Text</label>
                        <input
                          type="text"
                          value={slide.ctaText}
                          onChange={(e) => {
                            const updated = cmsData.heroSlides.map((s) => (s.id === slide.id ? { ...s, ctaText: e.target.value } : s));
                            setCmsData({ ...cmsData, heroSlides: updated });
                          }}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#087A35]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-gray-600 block mb-0.5">Headline Line 1</label>
                        <input
                          type="text"
                          value={slide.titleLine1}
                          onChange={(e) => {
                            const updated = cmsData.heroSlides.map((s) => (s.id === slide.id ? { ...s, titleLine1: e.target.value } : s));
                            setCmsData({ ...cmsData, heroSlides: updated });
                          }}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#087A35]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-gray-600 block mb-0.5">Headline Line 2 (Green Highlight)</label>
                        <input
                          type="text"
                          value={slide.titleLine2}
                          onChange={(e) => {
                            const updated = cmsData.heroSlides.map((s) => (s.id === slide.id ? { ...s, titleLine2: e.target.value } : s));
                            setCmsData({ ...cmsData, heroSlides: updated });
                          }}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#087A35]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-bold text-gray-600 block mb-0.5">Subtitle Description</label>
                        <textarea
                          rows={2}
                          value={slide.subtitle}
                          onChange={(e) => {
                            const updated = cmsData.heroSlides.map((s) => (s.id === slide.id ? { ...s, subtitle: e.target.value } : s));
                            setCmsData({ ...cmsData, heroSlides: updated });
                          }}
                          className="w-full px-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-[#087A35]"
                        />
                      </div>
                    </div>

                    {/* Slide Actions */}
                    <div className="flex md:flex-col gap-2">
                      <button
                        onClick={() => saveAction('update_hero_slides', cmsData.heroSlides, 'Hero slides saved')}
                        className="bg-[#087A35] hover:bg-[#06632B] text-white p-2.5 rounded-xl shadow-md"
                        title="Save Changes"
                      >
                        <Save className="w-4 h-4" />
                      </button>
                      {cmsData.heroSlides.length > 1 && (
                        <button
                          onClick={() => {
                            if (confirm('Delete this hero slide?')) {
                              const updated = cmsData.heroSlides.filter((s) => s.id !== slide.id);
                              setCmsData({ ...cmsData, heroSlides: updated });
                              saveAction('update_hero_slides', updated, 'Slide deleted');
                            }
                          }}
                          className="bg-red-50 hover:bg-red-100 text-red-600 p-2.5 rounded-xl"
                          title="Delete Slide"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us 6 Pillars */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-[#17231D]">Why Choose Us (6 Pillars)</h3>
                  <button
                    onClick={() => saveAction('update_why_choose_us', cmsData.whyChooseUs, 'Why Choose Us saved')}
                    className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save All Pillars</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cmsData.whyChooseUs.map((pillar) => (
                    <div key={pillar.id} className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <input
                          type="text"
                          value={pillar.title}
                          onChange={(e) => {
                            const updated = cmsData.whyChooseUs.map((p) => (p.id === pillar.id ? { ...p, title: e.target.value } : p));
                            setCmsData({ ...cmsData, whyChooseUs: updated });
                          }}
                          className="font-bold text-sm bg-transparent border-b border-gray-300 focus:outline-none focus:border-[#087A35] flex-1 mr-2"
                        />
                        <input
                          type="text"
                          value={pillar.stats || ''}
                          placeholder="Stat Pill"
                          onChange={(e) => {
                            const updated = cmsData.whyChooseUs.map((p) => (p.id === pillar.id ? { ...p, stats: e.target.value } : p));
                            setCmsData({ ...cmsData, whyChooseUs: updated });
                          }}
                          className="text-[10px] font-bold text-[#087A35] bg-white px-2 py-0.5 rounded border border-gray-200 w-28 text-center"
                        />
                      </div>
                      <textarea
                        rows={2}
                        value={pillar.desc}
                        onChange={(e) => {
                          const updated = cmsData.whyChooseUs.map((p) => (p.id === pillar.id ? { ...p, desc: e.target.value } : p));
                          setCmsData({ ...cmsData, whyChooseUs: updated });
                        }}
                        className="w-full text-xs text-gray-700 bg-white p-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#087A35]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ABOUT US & LEADERSHIP */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">About Us & Leadership Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Corporate history, vision, mission, Board of Directors, and engineering team cards</p>
                </div>
              </div>

              {/* Corporate Legacy & Milestones */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-[#17231D]">Corporate History & Vision</h3>
                  <button
                    onClick={() => saveAction('update_site_info', cmsData.siteInfo, 'Corporate profile saved')}
                    className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Profile</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Company Legal Name</label>
                    <input
                      type="text"
                      value={cmsData.siteInfo.legalName}
                      onChange={(e) => setCmsData({ ...cmsData, siteInfo: { ...cmsData.siteInfo, legalName: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Brand Name</label>
                    <input
                      type="text"
                      value={cmsData.siteInfo.businessName}
                      onChange={(e) => setCmsData({ ...cmsData, siteInfo: { ...cmsData.siteInfo, businessName: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Established Year</label>
                    <input
                      type="number"
                      value={cmsData.siteInfo.establishedYear}
                      onChange={(e) => setCmsData({ ...cmsData, siteInfo: { ...cmsData.siteInfo, establishedYear: parseInt(e.target.value, 10) || 2006 } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Commercial Operations Year</label>
                    <input
                      type="number"
                      value={cmsData.siteInfo.productionOperationsYear}
                      onChange={(e) => setCmsData({ ...cmsData, siteInfo: { ...cmsData.siteInfo, productionOperationsYear: parseInt(e.target.value, 10) || 2008 } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Corporate Vision</label>
                    <textarea
                      rows={3}
                      value={cmsData.siteInfo.vision}
                      onChange={(e) => setCmsData({ ...cmsData, siteInfo: { ...cmsData.siteInfo, vision: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Corporate Mission</label>
                    <textarea
                      rows={3}
                      value={cmsData.siteInfo.mission}
                      onChange={(e) => setCmsData({ ...cmsData, siteInfo: { ...cmsData.siteInfo, mission: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                </div>
              </div>

              {/* Board of Directors Grid */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-black text-[#17231D]">Board of Directors (3 Profiles)</h3>
                    <p className="text-xs text-gray-500">Manage names, designations, high-res portraits, and qualifications</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cmsData.directors.map((director) => (
                    <div key={director.id} className="p-4 rounded-2xl border border-gray-200/80 bg-gray-50/50 space-y-3">
                      <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gray-200 border border-gray-300">
                        <img src={director.image} alt={director.name} className="w-full h-full object-cover object-top" />
                        <button
                          onClick={() => {
                            setEditingDirector(director);
                            triggerImageUpload('editing_director');
                          }}
                          className="absolute bottom-2 right-2 bg-[#087A35] text-white p-2 rounded-full shadow-md hover:bg-[#06632B]"
                          title="Replace Director Photo"
                        >
                          <Upload className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <input
                          type="text"
                          value={director.name}
                          onChange={(e) => {
                            const updated = cmsData.directors.map((d) => (d.id === director.id ? { ...d, name: e.target.value } : d));
                            setCmsData({ ...cmsData, directors: updated });
                          }}
                          className="font-bold text-sm text-[#17231D] w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-[#087A35]"
                        />
                        <input
                          type="text"
                          value={director.designation}
                          onChange={(e) => {
                            const updated = cmsData.directors.map((d) => (d.id === director.id ? { ...d, designation: e.target.value } : d));
                            setCmsData({ ...cmsData, directors: updated });
                          }}
                          className="text-xs font-bold text-[#087A35] w-full mt-1 bg-transparent border-b border-gray-200 focus:outline-none"
                        />
                      </div>

                      <textarea
                        rows={3}
                        value={director.bio}
                        onChange={(e) => {
                          const updated = cmsData.directors.map((d) => (d.id === director.id ? { ...d, bio: e.target.value } : d));
                          setCmsData({ ...cmsData, directors: updated });
                        }}
                        className="w-full text-xs text-gray-700 bg-white p-2 rounded-lg border border-gray-200 focus:outline-none"
                      />

                      <button
                        onClick={() => saveAction('update_directors', cmsData.directors, 'Director profile saved')}
                        className="w-full bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Profile</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who We Are Team Cards (image copy 68 & 69) */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-[#17231D]">Who We Are (Engineering & Operations Cards)</h3>
                  <button
                    onClick={() => saveAction('update_team_cards', cmsData.teamCards, 'Team cards saved')}
                    className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Cards</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cmsData.teamCards.map((card) => (
                    <div key={card.id} className="p-4 rounded-2xl border border-gray-200 bg-gray-50/60 space-y-3">
                      <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gray-900">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <button
                          onClick={() => triggerImageUpload(`team_card_${card.id}`)}
                          className="absolute bottom-2 right-2 bg-[#087A35] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>Replace Photo</span>
                        </button>
                      </div>

                      <input
                        type="text"
                        value={card.title}
                        onChange={(e) => {
                          const updated = cmsData.teamCards.map((c) => (c.id === card.id ? { ...c, title: e.target.value } : c));
                          setCmsData({ ...cmsData, teamCards: updated });
                        }}
                        className="font-bold text-base text-[#17231D] w-full border-b border-gray-300 bg-transparent focus:outline-none"
                      />

                      <textarea
                        rows={2}
                        value={card.description}
                        onChange={(e) => {
                          const updated = cmsData.teamCards.map((c) => (c.id === card.id ? { ...c, description: e.target.value } : c));
                          setCmsData({ ...cmsData, teamCards: updated });
                        }}
                        className="w-full text-xs text-gray-700 bg-white p-2 rounded-lg border border-gray-200"
                      />

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <input
                          type="text"
                          value={card.stat1Value}
                          onChange={(e) => {
                            const updated = cmsData.teamCards.map((c) => (c.id === card.id ? { ...c, stat1Value: e.target.value } : c));
                            setCmsData({ ...cmsData, teamCards: updated });
                          }}
                          className="bg-white p-1.5 rounded border border-gray-200 font-bold text-[#087A35]"
                        />
                        <input
                          type="text"
                          value={card.stat2Value}
                          onChange={(e) => {
                            const updated = cmsData.teamCards.map((c) => (c.id === card.id ? { ...c, stat2Value: e.target.value } : c));
                            setCmsData({ ...cmsData, teamCards: updated });
                          }}
                          className="bg-white p-1.5 rounded border border-gray-200 font-bold text-[#087A35]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PRODUCTS MANAGER */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Products Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Manage all 8 aggregate & sand specifications, images, and applications</p>
                </div>

                <button
                  onClick={() => {
                    const newProd: Product = {
                      id: `prod-${Date.now()}`,
                      slug: `new-aggregate-${Date.now()}`,
                      name: "New Engineered Aggregate",
                      subtitle: "Precision Manufactured Granite Product",
                      tagline: "High strength certified material.",
                      shortDesc: "Manufactured from dense virgin granite rock.",
                      fullDesc: "Detailed product specifications conforming strictly to Bureau of Indian Standards IS 383:2016.",
                      image: "/images/products/coarse-aggregate-mix-hd.png",
                      sizesOrTypes: ["Standard Size"],
                      applications: ["Structural concrete", "RCC slabs"],
                      features: ["100% Cubical", "Zero Silt"],
                      specifications: { "Standard": "IS 383:2016", "Silt": "0%" },
                      isPublished: true,
                      displayOrder: cmsData.products.length + 1
                    };
                    setEditingProduct(newProd);
                    setIsNewProduct(true);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md self-start"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Product</span>
                </button>
              </div>

              {/* Products Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cmsData.products.map((product) => (
                  <div key={product.id} className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-md flex flex-col justify-between group">
                    <div>
                      {/* Product Image Frame */}
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-900 mb-3 border border-gray-200">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <span className="absolute top-2 right-2 bg-[#087A35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          #{product.displayOrder || 1}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-[#17231D] mb-1 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                        {product.shortDesc}
                      </p>

                      <div className="text-[11px] font-semibold text-[#087A35] bg-[#E8F5E9] px-2.5 py-1 rounded-lg line-clamp-1 mb-2">
                        {product.sizesOrTypes?.slice(0, 2).join(' • ')}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setEditingProduct(product);
                          setIsNewProduct(false);
                        }}
                        className="text-xs font-bold text-[#087A35] hover:underline flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Product</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Delete product "${product.name}"?`)) {
                            saveAction('delete_product', { id: product.id }, 'Product deleted');
                          }
                        }}
                        className="text-gray-400 hover:text-red-600 p-1 rounded"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SERVICES MANAGER */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Services Manager ({cmsData.services.length} Operations)</h2>
                  <p className="text-xs text-gray-500 font-medium">Quarrying, crushing, quality assurance, fleet logistics, and plant workshop</p>
                </div>

                <button
                  onClick={() => {
                    setIsNewService(true);
                    const newId = `srv-${Date.now()}`;
                    setEditingService({
                      id: newId,
                      slug: `service-${Date.now()}`,
                      title: '',
                      category: 'Quarrying',
                      tagline: 'Precision Engineered Operation',
                      description: '',
                      mainImage: '/images/gallery/quarry-bench-drilling.png',
                      specs: 'High Performance Infrastructure Grade',
                      capacityOrSpecs: 'High Performance Infrastructure Grade',
                      highlights: [
                        'Systematic mechanized multi-bench extraction',
                        'Zero silt air-wash classifying process',
                        '24/7 express dispatch with computerized weighbridge'
                      ],
                      features: [
                        'Systematic mechanized multi-bench extraction',
                        'Zero silt air-wash classifying process',
                        '24/7 express dispatch with computerized weighbridge'
                      ],
                      galleryImages: [
                        '/images/gallery/quarry-bench-drilling.png',
                        '/images/gallery/weighbridge-dispatch-station.png'
                      ],
                      isPublished: true,
                      displayOrder: cmsData.services.length + 1
                    });
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105 active:scale-95 self-start sm:self-auto"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Service</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cmsData.services.map((service) => (
                  <div key={service.id} className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-md flex flex-col justify-between group hover:border-[#087A35]/40 transition-colors">
                    <div>
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-900 mb-3 shadow-inner">
                        <img src={service.mainImage} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#087A35] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-[#17231D] mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-3 mb-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setEditingService(service);
                          setIsNewService(false);
                        }}
                        className="text-xs font-bold text-[#087A35] hover:underline flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Service</span>
                      </button>

                      <div className="flex items-center gap-2.5">
                        <Link href={`/services/${service.slug}`} target="_blank" className="text-xs text-gray-400 hover:text-[#087A35] font-semibold">
                          View Page ↗
                        </Link>
                        <button
                          onClick={() => {
                            if (confirm(`Delete service "${service.title}"?`)) {
                              const updated = cmsData.services.filter((s) => s.id !== service.id);
                              setCmsData({ ...cmsData, services: updated });
                              saveAction('update_services', updated, `Service "${service.title}" deleted`);
                            }
                          }}
                          className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          title="Delete Service"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: OPERATIONS GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Operations Gallery ({cmsData.gallery.length} Photos)</h2>
                  <p className="text-xs text-gray-500 font-medium">Upload, caption, and organize plant photographs across 7 operational categories</p>
                </div>
                <button
                  onClick={() => {
                    const newItem: GalleryItem = {
                      id: `gal-${Date.now()}`,
                      title: "New Operations Photograph",
                      category: "Quarrying",
                      image: "/images/gallery/excavator-mining-face.png",
                      description: "High-capacity extraction operations at Super Sand mining complex.",
                      isPublished: true,
                      displayOrder: cmsData.gallery.length + 1
                    };
                    setEditingGalleryItem(newItem);
                    setIsNewGalleryItem(true);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Gallery Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cmsData.gallery.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-3 border border-gray-200/80 shadow-sm flex flex-col justify-between group">
                    <div>
                      <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gray-900 mb-2">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-[#17231D] line-clamp-1">{item.title}</h4>
                    </div>

                    <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                      <button
                        onClick={() => {
                          setEditingGalleryItem(item);
                          setIsNewGalleryItem(false);
                        }}
                        className="text-[#087A35] font-bold hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Remove photo "${item.title}"?`)) {
                            saveAction('delete_gallery_item', { id: item.id }, 'Photo deleted');
                          }
                        }}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: INFRASTRUCTURE */}
          {activeTab === 'infrastructure' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Infrastructure Manager (5 Complexes)</h2>
                  <p className="text-xs text-gray-500 font-medium">Manage 3-stage crushing plant, crawler excavators, weighbridges, and workshops</p>
                </div>
                <button
                  onClick={() => saveAction('update_infrastructure', cmsData.infrastructureItems, 'Infrastructure saved')}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save All Changes</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cmsData.infrastructureItems.map((inf) => (
                  <div key={inf.id} className="bg-white rounded-3xl p-5 border border-gray-200 shadow-md space-y-3">
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-900">
                      <img src={inf.heroImage} alt={inf.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 bg-[#087A35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {inf.tag}
                      </span>
                    </div>

                    <input
                      type="text"
                      value={inf.title}
                      onChange={(e) => {
                        const updated = cmsData.infrastructureItems.map((i) => (i.id === inf.id ? { ...i, title: e.target.value } : i));
                        setCmsData({ ...cmsData, infrastructureItems: updated });
                      }}
                      className="font-bold text-base text-[#17231D] w-full border-b border-gray-300 bg-transparent focus:outline-none"
                    />

                    <textarea
                      rows={2}
                      value={inf.desc}
                      onChange={(e) => {
                        const updated = cmsData.infrastructureItems.map((i) => (i.id === inf.id ? { ...i, desc: e.target.value } : i));
                        setCmsData({ ...cmsData, infrastructureItems: updated });
                      }}
                      className="w-full text-xs text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: SUSTAINABILITY */}
          {activeTab === 'sustainability' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Sustainability Manager (5 Initiatives)</h2>
                  <p className="text-xs text-gray-500 font-medium">Riverbed conservation, water mist dust suppression, green tree belts, and recycling</p>
                </div>
                <button
                  onClick={() => saveAction('update_sustainability', cmsData.sustainabilityItems, 'Sustainability saved')}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save All Changes</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cmsData.sustainabilityItems.map((sus) => (
                  <div key={sus.id} className="bg-white rounded-3xl p-5 border border-gray-200 shadow-md space-y-3">
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-900">
                      <img src={sus.heroImage} alt={sus.title} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 bg-[#087A35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {sus.metric}
                      </span>
                    </div>

                    <input
                      type="text"
                      value={sus.title}
                      onChange={(e) => {
                        const updated = cmsData.sustainabilityItems.map((s) => (s.id === sus.id ? { ...s, title: e.target.value } : s));
                        setCmsData({ ...cmsData, sustainabilityItems: updated });
                      }}
                      className="font-bold text-base text-[#17231D] w-full border-b border-gray-300 bg-transparent focus:outline-none"
                    />

                    <textarea
                      rows={2}
                      value={sus.desc}
                      onChange={(e) => {
                        const updated = cmsData.sustainabilityItems.map((s) => (s.id === sus.id ? { ...s, desc: e.target.value } : s));
                        setCmsData({ ...cmsData, sustainabilityItems: updated });
                      }}
                      className="w-full text-xs text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Landmark Projects ({cmsData.projects.length})</h2>
                  <p className="text-xs text-gray-500 font-medium">Manage highway flyovers, tech parks, metro viaducts, and river expressways</p>
                </div>
                <button
                  onClick={() => {
                    const newProj: Project = {
                      id: `proj-${Date.now()}`,
                      slug: `project-${Date.now()}`,
                      title: "New Landmark Infrastructure Corridor",
                      category: "Highways & Flyovers",
                      location: "Telangana & AP Region",
                      image: "/images/projects/project-highway-flyover-hd.png",
                      description: "Supply of high-strength Super 20mm aggregates and M-Sand for structural RCC.",
                      materialsSupplied: ["Super 20mm Aggregates", "Concrete M-Sand"],
                      clientOrSector: "National Infrastructure Contractor",
                      volumeSupplied: "100,000+ Metric Tons",
                      duration: "24 Months On-Demand Supply",
                      isPublished: true,
                      displayOrder: cmsData.projects.length + 1
                    };
                    setEditingProject(newProj);
                    setIsNewProject(true);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cmsData.projects.map((proj) => (
                  <div key={proj.id} className="bg-white rounded-3xl p-5 border border-gray-200 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-900 mb-3">
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-[#087A35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          {proj.category}
                        </span>
                      </div>

                      <h3 className="font-bold text-sm text-[#17231D] mb-1 line-clamp-1">{proj.title}</h3>
                      <div className="text-[11px] text-gray-500 font-medium mb-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#087A35]" />
                        <span className="line-clamp-1">{proj.location}</span>
                      </div>
                      <div className="text-[11px] font-bold text-[#087A35] bg-[#E8F5E9] px-2.5 py-1 rounded-lg inline-block mb-3">
                        Volume: {proj.volumeSupplied || 'N/A'}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                      <button
                        onClick={() => {
                          setEditingProject(proj);
                          setIsNewProject(false);
                        }}
                        className="font-bold text-[#087A35] hover:underline"
                      >
                        Edit Details
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete project "${proj.title}"?`)) {
                            saveAction('delete_project', { id: proj.id }, 'Project deleted');
                          }
                        }}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 10: CLIENT PARTNERS */}
          {activeTab === 'partners' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Client Partners & Collaborations (14 Tier-1 Clients)</h2>
                  <p className="text-xs text-gray-500 font-medium">NHAI, Railways, TSGENCO, IRB, Auro Realty, Maha Cement, Aditya Birla, Shapoorji, ACC, L&T, etc.</p>
                </div>
                <button
                  onClick={() => triggerImageUpload('partner_master_banner')}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Upload className="w-4 h-4" />
                  <span>Replace Master Banner</span>
                </button>
              </div>

              {/* Master Banner Preview */}
              <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-md">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Master Banner Preview (image copy 59.png)</div>
                <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 p-4 max-h-48 flex items-center justify-center">
                  <img src={cmsData.partnerMasterBanner} alt="Strategic Client Partners Banner" className="max-h-40 object-contain" />
                </div>
              </div>

              {/* 14 Partners Table */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-black text-[#17231D]">14 Corporate Partners (Typing Volumes & Project Dossiers)</h3>
                  <button
                    onClick={() => saveAction('update_client_partners', cmsData.clientPartners, 'Partners saved')}
                    className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save All</span>
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-400 font-extrabold text-[10px] uppercase">
                        <th className="pb-2">Partner Name</th>
                        <th className="pb-2">Sector Category</th>
                        <th className="pb-2">Badge</th>
                        <th className="pb-2">Supplied Volume</th>
                        <th className="pb-2">Project Highlight</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cmsData.clientPartners.map((partner) => (
                        <tr key={partner.name} className="py-2 hover:bg-gray-50">
                          <td className="py-2.5 font-bold text-[#17231D]">{partner.name}</td>
                          <td className="py-2.5 text-gray-600">
                            <input
                              type="text"
                              value={partner.category}
                              onChange={(e) => {
                                const updated = cmsData.clientPartners.map((p) => (p.name === partner.name ? { ...p, category: e.target.value } : p));
                                setCmsData({ ...cmsData, clientPartners: updated });
                              }}
                              className="px-2 py-1 text-xs border border-gray-200 rounded w-44"
                            />
                          </td>
                          <td className="py-2.5">
                            <input
                              type="text"
                              value={partner.badge}
                              onChange={(e) => {
                                const updated = cmsData.clientPartners.map((p) => (p.name === partner.name ? { ...p, badge: e.target.value } : p));
                                setCmsData({ ...cmsData, clientPartners: updated });
                              }}
                              className="px-2 py-1 text-xs border border-gray-200 rounded w-28 text-[#087A35] font-bold"
                            />
                          </td>
                          <td className="py-2.5 font-bold text-[#087A35]">
                            <input
                              type="text"
                              value={partner.suppliedVolume}
                              onChange={(e) => {
                                const updated = cmsData.clientPartners.map((p) => (p.name === partner.name ? { ...p, suppliedVolume: e.target.value } : p));
                                setCmsData({ ...cmsData, clientPartners: updated });
                              }}
                              className="px-2 py-1 text-xs border border-gray-200 rounded w-28 font-bold"
                            />
                          </td>
                          <td className="py-2.5 text-gray-600">
                            <input
                              type="text"
                              value={partner.projectHighlight}
                              onChange={(e) => {
                                const updated = cmsData.clientPartners.map((p) => (p.name === partner.name ? { ...p, projectHighlight: e.target.value } : p));
                                setCmsData({ ...cmsData, clientPartners: updated });
                              }}
                              className="px-2 py-1 text-xs border border-gray-200 rounded w-full"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Testimonials & Builder Endorsements</h2>
                  <p className="text-xs text-gray-500 font-medium">Manage customer reviews, company names, ratings, and quotes</p>
                </div>
                <button
                  onClick={() => {
                    const newTest: Testimonial = {
                      id: `test-${Date.now()}`,
                      name: "Rajesh Varma",
                      designation: "Chief Project Manager",
                      company: "Premier Infra Projects",
                      quote: "Super Sand has been our preferred supplier for cubical 20mm aggregates and M-Sand with flawless consistency.",
                      rating: 5,
                      avatar: "/images/testimonials/avatar-1.jpg",
                      isPublished: true,
                      displayOrder: cmsData.testimonials.length + 1
                    };
                    setEditingTestimonial(newTest);
                    setIsNewTestimonial(true);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cmsData.testimonials.map((test) => (
                  <div key={test.id} className="bg-white rounded-3xl p-5 border border-gray-200 shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#087A35]" />
                        <div>
                          <h4 className="font-bold text-sm text-[#17231D]">{test.name}</h4>
                          <p className="text-xs text-gray-500">{test.designation} • {test.company}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 italic leading-relaxed">"{test.quote}"</p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F4C928]">★ {test.rating}/5 Stars</span>
                      <button
                        onClick={() => {
                          if (confirm(`Delete testimonial from ${test.name}?`)) {
                            saveAction('delete_testimonial', { id: test.id }, 'Testimonial deleted');
                          }
                        }}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: CAREERS & APPLICATIONS */}
          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Careers & Job Openings Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Create and publish open job positions and review submitted applications</p>
                </div>
                <button
                  onClick={() => {
                    const newJob: JobOpening = {
                      id: `job-${Date.now()}`,
                      title: "New Plant Engineer",
                      department: "Plant Engineering",
                      location: "Plant Complex, Telangana",
                      type: "Full-Time (On-Site)",
                      experience: "4 - 7 Years",
                      description: "Lead mechanical operations across crushing and screening circuits.",
                      responsibilities: ["Preventive maintenance of VSI rotors", "Supervise mechanical technicians"],
                      qualifications: ["B.Tech Mechanical", "Crushing plant background"],
                      status: "active",
                      displayOrder: cmsData.jobOpenings.length + 1
                    };
                    setEditingJob(newJob);
                    setIsNewJob(true);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post Job Opening</span>
                </button>
              </div>

              {/* Job Openings Grid */}
              <div className="space-y-3">
                <h3 className="text-sm font-black uppercase text-gray-500 tracking-wider">
                  Active Open Positions ({cmsData.jobOpenings.length})
                </h3>

                {cmsData.jobOpenings.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase text-[#087A35] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
                          {job.department}
                        </span>
                        <span className="text-xs text-gray-500">{job.location} • {job.experience}</span>
                      </div>
                      <h4 className="font-bold text-sm text-[#17231D]">{job.title}</h4>
                      <p className="text-xs text-gray-600 line-clamp-1">{job.description}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingJob(job);
                          setIsNewJob(false);
                        }}
                        className="bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 px-3 py-1.5 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete job opening "${job.title}"?`)) {
                            saveAction('delete_job_opening', { id: job.id }, 'Job opening deleted');
                          }
                        }}
                        className="text-gray-400 hover:text-red-600 p-1.5"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Job Applications Review Inbox */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-4">
                <h3 className="text-lg font-black text-[#17231D] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#087A35]" />
                  <span>Candidate Applications Inbox ({cmsData.jobApplications.length})</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-400 font-extrabold text-[10px] uppercase">
                        <th className="pb-2">Candidate</th>
                        <th className="pb-2">Applied Role</th>
                        <th className="pb-2">Phone / Email</th>
                        <th className="pb-2">Experience</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cmsData.jobApplications.map((app) => (
                        <tr key={app.id} className="hover:bg-gray-50">
                          <td className="py-2.5 font-bold text-[#17231D]">{app.fullName}</td>
                          <td className="py-2.5 text-gray-700">{app.jobTitle}</td>
                          <td className="py-2.5 text-gray-600">
                            <div>{app.phone}</div>
                            <div className="text-[10px] text-gray-400">{app.email}</div>
                          </td>
                          <td className="py-2.5 text-gray-700 font-semibold">{app.experience}</td>
                          <td className="py-2.5">
                            <select
                              value={app.status}
                              onChange={(e) => {
                                saveAction('update_application_status', { id: app.id, status: e.target.value }, 'Status updated');
                              }}
                              className="px-2 py-1 text-xs rounded border border-gray-200 bg-white font-bold text-[#087A35]"
                            >
                              <option value="new">New</option>
                              <option value="reviewed">Reviewed</option>
                              <option value="shortlisted">Shortlisted</option>
                              <option value="rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="py-2.5">
                            <button
                              onClick={() => {
                                if (confirm(`Remove application from ${app.fullName}?`)) {
                                  saveAction('delete_job_application', { id: app.id }, 'Application removed');
                                }
                              }}
                              className="text-gray-400 hover:text-red-600 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 13: CONTACT & GOOGLE MAPS */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Contact & Google Maps Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Update phone numbers, WhatsApp, coordinates, Google Maps embed, and review client enquiries</p>
                </div>
                <button
                  onClick={() => saveAction('update_contact_settings', cmsData.contactSettings, 'Contact & Google Maps settings saved')}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Settings</span>
                </button>
              </div>

              {/* Contact Settings Form */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Company Registered Office Address</label>
                    <input
                      type="text"
                      value={cmsData.contactSettings.companyAddress}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, companyAddress: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Primary Phone Number</label>
                    <input
                      type="text"
                      value={cmsData.contactSettings.primaryPhone}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, primaryPhone: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Alternative Phone Number</label>
                    <input
                      type="text"
                      value={cmsData.contactSettings.altPhone}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, altPhone: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">WhatsApp Number</label>
                    <input
                      type="text"
                      value={cmsData.contactSettings.whatsappNumber}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, whatsappNumber: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Primary Email</label>
                    <input
                      type="email"
                      value={cmsData.contactSettings.primaryEmail}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, primaryEmail: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Google Maps Direct URL</label>
                    <input
                      type="text"
                      value={cmsData.contactSettings.googleMapsUrl}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, googleMapsUrl: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Latitude / Longitude</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        step="0.0001"
                        value={cmsData.contactSettings.latitude}
                        onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, latitude: parseFloat(e.target.value) || 17.4415 } })}
                        className="w-1/2 px-2 py-1.5 text-xs rounded border border-gray-200"
                        placeholder="Lat"
                      />
                      <input
                        type="number"
                        step="0.0001"
                        value={cmsData.contactSettings.longitude}
                        onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, longitude: parseFloat(e.target.value) || 78.5085 } })}
                        className="w-1/2 px-2 py-1.5 text-xs rounded border border-gray-200"
                        placeholder="Lng"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Google Maps Embed IFrame URL</label>
                    <input
                      type="text"
                      value={cmsData.contactSettings.googleMapsEmbedUrl}
                      onChange={(e) => setCmsData({ ...cmsData, contactSettings: { ...cmsData.contactSettings, googleMapsEmbedUrl: e.target.value } })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#087A35]"
                    />
                  </div>
                </div>
              </div>

              {/* Client Enquiries Inbox */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-[#17231D] flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#087A35]" />
                    <span>Enquiries & Order Requests ({cmsData.enquiries.length})</span>
                  </h3>
                  <span className="text-xs text-gray-500 font-bold">Auto-persisted in CMS</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-400 font-extrabold text-[10px] uppercase">
                        <th className="pb-2">Client Name</th>
                        <th className="pb-2">Phone</th>
                        <th className="pb-2">Product</th>
                        <th className="pb-2">Quantity</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {cmsData.enquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-gray-50">
                          <td className="py-2.5 font-bold text-[#17231D]">
                            <div>{enq.fullName}</div>
                            <div className="text-[10px] text-gray-400">{enq.email}</div>
                          </td>
                          <td className="py-2.5 text-gray-700">{enq.phoneNumber}</td>
                          <td className="py-2.5 font-bold text-[#087A35]">{enq.productSelection}</td>
                          <td className="py-2.5 text-gray-600">{enq.quantity || 'Standard'}</td>
                          <td className="py-2.5">
                            <select
                              value={enq.status}
                              onChange={(e) => {
                                saveAction('update_enquiry_status', { id: enq.id, status: e.target.value }, 'Status updated');
                              }}
                              className="px-2 py-1 text-xs rounded border border-gray-200 bg-white font-bold text-[#087A35]"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>
                          <td className="py-2.5">
                            <button
                              onClick={() => {
                                if (confirm(`Delete enquiry from ${enq.fullName}?`)) {
                                  saveAction('delete_enquiry', { id: enq.id }, 'Enquiry deleted');
                                }
                              }}
                              className="text-gray-400 hover:text-red-600 p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 14: HEADER & FOOTER */}
          {activeTab === 'navigation' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Header, Navigation & Footer Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Control navigation labels, social links, footer descriptions, and copyright notice</p>
                </div>
                <button
                  onClick={() => {
                    saveAction('update_navigation_items', cmsData.navigationItems, 'Navigation saved');
                    saveAction('update_footer_settings', cmsData.footerSettings, 'Footer settings saved');
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save All Settings</span>
                </button>
              </div>

              {/* Navigation Links Table */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-3">
                <h3 className="text-lg font-black text-[#17231D]">Navigation Menu Items ({cmsData.navigationItems.length})</h3>

                <div className="space-y-2">
                  {cmsData.navigationItems.map((item) => (
                    <div key={item.id} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between gap-4 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center font-bold text-[10px]">
                          {item.displayOrder}
                        </span>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => {
                            const updated = cmsData.navigationItems.map((n) => (n.id === item.id ? { ...n, name: e.target.value } : n));
                            setCmsData({ ...cmsData, navigationItems: updated });
                          }}
                          className="font-bold text-gray-800 bg-white px-2 py-1 rounded border border-gray-200"
                        />
                        <input
                          type="text"
                          value={item.href}
                          onChange={(e) => {
                            const updated = cmsData.navigationItems.map((n) => (n.id === item.id ? { ...n, href: e.target.value } : n));
                            setCmsData({ ...cmsData, navigationItems: updated });
                          }}
                          className="text-gray-500 bg-white px-2 py-1 rounded border border-gray-200 w-36"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        {item.hasDropdown && (
                          <span className="text-[10px] font-bold text-[#087A35] bg-[#E8F5E9] px-2 py-0.5 rounded">
                            {item.subItems?.length || 0} Dropdown Items
                          </span>
                        )}
                        <input
                          type="checkbox"
                          checked={item.isPublished}
                          onChange={(e) => {
                            const updated = cmsData.navigationItems.map((n) => (n.id === item.id ? { ...n, isPublished: e.target.checked } : n));
                            setCmsData({ ...cmsData, navigationItems: updated });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Settings */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-4">
                <h3 className="text-lg font-black text-[#17231D]">Footer & Social Channels</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Facebook URL</label>
                    <input
                      type="text"
                      value={cmsData.footerSettings.facebookUrl}
                      onChange={(e) => setCmsData({ ...cmsData, footerSettings: { ...cmsData.footerSettings, facebookUrl: e.target.value } })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">LinkedIn URL</label>
                    <input
                      type="text"
                      value={cmsData.footerSettings.linkedinUrl}
                      onChange={(e) => setCmsData({ ...cmsData, footerSettings: { ...cmsData.footerSettings, linkedinUrl: e.target.value } })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">YouTube Channel URL</label>
                    <input
                      type="text"
                      value={cmsData.footerSettings.youtubeUrl}
                      onChange={(e) => setCmsData({ ...cmsData, footerSettings: { ...cmsData.footerSettings, youtubeUrl: e.target.value } })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">Copyright Statement</label>
                    <input
                      type="text"
                      value={cmsData.footerSettings.copyrightText}
                      onChange={(e) => setCmsData({ ...cmsData, footerSettings: { ...cmsData.footerSettings, copyrightText: e.target.value } })}
                      className="w-full px-3 py-1.5 text-xs rounded-xl border border-gray-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 15: SECTION BUILDER */}
          {activeTab === 'sections' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Section Builder & Order Manager</h2>
                  <p className="text-xs text-gray-500 font-medium">Enable, disable, and rearrange homepage sections dynamically</p>
                </div>
                <button
                  onClick={() => saveAction('update_section_settings', cmsData.sectionSettings, 'Section settings saved')}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Order & Visibility</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md space-y-3">
                {cmsData.sectionSettings.map((sec, idx) => (
                  <div key={sec.id} className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#E8F5E9] text-[#087A35] flex items-center justify-center font-bold text-xs">
                        {sec.displayOrder}
                      </span>
                      <div>
                        <div className="font-bold text-sm text-[#17231D]">{sec.name}</div>
                        <div className="text-[10px] text-gray-400">Section ID: {sec.key}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-bold">
                        <input
                          type="checkbox"
                          checked={sec.isEnabled}
                          onChange={(e) => {
                            const updated = cmsData.sectionSettings.map((s) => (s.id === sec.id ? { ...s, isEnabled: e.target.checked } : s));
                            setCmsData({ ...cmsData, sectionSettings: updated });
                          }}
                          className="w-4 h-4 text-[#087A35] rounded"
                        />
                        <span className={sec.isEnabled ? 'text-[#087A35]' : 'text-gray-400'}>
                          {sec.isEnabled ? 'Visible' : 'Hidden'}
                        </span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 16: MEDIA LIBRARY */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#17231D]">Media & Cloudinary Asset Library</h2>
                  <p className="text-xs text-gray-500 font-medium">Browse uploaded assets, copy public URLs, and manage media references</p>
                </div>
                <button
                  onClick={() => triggerImageUpload('media_library_general')}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Asset</span>
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cmsData.mediaAssets.map((asset) => (
                  <div key={asset.id} className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm flex flex-col justify-between group">
                    <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gray-900 mb-2">
                      <img src={asset.url} alt={asset.publicId} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="text-[11px] font-bold text-[#17231D] truncate">{asset.associatedContent || asset.publicId}</div>
                    <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(asset.url);
                          flashStatus('Asset URL copied to clipboard');
                        }}
                        className="text-[10px] text-[#087A35] font-bold hover:underline"
                      >
                        Copy URL
                      </button>
                      <a href={asset.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL: EDIT PRODUCT */}
      {/* ---------------------------------------------------------------------- */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto border-2 border-[#087A35]">
            <button
              onClick={() => setEditingProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black text-[#17231D] mb-4">
              {isNewProduct ? 'Create New Product' : `Edit Product: ${editingProduct.name}`}
            </h3>

            <div className="space-y-4 text-xs">
              {/* Image Preview & Upload */}
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                  <img src={editingProduct.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-gray-700">Product Image Asset</div>
                  <div className="text-[11px] text-gray-400 truncate max-w-xs">{editingProduct.image}</div>
                  <button
                    onClick={() => triggerImageUpload('editing_product')}
                    className="inline-flex items-center gap-1 bg-[#087A35] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload & Replace Image</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Product Name</label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={editingProduct.slug}
                    onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Short Description</label>
                <textarea
                  rows={2}
                  value={editingProduct.shortDesc}
                  onChange={(e) => setEditingProduct({ ...editingProduct, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Full Detailed Content</label>
                <textarea
                  rows={4}
                  value={editingProduct.fullDesc}
                  onChange={(e) => setEditingProduct({ ...editingProduct, fullDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Available Sizes (Comma separated)</label>
                <input
                  type="text"
                  value={editingProduct.sizesOrTypes?.join(', ') || ''}
                  onChange={(e) => setEditingProduct({ ...editingProduct, sizesOrTypes: e.target.value.split(',').map((s) => s.trim()) })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => setEditingProduct(null)}
                  className="px-5 py-2.5 rounded-full font-bold text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (isNewProduct) {
                      saveAction('add_product', editingProduct, 'New product added successfully');
                    } else {
                      const updated = cmsData.products.map((p) => (p.id === editingProduct.id ? editingProduct : p));
                      saveAction('update_products', updated, 'Product updated successfully');
                    }
                    setEditingProduct(null);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Product</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL: ADD / EDIT SERVICE */}
      {/* ---------------------------------------------------------------------- */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto border-2 border-[#087A35]">
            <button
              onClick={() => {
                setEditingService(null);
                setIsNewService(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#E8F5E9] text-[#087A35] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                {isNewService ? 'New Operation' : 'Edit Operation'}
              </span>
              <h3 className="text-xl font-black text-[#17231D]">
                {isNewService ? 'Create New Operational Service' : `Edit: ${editingService.title}`}
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              {/* Image Preview & Upload */}
              <div className="flex items-center gap-4 p-3.5 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-28 h-24 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0 shadow-sm border border-gray-300">
                  <img src={editingService.mainImage} alt="Service Preview" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="font-bold text-gray-800 text-[13px]">Service Hero / Card Image</div>
                  <p className="text-[11px] text-gray-500">Upload or replace high-definition operational photography</p>
                  <button
                    onClick={() => triggerImageUpload('editing_service')}
                    className="inline-flex items-center gap-1.5 bg-[#087A35] hover:bg-[#06632B] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload & Replace Photo</span>
                  </button>
                </div>
              </div>

              {/* Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Service Title <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Laser-Guided Earthmoving & Bench Excavation"
                    value={editingService.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = isNewService
                        ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                        : editingService.slug;
                      setEditingService({ ...editingService, title, slug });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold focus:border-[#087A35] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">URL Slug <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. earthmoving-bench-excavation"
                    value={editingService.slug}
                    onChange={(e) => setEditingService({ ...editingService, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-gray-700 font-mono text-[11px] focus:border-[#087A35] focus:outline-none"
                  />
                </div>
              </div>

              {/* Category & Tagline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Category Group</label>
                  <select
                    value={editingService.category}
                    onChange={(e) => setEditingService({ ...editingService, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-white font-medium focus:border-[#087A35] focus:outline-none"
                  >
                    <option value="Quarrying">Quarrying & Mining</option>
                    <option value="Production">Production & Crushing</option>
                    <option value="Quality">Quality Testing & QA</option>
                    <option value="Logistics">Fleet Logistics & Dispatch</option>
                    <option value="Workshop">Plant Engineering Workshop</option>
                    <option value="Dust Control">Environmental Dust Control</option>
                    <option value="Custom Blending">Custom Batch Blending</option>
                    <option value="Infrastructure">Heavy Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">Tagline / Short Badge</label>
                  <input
                    type="text"
                    placeholder="e.g. Deep pit mechanized extraction"
                    value={editingService.tagline || ''}
                    onChange={(e) => setEditingService({ ...editingService, tagline: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-[#087A35] focus:outline-none"
                  />
                </div>
              </div>

              {/* Specifications / Standards */}
              <div>
                <label className="font-bold text-gray-700 block mb-1">Capacity / Operational Specs</label>
                <input
                  type="text"
                  placeholder="e.g. 350+ TPH Capacity / IS 383:2016 Aligned"
                  value={editingService.specs || ''}
                  onChange={(e) => setEditingService({ ...editingService, specs: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-[#087A35] focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="font-bold text-gray-700 block mb-1">Primary Description</label>
                <textarea
                  rows={3}
                  placeholder="Provide comprehensive details about this operation, process mechanics, or machinery deployed..."
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:border-[#087A35] focus:outline-none"
                />
              </div>

              {/* Technical Features (Newline separated) */}
              <div>
                <label className="font-bold text-gray-700 block mb-1">Key Operational Highlights (1 per line)</label>
                <textarea
                  rows={3}
                  placeholder="Systematic multi-bench extraction&#10;Zero silt air-wash classifying&#10;Sub-5 minute weighbridge dispatch"
                  value={editingService.features?.join('\n') || ''}
                  onChange={(e) => setEditingService({ ...editingService, features: e.target.value.split('\n').filter(Boolean) })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 font-mono text-[11px] focus:border-[#087A35] focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setEditingService(null);
                    setIsNewService(false);
                  }}
                  className="px-5 py-2.5 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (!editingService.title.trim()) {
                      alert('Please provide a service title');
                      return;
                    }

                    const cleanSlug = editingService.slug?.trim() || editingService.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    const serviceToSave: Service = {
                      ...editingService,
                      slug: cleanSlug,
                      capacityOrSpecs: editingService.capacityOrSpecs || editingService.specs || 'Engineered Mining Grade',
                      specs: editingService.specs || editingService.capacityOrSpecs || 'Engineered Mining Grade',
                      highlights: editingService.highlights || editingService.features || ['Systematic mechanized extraction', 'Automated quality monitoring', 'Express tipper fleet logistics'],
                      features: editingService.features && editingService.features.length > 0
                        ? editingService.features
                        : ['Systematic mechanized extraction', 'Automated quality monitoring', 'Express tipper fleet logistics'],
                      galleryImages: editingService.galleryImages && editingService.galleryImages.length > 0
                        ? editingService.galleryImages
                        : [editingService.mainImage, '/images/gallery/weighbridge-dispatch-station.png']
                    };

                    let updated: Service[];
                    if (isNewService) {
                      updated = [serviceToSave, ...cmsData.services];
                    } else {
                      updated = cmsData.services.map((s) => (s.id === serviceToSave.id ? serviceToSave : s));
                    }

                    setCmsData({ ...cmsData, services: updated });
                    saveAction('update_services', updated, isNewService ? `Service "${serviceToSave.title}" created successfully!` : `Service "${serviceToSave.title}" saved successfully!`);
                    setEditingService(null);
                    setIsNewService(false);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold shadow-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Save className="w-4 h-4" />
                  <span>{isNewService ? 'Create & Publish Service' : 'Save Changes'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL: EDIT PROJECT */}
      {/* ---------------------------------------------------------------------- */}
      {editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto border-2 border-[#087A35]">
            <button onClick={() => setEditingProject(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold">
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black text-[#17231D] mb-4">
              {isNewProject ? 'Add Landmark Project' : `Edit Project: ${editingProject.title}`}
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                  <img src={editingProject.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-gray-700">Project Landmark Photo</div>
                  <button
                    onClick={() => triggerImageUpload('editing_project')}
                    className="inline-flex items-center gap-1 bg-[#087A35] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload & Replace</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Project Title</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Category</label>
                  <input
                    type="text"
                    value={editingProject.category}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Location</label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Volume Supplied</label>
                  <input
                    type="text"
                    value={editingProject.volumeSupplied || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, volumeSupplied: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold text-[#087A35]"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Client / Sector</label>
                  <input
                    type="text"
                    value={editingProject.clientOrSector}
                    onChange={(e) => setEditingProject({ ...editingProject, clientOrSector: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Project Description</label>
                <textarea
                  rows={3}
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button onClick={() => setEditingProject(null)} className="px-5 py-2.5 rounded-full font-bold text-gray-600">Cancel</button>
                <button
                  onClick={() => {
                    if (isNewProject) {
                      saveAction('add_project', editingProject, 'Project added');
                    } else {
                      const updated = cmsData.projects.map((p) => (p.id === editingProject.id ? editingProject : p));
                      saveAction('update_projects', updated, 'Project saved');
                    }
                    setEditingProject(null);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold shadow-md"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL: EDIT GALLERY ITEM */}
      {/* ---------------------------------------------------------------------- */}
      {editingGalleryItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border-2 border-[#087A35]">
            <button onClick={() => setEditingGalleryItem(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold">
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black text-[#17231D] mb-4">
              {isNewGalleryItem ? 'Add Operations Photo' : 'Edit Gallery Photo'}
            </h3>

            <div className="space-y-4 text-xs">
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-900">
                <img src={editingGalleryItem.image} alt={editingGalleryItem.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => triggerImageUpload('editing_gallery')}
                  className="absolute bottom-2 right-2 bg-[#087A35] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1"
                >
                  <Upload className="w-3 h-3" />
                  <span>Upload & Replace Photo</span>
                </button>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Photo Caption Title</label>
                <input
                  type="text"
                  value={editingGalleryItem.title}
                  onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Category</label>
                <select
                  value={editingGalleryItem.category}
                  onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold text-[#087A35]"
                >
                  <option value="Quarrying">Quarrying</option>
                  <option value="Production">Production</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Quality">Quality</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Sustainability">Sustainability</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="About">About</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editingGalleryItem.description}
                  onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button onClick={() => setEditingGalleryItem(null)} className="px-5 py-2.5 rounded-full font-bold text-gray-600">Cancel</button>
                <button
                  onClick={() => {
                    if (isNewGalleryItem) {
                      saveAction('add_gallery_item', editingGalleryItem, 'Photo added to gallery');
                    } else {
                      const updated = cmsData.gallery.map((g) => (g.id === editingGalleryItem.id ? editingGalleryItem : g));
                      saveAction('update_gallery', updated, 'Gallery photo saved');
                    }
                    setEditingGalleryItem(null);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold shadow-md"
                >
                  Save Photo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL: EDIT JOB OPENING */}
      {/* ---------------------------------------------------------------------- */}
      {editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto border-2 border-[#087A35]">
            <button onClick={() => setEditingJob(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold">
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-black text-[#17231D] mb-4">
              {isNewJob ? 'Post New Career Opportunity' : `Edit Job: ${editingJob.title}`}
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Job Title</label>
                <input
                  type="text"
                  value={editingJob.title}
                  onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Department</label>
                  <input
                    type="text"
                    value={editingJob.department}
                    onChange={(e) => setEditingJob({ ...editingJob, department: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Experience Required</label>
                  <input
                    type="text"
                    value={editingJob.experience}
                    onChange={(e) => setEditingJob({ ...editingJob, experience: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Location</label>
                  <input
                    type="text"
                    value={editingJob.location}
                    onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">Status</label>
                  <select
                    value={editingJob.status}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 font-bold text-[#087A35]"
                  >
                    <option value="active">Active (Open)</option>
                    <option value="closed">Closed</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">Role Description</label>
                <textarea
                  rows={3}
                  value={editingJob.description}
                  onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button onClick={() => setEditingJob(null)} className="px-5 py-2.5 rounded-full font-bold text-gray-600">Cancel</button>
                <button
                  onClick={() => {
                    if (isNewJob) {
                      saveAction('add_job_opening', editingJob, 'Job posted successfully');
                    } else {
                      const updated = cmsData.jobOpenings.map((j) => (j.id === editingJob.id ? editingJob : j));
                      saveAction('update_job_openings', updated, 'Job opening saved');
                    }
                    setEditingJob(null);
                  }}
                  className="bg-[#087A35] hover:bg-[#06632B] text-white px-6 py-2.5 rounded-full font-bold shadow-md"
                >
                  Save Job Opening
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
