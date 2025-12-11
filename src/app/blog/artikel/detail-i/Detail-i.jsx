'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Blog.css';

export default function DetailI() {
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
      judul: "EFISIENSI PRODUKSI",
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
    Dalam industri konstruksi, efisiensi produksi adalah kunci untuk memenuhi kebutuhan volume besar
    tanpa mengorbankan kualitas. Dengan mesin HESS asal Jerman — yang dikenal memiliki kapasitas besar
    dan performa tinggi — proses produksi paving block menjadi sangat efisien dan andal.
  </p>

  <h2 className="text-lg font-semibold mt-6">Otomatisasi dan Kontrol Presisi</h2>
  <p>
    Mesin HESS memungkinkan operasi otomatis dengan kontrol presisi, mempercepat siklus produksi dan
    meminimalkan kesalahan atau variasi antar batch. Hasilnya: throughput tinggi, proses cepat, dan
    paving block yang seragam dari batch pertama hingga batch terakhir.
  </p>

  <h2 className="text-lg font-semibold mt-6">Kapasitas Produksi Besar Tanpa Mengorbankan Kualitas</h2>
  <p>
    Efisiensi ini tidak hanya soal kecepatan produksi — tetapi juga konsistensi mutu. Dengan mesin
    berkapasitas besar, kami dapat memenuhi permintaan proyek besar secara tepat waktu, tanpa harus
    menurunkan standar kualitas.
  </p>

  <h2 className="text-lg font-semibold mt-6">Solusi Ideal untuk Proyek Skala Besar</h2>
  <p>
    Dengan teknologi tinggi dan efisiensi operasional, kami hadir sebagai partner ideal untuk proyek
    konstruksi skala besar — memastikan pasokan paving block yang handal, konsisten, dan tepat waktu.
  </p>

  {/* === IMAGE 2 — Foto Mesin HESS (Halaman PDF) === */}
  {/* KOLASE GAMBAR – SESUAI FOTO YANG ANDA UPLOAD */}
  <div className="w-full flex flex-col items-center gap-6 my-10">

    {/* Gambar 1 – Lebar penuh */}
    <img
      src="/images/project-pic.jpg" // ← Ganti sesuai gambar Anda
      alt="Mesin HESS berkapasitas besar untuk produksi paving block"
      className="w-full max-w-4xl rounded-lg object-cover"
    />

    {/* Gambar 2 – Lebar penuh */}
    <img
      src="/images/project-pic2.jpg" // ← Ganti sesuai gambar Anda
      alt="Proses produksi otomatis dengan mesin HESS"
      className="w-full max-w-4xl rounded-lg object-cover"
    />

    {/* Kolase 2 gambar di bawah */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">

      <img
        src="/images/project-pic3.jpg" // ← Ganti sesuai gambar Anda
        alt="Operator memonitor efisiensi produksi"
        className="w-full h-48 sm:h-64 object-cover rounded-lg"
      />

      <img
        src="/images/project-pic4.jpg" // ← Ganti sesuai gambar Anda
        alt="Unit produksi paving beroperasi dalam kapasitas penuh"
        className="w-full h-48 sm:h-64 object-cover rounded-lg"
      />

    </div>
  </div>

</div>
      </section>
    </div>
  );
}
