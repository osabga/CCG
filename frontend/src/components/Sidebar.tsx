import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  onNewChat: () => void;
  history: Array<{ _id: string, question: string, answer?: string, userId: string }>;
  setHistorySelected: (selectedHistory: { _id: string, question: string, answer?: string, userId: string }) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewChat, history, setHistorySelected }) => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const initializeUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        setUserId(decodedToken.id);
      }
    };

    initializeUser();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    
    try {
      const response = await axios.put(`https://neorisprueba.onrender.com/api/v1/logout/${userId}`);
      console.log(response.data);
      navigate('/');
      window.location.reload();
    }
    catch (error) {
      console.error('There was an error sending the data', error);
    }

  };
  const { t } = useTranslation();

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-[#E9EFFA0F] rounded h-screen flex flex-col justify-between">
        <div>
          <ul className="space-y-2">
            <li>
              <button
                className="flex items-center p-2 text-xl font-normal text-white hover:bg-purple-800 rounded-lg"
                onClick={onNewChat}
              >
                <span className="flex-1 ml-3 whitespace-nowrap">{t('new_chat')}</span>
              </button>
            </li>
          </ul>
          <div className="border-t border-white my-4"></div>
          <ul className="space-y-2 overflow-y-auto max-h-80">
            {history.map((item) => (
              <li key={item._id}>
                <div className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-purple-800">
                <button onClick={() => setHistorySelected(item)}>
                    <span className="flex-1 ml-3 whitespace-nowrap">{item.question}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center p-2 text-xl font-normal text-white hover:bg-purple-800 rounded-lg"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Log out</span>
              </button>
            </li>
            <li>
              <Link to="/FrequentlyQuestions" className="flex items-center p-2 text-xl font-normal text-white hover:bg-purple-800 rounded-lg">
                <span className="flex-1 ml-3 whitespace-nowrap">FAQs</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
