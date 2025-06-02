'use client';
import Details from './DetailsMajestic'; // pastikan ini cocok dengan nama file & export
import FloatingChatPanel from '@/app/components/FloatingChatPanel';

export default function DetailPage() {
  return (
    <>
    <main>
      <FloatingChatPanel />
    <Details />
    </main>
    </>
  );
}
