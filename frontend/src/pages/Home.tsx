import Header from '../components/Header';
import SpaceCatImage from '../assets/SpaceCat.png';
import CardSection from '../components/CardSection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-gradient-to-F'>
      <Header />
      <section className="bg-gradient-to-F text-white flex flex-col lg:flex-row justify-between items-center p-10 lg:space-x-72 mb-[-10rem]">
        <div className="space-y-4 w-full lg:w-[50vw] lg:mt-[-15rem] mb-10 lg:mb-0">
          <h1 className="hero-title">Imagine with Neora</h1>
          <p className="text-[1rem] sm:text-[0.875rem]">
            Neora: Your real-time info assistant from Neoris. With whisper-wise
            intelligence, she guides you through digital landscapes. Tailored solutions and
            insights laid out in story, immersive efficiency and delight in every interaction.
            Your trusted companion in the digital realm.
          </p>
          <div className="relative flex items-center">
            <div className="hero-blur absolute inset-0 rounded-full" />
            <Link to='/Signup'>
            <button className="admin-button relative z-10 px-6">
              Get Started
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
