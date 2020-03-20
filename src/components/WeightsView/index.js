import React, { useContext } from 'react';
import WeightsViewItem from '../WeightsViewItem';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const WeightsView = () => {
  const { state } = useContext(UserContext);
  const { weights: userWeightsFromCtx } = state;

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
      <div className='weights'>
        <h1>My Weights</h1>
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
