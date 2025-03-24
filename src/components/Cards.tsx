import { t } from 'i18next';
import { Dot } from 'lucide-react';

export default function Cards() {
  return (
    <section id='cards' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-4 sm:px-6'>
        {/* Birinchi bo‘lim */}
        <div className='grid grid-cols-12 gap-4 sm:gap-8 items-center'>
          <div className='h-[270px] sm:h-[350px] rounded-2xl overflow-hidden col-span-12 md:col-span-5'>
            <img className='w-full h-full' src='/2.jpg' alt='jpg' />
          </div>
          <div className='col-span-12 md:col-span-7 flex flex-col'>
            <h3 className='text-2xl sm:text-5xl mb-4'>
              {t('cards.card1.title')}
            </h3>
            <ol className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card1.desc1')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card1.desc2')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card1.desc3')}
              </li>
            </ol>
          </div>
        </div>

        {/* Ikkinchi bo‘lim */}
        <div className='grid grid-cols-12 mt-10 sm:mt-20 gap-4 sm:gap-8 items-center'>
          <div className='h-[270px] sm:h-[350px] rounded-2xl overflow-hidden col-span-12 md:col-span-5 md:order-last'>
            <img
              className='h-full w-full object-cover'
              src='/4.jpg'
              alt='jpg'
            />
          </div>

          <div className='col-span-12 md:col-span-7 flex flex-col'>
            <h3 className='text-2xl sm:text-5xl mb-4'>
              {t('cards.card2.title')}
            </h3>
            <ol className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc1')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc2')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc3')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc4')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('cards.card2.desc5')}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
