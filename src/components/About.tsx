import { t } from 'i18next';
// import { Dot } from 'lucide-react';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function About() {
  return (
    <section id='about' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
          {/* Rasm qismi */}
          <MotionCard
            delay={0.5}
            className='rounded-2xl min-h-[270px] overflow-hidden md:col-span-5 flex justify-center'
          >
            <img
              className='w-full h-auto md:h-full object-cover'
              src='/1.jpg'
              alt='Bulut Paper mahsuloti'
            />
          </MotionCard>

          {/* Matn qismi */}
          <div className='md:col-span-7 flex text-black flex-col justify-center'>
            <MotionText className='text-2xl text-c1 font-bold sm:text-5xl mb-4'>
              {t('about.title')}
            </MotionText>
            <div className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              <MotionText delay={0.3} className='flex items-center gap-2'>
                {/* <Dot className='w-6 h-6 flex-shrink-0' /> */}
                {t('about.desc1')}
              </MotionText>
              <MotionText delay={0.4} className='flex items-center gap-2'>
                {/* <Dot className='w-6 h-6 flex-shrink-0' /> */}
                {t('about.desc2')}
              </MotionText>
              <MotionText delay={0.5} className='flex items-center gap-2'>
                {/* <Dot className='w-6 h-6 flex-shrink-0' /> */}
                {t('about.desc3')}
              </MotionText>
              <MotionText delay={0.6} className='flex items-center gap-2'>
                {/* <Dot className='w-6 h-6 flex-shrink-0' /> */}
                {t('about.desc4')}
              </MotionText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
