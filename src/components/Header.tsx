import Selected from './Selected';
import DriwerComponent from './Drawer';
import { t } from 'i18next';

export default function Header() {
  return (
    <header className='h-20 text-c1 sticky top-0 bg-white z-50 shadow'>
      <div className='max-w-[1440px] h-full px-5 mx-auto md:px-5 lg:px-25'>
        <div className='flex h-full justify-between items-center'>
          <img className='w-25' src='/logo.svg' alt='logo' />

          <nav className='hidden lg:flex gap-10'>
            <a className='hover:text-black text-c1' href='#order'>
              {t('header.a1')}
            </a>
            <a className='hover:text-black text-c1' href='#partners'>
              {t('header.a2')}
            </a>
            <a className='hover:text-black text-c1' href='#about'>
              {t('header.a3')}
            </a>
            <a className='hover:text-black text-c1' href='#contact'>
              {t('header.a4')}
            </a>
          </nav>

          <div className='hidden lg:block'>
            <Selected width='130px' height='40px' />
          </div>

          <div className='block lg:hidden'>
            <DriwerComponent />
          </div>
        </div>
      </div>
    </header>
  );
}
