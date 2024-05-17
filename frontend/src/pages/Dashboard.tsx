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
      <div className="flex flex-col lg:flex-row justify-around items-center px-4 py-6 space-y-4 lg:space-y-0">
        <div className="flex-grow flex flex-col justify-center items-start px-2 lg:px-4">
          <div
            className="bg-dark-800 p-4 lg:p-6 shadow-lg rounded-lg w-full"
            style={{
              backgroundImage: `url(${adminBackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "200px", // Aumentado para asegurar visibilidad
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
            <button className="mt-2 lg:mt-4  hover:bg-purple-800 text-white font-bold py-2 px-4 rounded">
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
