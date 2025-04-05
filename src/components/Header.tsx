import Selected from './Selected';
import DriwerComponent from './Drawer';
import { t } from 'i18next';

export default function Header() {
  const handleNavClick =
    (path: string | URL | null | undefined, id: string) =>
    (e: { preventDefault: () => void }) => {
      e.preventDefault(); // sahifa yangilanishini to‘xtatadi
      window.history.pushState(null, '', path); // URL'ni o‘zgartiradi
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <header className='h-20 font-popins text-c1 sticky top-0 bg-white z-50 shadow'>
      <div className='max-w-[1440px] h-full px-5 mx-auto md:px-5 lg:px-25'>
        <div className='flex h-full justify-between items-center'>
          <img className='w-25' src='/logo.svg' alt='logo' />

          <nav className='hidden lg:flex gap-10'>
            <a
              className='hover:text-black text-c1'
              href='/order'
              onClick={handleNavClick('/order', 'order')}
            >
              {t('header.a1')}
            </a>
            <a
              className='hover:text-black text-c1'
              href='/partners'
              onClick={handleNavClick('/partners', 'partners')}
            >
              {t('header.a2')}
            </a>
            <a
              className='hover:text-black text-c1'
              href='/about'
              onClick={handleNavClick('/about', 'about')}
            >
              {t('header.a3')}
            </a>
            <a
              className='hover:text-black text-c1'
              href='/contact'
              onClick={handleNavClick('/contact', 'contact')}
            >
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
