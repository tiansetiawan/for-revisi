'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaCalculator, FaTimes } from 'react-icons/fa';
import { productsPbContent, pavingBlockSubItems } from '../../../../content-bank/products-pb';
import Link from 'next/link';
import ProductSidebar from '../../components/ProductSidebar';
import { useRouter } from 'next/navigation';

export default function DetailsPb2() {
  const router = useRouter();
  const [currentProduct, setCurrentProduct] = useState(productsPbContent['Paving Block Variant']);
  const [activeThumbnail, setActiveThumbnail] = useState(productsPbContent['Paving Block Variant'].thumbnails[0]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const visibleSlides = 4;


  // Initialize product from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const subItem = urlParams.get('subItem');

    if (product && productsPbContent[product]) {
      if (product === 'Paving Block Variant' && subItem) {
        const selectedSubItem = pavingBlockSubItems.find(item => item.id === subItem);
        if (selectedSubItem) {
          setCurrentProduct({
            ...productsPbContent[product],
            name: selectedSubItem.name,
            thumbnails: selectedSubItem.thumbnails,
            specifications: [
              ...productsPbContent[product].specifications.filter(spec => 
                !['Lubang Efektif', 'Jarak Antar Reng', 'Sudut Atap'].includes(spec.label)
              ),
              ...selectedSubItem.specifications
            ],
            technicalSpecs: [
              ...productsPbContent[product].technicalSpecs.filter(tech => 
                !['Ketebalan Cat', 'Warna Cat'].includes(tech.label)
              ),
              ...selectedSubItem.technicalSpecs
            ],
            installationNote: selectedSubItem.installationNote
          });
          setActiveThumbnail(selectedSubItem.thumbnails[0]);
          return;
        }
      }
      setCurrentProduct(productsPbContent[product]);
      setActiveThumbnail(productsPbContent[product].thumbnails[0]);
    }
  }, []);

  const handleThumbnailClick = (thumbnail) => {
    setActiveThumbnail(thumbnail);
  };

  const handleProductTypeClick = (product) => {
    if (currentProduct.name === 'TRUEPAVE' || product.id) {
      const selectedSubItem = pavingBlockSubItems.find(item => item.id === product.id);
      if (selectedSubItem) {
        const subProduct = {
          ...currentProduct,
          name: selectedSubItem.name,
          thumbnails: selectedSubItem.thumbnails,
          specifications: [
            ...currentProduct.specifications.filter(spec => 
              !['Lubang Efektif', 'Jarak Antar Reng', 'Sudut Atap'].includes(spec.label)
            ),
            ...selectedSubItem.specifications
          ],
          technicalSpecs: [
            ...currentProduct.technicalSpecs.filter(tech => 
              !['Ketebalan Cat', 'Warna Cat'].includes(tech.label)
            ),
            ...selectedSubItem.technicalSpecs
          ],
          installationNote: selectedSubItem.installationNote
        };
        
        setCurrentProduct(subProduct);
        setActiveThumbnail(selectedSubItem.thumbnails[0]);
        
        // Update URL
        const url = new URL(window.location.href);
        url.searchParams.set('subItem', selectedSubItem.id);
        window.history.pushState({}, '', url);
      }
    } else {
      // Navigate to other product details
      router.push(`/produk/detail?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(currentProduct.category)}`);
    }
  };

  // Slider functions
  const nextSlide = () => {
    if (currentSlide < currentProduct.type.length - visibleSlides) {
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
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/images/Banner Neo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Header Section */}
      <div className="bg-[#0B203F] text-white text-center py-2 font-light text-[1.5rem] tracking-wide">
        {currentProduct.category.toUpperCase()}
      </div>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ps-2 pe-2 py-8">
        <ProductSidebar />
        
        <main className="w-full lg:w-5/6 flex flex-col">
          {/* Product Images and Details */}
          <div className="relative gap-8 mb-22">
            {/* Product Specifications */}
            <div className="w-auto lg:w-1/2 space-y-6 px-6">
              <section className='mb-5 mt-5'>
 <div className="w-fit bg-[#d5def4] rounded-br-lg shadow text-xl italic font-semibold text-[#0B203F] px-4 py-2 mb-4">
  {currentProduct.name}
</div>    
  
<div className="w-[63rem] max-h-[600px] overflow-y-auto rounded border border-gray-300">
  <table className="w-full border-collapse">
     <thead className="sticky top-0 bg-[#0B203F] z-20 text-white">
  <tr className="bg-[#0B203F] text-white">
    <th className="border border-gray-300 px-4 py-2 text-center w-60">Gambar</th>
    <th className="border border-gray-300 px-4 py-2 text-center">Produk</th>
    <th className="border border-gray-300 px-4 py-2 text-center w-40">Dimensi</th>
    <th className="border border-gray-300 px-4 py-2 text-center w-20">Berat</th>
    <th className="border border-gray-300 px-4 py-2 text-center w-30">Tebal</th>
    <th className="border border-gray-300 px-4 py-2 text-center">Pemakaian</th>
    <th className="border border-gray-300 px-4 py-2 text-center w-40">Aplikasi</th>
  </tr>
</thead>
      <tbody>
  {pavingBlockSubItems.map((product) => {
    const dimensions = product.specifications.find(spec => spec.label === 'Dimensi' || spec.label === 'Ukuran')?.value || '-';
    const weights = product.specifications.find(spec => spec.label === 'Berat')?.value.split('/').map(w => w.trim()) || ['-'];
    const thicknesses = product.specifications.find(spec => spec.label === 'Tebal')?.value.split('/').map(t => t.trim()) || ['-'];
    const usage = product.specifications.find(spec => spec.label === 'Pemakaian')?.value || '-';
    const application = product.specifications.find(spec => spec.label === 'Aplikasi');
    const bestSellerIcon = product.specifications.find(spec => spec.label === 'Best Seller' && spec.icon)?.icon;

    return (
      <React.Fragment key={product.id}>
        {weights.map((weight, i) => (
          <tr key={`${product.id}-${i}`} className="hover:bg-gray-50">
            {i === 0 ? (
              <>
                <td rowSpan={weights.length} className="border border-gray-300 px-4 py-2">
                  <div className="relative w-40 h-40 mx-auto">
                    <Image
                      src={product.thumbnails[0].thumbImage}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </td>
<td rowSpan={weights.length} className="relative border border-gray-300 px-4 py-2 font-medium text-center">
  <div className="flex flex-col justify-center items-center relative">
        {bestSellerIcon && (
      <img
        src={bestSellerIcon}
        alt="Best Seller"
        className="absolute -top-12 w-12 h-12" // Sesuaikan ukuran dan posisi
      />
    )}
    {product.name}
  </div>
</td>
                <td rowSpan={weights.length} className="border border-gray-300 px-4 py-2 text-center">
                  {dimensions}
                </td>
              </>
            ) : null}
            <td className="border border-gray-300 px-4 py-2 text-center">{weight}</td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {thicknesses[i] || thicknesses[0]}
            </td>
            {i === 0 ? (
              <td rowSpan={weights.length} className="border border-gray-300 px-4 py-2 text-center">
                {usage}
              </td>
            ) : null}
<td className="border border-gray-300 px-4 py-2 text-center">
  {application ? (
    <div className="flex gap-1 justify-center">
      {Array.isArray(application.icons?.[0]) 
        ? application.icons[i]?.map((icon, iconIndex) => (
            icon === 'pedestrian' ? (
              <img key={iconIndex} src="/icons/pedestrian.png" alt="Pedestrian" className="w-2 h-4" />
            ) : icon === 'car' ? (
              <img key={iconIndex} src="/icons/car.png" alt="Car" className="w-4 h-4" />
            ) : null
          ))
        : application.icons?.map((icon, iconIndex) => (
            icon === 'pedestrian' ? (
              <img key={iconIndex} src="/icons/pedestrian.png" alt="Pedestrian" className="w-2 h-4" />
            ) : icon === 'car' ? (
              <img key={iconIndex} src="/icons/car.png" alt="Car" className="w-4 h-4" />
            ) : null
          ))
      }
    </div>
  ) : '-'}
</td>
          </tr>
        ))}
      </React.Fragment>
    );
  })}
</tbody>
    </table>
  </div>

  {currentProduct.installationNote && (
    <p className="italic mt-4 pl-4">{currentProduct.installationNote}</p>
  )}
</section>

              {/* <section className='mb-8'>
                <h2 className="text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">SPESIFIKASI TEKNIS :</h2>
                <div className="space-y-3 pl-4">
                  {currentProduct.technicalSpecs.map((item, index) => (
                    <div key={index} className="flex">
                      <p className="w-48 font-medium">{item.label}</p>
                      <p className="mr-2">:</p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              </section> */}
<div className='pl-1'>
  <a
    href="/perusahaan/katalog"
    className="w-fit bg-[#0B203F] text-white py-2 px-4 rounded hover:bg-[#1c355f] flex items-center gap-2"
  >
    <FaCalculator className="text-lg" />
    Unduh Brosur
  </a>
</div>
            </div>
          </div>
          
          {/* Product Types Slider */}
          {/* <section className="mt-12">
            <h2 className="text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-2">PRODUK PAVING BLOCK LAINNYA :</h2>
            
            <div className="relative">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-[1.5rem] top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              
              <div
                ref={sliderRef}
                className="grid grid-flow-col auto-cols-[calc(100%/2)] sm:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/4)] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar py-4 px-20 gap-7.5"
              >
                {currentProduct.type.map((product) => (
                  <div 
                    key={product.name} 
                    className="snap-start min-w-0 ps-11 group cursor-pointer"
                    onClick={() => handleProductTypeClick(product)}
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
                  </div>
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                disabled={currentSlide >= currentProduct.type.length - visibleSlides}
                className="absolute right-[1.5rem] top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 bg-[#0B203F] text-white rounded-none flex items-center justify-center hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
}