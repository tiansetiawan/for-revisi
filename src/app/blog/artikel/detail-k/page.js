'use client';
import DetailK from './Detail-k';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailKPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <DetailK/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
