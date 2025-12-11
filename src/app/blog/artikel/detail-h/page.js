'use client';
import DetailH from './Detail-h';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailHPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <DetailH/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
