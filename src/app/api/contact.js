import { saveToGoogleSheet } from '../../lib/googleSheets';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, address, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nama, email, dan pesan wajib diisi' });
    }

    // Save to Google Sheet - menggunakan sheet berbeda
    await saveToGoogleSheet({
      name,
      email,
      phone: phone || '',
      address: address || '',
      message,
      timestamp: new Date().toISOString()
    }, 'ContactForm'); // Nama sheet berbeda

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Error saving contact form:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
    });
  }
}