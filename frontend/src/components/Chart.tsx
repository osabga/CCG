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
        minRotation: 45, // Ajusta según sea necesario para evitar superposiciones
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

function Chart() {
  const { t } = useTranslation();

  const labels = [
    t('monday'),
    t('tuesday'),
    t('wednesday'),
    t('thursday'),
    t('friday'),
    t('saturday'),
    t('sunday'),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t('questions_per_day'),
        data: [255, 450, 290, 500, 260, 700, 400],
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
