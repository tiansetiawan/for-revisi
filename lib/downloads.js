// lib/downloads.js
const fs = require('fs');
const path = require('path');

const downloadsFilePath = path.join(process.cwd(), 'data', 'downloads.json');

export function saveDownloadData(data) {
  // Baca file yang ada
  let downloads = [];
  if (fs.existsSync(downloadsFilePath)) {
    const fileData = fs.readFileSync(downloadsFilePath, 'utf8');
    downloads = JSON.parse(fileData);
  }
  
  // Tambahkan data baru
  downloads.push({
    ...data,
    timestamp: new Date().toISOString()
  });
  
  // Simpan ke file
  fs.writeFileSync(downloadsFilePath, JSON.stringify(downloads, null, 2));
  
  return downloads;
}

export function getDownloadData() {
  if (!fs.existsSync(downloadsFilePath)) {
    return [];
  }
  
  const fileData = fs.readFileSync(downloadsFilePath, 'utf8');
  return JSON.parse(fileData);
}