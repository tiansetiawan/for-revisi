'use client';
import DetailJ from './Detail-j';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailAPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <DetailJ/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
