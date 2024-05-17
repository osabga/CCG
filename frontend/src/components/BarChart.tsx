import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registro de componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Definición de la interfaz para los datos de entrada
interface ChartData {
  question: string;
  count: number;
}

interface BarChartProps {
  data: ChartData[];
}

const BarChart: FC<BarChartProps> = ({ data }) => {
  // Configuración de los datos para el gráfico
  const chartData = {
    labels: data.map(d => d.question), // Etiquetas del eje X
    datasets: [
      {
        label: 'Number of Asks', // Título de la barra de datos
        data: data.map(d => d.count), // Datos numéricos para cada pregunta
        backgroundColor: 'bg-purple-700', // Color de las barras
        borderColor: 'rgba(153, 102, 255, 1)', // Color del borde de las barras
        borderWidth: 1, // Grosor del borde de las barras
        barThickness: 60, // Grosor de las barras
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Comenzar el eje Y desde 0
      }
    },
    plugins: {
      legend: {
        position: 'top' as const, // Posición de la leyenda
      },
      title: {
        display: true,
        text: 'Most Asked Questions', // Título del gráfico
      }
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '400px' }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );

};

export default BarChart;
