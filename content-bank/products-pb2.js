export const concreteTileSubItems = [
   {
    id: 'Sandstein',
    name: 'Sandstein',
    thumbnails: [
      {
        id: 1,
        thumbImage: '/images/Paving Block/Square Set/truepave.png',
        largeImage: '/images/Paving Block/Square Set/truepave.png',
        color: 'Multi Warna'
      }
    ],
    specifications: [
      { label: 'Produk', value: 'Truepave' },
      { label: 'Dimensi', value: '10 x 20 cm' },
      { label: 'Berat', value: '2,5 kg / 2,9 kg / 3,3 kg / 4,3 kg' },
      { label: 'Tebal', value: '6 cm / 6+ cm / 8 cm / 10 cm' },
       { 
      label: 'Aplikasi', 
      icons: [
        ['pedestrian', 'car'],  // Untuk 6 cm (sesuai dengan weight pertama)
        ['pedestrian', 'car'],  // Untuk 6+ cm
        ['car', 'car'],         // Untuk 8 cm
        ['car', 'car']          // Untuk 10 cm
      ]
    },
      { label: 'Pemakaian', value: '49 bh/m2' },
      { label: 'Best Seller', icon: '/icons/BS.png' }
    ],
    technicalSpecs: [
      { label: 'Beban Lentur', value: '1100-1300 N' },
      { label: 'Penyerapan Air', value: 'Maks. 12%' },
      { label: 'Ketebalan Cat', value: '80-120 Mikron' },
      { label: 'Warna Variasi', value: '5 Pilihan Warna' }
    ],
    installationNote: ''
  },
  {
    id: 'Spectra Pave',
    name: 'Spectra Pave',
    thumbnails: [
      {
        id: 2,
        thumbImage: '/images/Paving Block/Square Set/halfpave.png',
        largeImage: '/images/Paving Block/Square Set/halfpave.png',
        color: 'Multi Warna'
      }
    ],
    specifications: [
      { label: 'Produk', value: 'Halfpave' },
      { label: 'Dimensi', value: '10 x 10 cm' },
      { label: 'Berat', value: '1,3 kg' },
      { label: 'Tebal', value: '6 cm' },
      { label: 'Aplikasi', icons: ['pedestrian', 'car'] },
      { label: 'Pemakaian', value: '98 bh/m2' }
    ],
    technicalSpecs: [
      { label: 'Beban Lentur', value: '1100-1300 N' },
      { label: 'Penyerapan Air', value: 'Maks. 12%' },
      { label: 'Ketebalan Cat', value: '80-120 Mikron' },
      { label: 'Warna Variasi', value: '5 Pilihan Warna' }
    ],
    installationNote: ''
  },
  {
    id: 'Cladding Tile',
    name: 'Cladding Tile',
    thumbnails: [
      {
        id: 3,
        thumbImage: '/images/Paving Block/Square Set/topiuskup.png',
        largeImage: '/images/Paving Block/Square Set/topiuskup.png',
        color: 'Abu-abu Gelap'
      }
    ],
    specifications: [
      { label: 'Ukuran', value: '44 x 37,4 cm' },
      { label: 'Berat', value: '5,9 kg' },
      { label: 'Pemakaian', value: '8 bh/m2' },
      { label: 'Jarak Antar Reng', value: '36 cm' },
      { label: 'Sudut Atap', value: 'Min. 25°' }
    ],
    technicalSpecs: [
      { label: 'Beban Lentur', value: '1300 N' },
      { label: 'Penyerapan Air', value: 'Maks. 8%' },
      { label: 'Ketebalan Cat', value: '120 Mikron' },
      { label: 'Warna Cat', value: 'Slate Grey' }
    ],
    installationNote: 'Pemasangan pola acak'
  },
  {
    id: 'Cladiing',
    name: 'Cladiing',
    thumbnails: [
      {
        id: 4,
        thumbImage: '/images/Paving Block/Square Set/fullpave.png',
        largeImage: '/images/Paving Block/Square Set/fullpave.png',
        color: 'Coklat'
      }
    ],
    specifications: [
      { label: 'Ukuran', value: '44 x 37,4 cm' },
      { label: 'Berat', value: '5,6 kg' },
      { label: 'Pemakaian', value: '8 bh/m2' },
      { label: 'Jarak Antar Reng', value: '36 cm' },
      { label: 'Sudut Atap', value: 'Min. 25°' }
    ],
    technicalSpecs: [
      { label: 'Beban Lentur', value: '1150 N' },
      { label: 'Penyerapan Air', value: 'Maks. 11%' },
      { label: 'Ketebalan Cat', value: '90 Mikron' },
      { label: 'Warna Cat', value: 'Pine Wood' }
    ],
    installationNote: 'Pemasangan pola berselang'
  }
];


export const productsPb2Content = {
  'Concrete Tile': {
    name: 'CONCRETE TILE',
    category: 'Paving Block',
    thumbnails: [
      {
        id: 1,
        thumbImage: '/images/Paving Block/Square Set/truepave.png',
        largeImage: '/images/Paving Block/Square Set/truepave.png',
        color: 'Multi Warna'
      }
    ],
    specifications: [
      { label: 'Produk', value: 'Truepave' },
      { label: 'Dimensi', value: '10 x 20 cm' },
      { label: 'Berat', value: '2,5 kg' },
      { label: 'Tebal', value: '6 cm' },
      { label: 'Aplikasi', icons: ['pedestrian', 'car'] },
      { label: 'Pemakaian', value: '49 bh/m2' },
      { label: 'Best Seller', icon: '/icons/BS.png' }
    ],
    technicalSpecs: [
      { label: 'Beban Lentur', value: '1100-1300 N' },
      { label: 'Penyerapan Air', value: 'Maks. 12%' },
      { label: 'Ketebalan Cat', value: '80-120 Mikron' },
      { label: 'Warna Variasi', value: '5 Pilihan Warna' }
    ],
    installationNote: '',
    type: pavingBlockSubItems.map(item => ({
      name: item.name,
      image: item.thumbnails[0].thumbImage,
      id: item.id
    }))
  }
};

export const mainProducts = [
  'Concrete Roof',
  'Paving Block',
  'Concrete Block',
  'Utility'
];

export const subProducts = {
  'Concrete Roof': [
    'Neo Solar System', 'Dual Slate', 'Floral', 'Victoria Series',
    'Genteng Gelombang'
  ],
  'Paving Block': [
    'Square Set', 'Classic Set', 'Altstadt',
    'Others', 'Guiding Pave', 'Grass Block'
  ],
  'Concrete Block': [
    'Regular Full 10.01', 'Regular Full Tembus 10.01 B', 'Regular Half 10.02',
    'Bond Beam 10.03', 'C-Pillar 10.04', 'Open End 10.05', 'Regular Full 15.01', 'Regular Full 15.01 B (Tembus)', 'Regular Full 15.02', 'Regular Full 15.02 B (Tembus)', 'Bond Bean 15.03', 'Reguler Full 20.01', 'Reguler Full 20.01 B (Tembus)', 'Regular Half 20.02 B (Tembus)', 'Bond Beam 20.03', 'Grooved Ribbed Block G.10.01', 'Grooved Ribbed Paver G.04.01', 'Split Ribbed Block S.12.01', 'Split Ribbed Paver S.05.01', 'Ventilation Block'
  ],
  'Utility': [
    'Concrete Pipe', 'Ciswell'
  ]
};
