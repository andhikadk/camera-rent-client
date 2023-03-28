import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line, Scatter, Bubble } from 'react-chartjs-2';

// register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      fill: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DayChart = ({ data, sort }) => {
  const labels = data.map((item) => item.day).slice(-7);
  const sales = data.map((item) => item.total_biaya).slice(-7);

  const datas = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: sales,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };
  return <Line data={datas} options={options} />;
};

export default DayChart;
