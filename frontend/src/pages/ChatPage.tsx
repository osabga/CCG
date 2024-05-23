import { useEffect, useState } from 'react';
import SpaceCatImage from '../assets/SpaceCat.png';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Conversation from '../components/Conversation';

const ChatPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [visual, setVisual] = useState(false);
  const [data, setData] = useState([] as any[]);
  const [history, setHistory] = useState([] as any[]);
  const userId = "82d00a97-d923-4c5a-bc8e-e1684eff66a9";

  const fetchData = async (buttonText: string) => {
    try {
      const response = await axios.post('https://neorisprueba.onrender.com/api/v1/question/', {
        question: buttonText,
        answer: "",
        userId: userId,
      });

      if (response) {
        const answer = await axios.get(`https://neorisprueba.onrender.com/api/v1/response/${userId}`);
        setData([...data, { question: buttonText, answer: answer.data.response }]);
      }
    } catch (error) {
      console.error('There was an error sending the data', error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get(`https://neorisprueba.onrender.com/api/v1/history/${userId}`);
      setHistory(response.data);
    } catch (error) {
      console.error('There was an error fetching the chat history', error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

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

  const handleNewChat = () => {
    setVisual(false);
    setData([]);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="bg-gradient-to-d h-screen flex">
      <Sidebar onNewChat={handleNewChat} history={history} />
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center p-4">
          <img src={SpaceCatImage} alt="NeoBot" className="mb-4 h-[4rem]" /> {/* Replace with your image */}
          <h1 className="text-2xl text-white font-bold mb-8">Neora</h1>
        </div>
        {!visual && (
          <div className="flex-grow flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4"> {/* Changed grid-cols-2 to grid-cols-3 */}
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick("What is NEORIS?")}
              >
                <span>What is NEORIS?</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick("Which are the services of NEORIS?")}
              >
                <span>Which are the services of NEORIS?</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick("NEORISES Products")}
              >
                <span>NEORISES Products</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick("NEORISES Certificates")}
              >
                <span>NEORISES Certificates</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick("Recommendations")}
              >
                <span>Recommendations</span>
              </button>
              {/* Add any additional buttons here */}
            </div>
          </div>
        )}

        {visual && (
          <div className="flex-grow overflow-auto mb-4">
            <div className="w-full max-w-3xl p-3">
              {data.map((item, index) => (
                <div key={index}>
                  <Conversation question={item.question} answer={item.answer} />
                </div>
              ))}
            </div>
          </div>
        )}
        <form onSubmit={handleClick} className="flex justify-between p-4 bg-gray-800 w-full fixed bottom-0 left-0 right-0">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 p-2 mr-2 shadow-sm bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
            placeholder="Escribe tu pregunta..."
          />
          <button type="submit" className="text-white px-4 py-2 rounded-sm bg-[#382c64]">
            Enviar
          </button>
          <button type="button" className="text-white px-4 py-2 rounded-sm bg-red-600 ml-2" onClick={handleNewChat}>
            New Chat
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
