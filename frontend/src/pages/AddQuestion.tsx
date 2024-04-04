import Header from '../components/Header'
import LoginImage from '../assets/aksonvady_crescent_sun_of_Peaceful_faerie_Landscape_Insane_and__c7c55c93-8978-4f0f-8fe4-8dec082cf5a7 1.png'

const AddQuestion = () => {
  return (
    <div className="bg-gradient-to-b ">
          <Header/>
          <div className="flex items-center justify-center min-h-screen mt-11 pb-11 ">
          <div className="flex overflow-hidden max-w-5xl mx-auto rounded-lg shadow-xl  ">
            {/* Contenedor del fondo de la izquierda */}
            <img  className="w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg " src={LoginImage}/>
              
            
            {/* Contenedor del formulario de registro */}
            <div className="w-1/2 bg-gray-900 bg-opacity-90 p-10 rounded-r-lg">
              <h2 className="text-3xl text-white font-bold mb-6">New Question</h2>
              <p className="text-gray-400 mb-8">
                
              </p>
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Question"
                    className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Answer"
                    className="w-full p-4 bg-gray-700 text-white rounded focus:ring-2 focus:ring-purple-600 focus:outline-none"
                  />
                </div>
                
              </form>
             
                  <button
                    type="submit"
                    className="w-full mt-4 p-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded font-bold hover:opacity-90 transition-opacity duration-300 mb-[50vh]"
                  >
                    Add Question
                  </button>
                </div>
            </div>
          </div>
        </div>
  )
}

export default AddQuestion
