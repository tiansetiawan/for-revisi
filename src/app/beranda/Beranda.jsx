'use client';
import { useState, useEffect, useRef } from 'react'; 
import Link from 'next/link';
import HeroSection from './HeroSection';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/style/Beranda.css'

// Hero Slides Data
const heroSlides = [
  {
    image: '/images/Banner1.jpg',
    // title: 'FLAT ROOF',
    // subtitle: 'Minimalist Look, Maximum Durability.',
    // description: 'Bring a timeless modern vibe to every corner of your roof.',
  },
  {
    image: '/images/Banner1.jpg',
    // title: 'CLASSIC TILE',
    // subtitle: 'Elegant and Timeless.',
    // description: 'A perfect fit for traditional yet stylish homes.',
  },
  {
    image: '/images/Banner Home Resize.jpg',
    // title: 'MODERN ROOF',
    // subtitle: 'Sleek, Strong, and Stylish.',
    // description: 'Enhance your home’s architecture with a modern touch.',
  },
];

// Category Data
const defaultCategories = [
  { 
    name: 'Concrete Roof', 
    icon: '/icons/cr-trace.png',
    link: '/produk' // Tambahkan properti link
  },
  { name: 'Paving Block', icon: '/icons/pv-trace.png' },
  { name: 'Concrete Block', icon: '/icons/cb-trace.png' },
  { name: 'Concrete Pipe', icon: '/icons/cp-trace.png' }
];


// Project data
const proyekData = [
  {
    id: 1,
    namaProduk: 'Flat Roof',
    namaProyek: 'Kantor Pusat Cisangkan',
    tempatProyek: 'Bandung',
    gambar: '/images/Alun-Alun Depok.jpg'
  },
  {
    id: 2,
    namaProduk: 'Classic Tile',
    namaProyek: 'Perumahan Elit',
    tempatProyek: 'Jakarta',
    gambar: '/images/Alun-Alun Wado.jpg'
  },
  {
    id: 3,
    namaProduk: 'Modern Roof',
    namaProyek: 'Apartemen Taman Kota',
    tempatProyek: 'Surabaya',
    gambar: '/images/Candi Borobudur.jpg'
  },
  {
    id: 4,
    namaProduk: 'Concrete Block',
    namaProyek: 'Pabrik Tekstil',
    tempatProyek: 'Cirebon',
    gambar: '/images/Candi Gedong Songo.jpg'
  },
  {
    id: 5,
    namaProduk: 'Paving Block',
    namaProyek: 'Area Parkir Mall',
    tempatProyek: 'Bekasi',
    gambar: '/images/Gedung Sate.jpg'
  },
  {
    id: 6,
    namaProduk: 'Concrete Pipe',
    namaProyek: 'Proyek Drainase',
    tempatProyek: 'Bogor',
    gambar: '/images/Embung Kipp IKN.jpg'
  },
  {
    id: 7,
    namaProduk: 'Concrete Block',
    namaProyek: 'Pabrik Tekstil',
    tempatProyek: 'Cirebon',
    gambar: '/images/Istana Presiden IKN.jpg'
  },
  {
    id: 8,
    namaProduk: 'Paving Block',
    namaProyek: 'Area Parkir Mall',
    tempatProyek: 'Bekasi',
    gambar: '/images/Pelindo Tower.jpg'
  },
  {
    id: 9,
    namaProduk: 'Concrete Pipe',
    namaProyek: 'Proyek Drainase',
    tempatProyek: 'Bogor',
    gambar: '/images/Trotoar SPAM.jpg'
  },
  {
    id: 10,
    namaProduk: 'Concrete Block',
    namaProyek: 'Pabrik Tekstil',
    tempatProyek: 'Cirebon',
    gambar: '/images/Unjani.jpg'
  },
  {
    id: 11,
    namaProduk: 'Paving Block',
    namaProyek: 'Area Parkir Mall',
    tempatProyek: 'Bekasi',
    gambar: '/images/proyek5.jpg'
  },
  {
    id: 12,
    namaProduk: 'Concrete Pipe',
    namaProyek: 'Proyek Drainase',
    tempatProyek: 'Bogor',
    gambar: '/images/proyek6.jpg'
  }
];

const getYoutubeThumbnail = (youtubeId, quality = 'hqdefault') => {
  const qualities = {
    default: 'default',
    medium: 'mqdefault',
    high: 'hqdefault',
    standard: 'sddefault',
    maxres: 'maxresdefault'
  };
  
  const selectedQuality = qualities[quality] || qualities.high;
  return `https://img.youtube.com/vi/${youtubeId}/${selectedQuality}.jpg`;
};


