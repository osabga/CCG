import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

// Registro de componentes necesarios en Chart.js para una gráfica de línea
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 90,
        minRotation: 45, 
      },
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      enabled: true,
    },
  },
};

interface QuestionDay {
  date: string;
  count: number;
}

function Chart() {
  const { t } = useTranslation();
  const [questionDay, setQuestionDay] = useState<QuestionDay[]>([]);
  
  const getToken = () => localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    axios.get('https://neorisprueba.onrender.com/api/v1/questions/day', { headers })
      .then(response => {
        console.log('Received questions per day:', response.data);
        setQuestionDay(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the questions per day!', error);
      });
  }, []);

  // Transforma los datos para que sean compatibles con Chart.js
  const labels = questionDay.map(item => item.date);
  const dataCounts = questionDay.map(item => item.count);

  const data = {
    labels,
    datasets: [
      {
        label: t('questions_per_day'),
        data: dataCounts,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 1)', // Color del borde de la línea
        tension: 0.1, // Suavidad de la línea
      },
    ],
  };

  return (
    <div style={{ width: '100%', minHeight: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
