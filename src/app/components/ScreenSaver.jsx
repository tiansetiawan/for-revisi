"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ScreenSaver({ onComplete }) {
  const [show, setShow] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let fallbackTimer;

    const handleVideoEnd = () => {
      cleanup();
      setShow(false);
      onComplete?.();
    };

    const cleanup = () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
        video.pause();
      }
      clearTimeout(fallbackTimer);
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      
      // Gunakan promise untuk handle autoplay
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay berhasil
            console.log("Video autoplay started");
          })
          .catch(error => {
            console.error("Autoplay prevented:", error);
            // Fallback jika autoplay diblokir
            fallbackTimer = setTimeout(handleVideoEnd, 8000);
          });
      }
    }

    return cleanup;
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black  flex items-center justify-center">
        <Image
          src="/videos/party.gif"
          alt="banner sertifikasi"
          width={1764}
          height={460}
          className="scale-70 object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      <button 
        onClick={() => {
          videoRef.current?.pause();
          setShow(false);
          onComplete?.();
        }}
        className="absolute bottom-8 right-8 bg-white/30 text-white px-4 py-2 rounded-full hover:bg-white/40 transition"
      >
        Lewati
      </button>
    </div>
  );
}