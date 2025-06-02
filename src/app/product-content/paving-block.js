import Image from 'next/image';
export const PavingBlockContent = () => (
  <>
    <section className='mb-20'>
      <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">KEUNGGULAN PAVING BLOCK CISANGKAN :</h2>
      <p className="text-sm leading-relaxed text-justify ps-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        <br /><br />
       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
      </p>
    </section>

    <section className="flex justify-center">
      <Image src="/images/paving-sample.jpg" alt="Contoh Paving Block" width={600} height={500} />
    </section>

    <section className='mb-15'>
      <h2 className="text-xl sm:text-xl font-semibold border-l-4 border-[#0B203F] pl-4 mb-4">SPESIFIKASI TEKNIS :</h2>
      <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
        <li>Bahan dasar: </li>
        <li>Kuat tekan: </li>
        <li>Ketahanan aus: </li>
        <li>Ketebalan: </li>
        <li>Warna: </li>
      </ul>
    </section>
  </>
);

export const pavingBlockProducts = [
  { name: 'Square Set', image: '/images/icon photo.png' },
  { name: 'Classic Set', image: '/images/icon photo.png' },
  { name: 'Altstadt', image: '/images/icon photo.png' },
  { name: 'Guiding Pave', image: '/images/icon photo.png' },
  { name: 'Grass Block', image: '/images/icon photo.png' }
];