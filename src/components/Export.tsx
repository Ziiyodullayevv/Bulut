import { t } from 'i18next';
import WorldMap from './Map';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function Export() {
  return (
    <section id='partners' className='py-10 bg-gray-50 sm:py-20'>
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
