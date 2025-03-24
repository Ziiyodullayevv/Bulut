import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { t } from 'i18next';

export default function Order() {
  return (
    <section id='order' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <div className='flex justify-center'>
          <h2 className='text-center max-w-xl sm:leading-14 text-2xl sm:text-5xl'>
            {t('order.title')}
          </h2>
        </div>

        <div className='flex flex-col mt-8 gap-8 items-center'>
          <Input
            className='h-12 sm:h-14 px-4 sm:placeholder:text-lg'
            type='text'
            placeholder={t('order.placeholder')}
          />
          <Button className='h-12 w-40 text-lg cursor-pointer'>
            {t('order.btn')}
          </Button>
        </div>
      </div>
    </section>
  );
}
