import { useRouter } from 'next/router';
import contentBank from '../../content-bank/products';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function ContentPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ambil konten dari bank konten berdasarkan ID
  const content = contentBank[id];

  if (!content) {
    return (
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold">Konten tidak ditemukan</h1>
          <p>Produk dengan ID {id} tidak tersedia.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
        <img 
          src={content.imageUrl} 
          alt={content.title}
          className="w-full h-64 object-cover mb-6"
        />
        <div className="prose max-w-none">
          <p className="text-lg mb-4">{content.description}</p>
          <h2 className="text-xl font-semibold mb-2">Fitur Utama:</h2>
          <ul className="list-disc pl-5 mb-4">
            {content.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-2xl font-bold">Harga: Rp{content.price.toLocaleString()}</p>
        </div>
      </div>
    </Layout>
  );
}