'use client';
import Image from 'next/image';
import Link from "next/link";
import { useState, useRef } from 'react';

export default function Testimoni() {
  // State untuk panel unduh
  const [showDownloadPanel, setShowDownloadPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const modalRef = useRef(null);

  const testimonials = [
    {
      title: 'Bpk. Prana Ariantoraya (Senior Arsitek Prahasta Cakra Utama)',
      text: 'Kami memilih Cisangkan karena mutu beton yang bagus!',
      imagePosition: 'left',
      imageUrl: '/images/testimoni/208.jpg' // Added image path
    },
    {
      title: 'Ibu Ir. Puji Andriyani ,MM (Pimpro Astadasa Propertindo)',
      text: 'Konsep desain dapat dikoordinasikan dengan tim desain Cisangkan untuk mewujudkan bentuk dan pola yang diinginkan, didukung oleh mutu beton yang baik serta warna menarik yang dapat dibentuk secara dinamis.',
      imagePosition: 'right',
      imageUrl: '/images/testimoni/209.jpg' // Added image path
    },
        {
      title: 'Bpk. Rubianto (Kontraktor Proyek Sarae Hills)',
      text: 'Selama 20 tahun kami menggunakan produk Cisangkan dan kami tidak pernah kecewa baik dari warna dan kekuatan beton.',
      imagePosition: 'left',
      imageUrl: '/images/testimoni/210.jpg' // Added image path
    },
    {
      title: 'Ibu Inawati (Direktur Gaya Makmur Mobil)',
      text: 'Produk Cisangkan memiliki berbagai macam tipe, selain itu tim jasa pemasangan dari cisangkan juga bagus dapat mengerjakan sesuai timeline yang di sepakati dan terorganisir dengan baik.',
      imagePosition: 'right',
      imageUrl: '/images/testimoni/211.jpg' // Added image path
    },
  ];

  return (
    <div className="mt-[5.8rem] px-11 bg-white text-slate-800 mb-8">
      {/* Hero Section */}
      <div className="relative w-full aspect-[1764/460] min-h-[180px] sm:min-h-[300px] overflow-hidden">
        <Image
          src="/images/testimoni.jpg"
          alt="Banner Testimoni"
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
          <Link href="/blog/artikel" className="text-[#333] hover:text-[#2D5DA6]">Artikel</Link>
          <Link href="/blog/testimoni" className="text-[#2D5DA6] font-bold">Testimoni</Link>
        </nav>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-5">
        <div className="gap-6 items-start mb-10">
          <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
            TESTIMONI
          </h2>
        </div>

        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.imagePosition === 'left' ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } items-start sm:items-center justify-between gap-6 sm:gap-0 mb-18 border-b border-gray-300`}
          >
            {/* Gambar */}
            <div className="w-full sm:w-1/5">
              <div className="relative w-full aspect-video">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 20vw"
                  />
                ) : (
                  <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10l4.553 4.553a.75.75 0 01-1.06 1.06L13 11.06m0 0L8.447 15.613a.75.75 0 01-1.06-1.06L11 10.939m2 0L13 10.939"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Teks */}
            <div className="w-full sm:w-2/3 text-sm text-justify" style={{width:'50rem'}}>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}