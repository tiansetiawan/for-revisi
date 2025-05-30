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
      title: 'Lorem ipsum et pellentesque non mattis nec.',
      text: 'Lorem ipsum molestie arcu integer feugiat vestibulum elementum duis ut vulputate metus euismod aliquam amet mattis in viverra eu enim et ultricies luctus massa auctor netus maecenas morbi massa laoreet consectetur et risus semper odio venenatis faucibus sed id lectus.',
      imagePosition: 'left',
    },
    {
      title: 'Lorem ipsum',
      text: 'Lorem ipsum nibh posuere leo ornare vehicula sit posuere risus eget pellentesque mauris facilisi bibendum gravida mi morbi viverra imperdiet nulla euismod amet tempor in lacinia in parturient et egestas condimentum dictum vitae et ullamcorper erat turpis nullam volutpat porta sit gravida et urna eu viverra velit velit cras mi tellus mauris nunc habitant risus urna egestas vulputate egestas.',
      imagePosition: 'right',
    },
    {
      title: 'Lorem ipsum et pellentesque non mattis nec.',
      text: 'Lorem ipsum molestie arcu integer feugiat vestibulum elementum duis ut vulputate metus euismod aliquam amet mattis in viverra eu enim et ultricies luctus massa auctor netus maecenas morbi massa laoreet consectetur et risus semper odio venenatis faucibus sed id lectus.',
      imagePosition: 'left',
    },
    {
      title: 'Lorem ipsum',
      text: 'Lorem ipsum nibh posuere leo ornare vehicula sit posuere risus eget pellentesque mauris facilisi bibendum gravida mi morbi viverra imperdiet nulla euismod amet tempor in lacinia in parturient et egestas condimentum dictum vitae et ullamcorper erat turpis nullam volutpat porta sit gravida et urna eu viverra velit velit cras mi tellus mauris nunc habitant risus urna egestas vulputate egestas.',
      imagePosition: 'right',
    },
    {
      title: 'Lorem ipsum et pellentesque non mattis nec.',
      text: 'Lorem ipsum molestie arcu integer feugiat vestibulum elementum duis ut vulputate metus euismod aliquam amet mattis in viverra eu enim et ultricies luctus massa auctor netus maecenas morbi massa laoreet consectetur et risus semper odio venenatis faucibus sed id lectus.',
      imagePosition: 'left',
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
    {/* <Link href="/blog/kegiatan" className="text-[#333] hover:text-[#2D5DA6]">Kegiatan</Link>
    <Link href="/blog/galeri" className="text-[#333] hover:text-[#2D5DA6]">Galeri</Link> */}
    <Link href="/blog/testimoni" className="text-[#2D5DA6] font-bold">Testimoni</Link>
  </nav>
</div>

      {/* Main Content */}
    <section className="max-w-6xl mx-auto mt-12 px-6 sm:px-12 text-sm sm:text-base mb-10">

            <div className="gap-6 items-start mb-10">
        <h2 className="text-xl sm:text-xl font-semibold leading-snug border-l-4 border-[#0B203F] pl-4 uppercase mb-5">
          TESTIMONI
        </h2>
        <p className="text-sm text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </p>
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
      <div className="bg-gray-300 w-full aspect-video flex items-center justify-center">
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
    </div>

    {/* Teks */}
    <div className="w-full sm:w-2/3 text-sm text-justify" style={{width:'50rem'}}>
      <h3 className="font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-700">{item.text}</p>
    </div>
  </div>
))}
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
    </section>
    </div>
  );
}