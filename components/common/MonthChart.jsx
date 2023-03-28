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

const MonthChart = ({ data }) => {
  let labels = data.map((item) => item.month);
  // change labels to month name from this string format '01-2023' to 'Jan 2023'
  labels = labels.map((item) => {
    const month = item.split('-')[0];
    const year = item.split('-')[1];
    const monthName = new Date(year, month - 1).toLocaleString('default', {
      month: 'short',
    });
    return `${monthName} ${year}`;
  });

  // sort labels by month and year
  labels = labels.sort((a, b) => {
    const monthA = a.split(' ')[0];
    const yearA = a.split(' ')[1];
    const monthB = b.split(' ')[0];
    const yearB = b.split(' ')[1];
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    if (monthA < monthB) {
      return -1;
    }
    if (monthA > monthB) {
      return 1;
    }
    return 0;
  });

  const sales = data.map((item) => item.total_biaya);

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

export default MonthChart;
