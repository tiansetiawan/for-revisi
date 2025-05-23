'use client';;
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef, useEffect } from 'react';

export default function Proyek() {
  // State untuk panel unduh
  const modalRef = useRef(null);
   const [showSubmenu, setShowSubmenu] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('autoExpand') === 'true';
    }
    return false;
  });
  const [showNeoSubmenu, setShowNeoSubmenu] = useState(false);
const [activeItem, setActiveItem] = useState('Semua Produk');
  const [activeSubItem, setActiveSubItem] = useState(null);
    const mainProducts = ['Concrete Roof', 'Paving Block', 'Concrete Block', 'Concrete Pipe'];
  const subProducts = ['Neo', 'Victoria', 'Dust Stone', 'Excelent', 'Majestic', 'Crown', 'New Royal'];

  const neoProjects = ['Nama Proyek A', 'Nama Proyek B', 'Nama Proyek C'];


  // Gunakan useEffect untuk mengecek state saat komponen dimount
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('expand') === 'true') {
    setShowSubmenu(true);
    // Bersihkan URL tanpa reload
    window.history.replaceState({}, '', window.location.pathname);
  }
}, []);


const handleMainItemClick = (item) => {
  setActiveItem(item);
  setActiveSubItem(null);

  if (item === 'Semua Produk') {
    setShowSubmenu(false);       // Sembunyikan submenu utama
    setShowNeoSubmenu(false);    // Sembunyikan submenu Neo jika terbuka
  } else if (item === 'Concrete Roof') {
    setShowSubmenu(!showSubmenu); // Toggle submenu Concrete Roof
  } else {
    setShowSubmenu(false);       // Untuk item lain, submenu disembunyikan
    setShowNeoSubmenu(false);    // Pastikan submenu Neo tertutup
  }
};


  const handleSubItemClick = (subItem) => {
    setActiveSubItem(subItem);
  };

  // Data katalog
const proyekList = [
    { 
        id: 1, 
        nama: "Paving Block", 
        file: "/images/Gedung Sate.jpg", 
        tempat: "Proyek 1 - Gedung Sate Bandung",
        link: "/proyek/proyek-a" // Tambahkan link untuk navigasi
    },
    { 
        id: 2, 
        nama: "Proyek 2", 
        file: "/images/icon photo.png", 
        tempat: "Nama Proyek - Tempat",
        link: "/proyek/2" 
    },
    { 
        id: 3, 
        nama: "Proyek 3", 
        file: "/images/icon photo.png", 
        tempat: "Nama Proyek - Tempat",
        link: "/proyek/3" 
    },
    { 
        id: 4, 
        nama: "Proyek 4", 
        file: "/images/icon photo.png", 
        tempat: "Nama Proyek - Tempat",
        link: "/proyek/4" 
    },
    { 
        id: 5, 
        nama: "Proyek 5", 
        file: "/images/icon photo.png", 
        tempat: "Nama Proyek - Tempat",
        link: "/proyek/5" 
    },
    { 
        id: 6, 
        nama: "Proyek 6", 
        file: "/images/icon photo.png", 
        tempat: "Nama Proyek - Tempat",
        link: "/proyek/6" 
    },
];

  // --- PAGINATION ---
  // const itemsPerPage = 3;
  // const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = Math.ceil(proyekList.length / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentItems = proyekList.slice(startIndex, endIndex);

  // const handlePageChange = (pageNumber) => {
  //   if (pageNumber >= 1 && pageNumber <= totalPages) {
  //     setCurrentPage(pageNumber);
  //   }
  // };
  // -------------------

  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
        <Image
          src="/images/produk.png"
          alt="Banner Proyek"
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

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto ps-6 pe-1 py-8">
        {/* Sidebar Menu */}
              <aside className="w-full lg:w-1/6 lg:sticky lg:top-[6.5rem] lg:h-[calc(100vh-6.5rem)] lg:overflow-y-auto">
        <h1 className="text-lg font-medium mb-4 pb-2">Produk</h1>
        <ul className="space-y-2 text-sm">
           {/* Semua Produk */}
  <li>
<Link
  href="/proyek"
  onClick={() => handleMainItemClick('Semua Produk')}
  className={`block w-full text-left px-2 cursor-pointer ${
    activeItem === 'Semua Produk'
      ? 'text-[#2957A4] border-l-2 border-[#2957A4] font-semibold'
      : 'text-gray-700 font-medium hover:text-[#2957A4]'
  }`}
