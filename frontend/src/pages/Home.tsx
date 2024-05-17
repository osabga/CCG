import Header from '../components/Header'
import SpaceCatImage from '../assets/SpaceCat.png'
import CardSection from '../components/CardSection'

const Home = () => {
  return (
    <div className='bg-gradient-to-d'>
      <Header/>
      <section className="bg-gradient-to-d text-white flex justify-between items-center p-10 space-x-72 mb-[-10rem]">
      <div className="space-y-4 w-[50vw] lg:mt-[-15rem] ">
        <h1 className="hero-title">Imagine with Neora</h1>
        <p className="text-base">
          Neora: Your real-time info assistant from Neoris. With whisper-wise
          intelligence, she guides you through digital landscapes. Tailored solutions and
          insights laid out in story, immersive efficiency and delight in every interaction.
          Your trusted companion in the digital realm.
        </p>
        <div className="relative flex  items-center">
          <div className="hero-blur absolute inset-0 rounded-full" />
          <button className="admin-button relative z-10 px-6">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative flex items-center h-screen justify-center">
        <div className="hero-image-blur absolute inset-0 " />
        <img className="mt-[12rem] h-[55vh] max-w-none" src={SpaceCatImage} alt="Space Cat" style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }} /> 
      </div>
    </section>
    <CardSection/>
    </div>
  )
}

export default Home
