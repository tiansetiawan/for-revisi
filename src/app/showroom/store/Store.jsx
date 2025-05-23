'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';


export default function Store() {

  const [showSubmenu, setShowSubmenu] = useState(true);
  const [activeItem, setActiveItem] = useState('Concrete Roof');
  const [activeSubItem, setActiveSubItem] = useState(null);
  const mainProducts = ['Concrete Roof', 'Paving Block', 'Concrete Block', 'Concrete Pipe'];
  const subProducts = ['Neo', 'Victoria', 'Dust Stone', 'Excelent', 'Majestic', 'Crown', 'New Royal'];

  useEffect(() => {
    // Ambil product dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    
    if (product) {
      setActiveSubItem(product);
      // Pertahankan state di sessionStorage
      sessionStorage.setItem('autoExpand', 'true');
      sessionStorage.setItem('activeSubItem', product);
    }
  }, []);

  const handleMainItemClick = (item) => {
    setActiveItem(item);
    setActiveSubItem(null);
    if (item === 'Concrete Roof') {
      setShowSubmenu(!showSubmenu);
    } else {
      setShowSubmenu(false);
    }
  };

  const handleSubItemClick = (subItem) => {
    setActiveSubItem(subItem);
  };
  
 // Slider state for product types
 const [currentSlide, setCurrentSlide] = useState(0);
 const sliderRef = useRef(null);

 const productTypes = [
  { name: 'Neo', image: '/images/icon photo.png' },
  { name: 'Victoria', image: '/images/icon photo.png' },
  { name: 'Victoria Multiline', image: '/images/icon photo.png' }, { name: 'Victoria Slate', image: '/images/icon photo.png' }, { name: 'Victoria Pine', image: '/images/Victoria Pine Clear.png' }];
 const visibleSlides = 4; // Number of slides visible at once

 const nextSlide = () => {
   if (currentSlide < productTypes.length - visibleSlides) {
     setCurrentSlide(currentSlide + 1);
     scrollToSlide(currentSlide + 1);
   }
 };

 const prevSlide = () => {
   if (currentSlide > 0) {
     setCurrentSlide(currentSlide - 1);
     scrollToSlide(currentSlide - 1);
   }
 };

 const scrollToSlide = (slideIndex) => {
   if (sliderRef.current) {
     const slideWidth = sliderRef.current.children[0]?.clientWidth || 0;
     sliderRef.current.scrollTo({
       left: slideIndex * (slideWidth + 16), // 16px for gap
       behavior: 'smooth'
     });
   }
 };


const [slopeAngle, setSlopeAngle] = useState('');
   const [showCalculator, setShowCalculator] = useState(false);
  const [calculationType, setCalculationType] = useState('Luas Atap');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const toggleCalculator = () => {
    setShowCalculator(!showCalculator);
  };

  const calculateRequirement = () => {
  const value = parseFloat(inputValue);
  if (!isNaN(value)) {
    let calculatedResult;
    
    if (calculationType === 'Luas Atap') {
      calculatedResult = Math.ceil(value * 8); // 8 genteng per m2
    } else {
      // Perhitungan luas bangunan
      let roofArea = value;
      
      if (slopeAngle) {
        const angle = parseFloat(slopeAngle);
        // Hitung luas atap berdasarkan sudut kemiringan
        roofArea = value / Math.cos(angle * Math.PI / 180);
      } else {
        // Asumsi default 1.5x luas bangunan
        roofArea = value * 1.5;
      }
      
      calculatedResult = Math.ceil(roofArea * 8);
    }
    
    setResult(calculatedResult.toString());
  }
};

  const cityItems = [
    {
      city: 'MEDAN',
      stores: [
        {
          name: 'HOMESMART',
          address: 'PT MEGAMAS PLAZA BANGUNANJl. Jend. Gatot Subroto No. 102 Medan, Sumatera Utara',
          telp: '(061) 4527588, (061) 4527586',
          hp: '0813 7028 1999',
          maps: 'https://maps.google.com?q=Jl. Jend. Gatot Subroto No. 102 Medan'
        },
      ],
    },
    {
      city: 'BATAM',
      stores: [
        {
          name: 'CV BATAM SUPPLY & DISTRIBUSI',
          address: 'Ruko Mega Mas Blok B No.16 SinCom - Batam Center',
          telp: '0813 7253 6236',
          maps: 'https://maps.google.com?q=Ruko Mega Mas Blok B No.16 Batam Center'
        },
      ],
    },
    {
      city: 'PALEMBANG',
      stores: [
        {
          name: 'PT. CELENTANG MULTI ARTHA',
          address: 'Jl. Brigjen H. Kasim No. B1 Bukit Sangkal Palembang',
          telp: '(0711) 5612157',
          hp: '0895 3444 88643',
          maps: 'https://maps.google.com?q=Jl. Brigjen H. Kasim No. B1 Bukit Sangkal Palembang'
        },
      ],
    },
    {
      city: 'PADANG',
      stores: [
        {
          name: 'CV. HENDRI WIJAYA PHERI',
          address: 'Jl. Nipah No.10-Padang',
          telp: '(0751) 28685',
          hp: '0813 6350 0284',
          maps: 'https://maps.google.com?q=Jl. Nipah No.10 Padang'
        },
      ],
    },
    {
      city: 'BANDAR LAMPUNG',
      stores: [
        {
          name: 'VICTORIA INDAH',
          address: 'Jl. Sukarno Hatta 39, Bandar Lampung (Samping Pool Bus Puspa)',
          hp: '0821 7676 6429',
          maps: 'https://maps.google.com?q=Jl. Sukarno Hatta 39 Bandar Lampung'
        },
      ],
    },
    {
      city: 'SEMARANG',
      stores: [
        {
          name: 'CV. SURYA MANDIRI',
          address: 'Jl. Kanai Raya 10 G Semarang',
          telp: '(024) 8455257, 8455258',
          hp: '0857 0303 0108, 0812 2951 8998',
          maps: 'https://maps.google.com?q=Jl. Kanai Raya 10 G Semarang'
        },
      ],
    },
    {
      city: 'BALI',
      stores: [
        {
          name: 'CV ANUGERAH PUTRA DEWATA',
          address: 'Jl. Kargo Permai I no. 198, Denpasar',
          hp: '0851 0040 4904',
          maps: 'https://maps.google.com?q=Jl. Kargo Permai I no. 198 Denpasar'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'TRI PUTRA ABADI',
          address: 'Jl. Ahmad Yani No. 57 (By Pass) Rawamangun, Jakarta Timur',
          telp: '(021) 8197816',
          maps: 'https://maps.google.com?q=Jl. Ahmad Yani No. 57 Jakarta'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'TRI PUTRA ABADI',
          address: 'Jl. Malaka Baru No. 36 Pondok Kopi, Jakarta Timur',
          telp: '(021) 8619756',
          hp: '0812 8714 9117',
          maps: 'https://maps.google.com?q=Jl. Malaka Baru No. 36 Pondok Kopi Jakarta'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'SINAR BHUANA',
          address: 'Jl. Raya Bogor Km. 20, Kramat Jati, Jakarta Timur',
          hp: '0878 3003 0098',
          maps: 'https://maps.google.com?q=Jl. Raya Bogor Km. 20 Jakarta'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'MEKAR JAYA ABADI',
          address: 'Jl. Daan Mogot Km 11 No. 2A, Jakarta Barat',
          hp: '(021) 29037949',
          maps: 'https://maps.google.com?q=Jl. Daan Mogot Km 11 Jakarta'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'ADHIGANA GENTENG STORE',
          address: 'Jl. Raya Bogor km. 27 no.14 Gandaria, Jakarta Timur (Seberang Alfa)',
          hp: '0812 1111 1042',
          maps: 'https://maps.google.com?q=Jl. Raya Bogor km. 27 no.14 Gandaria Jakarta'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'MAESTRO ATAP GALLERY CIGANJUR',
          address: 'Jl. Moh Kahfi I no. 2 Ciganjur, Kec. Jagakarsa, Jakarta Selatan',
          telp: '(021) 7871577',
          hp: '0878 8194 7124',
          maps: 'https://maps.google.com?q=Jl. Moh Kahfi I no. 2 Ciganjur Jakarta Selatan'
        },
      ],
    },
    {
      city: 'BOGOR',
      stores: [
        {
          name: 'CV BURSA GENTENG',
          address: 'Jl. Raya Cileungsi Jonggol Km. 3 Cileungsi',
          telp: '(021) 82491388',
          hp: '0811 1666 478, 0811 8230 18',
          maps: 'https://maps.google.com?q=Jl. Raya Cileungsi Jonggol Km. 3 Cileungsi'
        },
      ],
    },
    {
      city: 'BOGOR',
      stores: [
        {
          name: 'MAESTRO ATAP CIBUBUR',
          address: 'Jl. Alternatif Cibubur No. 633b, Nagrak Kec. Gn Putri, Kab. Bogor',
          hp: '0852 1881 8442',
          maps: 'https://maps.google.com?q=Jl. Alternatif Cibubur No. 633b Bogor'
        },
      ],
    },
  ];

  // Bagi ke 3 kolom secara vertikal
const itemsPerColumn = Math.ceil(cityItems.length / 3);
const columns = [
  cityItems.slice(0, itemsPerColumn),
  cityItems.slice(itemsPerColumn, itemsPerColumn * 2),
  cityItems.slice(itemsPerColumn * 2),
];



  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section - Responsive di semua device */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
      <Image
          src="/images/produk.png"
          alt="Banner Store"
          width={1764}
          height={460}
          className="w-full h-full object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 flex items-end pb-6 sm:pb-8 md:pb-12 lg:items-center lg:justify-center lg:pb-0 px-4 sm:px-6">
        </div>
      </div>

  {/* Header Section */}

<div className="bg-[#F2F2F2] py-4">
  <nav className="flex justify-center space-x-10 text-[1.5rem] font-light tracking-wide">
    <Link href="/showroom/store" className="text-[#2D5DA6] font-bold">Store</Link>
    <Link href="/showroom/kiosk" className="text-[#333] hover:text-[#2D5DA6]">Kiosk</Link>
  </nav>
</div> 

    <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 mb-10 text-sm sm:text-base">
  {/* Header Section */}
<div className="flex items-center gap-6 border-b border-[#CCCCCC] pb-6 max-w-6xl mx-auto px-4 md:px-0">
  {/* Kiri: Judul */}
  <div className="flex items-center w-full md:w-1/2 gap-10">
    <div className="leading-snug">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#0B203F] border-l-4 border-[#0B203F] pl-4 uppercase leading-tight">
              Temukan<br />Store Kami<br />di Kota Anda
            </h1>
    </div>
  <div className="flex flex-col items-center">
    <Image
      src="/images/STORE.png" // TANPA /public
      alt="Store Icon"
      width={140} // Bisa disesuaikan
      height={140}
      className="mb-1"
    />
</div>

  </div>

        {/* Kanan: Logo + Dropdowns */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm mb-4">
            Pilih wilayah untuk melihat informasi store dan kiosk kami terdekat
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm font-semibold mb-1">Propinsi</label>
              <select className="border border-gray-300 rounded px-3 py-2">
                <option value="">Pilih Propinsi</option>
              </select>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm font-semibold mb-1">Semua Kota</label>
              <select className="border border-gray-300 rounded px-3 py-2">
                <option value="">Pilih Kota</option>
              </select>
            </div>
          </div>
        </div>
      </div>

  {/* Grid Store */}
<div className="min-h-screen p-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((cityItem, idx) => (
              <div key={idx}>
                <h3 className="text-[#1E3A8A] font-bold uppercase mb-2">{cityItem.city}</h3>
                {cityItem.stores.map((store, sIdx) => (
                  <div key={sIdx} className="mb-4 text-gray-800 text-sm">
                    <a
                      className="font-semibold hover:underline block"
                      href={store.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {store.name}
                    </a>
                    <p>{store.address}</p>
                    {store.telp && <p>Telp: {store.telp}</p>}
                    {store.hp && <p>HP: {store.hp}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

{/* Pagination */}
        <div className="flex justify-center items-center gap-2 text-sm border-y border-[#E0E0E0] py-2">
            <button
    className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs disabled:opacity-50"
  >
    Sebelumnya
  </button>
          <button className="px-3 py-1 border border-gray-300 rounded-none bg-[#0B203F] text-white text-xs">
            1
          </button>
          <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs">
            2
          </button>
                      <button
    className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs disabled:opacity-50"
  >
    Berikutnya
  </button>
        </div>
</section>


    </div>
  );
}