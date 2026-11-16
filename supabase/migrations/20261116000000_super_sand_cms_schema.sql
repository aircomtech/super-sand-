-- ==============================================================================
-- SUPER SAND PRODUCTION CMS — COMPLETE SUPABASE DATABASE SCHEMA & SEED
-- Sai Super Sand Minerals Pvt. Ltd. (Incorporated 2006, Operations 2008)
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. SITE SETTINGS
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_name VARCHAR(255) NOT NULL DEFAULT 'Super Sand',
    legal_name VARCHAR(255) NOT NULL DEFAULT 'Sai Super Sand Minerals Pvt. Ltd.',
    established_year INT NOT NULL DEFAULT 2006,
    production_operations_year INT NOT NULL DEFAULT 2008,
    primary_phone VARCHAR(50) NOT NULL DEFAULT '+91 95338 95920',
    alt_phone VARCHAR(50) NOT NULL DEFAULT '+91 98480 12345',
    primary_email VARCHAR(255) NOT NULL DEFAULT 'sales@supersand.in',
    alt_email VARCHAR(255) NOT NULL DEFAULT 'info@supersand.in',
    whatsapp_number VARCHAR(50) NOT NULL DEFAULT '+91 95338 95920',
    address TEXT NOT NULL,
    tagline TEXT,
    vision TEXT,
    mission TEXT,
    core_values JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. HERO SLIDES
