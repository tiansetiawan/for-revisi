// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

const submissionsPath = path.join(process.cwd(), 'data/contactSubmissions.json');

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validasi
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, error: 'Nama, email, dan pesan harus diisi' },
        { status: 400 }
      );
    }

    // Baca data yang ada
    let allSubmissions = [];
    try {
      const fileData = await fs.readFile(submissionsPath, 'utf8');
      allSubmissions = JSON.parse(fileData);
    } catch (err) {
      console.log('Creating new submissions file...');
    }

    // Tambahkan data baru
    const newSubmission = {
      ...formData,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    allSubmissions.push(newSubmission);

    // Simpan ke file
    await fs.writeFile(submissionsPath, JSON.stringify(allSubmissions, null, 2));

    return NextResponse.json(
      { success: true, data: newSubmission },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error saving contact form:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal menyimpan data' },
      { status: 500 }
    );
  }
}