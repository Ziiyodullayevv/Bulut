import { t } from 'i18next';
import WorldMap from './Map';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function Export() {
  return (
    <section id='partners' className='py-10 bg-gray-50 sm:py-20'>
      <div className='max-w-[1440px] mx-auto px-6 lg:px-25'>
        <MotionText className='text-2xl max-w-2xl sm:text-5xl'>
          {t('export.title')}
        </MotionText>

        <MotionCard className='flex rounded-2xl min-h-[270px] sm:rounded-4xl items-center mt-8 justify-center'>
          <div className='h-full mt-[5%] -mb-[18%] w-full'>
            <WorldMap />
          </div>
        </MotionCard>
      </div>
    </section>
  );
}
