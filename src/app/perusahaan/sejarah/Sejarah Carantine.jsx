'use client';;
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function SejarahCarantine() {

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
    <span className="text-[#333]">Tentang Kami</span>
    <span className="text-[#2D5DA6] font-bold">Sejarah</span>
    <span className="text-[#333]">Sertifikasi</span>
    <span className="text-[#333]">Katalog</span>
    <span className="text-[#333]">Video</span>
    <span className="text-[#333]">Inovasi</span>
    <span className="text-[#333]">Karir</span>
  </nav>
</div>


      {/* Sejarah PT. Cisangkan */}
        <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base">
  <div className="max-w-5xl mx-auto">
    <div className="flex items-start mb-4">
      <div>
        <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4">
          SEJARAH TENTANG<br />
          PT. CISANGKAN
        </h2>
      </div>
    </div>
    <p className="text-sm text-justify mb-4">
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam dolorem molestiae cum quis fugiat cupiditate, odit, autem eius nostrum officia eveniet officiis amet ducimus! Hic, eum? Ad nostrum deserunt quos.
    </p>
    <p className="text-sm text-justify mb-4">
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni esse nihil molestiae itaque accusamus deleniti unde. Ut autem labore velit.
    </p>
    <p className="text-sm text-justify">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate corporis consequatur nemo repudiandae eum consequuntur nisi expedita, quia aspernatur quod voluptatum nobis harum temporibus adipisci beatae dolorum perspiciatis. Voluptatum nesciunt ad velit eligendi. Quam consectetur, a in possimus corrupti perferendis est perspiciatis eligendi nesciunt odio culpa incidunt sit modi. Earum.
    </p>
  </div>
</section>
    </div>
  );
}