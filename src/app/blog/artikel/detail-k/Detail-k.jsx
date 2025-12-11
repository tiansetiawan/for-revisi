'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Blog.css';

export default function DetailK() {
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
      judul: "SEMANGAT KOLABORASI",
      tanggal: "10 Desember 2025",
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
        <p className="text-blue-600 text-sm 2xl:text-base mb-6">
          {data.tanggal}
        </p>

        {/* GAMBAR UTAMA */}
        <div className="h-[240px] w-full xl:px-40 xl:h-[420px] 2xl:h-[600px] mx-auto flex items-center justify-center mb-8">
          {/* === IMAGE 1 — Gambar cover PDF === */}
          <img
            src="/images/tim-QHSE.jpg" // ganti sesuai gambar halaman depan PDF
            alt="Cover PDF"
            className="thumb-blog w-full h-full object-cover"
          />
        </div>

 {/* === KONTEN PDF === */}
<div className="text-sm text-[#333] leading-relaxed space-y-4 pb-10 border-b mb-5">

  <p>
    Dalam setiap langkah kami, semangat kolaborasi adalah kunci. Dengan berpartner bersama
    brand-brand unggul yang memiliki reputasi kuat, kami mampu menghadirkan solusi yang lebih lengkap,
    modern, dan terpercaya bagi setiap pelanggan. Kolaborasi ini membuka ruang inovasi yang lebih luas,
    sehingga setiap kebutuhan proyek dapat dijawab dengan lebih tepat dan efisien.
  </p>

  <h2 className="text-lg font-semibold mt-6">Solusi Terintegrasi yang Menjawab Kebutuhan Proyek</h2>
  <p>
    Melalui kerja sama yang solid, kami tidak hanya menawarkan produk—kami menghadirkan solusi
    terintegrasi yang komplit, mulai dari material berkualitas, standar teknis yang tinggi, hingga
    pendampingan tenaga profesional. Setiap elemen dalam kolaborasi ini saling memperkuat, memastikan
    bahwa pelanggan memperoleh nilai terbaik dari setiap investasi.
  </p>

  <h2 className="text-lg font-semibold mt-6">Kualitas Konsisten dengan Standar Produksi Presisi</h2>
  <p>
    Komitmen kami tetap sama: menjaga kualitas dan mutu produk pada level tertinggi. Dengan standar
    produksi yang presisi, spesifikasi teknis yang terjamin, serta kontrol kualitas yang ketat,
    kami memastikan setiap produk yang keluar membawa kepercayaan dan keunggulan.
  </p>

  <h2 className="text-lg font-semibold mt-6">Maju Bersama Partner Terbaik</h2>
  <p>
    Bersama para partner terbaik, kami terus bergerak maju. Karena kami percaya bahwa kualitas terbaik
    hanya dapat tercapai ketika dikerjakan secara bersama—dengan visi yang sama dan dedikasi yang tidak
    pernah berhenti.
  </p>

  {/* === IMAGE 2 — Foto Kolaborasi/Partner (Halaman PDF) === */}
  {/* KOLASE GAMBAR – SESUAI FOTO YANG ANDA UPLOAD */}
  <div className="w-full flex flex-col items-center gap-6 my-10">

    {/* Gambar 1 – Lebar penuh */}
    <img
      src="/images/project-pic.jpg" // ← Ganti sesuai gambar Anda
      alt="Kolaborasi tim dan partner dalam proyek"
      className="w-full max-w-4xl rounded-lg object-cover"
    />

    {/* Gambar 2 – Lebar penuh */}
    <img
      src="/images/project-pic2.jpg" // ← Ganti sesuai gambar Anda
      alt="Pertemuan dan koordinasi dengan brand partner"
      className="w-full max-w-4xl rounded-lg object-cover"
    />

    {/* Kolase 2 gambar di bawah */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">

      <img
        src="/images/project-pic3.jpg" // ← Ganti sesuai gambar Anda
        alt="Koordinasi tim dalam pengembangan solusi proyek"
        className="w-full h-48 sm:h-64 object-cover rounded-lg"
      />

      <img
        src="/images/project-pic4.jpg" // ← Ganti sesuai gambar Anda
        alt="Kolaborasi bersama tenaga profesional lapangan"
        className="w-full h-48 sm:h-64 object-cover rounded-lg"
      />

    </div>
  </div>

</div>
      </section>
    </div>
  );
}
