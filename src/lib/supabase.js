import { createClient } from '@supabase/supabase-js';

// User provided credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Guard against missing env vars — prevents white-screen crash on Vercel
// when VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not configured.
// SynapseContext already handles fetch errors and falls back to localStorage.
if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase env vars missing (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). ' +
    'Running in offline/localStorage mode.'
  );
}

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

