export default function Footer() {
  return (
    <footer className='py-10'>
      <div className='max-w-[1024px] mx-auto px-5 md:px-10'>
        <h2 className='text-2xl sm:text-4xl text-center'>
          Bizning kontaktlar:
        </h2>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 justify-between mt-5 sm:mt-10'>
          <div className='text-center'>
            <h4 className='text-lg sm:text-2xl mb-2 font-semibold'>
              whatsapp:
            </h4>
            <a
              className='text-lg hover:text-[#495aa1]'
              href='tel:+998953247070'
            >
              +998953247070
            </a>
          </div>

          <div className='text-center'>
            <h4 className='text-lg sm:text-2xl mb-2 font-semibold'>
              telegram:
            </h4>
            <a
              className='text-lg hover:text-[#495aa1]'
              href='tel:+998953247070'
            >
              +998953247070
            </a>
          </div>

          <div className='text-center'>
            <h4 className='text-lg sm:text-2xl mb-2 font-semibold'>
              elektron pochta:
            </h4>
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
