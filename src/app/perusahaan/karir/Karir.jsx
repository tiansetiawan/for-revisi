'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

export default function Karir() {
  // State untuk panel unduh
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const modalRef = useRef(null);

  // Data katalog
  const karirList = [
    {
    id: 1,
    nama: "Lead Regional Representative",
    penempatan: "Medan",
    bidang: "Sales & Marketing",
    kebutuhan: "1 Orang",
  },
  {
    id: 2,
    nama: "Marketing Specifier",
    penempatan: "Bandung",
    bidang: "Sales & Marketing",
    kebutuhan: "1 Orang",
  },
  {
    id: 3,
    nama: "HR Staff",
    penempatan: "Bandung",
    bidang: "Human Resources",
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
          src="/images/Banner Perusahaan.jpg"
          alt="Banner Karir"
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
      </div>

      {/* Header Section */}
<div className="bg-[#F2F2F2] py-4">
  <nav className="flex justify-center space-x-10 text-[1rem] font-light tracking-wide">
    <Link href="/perusahaan/tentang" className="text-[#333] hover:text-[#2D5DA6]">Tentang Kami</Link>
    <Link href="/perusahaan/sejarah" className="text-[#333] hover:text-[#2D5DA6]">Sejarah</Link>
    {/* <Link href="/perusahaan/sertifikasi" className="text-[#333] hover:text-[#2D5DA6]">Sertifikasi</Link> */}
    {/* <Link href="/perusahaan/katalog" className="text-[#333] hover:text-[#2D5DA6]">Katalog</Link> */}
    {/* <Link href="/perusahaan/video" className="text-[#333] hover:text-[#2D5DA6]">Video</Link> */}
    <Link href="/perusahaan/inovasi" className="text-[#333] hover:text-[#2D5DA6]">Inovasi</Link>
    <Link href="/perusahaan/karir" className="text-[#2D5DA6] font-bold">Karir</Link>
  </nav>
</div>

      {/* Main Content */}
<section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-10">
  {/* Heading */}
  <div className="gap-6 items-start mb-5">
    <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
      KARIR
    </h2>
    {/* <p className="text-sm text-justify">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p> */}
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
        {/* <div className="flex justify-center items-center gap-2 text-sm border-y border-[#E0E0E0] py-2">
            <button
    className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs disabled:opacity-50"
  >
    Sebelumnya
  </button>
          <button className="px-3 py-1 border border-gray-300 rounded-none bg-[#0B203F] text-white text-xs">
            1
          </button>
          <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs">
            2
          </button>
                      <button
    className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs disabled:opacity-50"
  >
    Berikutnya
  </button>
        </div> */}
</section>
    </div>
  );
}