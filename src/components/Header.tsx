import Selected from './Selected';

export default function Header() {
  return (
    <header className='h-20 shadow'>
      <div className='container  h-full mx-auto px-20'>
        <div className='flex h-full justify-between items-center'>
          <img src='/logo.svg' alt='' />

          <nav className='flex gap-10'>
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

          <Selected />
        </div>
      </div>
    </header>
  );
}
