'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Inovasi() {
  // State untuk panel unduh
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const modalRef = useRef(null);

  // Data katalog
  const karirList = [
    {
    id: 1,
    nama: "Staff Administrasi",
    penempatan: "Bandung",
    bidang: "Administrasi",
    kebutuhan: "2 Orang",
  },
  {
    id: 2,
    nama: "Marketing Executive",
    penempatan: "Jakarta",
    bidang: "Pemasaran",
    kebutuhan: "3 Orang",
  },
  {
    id: 3,
    nama: "Desain Grafis",
    penempatan: "Yogyakarta",
    bidang: "Kreatif",
    kebutuhan: "1 Orang",
  },
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
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
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
          <span className="text-[#333]">Katalog</span>
          <span className="text-[#333]">Video</span>
          <span className="text-[#333]">Inovasi</span>
          <span className="text-[#2D5DA6] font-bold">Karir</span>
        </nav>
      </div>

      {/* Main Content */}
<section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-10">
  {/* Heading */}
  <div className="gap-6 items-start mb-20">
    <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
      KARIR
    </h2>
    <p className="text-sm text-justify">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
  </div>

  {/* Daftar Karir */}
  <div className="flex flex-col gap-6 mb-20">
    {karirList.map((item) => (
      <div key={item.id} className="border border-gray-200 shadow-sm p-6 flex justify-between items-start">
        <div>
          <h3 className="font-semibold uppercase mb-4">{item.nama}</h3>
          <div className="space-y-1 text-sm">
            <div className="flex">
              <span className="w-40">Penempatan</span>
              <span>: {item.penempatan}</span>
            </div>
            <div className="flex">
              <span className="w-40">Bidang Pekerjaan</span>
              <span>: {item.bidang}</span>
            </div>
            <div className="flex">
              <span className="w-40">Kebutuhan</span>
              <span>: {item.kebutuhan}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShowDownloadPanel(true)}
            className="bg-[#0B203F] hover:bg-[#14325f] text-white px-4 py-2 text-sm rounded"
          >
            Selengkapnya
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex justify-center items-center gap-2 text-sm border-y border-[#E0E0E0] py-2">
    <button className="px-3 py-1 border border-gray-300 rounded-none bg-[#0B203F] text-white text-xs">
      1
    </button>
    <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs">
      2
    </button>
  </div>
</section>
    </div>
  );
}