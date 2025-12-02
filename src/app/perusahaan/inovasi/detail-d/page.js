'use client';
import Detailsd from './Details-d';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailsbPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <Detailsd/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
