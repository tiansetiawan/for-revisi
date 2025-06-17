'use client';
import { Suspense } from 'react';
import Details from './Details'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailPage() {
  return (
    <>
    <main>
      <FloatingChatPanel />
        <Suspense fallback={<div>Loading...</div>}>
    <Details />
    </Suspense>
    </main>
    </>
  );
}
