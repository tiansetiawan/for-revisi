"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ScreenSaver from './ScreenSaver';

export default function LoadingWrapper({ children }) {
  const [loadingState, setLoadingState] = useState({
    isLoading: true,
    isExiting: false
  });
  const pathname = usePathname();

  useEffect(() => {
    // Reset state saat route berubah
    setLoadingState({ isLoading: true, isExiting: false });

    const timer = setTimeout(() => {
      // Trigger fade out animation
      setLoadingState(prev => ({ ...prev, isExiting: true }));
      
      // Wait for animation to complete before hiding
      const completeTimer = setTimeout(() => {
        setLoadingState({ isLoading: false, isExiting: false });
      }, 500); // Match this with fadeOut duration
      
      return () => clearTimeout(completeTimer);
    }, 10000); // Total durasi sebelum fade out (10 detik)

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {loadingState.isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: loadingState.isExiting ? 0 : 1,
              transition: { duration: 0.5 }
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="screensaver"
          >
            <ScreenSaver 
              onComplete={() => {
                setLoadingState(prev => ({ ...prev, isExiting: true }));
                setTimeout(() => {
                  setLoadingState({ isLoading: false, isExiting: false });
                }, 500);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loadingState.isLoading && children}
    </>
  );
}