import { motion } from 'framer-motion';

type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function MotionCard({
  children,
  className = '',
  delay = 0.2,
  duration = 0.8,
}: MotionCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }} // Boshlang‘ich holat
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Ko‘rinish holati
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth harakat
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
