import Header from '../components/Header';
import Chart from '../components/Chart';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex-grow flex justify-center items-start p-4">
        {/* Card de Administrador */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="bg-gradient-to-d from-gray-900 to-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Welcome back  Carolina!</h2>
            <p className="text-gray-300">Glad to see you! Ask me anything!</p>
          </div>
        </div>
        {/* Card de Gráfico */}
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="bg-gradient-to-d from-gray-900 to-gray-800 rounded-lg shadow-md p-6">
            <div className="w-full h-48 bg-gray-700 rounded-lg"></div>
            <Chart />
            <h2 className="text-xl font-semibold text-white mb-4">Active Users</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;