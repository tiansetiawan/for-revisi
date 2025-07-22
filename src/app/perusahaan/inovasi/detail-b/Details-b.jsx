'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
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
      judul: "CIS Flashing: Solusi Flashing Modern, Anti Bocor, dan Tanpa Semen untuk Atap Rumah Anda",
      tanggal: "16 Mei 2025",
      gambar: "/images/cis.jpg",
      deskripsi: ""
    };

    setData(sampleData);
  }, []);

  if (!data) return <div>Loading...</div>;



  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
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

    <section className="xl:px-24 mx-auto mt-12 sm:px-12 text-justify text-sm sm:text-base mb-16">
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
      <img src={data.gambar} alt={data.judul} className="w-full h-full object-cover" />
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
    Dalam dunia konstruksi atap, salah satu tantangan paling umum adalah memastikan tidak ada kebocoran air di area sambungan antara atap dan dinding vertikal. Di sinilah peran sistem flashing sangat penting. Namun, metode konvensional yang menggunakan semen sering kali tidak memberikan hasil yang rapi dan mudah mengalami keretakan seiring waktu.
  </p>
  <p>
    Kini hadir solusi modern: <strong>CIS Flashing</strong>. Sebuah sistem flashing cerdas yang dirancang untuk menyelesaikan masalah klasik dengan pendekatan yang lebih praktis, kuat, dan estetis.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Apa Itu CIS Flashing?</h2>
  <p>
    <strong>CIS Flashing</strong> adalah sistem flashing inovatif yang dirancang untuk melindungi sambungan antara atap dan dinding agar bebas dari risiko kebocoran. Berbeda dari metode konvensional, CIS Flashing tidak menggunakan adukan semen. Sistem ini mengandalkan metode <em>Dry System</em> yang bersih, cepat, dan mudah dipasang.
  </p>
  <p>
    CIS Flashing juga memungkinkan finishing yang jauh lebih rapi dan profesional, membuatnya cocok untuk rumah tinggal, bangunan komersial, hingga proyek properti berskala besar.
  </p>

  <h2 className="text-lg font-semibold mt-6 mb-2">Keunggulan CIS Flashing Dibandingkan Metode Konvensional</h2>
  <table className="w-full border border-gray-300 text-sm mb-4">
    <thead>
      <tr className="bg-gray-100">
        <th className="border p-2">CIS Flashing</th>
        <th className="border p-2">Metode Konvensional</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border p-2">✔ Tanpa semen</td>
        <td className="border p-2">❌ Butuh adukan semen</td>
      </tr>
      <tr>
        <td className="border p-2">✔ Tahan lama</td>
        <td className="border p-2">❌ Mudah retak & bocor</td>
      </tr>
      <tr>
        <td className="border p-2">✔ Finishing rapi</td>
        <td className="border p-2">❌ Tampilan berantakan</td>
      </tr>
      <tr>
        <td className="border p-2">✔ Mudah dipasang</td>
        <td className="border p-2">❌ Perlu tukang ahli</td>
      </tr>
      <tr>
        <td className="border p-2">✔ Komponen fleksibel</td>
        <td className="border p-2">❌ Material kaku dan sulit dibentuk</td>
      </tr>
    </tbody>
  </table>

  <h2 className="text-lg font-semibold mt-6 mb-2">Komponen-Komponen Utama dalam Sistem CIS Gutter Flash</h2>

  <h3 className="font-semibold mt-4 mb-1">1. Weatherblock</h3>
  <p>
    Weatherblock adalah lembaran pelindung berbahan tahan air dan fleksibel. Fungsinya sebagai lapisan pelindung utama yang menutupi celah sambungan antara dinding dan genteng.
  </p>
  <p><strong>Keunggulan:</strong></p>
  <ul className="list-disc ml-5 mb-4">
    <li>Tahan terhadap air, jamur, dan lumut</li>
    <li>Mudah dipotong dan dibentuk</li>
    <li>Ringan namun kuat</li>
  </ul>

  <h3 className="font-semibold mt-4 mb-1">2. Z Profile</h3>
  <p>
    Komponen ini merupakan profil aluminium berbentuk huruf Z yang berfungsi sebagai penjepit dan penguat sistem flashing.
  </p>
  <p><strong>Keunggulan:</strong></p>
  <ul className="list-disc ml-5 mb-4">
    <li>Meningkatkan estetika visual</li>
    <li>Memastikan Weatherblock tertahan dengan kokoh</li>
    <li>Memperkuat struktur sambungan</li>
  </ul>

  <h3 className="font-semibold mt-4 mb-1">3. Sealant (Tube)</h3>
  <p>
    Sealant adalah lem kedap air berbentuk tube yang digunakan untuk menutup celah dan memperkuat sistem.
  </p>
  <p><strong>Keunggulan:</strong></p>
  <ul className="list-disc ml-5 mb-4">
    <li>Daya rekat tinggi</li>
    <li>Tahan terhadap air dan cuaca ekstrem</li>
    <li>Mudah diaplikasikan</li>
  </ul>
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