>
  Semua Produk
</Link>
  </li>
          {mainProducts.map((item) => (
            <li key={item}>
{item === 'Concrete Roof' ? (
  <>
    <button
      onClick={() => handleMainItemClick(item)}
      className={`w-full text-left px-2 cursor-pointer hover:text-[#2957A4] ${
        activeItem === item && showSubmenu
          ? 'text-[#2957A4] border-l-2 border-[#2957A4] font-semibold'
          : 'text-gray-700 font-medium hover:text-[#3a4557]'
      }`}
    >
      {item}
    </button>

                  {/* Submenu */}
{/* Submenu */}
 {showSubmenu && activeItem === 'Concrete Roof' && (
      <ul className="ml-4 mt-2 space-y-3 text-gray-600 text-xs border-l border-gray-300 pl-2 mb-4">
    {subProducts.map((sub) => (
      <li key={sub}>
        {sub === 'Neo' ? (
          <>
            <button
              onClick={() => {
                handleSubItemClick(sub);
                setShowNeoSubmenu(!showNeoSubmenu);
              }}
              className={`flex items-center w-full text-left cursor-pointer gap-2 ${
                showNeoSubmenu
                  ? 'text-[#0B203F] font-semibold'
                  : 'text-[#0B203F] font-medium hover:text-[#2957A4]'
              }`}
            >
              {/* Arrow hanya tampil saat submenu terbuka */}
              {showNeoSubmenu && (
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${
                    showNeoSubmenu ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              <span>{sub}</span>
            </button>

            {showNeoSubmenu && (
              <ul className="ml-4 mt-2 space-y-2 text-gray-600 text-[10px] pl-2 border-l border-gray-200">
                {neoProjects.map((project) => (
                  <li key={project}>
                    <Link
                      href={`/proyek/proyek-a`}
                      className="block hover:text-[#2957A4]"
                    >
                      {project}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <Link
            href={`/produk/detail?product=${encodeURIComponent(sub)}`}
            onClick={() => handleSubItemClick(sub)}
            className={`block cursor-pointer ${
              activeSubItem === sub
                ? 'text-[#2957A4] font-medium'
                : 'hover:text-[#2957A4]'
            }`}
          >
            {sub}
          </Link>
        )}
      </li>
    ))}
  </ul>
)}

                </>
             ) : (
  <button
    onClick={() => handleMainItemClick(item)}
    className={`w-full text-left px-2 cursor-pointer hover:text-[#2957A4] ${
      activeItem === item
        ? 'text-[#2957A4] border-l-2 border-[#2957A4] font-semibold'
        : 'text-gray-700 hover:text-[#3a4557]'
    }`}
  >
    {item}
  </button>
)}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-5/5 space-y-8">
      <section className="max-w-6xl mx-auto px-6 sm:px-12 text-sm sm:text-base mb-10">
        {/* Heading */}
        <div className="gap-6 items-start mb-10">
          <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
            PROYEK KAMI
          </h2>
        </div>

{/* Grid Proyek (sesuai UI) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-black mb-20">
  {proyekList.map((item) => (
    <a 
      href={item.link} 
      key={item.id}
      className="block border border-[#2957A4] rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 no-underline"
    >
      <div className="bg-gray-300 w-full aspect-[6/3] flex items-center justify-center">
        <img
          src={item.file}
          alt={item.nama}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white px-4 py-3 text-left">
        <p className="text-sm font-semibold text-black">{item.nama}</p>
        <p className="text-sm text-blue-700 font-medium">{item.tempat}</p>
      </div>
    </a>
  ))}
</div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 text-sm border-y border-[#E0E0E0] py-2">
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
        </div>

        {/* Pagination */}
{/* <div className="flex justify-center items-center gap-2 text-sm border-y border-[#E0E0E0] py-2">
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs disabled:opacity-50"
    disabled={currentPage === 1}
  >
    Prev
  </button>

  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i + 1}
      onClick={() => handlePageChange(i + 1)}
      className={`px-3 py-1 text-xs ${
        currentPage === i + 1
          ? 'border border-gray-300 rounded-none bg-[#0B203F] text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {i + 1}
    </button>
  ))}

  <button
    onClick={() => handlePageChange(currentPage + 1)}
    className="px-3 py-1 text-gray-700 hover:bg-gray-100 text-xs disabled:opacity-50"
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div> */}

      </section>
</main>
    </div>
    </div>
  );
}