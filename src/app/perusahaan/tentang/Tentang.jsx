'use client';;
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import LocationMap from '@/app/components/LocationMap';

export default function Tentang() {

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


  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section - Responsive di semua device */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
      <Image
          src="/images/produk.png"
          alt="Produk Genteng Cisangkan"
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
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
              PRODUK KAMI
            </h1>
            <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-2xl">
              Kualitas terbaik dengan teknologi modern untuk rumah idaman Anda
            </p>
          </div>
        </div>
      </div>

  {/* Header Section */}

<div className="bg-[#F2F2F2] py-4">
  <nav className="flex justify-center space-x-10 text-[1rem] font-light tracking-wide">
    <span className="text-[#2D5DA6] font-bold">Tentang Kami</span>
    <span className="text-[#333]">Sejarah</span>
    <span className="text-[#333]">Sertifikasi</span>
    <span className="text-[#333]">Katalog</span>
    <span className="text-[#333]">Video</span>
    <span className="text-[#333]">Inovasi</span>
    <span className="text-[#333]">Karir</span>
  </nav>
</div>


      {/* Tentang PT. Cisangkan */}
      <div className="max-w-6xl mx-auto mt-12 text-justify space-y-6 text-sm sm:text-base">
        <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] mb-4 pl-4">TENTANG PT. CISANGKAN</h2>
        <p className='text-sm'>
          PT Cisangkan, yang didirikan pada tahun 1974, telah berhasil mempelopori dan secara aktif menciptakan inovasi produk baru dalam produksi beton pra-cetak, yang menjadikan PT Cisangkan sebagai pelopor dalam bidang manufaktur berbasis beton. Sejak saat itu, PT Cisangkan berperan penting dalam pengembangan industri beton, tidak hanya di tingkat lokal, tapi juga di tingkat nasional dan internasional.
        </p>
        <p className='text-sm'>
          Dari empat kantor yang kini milik sekarang, PT Cisangkan mampu memberikan pelayanan yang baik kepada banyak klien, seperti badan pemerintah, arsitek, pengembang dan juga kontraktor baik di sektor swasta maupun publik. PT Cisangkan sebagai salah satu perusahaan perkakas beton independen terkemuka di Indonesia, juga memberikan layanan internasional untuk memberikan nilai tambah bagi industri konstruksi dalam jenis produk beton pra-cetak apapun.
        </p>
        <p className='text-sm'>
          Reputasi kami untuk keunggulan kualitas dan manufaktur, telah menempatkan PT Cisangkan di jajaran teratas penyedia bahan bangunan rumah di Indonesia.
        </p>

        {/* Visi Misi */}
        <div className="bg-[#f9f9f9] mt-10 space-y-4">
          <h3 className="font-bold text-sm text-slate-700">Visi</h3>
          <p className='text-sm'>Menjadi perusahaan genteng beton dan paving pilihan utama dan terpercaya di Indonesia</p>

          <h3 className="font-bold text-sm text-slate-700">Misi</h3>
          <p className='text-sm'>
            Mendesain, memproduksi dan memasarkan produk dengan kualitas terbaik. Mengembangkan produk bahan bangunan beton yang berorientasikan kepuasan konsumen. Membangun sumber daya manusia yang tangguh, unggul dan bermartabat.
          </p>
        </div>

        {/* Makna CISANGKAN */}
        <div className="mt-10">
          <h3 className="font-bold text-sm text-slate-700 mb-4">MAKNA CISANGKAN</h3>
<ul className="grid gap-3 grid-cols-[auto_1fr] items-baseline text-slate-700">
  <li className='text-sm col-span-1'>C</li>
  <li className='text-sm'>- Customer Focus</li>
  
  <li className='text-sm col-span-1'>I</li>
  <li className='text-sm'>- Innovative</li>
  
  <li className='text-sm col-span-1'>S</li>
  <li className='text-sm'>- Service Excellence</li>
  
  <li className='text-sm col-span-1'>A</li>
  <li className='text-sm'>- Attractive Design</li>
  
  <li className='text-sm col-span-1'>N</li>
  <li className='text-sm'>- Endurance</li>
  
  <li className='text-sm col-span-1'>G</li>
  <li className='text-sm'>- Great Performance</li>
  
  <li className='text-sm col-span-1'>K</li>
  <li className='text-sm'>- Key Partner</li>
  
  <li className='text-sm col-span-1'>A</li>
  <li className='text-sm'>- Adaptive</li>
  
  <li className='text-sm col-span-1'>N</li>
  <li className='text-sm'>- Networking</li>
</ul>
        </div>

{/* Lokasi Map */}
<div className="mt-10 mb-30">
  <h3 className="font-bold text-sm text-slate-700 mb-4">LOKASI PT. CISANGKAN</h3>
 <LocationMap />
</div>

{/* Lokasi Fisik */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mt-10 text-center px-2">
  <div className="group">
    <div className="overflow-hidden rounded-md">
      <img 
        src="/images/bandung.jpg" 
        alt="Head Office" 
        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out" 
      />
    </div>
    <p className="mt-2 font-bold text-sm/8">HEAD OFFICE & FACTORY</p>
    <p className="text-xs/5">Jl. AH Nasution 107, Cijerah, <br/>Bandung 40221</p>
    <p className="text-xs/5">Phone: +62 22 6025888</p>
    <p className="text-xs/5">Fax : +62 22 6030467</p>
    <p className="text-xs/5">Email: info@cisangkan.com</p>
  </div>

  <div className="group">
    <div className="overflow-hidden rounded-md">
      <img 
        src="/images/purwakarta.jpg" 
        alt="Purwakarta Factory" 
        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out" 
      />
    </div>
    <p className="mt-2 font-bold text-sm/8">PURWAKARTA FACTORY</p>
    <p className="text-xs/5">JL. Raya Cibatu Km.14,2 <br/>Campaka - Purwakarta 41182</p>
    <p className="text-xs/5">Phone: +62 264 208143, 2018146, 209630</p>
    <p className="text-xs">Fax : +62 264 209654</p>
  </div>

  <div className="group">
    <div className="overflow-hidden rounded-md">
      <img 
        src="/images/jakarta.jpg" 
        alt="House of Cisangkan" 
        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out" 
      />
    </div>
    <p className="mt-2 font-bold text-sm/8">HOUSE OF CISANGKAN</p>
    <p className="text-xs/5">Kompleks Perkantoran Intercon<br/>Plaza E-16</p>
    <p className="text-xs/5">Jl. Meruya Ilir, Jakarta Barat 11630</p>
    <p className="text-xs">Phone : +62 21 5853305</p>
  </div>

  <div className="group">
    <div className="overflow-hidden rounded-md">
      <img 
        src="/images/pasuruan.jpg" 
        alt="Pasuruan Factory" 
        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out" 
      />
    </div>
    <p className="mt-2 font-bold text-sm/8">PASURUAN FACTORY</p>
    <p className="text-xs/5">Jl. Raya Sedarum KM 18 No. 18A, Nguling<br/>Kab. Pasuruan - Jawa Timur 67185</p>
    <p className="text-xs">Phone: +62 343 6408682</p>
  </div>
</div>
      </div>

    </div>
  );
}