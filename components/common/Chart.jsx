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

const labels =
  // 12 month
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [
        15000, 20000, 5000, 5000, 20000, 30000, 10000, 15000, 20000, 30000,
        50000, 25000,
      ],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

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

const Chart = () => {
  return <Line data={data} options={options} />;
};

export default Chart;
