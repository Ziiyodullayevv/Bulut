import { motion } from 'framer-motion';

type MotionTextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function MotionText({
  children,
  className = '',
  delay = 0.2,
  duration = 1,
}: MotionTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: [20, -5, 0] }} // Sakrash effekti
      transition={{
        duration,
        delay,
        ease: [0.42, 0, 0.58, 1], // Yumshoq o'tish
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
