import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Order() {
  return (
    <section className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <div className='flex justify-center'>
          <h2 className='text-center max-w-xl sm:leading-14 text-2xl sm:text-5xl'>
            Buyurtmangizning narxini hisoblash.
          </h2>
        </div>

        <div className='flex flex-col mt-8 gap-8 items-center'>
          <Input
            className='h-12 sm:h-14 px-4 sm:placeholder:text-lg'
            type='text'
            placeholder='Sizning kontaktlaringiz whatsapp/telegram/gmail'
          />
          <Button className='h-12 w-40 text-lg cursor-pointer'>
            Hisoblash
          </Button>
        </div>
      </div>
    </section>
  );
}
