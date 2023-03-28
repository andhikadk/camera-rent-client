import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustTypeChart = ({ data }) => {
  const labels = data.map((item) => item.type);
  const value = data.map((item) => item.count);
  const datas = {
    labels,
    datasets: [
      {
        data: value,
        borderColor: ['rgb(59, 130, 246)', 'rgb(145, 178, 121)'],
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(145, 178, 121, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={datas} />;
};

export default CustTypeChart;
