'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sejarah() {
  // State untuk panel unduh
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const modalRef = useRef(null);

  // Data katalog
  const katalogList = [
    { id: 1, nama: "Katalog 1", file: "/images/icon photo.png" },
    { id: 2, nama: "Katalog 2", file: "/images/icon photo.png" },
    { id: 3, nama: "Katalog 3", file: "/images/icon photo.png" },
    { id: 4, nama: "Katalog 4", file: "/images/icon photo.png" },
    { id: 5, nama: "Katalog 5", file: "/images/icon photo.png" },
    { id: 6, nama: "Katalog 6", file: "/images/icon photo.png" },
  ];


   // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowDownloadPanel(false);
      }
    };

    if (showDownloadPanel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDownloadPanel]);

  const handleDownload = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Harap isi nama dan email terlebih dahulu');
      return;
    }
    console.log(`Download katalog oleh ${name} (${email})`);
    setName('');
    setEmail('');
    setShowDownloadPanel(false);
  };

  // Variants untuk animasi
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };


  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-25">
      {/* Hero Section */}
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
          <span className="text-[#2D5DA6] font-bold">Katalog</span>
          <span className="text-[#333]">Video</span>
          <span className="text-[#333]">Inovasi</span>
          <span className="text-[#333]">Karir</span>
        </nav>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-10">
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