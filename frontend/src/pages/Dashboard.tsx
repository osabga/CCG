import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Chart from '../components/Chart';
import BarChart from '../components/BarChart';
import Widget from '../components/Widget';
import QuestionsTable from '../components/QuestionsTable';
import adminBackgroundImage from '../assets/AdminFoto.jpeg';
import { useFaqs } from '../components/FaqContext';

interface Question {
  _id: string;
  question: string;
  answer: string;
}

function Dashboard() {
  const navigate = useNavigate();
  const getToken = () => localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  };

  const { faqs, updateFaqs } = useFaqs();

  const [mostAskedQuestions, setMostAskedQuestions] = useState([
    { question: "What is NEORIS?", count: 150 },
    { question: "NEORIS Cloud Services", count: 120 },
    { question: "Future of AI in business", count: 90 },
  ]);

  useEffect(() => {
    axios.get('https://neorisprueba.onrender.com/api/v1/faqs/', { headers })
      .then(response => {
        console.log('Received FAQ questions:', response.data); // Registro de depuración
        updateFaqs(response.data); // Actualiza las FAQs en el contexto
      })
      .catch(error => {
        console.error('There was an error fetching the FAQ questions!', error);
      });
  }, []);

  const handleAddQuestion = () => {
    navigate('/AddQuestion'); // Navigate to the NewQuestion page
  };

  const handleEditQuestion = (question: Question) => { // Define el tipo de question
    navigate('/EditQuestions', { state: { question } }); // Navega al componente EditQuestions pasando la pregunta completa
  };

  const handleDeleteQuestion = (id: string) => { // Define el tipo de id
    axios.delete(`https://neorisprueba.onrender.com/api/v1/faq/${id}`, { headers })
      .then(response => {
        console.log('Question deleted successfully!', response);
        // Actualizar el estado inmediatamente después de la eliminación
        updateFaqs((prevFaqs: Question[]) => prevFaqs.filter((faq: Question) => faq._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the question!', error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-center px-4 py-6 space-y-4 lg:space-y-0">
        <div className="flex-grow flex flex-col justify-center items-start px-2 lg:px-4">
          <div
            className="bg-dark-800 p-4 lg:p-6 shadow-lg rounded-lg w-full"
            style={{
              backgroundImage: `url(${adminBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "200px",
              color: "#FFFFFF",
            }}
          >
            <h2 className="text-xl lg:text-3xl font-semibold">
              Welcome back, Mark Johnson
            </h2>
            <p className="hidden md:block">
              Glad to see you again! Ask me anything.
            </p>
            <p className="block md:hidden">Welcome back!</p>
            <button className="mt-2 lg:mt-4 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate('/ChatPage')}>
              Tap to ask →
            </button>
          </div>
          <div className="w-full mt-4 mb-11">
            <BarChart data={mostAskedQuestions} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-2 lg:px-4">
          <div className="bg-none rounded-lg shadow-md p-4 lg:p-6">
            <Chart />
            <h2 className="text-lg lg:text-xl font-semibold text-white m-4">
              Active Users
            </h2>
            <div className="flex flex-row gap-4">
              <Widget count={572} label={"Usuarios"} />
              <Widget count={72} label={"Preguntas"} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        <QuestionsTable
          questions={faqs}
          onAdd={handleAddQuestion}
          onEdit={handleEditQuestion}
          onDelete={handleDeleteQuestion}
        />
      </div>
    </div>
  );
}

export default Dashboard;
