'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { 
  ConcreteRoofContent, concreteRoofProducts,
  PavingBlockContent, pavingBlockProducts,
  ConcreteBlockContent, concreteBlockProducts,
  ConcretePipeContent, concretePipeProducts
} from '../product-content';

export default function Product() {
const [showSubmenu, setShowSubmenu] = useState(() => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('autoExpand') === 'true';
  }
  return false;
});
const [activeItem, setActiveItem] = useState('Concrete Roof');
const [activeSubItem, setActiveSubItem] = useState(null);
const [showVictoriaSubmenu, setShowVictoriaSubmenu] = useState(false);
  
// Konfigurasi produk dengan URL
const productConfig = {
  mainProducts: [
    { name: 'Concrete Roof', url: '/produk?category=Concrete Roof' },
    { name: 'Paving Block', url: '/produk?category=Paving Block' },
    { name: 'Concrete Block', url: '/produk?category=Concrete Block' },
    { name: 'Utility', url: '/produk?category=Utility' }
  ],
  subProducts: {
    'Concrete Roof': [
      { name: 'Neo', url: '/produk/detail?product=Neo&category=Concrete Roof' },
      { 
        name: 'Victoria', 
        url: '#', // URL utama Victoria (tidak langsung ke halaman)
        subItems: [
          { name: 'Onyx', url: '/produk/detail-onyx' },
          { name: 'Multiline', url: '/produk/detail-multiline' },
          { name: 'Slate', url: '/produk/detail-slate' },
          { name: 'Pine', url: '/produk/detail-pine' },
          { name: 'Classic', url: '/produk/detail-classic' }
        ]
      },
      { name: 'Dual Slate', url: '/produk/detail?product=Dual Slate&category=Concrete Roof' },
      { name: 'Floral', url: '/produk/detail?product=Floral&category=Concrete Roof' },
      { name: 'Excellent', url: '/produk/detail?product=Excellent&category=Concrete Roof' },
      { name: 'Majestic', url: '/produk/detail?product=Majestic&category=Concrete Roof' },
      { name: 'Oriental', url: '/produk/detail?product=Oriental&category=Concrete Roof' },
      { name: 'New Royal', url: '/produk/detail?product=New Royal&category=Concrete Roof' }
    ],
    'Paving Block': [
      { name: 'Square Set', url: '/produk/detail?product=Square Set&category=Paving Block' },
      { name: 'Classic Set', url: '/produk/detail?product=Classic Set&category=Paving Block' },
      { name: 'Altstadt', url: '/produk/detail?product=Altstadt&category=Paving Block' },
      { name: 'Others', url: '/produk/detail?product=Others&category=Paving Block' },
      { name: 'Guiding Pave', url: '/produk/detail?product=Guiding Pave&category=Paving Block' },
      { name: 'Grass Block', url: '/produk/detail?product=Grass Block&category=Paving Block' }
    ]
  }
};

// Helper functions untuk mendapatkan produk
const getMainProducts = () => productConfig.mainProducts.map(item => item.name);
const getSubProducts = (category) => productConfig.subProducts[category]?.map(item => item.name) || [];
const getVictoriaSubProducts = () => {
  const victoriaItem = productConfig.subProducts['Concrete Roof'].find(item => item.name === 'Victoria');
  return victoriaItem?.subItems?.map(item => item.name) || [];
};


// Gunakan fungsi helper untuk state awal
const mainProducts = getMainProducts();
const subProducts = getSubProducts('Concrete Roof');
const subProductsPaving = getSubProducts('Paving Block');
const victoriaSubProducts = getVictoriaSubProducts();

useEffect(() => {
  const storedSubItem = sessionStorage.getItem('activeSubItem');
  if (storedSubItem) {
    if (victoriaSubProducts.includes(storedSubItem)) {
      setShowVictoriaSubmenu(true);
      setActiveSubItem(storedSubItem);
    } else if (subProducts.includes(storedSubItem) || subProductsPaving.includes(storedSubItem)) {
      setActiveSubItem(storedSubItem);
    }
  }
}, []);

// Fungsi untuk mendapatkan URL
const getMainProductUrl = (name) => {
  return productConfig.mainProducts.find(item => item.name === name)?.url || '#';
};

const getSubProductUrl = (category, name) => {
  const subProducts = productConfig.subProducts[category];
  if (!subProducts) return '#';
  
  const product = subProducts.find(item => item.name === name);
  return product?.url || '#';
};

const getVictoriaSubProductUrl = (name) => {
  const victoriaItem = productConfig.subProducts['Concrete Roof'].find(item => item.name === 'Victoria');
  const subItem = victoriaItem?.subItems?.find(item => item.name === name);
  return subItem?.url || '#';
};

// Handler functions tetap sama
const handleMainItemClick = (item) => {
  setActiveItem(item);
  setActiveSubItem(null);
  setShowVictoriaSubmenu(false);
  
  if (item === 'Concrete Roof' || item === 'Paving Block') {
    setShowSubmenu(showSubmenu && activeItem === item ? false : true);
  } else {
    setShowSubmenu(false);
  }
};

const handleSubItemClick = (subItem) => {
  if (subItem === 'Victoria') {
    setShowVictoriaSubmenu(!showVictoriaSubmenu);
    setActiveSubItem(null);
  } else {
    setActiveSubItem(subItem);
    setShowVictoriaSubmenu(false);
    sessionStorage.setItem('activeSubItem', subItem);
  }
};

