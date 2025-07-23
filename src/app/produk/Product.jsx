"use client";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { 
  ConcreteRoofContent, concreteRoofProducts,
  PavingBlockContent, pavingBlockProducts,
  ConcreteBlockContent, concreteBlockProducts,
  UtilityContent, utilityProducts
} from '../product-content';
import Link from "next/link";
import Image from 'next/image';
import BannerProduk from "../components/BannerProduk";
import ProductSidebar from "../components/ProductSidebar";
import { useSearchParams } from "next/navigation";

export default function Product() {
  const searchParams = useSearchParams();
  const [activeItem, setActiveItem] = useState("Concrete Roof");
  const productSliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleSlides = 4;

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && ["Concrete Roof", "Paving Block", "Concrete Block", "Utility"].includes(category)) {
      setActiveItem(category);
    }
  }, [searchParams]);

  const getCurrentProducts = () => {
    switch (activeItem) {
      case "Concrete Roof":
        return concreteRoofProducts;
      case "Paving Block":
        return pavingBlockProducts;
      case "Concrete Block":
        return concreteBlockProducts;
      case "Utility":
        return utilityProducts;
      default:
        return [];
    }
  };

  const getCurrentContent = () => {
    switch (activeItem) {
      case "Concrete Roof":
        return <ConcreteRoofContent />;
      case "Paving Block":
        return <PavingBlockContent />;
      case "Concrete Block":
        return <ConcreteBlockContent />;
      case "Utility":
        return <UtilityContent />;
      default:
        return <div className="text-center py-10">Pilih kategori produk</div>;
    }
  };

  const getDetailPath = (category, productName) => {
  if (category === 'Concrete Roof') {
    // Handle Neo Solar System khusus
    if (productName === 'Genteng Neo (Premium)') return 'detail';
    
    // Handle Victoria Series
    if (productName.startsWith('Victoria ')) return 'detail-victoria';
    
    // Handle Majestic variants
    if (productName.includes('Majestic')) return 'detail-cr';
    
    // Handle produk lainnya
    const mainProducts = ['Dual Slate', 'Floral', 'New Royal', 'Oriental'];
    if (mainProducts.includes(productName)) return 'detail-cr';
    
    return 'detail-cr';
  }
  
  // Then handle other categories...
  switch(category) {
    case 'Paving Block': 
      if (['Kanstein Wet Process', 'Kanstein Dry Process', 'Tali Air'].includes(productName)) {
        return 'detail-pb3';
      } else if (productName === 'Concrete Tile') {
        return 'detail-pb2';
      }
      return 'detail-pb';
    case 'Concrete Block': return 'detail-cb';
    case 'Utility':
      if (productName === 'Concrete Pipe') return 'detail-ut1';
      if (productName === 'Ciswell') return 'detail-ut2';
      return 'detail-ut';
    default: return 'detail';
  }
};

  const nextSlide = () => {
    const products = getCurrentProducts();
    if (currentSlide < products.length - visibleSlides) {
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
    if (productSliderRef.current) {
      const slideWidth = productSliderRef.current.children[0]?.clientWidth || 0;
      productSliderRef.current.scrollTo({
        left: slideIndex * (slideWidth + 16),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800">
      <BannerProduk kategori={activeItem} />

      <div className="bg-[#0B203F] text-white text-center py-2 font-light text-[1.5rem] tracking-wide">{activeItem.toUpperCase()}</div>

      <div className="flex flex-col lg:flex-row mx-auto ps-2 pe-2 2xl:ps-6 2xl:pe-1 py-8">
        <ProductSidebar onItemChange={setActiveItem} />

        <main className="w-full lg:w-5/6 space-y-8 ps-5 pe-5 2xl:ps-4 2xl:pe-12">
          {getCurrentContent()}

          <section className="mb-10 relative">
            <h2 className="text-xl 2xl:text-2xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">TYPE PRODUK :</h2>
            <div className="relative">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-[1.5rem] top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 2xl:w-14 2xl:h-14 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ml-[-26px]"
              >
                <FaChevronLeft className="w-5 h-5 2xl:w-8 2xl:h-8" />
              </button>
  <div
                ref={productSliderRef}
                className="grid grid-flow-col auto-cols-[calc(100%/2)] sm:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/4)] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4 px-20 gap-7 2xl:gap-5 ml-[-29px] mr-[-2rem]"
              >
                {getCurrentProducts().map((product) => (
                  <div key={product.name} className="snap-start min-w-0 ps-12.5 2xl:ps-22 group">
<Link 
  href={`/produk/${getDetailPath(activeItem, product.name)}?product=${
    encodeURIComponent(
      product.name.startsWith('Victoria ') 
        ? product.name.replace('Victoria ', '') 
        : product.name.includes('Majestic')
          ? 'Majestic' // Standardisasi nama untuk routing
          : product.name
    )
  }&category=${encodeURIComponent(activeItem)}`}
  className="block"
>
                      <div className="w-50 2xl:w-65 bg-gray-300 rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col items-center">
<div className="relative w-full h-45 2xl:h-55 flex items-center justify-center bg-white overflow-hidden">
  {product.image ? (
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-scale-down transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <span className="text-gray-500">No Image</span>
    </div>
  )}
</div>
                        <div className="w-full text-center text-sm 2xl:text-base font-medium bg-[#E5ECF6] py-2 rounded-b-xl">
                          {product.name}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide >= getCurrentProducts().length - visibleSlides}
                className="absolute right-[-0.2rem] top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 2xl:w-14 2xl:h-14 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronRight className="w-5 h-5 2xl:w-8 2xl:h-8" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
