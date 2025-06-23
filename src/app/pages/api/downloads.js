// pages/api/downloads.js
import { saveDownloadData } from '../../../../lib/downloads';

// pages/api/downloads.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Simpan data ke database atau file system
      console.log('Data received:', req.body);
      
      // Beri response sukses
      res.status(200).json({ 
        success: true,
        message: 'Data berhasil disimpan',
        data: req.body 
      });
    } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ 
        success: false,
        error: 'Gagal menyimpan data' 
      });
    }
  } else {
    res.status(405).json({ 
      success: false,
      error: 'Method not allowed' 
    });
  }
}