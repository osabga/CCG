import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

import Image1 from '../assets/products1.png';
import Image2 from '../assets/products2.png';
import Image3 from '../assets/products3.png';
import Image4 from '../assets/products4.png';

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <h1 className="text-center text-4xl font-bold text-purple-300 mt-12  lg:mb-[-1rem] ">{t('Products.Title')}</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-[-4rem] space-y-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ top: '0' }}>
            <img src={Image1} alt={t('Products.Product1.Name')} className="hexagon-image" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">{t('Products.Product1.Name')}</h2>
            <p className="text-xs text-gray-400">{t('Products.Product1.Description')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className='lg:mb-[8rem] flex flex-col items-center'>
            <div className="hexagon relative mb-6">
              <img src={Image2} alt={t('Products.Product2.Name')} className="hexagon-image" />
            </div>
            <div className="text-center ">
              <h2 className="text-sm font-bold text-white">{t('Products.Product2.Name')}</h2>
              <p className="text-xs text-gray-400">{t('Products.Product2.Description')}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="hexagon relative mb-6" style={{ top: '0' }}>
            <img src={Image3} alt={t('Products.Product3.Name')} className="hexagon-image" />
          </div>
          <div className="text-center">
            <h2 className="text-sm font-bold text-white">{t('Products.Product3.Name')}</h2>
            <p className="text-xs text-gray-400">{t('Products.Product3.Description')}</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
        <div className='lg:mb-[8rem] flex flex-col items-center'>
          <div className="hexagon relative mb-6 ">
            <img src={Image4} alt={t('Products.Product4.Name')} className="hexagon-image" />
          </div>
          <div className="text-center ">
            <h2 className="text-sm font-bold text-white">{t('Products.Product4.Name')}</h2>
            <p className="text-xs text-gray-400">{t('Products.Product4.Description')}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

