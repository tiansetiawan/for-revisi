import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const proyekData = [
    {
      id: 1,
      namaProduk: 'Flat Roof',
      namaProyek: 'Kantor Pusat Cisangkan',
      tempatProyek: 'Bandung',
      gambar: '/images/Gedung Sate.jpg'
    },
    {
      id: 2,
      namaProduk: 'Classic Tile',
      namaProyek: 'Perumahan Elit',
      tempatProyek: 'Jakarta',
      gambar: '/images/Gedung Sate.jpg'
    },
    {
      id: 3,
      namaProduk: 'Modern Roof',
      namaProyek: 'Apartemen Taman Kota',
      tempatProyek: 'Surabaya',
      gambar: '/images/Gedung Sate.jpg'
    },
    {
      id: 4,
      namaProduk: 'Concrete Block',
      namaProyek: 'Pabrik Tekstil',
      tempatProyek: 'Cirebon',
      gambar: '/images/proyek4.jpg'
    },
    {
      id: 5,
      namaProduk: 'Paving Block',
      namaProyek: 'Area Parkir Mall',
      tempatProyek: 'Bekasi',
      gambar: '/images/proyek5.jpg'
    },
    {
      id: 6,
      namaProduk: 'Concrete Pipe',
      namaProyek: 'Proyek Drainase',
      tempatProyek: 'Bogor',
      gambar: '/images/proyek6.jpg'
    },
    {
      id: 7,
      namaProduk: 'Concrete Block',
      namaProyek: 'Pabrik Tekstil',
      tempatProyek: 'Cirebon',
      gambar: '/images/proyek4.jpg'
    },
    {
      id: 8,
      namaProduk: 'Paving Block',
      namaProyek: 'Area Parkir Mall',
      tempatProyek: 'Bekasi',
      gambar: '/images/proyek5.jpg'
    },
    {
      id: 9,
      namaProduk: 'Concrete Pipe',
      namaProyek: 'Proyek Drainase',
      tempatProyek: 'Bogor',
      gambar: '/images/proyek6.jpg'
    },
    {
      id: 10,
      namaProduk: 'Concrete Block',
      namaProyek: 'Pabrik Tekstil',
      tempatProyek: 'Cirebon',
      gambar: '/images/proyek4.jpg'
    },
    {
      id: 11,
      namaProduk: 'Paving Block',
      namaProyek: 'Area Parkir Mall',
      tempatProyek: 'Bekasi',
      gambar: '/images/proyek5.jpg'
    },
    {
      id: 12,
      namaProduk: 'Concrete Pipe',
      namaProyek: 'Proyek Drainase',
      tempatProyek: 'Bogor',
      gambar: '/images/proyek6.jpg'
    }
  ];

   {/* Proyek Cisangkan dengan Slider */}
        <section className="py-20 bg-gray-100 relative">
    <h2 className="text-center text-2xl font-semibold mb-10">PROYEK CISANGKAN</h2>
    
    <div className="relative max-w-6xl mx-auto px-8">
      {/* Tombol navigasi */}
      <button
        onClick={prevProyekSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0B1F3A] p-2 text-white hover:bg-[#0B203F] z-10 rounded-full"
      >
        <FaChevronLeft size={16} />
      </button>
      
      <button
        onClick={nextProyekSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0B1F3A] p-2 text-white hover:bg-[#0B203F] z-10 rounded-full"
      >
        <FaChevronRight size={16} />
      </button>
  
      {/* Grid proyek 3 kolom x 2 baris */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((proyek) => (
          <div key={proyek.id} className="bg-white shadow p-4 transition-all duration-300 hover:shadow-lg">
            <div className="w-full h-40 bg-gray-300 mb-4 rounded overflow-hidden">
              <Image
                src={proyek.gambar}
                alt={proyek.namaProduk}
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-base font-medium">{proyek.namaProduk}</h3>
            <p className="text-sm text-gray-600">
              {proyek.namaProyek} – {proyek.tempatProyek}
            </p>
          </div>
        ))}
      </div>
    </div>
  
    {/* Indicator */}
    <div className="flex justify-center mt-6 gap-2">
      {Array.from({ length: Math.ceil(proyekData.length / itemsPerPage) }).map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentProyekSlide(i * itemsPerPage)}
          className={`w-3 h-3 rounded-full ${currentProyekSlide === i * itemsPerPage ? 'bg-[#0B203F]' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  </section>