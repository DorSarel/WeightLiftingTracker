import React, { useContext } from 'react';
import WeightsViewItem from '../WeightsViewItem';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const WeightsView = () => {
  const { state } = useContext(UserContext);
  const { weights: userWeightsFromCtx } = state;

  let userWeights = [];

  return (
    <>
      <div className='weights'>
        <h1>My Weights</h1>
        <WeightsViewItem />
        <WeightsViewItem />
        <WeightsViewItem />
        <WeightsViewItem />
        {/* {userWeights.length > 0 ? (
          userWeights
        ) : (
          <p>You didn`t add any weights... Start adding now!</p>
        )} */}
      </div>
    </>
  );
};

export default WeightsView;
