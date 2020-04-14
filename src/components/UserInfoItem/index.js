import React from 'react';
import Icons from '../../assets/sprite.svg';
import PropTypes from 'prop-types';

const UserInfoItem = ({ label, value, unit = '' }) => {
  return (
    <div className='user-info__item'>
      <div className='user-info__main'>
        <p className='user-info__value'>{`${value}${unit}`}</p>
        <p className='user-info__key'>{label}</p>
      </div>
      <svg className='user-info__icon'>
        <use xlinkHref={`${Icons}#icon-line-graph`} />
      </svg>
    </div>
  );
};

UserInfoItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
};

export default UserInfoItem;
