import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Chart = ({ label, exercisePeriodData }) => {
  const data = {
    labels: exercisePeriodData.map((previousData) =>
      new Date(previousData.createdAt).toDateString()
    ),
    datasets: [
      {
        label,
        data: exercisePeriodData.map((previousData) => previousData.weight),
        borderColor: '#715aff',
        pointBackgroundColor: '#a682ff',
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

Chart.propTypes = {
  label: PropTypes.string.isRequired,
  exercisePeriodData: PropTypes.array.isRequired,
};

export default Chart;
