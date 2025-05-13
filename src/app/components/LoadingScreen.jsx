"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(
  () => import('lottie-react'), 
  { 
    ssr: false,
    loading: () => (
      <div className="w-[150px] h-[150px] bg-gray-100 rounded-lg animate-pulse" />
    )
  }
);

export default function LoadingScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Set timer untuk 3 detik
    const timer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 3000);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <Lottie 
        animationData={require('/public/animations/loading2.json')}
        loop={true}
        style={{ width: 330, height: 330 }} // Ukuran lebih kecil
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice',
          progressiveLoad: true
        }}
      />
    </div>
  );
}