CREATE TABLE IF NOT EXISTS public.hero_slides (
    id SERIAL PRIMARY KEY,
    tag VARCHAR(255) NOT NULL,
    title_line1 VARCHAR(255) NOT NULL,
    title_line2 VARCHAR(255) NOT NULL,
    subtitle TEXT NOT NULL,
    desktop_image TEXT NOT NULL,
    mobile_image TEXT NOT NULL,
    cta_text VARCHAR(100) NOT NULL,
    cta_link VARCHAR(255) NOT NULL,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. WHY CHOOSE US PILLARS
CREATE TABLE IF NOT EXISTS public.why_choose_us (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    stats VARCHAR(100),
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. BOARD OF DIRECTORS / LEADERSHIP
CREATE TABLE IF NOT EXISTS public.directors (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    role_title VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    bio TEXT NOT NULL,
    qualifications TEXT NOT NULL,
    focus_areas JSONB DEFAULT '[]'::jsonb,
    display_order INT DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TEAM CARDS (WHO WE ARE)
CREATE TABLE IF NOT EXISTS public.team_cards (
    id VARCHAR(100) PRIMARY KEY,
    badge VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    headline VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    stat1_value VARCHAR(50),
    stat1_label VARCHAR(100),
    stat2_value VARCHAR(50),
    stat2_label VARCHAR(100),
    footer_note TEXT,
    cta_link VARCHAR(255) DEFAULT '/about',
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. PRODUCTS
CREATE TABLE IF NOT EXISTS public.products (
    id VARCHAR(100) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    tagline VARCHAR(255) NOT NULL,
    short_desc TEXT NOT NULL,
    full_desc TEXT NOT NULL,
    image TEXT NOT NULL,
    hero_image TEXT,
    sizes_or_types JSONB DEFAULT '[]'::jsonb,
    applications JSONB DEFAULT '[]'::jsonb,
    features JSONB DEFAULT '[]'::jsonb,
    specifications JSONB DEFAULT '{}'::jsonb,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. SERVICES
CREATE TABLE IF NOT EXISTS public.services (
    id VARCHAR(100) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    tagline VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    main_image TEXT NOT NULL,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    highlights JSONB DEFAULT '[]'::jsonb,
    capacity_or_specs VARCHAR(255),
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. OPERATIONS GALLERY
CREATE TABLE IF NOT EXISTS public.operations_gallery (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. INFRASTRUCTURE ITEMS
CREATE TABLE IF NOT EXISTS public.infrastructure_items (
    id VARCHAR(100) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    tag VARCHAR(100) NOT NULL,
    specs VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    hero_image TEXT NOT NULL,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    technical_features JSONB DEFAULT '[]'::jsonb,
    parameters JSONB DEFAULT '{}'::jsonb,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. SUSTAINABILITY ITEMS
CREATE TABLE IF NOT EXISTS public.sustainability_items (
    id VARCHAR(100) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    tag VARCHAR(100) NOT NULL,
    metric VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    hero_image TEXT NOT NULL,
    gallery_images JSONB DEFAULT '[]'::jsonb,
    ecological_impact JSONB DEFAULT '[]'::jsonb,
    certifications JSONB DEFAULT '[]'::jsonb,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. PROJECTS
CREATE TABLE IF NOT EXISTS public.projects (
    id VARCHAR(100) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    description TEXT NOT NULL,
    materials_supplied JSONB DEFAULT '[]'::jsonb,
    client_or_sector VARCHAR(255) NOT NULL,
    volume_supplied VARCHAR(100),
    duration VARCHAR(100),
    gallery_images JSONB DEFAULT '[]'::jsonb,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. CLIENT PARTNERS
CREATE TABLE IF NOT EXISTS public.client_partners (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    badge VARCHAR(100) NOT NULL,
    supplied_volume VARCHAR(100) NOT NULL,
    project_highlight TEXT NOT NULL,
    logo_url TEXT,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. TESTIMONIALS
CREATE TABLE IF NOT EXISTS public.testimonials (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    quote TEXT NOT NULL,
    rating INT DEFAULT 5,
    avatar TEXT NOT NULL,
    is_published BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 15. CAREERS & JOB OPENINGS
CREATE TABLE IF NOT EXISTS public.job_openings (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type VARCHAR(100) NOT NULL,
    experience VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    responsibilities JSONB DEFAULT '[]'::jsonb,
    qualifications JSONB DEFAULT '[]'::jsonb,
    deadline VARCHAR(100),
    status VARCHAR(50) DEFAULT 'active',
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 16. JOB APPLICATIONS
CREATE TABLE IF NOT EXISTS public.job_applications (
    id VARCHAR(100) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    job_id VARCHAR(100) NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    experience VARCHAR(100),
    qualification VARCHAR(255),
    message TEXT,
    resume_url TEXT,
    applied_at TIMESTAMPTZ DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'new'
);

-- 17. CONTACT SETTINGS
CREATE TABLE IF NOT EXISTS public.contact_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_address TEXT NOT NULL,
    primary_phone VARCHAR(50) NOT NULL,
    alt_phone VARCHAR(50) NOT NULL,
    whatsapp_number VARCHAR(50) NOT NULL,
    primary_email VARCHAR(255) NOT NULL,
    alt_email VARCHAR(255) NOT NULL,
    google_maps_url TEXT NOT NULL,
    google_maps_embed_url TEXT NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    office_hours TEXT NOT NULL,
    dispatch_hours TEXT NOT NULL,
    section_heading VARCHAR(255) NOT NULL,
    section_subtitle TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 18. ENQUIRIES
CREATE TABLE IF NOT EXISTS public.enquiries (
    id VARCHAR(100) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    product_selection VARCHAR(255) NOT NULL,
    quantity VARCHAR(100),
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'new'
);

-- 19. SECTION VISIBILITY & ORDER
CREATE TABLE IF NOT EXISTS public.section_settings (
    id VARCHAR(100) PRIMARY KEY,
    key VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    is_enabled BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    custom_heading VARCHAR(255),
    custom_subtitle TEXT,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 20. ACTIVITY LOGS
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id VARCHAR(100) PRIMARY KEY DEFAULT uuid_generate_v4()::text,
    action VARCHAR(100) NOT NULL,
    module VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    admin_user VARCHAR(255) DEFAULT 'Admin',
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.why_choose_us ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.directors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.operations_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.infrastructure_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sustainability_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_openings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.section_settings ENABLE ROW LEVEL SECURITY;

-- Public can read all published website content
CREATE POLICY "Public read published products" ON public.products FOR SELECT USING (is_published = true);
CREATE POLICY "Public read published services" ON public.services FOR SELECT USING (is_published = true);
CREATE POLICY "Public read published projects" ON public.projects FOR SELECT USING (is_published = true);
CREATE POLICY "Public read site settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public read hero slides" ON public.hero_slides FOR SELECT USING (is_published = true);
CREATE POLICY "Public read directors" ON public.directors FOR SELECT USING (is_published = true);
CREATE POLICY "Public read client partners" ON public.client_partners FOR SELECT USING (is_published = true);
CREATE POLICY "Public read testimonials" ON public.testimonials FOR SELECT USING (is_published = true);
CREATE POLICY "Public read job openings" ON public.job_openings FOR SELECT USING (status = 'active');
CREATE POLICY "Public insert enquiry" ON public.enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert job application" ON public.job_applications FOR INSERT WITH CHECK (true);
