import { t } from 'i18next';
import { Dot } from 'lucide-react';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function Cards() {
  return (
    <section id='cards' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-4 sm:px-6'>
        {/* Birinchi bo‘lim */}
        <div className='grid grid-cols-12 gap-4 sm:gap-8 items-center'>
          <MotionCard
            delay={0.5}
            className='h-[270px] sm:h-[350px] rounded-2xl overflow-hidden col-span-12 md:col-span-5'
          >
            <img className='w-full h-full' src='/2.jpg' alt='jpg' />
          </MotionCard>
          <div className='col-span-12 md:col-span-7 flex flex-col'>
            <MotionText className='text-2xl sm:text-5xl mb-4'>
              {t('cards.card1.title')}
            </MotionText>
            <div className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card1.desc1')}
              </MotionText>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card1.desc2')}
              </MotionText>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card1.desc3')}
              </MotionText>
            </div>
          </div>
        </div>

        {/* Ikkinchi bo‘MotionTextm */}
        <div className='grid grid-cols-12 mt-10 sm:mt-20 gap-4 sm:gap-8 items-center'>
          <MotionCard
            delay={0.5}
            className='h-[270px] sm:h-[350px] rounded-2xl overflow-hidden col-span-12 md:col-span-5 md:order-last'
          >
            <img
              className='h-full w-full object-cover'
              src='/4.jpg'
              alt='jpg'
            />
          </MotionCard>

          <div className='col-span-12 md:col-span-7 flex flex-col'>
            <MotionText className='text-2xl sm:text-5xl mb-4'>
              {t('cards.card2.title')}
            </MotionText>
            <ol className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc1')}
              </MotionText>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc2')}
              </MotionText>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc3')}
              </MotionText>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc4')}
              </MotionText>
              <MotionText className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc5')}
              </MotionText>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
