import React from 'react';

const WeightsViewItem = ({ title, currentWeight, lastWeight }) => {
  return (
    <div className='weight-view'>
      <div className='weight-view__content'>
        <h2 className='weight-view__title'>{title}</h2>
        <div className='weight-view__data weight-view__data--current'>
          <p className='weight-view__value'>{currentWeight}Kg</p>
          <p>current</p>
        </div>
        <div className='weight-view__data'>
          <p className='weight-view__value'>
            {lastWeight === 0 ? 'N/A' : lastWeight}
          </p>
          <p>previous</p>
        </div>
      </div>
      <button className='btn'>View data</button>
    </div>
  );
};

export default WeightsViewItem;
