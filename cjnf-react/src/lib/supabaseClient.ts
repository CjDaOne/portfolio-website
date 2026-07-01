import { createClient } from '@supabase/supabase-js';

// 1. Fetch raw strings from Vite environment
const rawUrl = import.meta.env.VITE_SUPABASE_URL || '';
const rawAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// 2. Programmatically strip any hidden double quotes, single quotes, or spaces
const supabaseUrl = rawUrl.replace(/['"\s]/g, '');
const supabaseAnonKey = rawAnonKey.replace(/['"\s]/g, '');

// 3. Print out the exact runtime URL to your browser inspect tool for verification
console.log('Sanitized URL Target:', `|${supabaseUrl}|`);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables in Vite configuration.');
}

// 4. Initialize client instance with clean text strings
export const supabase = createClient(supabaseUrl, supabaseAnonKey);