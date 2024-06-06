import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

import Image2 from '../assets/producto2.jpg';
import Image3 from '../assets/producto3.jpg';
import Image4 from '../assets/producto4.jpg';
import Image5 from '../assets/producto5.jpg';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <h1 className="text-center text-4xl font-bold text-purple-300 mt-12 lg:mb-[-1rem]">{t('Services.Title')}</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-[-4rem] space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
        <div className="hexagon relative mb-6" style={{ width: '20vw', height: '17.32vw' }}>
            <img src={Image2} alt={t('Services.Service1.Name')} className="hexagon-image" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">{t('Services.Service1.Name')}</h2>
            <p className="text-xs text-gray-400">{t('Services.Service1.Description')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className='lg:mb-[8rem] flex flex-col items-center'>
            <div className="hexagon relative mb-6" style={{ width: '20vw', height: '17.32vw' }}>
              <img src={Image3} alt={t('Services.Service2.Name')} className="hexagon-image" />
            </div>
            <div className="text-center">
              <h2 className="text-sm font-bold text-white">{t('Services.Service2.Name')}</h2>
              <p className="text-xs text-gray-400">{t('Services.Service2.Description')}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ width: '20vw', height: '17.32vw' }}>
            <img src={Image4} alt={t('Services.Service3.Name')} className="hexagon-image" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">{t('Services.Service3.Name')}</h2>
            <p className="text-xs text-gray-400">{t('Services.Service3.Description')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className='lg:mb-[8rem] flex flex-col items-center'>
            <div className="hexagon relative mb-6" style={{ width: '20vw', height: '17.32vw' }}>
              <img src={Image5} alt={t('Services.Service4.Name')} className="hexagon-image" />
            </div>
            <div className="text-center">
              <h2 className="text-sm font-bold text-white">{t('Services.Service4.Name')}</h2>
              <p className="text-xs text-gray-400">{t('Services.Service4.Description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
