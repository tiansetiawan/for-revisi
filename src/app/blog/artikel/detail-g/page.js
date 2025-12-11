'use client';
import DetailG from './Detail-g';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailGPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <DetailG/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
