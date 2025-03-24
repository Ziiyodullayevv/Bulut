import { t } from 'i18next';
import { Dot } from 'lucide-react';

export default function About() {
  return (
    <section id='about' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
          {/* Rasm qismi */}
          <div className='rounded-2xl overflow-hidden md:col-span-5 flex justify-center'>
            <img
              className='w-full h-auto md:h-full object-cover'
              src='/4.jpg'
              alt='jpg'
            />
          </div>

          {/* Matn qismi */}
          <div className='md:col-span-7 flex flex-col justify-center'>
            <h3 className='text-2xl sm:text-5xl mb-4'>{t('about.title')}</h3>
            <ol className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('about.desc1')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('about.desc2')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('about.desc3')}
              </li>
              <li className='flex items-center gap-2'>
                <Dot className='w-6 h-6 flex-shrink-0' />
                {t('about.desc4')}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
