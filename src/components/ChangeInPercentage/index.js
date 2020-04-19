import React from 'react';
import PropTypes from 'prop-types';
import Icons from '../../assets/sprite.svg';
import './style.scss';

const ChangeInPercentage = ({ current, previous = undefined }) => {
  let wrapperClass = 'change';
  let iconTriangleDirection = 'up';
  let changeInPercentage = 0;
  if (!previous) {
    wrapperClass += ' change--hidden';
  } else {
    if (previous > current) iconTriangleDirection = 'down';
    changeInPercentage = Math.abs(
      100 - (100 * parseFloat(current)) / parseFloat(previous)
    );
  }

  return (
    <div className={wrapperClass}>
      <svg className='change__icon'>
        <use xlinkHref={`${Icons}#icon-triangle-${iconTriangleDirection}`} />
      </svg>
      <p className='change__percentage'>{changeInPercentage.toFixed(2)}%</p>
    </div>
  );
};

ChangeInPercentage.propTypes = {
  current: PropTypes.number.isRequired,
};

export default ChangeInPercentage;
