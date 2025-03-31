import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';
import { t } from 'i18next';
import MotionText from './MotionText';

const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // MotionText komponentlarini faqat bir marta yaratish
  const memoizedText = useMemo(
    () => (
      <>
        <MotionText
          as={'h1'}
          className='text-5xl text-c1 font-popins stoke-text sm:text-6xl font-bold leading-14 sm:leading-22 text-center'
        >
          {t('hero.title')}
        </MotionText>

        <div className='flex flex-col sm:flex-row mt-10 text-center font-bold text-black/80 justify-center text-xl md:text-2xl gap-5 sm:gap-10'>
          <MotionText delay={0.4}>{t('hero.subTitle1')}</MotionText>
          <MotionText delay={0.4}>{t('hero.subTitle2')}</MotionText>
        </div>
      </>
    ),
    []
  );

  return (
    <section className='sm:py-20 relative bg-c2 min-h-[clamp(500px,calc(100dvh-80px),950px)] flex flex-col overflow-hidden'>
      {/* Rasmlar animatsiyasi */}
      <div className='absolute inset-0 flex items-center justify-center overflow-hidden'>
        {images.map((img, index) => (
          <motion.img
            key={img}
            src={img}
            alt='Hero background'
            className='absolute inset-0 w-full h-full object-cover'
            style={{ zIndex: index === currentImage ? 1 : 0 }}
            animate={{
              opacity: index === currentImage ? 1 : 0,
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Shaffof overlay */}
      <span className='bg-c2/40 absolute inset-0 z-10'></span>

      {/* Kontent */}
      <div className='max-w-[1024px] mx-auto px-5 flex-1 flex relative z-10'>
        <div className='flex flex-col items-center gap-14 justify-evenly flex-1'>
          <div>{memoizedText}</div> {/* Faqat bir marta yaratilgan matn */}
          <div className='flex justify-center'>
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
}
