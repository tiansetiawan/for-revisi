'use client';
import Image from 'next/image';
import Link from "next/link";
import '@/app/style/Inovasi.css';
import { useState, useRef, useEffect } from 'react';

const inovasiList = [
  {
    id: 1,
    judul: "Lorem ipsum",
    deskripsi: "Lorem ipsum sed in egestas eget amet tristique...",
    gambar: "/images/inovasi1.jpg",
  },
  {
    id: 2,
    judul: "Lorem ipsum",
    deskripsi: "Lorem ipsum sed in egestas eget amet tristique...",
    gambar: "/images/inovasi2.jpg",
  },
  {
    id: 3,
    judul: "Lorem ipsum",
    deskripsi: "Lorem ipsum sed in egestas eget amet tristique...",
    gambar: "/images/inovasi3.jpg",
  },
];

export default function Details() {
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

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

  useEffect(() => {
    const sampleData = {
      judul: "Genteng Neo Solar: Inovasi Atap Beton Flat Premium dari PT Cisangkan",
      tanggal: "16 Mei 2025",
      video: "1Tx9cRBShnmuQDLt7cWSkvrCcSKNT8iXN",
      thumbnail: "/images/inovasi-thumb.jpg",
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
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center px-4 py-3 bg-[#F2F2F2] text-[#2D5DA6] font-bold hover:underline border-b"
          >
            <span>Inovasi</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transform transition-transform ${open ? "rotate-180" : "rotate-0"} text-[#2D5DA6]`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
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

      {/* Konten Utama */}
      <section className="mx-auto mt-12 px-6 xl:px-26 sm:px-12 text-justify text-sm sm:text-base mb-10 2xl:px-30">
        <h1 className="justify-center text-black font-semibold text-lg sm:text-lg 2xl:text-2xl uppercase mb-2">
          {data.judul}
        </h1>

        <p className="text-blue-600 text-sm 2xl:text-base mb-6">
          {data?.tanggal || 'DD Month Years'}
        </p>

        {/* Video / Gambar */}
<div className="flex justify-center items-center w-full xl:px-40 mx-auto mb-8">
  <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-lg overflow-hidden shadow-md group">
    {/* Iframe Google Drive Video */}
    <iframe
      src={`https://drive.google.com/file/d/${data.video}/preview`}
      className="w-full h-full rounded-lg"
      allow="autoplay"
      allowFullScreen
    ></iframe>

    {/* Play Icon Overlay */}
    <div
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      onClick={(e) => e.currentTarget.style.display = 'none'}
    >
      {/* <div className="bg-black/40 rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-white opacity-90"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div> */}
    </div>
  </div>
</div>



        {/* Deskripsi */}
        <div className="text-justify text-sm leading-relaxed text-[#333] space-y-4 pb-10 border-b 2xl:text-base">
          {data?.deskripsi ? (
            <p>{data.deskripsi}</p>
          ) : (
            <>
<p>
  Dalam era arsitektur modern dan berkelanjutan, kebutuhan akan produk bangunan yang tidak hanya fungsional namun juga estetis semakin meningkat. PT Cisangkan, sebagai pionir produsen Genteng Beton di Indonesia, memperkenalkan Genteng Neo, sebuah inovasi genteng beton flat premium yang dirancang untuk masa depan.
</p>

<p>
  Salah satu keunggulan utama Genteng Neo adalah kemampuannya untuk dipasang secara bersamaan dengan solar tile atau genteng surya. Tidak seperti panel surya konvensional yang kerap terlihat menonjol dan merusak tampilan atap, sistem ini menghadirkan visual yang lebih menyatu dan seamless. Konsep ini sangat disukai oleh para arsitek dan perencana, karena memungkinkan pencapaian target efisiensi energi tanpa mengorbankan keindahan bangunan. Dengan begitu, penggunaan solar power bukan lagi sekadar tambahan teknis, melainkan bagian integral dari desain arsitektural itu sendiri.
</p>

<p>
  Dari segi teknis, Genteng Neo Solar dirancang dengan dimensi yang optimal yaitu:
</p>

<ul>
  <li>Nominal Area: 44 x 37,4 cm</li>
  <li>Effective Area: 36,6 x 34,4 cm</li>
  <li>Berat per Lembar: 5,5 – 5,7 kg</li>
  <li>Kebutuhan Genteng per m²: ±7,95 pcs</li>
  <li>Jarak Reng: 36 – 36,6 cm</li>
  <li>Kemiringan Minimum Atap: 25°</li>
</ul>

<p>
  Dengan ukuran efektif dan presisi tinggi, genteng ini dirancang untuk memaksimalkan perlindungan cuaca dan mengoptimalkan efisiensi penyerapan energi matahari saat dipadukan dengan solar tile.
</p>

<p>
  Genteng Neo hadir dengan tampilan flat yang minimalis dan elegan—sangat sesuai untuk gaya arsitektur modern, tropis, maupun industrial. Bagi para arsitek dan perencana, pilihan ini menjadi solusi ideal karena tidak mengorbankan keindahan desain hanya demi fungsi panel surya.
</p>

<p>
  PT Cisangkan juga menyediakan aksesori genteng yang lengkap, mulai dari nok atas, nok samping hingga nok siku yang dapat dipakai untuk berbagai jenis atap dari perisai hingga limas. Aksesori genteng Neo juga dirancang agar serasi dengan sistem Neo Solar. Ini memastikan integrasi yang menyeluruh dan kualitas instalasi terbaik di berbagai tipe bangunan.
</p>

<p>
  Genteng Neo Solar dari PT Cisangkan bukan hanya sekadar atap—ini adalah investasi jangka panjang untuk hunian atau bangunan masa depan. Dengan kombinasi antara desain mewah, kekuatan struktural, dan kemampuan integrasi solar system, genteng ini menawarkan solusi sempurna bagi mereka yang ingin membangun rumah berkelanjutan tanpa mengorbankan estetika.
</p>

<p>
  Untuk arsitek, developer, dan pemilik rumah yang peduli pada desain sekaligus ingin berkontribusi terhadap lingkungan, Genteng Neo adalah pilihan yang akan memuaskan dari segi visual, fungsionalitas, dan keberlanjutan energi.
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