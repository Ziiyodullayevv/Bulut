import { useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { t } from 'i18next';
import MotionText from './MotionText';
import MotionCard from './MotionCard';
import { toast } from 'sonner';

export default function Order() {
  const [formData, setFormData] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async () => {
    const url = 'https://aberno-backend.ru/api/v1/leads/';

    if (!formData) {
      toast.error(t('toaster.requared'));
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Calculate Button',
          email: formData,
          source: 'bulutpaper',
          status: 'new',
          isActive: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Server xatosi!');
      }

      toast.success(t('toaster.title'), { description: t('toaster.success') });
      setFormData('');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(t('toaster.title'), { description: t('toaster.error') });
    }
  };

  const OrderTitle = useMemo(
    () => (
      <MotionText
        as={'h2'}
        className='text-center font-popins text-c1 font-bold max-w-2xl sm:leading-14 text-2xl sm:text-5xl'
      >
        {t('order.title')}
      </MotionText>
    ),
    []
  );

  return (
    <section id='order' className='py-10 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <div className='flex justify-center'>{OrderTitle}</div>

        <div className='flex flex-col mt-8 gap-8 items-center'>
          <MotionCard className='w-full flex justify-center'>
            <Input
              className='h-12 max-w-md placeholder:text-center px-4 sm:placeholder:text-base'
              type='text'
              value={formData}
              onChange={handleChange}
              placeholder={t('order.placeholder')}
            />
          </MotionCard>

          <MotionCard className='w-full flex justify-center'>
            <Button
              className='h-12 box-shadow active:scale-90 w-55 text-base cursor-pointer'
              onClick={handleSubmit}
            >
              {t('order.btn')}
            </Button>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
