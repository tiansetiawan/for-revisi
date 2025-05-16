'use client';;
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function Video() {

  const [showSubmenu, setShowSubmenu] = useState(true);
  const [activeItem, setActiveItem] = useState('Concrete Roof');
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
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

const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleWatchOnYouTube = (videoId, e) => {
    e.preventDefault();
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
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
    <span className="text-[#333]">Tentang Kami</span>
    <span className="text-[#333]">Sejarah</span>
    <span className="text-[#333]">Sertifikasi</span>
    <span className="text-[#333]">Katalog</span>
    <span className="text-[#2D5DA6] font-bold ">Video</span>
    <span className="text-[#333]">Inovasi</span>
    <span className="text-[#333]">Karir</span>
  </nav>
</div>

    <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-20">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
            VIDEO
          </h2>
        </div>

        {/* Grid Video */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {[
            { 
              id: 'dQw4w9WgXcQ', 
              title: 'Proses Produksi Genteng',
              description: 'Lihat proses pembuatan genteng berkualitas kami'
            },
            { 
              id: '9bZkp7q19f0', 
              title: 'Instalasi Genteng',
              description: 'Panduan pemasangan genteng yang benar'
            },
            { 
              id: 'JGwWNGJdvx8', 
              title: 'Keunggulan Produk',
              description: 'Fitur unggulan produk genteng kami'
            },
            { 
              id: 'kJQP7kiw5Fk', 
              title: 'Testimonial Pelanggan',
              description: 'Apa kata pelanggan tentang produk kami'
            },
            { 
              id: 'RgKAFK5djSk', 
              title: 'Perawatan Genteng',
              description: 'Cara merawat genteng untuk ketahanan maksimal'
            },
            { 
              id: 'OPf0YbXqDm0', 
              title: 'Inovasi Terbaru',
              description: 'Teknologi terbaru dalam produk genteng kami'
            }
          ].map((video) => (
            <div key={video.id} className="space-y-3 group">
              {/* Video Thumbnail with Hover Effect */}
              <div 
                className="relative w-full aspect-video bg-gray-300 overflow-hidden transition-all duration-300 group-hover:shadow-lg cursor-pointer"
                onClick={() => handleVideoClick(video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/20">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-20 group-hover:h-20">
                    <svg
                      className="w-8 h-8 text-[#0B203F] fill-current transition-transform duration-300 group-hover:scale-110"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-1">
                <h3 className="font-semibold text-black text-sm">{video.title}</h3>
                
                {/* Watch on YouTube Link */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  onClick={(e) => handleWatchOnYouTube(video.id, e)}
                  className="text-[#1A4C9A] font-medium text-sm hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat lebih banyak <span className="ml-1">&gt;&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 space-x-2 text-sm border-y border-[#E0E0E0] py-2">
          {[1, 2, 3, '...', 26].map((item, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                item === 1
                  ? 'bg-[#0B203F] text-white'
                  : 'hover:bg-gray-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}