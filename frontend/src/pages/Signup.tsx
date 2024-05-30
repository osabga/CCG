import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import Header from "../components/Header";
import login from "../assets/login.png";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password_confirm: string;
  age: string;
  country: string;
  state: string;
}

const Signup = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirm: '',
    age: '',
    country: '',
    state: ''
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (formData.password !== formData.password_confirm) {
      setError(t('error_password_mismatch'));
      return;
    }

    try {
      const response = await axios.post('https://neorisprueba.onrender.com/api/v1/register', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        age: parseInt(formData.age, 10),
        country: formData.country,
        state: formData.state,
      });

      console.log("front response:", response);
      navigate('/login');  
    } catch (error: any) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        setError(error.response.data.message || t('error_generic'));
      } else if (error.request) {
        console.error('No response received:', error.request);
        setError(t('error_no_response'));
      } else {
        console.error('Error setting up the request:', error.message);
        setError(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11">
        <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
          <img className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg" src={login} alt="Login Background" />
          <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
            <h2 className="text-3xl text-white font-bold mb-6">{t('signup_title')}</h2>
            <p className="text-gray-400 mb-8">
              {t('signup_subtitle')}
            </p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder={t('first_name')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder={t('last_name')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  type="text"
                  placeholder={t('age')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  type="text"
                  placeholder={t('country')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  type="text"
                  placeholder={t('state')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder={t('email')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder={t('password')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleChange}
                  type="password"
                  placeholder={t('password_confirm')}
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="admin-button relative z-10 px-6"
                >
                  {t('signup_button')}
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              {t('signup_agreement')} <a href="/terms" className="underline text-blue-500">{t('terms_and_conditions')}</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
