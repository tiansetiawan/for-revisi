'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Inovasi.css';

const inovasiList = [
  {
    id: 1,
    judul: "Lorem ipsum",
    deskripsi:
      "Lorem ipsum sed in egestas eget amet tristique in integer convallis massa imperdiet enim enim id augue lorem pharetra lacus tincidunt quisque auctor adipiscing in cursus praesent scelerisque amet duis cras mauris orci feugiat diam in urna non vitae id semper ac ac cras senectus ut nam a cras nunc pharetra ac elit eget pharetra turpis a orci eu semper est arcu tempus ultrices lectus morbi id eu pretium urna sit ut donec sed tristique viverra sollicitudin et purus ut semper lobortis quisque posuere nulla aliquet in nunc mi tellus pellentesque amet tempus sit eu nibh ac amet dui lectus id nisi elit neque purus commodo faucibus et lacus neque amet faucibus purus aliquet elementum non lorem lobortis aliquam donec.",
    gambar: "/images/inovasi1.jpg",
  },
  {
    id: 2,
    judul: "Lorem ipsum",
    deskripsi:
      "Lorem ipsum sed in egestas eget amet tristique in integer convallis massa imperdiet enim enim id augue lorem pharetra lacus tincidunt quisque auctor adipiscing in cursus praesent scelerisque amet duis cras mauris orci feugiat diam in urna non vitae id semper ac ac cras senectus ut nam a cras nunc pharetra ac elit eget pharetra turpis a orci eu semper est arcu tempus ultrices lectus morbi id eu pretium urna sit ut donec sed tristique viverra sollicitudin et purus ut semper lobortis quisque posuere nulla aliquet in nunc mi tellus pellentesque amet tempus sit eu nibh ac amet dui lectus id nisi elit neque purus commodo faucibus et lacus neque amet faucibus purus aliquet elementum non lorem lobortis aliquam donec.",
    gambar: "/images/inovasi2.jpg",
  },
  {
    id: 3,
    judul: "Lorem ipsum",
    deskripsi:
      "Lorem ipsum sed in egestas eget amet tristique in integer convallis massa imperdiet enim enim id augue lorem pharetra lacus tincidunt quisque auctor adipiscing in cursus praesent scelerisque amet duis cras mauris orci feugiat diam in urna non vitae id semper ac ac cras senectus ut nam a cras nunc pharetra ac elit eget pharetra turpis a orci eu semper est arcu tempus ultrices lectus morbi id eu pretium urna sit ut donec sed tristique viverra sollicitudin et purus ut semper lobortis quisque posuere nulla aliquet in nunc mi tellus pellentesque amet tempus sit eu nibh ac amet dui lectus id nisi elit neque purus commodo faucibus et lacus neque amet faucibus purus aliquet elementum non lorem lobortis aliquam donec.",
    gambar: "/images/inovasi3.jpg",
  },
];