const handleVictoriaSubItemClick = (victoriaSubItem) => {
  setActiveSubItem(victoriaSubItem);
  sessionStorage.setItem('activeSubItem', victoriaSubItem);
};

  // Get current products based on active item
  const getCurrentProducts = () => {
    switch(activeItem) {
      case 'Concrete Roof': return concreteRoofProducts;
      case 'Paving Block': return pavingBlockProducts;
      case 'Concrete Block': return concreteBlockProducts;
      case 'Utility': return concretePipeProducts;
      default: return concreteRoofProducts;
    }
  };

  // Get current content based on active item
  const getCurrentContent = () => {
    switch(activeItem) {
      case 'Concrete Roof': return <ConcreteRoofContent />;
      case 'Paving Block': return <PavingBlockContent />;
      case 'Concrete Block': return <ConcreteBlockContent />;
      case 'Utility': return <ConcretePipeContent />;
      default: return <ConcreteRoofContent />;
    }
  };

  // Initialize product types
  const productTypes = getCurrentProducts();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const visibleSlides = 4;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category && mainProducts.includes(category)) {
      setActiveItem(category);
    }

    if (urlParams.get('expand') === 'true') {
      setShowSubmenu(true);
      window.history.replaceState({}, '', window.location.pathname);
    }
    
    const storedSubItem = sessionStorage.getItem('activeSubItem');
    if (storedSubItem) {
      if (victoriaSubProducts.includes(storedSubItem)) {
        setShowVictoriaSubmenu(true);
        setActiveSubItem(storedSubItem);
      } else if (subProducts.includes(storedSubItem) || subProductsPaving.includes(storedSubItem)) {
        setActiveSubItem(storedSubItem);
      }
    }
  }, []);


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
        left: slideIndex * (slideWidth + 16),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800">
      {/* Hero Section */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
        {/* <Image
          src="/images/Spanduk web Cisangkan.png"
          alt="Banner Perusahaan"
          width={1764}
          height={460}
          className="w-full h-full object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        /> */}
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
        {activeItem.toUpperCase()}
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ps-6 pe-1 py-8">
        {/* Sidebar Menu */}
         <aside className="w-full lg:w-1/6 lg:sticky lg:top-[6.5rem] lg:h-[calc(100vh-6.5rem)] lg:overflow-y-auto">
    <h1 className="text-lg font-medium mb-4 pb-2">Produk</h1>
    <ul className="space-y-2 text-sm">
      {mainProducts.map((item) => (
        <li key={item}>
          <Link
            href={getMainProductUrl(item)}
            onClick={() => handleMainItemClick(item)}
            className={`w-full text-left px-2 cursor-pointer ${
              activeItem === item
                ? 'text-[#2957A4] border-l-2 border-[#2957A4] font-semibold'
                : 'text-gray-700 hover:text-[#3a4557]'
            }`}
          >
            {item}
          </Link>

          {/* Submenu */}
          {showSubmenu && activeItem === item && (
            <ul className="ml-4 mt-2 space-y-3 text-gray-600 text-xs border-l border-gray-300 pl-2 mb-4">
              {(item === 'Concrete Roof' ? subProducts : subProductsPaving).map((sub) => {
                const isVictoria = sub === 'Victoria' && item === 'Concrete Roof';
                const subUrl = isVictoria ? '#' : getSubProductUrl(item, sub);
                
                return (
                  <li key={sub}>
                    {isVictoria ? (
                      <>
                        <div 
                          onClick={() => handleSubItemClick(sub)}
                          className={`block cursor-pointer ${
                            activeSubItem === sub || showVictoriaSubmenu
                              ? 'text-[#2957A4] font-medium'
                              : 'hover:text-[#2957A4]'
                          }`}
                        >
                          {sub} {showVictoriaSubmenu ? '' : ''}
                        </div>
                        {showVictoriaSubmenu && (
                          <ul className="ml-4 mt-1 space-y-2">
                            {victoriaSubProducts.map((victoriaSub) => (
                              <li key={victoriaSub}>
                                <Link 
                                  href={getVictoriaSubProductUrl(victoriaSub)}
                                  onClick={() => handleVictoriaSubItemClick(victoriaSub)}
                                  className={`block cursor-pointer ${
                                    activeSubItem === victoriaSub
                                      ? 'text-[#2957A4] font-medium'
                                      : 'hover:text-[#2957A4]'
                                  }`}
                                >
                                  {victoriaSub}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link 
                        href={subUrl}
                        onClick={() => handleSubItemClick(sub)}
                        className={`block cursor-pointer ${
                          activeSubItem === sub
                            ? 'text-[#2957A4] font-medium'
                            : 'hover:text-[#2957A4]'
                        }`}
                      >
                        {sub}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </aside>

        {/* Main Content */}
        <main className="w-full lg:w-5/6 space-y-8">
          {/* Dynamic Content */}
          {getCurrentContent()}

          {/* Product Slider */}
          <section className="mb-10 relative">
            <h2 className="text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">TYPE PRODUK :</h2>
            <div className="relative">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-[1.5rem] top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ml-[-26px]"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>

              {/* Kontainer Produk */}
              <div
                ref={sliderRef}
                className="grid grid-flow-col auto-cols-[calc(100%/2)] sm:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/4)] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4 px-20 gap-7 ml-[-29px]"
              >
                {productTypes.map((product) => (
                  <div key={product.name} className="snap-start min-w-0 ps-12.5 group">
                    <Link 
                      href={`/produk/detail?product=${encodeURIComponent(product.name)}`}
                      onClick={() => {
                        sessionStorage.setItem('autoExpand', 'true');
                        sessionStorage.setItem('activeSubItem', product.name.includes('Victoria') ? 
                          product.name.split(' ')[1] : product.name);
                      }}
                    >
                      <div className="w-50 bg-gray-300 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col items-center">
                        <div className="relative w-full h-45 flex items-center justify-center bg-white overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-scale-down transition-transform duration-500 group-hover:scale-105"
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