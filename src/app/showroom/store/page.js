'use client';
import Store from './Store';
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function StorePage() {
  return (
    <>
    <main>
    <FloatingChatPanel />
    <Store/>
    </main>
    </>
  );
}
