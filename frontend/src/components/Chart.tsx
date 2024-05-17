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
        minRotation: 45 // Ajusta según sea necesario para evitar superposiciones
      }
    },
    y: {
      beginAtZero: true,
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      enabled: true,
    }
  }
};


const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const data = {
  labels,
  datasets: [
    {
      label: 'Preguntas por Día',
      data: [255, 450, 290, 500, 260, 700, 400],
      fill: false,
      borderColor: 'rgba(255, 255, 255, 1)', // Color del borde de la línea
      tension: 0.1 // Suavidad de la línea
    }
  ],
};

function Chart() {
  return (
    <div style={{ width: '100%', minHeight: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;