// Tambahkan di bagian data (bisa di atas videoTestimonials)
const mainTestimonialVideo = {
  title: "Testimonial Utama",
  youtubeId: "EiLY8P_Lf8o",
  description: "Testimonial pelanggan utama kami",
  thumbnail: getYoutubeThumbnail("EiLY8P_Lf8o", 'maxres') // Kualitas lebih tinggi
};



// Video Testimonial Data
const videoTestimonials = [
  {
    id: 1,
    title: 'Video Testimonial 1',
    youtubeId: 'EiLY8P_Lf8o',
    watchText: 'Lihat lebih banyak'
  },
  {
    id: 2,
    title: 'Video Testimonial 2',
    youtubeId: 'dQw4w9WgXcQ',
    watchText: 'Lihat lebih banyak'
  },
  {
    id: 3,
    title: 'Video Testimonial 3',
    youtubeId: 'dQw4w9WgXcQ',
    watchText: 'Lihat lebih banyak'
  },
  {
    id: 4,
    title: 'Video Testimonial 4',
    youtubeId: 'dQw4w9WgXcQ',
    watchText: 'Lihat lebih banyak'
  },
  {
    id: 5,
    title: 'Video Testimonial 5',
    youtubeId: 'dQw4w9WgXcQ',
    watchText: 'Lihat lebih banyak'
  },
  {
    id: 6,
    title: 'Video Testimonial 6',
    youtubeId: 'dQw4w9WgXcQ',
    watchText: 'Lihat lebih banyak'
  }
].map(video => ({
  ...video,
  thumbnail: getYoutubeThumbnail(video.youtubeId) // Otomatis generate thumbnail
}));

export default function Beranda() {
    // State tambahan untuk animasi
    const [isChangingSlide, setIsChangingSlide] = useState(false);
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Project Slider State
  const [currentProyekSlide, setCurrentProyekSlide] = useState(0);
  const proyekSliderRef = useRef(null); // Tambahkan ini
  const [isMobile, setIsMobile] = useState(false);
  const [isSliderReady, setIsSliderReady] = useState(false);

  // Video Slider State
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const videoSliderRef = useRef(null); // Now this will work
  const totalVideoSlides = videoTestimonials.length;
  const visibleVideoSlides = 5;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handler untuk close modal
const handleCloseVideo = () => {
  setSelectedVideo(null);
};

  const nextVideoSlide = () => {
    if (currentVideoSlide < totalVideoSlides - visibleVideoSlides) {
      setCurrentVideoSlide(currentVideoSlide + 1);
      videoSliderRef.current.scrollLeft += videoSliderRef.current.offsetWidth / visibleVideoSlides;
    }
  };

  const prevVideoSlide = () => {
    if (currentVideoSlide > 0) {
      setCurrentVideoSlide(currentVideoSlide - 1);
      videoSliderRef.current.scrollLeft -= videoSliderRef.current.offsetWidth / visibleVideoSlides;
    }
  };

  const VideoPlayer = ({ youtubeId, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  // Membuat URL embed YouTube dengan parameter yang lebih lengkap
  const videoUrl = youtubeId === 'main' 
    ? `https://www.youtube.com/embed/${mainTestimonialVideo.youtubeId}?autoplay=1&rel=0&enablejsapi=1&loop=0&playlist=${mainTestimonialVideo.youtubeId}`
    : `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&enablejsapi=1&loop=0&playlist=${youtubeId}`;

  // Clean up saat komponen unmount
  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = '';
      }
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={videoUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            alert('Gagal memuat video');
          }}
        ></iframe>
      </div>
    </div>
  );
};

  // Responsive settings
  const itemsPerSlideDesktop = 6;
  const columnsPerSlideDesktop = 6;
  const itemsPerSlideMobile = 3;
  const columnsPerSlideMobile = 3;

   // Check mobile device
   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 // Hero Slider Functions dengan animasi
 const goToSlide = (index) => {
  setCurrentSlide(index);
};

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  resetAutoPlay();
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  resetAutoPlay();
};

const resetAutoPlay = () => {
  setIsAutoPlaying(false);
  setTimeout(() => setIsAutoPlaying(true), 5000);
};

const handleSlideChange = (index) => {
  setCurrentSlide(index);
};


  // Project Slider Navigation
 // Fungsi-fungsi slider yang sudah ada...
