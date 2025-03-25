import { t } from 'i18next';
import WorldMap from './Map';
import MotionText from './MotionText';
import MotionCard from './MotionCard';

export default function Export() {
  return (
    <section id='partners' className='py-10 bg-gray-50 sm:py-20'>
      <div className='max-w-[1024px] mx-auto px-6'>
        <MotionText className='text-2xl max-w-2xl sm:text-5xl'>
          {t('export.title')}
        </MotionText>

        <MotionCard className='flex border bg-white border-solid border-gray-300 rounded-2xl min-h-[250px] sm:rounded-4xl items-center mt-8 justify-center'>
          <div className='-ml-[7%] -mt-[5%] -mb-[12%] h-full w-full'>
            <WorldMap />
          </div>
        </MotionCard>
      </div>
    </section>
  );
}
