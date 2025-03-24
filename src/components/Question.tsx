import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { t } from 'i18next';

export default function Question() {
  return (
    <section className='py-10 sm:py-20 relative bg-[url(/1.jpg)] bg-cover bg-center bg-no-repeat'>
      <span className='absolute left-0 right-0 bottom-0 bg-white/30 top-0 backdrop-blur-xl'></span>
      <div className='max-w-[1024px] relative z-10 mx-auto px-6'>
        <h2 className='text-xl text-center sm:text-start sm:text-4xl'>
          {t('questions.title')}
        </h2>

        <div className='flex flex-col sm:flex-row mt-6 gap-4'>
          <Input
            type='text'
            className='h-12 sm:h-14 px-4 bg-white placeholder:text-lg'
            placeholder={t('questions.placeholder1')}
          />

          <Input
            className='h-12 sm:h-14 bg-white px-4 placeholder:text-lg'
            type='text'
            placeholder={t('questions.placeholder2')}
          />

          <Input
            className='h-12 sm:h-14 px-4 bg-white placeholder:text-lg'
            type='text'
            placeholder={t('questions.placeholder3')}
          />
        </div>
        <Button className='h-12 sm:h-14 w-full sm:w-[315px] text-lg cursor-pointer mt-5'>
          {t('questions.btn')}
        </Button>
      </div>
    </section>
  );
}
