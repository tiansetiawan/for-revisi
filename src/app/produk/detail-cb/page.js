'use client';
import { Suspense } from 'react';
import DetailsCb from './Details-Cb';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailCbPage() {
  return (
    <main>
      <FloatingChatPanel />
      <Suspense fallback={<div>Loading...</div>}>
        <DetailsCb />
      </Suspense>
    </main>
  );
}