// src/pages/api/updatePoints.js
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { userId, points } = req.body;

    // Update poin di Supabase dan minta data yang diperbarui
    const { data, error } = await supabase
      .from('users')
      .update({ points })
      .eq('id', userId)
      .select(); // Tambahkan .select() untuk mengembalikan data yang diperbarui

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: 'Points updated successfully', data });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
