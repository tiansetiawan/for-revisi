import {
    FaInstagram,
    FaFacebookF,
    FaTiktok,
    FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#0B203F] text-white px-6 py-8">
            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center text-center">
                <div className="flex-col flex justify-center gap-3 mb-6">
                    <img src="/logo50.png" alt="50th Anniversary" className="h-40" />
                    <img src="/logo-sertifikasi.png" alt="Sertifikasi" className="h-8 bg-white rounded-[9px] p-1" />
                </div>
                
                <div className="flex justify-center gap-10 text-xs mb-6">
                    <FaInstagram className="bg-white text-black rounded-full box-border size-6 p-1" />
                    <FaFacebookF className="bg-white text-black rounded-full box-border size-6 p-1" />
                    <FaTiktok className="bg-white text-black rounded-full box-border size-6 p-1" />
                </div>
                
                <div className="text-xs mb-4">
                    © 2025 Cisangkan. All Rights Reserved
                </div>
                
                <a href="#" className="text-xs">Privacy Policy</a>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block max-w-7xl mx-auto px-15">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    {/* Logo & Sertifikasi */}
                    <div className="md:w-1/3">
                        <img src="/logo50.png" alt="50th Anniversary" className="w-40 mb-1" />
                        <img src="/logo-sertifikasi.png" alt="Sertifikasi" className="w-33 bg-white rounded-[5px] ps-1 pe-1 ml-4" />
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-10 text-sm md:gap-20 md:text-base">
                        <div>
                            <h3 className="mb-2 text-sm font-bold">Produk</h3>
                            <ul className="space-y-1 text-gray-400 text-[12px]">
                                <li className='hover:cursor-pointer'>Atap</li>
                                <li className='hover:cursor-pointer'>Dinding</li>
                                <li className='hover:cursor-pointer'>Lantai</li>
                                <li className='hover:cursor-pointer'>Utilitas</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-bold">Perusahaan</h3>
                            <ul className="space-y-1 text-gray-400 text-[12px]">
                                <li className='hover:cursor-pointer'>Tentang Kami</li>
                                <li className='hover:cursor-pointer'>Sejarah</li>
                                <li className='hover:cursor-pointer'>Sertifikasi</li>
                                <li className='hover:cursor-pointer'>Katalog</li>
                                <li className='hover:cursor-pointer'>Video</li>
                                <li className='hover:cursor-pointer'>Karir</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-bold">Showroom</h3>
                            <ul className="space-y-1 text-gray-400 text-[12px]">
                                <li className='hover:cursor-pointer'>Store</li>
                                <li className='hover:cursor-pointer'>Kiosk</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-2 text-sm font-bold">Blog</h3>
                            <ul className="space-y-1 text-gray-400 text-[12px]">
                                <li className='hover:cursor-pointer'>Artikel</li>
                                <li className='hover:cursor-pointer'>Kegiatan</li>
                                <li className='hover:cursor-pointer'>Inovasi</li>
                                <li className='hover:cursor-pointer'>Galeri</li>
                                <li className='hover:cursor-pointer'>Testimoni</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-gray-600" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="mb-4 md:mb-0 text-[12px]">
                        © 2025 <span className="text-[12px] text-white">Cisangkan.</span> All Rights Reserved
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white text-[12px]">Privacy Policy</a>
                        <div className="flex gap-4 text-xs">
                            <a href="https://www.instagram.com/pt_cisangkan/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                <FaInstagram className="cursor-pointer bg-white text-black rounded-full box-border size-5 p-1 hover:bg-blue-100 transition-colors" />
                            </a>
                            <a href="https://www.facebook.com/cisangkan#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                <FaFacebookF className="cursor-pointer bg-white text-black rounded-full box-border size-5 p-1 hover:bg-blue-100 transition-colors" />
                            </a>
                            <a href="https://www.tiktok.com/@pt_cisangkan" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                <FaTiktok className="cursor-pointer bg-white text-black rounded-full box-border size-5 p-1 hover:bg-blue-100 transition-colors" />
                            </a>
                            <a href="https://www.youtube.com/@pt_cisangkan" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                <FaYoutube className="cursor-pointer bg-white text-black rounded-full box-border size-5 p-1 hover:bg-blue-100 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}