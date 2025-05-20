'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();
  const [language, setLanguage] = useState('Ind');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fungsi untuk reload halaman Beranda
  const reloadHome = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };
  
  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Fungsi untuk scroll ke atas (ke Beranda)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`bg-white z-50 fixed top-0 right-0 left-0 transition-all duration-300 ${
      scrolled ? 'shadow-md border-b border-gray-200' : 'shadow-none border-b-0'
    }`}>
      <div className="flex items-center justify-between px-10 py-4">
        {/* Logo dengan fungsi reload */}
        <div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={reloadHome}
        >
          <Image 
            src="/logo.png" 
            alt="Cisangkan Logo" 
            width={200} 
            height={200}
            className="hover:opacity-80 transition-opacity"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-6 text-gray-700 text-sm font-medium relative">
          <li>
            <Link href="/">
            <button 
              onClick={scrollToTop}
              className="px-2 py-2 rounded-full hover:bg-[#0F1E3E] hover:text-white"
            >
              Beranda
            </button>
            </Link>
          </li>

          {/* Dropdown Produk */}
          <li className="relative group">
            <button
              className="px-2 py-1 flex items-center gap-1 rounded-full hover:bg-[#0F1E3E] hover:text-white"
              onClick={toggleDropdown}
            >
              Produk <FaChevronDown size={10} />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50">
<Link 
  href="/produk" 
  onClick={() => sessionStorage.setItem('autoExpand', 'true')}
>
  <span className="block px-4 py-2 hover:bg-gray-100">Concrete Roof</span>
</Link>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Paving Block</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Concrete Block</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Concrete Pipe</a></li>
              </ul>
            )}
          </li>

          <li><Link href="/perusahaan/tentang" className="rounded-full px-2 py-2 hover:bg-[#0F1E3E] hover:text-white">Perusahaan</Link></li>
          <li><a href="#" className="px-2 py-2 rounded-full hover:bg-[#0F1E3E] hover:text-white">Showroom</a></li>
          <li><a href="#" className="px-2 py-2 rounded-full hover:bg-[#0F1E3E] hover:text-white">Proyek</a></li>
          <li><a href="#" className="px-2 py-2 rounded-full hover:bg-[#0F1E3E] hover:text-white">Blog</a></li>
          <li><a href="#" className="px-2 py-2 rounded-full hover:bg-[#0F1E3E] hover:text-white">Kontak Kami</a></li>
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-4 mr-4 text-gray-600 text-sm">
          <div>
            <span
              className={`cursor-pointer ${language === 'Eng' ? 'text-black font-normal' : 'text-gray-400'}`}
              onClick={() => setLanguage('Eng')}
            >
              Eng
            </span>
            {' / '}
            <span
              className={`cursor-pointer ${language === 'Ind' ? 'text-black font-bold' : 'text-gray-400'}`}
              onClick={() => setLanguage('Ind')}
            >
              Ind
            </span>
          </div>
          <FaSearch className="cursor-pointer hover:text-black" />
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 text-sm font-medium">
            <li>
            <Link href="/">
            <button 
                onClick={scrollToTop}
                className="bg-[#0F1E3E] text-white px-4 py-2 rounded-full inline-block w-fit"
              >
                Beranda
            </button>
            </Link>
            </li>

            {/* Dropdown Produk di Mobile */}
            <li>
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:text-black"
              >
                Produk <FaChevronDown size={10} className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li><Link href="/produk?expand=true">
  <span className="block hover:bg-gray-100">Concrete Roof</span>
</Link></li>
                  <li><a href="#" className="block hover:text-black">Paving Block</a></li>
                  <li><a href="#" className="block hover:text-black">Concrete Block</a></li>
                  <li><a href="#" className="block hover:text-black">Concrete Pipe</a></li>
                </ul>
              )}
            </li>

            <li><a href="/perusahaan/tentang" className="hover:text-black">Perusahaan</a></li>
            <li><a href="#" className="hover:text-black">Showroom</a></li>
            <li><a href="#" className="hover:text-black">Proyek</a></li>
            <li><a href="#" className="hover:text-black">Blog</a></li>
            <li><a href="#" className="hover:text-black">Kontak Kami</a></li>

            <div className="flex items-center space-x-4 mt-4 text-gray-600">
              <FaSearch className="cursor-pointer" />
              {/* <FaBell className="cursor-pointer" />
              <FaShoppingCart className="cursor-pointer" />
              <div className="p-1 rounded-full bg-gray-200">
                <FaUser className="cursor-pointer text-black" />
              </div> */}
            </div>
            <div className="pt-2">
              <span
                className={`cursor-pointer ${language === 'Eng' ? 'text-black font-normal' : 'text-gray-400'}`}
                onClick={() => setLanguage('Eng')}
              >
                Eng
              </span>
              {' / '}
              <span
                className={`cursor-pointer ${language === 'Ind' ? 'text-black font-bold' : 'text-gray-400'}`}
                onClick={() => setLanguage('Ind')}
              >
                Ind
              </span>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}