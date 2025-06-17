'use client';
import { Suspense } from 'react';
import DetailsUt1 from './Details-Ut1'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailUtPage() {
  return (
    <>
    <main>
      <FloatingChatPanel />
      <Suspense fallback={<div>Loading...</div>}>
          <DetailsUt1 />
      </Suspense>
    </main>
    </>
  );
}
