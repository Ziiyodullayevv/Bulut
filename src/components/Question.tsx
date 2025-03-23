import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

export default function Question() {
  return (
    <section className='py-10 sm:py-20 relative bg-[url(/1.jpg)] bg-cover bg-center bg-no-repeat'>
      <span className='absolute left-0 right-0 bottom-0 bg-white/30 top-0 backdrop-blur-xl'></span>
      <div className='max-w-[1024px] relative z-10 mx-auto px-6'>
        <h2 className='text-xl text-center sm:text-start sm:text-4xl'>
          Buyurtmangiz narxini hisoblab beramiz va barcha savollaringiz bo‘yicha
          maslahat beramiz.
        </h2>

        <div className='flex flex-col sm:flex-row mt-6 gap-4'>
          <Input
            type='text'
            className='h-12 sm:h-14 px-4 bg-white placeholder:text-lg'
            placeholder='Ism'
          />

          <Input
            className='h-12 sm:h-14 bg-white px-4 placeholder:text-lg'
            type='text'
            placeholder='Whatsapp/telegram'
          />

          <Input
            className='h-12 sm:h-14 px-4 bg-white placeholder:text-lg'
            type='text'
            placeholder='Gmail'
          />
        </div>
        <Button className='h-12 sm:h-14 w-full sm:w-[315px] text-lg cursor-pointer mt-5'>
          Yuborish
        </Button>
      </div>
    </section>
  );
}
