import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const style = {
  textDecoration: 'none',
  textAlign: 'center',
};

const WeightsViewItem = ({ title, currentWeight, lastWeight }) => {
  const { url } = useRouteMatch();
  return (
    <div className='weight-view'>
      <div className='weight-view__content'>
        <h2 className='weight-view__title'>{title}</h2>
        <div className='weight-view__weights'>
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
      </div>
      <Link to={`${url}/weights/${title}`} className='btn' style={style}>
        View data
      </Link>
    </div>
  );
};

export default WeightsViewItem;