const goToProyekSlide = (slideIndex) => {
  if (!proyekSliderRef.current) return;
  
  const itemsPerSlide = isMobile ? itemsPerSlideMobile : itemsPerSlideDesktop;
  const maxSlide = Math.ceil(proyekData.length / itemsPerSlide) - 1;
  const clampedIndex = Math.max(0, Math.min(slideIndex, maxSlide));
  
  setCurrentProyekSlide(clampedIndex);
  
  const scrollAmount = isMobile 
    ? proyekSliderRef.current.offsetWidth * clampedIndex
    : proyekSliderRef.current.offsetWidth * Math.floor(clampedIndex / columnsPerSlideDesktop);
  
  proyekSliderRef.current.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
};


// Perbaiki juga useEffect untuk handle resize:
useEffect(() => {
  if (isSliderReady) {
    goToProyekSlide(currentProyekSlide);
  }
}, [isMobile, isSliderReady]);



// Komponen ProjectCard
const ProjectCard = ({ proyek }) => (
  <div className="bg-white shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden group h-full">
    <div className="relative w-full aspect-[4/3] bg-gray-300 overflow-hidden">
      <Image
        src={proyek.gambar}
        alt={proyek.namaProduk}
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {proyek.namaProduk}
        </h3>
        <p className="text-sm text-white/90 mt-1">
          {proyek.namaProyek} – {proyek.tempatProyek}
        </p>
      </div>
    </div>
  </div>
);


// Slick Carousel settings for Proyek Cisangkan
const ProyekSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  rows: 2,
  arrows: !isMobile,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        arrows: false
      }
    }
  ]
};

// Custom arrow components for Proyek Cisangkan
const ProyekNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${isMobile ? 'right-2' : 'right-[-4.5rem]'} top-1/2 -translate-y-1/2 z-10 bg-[#0B1F3A] hover:bg-[#0B203F] text-white p-2 sm:p-3 rounded-none shadow-lg transition-all duration-300`}
    aria-label="Next projects"
  >
    <FaChevronRight className="text-sm sm:text-base" />
  </button>
);

const ProyekPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${isMobile ? 'left-2' : 'left-[-4.5rem]'} top-1/2 -translate-y-1/2 z-10 bg-[#0B1F3A] hover:bg-[#0B203F] text-white p-2 sm:p-3 rounded-none shadow-lg transition-all duration-300`}
    aria-label="Previous projects"
  >
    <FaChevronLeft className="text-sm sm:text-base" />
  </button>
);


// AutoPlay Effect
useEffect(() => {
  let interval;
  if (isAutoPlaying && heroSlides.length > 1) {
    interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  }
  return () => clearInterval(interval);
}, [isAutoPlaying, currentSlide]);


return (
<main className="px-4 md:px-11 2xl:px-16">
  {/* Hero Section */}
  <div className="relative w-full">
    {/* Navigation buttons - hidden on mobile */}
    <div className="hidden md:flex absolute top-1/2 left-[-2em] right-[-2em] z-20 justify-between px-4 mt-[-10rem]">
      <button
        onClick={prevSlide}
        className="btn-hero-lf bg-[#0B1F3A] p-2 sm:p-3 text-white hover:bg-[#404b6b] transition-colors duration-200 rounded-none"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-sm sm:text-base" />
      </button>
      <button
        onClick={nextSlide}
        className="btn-hero-rg bg-[#0B1F3A] p-2 sm:p-3 text-white hover:bg-[#404b6b] transition-colors duration-200 rounded-none"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-sm sm:text-base" />
      </button>
    </div>

    <HeroSection 
      slides={heroSlides.map(slide => ({
        ...slide,
      }))}
      currentSlide={currentSlide}
      autoPlayDelay={5000}
      onSlideChange={handleSlideChange}
    />

  {/* Slide Indicators */}
  <div className="hero-slide-indicators absolute bottom-[17.5rem] left-1/2 -translate-x-1/2 flex gap-2 z-10 2xl:bottom-[14rem]">
    {heroSlides.map((_, idx) => (
      <button
        key={idx}
        onClick={() => {
          goToSlide(idx);
          resetAutoPlay();
        }}
        className={`h-[5px] rounded-full transition-all duration-300 relative ${
        idx === currentSlide
          ? 'w-20 bg-[#0B203F] shadow-[0_3px_3px_rgba(11,32,63,0.2),0_2px_6px_rgba(11,32,63,0.1)]'
          : 'w-8 bg-[#FFFFFF] shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.05)]'
      } hover:shadow-[0_3px_4px_rgba(11,32,63,0.15),0_3px_6px_rgba(11,32,63,0.1)]`}
      aria-label={`Go to slide ${idx + 1}`}
    >
      {idx === currentSlide && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0B203F] to-[#0B203F]/90 shadow-[0_4px_4px_rgba(11,32,63,0.15)]" />
      )}
    </button>
  ))}
