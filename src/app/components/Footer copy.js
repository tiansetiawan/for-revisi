import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-[#0B203F] text-white px-6 md:px-16 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Sertifikasi */}
          <div className="md:w-1/3">
            <img src="/logo50.png" alt="50th Anniversary" className="w-48 mb-1" />
            <img src="/logo-sertifikasi.png" alt="Sertifikasi" className="w-40 bg-white rounded-[9px] ps-2 pe-2 ml-4" />
          </div>
  
          {/* Links */}
          <div className="flex flex-wrap gap-10 text-sm md:gap-20 md:text-base">
            <div>
              <h3 className="text-base font-bold mb-2">Produk</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>Atap</li>
                <li>Dinding</li>
                <li>Lantai</li>
                <li>Utilitas</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-base font-bold">Perusahaan</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>Tentang Kami</li>
                <li>Sejarah</li>
                <li>Sertifikasi</li>
                <li>Katalog</li>
                <li>Video</li>
                <li>Karir</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-2">Showroom</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>Store</li>
                <li>Kiosk</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-2">Blog</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>Artikel</li>
                <li>Kegiatan</li>
                <li>Inovasi</li>
                <li>Galeri</li>
                <li>Testimoni</li>
              </ul>
            </div>
          </div>
        </div>
  
        <hr className="my-8 border-gray-600" />
  
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            © 2025 <span className="text-sm text-white">Cisangkan.</span> All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white text-sm">Privacy Policy</a>
            <div className="flex gap-4 text-xs">
              <FaInstagram className="hover:text-white cursor-pointer bg-white text-black rounded-full box-border size-5 p-1 " />
              <FaFacebookF className="hover:text-white cursor-pointer  bg-white text-black rounded-full box-border size-5 p-1" />
              <FaTiktok className="hover:text-white cursor-pointer  bg-white text-black rounded-full box-border size-5 p-1" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  