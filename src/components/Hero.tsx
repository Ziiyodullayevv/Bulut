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
          className='text-[34px] shadow-c1 text-shadow sm:text-6xl font-bold leading-14 sm:leading-22 text-center'
        >
          {t('hero.title')}
        </MotionText>

        <div className='flex flex-col sm:flex-row mt-10 text-center font-medium justify-center text-2xl md:text-3xl gap-5 sm:gap-10'>
          <MotionText className='sm:max-w-[320px] text-shadow' delay={0.4}>
            {t('hero.subTitle1')}
          </MotionText>
          <MotionText className='sm:max-w-[320px] text-shadow' delay={0.4}>
            {t('hero.subTitle2')}
          </MotionText>
        </div>
      </>
    ),
    []
  );

  return (
    <section className='sm:py-10 font-popins relative bg-c1 min-h-[calc(100dvh-80px)] sm:min-h-[clamp(500px,calc(100dvh-80px),600px)] flex flex-col overflow-hidden'>
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
      <span className='bg-c1/60 absolute inset-0 z-10'></span>

      {/* Kontent */}
      <div className='max-w-[1024px] mx-auto px-5 flex-1 flex relative z-10'>
        <div className='flex flex-col items-center gap-14 justify-evenly flex-1'>
          <div className='text-white'>{memoizedText}</div>{' '}
          {/* Faqat bir marta yaratilgan matn */}
          <div className='flex justify-center'>
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
}
