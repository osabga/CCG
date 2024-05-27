import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importar useNavigate
import Header from "../components/Header";
import login from "../assets/login.png";
import axios from "axios";

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
  const navigate = useNavigate();  // Crear una instancia de useNavigate

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
      setError('Passwords do not match');
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
        state: formData.state
      });

      console.log("front response:", response.data);
      navigate('/login');  // Redirigir al usuario a la página de LogIn
    } catch (error: any) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        setError(error.response.data.message || 'An error occurred');
      } else if (error.request) {
        console.error('No response received:', error.request);
        setError('No response from server');
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
            <h2 className="text-3xl text-white font-bold mb-6">Sign up</h2>
            <p className="text-gray-400 mb-8">
              Sign up now and gain access to exclusive content.
            </p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  name="firstName"
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="lastName"
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="age"
                  onChange={handleChange}
                  type="text"
                  placeholder="Age"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="country"
                  onChange={handleChange}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="state"
                  onChange={handleChange}
                  type="text"
                  placeholder="State"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <input
                  name="password_confirm"
                  onChange={handleChange}
                  type="password"
                  placeholder="Repeat your Password"
                  className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
              By clicking sign up, you agree to our Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
