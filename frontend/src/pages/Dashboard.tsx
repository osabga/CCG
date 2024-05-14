import { useState } from 'react';
import Header from '../components/Header';
import Chart from '../components/Chart';
import BarChart from '../components/BarChart';
import Widget from '../components/Widget';
import QuestionsTable from '../components/QuestionsTable';
import adminBackgroundImage from '../assets/AdminFoto.jpeg';

function Dashboard() {
  const [questions, setQuestions] = useState([
    { question: "What is NEORIS?", answer: "NEORIS is a Digital Accelerator that helps companies step into the future." },
    { question: "NEORIS Cloud Services", answer: "Move to the Cloud, Advanced Analytics and AI & Hyperautomation" },
  ]);

  const [mostAskedQuestions, setMostAskedQuestions] = useState([
    { question: "What is NEORIS?", count: 150 },
    { question: "NEORIS Cloud Services", count: 120 },
    { question: "Future of AI in business", count: 90 },
  ]);
  

  const handleAddQuestion = () => {
    // Logic to add a new question
  };

  const handleEditQuestion = (index: number) => {
    // Logic to edit a question at a specific index
  };

  const handleDeleteQuestion = (index: number) => {
    // Logic to delete a question
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-start p-6">
        {/* Contenedor del Card de Bienvenida y la Gráfica de Barras */}
        <div className="flex-grow flex flex-col justify-center items-start p-4">
          {/* Card de Bienvenida */}
          <div className="bg-dark-800 p-6 shadow-lg rounded-lg w-full"
            style={{
              backgroundImage: `url(${adminBackgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '150px',
              color: '#FFFFFF'
            }}>
            <h2 className="text-3xl font-semibold">Welcome back, Mark Johnson</h2>
            <p>Glad to see you again! Ask me anything.</p>
            <button className="mt-4 bg-white-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Tap to ask →
            </button>
          </div>
          {/* Gráfica de Barras justo debajo del Card de Bienvenida */}
          <BarChart data={mostAskedQuestions} />
        </div>

        {/* Contenedor de la Gráfica de Líneas y Widgets */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="bg-gradient-to-d from-gray-900 to-gray-800 rounded-lg shadow-md p-6">
            <Chart />
            <h2 className="text-xl font-semibold text-white m-4">Active Users</h2>
            <div className="flex flex-row gap-4">
              <Widget count={572} label={"Usuarios"} />
              <Widget count={72} label={"Preguntas"} />
            </div>
          </div>
        </div>
      </div>

      {/* Tabla de Preguntas */}
      <div className="p-6">
        <QuestionsTable 
          questions={questions}
          onAdd={handleAddQuestion}
          onEdit={handleEditQuestion}
          onDelete={handleDeleteQuestion}
        />
      </div>
    </div>
  );
}

export default Dashboard;
