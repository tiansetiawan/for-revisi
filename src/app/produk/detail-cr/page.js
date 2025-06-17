'use client';
import { Suspense } from 'react';
import DetailsCr from './Details-cr'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailCrPage() {
  return (
    <>
    <main>
      <FloatingChatPanel />
 <Suspense fallback={<div>Loading...</div>}>
     <DetailsCr />
 </Suspense>
    </main>
    </>
  );
}
