import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const RoundChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: [
              'red',
              'blue',

            ],
            borderColor: [
              'red',
              'blue',

            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
        },
      },
    });
  }, [data]);

  return <canvas style={{width:'50px'}}  height={'100px'} ref={chartRef} />;
};

export default RoundChart;