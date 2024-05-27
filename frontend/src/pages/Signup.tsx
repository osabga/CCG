import Header from "../components/Header";
import login from "../assets/login.png";
import axios from "axios";
import { useState } from "react";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password !== formData.password_confirm) {
      console.error('Passwords do not match');
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`;
    console.log(`${formData.firstName} ${formData.lastName}`, formData.email, formData.password);

    try {
      const response = await axios.post('https://backend-g52rzw1mh-gilva1s-projects.vercel.app/users/signup', {
        name: fullName,
        email: formData.email,
        password: formData.password
      });

      console.log("front response:", response.data);
    } catch (error) {
      console.error('There was an error sending the data', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex items-center justify-center min-h-screen mt-11 pb-11">
        <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl">
          {/* Contenedor del fondo de la izquierda */}
          <img className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg" src={login} alt="Login Background" />

          {/* Contenedor del formulario de registro */}
          <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
            <h2 className="text-3xl text-white font-bold mb-6">Sign up</h2>
            <p className="text-gray-400 mb-8">
              Sign up now and gain access to exclusive content.
            </p>
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="admin-button relative z-10 px-6"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-400 text-center mt-4">
            By clicking sign up, you agree to our <a href="/terms" className="underline text-blue-500">Terms and Conditions</a>.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;