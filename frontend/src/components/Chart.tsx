import { Line } from 'react-chartjs-2';

const Chart = () => {
  return (
    <div className="bg-black text-white p-10">
      <h2 className="text-2xl text-center mb-4">Neoris Stock Price</h2>
      

      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              label: '',
              data: [5, 6, 7],
            },
            {
              label: '',
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;