</div>
      </div>

    {/* Product Categories Section */}
<section className="product-categories-section py-20 text-center 2xl:mt-10 mb-5">
  <h2 className="text-2xl font-medium mb-10">TELUSURI PRODUK KAMI</h2>
  <div className="category-container flex flex-wrap justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-40">
    {defaultCategories.map((category, index) => (
      <Link 
        href={category.link || '/produk'} 
        key={index}
        onClick={() => {
          if (category.name === 'Concrete Roof') {
            sessionStorage.setItem('autoExpand', 'true');
            sessionStorage.setItem('activeSubItem', 'Neo'); // Set default subitem
          }
        }}
      >
        <div className="flex flex-col items-center group text-[#333333] cursor-pointer">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border border-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-[#0B203F] hover:border-white hover:border-2">
            <Image
              src={category.icon}
              alt={category.name}
              width={90}
              height={90}
              className="icon-categories max-h-12 sm:max-h-14 md:max-h-16 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <span className="mt-3 text-xs sm:text-xs font-medium">{category.name}</span>
        </div>
      </Link>
    ))}
  </div>
</section>

    {/* Proyek Cisangkan Section */}
    <section className="py-6 sm:py-10 bg-[#ECEEF0] relative">
        <h2 className="text-center text-xl sm:text-2xl font-medium mb-4 sm:mb-5">PROYEK CISANGKAN</h2>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-1">
          <div className="relative">
            <Slider 
              {...ProyekSliderSettings}
              nextArrow={<ProyekNextArrow />}
              prevArrow={<ProyekPrevArrow />}
            >
              {proyekData.map((proyek) => (
                <div key={proyek.id} className="px-2 mb-4 h-full">
                  <ProjectCard proyek={proyek} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

        {/* Video Testimonial Produk */}
      <section className="py-6 sm:py-10 relative mt-5 mb-6">
        <div className="w-full">
          {/* Title dengan garis bawah */}
          <div className="box-about-top a-from-bottom actived" delay=".5" trigger-anim=".trig-about" style={{opacity: 1, position: 'relative', bottom: '0px'}}>
            <div className="container-title mb-7 flex flex-row items-cente">
            <div className="left" style={{
    flex: 1,
    display: 'flex',
    alignItems: 'center', // Tambahkan ini
    height: '100%' // Pastikan height penuh
  }}>
    <h3 className="hline text-left text-xl sm:text-2xl font-medium mb-0 px-2 border-l-4 border-[#0B203F] leading-[1.2] m-0">
      VIDEO TESTIMONIAL PRODUK
    </h3>
  </div>
  <div className="right text-sm sm:text-sm font-medium flex-[2] mr-80 flex flex-col justify-center">
    <p style={{
      margin: '0 0 0.5rem 0', // Sesuaikan margin
      lineHeight: '1.5'
    }}>
      Simak ulasan dari customer kami setelah menggunakan produk dari Cisangkan
    </p>     
    <div className="box-link-list" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <a href="#" style={{
        color: '#2957A4',
        fontWeight: '500',
        textDecoration: 'none'
      }}>
        Tentang Kami
      </a>
      <i className="dots" style={{
        color: '#999',
        fontSize: '0.8rem'
      }}>•</i>
      <a href="#" style={{
        color: '#2957A4',
        fontWeight: '500',
        textDecoration: 'none'
      }}>
        Video lainnya
      </a>
    </div>                  
  </div>
            </div>
          </div>

          {/* Video Utama */}
<div className="flex justify-center bg-[#ECEEF0] p-6 py-7 mb-5 rounded-none">
  <div className="relative w-full max-w-4xl aspect-video bg-gray-200 rounded-none overflow-hidden">
    {selectedVideo === 'main' ? (
      <iframe
        src={`https://www.youtube.com/embed/${mainTestimonialVideo.youtubeId}?autoplay=1&rel=0&enablejsapi=1`}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={() => setSelectedVideo('main')}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[#0B1F3A]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        </div>
        <Image 
          src={mainTestimonialVideo.thumbnail}
          alt={mainTestimonialVideo.title}
          fill
          className="object-cover"
          unoptimized // Untuk gambar dari external source
        />
      </div>
    )}
  </div>
</div>
          
          {/* Tombol Lihat Semua */}
          <div className="link-allvideo flex justify-between text-sm">
          <h3 className="text-left text-md sm:text-1xl font-semibold">Video Lainnya</h3> 
            <a href="#" style={{color: '#0B1F3A', textDecoration: 'none'}}>Lihat Semua</a>
            </div>

          {/* Daftar Video Lainnya dengan Slider */}
          <div className="container-slider-vd relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevVideoSlide}
              disabled={currentVideoSlide === 0}
              className="prevVideoSlide absolute left-0 top-22 -translate-y-1/2 -translate-x-6 z-10 w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <div 
  ref={videoSliderRef}
  className="grid-vd grid grid-flow-col auto-cols-[calc(100%/2)] sm:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/5)] gap-21 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4"
>
  {videoTestimonials.map((video) => (
    <div key={video.id} className="cover-video group cursor-pointer snap-start">
      <div 
        className="cover-video2 relative aspect-video bg-gray-200 rounded-none overflow-hidden w-full h-[150px]"
        onClick={() => setSelectedVideo(video.youtubeId)}
      >
        {/* Thumbnail */}
        <Image 
          src={video.thumbnail} 
          alt={video.title}
          fill
          className="object-cover"
        />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-[#0B1F3A]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="video-title mt-3 text-left">
        <p className="text-sm font-medium text-gray-800">{video.title}</p>
        <button 
          className="mt-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
          onClick={() => setSelectedVideo(video.youtubeId)}
        >
          {video.watchText}
        </button>
      </div>
    </div>
  ))}
</div>

{/* Video Player Modal */}
{selectedVideo && (
  <VideoPlayer 
  youtubeId={selectedVideo}
  onClose={handleCloseVideo}
/>
)}

            <button 
              onClick={nextVideoSlide}
              disabled={currentVideoSlide >= totalVideoSlides - visibleVideoSlides}
              className="nextVideoSlide absolute right-0 top-22 -translate-y-1/2 translate-x-6 z-10 w-8 h-8 rounded-full bg-transparent flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>

            {/* CSS untuk menghilangkan scrollbar */}
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
        </div>
      </section>
  
         {/* Terbaru Section */}
         <section className="py-10 px-4 sm:px-10 bg-[#ECEEF0]">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-center gap-2 items-center mb-8 px-2">
      <h2 className="text-xl sm:text-2xl font-medium">TERBARU</h2>
      <p className="text-blue-500 text-sm sm:text-base cursor-pointer hover:underline">Lihat Semua</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[...Array(3)].map((_, i) => (
    <div key={i} className="flex after:w-[1px] after:bg-[#D7D7D7]">
      <div className="flex p-4">
        {/* Ganti div placeholder dengan Image */}
        <div className="relative w-20 h-20 mr-4 flex-shrink-0">
          <Image
            src={`/images/icon photo.png`} // Ganti dengan path gambar yang sesuai
            alt={`Testimonial ${i+1}`}
            width={80}
            height={80}
            className="object-cover"
            style={{ width: '80px', height: '80px' }} // Memastikan ukuran tetap
          />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium mb-1">
            Lorem ipsum has been the industry's standard..
          </h3>
          <p className="text-xs text-gray-600">
            when an unknown printer took a galley of type and
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</section>
  
       {/* E-Commerce Section */}
        <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">CISANGKAN OFFICIAL E-COMMERCE</h2>
        <div className="flex justify-center mb-20">
  <a 
    href="https://www.tokopedia.com/cisangkan" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <img 
      src="/tokopedia-logo.png" 
      alt="Tokopedia" 
      className="h-15" 
    />
  </a>
</div>
          <div className="container-shortcut text-left grid grid-cols-1 md:grid-cols-3 gap-55 px-[5rem]">
  {[
    {
      title: "Tentang Kami",
      image: "/images/icon photo.png",
      desc: "Lorem ipsum has been the industry's standard dummy.."
    },
    {
      title: "Store",
      image: "/images/icon photo.png",
      desc: "Lorem ipsum has been the industry's standard dummy.."
    },
    {
      title: "Inovasi", 
      image: "/images/icon photo.png",
      desc: "Lorem ipsum has been the industry's standard dummy.."
    }
  ].map((item, i) => (
    <div key={i} className='w-60'>
      <div className="section-container relative w-full h-60 mb-6 rounded-none bg-gray-300 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        />
      </div>
      <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
      <p className="text-base text-gray-600 leading-6">{item.desc}</p>
      <p className="text-blue-500 text-xs mt-1 hover:text-blue-700 transition-colors cursor-pointer">
        Baca lebih banyak
      </p>
    </div>
  ))}
</div>
        </section>
      </main>
    );
  }
  