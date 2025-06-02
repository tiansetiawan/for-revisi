import Image from 'next/image';

export const ConcreteRoofContent = () => (
  <>
    <section className='mb-20'>
      <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">KEUNGGULAN GENTENG CISANGKAN :</h2>
      <p className="text-sm leading-relaxed text-justify ps-5">
       Genteng CISANGKAN® diproduksi menggunakan wet process, yaitu proses basah
dengan teknologi mesin dari Jepang. Bahan baku berupa pasir dan semen pilihan
diproses melalui tahapan panjang dan terkontrol untuk menghasilkan genteng berkualitas
tinggi.
        <br /><br />
        Salah satu produk unggulan CISANGKAN® adalah genteng flat Victoria, yang tersedia
dalam lima pilihan model dan motif.
        <br /><br />
Semua genteng Cisangkan dilengkapi sistem interlock antar genteng untuk
menghasilkan sambungan yang kokoh dan rapat.
Kelebihan lain genteng Cisangkan antara lain adalah desain Gutter Line, Two Lines
Barrier, Upper Barrier, dan Double Protection Bar yang dirancang khusus untuk
mengalirkan dan menahan air hujan secara optimal.
        <br /><br />
Genteng CISANGKAN® dirancang sesuai dengan iklim tropis Indonesia dan telah lulus
uji kualitas sesuai standar SNI 0096:2007, dengan hasil uji kekuatan lentur &gt; 1200 N.
      </p>
    </section>

    <section className="flex justify-center">
      <Image src="/images/part descriptsion product.jpg" alt="Genteng Label Kiri" width={600} height={500} />
    </section>

    <section className='mb-15'>
      <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">SPESIFIKASI TEKNIS :</h2>
      <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
        <li>Bahan dasar campuran Beton</li>
        <li>Mutu Produk mengacu pada SNI 0096:2007</li>
        <li>Beban lentur minimal 1200 N</li>
        <li>Daya serap air &lt; 10%</li>
        <li>Sistem produksi mesin Press Wet System</li>
        <li>Sistem pengecatan Sprayboot 2 tahap</li>
        <li>Cat Solvent Based tahan cuaca, air, alkali, sinar UV</li>
        <li>Ketebalan cat 70 mikron</li>
        <li>Prosedur & hasil uji mengacu pada ASTM Section 6, Volume 06.01</li>
        <li>Warna: Hitam, Abu-abu, Kopi, Coklat, Merah</li>
      </ul>
    </section>
  </>
);

export const concreteRoofProducts = [
  { name: 'Neo', image: '/images/neo.png'},
  { name: 'Victoria Onyx', image: '/images/onyx.png' },
  { name: 'Victoria Multiline', image: '/images/multilines-2.png' }, 
  { name: 'Victoria Slate', image: '/images/slates.png' }, 
  { name: 'Victoria Pine', image: '/images/pines.png' }, 
  { name: 'Victoria Classic', image: '/images/classic.png' },
  { name: 'Dual Slate', image: '/images/dualslate.png' }, 
  { name: 'Floral', image: '/images/floral.png' }, 
  { name: 'Excellent', image: '/images/excellent.png' },
  { name: 'Majestic', image: '/images/majestic-2.png' }, 
  { name: 'Oriental', image: '/images/oriental.png' }, 
  { name: 'New Royal', image: '/images/newroyal.png' }
];