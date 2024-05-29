import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  // Configuración de los datos para el gráfico
  const chartData = {
    labels: data.map(d => d.question), // Etiquetas del eje X
    datasets: [
      {
        label: t('number_of_asks'), // Título de la barra de datos
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
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true, // Comenzar el eje Y desde 0
        max: Math.max(...data.map(d => d.count)) + 50, // Ajustar el máximo del eje Y
        ticks: {
          stepSize: Math.max(...data.map(d => d.count)) / 4, // Ajustar el tamaño del paso del eje Y
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const, // Posición de la leyenda
      },
      title: {
        display: true,
        text: t('most_asked_questions'), // Título del gráfico
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
