import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Img3 from '../assets/img3.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CardSection = () => {
  const { t } = useTranslation();

  const cardInfo = [
    {
      title: t('products_title'),
      description: t('products_description'),
      imgSrc: Img1,
      buttonText: t('learn_more'),
      link: '/Products'
    },
    {
      title: t('services_title'),
      description: t('services_description'),
      imgSrc: Img2,
      buttonText: t('explore_now'),
      link: '/Services'
    },
    {
      title: t('faqs_title'),
      description: t('faqs_description'),
      imgSrc: Img3,
      buttonText: t('view_faqs'),
      link: '/FrequentlyQuestions'
    }
  ];

  return (
    <div className="px-4 py-10 bg-bg-gradient-to-F lg:h-[90vh] mt-10 h-[210vh] flex flex-col items-center">
      <div className='separator-outline'/>
      <div className="container mx-auto separator-background">
        <div className="flex flex-wrap justify-center items-center">
          {cardInfo.map((card, index) => (
            <div key={index} className="p-6 m-4 custom-blur-background rounded-lg shadow-md space-y-4 w-full md:w-1/4">
              <img src={card.imgSrc} alt={card.title} className="rounded-lg mb-4" />
              <div className='custom-line mt-[280px] lg:mt-0'/>
              <h3 className="text-xl text-white">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.description}</p>
              <Link to={card.link}>
                <button className="custom-button text-white py-2 px-4 rounded hover:bg-purple-800 transition-colors duration-300">
                  {card.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
