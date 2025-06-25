'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
const inovasiList = [
  {
    id: 1,
    judul: "Genteng Neo Solar: Inovasi Atap Beton Flat Premium dari PT Cisangkan",
    url: "/perusahaan/inovasi/detail",
    deskripsi:
      "Dalam era arsitektur modern dan berkelanjutan, kebutuhan akan produk bangunan yang tidak hanya fungsional namun juga estetis semakin meningkat. PT Cisangkan, sebagai pionir produsen Genteng Beton di Indonesia, memperkenalkan Genteng Neo, sebuah inovasi genteng beton flat premium yang dirancang untuk masa depan.",
    gambar: "/images/gentengneo.jpg",
  },
  {
    id: 2,
    judul: "CIS Flashing: Solusi Flashing Modern, Anti Bocor, dan Tanpa Semen untuk Atap Rumah Anda",
    url: "/perusahaan/inovasi/detail-b",
    deskripsi:
      "Dalam dunia konstruksi atap, salah satu tantangan paling umum adalah memastikan tidak ada kebocoran air di area sambungan antara atap dan dinding vertikal. Di sinilah peran sistem flashing sangat penting. Namun, metode konvensional yang menggunakan semen sering kali tidak memberikan hasil yang rapi dan mudah mengalami keretakan seiring waktu.",
    gambar: "/images/cisflashing.jpg",
  },
  // {
  //   id: 3,
  //   judul: "Lorem ipsum",
  //   deskripsi:
  //     "Lorem ipsum sed in egestas eget amet tristique in integer convallis massa imperdiet enim enim id augue lorem pharetra lacus tincidunt quisque auctor adipiscing in cursus praesent scelerisque amet duis cras mauris orci feugiat diam in urna non vitae id semper ac ac cras senectus ut nam a cras nunc pharetra ac elit eget pharetra turpis a orci eu semper est arcu tempus ultrices lectus morbi id eu pretium urna sit ut donec sed tristique viverra sollicitudin et purus ut semper lobortis quisque posuere nulla aliquet in nunc mi tellus pellentesque amet tempus sit eu nibh ac amet dui lectus id nisi elit neque purus commodo faucibus et lacus neque amet faucibus purus aliquet elementum non lorem lobortis aliquam donec.",
  //   gambar: "/images/inovasi3.jpg",
  // },
];

export default function Inovasi() {
  // State untuk panel unduh
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const modalRef = useRef(null);

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
          alt="Banner Inovasi"
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
    <Link href="/perusahaan/inovasi" className="text-[#2D5DA6] font-bold">Inovasi</Link>
    <Link href="/perusahaan/karir" className="text-[#333] hover:text-[#2D5DA6]">Karir</Link>
  </nav>
</div>

      {/* Main Content */}
    <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-10">
      <div className="gap-6 items-start mb-5">
        <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase ">
          INOVASI
        </h2>
        {/* <p className="text-sm text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p> */}
      </div>

      {/* Daftar Inovasi */}
      <div className="flex flex-col gap-10 mb-10">
        {inovasiList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start border-b border-[#CCCCCC] pb-10 gap-6"
          >
            {/* Gambar */}
            <div className="w-full sm:w-[300px] h-[180px] bg-gray-300 flex justify-center items-center">
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="flex-1">
              <h3 className="text-lg font-normal mb-2">{item.judul}</h3>
              <p className="text-sm text-justify mb-4">{item.deskripsi}</p>
              <Link
                href={item.url}
                className="text-sm text-blue-700 font-medium hover:underline"
              >
                Baca lebih banyak &gt;&gt;
              </Link>
            </div>
          </div>
        ))}
      </div>

        {/* Pagination */}
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