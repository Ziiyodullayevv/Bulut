import { motion } from 'framer-motion';

export default function ScrollArrow() {
  return (
    <motion.img
      className='w-10'
      src='/arrow1.svg'
      alt='scroll arrow'
      animate={{ y: [0, -10, 0] }} // Yuqoriga va pastga harakat
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror', // Harakat uzluksiz bo‘lishi uchun
        ease: 'easeInOut',
      }}
    />
  );
}
