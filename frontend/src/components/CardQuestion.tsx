import { useEffect } from 'react';
import axios from 'axios';
import { useFaqs } from './FaqContext';
import pregunta from '../assets/pregunta.png';

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

const CardQuestion = () => {
  const { faqs, updateFaqs } = useFaqs();

  const getToken = () => localStorage.getItem('token');

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://neorisprueba.onrender.com/api/v1/faqs', {
          headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
          },
        });
        updateFaqs(response.data); // Actualiza las FAQs en el contexto
      } catch (error) {
        console.error('Error fetching the FAQs:', error);
      }
    };

    fetchFaqs();
  }, [updateFaqs]);

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center gap-8">
        {faqs.map((card: Faq, index: number) => (
          <div key={index} className="bg-darkblue rounded-lg shadow-lg p-6 w-full max-w-4xl overflow-hidden flex items-center space-x-4 relative">
            <div className="absolute top-0 left-0 w-[100%] h-[1.5px] bg-gradient-to-l from-darkblue via-blue-500 to-darkblue"></div>
            <img src={pregunta} alt="Question" className="h-6 w-6" />
            <div className="pl-2">
              <div className="font-bold text-white mb-2">{card.question}</div>
              <div className="text-white">{card.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardQuestion;
