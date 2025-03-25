import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { t } from 'i18next';
import MotionCard from './MotionCard';
import MotionText from './MotionText';

export default function Question() {
  return (
    <section className='py-10 sm:py-20 relative bg-[url(/4.jpg)] bg-cover bg-center bg-no-repeat'>
      <span className='absolute left-0 right-0 bottom-0 bg-white/30 backdrop-blur-sm top-0'></span>
      <div className='max-w-[1024px] relative z-10 mx-auto px-6'>
        <MotionText className='text-xl max-w-3xl mb-12 sm:text-4xl'>
          {t('questions.title')}
        </MotionText>

        <div className='mx-auto w-full'>
          <div className='flex flex-col sm:flex-row mt-6 gap-4'>
            <MotionCard className='min-w-[241px]'>
              <Input
                type='text'
                className='h-12 px-4 bg-white placeholder:text-lg'
                placeholder={t('questions.placeholder1')}
              />
            </MotionCard>

            <MotionCard className='min-w-[241px]'>
              <Input
                className='h-12 bg-white px-4 placeholder:text-lg'
                type='text'
                placeholder={t('questions.placeholder2')}
              />
            </MotionCard>

            <MotionCard className='min-w-[241px]'>
              <Input
                className='h-12 px-4 bg-white placeholder:text-lg'
                type='text'
                placeholder={t('questions.placeholder3')}
              />
            </MotionCard>
          </div>
        </div>
        <MotionCard className='flex'>
          <Button className='h-12 w-full sm:w-[241px] text-lg cursor-pointer mt-5'>
            {t('questions.btn')}
          </Button>
        </MotionCard>
      </div>
    </section>
  );
}
