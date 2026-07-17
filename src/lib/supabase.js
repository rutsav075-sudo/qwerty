import { createClient } from '@supabase/supabase-js';

// User provided credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export let supabase;
export let isSupabaseMocked = false;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn(
    'Supabase credentials not found (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). ' +
    'Running in mock mode — database features are disabled.'
  );
  isSupabaseMocked = true;

  // Minimal mock that won't crash callers using .from().select() etc.
  const mockResponse = { data: [], error: null, count: 0 };
  const mockBuilder = new Proxy({}, {
    get: () => (..._args) => Promise.resolve(mockResponse),
  });
  supabase = {
    from: () => mockBuilder,
    rpc: () => Promise.resolve(mockResponse),
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
      signOut: () => Promise.resolve({ error: null }),
    },
    channel: () => ({
      on: function() { return this; },
      subscribe: () => ({ unsubscribe: () => {} }),
    }),
  };
}
