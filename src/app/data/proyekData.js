// src/data/proyekData.js
export const proyekByKategori = {
  'Semua Produk': [
    {
      id: 1,
      nama: "Paving Block",
      file: "/images/proyek/Alun-Alun Depok.jpg",
      tempat: "Alun Alun Kota Depok - Jawa Barat",
      kategori: "Paving Block"
    },
    {
      id: 2,
      nama: "Sandstein",
      file: "/images/proyek/Candi Borobudur.jpg",
      tempat: "Kawasan Candi Borobudur - Magelang",
      kategori: "Paving Block"
    },
    // ... data lainnya untuk Semua Produk
  ],
  'Concrete Roof': [
    {
      id: 10,
      nama: "Proyek Atap Neo",
      file: "/images/proyek/Atap Neo.jpg",
      tempat: "Jakarta",
      kategori: "Concrete Roof",
    //   subkategori: "Neo"
    },
    {
      id: 11,
      nama: "Proyek Atap Neo",
      file: "/images/proyek/Atap Neo.jpg",
      tempat: "Jakarta",
      kategori: "Concrete Roof",
    },

  ],
  'Paving Block': [
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Alun-Alun Depok.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Alun-Alun Wado.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Candi Borobudur.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Paving Block.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Candi Gedong Songo.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Embung Kipp IKN.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Gedung Sate.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Istana Presiden IKN.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Pelindo Tower.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Trotoar SPAM.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    },
    {
      id: 20,
      nama: "Proyek Paving Block",
      file: "/images/proyek/Paving Block/Trotoar SPAM.jpg",
      tempat: "Bandung",
      kategori: "Paving Block"
    }
   
  ],
  // ... kategori lainnya
};

// Data khusus untuk tampilan Neo
export const proyekNeo = [
  { 
    id: 101, 
    nama: "Proyek Atap Neo Premium", 
    file: "/images/proyek/Atap Neo Premium.jpg", 
    tempat: "Jakarta",
    kategori: "Concrete Roof",
    subkategori: "Neo"
  },
  // ... proyek Neo lainnya
];

export const semuaProyek = Object.values(proyekByKategori).flat();