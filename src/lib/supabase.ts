import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  'https://duxwocmqmckfwkubodjo.supabase.co';

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eHdvY21xbWNrZndrdWJvZGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ4MjEyMjUsImV4cCI6MjExMDM5NzIyNX0.t0qdpNtY6p8DNSwO0rmjixkVD7anwbKxQ2NNXYsflJA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
