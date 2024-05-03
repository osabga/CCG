import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrando los componentes necesarios
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Example() {
    return (
        <div style={{ width: '600px', height: '400px' }}> {/* Asegúrate de tener suficiente espacio para tu gráfico */}
            <Line
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                        {

                            label: 'Dataset 1',
                            data: [5, 6, 7],
                            borderColor: 'rgb(255, 99, 132)', // Color de la línea
                            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Color de fondo
                        },
                        {

                            label: 'Dataset 2',
                            data: [3, 2, 1],
                            borderColor: 'rgb(54, 162, 235)', // Color de la línea
                            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de fondo
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Demo Line Chart',
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    )
}

export default Example;
