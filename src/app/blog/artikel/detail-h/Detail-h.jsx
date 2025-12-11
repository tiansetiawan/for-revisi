'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Blog.css';

export default function DetailH() {
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
      judul: "PRESISI TEKNOLOGI",
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
    Di balik setiap paving berkualitas, terdapat teknologi yang bekerja dengan akurat dan efisien.
    Mesin HESS dari Jerman menghadirkan inovasi dalam proses produksi paving block, mulai dari
    kontrol otomatis hingga sistem press tinggi yang memastikan hasil yang seragam dan berkualitas
    premium.
  </p>

  <h2 className="text-lg font-semibold mt-6">Teknologi Produksi yang Stabil dan Presisi</h2>
  <p>
    Dengan performa mesin yang stabil, efisiensi produksi meningkat, dan kualitas produk terjaga dari
    batch pertama hingga terakhir. Tidak ada kompromi dalam presisi — hanya paving terbaik untuk
    kebutuhan konstruksi modern.
  </p>

  <h2 className="text-lg font-semibold mt-6">Standar Mutu Tinggi K450 – K500</h2>
  <p>
    Cisangkan menetapkan standar mutu tertinggi pada produk kami, yaitu K450 hingga K500. Kelas
    kekuatan ini hanya dapat dicapai melalui proses produksi berteknologi tinggi, di mana mesin
    dengan presisi maksimal seperti HESS mampu menghasilkan kepadatan, kekuatan tekan, dan konsistensi
    dimensi yang sempurna.
  </p>

  <h2 className="text-lg font-semibold mt-6">Teknologi yang Menjadi Fondasi Kualitas</h2>
  <p>
    Teknologi ini menjadi tulang punggung kami dalam menciptakan produk yang kuat, estetis, dan
    terpercaya — sesuai tuntutan konstruksi masa kini.
  </p>

  {/* === IMAGE 2 — Foto Mesin HESS (Halaman PDF) === */}
  {/* KOLASE GAMBAR – SESUAI FOTO YANG ANDA UPLOAD */}
  <div className="w-full flex flex-col items-center gap-6 my-10">

    {/* Gambar 1 – Lebar penuh */}
    <img
      src="/images/project-pic.jpg" // ← Ganti sesuai gambar Anda
      alt="Proses produksi paving dengan mesin HESS"
      className="w-full max-w-4xl rounded-lg object-cover"
    />

    {/* Gambar 2 – Lebar penuh */}
    <img
      src="/images/project-pic2.jpg" // ← Ganti sesuai gambar Anda
      alt="Mesin HESS sedang beroperasi"
      className="w-full max-w-4xl rounded-lg object-cover"
    />

    {/* Kolase 2 gambar di bawah */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">

      <img
        src="/images/project-pic3.jpg" // ← Ganti sesuai gambar Anda
        alt="Kontrol kualitas proses produksi"
        className="w-full h-48 sm:h-64 object-cover rounded-lg"
      />

      <img
        src="/images/project-pic4.jpg" // ← Ganti sesuai gambar Anda
        alt="Operator memantau mesin produksi paving"
        className="w-full h-48 sm:h-64 object-cover rounded-lg"
      />

    </div>
  </div>

</div>
      </section>
    </div>
  );
}
