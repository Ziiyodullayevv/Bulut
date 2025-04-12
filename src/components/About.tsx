import { t } from 'i18next';
import { Helmet } from 'react-helmet-async';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function About() {
  return (
    <>
      <Helmet>
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Bulut Paper',
            url: 'https://bulutpaper.uz', // Saytingiz URL'ini bu yerga qo'ying
            logo: 'https://bulutpaper.uz/logo.png', // Logoning URL manzili
            sameAs: [
              'https://www.facebook.com/bulutpaper',
              'https://www.instagram.com/bulutpaper',
              // Ijtimoiy tarmoqlaringizni shu yerga qo'shing
            ],
            description:
              'Bulut Paper — ekologik toza va yuqori sifatli qog‘oz mahsulotlari ishlab chiqaruvchi kompaniya.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Namuna ko‘chasi 10',
              addressLocality: 'Toshkent',
              postalCode: '100000',
              addressCountry: 'UZ',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+998901234567',
              contactType: 'customer service',
              areaServed: 'UZ',
              availableLanguage: ['Uzbek', 'Russian'],
            },
          })}
        </script>
      </Helmet>

      <section id='about' className='py-10 sm:py-20'>
        <div className='max-w-[1024px] mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-8'>
            {/* Rasm qismi */}
            <MotionCard
              delay={0.5}
              className='rounded-2xl min-h-[270px] overflow-hidden md:col-span-5 flex justify-center'
            >
              <img
                className='w-full h-auto md:h-full object-cover'
                src='/1.jpg'
                alt='Bulut Paper mahsuloti'
              />
            </MotionCard>

            {/* Matn qismi */}
            <div className='md:col-span-7 flex text-black flex-col justify-center'>
              <MotionText
                as='h2'
                className='text-2xl font-popins text-c1 font-bold sm:text-5xl mb-4'
              >
                {t('about.title')}
              </MotionText>
              <div className='flex flex-col text-lg sm:text-xl gap-4 sm:gap-6 mt-3 sm:mt-5'>
                <MotionText
                  as='p'
                  delay={0.3}
                  className='flex items-center gap-2'
                >
                  {t('about.desc1')}
                </MotionText>
                <MotionText
                  as='p'
                  delay={0.4}
                  className='flex items-center gap-2'
                >
                  {t('about.desc2')}
                </MotionText>
                <MotionText
                  as='p'
                  delay={0.5}
                  className='flex items-center gap-2'
                >
                  {t('about.desc3')}
                </MotionText>
                <MotionText
                  as='p'
                  delay={0.6}
                  className='flex items-center gap-2'
                >
                  {t('about.desc4')}
                </MotionText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
