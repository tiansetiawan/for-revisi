// src/components/ProyekGallery.jsx
'use client';
import Link from "next/link";

export default function ProyekGallery({ proyekList }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-black mb-20">
      {proyekList.map((item) => (
        <Link 
          href={item.link || '#'} 
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
        </Link>
      ))}
    </div>
  );
}