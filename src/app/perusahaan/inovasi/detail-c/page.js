'use client';
import Detailsc from './Details-c';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';
import LoadingWrapperF from '@/app/components/LoadingWrapperFade';

export default function DetailscPage() {
  return (
    <>
    <main>
      <LoadingWrapperF>
    <FloatingChatPanel />
    <Detailsc/>
    </LoadingWrapperF>
    </main>
    </>
  );
}
