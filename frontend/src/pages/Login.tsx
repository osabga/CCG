import Header from "../components/Header"
import LoginImage from '../assets/Login_image.png'
import login from "../assets/login.png"
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
    console.log(loginData)
    event.preventDefault();
    try {
      const response = await axios.post('https://backend-pp4k0x4sp-gilva1s-projects.vercel.app/users/login', loginData);


      console.log(response.data);

      // Aquí manejarías la respuesta de la API, como guardar el token, navegar a otra página, etc.
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header/>
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11 ">
      <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
        {/* Contenedor del fondo de la izquierda */}
        <img className="object-cover w-1/2 rounded-l-lg" src={login} />
          
        
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
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                  value={loginData.email}
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                  value={loginData.password}
                className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            
            <div>
            
            <div className="flex justify-center">
            <button className="admin-button relative z-10 px-6">
              Login
            </button>
          </div>
            </div>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
          
          </p>
          <p className="text-xs text-gray-400 text-center mt-4">
          ━━━━ or ━━━━
          </p>
          <p className="text-xs text-gray-400 text-center mt-4">
          
          </p>
          <div className="flex justify-center">
            <Link to='/Signup'>
              <button className="admin-button relative z-10 px-6">
                Create an account
              </button>
            </Link>
          </div>
            <div>
    
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Login

