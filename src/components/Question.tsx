import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      toast.success(t('toaster.title'), { description: t('toaster.success') }); // Agar muvaffaqiyatli yuborilsa
      setFormData({ name: '', email: '' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(t('toaster.title'), { description: t('toaster.error') });
    }
  };

  return (
    <section className='py-10 sm:py-20 relative bg-[url(/4.jpg)] bg-cover bg-center bg-no-repeat'>
      <span className='absolute left-0 right-0 bottom-0 bg-white/30 backdrop-blur-sm top-0'></span>
      <div className='max-w-[1024px] relative z-10 mx-auto px-6'>
        <MotionText className='text-xl text-c1 font-bold max-w-3xl mb-12 sm:text-4xl'>
          {t('questions.title')}
        </MotionText>

        <div className='mx-auto w-full'>
          <div className='flex flex-col sm:flex-row mt-6 gap-4'>
            <MotionCard className='min-w-[241px]'>
              <Input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='h-12 px-4 bg-white placeholder:text-base'
                placeholder={t('questions.placeholder1')}
              />
            </MotionCard>

            <MotionCard className='min-w-[241px]'>
              <Input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='h-12 bg-white px-4 placeholder:text-base'
                placeholder={t('questions.placeholder2')}
              />
            </MotionCard>
          </div>
        </div>

        <MotionCard className='flex'>
          <Button
            className='h-12 w-full active:scale-90 hover:shadow-2xl sm:w-[241px] text-base cursor-pointer mt-5'
            onClick={handleSubmit}
          >
            {t('questions.btn')}
          </Button>
        </MotionCard>
      </div>
    </section>
  );
}