export default function Detailsb() {
  // State untuk panel unduh
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const modalRef = useRef(null);
  const [open, setOpen] = useState(false)

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

  useEffect(() => {
    // Ganti ini dengan API call atau ambil dari context/router
    const sampleData = {
      judul: "TEKNOLOGI BERKELANJUTAN",
      tanggal: "10 Desember 2025",
      gambar: "/images/cis.jpg",
      deskripsi: ""
    };

    setData(sampleData);
  }, []);

  if (!data) return <div>Loading...</div>;



  return (
    <div className="body-container mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section */}
      <div className="image-container relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
        <Image
          src="/images/inovasi.jpg"
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
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex 2xl:text-lg justify-center space-x-10 text-[1rem] font-light tracking-wide">
        <Link href="/perusahaan/tentang" className="text-[#333] hover:text-[#2D5DA6]">
          Tentang Kami
        </Link>
        <Link href="/perusahaan/sejarah" className="text-[#333] hover:text-[#2D5DA6]">
          Sejarah
        </Link>
        <Link href="/perusahaan/inovasi" className="text-[#2D5DA6] font-bold hover:underlin">
          Inovasi
        </Link>
        <Link href="/perusahaan/karir" className="text-[#333] hover:text-[#2D5DA6]">
          Karir
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden flex flex-col text-[1rem] font-light tracking-wide">
        {/* Judul utama menu */}
        <button
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center px-4 py-3 bg-[#F2F2F2] text-[#2D5DA6] font-bold hover:underline border-b"
        >
          <span>Inovasi</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transform transition-transform ${
              open ? "rotate-180 text-[#2D5DA6]" : "rotate-0 text-[#2D5DA6]"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown list */}
        {open && (
          <div className="flex flex-col bg-[#F2F2F2] px-6 py-2 space-y-2">
            <Link href="/perusahaan/tentang" className="text-[#333] hover:text-[#2D5DA6]">
              Tentang Kami
            </Link>
            <Link href="/perusahaan/sejarah" className="text-[#333] hover:text-[#2D5DA6]">
              Sejarah
            </Link>
            <Link href="/perusahaan/karir" className="text-[#333] hover:text-[#2D5DA6]">
              Karir
            </Link>
          </div>
        )}
      </div>
    </div>

    <section className="mx-auto mt-12 px-6 xl:px-26 sm:px-12 text-justify text-sm sm:text-base mb-10 2xl:px-30">
  {/* Judul */}
      <h1 className="justify-center text-black font-semibold text-lg sm:text-lg 2xl:text-2xl uppercase mb-2">
        {data.judul}
      </h1>


  {/* Tanggal */}
  <p className="text-blue-600 text-sm 2xl:text-base mb-6">
    {data?.tanggal || 'DD Month Years'}
  </p>

  {/* Gambar */}
  <div className="h-[240px] w-full xl:px-40 xl:h-[320px] 2xl:h-[450px] mx-auto flex items-center justify-center mb-8">
    {data?.gambar ? (
      <img src={data.gambar} alt={data.judul} className="thumb-inovasi w-full h-full object-cover" />
    ) : (
      <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 2a1 1 0 110 2 1 1 0 010-2zm-4 3a3 3 0 11-6 0 3 3 0 016 0zm-3 4a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
      </svg>
    )}
  </div>

{/* Konten Deskripsi */}
<div className="text-justify text-sm leading-relaxed text-[#333] space-y-4 pb-10 border-b 2xl:text-base">
  {data?.deskripsi ? (
    <p>{data.deskripsi}</p>
  ) : (
    <>
      <p>
        Teknologi berkelanjutan kini menjadi fondasi dalam pengembangan produk konstruksi modern.
        Salah satu inovasi ramah lingkungan yang kami hadirkan adalah <strong>paving porous</strong>
        atau paving pori — solusi yang memungkinkan air meresap langsung kembali ke tanah, membantu
        menjaga keseimbangan siklus air dan mengurangi risiko genangan.
      </p>

      <p>
        Paving porous dirancang dengan struktur berongga yang terkontrol sehingga mampu memberikan
        perpaduan antara kekuatan dan kemampuan serapan air. Dengan porositas tinggi, permukaan area
        tetap stabil namun tetap “bernafas” secara alami, mendukung konsep <em>sustainable landscape</em>
        di berbagai proyek kota hijau.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Standar Teknis Paving Porous</h2>
      <p>Secara teknis, paving porous memiliki standar umum seperti:</p>

      <ul className="list-disc ml-5 mb-4 space-y-1">
        <li>
          <strong>Porositas material ± 15–25%</strong>, memungkinkan infiltrasi air secara optimal.
        </li>
        <li>
          <strong>Kuat tekan rata-rata K200 – K250</strong>, ideal untuk area pedestrian, taman, dan
          area komersial dengan beban ringan hingga sedang.
        </li>
        <li>
          <strong>Ketebalan 6–10 cm</strong>, dapat disesuaikan dengan kebutuhan desain dan beban.
        </li>
        <li>
          <strong>Material campuran bergradasi kasar</strong>, menjaga rongga tetap terbuka dan tidak
          mudah tersumbat.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">Manfaat dan Dampak Lingkungan</h2>
      <p>
        Dengan teknologi produksi yang presisi, paving porous menjadi pilihan tepat untuk lingkungan
        yang lebih hijau, sistem drainase yang lebih baik, dan kota yang lebih berkelanjutan. Solusi
        ini membantu menciptakan area resapan air yang efisien tanpa mengorbankan estetika maupun
        kekuatan struktur.
      </p>

      <p>
        Inilah langkah kecil kami untuk masa depan yang lebih besar dan lebih hijau — menghadirkan
        infrastruktur berkualitas yang tetap selaras dengan alam.
      </p>
    </>
  )}
</div>

  {/* Tombol Kembali */}
  <div className="mt-10">
    <a href="/perusahaan/inovasi" className="text-sm 2xl:text-base text-blue-800 font-medium hover:underline">
      &lt;&lt; Kembali ke Halaman Inovasi
    </a>
  </div>
</section>
    </div>
  );
}