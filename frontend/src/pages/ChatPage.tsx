import { useEffect, useState } from 'react';
import SpaceCatImage from '../assets/SpaceCat.png';
import Sidebar from '../components/Sidebar';
import Conversation from '../components/Conversation';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ChatPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [visual, setVisual] = useState(false);
  const [data, setData] = useState([] as any[]);
  const [history, setHistory] = useState([] as any[]);
  const [userId, setUserId] = useState('');

  const getToken = () => localStorage.getItem('token');

  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  };

  const fetchData = async (buttonText: string, userId: string) => {
    try {
      const response = await axios.post('https://neorisprueba.onrender.com/api/v1/question', {
        question: buttonText,
        answer: '',
        userId: userId,
      }, { headers });

      if (response) {
        const answer = await axios.get(`https://neorisprueba.onrender.com/api/v1/response/${userId}`, { headers });
        setData([...data, { question: buttonText, answer: answer.data.response }]);
      }
    } catch (error) {
      console.error('There was an error sending the data', error);
    }
  };

  const fetchHistory = async (userId: string) => {
    try {
      const response = await axios.get(`https://neorisprueba.onrender.com/api/v1/history/${userId}`, { headers });
      setHistory(response.data);
    } catch (error) {
      console.error('There was an error fetching the chat history', error);
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      const token = getToken();
      if (token) {
        const decodedToken: any = jwtDecode(token);
        setUserId(decodedToken.id);
        fetchHistory(decodedToken.id);
      }
    };

    initializeUser();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setVisual(true);
    setInputValue('');
    fetchData(inputValue, userId);
  };

  const handleButtonClick = async (buttonText: string) => {
    setVisual(true);
    setInputValue('');
    fetchData(buttonText, userId);
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
      <Link to="/">
          <div className="flex flex-col items-center p-4 cursor-pointer">
            <img src={SpaceCatImage} alt="NeoBot" className="mb-4 h-[4rem]" /> {/* Replace with your image */}
            <h1 className="text-2xl text-white font-bold mb-8">Neora</h1>
          </div>
      </Link>
        {!visual && (
          <div className="flex-grow flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4"> {/* Changed grid-cols-2 to grid-cols-3 */}
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick('What is NEORIS?')}
              >
                <span>What is NEORIS?</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick('Which are the services of NEORIS?')}
              >
                <span>Which are the services of NEORIS?</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick('NEORISES Products')}
              >
                <span>NEORISES Products</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick('NEORISES Certificates')}
              >
                <span>NEORISES Certificates</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick('Recommendations')}
              >
                <span>Recommendations</span>
              </button>
              <button
                className="bg-[#382c64] p-4 rounded-xl text-white shadow-md flex items-center justify-center"
                style={{ height: '80px', width: '250px' }}
                onClick={() => handleButtonClick('Recommendations')}
              >
                <span>Ecommerce services </span>
              </button>
            </div>
          </div>
        )}

{visual && (
          <div className="flex-grow overflow-auto mb-2 flex flex-col items-center">
            <div className="w-full max-w-5xl p-2"> {/* Changed max-w-5xl to max-w-6xl */}
              {data.map((item, index) => (
                <Conversation key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
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
          <button type="submit" className="text-white px-4 py-2 rounded-sm bg-[#382c64]">
              Enviar
            </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;