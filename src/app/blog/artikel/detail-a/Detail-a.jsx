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



export default function DetailA() {
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

  const [artikels, setArtikels] = useState([]);

  // useEffect(() => {
  //   // Ganti URL ini dengan endpoint backend kamu nanti
  //   axios.get("/api/artikel/terkait")
  //     .then((res) => setArtikels(res.data))
  //     .catch((err) => console.error("Gagal ambil artikel terkait:", err));
  // }, []);

  useEffect(() => {
    // Ganti ini dengan API call atau ambil dari context/router
    const sampleData = {
      judul: "Lorem ipsum amet nulla in sit pellentesque imperdiet eu purus a ullamcorper amet sit lectus integer faucibus consequat odio quis.",
      tanggal: "16 Mei 2025",
      gambar: "/path/to/image.jpg",
      deskripsi: "Lorem ipsum aliquet mauris interdum orci amet aliquam tellus felis congue auctor tincidunt neque pharetra et euismod eget et nisi iaculis commodo laoreet nisi tristique amet quis aliquam nunc ornare morbi nisi ultrices vivamus aliquam interdum at rutrum non ac arcu faucibus sapien auctor pellentesque nisl amet id est ullamcorper id mauris consequat tellus tellus tempor faucibus dictumst fermentum cursus et pellentesque sollicitudin egestas gravida egestas scelerisque senectus egestas urna orci auctor habitasse egestas vulputate praesent tempor fringilla etiam sed eget sed aliquam mauris sed scelerisque nec massa metus ut pharetra in bibendum commodo morbi ornare velit tincidunt eros at sit nulla tellus potenti turpis adipiscing tortor elementum aliquam in posuere vulputate sem ipsum tellus egestas cursus dapibus neque egestas massa volutpat in sed tincidunt amet sed mauris vel ultricies amet at nisi lobortis leo consectetur interdum leo massa pellentesque venenatis orci sit ac aenean quisque porttitor condimentum orci vel enim facilisis rutrum euismod tempor id dolor non ac amet ipsum maecenas mi nascetur mauris amet nulla at molestie scelerisque vitae leo id enim nunc quam purus id urna viverra commodo est consectetur ullamcorper laoreet orci mauris amet sollicitudin morbi tempus urna eget amet libero ut sed donec amet proin sit magnis tempor suspendisse elit sit nibh ac enim morbi ut erat lacus porta ipsum egestas in a vitae turpis blandit sed aliquam consequat a eget pulvinar vel viverra aliquam ipsum gravida sem massa morbi dolor mauris euismod feugiat pulvinar dictum at arcu id ultrices ut tristique massa malesuada ullamcorper turpis commodo integer odio aliquet ultricies nunc commodo malesuada sapien nullam consectetur sed id facilisi integer morbi odio senectus tincidunt eget risus tellus suscipit fringilla posuere maecenas pellentesque eu sem elementum dictumst amet risus lorem sit at at consequat volutpat id sed dictumst nec orci non id pulvinar purus nibh."
    };

    setData(sampleData);
  }, []);

  if (!data) return <div>Loading...</div>;



  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
        <Image
          src="/images/produk.png"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20 flex items-end pb-6 sm:pb-8 md:pb-12 lg:items-center lg:justify-center lg:pb-0 px-4 sm:px-6">
        </div>
      </div>

      {/* Header Section */}
<div className="bg-[#F2F2F2] py-4">
  <nav className="flex justify-center space-x-10 text-[1rem] font-light tracking-wide">
    <Link href="/blog/artikel" className="text-[#2D5DA6] font-bold">Artikel</Link>
    <Link href="/blog/kegiatan" className="text-[#333] hover:text-[#2D5DA6]">Kegiatan</Link>
    <Link href="/blog/galeri" className="text-[#333] hover:text-[#2D5DA6]">Galeri</Link>
    <Link href="/blog/testimoni" className="text-[#333] hover:text-[#2D5DA6]">Testimoni</Link>
  </nav>
</div>

    <section className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 text-sm sm:text-base mb-16">
  {/* Judul */}
      <h1 className="justify-center text-black font-semibold text-lg sm:text-lg uppercase mb-2">
        {data.judul}
      </h1>


  {/* Tanggal */}
  <p className="text-blue-600 text-sm mb-6">
    {data?.tanggal || 'DD Month Years'}
  </p>

  {/* Gambar */}
  <div className="w-full max-w-3xl h-[240px] sm:h-[320px] mx-auto bg-gray-200 flex items-center justify-center mb-8">
    {data?.gambar ? (
      <img src={data.gambar} alt={data.judul} className="w-full h-full object-cover" />
    ) : (
      <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm10 2a1 1 0 110 2 1 1 0 010-2zm-4 3a3 3 0 11-6 0 3 3 0 016 0zm-3 4a5 5 0 00-5 5h10a5 5 0 00-5-5z" />
      </svg>
    )}
  </div>

  {/* Konten Deskripsi */}
  <div className="text-justify text-sm leading-relaxed text-[#333] space-y-4 pb-10 border-b mb-5">
    {data?.deskripsi ? (
      <p>{data.deskripsi}</p>
    ) : (
      <>
        <p><strong>Lorem ipsum</strong> dolor sit amet...</p>
        <p>...continues dummy text...</p>
        {/* Tambahkan lebih banyak paragraf dummy jika diperlukan */}
      </>
    )}
  </div>


  <h2 className="text-xl font-semibold mb-6">ARTIKEL TERKAIT</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[1, 2].map((id) => (
    <div key={id} className="flex gap-4">
      {/* Gambar Thumbnail */}
      <div className="w-[100px] h-[100px] bg-gray-300 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8a1 1 0 011-1zm3 5l2.586 2.586a1 1 0 001.414 0L13 10l5 5" />
        </svg>
      </div>

      {/* Konten Artikel */}
      <div className="flex-1">
        <h3 className="text-md font-semibold mb-1">
          Lorem ipsum auctor lacinia.
        </h3>
        <p className="text-xs text-[#1A56DB] mb-1">
          DD Month Years
        </p>
        <p className="text-xs text-[#333] leading-relaxed line-clamp-3">
          Lorem ipsum ornare viverra lorem mattis elementum sit viverra vitae est aliquet nisi tristique egestas lorem morbi varius neque magna adipiscing lobortis vivamus velit sed lacus purus sapien...
        </p>
        <a href="/blog/artikel/detail-a" className="text-xs text-[#1A56DB] font-semibold hover:underline">
          Baca Selengkapnya &gt;&gt;
        </a>
      </div>
    </div>
  ))}
</div>
</section>
    </div>
  );
}