'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';


export default function Kiosk() {

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
      city: 'BANDA ACEH & LHOKSUMAWE',
      stores: [
        {
          name: 'PT. EVRANDO SUKSES BERSAMA',
          address: 'Jl. Ngumban Sunbaiti / Melati Roya No.88, Medan',
          telp: '(081) 8384284',
          hp: '0813 8139 5045'
        },
      ],
    },
    {
      city: 'TANJUNG PINANG',
      stores: [
        {
          name: 'PT. CITRA SERAYA',
          address: 'Jl. Gatot Subrota No.98 A Tanjung Pinang',
          hp: '085558096268'
        },
      ],
    },
    {
      city: 'BANGKA BELITUNG',
      stores: [
        {
          name: 'PT. SETIAJAYA MAKMURINDO',
          address: 'Jl. Mayor Syafri, Rachman No.2 Bangka, Pengkai Pinang, Bangka Belitung',
          telp: '(077) 422835, (077) 438568',
          hp: '0813 8999 3973'
        },
      ],
    },
    {
      city: 'YOGYAKARTA',
      stores: [
        {
          name: 'MATAHARI JAYA',
          address: 'Jl. Parapatitis KM. 4 No. 301 Sewon - Bantul',
          telp: '(0274) 389868'
        },
        {
          name: 'CV AGNA ASTABAJA',
          address: 'Jl. Purboyo Krandon Sumberadi Mleti, Sieman (depan kantor Badan Pusat Statistik Kab. Sieman)',
          hp: '0851 0545 5234'
        },
      ],
    },
    {
      city: 'SAMARINDA',
      stores: [
        {
          name: 'PT KERAMIK JAYA BANGUNAN',
          address: 'Jl. A. Wahab Syahani No.78, Samarinda (Depan SPBU)',
          hp: '0852 4695 8522'
        },
      ],
    },
    {
      city: 'MANADO',
      stores: [
        {
          name: 'PT WIJAYA BANGUNAN',
          address: 'Jl. Walter Monginski No.124 Bahu - Manado',
          telp: '(0431) 825500, (0431) 825700',
          hp: '0812 4408 8877'
        },
      ],
    },
    {
      city: 'BANDUNG',
      stores: [
        {
          name: 'ABADI GENTENG',
          address: 'Jl. Seekamo Hatia No. 384 Bandung',
          telp: '(022) 5205152'
        },
      ],
    },
    {
      city: 'JAKARTA',
      stores: [
        {
          name: 'GENTENG PILAR MAS',
          address: 'Jl. Panjahan No.18 (Bypass) Jakarta Timur',
          hp: '0811 8006 010'
        },
      ],
    },
    {
      city: 'TANGERANG',
      stores: [
        {
          name: 'PT MITRA TARUMA PERKASA',
          address: 'Jl. Raya Rewa Burtu No.20, Serpong, Tangerang Selatan',
          telp: '(021) 758 77060',
          hp: '0877 7505 1700'
        },
        {
          name: 'SUPER BANGUN JAYA 1',
          address: 'Jl. Raya Cisauk, Sampara BSD Tangerang Selatan',
          telp: '(021) 75579999',
          hp: '0896 7061 4648'
        },
        {
          name: 'SUPER BANGUN JAYA 2',
          address: 'Jl. Raya Lapen I–2, Surcalita Cisauk, Kab. Tangerang',
          telp: '(021) 75879999',
          hp: '0896 7061 4648'
        },
      ],
    },
    {
      city: 'BEKASI',
      stores: [
        {
          name: 'MADJU PRIMA SEJAHTERA',
          address: 'Jl. Raya Kalimalong No. 36, Bekasi',
          telp: '(021) 8841210',
          hp: '0896 8970 2070'
        },
      ],
    },
    {
      city: 'PURWAKARTA',
      stores: [
        {
          name: 'ANEKA GENTENG',
          address: 'Jl. Raya Sodang, Cikampek Purwakarta (Samping Jembatan Timbang Civrang)',
          hp: '0852 2444 7000, 0818 4711133'
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
          alt="Banner Kiosk"
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
    <Link href="/showroom/store" className="text-[#333] hover:text-[#2D5DA6]">Store</Link>
    <Link href="/showroom/kiosk" className="text-[#2D5DA6] font-bold">Kiosk</Link>
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
      src="/images/KIOSK.png" // TANPA /public
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