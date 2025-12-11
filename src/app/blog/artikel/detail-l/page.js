'use client';
import DetailL from './Detail-l';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailLPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <DetailL/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
