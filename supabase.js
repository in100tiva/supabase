// supabase.js

// Import the Supabase library and initialize the Supabase client
const { createClient } = window.supabase;

// Replace with your Supabase project's URL and anon key
const SUPABASE_URL = 'https://bciycuqjnvwpdcnzxbey.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjaXljdXFqbnZ3cGRjbnp4YmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDU3OTYsImV4cCI6MjA0NzAyMTc5Nn0.BO9MkhfL0lqkMx-tMzz5j5_CbYTx97nQR33gzj7F0n0';

// Create the Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to verify if user exists in the database and authenticate
async function verifyUser(username, password) {
    try {
        // Query the users table to find the user by username
        const { data: user, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('username', username)
            .single();

        if (userError) {
            console.error('Error fetching user:', userError.message);
            return { success: false, message: 'User not found' };
        }

        // Check if the password matches (in a real scenario, you'd hash and compare)
        if (user.password === password) {
            console.log('User authenticated:', user);
            return { success: true, data: user };
        } else {
            console.error('Invalid password');
            return { success: false, message: 'Invalid password' };
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'An unexpected error occurred' };
    }
}

// Export functions for use in other scripts
export { supabase, verifyUser };
