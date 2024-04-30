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
      {cardInfo.map((card) => (
        <div className="bg-darkblue rounded-lg shadow-md p-6 max-w-sm w-full overflow-hidden" >  
          <div className="font-bold text-white mb-2">{card.question}</div>
          <div className="text-white">{card.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default CardQuestion;
