import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { t } from 'i18next';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function Order() {
  return (
    <section id='order' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <div className='flex justify-center'>
          <MotionText className='text-center max-w-3xl sm:leading-14 text-2xl sm:text-5xl'>
            {t('order.title')}
          </MotionText>
        </div>

        <div className='flex flex-col mt-8 gap-8 items-center'>
          <MotionCard className='w-full flex justify-center'>
            <Input
              className='h-12 max-w-xl px-4 sm:placeholder:text-lg'
              type='text'
              placeholder={t('order.placeholder')}
            />
          </MotionCard>

          <MotionCard className='w-full flex justify-center'>
            <Button className='h-12 w-40 text-lg cursor-pointer'>
              {t('order.btn')}
            </Button>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
