import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registro de componentes necesarios en Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const data = {
  labels,
  datasets: [
    {
      label: 'Preguntas por Día',
      data: [300, 450, 290, 500, 260, 700, 400],
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderColor: 'rgba(0, 0, 0, 1)', // Color de borde para todas las caras
      borderWidth: {
        top: 1,
        left: 1,
        right: 1,
        bottom: 1, // Grosor específico del borde inferior
      },
      borderRadius: 10,
      barThickness: 20, // Establece un grosor fijo para las barras
    }
  ],
};

function Chart() {
  return (
    <div style={{ width: '600px', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;
