import Header from '../components/Header';
import SpaceCatImage from '../assets/SpaceCat.png';
import CardSection from '../components/CardSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='bg-gradient-to-F'>
      <Header />
      <section className="bg-gradient-to-F text-white flex flex-col lg:flex-row justify-between items-center p-10 lg:space-x-72 mb-[5rem] lg:mb-[-10rem]">
        <div className=" w-full lg:w-[50vw] lg:mt-[-15rem] lg:mb-0">
          <h1 className="hero-title">{t('welcome')}</h1>
          <img className=" h-[40vh] lg:hidden mb-4 mt-[-100px]" src={SpaceCatImage} alt="Space Cat" />

          <p className="text-[1rem] sm:text-[0.875rem]">
            {t('introduction')}
          </p>
          <div className="relative flex items-center mt-4 ">
            <div className="hero-blur absolute inset-0 rounded-full" />
            <Link to='/Signup'>
              <button className="admin-button relative z-10 px-6 ">
                {t('get_started')}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center h-screen justify-center lg:flex hidden">
          <div className="hero-image-blur absolute inset-0" />
          <img className="mt-[12rem] h-[55vh] max-w-none" src={SpaceCatImage} alt="Space Cat" style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }} />
        </div>
      </section>
      <CardSection />
    </div>
  );
};

export default Home;
