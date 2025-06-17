'use client';
import { Suspense } from 'react';
import DetailsPb from './Details-Pb'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailPbPage() {
  return (
    <>
    <main>
      <FloatingChatPanel />
            <Suspense fallback={<div>Loading...</div>}>
                <DetailsPb />
            </Suspense>
    </main>
    </>
  );
}
