import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ exerciseData }) => {
  const data = {
    labels: exerciseData.exercisePeriodData.map((previousData) =>
      new Date(previousData.createdAt).toDateString()
    ),
    datasets: [
      {
        label: 'Jerk',
        data: exerciseData.exercisePeriodData.map(
          (previousData) => previousData.value
        ),
        borderColor: '#715aff',
        pointBackgroundColor: '#a682ff',
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  return <Line data={data} />;
};

export default Chart;
