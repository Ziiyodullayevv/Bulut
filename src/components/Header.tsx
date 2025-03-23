import Selected from './Selected';
import DriwerComponent from './Drawer';

export default function Header() {
  return (
    <header className='h-20 shadow'>
      <div className='max-w-[1440px] h-full px-5 mx-auto md:px-5 lg:px-10'>
        <div className='flex h-full justify-between items-center'>
          <img className='w-25' src='/logo.svg' alt='logo' />

          <nav className='hidden lg:flex gap-10'>
            <a className='hover:text-black text-gray-700' href='#'>
              Buyurtma qilish
            </a>
            <a className='hover:text-black text-gray-700' href='#'>
              Hamkorlarimiz
            </a>
            <a className='hover:text-black text-gray-700' href='#'>
              Biz haqimizda
            </a>
            <a className='hover:text-black text-gray-700' href='#'>
              Bog‘lanish
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
