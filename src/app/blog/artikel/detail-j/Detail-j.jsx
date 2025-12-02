'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Blog.css';

export default function DetailJ() {
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
      judul: "DUKUNGAN TEKNIS YANG ANDAL",
      tanggal: "20 November 2025",
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
            Dalam setiap proyek yang menggunakan produk Cisangkan, keberhasilan tidak hanya
            bergantung pada kualitas material, tetapi juga pada dukungan teknis yang komprehensif
            dari awal hingga akhir. Sebagai produsen terkemuka paving block dan genteng beton di
            Indonesia, Cisangkan menghadirkan kombinasi antara produk berkualitas tinggi dan tim
            teknis profesional yang siap memastikan hasil terbaik di lapangan.
          </p>

          <h2 className="text-lg font-semibold mt-6">Panduan Pemilihan Material yang Tepat</h2>
          <p>
            Setiap proyek memiliki kebutuhan yang berbeda. Karena itu, tim teknis Cisangkan hadir
            memberikan guidance pemilihan material yang sesuai dari sisi kekuatan struktural,
            estetika, maupun fungsi. Mulai dari pemilihan paving block sesuai beban lalu lintas hingga
            genteng beton yang mendukung desain arsitektur, semua dipertimbangkan secara detail agar
            hasil akhir optimal.
          </p>

          <h2 className="text-lg font-semibold mt-6">Desain yang Efektif dan Efisien</h2>
          <p>
            Tim teknis Cisangkan juga memberikan dukungan desain berorientasi pada kemudahan
            pemasangan, efisiensi biaya, serta hasil estetis yang maksimal. Melalui kolaborasi dengan
            arsitek dan kontraktor, tim kami membantu merancang layout paving dan sistem atap yang
            fungsional.
          </p>

          <h2 className="text-lg font-semibold mt-6">Supervisi dan Kontrol Kualitas Pemasangan</h2>
          <p>
            Supervisi lapangan menjadi bagian penting dari layanan kami. Tim berpengalaman memastikan
            setiap tahapan pemasangan dilakukan sesuai standar teknis sehingga hasil pekerjaan lebih
            rapi, kuat, dan tahan lama.
          </p>

          <h2 className="text-lg font-semibold mt-6">Peran Tim QHSE dalam Setiap Proyek</h2>
          <p>
            Kualitas teknis tidak terpisahkan dari keselamatan dan lingkungan kerja. Tim QHSE
            memastikan seluruh proses memenuhi standar mutu, keselamatan kerja, dan pengelolaan
            lingkungan termasuk kebersihan area kerja dan pengelolaan limbah.
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Memenuhi standar mutu dan spesifikasi teknis.</li>
            <li>Menjamin kesehatan dan keselamatan kerja.</li>
            <li>Menjaga praktik ramah lingkungan.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6">Cisangkan — Lebih dari Sekadar Produk</h2>
          <p>
            Dengan dukungan teknis handal, produk unggulan, serta penerapan QHSE yang ketat,
            Cisangkan memastikan setiap proyek berjalan profesional, aman, dan berkelanjutan.
          </p>

                            {/* === IMAGE 2 — Foto Tim QHSE (Halaman 2 PDF) === */}
{/* KOLASE GAMBAR – SESUAI FOTO YANG ANDA UPLOAD */}
<div className="w-full flex flex-col items-center gap-6 my-10">

  {/* Gambar 1 – Lebar penuh */}
  <img
    src="/images/project-pic.jpg" // ← Ganti sesuai gambar Anda
    alt="Pemasangan tim teknis 1"
    className="w-full max-w-4xl rounded-lg object-cover"
  />

  {/* Gambar 2 – Lebar penuh */}
  <img
    src="/images/project-pic2.jpg" // ← Ganti sesuai gambar Anda
    alt="Pemasangan tim teknis 2"
    className="w-full max-w-4xl rounded-lg object-cover"
  />

  {/* Kolase 2 gambar di bawah */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">

  <img
    src="/images/project-pic3.jpg" // ← Ganti sesuai gambar Anda
    alt="Teknisi sedang mengecek dokumen"
    className="w-full h-48 sm:h-64 object-fit rounded-lg"
  />

  <img
    src="/images/project-pic4.jpg" // ← Ganti sesuai gambar Anda
    alt="Tim sedang memasang genteng"
    className="w-full h-48 sm:h-64 object-cover rounded-lg"
  />

</div>
</div>

        </div>
      </section>
    </div>
  );
}
