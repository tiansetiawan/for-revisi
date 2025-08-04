'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../style/FadeBannerSlider.module.css';

const FadeBannerSlider = ({ 
  slides = [], 
  currentSlide = 0,
  autoPlayDelay = 5000,
  onSlideChange,
  onSlideClick
}) => {
  const sliderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  const handleSlideClick = (url) => {
    setIsPlaying(false);
    if (onSlideClick) {
      onSlideClick(url);
    }
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const settings = {
    ref: sliderRef,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: autoPlayDelay,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    afterChange: (index) => onSlideChange(index),
  };

  if (!slides.length) return null;

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id || slide.image} className={styles.slide}>
            <div 
              className={styles.imageContainer}
              onClick={() => handleSlideClick(slide.url)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Gambar Desktop (hidden di mobile) */}
              <Image 
                src={slide.image}
                alt={slide.alt || slide.title || 'Banner Desktop'} 
                width={1765}
                height={823}
                className={`${styles.bannerImage} cursor-pointer hidden md:block`}
                priority={index === 0}
              />
              
              {/* Gambar Mobile (hidden di desktop) */}
              <Image 
                src={slide.mobileImage || slide.image} // Fallback ke gambar desktop jika mobileImage tidak ada
                alt={slide.alt || slide.title || 'Banner Mobile'} 
                width={430}
                height={621}
                className={`${styles.bannerImage} cursor-pointer md:hidden`}
                priority={index === 0}
              />

              {/* Location Overlay */}
              {slide.location && (
                <motion.div 
                  className={styles.locationOverlay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: isHovered ? 1.05 : 1 
                  }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className={styles.locationText}
                  >
                    {slide.location}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FadeBannerSlider;