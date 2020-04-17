import React from 'react';
import Box from './Box';
import Chart from '../Chart';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMaxValue, getAvgValue } from '../../utils/utils';
import './style.scss';

const DetailedWeight = () => {
  const { exercise } = useParams();
  const exerciseData = useSelector(({ userWeights }) => userWeights[exercise]);
  const maxWeight = getMaxValue(exerciseData.exercisePeriodData);
  const avgWeight = getAvgValue(exerciseData.exercisePeriodData);

  return (
    <div className='detailed-weight'>
      <h2 className='detailed-weight__title'>{exerciseData.exercise}</h2>
      <Box prefix='current' value={exerciseData.current} unit='kg' />
      <Box prefix='previous' value={exerciseData.previous} unit='kg' />
      <Box prefix='max' value={maxWeight} unit='kg' />
      <Box prefix='avg' value={avgWeight.toFixed(2)} unit='kg' />
      {exerciseData.exercisePeriodData.length > 1 ? (
        <Chart
          label={exerciseData.exercise}
          exercisePeriodData={exerciseData.exercisePeriodData}
        />
      ) : (
        <p className='detailed-weight__no-grpah'>
          Not enough data to generate graph
        </p>
      )}
    </div>
  );
};

export default DetailedWeight;
