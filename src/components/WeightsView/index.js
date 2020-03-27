import React, { useContext } from 'react';
import WeightsViewItem from '../WeightsViewItem';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const WeightsView = () => {
  const { user } = useContext(UserContext);
  const { weights: userWeightsFromCtx } = user || {};

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
