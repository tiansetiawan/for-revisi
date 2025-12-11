'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Blog.css';

export default function DetailG() {
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [data, setData] = useState(null);
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

  // === SET DATA KONTEN SESUAI PDF ===
  useEffect(() => {
    const pdfArticle = {
      judul: "MUTU PRODUK CISANGKAN",
      tanggal: "02 Desember 2025",
      gambar: "/images/tim-QHSE.jpg", // ganti sesuai gambar utama
      deskripsi: "", // konten PDF ditulis manual di bawah
    };

    setData(pdfArticle);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="body-container mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">

      {/* === HERO IMAGE === */}
      <div className="image-container relative w-full aspect-[1764/460] overflow-hidden">
        <Image
          src="/images/artikel-4.jpg" // ganti sesuai banner PDF bila ada
          alt="Banner Artikel"
          width={1764}
          height={460}
          className="w-full h-full object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* === HEADER NAV === */}
      <div className="bg-[#F2F2F2] py-4">
        <nav className="2xl:text-lg flex justify-center space-x-10 text-[1rem] font-light tracking-wide">
          <Link href="/blog/artikel" className="text-[#2D5DA6] font-bold">Artikel</Link>
          <Link href="/blog/testimoni" className="text-[#333] hover:text-[#2D5DA6]">Testimoni</Link>
        </nav>
      </div>

{/* === KONTEN ARTIKEL === */}
      <section className="mx-auto mt-12 px-6 xl:px-26 text-justify text-sm sm:text-base mb-10">

  {/* JUDUL */}
  <h1 className="text-black font-semibold text-lg sm:text-xl 2xl:text-2xl uppercase mb-2">
          {data.judul}
  </h1>

  {/* TANGGAL */}
  <p className="text-blue-700 text-sm 2xl:text-base mb-8">
    {data.tanggal}
  </p>

  {/* === ISI ARTIKEL SESUAI PDF === */}
  <article className="space-y-6 text-[#333]">

    <p>
      Mutu produk merupakan pondasi utama yang membedakan Cisangkan sebagai produsen genteng beton dan paving block. Melalui sistem pengendalian yang terstandarisasi, setiap produk dihasilkan dengan proses manufaktur yang terukur, diawasi, dan terus ditingkatkan untuk memastikan kualitas terbaik bagi pelanggan.
    </p>

    {/* SUB-BAB PDF */}
    <h2 className="font-semibold text-lg mt-10">
      Produk Bersertifikat SNI
    </h2>
    <p>
      Seluruh produk Cisangkan telah memenuhi persyaratan standar SNI,
      menjamin ketahanan, ketepatan mutu dan kinerja jangka panjang.
    </p>

{/* === SERTIFIKAT 2 KOLOM === */}
<div className="w-full flex justify-center my-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
    
    <img
      src="/images/sertifikat-mutu-1.jpg"
      alt="Sertifikat Kesesuaian"
      className="w-full object-cover shadow-md"
    />

    <img
      src="/images/sertifikat-mutu-2.jpg"
      alt="Sertifikat SNI"
      className="w-full object-cover shadow-md"
    />

  </div>
</div>

    <h2 className="font-semibold text-lg mt-10">
      Bersertifikat ISO Integrasi
    </h2>
    <p >
      Sistem manajemen mutu kami telah tersertifikasi ISO terintegrasi,
      memastikan kontrol kualitas dari bahan baku hingga distribusi produk.
    </p>

{/* === SERTIFIKAT 3 KOLOM === */}
<div className="w-full flex justify-center my-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
    
    <img
      src="/images/IAPMO-1.jpg"
      alt="IAPMO-1"
      className="w-full object-cover shadow-md"
    />

    <img
      src="/images/IAPMO-2.jpg"
      alt="IAPMO-2"
      className="w-full object-cover shadow-md"
    />

    <img
      src="/images/IAPMO-3.jpg"
      alt="IAPMO-3"
      className="w-full object-cover shadow-md"
    />

  </div>
</div>

    <h2 className="font-semibold text-lg mt-10">
      Bersertifikasi Green Label
    </h2>
    <p>
      Produk Cisangkan mendapat Green Label sebagai bukti komitmen terhadap
      keberlanjutan lingkungan dan efisiensi penggunaan sumber daya.
    </p>

      <div className="w-full h-[220px] sm:h-[340px] xl:h-[520px] 2xl:h-[520px] mx-auto mb-10">
    <img
      src="/images/sertifikat-GL.jpg"
      alt="Sertifikat Green Label"
      className="w-full h-full object-fil shadow-md"
    />
  </div>

    <h2 className="font-semibold text-lg mt-10">
      Testing Material
    </h2>
    <p >
      Setiap material diuji secara laboratorium untuk memastikan kualitas fisik,
      daya tahan dan konsistensinya sebelum diproses menjadi produk jadi.
    </p>

<div className="w-full flex justify-center my-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">

    {/* Square Container */}
    <div className="aspect-square bg-white flex items-center justify-center rounded-xl shadow-md p-4">
      <img
        src="/images/test-material1.jpg"
        alt="test-material1"
        className="max-w-full max-h-full object-contain"
      />
    </div>

    <div className="aspect-square bg-white flex items-center justify-center rounded-xl shadow-md p-4">
      <img
        src="/images/test-material2.jpg"
        alt="test-material2"
        className="max-w-full max-h-full object-contain"
      />
    </div>

    <div className="aspect-square bg-white flex items-center justify-center rounded-xl shadow-md p-4">
      <img
        src="/images/test-material3.jpg"
        alt="test-material3"
        className="max-w-full max-h-full object-contain"
      />
    </div>

  </div>
</div>

    <h2 className="font-semibold text-lg mt-10">
      Inspeksi Mix Design
    </h2>
    <p >
      Proses pencampuran material dikontrol secara presisi melalui inspeksi mix design
      sehingga komposisi beton selalu sesuai standar teknis yang ditetapkan.
    </p>


      <div className="w-full h-[220px] sm:h-[340px] xl:h-[520px] 2xl:h-[520px] mx-auto mb-10">
    <img
      src="/images/inspect-mix-design.jpg"
      alt="inspeksi mix design"
      className="w-full h-full object-fil shadow-md"
    />
  </div>

    <h2 className="font-semibold text-lg mt-10">
      Pemeriksaan Performance dan Ketebalan
    </h2>
    <p>
      Setiap produk diperiksa parameter kekuatan, akurasi ukuran dan ketebalan
      untuk menjamin performa optimal saat dipasang di lapangan.
    </p>

<div className="w-full flex justify-center my-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
    
    <img
      src="/images/performance-ketebalan1.jpg"
      alt="test performance & ketebalan"
      className="w-full object-cover shadow-md"
    />

    <img
      src="/images/performance-ketebalan2.jpg"
      alt="test performance & ketebalan"
      className="w-full object-cover shadow-md"
    />

  </div>
</div>

    <h2 className="font-semibold text-lg mt-10">
      Pengukuran pH Water Curing
    </h2>
    <p>
      Tahapan curing diuji melalui pengukuran pH air rendaman sebagai bagian
      dari kontrol kualitas yang memastikan stabilitas dan kekuatan beton.
    </p>

<div className="w-full flex justify-center my-10">
  <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 max-w-[20rem] w-full">
    
    <img
      src="/images/test-water-curing.jpg"
      alt="test water curing"
      className="w-full object-cover shadow-md"
    />

  </div>
</div>
  </article>
</section>
    </div>
  );
}
