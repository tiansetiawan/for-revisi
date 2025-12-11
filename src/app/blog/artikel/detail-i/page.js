'use client';
import DetailI from './Detail-i';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailIPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <DetailI/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
