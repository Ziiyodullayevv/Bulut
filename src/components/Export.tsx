import { t } from 'i18next';
import WorldMap from './Map';
import MotionText from './MotionText';
import MotionCard from './MotionCard';
import { Helmet } from 'react-helmet-async';

export default function Export() {
  return (
    <section id='partners' className='py-10 bg-gray-50 sm:py-20'>
      {/* SEO QISMI */}
      <Helmet>
        <title>{t('export.title')} - Bulut Paper</title>
        <meta
          name='description'
          content='Bulut Paper mahsulotlari bir nechta davlatlarga eksport qilinmoqda. Hamkorlarimiz joylashgan davlatlarni xarita orqali ko‘ring.'
        />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Bulut Paper',
            description:
              'Bizning mahsulotlarimiz eksport qilinadigan hududlar.',
            url: 'https://bulutpaper.uz/partners',
            areaServed: [
              { '@type': 'Country', name: 'Uzbekistan' },
              { '@type': 'Country', name: 'Kazakhstan' },
              { '@type': 'Country', name: 'Russia' },
              { '@type': 'Country', name: 'Turkey' },
              // kerakli davlatlarni qo‘shishingiz mumkin
            ],
          })}
        </script>
      </Helmet>

      <div className='max-w-[1440px] mx-auto px-6 lg:px-25'>
        <MotionText
          as={'h2'}
          className='text-2xl font-popins font-bold text-c1 max-w-3xl sm:text-5xl'
        >
          {t('export.title')}
        </MotionText>

        <MotionCard className='overflow-hidden mt-8'>
          <WorldMap />
        </MotionCard>
      </div>
    </section>
  );
}
