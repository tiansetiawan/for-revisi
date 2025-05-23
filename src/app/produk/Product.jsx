'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Product() {

 const [showSubmenu, setShowSubmenu] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('autoExpand') === 'true';
    }
    return false;
  });
  const [activeItem, setActiveItem] = useState('Concrete Roof');
  const [activeSubItem, setActiveSubItem] = useState(null);
  const mainProducts = ['Concrete Roof', 'Paving Block', 'Concrete Block', 'Concrete Pipe'];
  const subProducts = ['Neo', 'Victoria', 'Dust Stone', 'Excelent', 'Majestic', 'Crown', 'New Royal'];

// Gunakan useEffect untuk mengecek state saat komponen dimount
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('expand') === 'true') {
    setShowSubmenu(true);
    // Bersihkan URL tanpa reload
    window.history.replaceState({}, '', window.location.pathname);
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
  { name: 'Neo', image: '/images/icon photo.png'},
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

  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800">
      {/* Hero Section - Responsive di semua device */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
      <Image
          src="/images/produk.png"
          alt="Banner Produk"
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
                        <li key={sub}>
                          <Link 
                            href={`/produk/detail?product=${encodeURIComponent(sub)}`}
                            onClick={() => handleSubItemClick(sub)}
                            className={`block cursor-pointer ${
                              activeSubItem === sub
                                ? 'text-[#2957A4] font-medium'
                                : 'hover:text-[#2957A4]'
                            }`}
                          >
                            {sub}
                          </Link>
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
        <main className="w-full lg:w-5/5 space-y-8">
          {/* Keunggulan */}
          <section className='mb-20'>
            <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">KEUNGGULAN GENTENG CISANGKAN :</h2>
            <p className="text-sm leading-relaxed text-justify ps-5">
              Genteng CISANGKAN® diproduksi dengan menggunakan proses basah yaitu wet process. Raw material pasir dan semen pilihan akan melewati suatu proses panjang, yaitu menggunakan mesin teknologi Jepang, kemudian setiap keping genteng yang dihasilkan melewati proses rendam (2 x 24 jam lalu curing secara alami (14 – 21 hari), dan setiap keping genteng tersebut akan melewati proses penggosokan dan quality control satu per satu.
              <br /><br />
              Salah satu produk genteng unggulan CISANGKAN® yaitu profil genteng flat Victoria yang tersedia dalam 5 pilihan model/motif presisi dan interlock system satu sama lainnya. Kelebihan genteng flat Victoria lainnya adalah memiliki Gutter line, Two Lines Barrier, Upper Barrier dan Double Protection Bar untuk membendung air hujan.
              <br /><br />
              Genteng CISANGKAN® dirancang sesuai dengan iklim tropis di Indonesia dan telah lolos pengujian yang mengacu pada SNI 0096 – 2007.
            </p>
          </section>

          {/* Gambar Genteng dan Label */}
          <section className="flex justify-center">
            <Image src="/images/part descriptsion product.jpg" alt="Genteng Label Kiri" width={600} height={500} />
          </section>

          {/* Spesifikasi Teknis */}
          <section className='mb-15'>
            <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">SPESIFIKASI TEKNIS :</h2>
            <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
              <li>Bahan dasar campuran Beton</li>
              <li>Mutu Produk mengacu pada SNI 0096:2007</li>
              <li>Beban lentur minimal 1200 N</li>
              <li>Daya serap air &lt; 10%</li>
              <li>Sistem produksi mesin Press Wet System</li>
              <li>Sistem pengecatan Sprayboot 2 tahap</li>
              <li>Cat Solvent Based tahan cuaca, air, alkali, sinar UV</li>
              <li>Ketebalan cat 70 mikron</li>
              <li>Prosedur & hasil uji mengacu pada ASTM Section 6, Volume 06.01</li>
              <li>Warna: Hitam, Abu-abu, Kopi, Coklat, Merah</li>
            </ul>
          </section>

          {/* Type Produk */}
          <section className="mb-10 relative">
  <h2 className="text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">TYPE PRODUK :</h2>

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
            className="grid grid-flow-col auto-cols-[calc(100%/2)] sm:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/4)] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4 px-19 gap-6.5"
          >
            {productTypes.map((product) => (
              <div key={product.name} className="snap-start min-w-0 ps-12.5 group">
                <Link 
                  href={`/produk/detail?product=${encodeURIComponent(product.name)}`}
                  onClick={() => {
                    sessionStorage.setItem('autoExpand', 'true');
                    sessionStorage.setItem('activeSubItem', product.name);
                  }}
                >
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
                </Link>
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