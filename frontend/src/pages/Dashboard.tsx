import Header from '../components/Header';
import Chart from '../components/Chart';
import Widget from '../components/Widget';
import adminBackgroundImage from '../assets/AdminFoto.jpeg';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex flex-col lg:flex-row justify-around items-start p-6">
        <div className="flex-grow flex justify-center items-start p-4">
          <div className="bg-dark-800 p-6 shadow-lg rounded-lg w-full lg:w-1/2"
            style={{
              backgroundImage: `url(${adminBackgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '150px',
              color: '#FFFFFF'
            }}>
            <h2 className="text-3xl font-semibold">Welcome back, Mark Johnson</h2>
            <p>Glad to see you again! Ask me anything.</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Tap to ask →
            </button>
          </div>
        </div>
        {/* Esta sección de gráficos pertenecen a la Historia de Usario R-5. Es neceario ajustar los estilos y que
        la información sea de manera dinámica.*/}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="bg-gradient-to-d from-gray-900 to-gray-800 rounded-lg shadow-md p-6">
            <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
            <Chart />
            <h2 className="text-xl font-semibold text-white m-4">Active Users</h2>
            <div className="flex flex-row gap-4">
              <Widget count={572} label={"Usuarios"} />
              <Widget count={72} label={"Preguntas"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
