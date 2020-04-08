import React, { useContext } from 'react';
import WeightsViewItem from '../WeightsViewItem';
import './style.scss';

const WeightsView = () => {
  const userWeightsFromCtx = {
    TBD: {
      current: 5,
      last: 3,
    },
  };

  let userWeights = [];
  for (let key in userWeightsFromCtx) {
    const { last, current } = userWeightsFromCtx[key];
    userWeights.push(
      <WeightsViewItem
        key={key}
        title={key}
        currentWeight={current}
        lastWeight={last}
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
