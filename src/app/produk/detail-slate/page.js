'use client';
import Details from './DetailsSlate'; // pastikan ini cocok dengan nama file & export
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
