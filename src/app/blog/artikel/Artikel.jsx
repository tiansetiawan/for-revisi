'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
const inovasiList = [
  {
    id: 1,
    judul: "CISANGKAN KBP CITY RUN 2025",
    tanggal: "16 Juni 2025",
    url: "/blog/artikel/detail-a", // ← Tambahkan ini
    deskripsi: "Merayakan 50 Tahun PT Cisangkan dan 25 Tahun Kota Baru Parahyangan. Sebagai bagian dari perjalanan panjang kami, PT Cisangkan dengan bangga mengumumkan kolaborasi istimewa dengan Kota Baru Parahyangan dalam penyelenggaraan Cisangkan KBP City Run 2025. Acara ini bukan hanya sekadar lomba lari, tetapi juga merupakan perayaan dua tonggak sejarah penting",
    gambar: "/images/KBP CityRun.jpg",
  },
  {
    id: 2,
    judul: "PT. Cisangkan: 50 Tahun Berkarya untuk Indonesia",
        tanggal: "16 Juni 2025",
    url: "/blog/artikel/detail-b",
    deskripsi: "Bandung, 2025 – Tahun ini menjadi momen istimewa bagi PT. Cisangkan, yang merayakan 50 tahun perjalanannya membangun Indonesia melalui inovasi dan kualitas di industri beton pracetak. Dengan mengusung semangat “Bangga Berkarya, Bangga Indonesia”, perusahaan ini menegaskan kembali komitmennya sebagai bagian dari kekuatan pembangunan nasional.",
    gambar: "/images/ultah50.jpg",
  },
  // {
  //   id: 3,
  //   judul: "CIS Flashing: Solusi Flashing Modern, Anti Bocor, dan Tanpa Semen untuk Atap Rumah Anda",
  //       tanggal: "16 Juni 2025",
  // url: "/blog/artikel/detail-c",
  //   deskripsi: "Dalam dunia konstruksi atap, salah satu tantangan paling umum adalah memastikan tidak ada kebocoran air di area sambungan antara atap dan dinding vertikal. Di sinilah peran sistem flashing sangat penting. Namun, metode konvensional yang menggunakan semen sering kali tidak memberikan hasil yang rapi dan mudah mengalami keretakan seiring waktu.",
  //   gambar: "/images/cisflashing.jpg",
  // },
];

export default function Artikel() {
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
          src="/images/artikel-3.jpg"
          alt="Banner Artikel"
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
    <Link href="/blog/artikel" className="text-[#2D5DA6] font-bold">Artikel</Link>
    {/* <Link href="/blog/kegiatan" className="text-[#333] hover:text-[#2D5DA6]">Kegiatan</Link>
    <Link href="/blog/galeri" className="text-[#333] hover:text-[#2D5DA6]">Galeri</Link> */}
    <Link href="/blog/testimoni" className="text-[#333] hover:text-[#2D5DA6]">Testimoni</Link>
  </nav>
</div>

      {/* Main Content */}
    <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-10">
      <div className="gap-6 items-start mb-10">
        <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
          ARTIKEL
        </h2>
        {/* <p className="text-sm text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p> */}
      </div>

{/* Daftar Artikel */}
<div className="flex flex-col gap-10 mb-10">
  {inovasiList.map((item) => (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row items-start border-b border-[#CCCCCC] pb-10 gap-6"
    >
      {/* Gambar */}
      <div className="w-full sm:w-[200px] h-[200px] bg-gray-200 flex justify-center items-center">
        {item.gambar ? (
          <img
            src={item.gambar}
            alt={item.judul}
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a1 1 0 011-1zm3 5l2.586 2.586a1 1 0 001.414 0L13 10l5 5" />
          </svg>
        )}
      </div>

      {/* Konten */}
      <div className="flex-1">
        <h3 className="text-xl font-normal text-[#1E1E1E] mb-2">
          {item.judul || "Lorem ipsum auctor lacinia varius magna arcu a id varius."}
        </h3>
        <p className="text-sm text-[#2957A4] mb-2">
          {item.tanggal || "16 Juni 2025"}
        </p>
        <p className="text-sm text-justify text-[#333333] mb-3">
          {item.deskripsi || "Lorem ipsum ornare viverra lorem mattis elementum sit viverra vitae est aliquet nisi tristique egestas lorem morbi varius neque magna adipiscing lobortis vivamus velit sed lacus purus sapien amet turpis viverra ipsum aliquam dignissim morbi lacus turpis lacus ornare maecenas in leo blandit libero mauris at posuere mattis porttitor in volutpat tincidunt dignissim in consectetur ac vitae turpis massa suspendisse gravida ac vitae tortor sit eget tristique fermentum consequat cursus diam morbi habitasse id ut molestie sed laoreet placerat scelerisque."}
        </p>
<Link
  href={item.url}
  className="text-sm text-[#2957A4] font-semibold hover:underline"
>
  Lihat Detail &gt;&gt;
</Link>
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