// app/search/page.js
"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResults() {
      // Ganti dengan API call sebenarnya
      const mockData = [
        { id: 1, title: 'Concrete Roof', type: 'product', description: 'Produk atap beton berkualitas tinggi' },
        { id: 2, title: 'Paving Block', type: 'product', description: 'Berbagai model paving block untuk taman' },
        { id: 3, title: 'Artikel Terbaru', type: 'article', description: 'Informasi terbaru tentang konstruksi' },
        { id: 4, title: 'Inovasi Terbaru', type: 'article', description: 'Informasi terbaru tentang konstruksi' }
      ];
      
      const filtered = mockData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      
      setResults(filtered);
      setLoading(false);
    }

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="container mx-auto py-8 px-4">
<h1 className="text-2xl font-bold mb-6">{`Hasil pencarian untuk "${query}"`}</h1>
      
      {loading ? (
        <p>Memuat hasil...</p>
      ) : results.length > 0 ? (
        <div className="grid gap-4">
          {results.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-sm text-blue-500 mt-2">
                {item.type === 'product' ? 'Produk' : 'Artikel'}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Tidak ditemukan hasil untuk pencarian Anda.</p>
      )}
    </div>
  );
}