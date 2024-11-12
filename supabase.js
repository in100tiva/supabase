
// Import the Supabase library and initialize the Supabase client
const { createClient } = supabase;

// Replace with your Supabase project's URL and anon key
const SUPABASE_URL = 'https://bciycuqjnvwpdcnzxbey.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjaXljdXFqbnZ3cGRjbnp4YmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDU3OTYsImV4cCI6MjA0NzAyMTc5Nn0.BO9MkhfL0lqkMx-tMzz5j5_CbYTx97nQR33gzj7F0n0';

// Create the Supabase client
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export {_supabase};