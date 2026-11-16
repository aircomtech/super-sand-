-- ==============================================================================
-- SUPER SAND CMS — SUPABASE DYNAMIC CONTENT STORAGE
-- Run this query in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/duxwocmqmckfwkubodjo/sql
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.super_sand_cms (
    id TEXT PRIMARY KEY DEFAULT 'main',
    content JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.super_sand_cms ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read and write access for the Super Sand CMS
DROP POLICY IF EXISTS "Allow anon read super_sand_cms" ON public.super_sand_cms;
CREATE POLICY "Allow anon read super_sand_cms" ON public.super_sand_cms 
FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow anon write super_sand_cms" ON public.super_sand_cms;
CREATE POLICY "Allow anon write super_sand_cms" ON public.super_sand_cms 
FOR ALL USING (true) WITH CHECK (true);

-- Insert initial document row if not exists
INSERT INTO public.super_sand_cms (id, content, updated_at)
VALUES ('main', '{}'::jsonb, NOW())
ON CONFLICT (id) DO NOTHING;
