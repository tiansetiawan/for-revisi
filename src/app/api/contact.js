<<<<<<< HEAD
import { saveToGoogleSheet } from '../../lib/googleSheets';
=======
import { saveContactToSheet } from '../../../lib/googleSheets';
>>>>>>> 234f8bd6a699a91fb8ab0ce9da1a8d3221bdae58

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

<<<<<<< HEAD
  try {
    const { name, email, phone, address, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nama, email, dan pesan wajib diisi' });
    }

    // Save to Google Sheet - menggunakan sheet berbeda
    await saveToGoogleSheet({
=======
  console.log('Request received:', req.body); // Log request body

  try {
    const { name, email, phone, address, message, formType = 'General' } = req.body;
    
    // Validasi data
    if (!name || !email || !message) {
      console.log('Validation failed - missing required fields');
      return res.status(400).json({ error: 'Nama, email, dan pesan wajib diisi' });
    }

    const sheetName = formType === 'Kiosk' ? 'KioskContacts' : 'StoreContacts';
    console.log(`Attempting to save to sheet: ${sheetName}`);

    // Simpan ke Google Sheets
    const result = await saveContactToSheet({
>>>>>>> 234f8bd6a699a91fb8ab0ce9da1a8d3221bdae58
      name,
      email,
      phone: phone || '',
      address: address || '',
<<<<<<< HEAD
      message,
      timestamp: new Date().toISOString()
    }, 'ContactForm'); // Nama sheet berbeda

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Error saving contact form:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error' 
=======
      message
    }, sheetName);

    console.log('Save result:', result);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('API Error:', {
      message: error.message,
      stack: error.stack,
      requestBody: req.body
    });
    return res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
>>>>>>> 234f8bd6a699a91fb8ab0ce9da1a8d3221bdae58
    });
  }
}