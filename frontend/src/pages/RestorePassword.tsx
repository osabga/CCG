import Header from '../components/Header'
import LoginImage from '../assets/Login_image.png'

const RestorePassword = () => {
    return (
        <div className="bg-gradient-to-b ">
          <Header/>
          <div className="flex items-center justify-center min-h-screen mt-11 pb-11 ">
          <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl  ">
            {/* Contenedor del fondo de la izquierda */}
            <img  className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg " src={LoginImage}/>
              
            
            {/* Contenedor del formulario de registro */}
            <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
              <h2 className="text-3xl text-white font-bold mb-6">Reset your password</h2>
              <p className="text-gray-400 mb-8">
                
              </p>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                </div>
                
              </form>
             
                  <button
                    type="submit"
                    className="w-full mt-4 p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300 mb-[50vh]"
                  >
                    Reset
                  </button>
                </div>
            </div>
          </div>
        </div>
  )
}

export default RestorePassword
