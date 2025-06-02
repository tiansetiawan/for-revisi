'use client';
import ProductA from './Product-a'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '../components/FloatingChatPanel';
import LoadingWrapper from "@/app/components/LoadingWrapper";

export default function ProdukPage() {
  return (
    <>
    <main>
      <LoadingWrapper>
      <FloatingChatPanel/>
    <ProductA />
    </LoadingWrapper>
    </main>
    </>
  );
}
