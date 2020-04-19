import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ChangeInPercentage from '../ChangeInPercentage';

const style = {
  textDecoration: 'none',
  textAlign: 'center',
};

const WeightsViewItem = ({
  title,
  currentWeight,
  lastWeight,
  onRevert,
  onRemove,
  disable,
}) => {
  const { url } = useRouteMatch();

  const handleOnRevert = () => {
    onRevert(title);
  };

  const handleRemove = () => {
    onRemove(title);
  };

  return (
    <div className='weight-view'>
      <h2 className='weight-view__title'>{title}</h2>
      <span onClick={handleRemove} className='weight-view__close'>
        &times;
      </span>
      <p className='weight-view__time-text'>Current</p>
      <p className='weight-view__data'>{currentWeight}kg</p>
      <p className='weight-view__time-text'>Previous</p>
      <p className='weight-view__data'>
        {lastWeight === 0 ? 'N/A' : `${lastWeight}kg`}
      </p>
      <p className='weight-view__time-text'>Change</p>
      <ChangeInPercentage current={currentWeight} previous={lastWeight} />
      <Link to={`${url}/weights/${title}`} className='btn' style={style}>
        View data
      </Link>
      <button
        onClick={handleOnRevert}
        className='btn btn--revert'
        style={style}
        disabled={disable}
      >
        Revert
      </button>
    </div>
  );
};

export default WeightsViewItem;
