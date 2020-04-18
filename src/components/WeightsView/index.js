import React from 'react';
import WeightsViewItem from '../WeightsViewItem';
import './style.scss';

const WeightsView = ({ weights, revertWeight }) => {
  let userWeights = [];
  for (let key in weights) {
    const { previous, current } = weights[key];
    userWeights.push(
      <WeightsViewItem
        key={key}
        title={key}
        currentWeight={current}
        lastWeight={previous}
        onRevert={revertWeight}
        disable={weights[key].exercisePeriodData.length < 3}
      />
    );
    console.log(key, weights[key].exercisePeriodData.length < 3);
  }

  return (
    <>
      <h1 className='heading-1'>My Weights</h1>
      <div className='weights'>
        {userWeights.length > 0 ? (
          userWeights
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>
            You didn`t add any weights... Start adding now!
          </p>
        )}
      </div>
    </>
  );
};

export default WeightsView;
