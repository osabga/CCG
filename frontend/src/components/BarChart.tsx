import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

// Registro de componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Definición de la interfaz para los datos de entrada
interface ChartData {
  age: string;
  count: number;
}

// Componente de animación de carga
const LoadingSpinner = () => (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
);

function BarChart() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  let delayed: boolean = false;

  useEffect(() => {
    // Simulación de llamada a API para obtener los datos
    axios.get('https://neorisprueba.onrender.com/api/v1/users/age', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        setChartData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  // Configuración de los datos para el gráfico
  const barChartData = {
    labels: chartData.map(d => d.age), // Etiquetas del eje X
    datasets: [
      {
        label: t('number_of_users'), // Título de la barra de datos
        data: chartData.map(d => d.count), // Datos numéricos para cada pregunta
        backgroundColor: 'rgba(153, 102, 255, 0.5)', // Color de las barras
        borderColor: 'rgba(153, 102, 255, 1)', // Color del borde de las barras
        borderWidth: 1, // Grosor del borde de las barras
        barThickness: 60, // Grosor de las barras
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context: any) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(...chartData.map(d => d.count)),
        ticks: {
          stepSize: 1, // Ajustar el tamaño del paso del eje Y
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const, // Posición de la leyenda
      },
      title: {
        display: true,
        text: t('users_by_age_range'), // Título del gráfico
      },
      tooltip: {
        enabled: true,
      }
    }
  };

  return (
    <div style={{ width: '100%', minHeight: '400px' }}>
      <Bar data={barChartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
