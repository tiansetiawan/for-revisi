'use client';
import { Suspense } from 'react';
import DetailsPb2 from './Details-Pb2'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailPb2Page() {
  return (
    <>
    <main>
      <FloatingChatPanel />
            <Suspense fallback={<div>Loading...</div>}>
                <DetailsPb2 />
            </Suspense>
    </main>
    </>
  );
}
