import { useEffect, useState } from 'react';
import SpaceCatImage from '../assets/SpaceCat.png'
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Conversation from '../components/Conversation';

const ChatPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [visual, setVisual] = useState(false);
  const [data, setData] = useState([] as any[]);
  const userId = "82d00a97-d923-4c5a-bc8e-e1684eff66a9"

  const fetchData = async (buttonText: string) => {
    try {
      const response = await axios.post('http://localhost:8082/api/v1/', {
        question: buttonText,
        answer: "",
        userId: "82d00a97-d923-4c5a-bc8e-e1684eff66a9",
      });

      if (response) {
        const answer = await axios.get(`http://localhost:8082/api/v1/${userId}`);
        setData([...data, { question: buttonText, answer: answer.data.response }]);
      }
    } catch (error) {
      console.error('There was an error sending the data', error);
    }
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVisual(true);
    setInputValue('');
    fetchData(inputValue);
  };

  const handleButtonClick = async (buttonText: string) => {
    setVisual(true);
    setInputValue('');
    fetchData(buttonText);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <div className="bg-gradient-to-d h-screen flex ">
      <Sidebar />
      <div className="flex flex-col justify-center container mx-auto p-4">
        <img src={SpaceCatImage} alt="NeoBot" className="mx-auto mb-4 h-[4rem]" /> {/* Replace with your image */}
        <h1 className="text-2xl text-white text-center font-bold mb-8 space-y-10">Neora</h1>
        {!visual && (
          <div className="grid grid-cols-2 gap-4 mt-10 mb-[4rem]">
            <button className="bg-[#382c64] p-3 rounded-xl text-white" onClick={() => handleButtonClick("What is NEORIS?")}>
              What is NEORIS?
            </button>
            <button className="bg-[#382c64] p-3 rounded-xl text-white" onClick={() => handleButtonClick("Which are the services of NEORIS?")}>
              Which are the services of NEORIS?
            </button>
            <button className="bg-[#382c64] p-3 rounded-xl text-white" onClick={() => handleButtonClick("NEORISES Products")}>
              NEORISES Products
            </button>
            <button className="bg-[#382c64] p-3 rounded-xl text-white" onClick={() => handleButtonClick("NEORISES Certificates")}>
              NEORISES Certificates
            </button>
          </div>

        )}
        
        {visual && (
        <div className="chatbox max-w-md mx-auto border p-3 bg-gray-100 overflow-y-auto h-64 mb-4">
          {data.map((item, index) => (
            <div key={index}>
              <Conversation question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      )}
        <form onSubmit={handleClick} className="flex justify-between mt-[4rem] mb-[-5rem]">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 p-2 mr-2 shadow-sm bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
            placeholder="Escribe tu pregunta..."
          />
          <button type="submit" className="text-white px-4 py-2 rounded-sm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
