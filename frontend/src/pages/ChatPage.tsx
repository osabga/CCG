import { useState } from 'react';
import SpaceCatImage from '../assets/SpaceCat.png'
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const ChatPage = () => {
    const [inputValue, setInputValue] = useState('');
    const userId= "82d00a97-d923-4c5a-bc8e-e1684eff66a9"

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
        const response = await axios.post('http://10.22.201.206:8082/api/v1/', {
            question: inputValue,
            answer: "",
            userId: "82d00a97-d923-4c5a-bc8e-e1684eff66a9",
        });

        if (response){
            const answer = await axios.get(`http://10.22.201.206:8082/api/v1/${userId}`)
            console.log(answer)
        }
  
        console.log(response.data);
      } catch (error) {
        console.error('There was an error sending the data', error);
      }

    
  };

  return (
    <div className="bg-gradient-to-d h-screen flex ">
     <Sidebar />

      <div className="flex-grow flex items-center justify-center pl-50">
        <div className="text-center w-full max-w-4xl">
          <img src={SpaceCatImage} alt="NeoBot" className="mx-auto mb-4 h-[4rem]" /> {/* Replace with your image */}
          <h1 className="text-2xl text-white font-bold mb-8">NeoBot</h1>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Example chat bubbles */}
            <div className="bg-[#382c64] p-3 rounded-xl text-white">What is NEORIS?</div>
            <div className="bg-[#382c64] p-3 rounded-xl text-white">Which are the services of NEORIS?</div>
            <div className="bg-[#382c64] p-3 rounded-xl text-white">Products of NEORIS</div>
            <div className="bg-[#382c64] p-3 rounded-xl text-white">Got any creative ideas for a 10 year old's birthday? 🎈</div>
            <div className="bg-[#382c64] p-3 rounded-xl text-white">Allows users to provide follow-up corrections</div>
            <div className="bg-[#382c64] p-3 rounded-xl text-white">May occasionally produce harmful content if biased information is provided</div>
          </div>

          <div className="flex items-center">
            <input value={inputValue}
            onChange={handleChange}  className="bg-[#382c64] flex-grow p-2 rounded-l-lg text-white " placeholder="Ask Neochat" />
            <button onClick={handleClick}  className="bg-[#382c64] p-2 rounded-r-lg text-white">▶</button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ChatPage;
