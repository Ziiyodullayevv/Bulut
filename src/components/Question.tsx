import { useCallback, useMemo, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { t } from 'i18next';
import MotionCard from './MotionCard';
import MotionText from './MotionText';
import { toast } from 'sonner';

export default function Question() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = async () => {
    const url = 'https://aberno-backend.ru/api/v1/leads/';

    if (!formData.name || !formData.email) {
      toast.error(t('toaster.requared'));
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      source: 'bulutpaper',
      status: 'new',
      isActive: true,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Server xatosi!');
      }

      toast.success(t('toaster.title'), { description: t('toaster.success') });
      setFormData({ name: '', email: '' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(t('toaster.title'), { description: t('toaster.error') });
    }
  };

  // **MotionText ni useMemo bilan optimallashtiramiz**
  const memoizedTitle = useMemo(() => {
    return (
      <MotionText
        as='h2'
        className='text-xl font-popins text-white font-bold max-w-3xl mb-12 sm:text-4xl'
      >
        {t('questions.title')}
      </MotionText>
    );
  }, []);

  return (
    <section className='py-10 sm:py-20 bg-[url(/question-bg.svg)] bg-right-bottom relative bg-c1 bg-no-repeat'>
      <div className='max-w-[1024px] relative z-10 mx-auto px-6'>
        {memoizedTitle}
        <div className='mx-auto w-full'>
          <div className='flex flex-col sm:flex-row mt-6 gap-4'>
            <MotionCard className='min-w-[241px]'>
              <Input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='h-12 bg-white sm:bg-transparent sm:text-white px-4 placeholder:text-gray-500 sm:placeholder:text-white'
                placeholder={t('questions.placeholder1')}
              />
            </MotionCard>

            <MotionCard className='min-w-[241px]'>
              <Input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='h-12 bg-white sm:bg-transparent sm:text-white px-4 placeholder:text-gray-500 sm:placeholder:text-white'
                placeholder={t('questions.placeholder2')}
              />
            </MotionCard>
          </div>
        </div>
        <MotionCard className='flex'>
          <Button
            className='h-12 w-full active:scale-90 box-shadow sm:w-[241px] text-base cursor-pointer mt-5'
            onClick={handleSubmit}
          >
            {t('questions.btn')}
          </Button>
        </MotionCard>
      </div>
    </section>
  );
}
