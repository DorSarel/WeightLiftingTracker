import React from 'react';
import Icons from '../../assets/sprite.svg';
import PropTypes from 'prop-types';

const UserInfoItem = ({ label, value, previous, unit = '' }) => {
  let wrapperClass = 'user-info__change';
  let iconTriangleDirection = 'up';
  let changeInPercentage = 0;
  if (!previous) {
    wrapperClass += ' user-info__change--hidden';
  } else {
    if (previous > value) iconTriangleDirection = 'down';
    changeInPercentage = Math.abs(
      100 - (100 * parseFloat(value)) / parseFloat(previous)
    );
  }

  return (
    <div className='user-info__item'>
      <p className='user-info__value'>{`${value}${unit}`}</p>
      <p className='user-info__key'>{label}</p>
      <div className={wrapperClass}>
        <svg className='user-info__icon'>
          <use xlinkHref={`${Icons}#icon-triangle-${iconTriangleDirection}`} />
        </svg>
        <p className='user-info__percentage'>
          {changeInPercentage.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

UserInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  previous: PropTypes.any,
  unit: PropTypes.string,
};

export default UserInfoItem;
