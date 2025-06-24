import { saveContactSubmission } from '../../lib/contactForm';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validasi data
    if (!formData.name || !formData.email || !formData.message) {
      return Response.json(
        { success: false, error: 'Nama, email, dan pesan harus diisi' },
        { status: 400 }
      );
    }
    
    const submission = saveContactSubmission(formData);
    
    return Response.json(
      { success: true, data: submission },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error saving contact form:', error);
    return Response.json(
      { success: false, error: 'Gagal menyimpan data' },
      { status: 500 }
    );
  }
}