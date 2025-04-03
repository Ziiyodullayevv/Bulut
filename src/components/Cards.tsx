import { t } from 'i18next';
import { Dot } from 'lucide-react';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function Cards() {
  return (
    <section id='cards' className='py-10 sm:py-20'>
      <div className='max-w-[800px] mx-auto px-6'>
        {/* Birinchi bo‘lim */}
        <div className='grid grid-cols-12 gap-4 sm:gap-8 items-center'>
          <MotionCard
            delay={0.5}
            className='h-[270px] group sm:h-[350px] rounded-2xl overflow-hidden col-span-12 md:col-span-5'
          >
            <img
              className='w-full group-hover:scale-110 transition-transform h-full object-cover'
              src='/2.jpg'
              alt='Bulut Paper maxsus dizayndagi qog‘oz mahsuloti'
            />
          </MotionCard>
          <div className='col-span-12 text-black md:col-span-7 flex flex-col'>
            <MotionText
              as='h2'
              className='text-2xl text-c1 font-bold sm:text-5xl mb-4'
            >
              {t('cards.card1.title')}
            </MotionText>
            <ul className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              {[1, 2, 3].map((num) => (
                <li key={num} className='flex items-center gap-2'>
                  <MotionCard delay={0.5}>
                    <Dot className='w-6 h-6 flex-shrink-0' />
                  </MotionCard>
                  <MotionText as='p'>{t(`cards.card1.desc${num}`)}</MotionText>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ikkinchi bo‘lim */}
        <div className='grid grid-cols-12 mt-10 sm:mt-20 gap-4 sm:gap-8 items-center'>
          <MotionCard
            delay={0.5}
            className='h-[270px] sm:h-[350px] group rounded-2xl overflow-hidden col-span-12 md:col-span-5 md:order-last'
          >
            <img
              className='h-full w-full group-hover:scale-110 transition-transform object-cover'
              src='/4.jpg'
              alt='Bulut Paper ekologik toza qog‘oz mahsuloti'
            />
          </MotionCard>

          <div className='col-span-12 text-black md:col-span-7 flex flex-col'>
            <MotionText
              as='h2'
              className='text-2xl text-c1 font-bold sm:text-5xl mb-4'
            >
              {t('cards.card2.title')}
            </MotionText>
            <ul className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className='flex items-center gap-2'>
                  <MotionCard delay={0.5}>
                    <Dot className='w-6 h-6 flex-shrink-0' />
                  </MotionCard>
                  <MotionText as='p'>{t(`cards.card2.desc${num}`)}</MotionText>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
