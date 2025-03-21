import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Har 3 sekundda almashtirish

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-20 relative text-black bg-center bg-no-repeat bg-cover min-h-[clamp(500px,calc(100dvh-80px),750px)] flex overflow-hidden'>
      {/* Rasmlar animatsiyasi */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentImage} // React yangi elementni qayta yaratadi
          initial={{ opacity: 0, scale: 1.05 }} // Boshlang‘ich (biroz kattaroq)
          animate={{ opacity: 1, scale: 1 }} // Ko‘rinish holati
          exit={{ opacity: 0, scale: 1 }} // Chiqib ketish holati
          transition={{ duration: 1.5, ease: 'easeInOut' }} // 1.5s silliq o'tish
          className='absolute inset-0 bg-center bg-no-repeat bg-cover'
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></motion.div>
      </AnimatePresence>

      {/* Shaffof overlay */}
      <span className='bg-white/30 backdrop-blur-sm absolute left-0 right-0 bottom-0 top-0'></span>

      {/* Kontent */}
      <div className='max-w-[1024px] mx-auto px-6 flex-1 flex relative z-10'>
        <div className='flex flex-col items-center gap-14 justify-evenly flex-1'>
          <div>
            <h1 className='text-5xl font-semibold leading-22 text-center'>
              Sanitariya-gigiyena qog'oz asosi, to'g'ridan-to'g'ri ishlab
              chiqaruvchidan.
            </h1>

            <div className='flex font-semibold text-black/80 mt-6 justify-center text-3xl gap-10'>
              <p>
                <strong className='font-bold'>100%</strong> Sellyulozadan
              </p>
              <p>
                Zichligi <strong className='font-bold'>15 g/m²</strong> –{' '}
                <strong className='font-bold'>24 g/m²</strong>
              </p>
            </div>
          </div>

          <div className='flex justify-center'>
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </section>
  );
}
