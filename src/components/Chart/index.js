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
        data: exercisePeriodData.map((previousData) => previousData.value),
        borderColor: '#715aff',
        pointBackgroundColor: '#a682ff',
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  return <Line data={data} />;
};

Chart.propTypes = {
  label: PropTypes.string.isRequired,
  exercisePeriodData: PropTypes.array.isRequired,
};

export default Chart;
