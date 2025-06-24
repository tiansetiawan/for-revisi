import { saveDownloadData } from '../../lib/downloads';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { document, name, email, phone } = req.body;
      
      if (!document || !name || !email) {
        return res.status(400).json({ error: 'Data tidak lengkap' });
      }

      const savedData = saveDownloadData({
        document,
        name,
        email, 
        phone,
        timestamp: new Date().toISOString()
      });

      return res.status(200).json({ 
        success: true,
        data: savedData
      });

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}