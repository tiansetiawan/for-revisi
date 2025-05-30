'use client';
import Product from './Product'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '../components/FloatingChatPanel';
import LoadingWrapper from "@/app/components/LoadingWrapper";

export default function ProdukPage() {
  return (
    <>
    <main>
      <LoadingWrapper>
      <FloatingChatPanel/>
    <Product />
    </LoadingWrapper>
    </main>
    </>
  );
}
