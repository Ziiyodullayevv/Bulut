import { motion } from 'framer-motion';
import { ElementType } from 'react';

type MotionTextProps = {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function MotionText({
  children,
  as: Component = 'div', // Default 'div', lekin istalgan tag bilan almashtirish mumkin
  className = '',
  delay = 0.2,
  duration = 1,
}: MotionTextProps) {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
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
    </MotionComponent>
  );
}
