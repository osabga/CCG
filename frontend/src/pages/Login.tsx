import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import login from "../assets/login.png";
import axios from 'axios';
import { useTranslation } from "react-i18next";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { t } = useTranslation();
  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new URLSearchParams();
    formData.append('username', loginData.email);
    formData.append('password', loginData.password);

    try {
      const response = await axios.post('https://neorisprueba.onrender.com/api/v1/token', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      console.log(response.data);

      // Save the token in local storage (or another secure place)
      localStorage.setItem('token', response.data.access_token);

      // Redirect the user to the chat page
      navigate('/ChatPage'); 
    } catch (error: any) {
      console.error('Error logging in:', error);
      if (error.response) {
        setError(error.response.data.detail || t('error_generic'));
      } else {
        setError(t('error_login_failed'));
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11">
        <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
          <img className="object-cover w-1/2 rounded-l-lg" src={login} alt="Login Background" />
          <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
            <h2 className="text-3xl text-white font-bold mb-6">{t('login_title')}</h2>
            <p className="text-gray-400 mb-8">{t('login_subtitle')}</p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder={t('email')}
                  onChange={handleChange}
                  value={loginData.email}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder={t('password')}
                  onChange={handleChange}
                  value={loginData.password}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <p className="text-gray-400 mb-8">{t('forgot_password')}</p>
              <div className="flex justify-center">
                <button type="submit" className="admin-button relative z-10 px-6">
                  {t('login_button')}
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">{t('or')}</p>
            <div>
              <Link to='/Signup'>
                <div className="flex justify-center">
                  <button className="admin-button relative z-10 px-6">
                    {t('create_account')}
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
