"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FullscreenScreenSaver({ onComplete }) {
  const videoRef = useRef(null);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onComplete?.();
  };

  useEffect(() => {
    const video = videoRef.current;
    let fallbackTimer;

    const handleVideoEnd = () => {
      onComplete?.();
    };

    if (video) {
      video.addEventListener('ended', handleVideoEnd);
      
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video autoplay started");
          })
          .catch(error => {
            console.error("Autoplay prevented:", error);
            fallbackTimer = setTimeout(onComplete, 15000);
          });
      }
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop={false}
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/50th Aniv.mp4" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>
      
      <motion.button 
        onClick={handleSkip}
        className="absolute bottom-8 right-8 bg-white/30 text-white px-6 py-3 rounded-full hover:bg-white/40 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        Lewati
      </motion.button>
    </div>
  );
}