import Header from "../components/Header"
import LoginImage from '../assets/Login_image.png'
import { Link } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}
const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', loginData);
      console.log(response.data);

      // Aquí manejarías la respuesta de la API, como guardar el token, navegar a otra página, etc.
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="bg-gradient-to-b ">
      <Header/>
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11 ">
      <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
        {/* Contenedor del fondo de la izquierda */}
        <img  className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg" src={LoginImage}/>
          
        
        {/* Contenedor del formulario de registro */}
        <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
          <h2 className="text-3xl text-white font-bold mb-6">Login</h2>
          <p className="text-gray-400 mb-8">
            Login and access to answer your questions
          </p>
          <form onSubmit={handleLogin}  className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Email address"
                onChange={handleChange}
                  value={loginData.email}
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                  value={loginData.password}
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            <p className="text-gray-400 mb-8">
            Forgot password? Reset password
          </p>
            
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ or ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
          <div>
            <Link to='/Signup'>
              <button
                className="mb-4 mt-4 w-full p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300"
              >
                Create Account
              </button>
            </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300"
              >
                Login with Google
              </button>
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Login

