'use client';
import FadeBannerSlider from './FadeBannerSliderProduct';

export default function HeroSection({ 
  slides = [], 
  currentSlide = 0,
  autoPlayDelay = 5000,
  onSlideChange
}) {
  if (!slides.length) return null;

  return (
    <div className="relative w-full h-[823px] overflow-hidden mt-[5.8rem] mb-[-14rem]">
      <FadeBannerSlider 
        slides={slides}
        currentSlide={currentSlide}
        autoPlayDelay={autoPlayDelay}
        onSlideChange={onSlideChange}
      />
    </div>
  );
}