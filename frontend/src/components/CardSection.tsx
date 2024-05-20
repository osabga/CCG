import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'

const CardSection = () => {
 // Suponiendo que tengas las imágenes importadas o las rutas listas
  const cardInfo = [
    {
      title: 'Products',
      description: 'Mastering Mexico\'s Technology Future. Discover our range of revolutionary products designed to innovate your digital landscape. Unleash the power of information...',
      imgSrc: Img1, // Reemplaza con la ruta de tu imagen
      buttonText: 'Learn More'
    },
    {
      title: 'Services',
      description: 'Streamlining Collaborative Workflows. Breathe your business with our comprehensive suite of expert services. From consultation to implementation, we...',
      imgSrc: Img2, // Reemplaza con la ruta de tu imagen
      buttonText: 'Explore Now'
    },
    {
      title: 'FAQs',
      description: 'Unraveling the Mystery of Version. Find answers to common queries about our products and services. Empower yourself with knowledge to enhance experiences...',
      imgSrc: Img3, // Reemplaza con la ruta de tu imagen
      buttonText: 'View FAQs'
    }
  ];

  return (
    <div className="px-4 py-10 bg-black h-[90vh]">
      <div className='separator-outline'/>
      <div className="container mx-auto separator-background w-[100rem] ">
        <div className="flex flex-wrap justify-center items-center ">
          {cardInfo.map((card, index) => (
            <div key={index} className="p-6 m-4 custom-blur-background rounded-lg shadow-md space-y-4 md:w-1/4">
              <img src={card.imgSrc} alt={card.title} className="rounded-lg mb-4" />
              <div className='custom-line'/>
              <h3 className="text-xl text-white">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.description}</p>
              <button className="custom-button text-white py-2 px-4 rounded hover:bg-purple-800 transition-colors duration-300">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default CardSection;


