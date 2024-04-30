import pregunta from '../assets/pregunta.png'

const CardQuestion = () => {
  const cardInfo = [
    {
      question: 'Do you offer data solutions?',
      answer: 'Yes, we offer a wide range of data solutions that are designed to innovate your digital landscape. Unleash the power of information. We offer a wide range of products that are designed to innovate your digital landscape.'
    },
    {
      question: 'What are the products that you offer?',
      answer: 'We offer a wide range of products that are designed to innovate your digital landscape.'
    },
    {
      question: 'What are the products that you offer?',
      answer: 'We offer a wide range of products that are designed to innovate your digital landscape.'
    },
    {
      question: 'What are the products that you offer?',
      answer: 'We offer a wide range of products that are designed to innovate your digital landscape.'
    },
    {
      question: 'What are the products that you offer?',
      answer: 'We offer a wide range of products that are designed to innovate your digital landscape.'
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">  
      {cardInfo.map((card, index) => (
        <div key={index} className="bg-darkblue rounded-lg shadow-lg p-6 w-full max-w-4xl overflow-hidden flex items-center space-x-4 relative">
        {/* Pseudo-elemento para el efecto superior */}
        <div className="absolute top-0 left-0 w-[100%] h-[1.5px] bg-gradient-to-l from-darkblue via-blue-500 to-darkblue"></div>
        
        <img src={pregunta} alt="Question" className="h-6 w-6" />
        <div className="pl-2">
          <div className="font-bold text-white mb-2">{card.question}</div>
          <div className="text-white">{card.answer}</div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CardQuestion;
