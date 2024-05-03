import Header from '../components/Header';
import Chart from '../components/Chart';
import Widget from '../components/Widget';

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-d from-gray-100 to-gray-300">
      <Header />
      <div className="flex-grow flex justify-center items-start p-4">
        <div className="w-full md:w-1/2 lg:w-1/2 p-4">
          <div className="bg-gradient-to-d from-gray-900 to-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Welcome back Carolina!</h2>
            <p className="text-gray-300">Glad to see you! Ask me anything!</p>
          </div>
        </div>
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
