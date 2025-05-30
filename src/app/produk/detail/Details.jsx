'use client';;
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaCalculator, FaTimes, FaElementor } from 'react-icons/fa';

export default function Details() {

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
  { name: 'Nok Ujung', image: '/images/icon photo.png'},
  { name: 'Nok Atas', image: '/images/icon photo.png' },
  { name: 'Apex', image: '/images/icon photo.png' }, { name: 'Starter', image: '/images/icon photo.png' }, { name: 'Nok Samping', image: '/images/icon photo.png' }, { name: 'Nok sammping Ujung', image: '/images/icon photo.png' }, { name: 'Genteng Setengah', image: '/images/icon photo.png' }];
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
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800">
      {/* Hero Section - Responsive di semua device */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover object-center"
    style={{
      width: '100%',
      height: 'auto',
      objectFit: 'cover'
    }}
  >
    <source src="/images/Spanduk Produk.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      </div>

  {/* Header Section */}

      <div className="bg-[#0B203F] text-white text-center py-2 font-light text-[1.5rem] tracking-wide">
        CONCRETE ROOF
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ps-6 pe-1 py-8">
        {/* Sidebar Menu */}
        <aside className="w-full lg:w-1/6 lg:sticky lg:top-[6.5rem] lg:h-[calc(100vh-6.5rem)] lg:overflow-y-auto">
  <h1 className="text-lg font-medium mb-4 pb-2">Produk</h1>
  <ul className="space-y-2 text-sm">
    {mainProducts.map((item) => (
      <li key={item}>
        {item === 'Concrete Roof' ? (
          <>
            <button
              onClick={() => handleMainItemClick(item)}
              className={`w-full text-left cursor-pointer font-semibold px-2 ${
                activeItem === item
                  ? 'text-[#2957A4] border-l-2 border-[#2957A4]'
                  : 'text-gray-700 hover:text-[#3a4557]'
              }`}
            >
              {item}
            </button>

            {/* Submenu */}
            {showSubmenu && activeItem === 'Concrete Roof' && (
              <ul className="ml-4 mt-2 space-y-3 text-gray-600 text-xs border-l border-gray-300 pl-2 mb-4">
                {subProducts.map((sub) => (
                  <li
                    key={sub}
                    onClick={() => handleSubItemClick(sub)}
                    className={`cursor-pointer ${
                      activeSubItem === sub
                        ? 'text-[#2957A4] font-medium'
                        : 'hover:text-[#2957A4]'
                    }`}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <button
            onClick={() => handleMainItemClick(item)}
            className={`w-full text-left px-2 cursor-pointer ${
              activeItem === item
                ? 'text-[#2957A4] border-l-2 border-[#2957A4] font-semibold'
                : 'text-gray-700 hover:text-[#3a4557]'
            }`}
          >
            {item}
          </button>
        )}
      </li>
    ))}
  </ul>
</aside>

       {/* Main Content */}
<main className="w-full lg:w-5/6 flex flex-col">
  {/* Gambar dan Thumbnail */}
  <div className="flex flex-col lg:flex-row gap-8 mb-22">
    {/* Ribbon NEO */}
    <div className="relative w-full max-w-md">
      <div className="absolute top-0 left-0 bg-[#d5def4] px-4 py-2 rounded-br-lg shadow text-xl italic font-semibold text-[#0B203F] z-10">
        NEO
      </div>
      <div className="relative aspect-square bg-gray-300 w-full flex items-center justify-center">
        {/* Gambar besar */}
        <Image 
          src="/images/icon photo.png" 
          alt="Produk NEO" 
          fill
          className="object-cover"
        />
      </div>
          {/* Thumbnail */}
    <div className="container-thumbnail items-start w-full max-w-md">
<div className="mt-4 flex space-x-4">
  <div className="relative w-16 h-16 bg-gray-200 border-2 border-blue-700 overflow-hidden rounded">
    <Image 
      src="/images/icon photo.png" 
      alt="thumb1" 
      fill
      className="object-cover"
      sizes="64px"
    />
  </div>
  <div className="relative w-16 h-16 bg-gray-300 overflow-hidden rounded">
    <Image 
      src="/images/icon photo.png" 
      alt="thumb2" 
      fill
      className="object-cover"
      sizes="64px"
    />
  </div>
</div>
    </div>
    </div>


   {/* Right Column - Specifications */}
            <div className="w-full lg:w-1/2 space-y-6 px-6">
              {/* Spesifikasi */}
              <section className='mb-14'>
<h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">SPESIFIKASI :</h2>
                <div className="space-y-3 pl-4">
                  {[
                    { label: 'Lubang Nominal', value: '44 x 37,4 cm' },
                    { label: 'Lubang Efektif', value: '36 x 34,4 cm' },
                    { label: 'Berat', value: '5,7 kg' },
                    { label: 'Pemakaian Genteng', value: '8 bh/m2' },
                    { label: 'Jarak Antar Reng', value: '36 cm' },
                    { label: 'Sudut Atap', value: 'Min. 25°' }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <p className="w-48 font-medium">{item.label}</p>
                      <p className="mr-2">:</p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="italic mt-4 pl-4">Cara Pemasangan Berselang</p>
              </section>

              {/* Spesifikasi Teknis */}
              <section className='mb-8'>
  <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">SPESIFIKASI TEKNIS :</h2>
                <div className="space-y-3 pl-4">
                  {[
                    { label: 'Beban Lentur', value: '1200 N' },
                    { label: 'Penyerapan Air', value: 'Maks. 10%' },
                    { label: 'Ketebalan Cat', value: '100 Mikron' },
                    { label: 'Warna Cat', value: 'Hitam Solid' }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <p className="w-48 font-medium">{item.label}</p>
                      <p className="mr-2">:</p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>

 {/* Tombol Hitung */}
      <div className='pl-4 px-44'>
        <button 
          onClick={toggleCalculator}
          className="bg-[#0B203F] text-white py-2 px-4 rounded hover:bg-[#1c355f] flex items-center gap-2 w-full"
        >
          <FaCalculator className="text-lg" />
          Hitung Kebutuhan Genteng
        </button>
      </div>
      <div className='pl-4 px-44'>
        <a
          href="/perusahaan/katalog"
          className="bg-[#0B203F] text-white py-2 px-4 rounded hover:bg-[#1c355f] flex items-center gap-2 w-full justify-center"
        >
          <FaCalculator className="text-lg" />
          Unduh Brosur
        </a>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 transition-opacity duration-300 ${showCalculator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
  <div className={`bg-transparent p-6 w-75 max-w-sm relative transition-transform duration-300 ${showCalculator ? 'translate-y-0' : 'translate-y-4'}`}>
    {/* Popup Kalkulator */}
{showCalculator && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
      {/* Close Button */}
      <button
        onClick={toggleCalculator}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <FaTimes className="text-xl" />
      </button>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center border-b border-b-gray-400 pb-6 mb-6">Kalkulator Genteng</h3>

      {/* Calculation Type */}
      <div className="mb-6">
        <p className="text-xs font-bold mb-2">Hitungan dengan:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs">
            <input
              type="radio"
              checked={calculationType === 'Luas Atap'}
              onChange={() => setCalculationType('Luas Atap')}
              className="h-3 w-3 text-[#0B203F] focus:ring-[#0B203F]"
            />
            Luas Atap
          </label>
          <label className="flex items-center gap-2 text-xs">
            <input
              type="radio"
              checked={calculationType === 'Luas Bangunan'}
              onChange={() => setCalculationType('Luas Bangunan')}
              className="h-3 w-3 text-[#0B203F] focus:ring-[#0B203F]"
            />
            Luas Bangunan
          </label>
        </div>
      </div>

      {/* Input Field - Nilai */}
      <div className="mb-4">
        <label className="font-bold block mb-2 text-xs">Masukkan Nilai:</label>
        <div className="flex border border-gray-300 rounded">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-3 py-2 w-full focus:outline-none text-xs"
            placeholder="0"
          />
          <span className="px-3 py-2 bg-gray-300 text-xs">m²</span>
        </div>
      </div>

      {/* Panel Tambahan untuk Luas Bangunan */}
{/* Panel Tambahan untuk Luas Bangunan */}
{calculationType === 'Luas Bangunan' && (
  <div className="mb-4">
    <label className="font-bold block mb-2 text-xs">Sudut Kemiringan Atap:</label>
    <div className="flex border border-gray-300 rounded">
      <input
        type="number"
        value={slopeAngle}
        onChange={(e) => setSlopeAngle(e.target.value)}
        className="px-3 py-2 w-full focus:outline-none text-xs"
        placeholder="Masukkan sudut (derajat)"
        min="0"
        max="90"
      />
      <span className="px-3 py-2 bg-gray-300 text-xs">°</span>
    </div>
  </div>
)}

      {/* Result */}
      {result && (
        <div className='mb-6'>
          <p className="font-bold mb-2 text-xs">Anda Membutuhkan:</p>
          <div className="flex border border-gray-300 rounded">
            <input
              type="text"
              value={result}
              readOnly
              className="text-xs px-3 py-2 w-full bg-gray-50 focus:outline-none"
            />
            <span className="text-xs px-3 py-2 bg-gray-300">pcs</span>
          </div>
        </div>
      )}

      {/* Calculate Button */}
      <button
        onClick={calculateRequirement}
        className="w-full bg-[#0B203F] text-white py-2 px-4 rounded hover:bg-[#1c355f]"
      >
        Hitung
      </button>
    </div>
  </div>
)}
  </div>
</div>
  </div>
   </div>
  
  <section className="mt-12">
            <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-2 ">AKSESORIS :</h2>
  
    <div className="relative">
      {/* Tombol Sebelumnya */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="absolute left-[1.5rem] top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
  
      {/* Kontainer Produk */}
      <div
        ref={sliderRef}
        className="grid grid-flow-col auto-cols-[calc(100%/2)] sm:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/4)] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4 px-20 gap-7.5"
      >
        {productTypes.map((product) => (
          <div key={product.name} className="snap-start min-w-0 ps-11 group">
            <div className="w-50 bg-gray-300 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col items-center">
  <div className="relative w-full h-45 flex items-center justify-center bg-gray-300 overflow-hidden">
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
              <div className="w-full text-center text-sm font-medium bg-[#E5ECF6] py-2 rounded-b-xl">
                {product.name}
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {/* Tombol Selanjutnya */}
      <button
        onClick={nextSlide}
        disabled={currentSlide >= productTypes.length - visibleSlides}
        className="absolute right-[1.5rem] top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
  
      {/* CSS Hilangkan Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  </section>
</main>
      </div>
    </div>
  );
}