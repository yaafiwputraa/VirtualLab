import { supabase } from '../../lib/supabaseClient';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Log request body for debugging
  console.log("Request body:", req.body);

  const { username, email, password } = req.body;

  // Validasi input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user ke Supabase
    const { data, error } = await supabase
      .from('users')
      .insert({ username, email, password: hashedPassword });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json({ message: 'User created successfully', data });
  } catch (err) {
    console.error("Error signing up:", err);
    res.status(500).json({ error: 'Internal server error' });
  }
}