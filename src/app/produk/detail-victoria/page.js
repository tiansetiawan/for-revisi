'use client';
import { Suspense } from 'react';
import DetailsVS from './Details-Victoria'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailVSPage() {
  return (
    <>
    <main>
      <FloatingChatPanel />
<Suspense fallback={<div>Loading...</div>}>
    <DetailsVS />
</Suspense>
    </main>
    </>
  );
}
