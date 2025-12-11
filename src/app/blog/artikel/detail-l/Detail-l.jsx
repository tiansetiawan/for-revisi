'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import '@/app/style/Blog.css';

export default function DetailL() {
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
      judul: "KESELAMATAN DAN KETEPATAN KERJA",
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
      Di PT Cisangkan, kami percaya bahwa setiap genteng dan paving block memiliki cerita-cerita
      tentang kerja keras, ketelitian, dan komitmen terhadap keselamatan. Kami tidak hanya membuat
      produk bangunan, tetapi membangun kepercayaan melalui proses kerja yang aman, terukur, dan penuh tanggung jawab.
    </p>

    <p>
      Karena bagi kami, keselamatan dan ketepatan bukan hanya standar kerja, melainkan nilai hidup yang kami pegang setiap hari. Setiap proses di pabrik kami dimulai dengan satu tujuan utama: semua orang pulang dengan selamat setiap hari.
    </p>

    <p>
      Dari operator mesin, teknisi, hingga staf pengiriman, setiap langkah dijalankan melalui prosedur yang terencana dan terkontrol.
    </p>

    {/* SUB HEADING */}
    <h2 className="font-semibold text-lg mt-10">
      Sistem Manajemen Keselamatan Terintegrasi
    </h2>

    <p>
      Kami menerapkan sistem SMMK3L terintegrasi sesuai standar ISO 9001, ISO 45001, dan ISO 14001,
      yang mencakup:
    </p>

    <ul className="list-disc ml-6 space-y-2">
      <li>Evaluasi risiko dan inspeksi rutin di setiap area kerja.</li>
        {/* COVER IMAGE */}
  <div className="w-full h-[240px] sm:h-[360px] xl:h-[480px] 2xl:h-[560px] mx-auto mb-10">
    <img
      src="/images/QHSE-1.png"
      alt="Materi Keselamatan Cisangkan"
      className="w-full h-full object-cover shadow-md"
    />
  </div>
      <li>Fasilitas kerja yang aman, bersih, dan ergonomis.</li>
    <div className="w-full h-[240px] sm:h-[360px] xl:h-[480px] 2xl:h-[560px] mx-auto mb-10">
    <img
      src="/images/QHSE-2.png"
      alt="Materi Keselamatan Cisangkan"
      className="w-full h-full object-cover shadow-md"
    />
  </div>
      <li>Pelatihan keselamatan untuk membangun kebiasaan sadar K3.</li>
    <div className="w-full h-[240px] sm:h-[360px] xl:h-[480px] 2xl:h-[560px] mx-auto mb-10">
    <img
      src="/images/QHSE-3.png"
      alt="Materi Keselamatan Cisangkan"
      className="w-full h-full object-cover shadow-md"
    />
  </div>
      <li>Penggunaan alat pelindung diri dan teknologi otomatis untuk meminimalkan risiko.</li>
    <div className="w-full h-[240px] sm:h-[360px] xl:h-[480px] 2xl:h-[560px] mx-auto mb-10">
    <img
      src="/images/QHSE-4.png"
      alt="Materi Keselamatan Cisangkan"
      className="w-full h-full object-cover shadow-md"
    />
  </div>
    </ul>

    <p>
      Lingkungan kerja yang aman bukan hanya melindungi karyawan, tetapi juga memastikan konsistensi kualitas produk yang Anda terima.
    </p>

    {/* SUB HEADING */}
    <h2 className="font-semibold text-lg mt-10">
      Ketepatan Kerja: Cermin Profesionalisme Kami
    </h2>

    <p>
      Ketepatan adalah bentuk penghargaan kami terhadap waktu dan kepercayaan pelanggan.
      Setiap produk dibuat melalui otomasi dan pengawasan mutu digital agar hasil selalu sesuai spesifikasi.
    </p>

    <ul className="list-disc ml-6 space-y-2">
      <li>Tepat waktu dalam produksi dan pengiriman.</li>
      <li>Tepat hasil sesuai standar kekuatan dan warna.</li>
      <li>Tepat metode melalui prosedur kerja yang konsisten.</li>
    </ul>

    {/* SUB HEADING */}
    <h2 className="font-semibold text-lg mt-10">
      Sinergi yang Melahirkan Kualitas
    </h2>

    <p>
      Keselamatan dan ketepatan bukanlah dua hal terpisah — keduanya saling melengkapi. Proses kerja yang aman menciptakan fokus dan presisi. Sebaliknya, pekerjaan yang tepat mencegah kesalahan yang berpotensi menimbulkan risiko keselamatan.
    </p>

    <p>
      Dari sinergi ini lahir produk yang kuat, konsisten, dan terpercaya untuk mendukung proyek pembangunan Anda.
    </p>

    {/* SUB HEADING */}
    <h2 className="font-semibold text-lg mt-10">
      Sertifikasi dan Kepercayaan
    </h2>

    <p>
      Komitmen kami bukan hanya janji, tetapi sudah teruji melalui sertifikasi:
    </p>

    <ul className="list-disc ml-6 space-y-2">
      <li>ISO 9001 – Sistem Manajemen Mutu</li>
      <li>ISO 14001 – Sistem Manajemen Lingkungan</li>
      <li>ISO 45001 – Keselamatan & Kesehatan Kerja</li>
    </ul>

    {/* SUB HEADING */}
    <h2 className="font-semibold text-lg mt-10">
      Untuk Anda, Mitra yang Kami Hargai
    </h2>

    <p>
      Setiap genteng, paving block, dan layanan kami diciptakan untuk mendukung kesuksesan proyek Anda.
      Dengan mengedepankan keselamatan dan ketepatan, kami menghadirkan:
    </p>

    <ul className="list-disc ml-6 space-y-2">
      <li>Produk yang konsisten dan tahan lama.</li>
      <li>Ketepatan pengiriman sesuai jadwal Anda.</li>
      <li>Layanan profesional, ramah, dan berkelanjutan.</li>
    </ul>

    <p>
      Kami bukan sekadar pemasok – kami adalah mitra yang tumbuh bersama Anda, membangun dengan aman,
      tepat, dan penuh integritas.
    </p>
  </article>
</section>
    </div>
  );
}
