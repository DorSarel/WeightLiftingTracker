import React from 'react';
import DataBox from '../DataBox/DataBox';
import Chart from '../Chart';
import Table from '../Table';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMaxValue, getAvgValue, sortObjectsByDate } from '../../utils/utils';
import './style.scss';

const DetailedWeight = () => {
  const { exercise } = useParams();
  const exerciseData = useSelector(({ userWeights }) => userWeights[exercise]);
  const maxWeight = getMaxValue(exerciseData.exercisePeriodData);
  const avgWeight = getAvgValue(exerciseData.exercisePeriodData);

  const dataSetReversedArray = exerciseData.exercisePeriodData.sort(
    sortObjectsByDate
  );

  return (
    <div className='detailed-weight'>
      <h2 className='detailed-weight__title'>{exerciseData.exercise}</h2>
      <DataBox
        prefix='current'
        value={parseFloat(exerciseData.current)}
        unit='kg'
        additionlClass='detailed-weight__grid-span'
      />
      <DataBox
        prefix='previous'
        value={parseFloat(exerciseData.previous)}
        unit='kg'
        additionlClass='detailed-weight__grid-span'
      />
      <DataBox
        prefix='max'
        value={parseFloat(maxWeight)}
        unit='kg'
        additionlClass='detailed-weight__grid-span'
      />
      <DataBox
        prefix='avg'
        value={parseFloat(avgWeight.toFixed(2))}
        unit='kg'
        additionlClass='detailed-weight__grid-span'
      />
      {exerciseData.exercisePeriodData.length > 1 ? (
        <div className='detailed-weight__chart'>
          <Chart
            label={exerciseData.exercise}
            exercisePeriodData={exerciseData.exercisePeriodData}
          />
        </div>
      ) : (
        <p className='detailed-weight__no-grpah'>
          Not enough data to generate graph
        </p>
      )}
      <div className='detailed-weight__table'>
        <Table dataList={dataSetReversedArray} />
      </div>
    </div>
  );
};

export default DetailedWeight;
