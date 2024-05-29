import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import LoginImage from '../assets/aksonvady_crescent_sun_of_Peaceful_faerie_Landscape_Insane_and__c7c55c93-8978-4f0f-8fe4-8dec082cf5a7 1.png';
import { useTranslation } from 'react-i18next';

const EditQuestions = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { question } = location.state || {};
  const getToken = () => localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  };

  const [questionText, setQuestionText] = useState(question ? question.question : '');
  const [answerText, setAnswerText] = useState(question ? question.answer : '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put(`https://neorisprueba.onrender.com/api/v1/faq/${question._id}`, { question: questionText, answer: answerText }, { headers })
      .then(response => {
        console.log('Question updated successfully!', response);
        navigate('/Dashboard'); // Redirect back to dashboard after successful edit
      })
      .catch(error => {
        console.error('There was an error updating the question!', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11">
        <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
          <img className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg" src={LoginImage} alt="Login Background" />
          <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
            <h2 className="text-3xl text-white font-bold mb-6">{t('edit_question')}</h2>
            <p className="text-gray-400 mb-8">
              {t('edit_question_details')}
            </p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder={t('question')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  placeholder={t('answer')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div className='flex justify-center'>
                <button
                  type="submit"
                  className="admin-button relative z-10 px-6"
                >
                  {t('edit_question')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditQuestions;
