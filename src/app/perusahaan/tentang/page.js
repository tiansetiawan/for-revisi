'use client';
import Tentang from './Tentang';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapper from "@/app/components/LoadingWrapper";

export default function TentangPage() {
  return (
    <>
    <main>
      <LoadingWrapper>
      <FloatingChatPanel />
    <Tentang />
    </LoadingWrapper>
    </main>
    </>
  );
}
