'use client';
import Product from './Product'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '../components/FloatingChatPanel';

export default function ProdukPage() {
  return (
    <>
    <main>
      <FloatingChatPanel/>
    <Product />
    </main>
    </>
  );
}
