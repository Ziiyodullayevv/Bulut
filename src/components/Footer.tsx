import { t } from 'i18next';
import MotionText from './MotionText';

export default function Footer() {
  return (
    <footer id='contact' className='py-10 text-black'>
      <div className='max-w-[1024px] mx-auto px-5 md:px-10'>
        <MotionText
          as={'h2'}
          className='text-2xl font-popins font-bold text-c1 sm:text-4xl text-center'
        >
          {t('contacts.title')}
        </MotionText>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-30 justify-center mt-5 sm:mt-10'>
          <div className='text-center'>
            <MotionText className='text-lg text-c1 sm:text-2xl'>
              {t('contacts.desc1')}
            </MotionText>
            <a
              className='text-lg hover:text-[#495aa1]'
              href='tel:+998953247070'
            >
              +998953247070
            </a>
          </div>

          <div className='text-center'>
            <MotionText className='text-lg text-c1 sm:text-2xl'>
              {t('contacts.desc2')}
            </MotionText>
            <a
              className='text-lg hover:text-[#495aa1]'
              href='tel:+998953247070'
            >
              +998953247070
            </a>
          </div>

          <div className='text-center'>
            <MotionText className='text-lg  text-c1 sm:text-2xl'>
              {t('contacts.desc3')}
            </MotionText>
            <a
              className='text-lg hover:text-[#495aa1]'
              href='mailto:bulut_info@mail.ru'
            >
              bulut_info@mail.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
