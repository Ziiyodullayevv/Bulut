import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(false), 1500); // 1.5 soniyada opacity tugaydi
  }, []);

  return (
    <div className='fixed left-0 right-0 bottom-0 flex flex-col gap-5 justify-center items-center top-0 bg-white'>
      {/* Logo va matn opacity faqat bir marta ishlaydi */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-2'
        >
          <img className='w-30' src='/loader.svg' alt='logo' />
          <h2 className='text-center text-c1 flex'>
            Loading
            <motion.span
              className='ml-1'
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            >
              .
            </motion.span>
            <motion.span
              className='ml-1'
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: 'linear',
                delay: 0.3,
              }}
            >
              .
            </motion.span>
            <motion.span
              className='ml-1'
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: 'linear',
                delay: 0.6,
              }}
            >
              .
            </motion.span>
          </h2>
        </motion.div>
      )}
    </div>
  );
}
