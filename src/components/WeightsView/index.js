import React, { useContext } from 'react';
import WeightsViewItem from '../WeightsViewItem';
import './style.scss';

const WeightsView = ({ weights }) => {
  let userWeights = [];
  for (let key in weights) {
    const { previous, current } = weights[key];
    userWeights.push(
      <WeightsViewItem
        key={key}
        title={key}
        currentWeight={current}
        lastWeight={previous}
      />
    );
  }

  return (
    <>
      <h1 className='heading-1'>My Weights</h1>
      <div className='weights'>
        {userWeights.length > 0 ? (
          userWeights
        ) : (
          <p>You didn`t add any weights... Start adding now!</p>
        )}
      </div>
    </>
  );
};

export default WeightsView;
