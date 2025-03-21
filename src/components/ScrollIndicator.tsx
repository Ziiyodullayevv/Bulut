import { motion } from 'framer-motion';

export default function ScrollArrow() {
  return (
    <>
      {/* SVG ni belgilash */}
      <svg style={{ display: 'none' }}>
        <symbol id='dot-arrow' viewBox='0 0 50 30'>
          <circle cx='5' cy='5' r='3' fill='black' />
          <circle cx='15' cy='12' r='3' fill='black' />
          <circle cx='25' cy='20' r='3' fill='black' />
          <circle cx='35' cy='12' r='3' fill='black' />
          <circle cx='45' cy='5' r='3' fill='black ' />
          <circle cx='55' cy='12' r='3' fill='black' />
        </symbol>
      </svg>

      {/* Animatsiyali o‘qcha */}
      <motion.svg
        style={{ width: '60px', height: '35px' }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <use href='#dot-arrow' />
      </motion.svg>
    </>
  );
}
