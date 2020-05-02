import React from 'react';
import WeightsViewItem from '../WeightsViewItem';
import './style.scss';

const WeightsView = ({ weights, revertWeight, removeWeight }) => {
  let userWeights = [];
  for (let key in weights) {
    userWeights.push(weights[key]);
  }

  return (
    <>
      <h1 className='heading-1'>My Weights</h1>
      <div className='weights'>
        {userWeights.length > 0 ? (
          userWeights.map((weightItem) => (
            <WeightsViewItem
              key={weightItem.exercise}
              title={weightItem.exercise}
              currentWeight={weightItem.current}
              lastWeight={weightItem.previous}
              onRevert={revertWeight}
              onRemove={removeWeight}
              disable={weightItem.data.length < 2}
            />
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>
            You didn't add any weights... Start adding now!
          </p>
        )}
      </div>
    </>
  );
};

export default WeightsView;
